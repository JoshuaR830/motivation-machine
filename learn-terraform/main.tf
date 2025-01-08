terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.38.0"
    }
  }

  required_version = ">= 1.2.0"
}


provider "aws" {
  region = "eu-west-2"
}

resource "null_resource" "build_lambda" {
  provisioner "local-exec" {
    command     = <<EOT
        dotnet restore ../LearnLambdaAnnotations/src/LearnLambdaAnnotations/LearnLambdaAnnotations.csproj
        dotnet publish ../LearnLambdaAnnotations/src/LearnLambdaAnnotations/LearnLambdaAnnotations.csproj -c Release -r linux-x64 -o ../LearnLambdaAnnotations/src/publish
    EOT
    interpreter = ["PowerShell", "-Command"]
  }
  triggers = {
    always_run = "${timestamp()}"
  }
}

data "archive_file" "learn_lambda_annotations_file" {
  type        = "zip"
  source_dir  = "../LearnLambdaAnnotations/src/publish"
  output_path = "learn_lambda_annotations.zip"
  depends_on  = [null_resource.build_lambda]
}

data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

data "aws_iam_policy_document" "iam_learn_lambda_annotations_execution" {
  statement {
    effect = "Allow"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]

    resources = ["arn:aws:logs:*:*:*"]
  }
}

resource "aws_iam_role" "iam_learn_lambda_annotations" {
  name               = "iam_learn_lambda_annotations"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json

  inline_policy {
    name   = "iam_learn_lambda_annotations_execution"
    policy = data.aws_iam_policy_document.iam_learn_lambda_annotations_execution.json
  }
}

resource "aws_lambda_function" "learn_lambda_annotations" {
  filename      = "learn_lambda_annotations.zip"
  function_name = "LearnLambdaAnnotations"
  role          = aws_iam_role.iam_learn_lambda_annotations.arn
  handler       = "LearnLambdaAnnotations::LearnLambdaAnnotations.Functions_Add_Generated::Add"

  source_code_hash = data.archive_file.learn_lambda_annotations_file.output_base64sha256

  runtime = "dotnet8"

  depends_on = [data.archive_file.learn_lambda_annotations_file]
}

resource "aws_lambda_function" "test_lambda_annotations" {
  filename      = "learn_lambda_annotations.zip"
  function_name = "TestLambdaAnnotations"
  role          = aws_iam_role.iam_learn_lambda_annotations.arn
  handler       = "LearnLambdaAnnotations::LearnLambdaAnnotations.Functions_TestFunction_Generated::TestFunction"

  source_code_hash = data.archive_file.learn_lambda_annotations_file.output_base64sha256

  runtime = "dotnet8"

  depends_on = [data.archive_file.learn_lambda_annotations_file]
}

resource "aws_lambda_function_url" "learn_lambda_annotations_url" {
  function_name = aws_lambda_function.learn_lambda_annotations.function_name
  authorization_type = "NONE"
}