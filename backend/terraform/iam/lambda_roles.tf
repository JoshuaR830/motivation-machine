data "aws_iam_policy_document" "lambda_assume_role" {
  statement {
    effect = "Allow"

    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

data "aws_iam_policy_document" "lambda_logging_policy_document" {
  statement {
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]

    effect = "Allow"

    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "lambda_logging_policy" {
  name   = "lambda_logging_policy"
  role   = aws_iam_role.motivation_test_lambda_role.name
  policy = data.aws_iam_policy_document.lambda_logging_policy_document.json
}

resource "aws_iam_role" "motivation_test_lambda_role" {
  name               = "motivation-test-lambda-role"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json
}