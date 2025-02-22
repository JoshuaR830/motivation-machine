resource "null_resource" "build_motivation_machine_function" {
  provisioner "local-exec" {
    command     = <<EOT
        dotnet restore ../src/MotivationMachineFunctions
        dotnet publish ../src/MotivationMachineFunctions -c Release -o ../src/motivation_machine -r win-x64 --self-contained
      EOT
    interpreter = ["PowerShell", "-Command"]
  }
  triggers = {
    always_run = "${timestamp()}"
  }
}

data "archive_file" "motivation_machine_zip" {
  type        = "zip"
  source_dir  = "../src/motivation_machine"
  output_path = "../src/motivation_machine.zip"

  depends_on = [null_resource.build_motivation_machine_function]
}

resource "aws_lambda_function" "motivation_test_function" {
  function_name = "motivation_test_function"
  role          = var.motivation_test_lambda_role_arn
  runtime       = "dotnet8"
  handler       = "MotivationMachineFunctions"
  filename      = "../src/motivation_machine.zip"

  environment {
    variables = {
      "ANNOTATIONS_HANDLER": "HelloWorld"
    }
  }

  source_code_hash = data.archive_file.motivation_machine_zip.output_base64sha256

  depends_on = [data.archive_file.motivation_machine_zip]
}

resource "aws_lambda_function_url" "motivation_test_function_url" {
  function_name = aws_lambda_function.motivation_test_function.function_name
  authorization_type = "NONE"
}