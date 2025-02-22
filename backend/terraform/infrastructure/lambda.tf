data "archive_file" "motivation_machine_zip" {
  type        = "zip"
  source_dir  = "../src/motivation_machine"
  output_path = "../src/motivation_machine.zip"
}

resource "aws_lambda_function" "motivation_test_function" {
  function_name = "motivation_test_function"
  role          = var.motivation_test_lambda_role_arn
  runtime       = "provided.al2023"
  architectures = [ "arm64" ]
  handler       = "MotivationMachineFunctions"
  filename      = "../src/motivation_machine.zip"

  environment {
    variables = {
      ANNOTATIONS_HANDLER: "HelloWorld"
    }
  }

  source_code_hash = data.archive_file.motivation_machine_zip.output_base64sha256

  depends_on = [data.archive_file.motivation_machine_zip]
}

resource "aws_lambda_function_url" "motivation_test_function_url" {
  function_name = aws_lambda_function.motivation_test_function.function_name
  authorization_type = "NONE"
}