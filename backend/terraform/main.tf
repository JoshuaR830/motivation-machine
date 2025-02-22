terraform {
    required_providers {
      aws = {
        source  = "hashicorp/aws"
        version = "~> 5.88"
      }
    }

    required_version = ">= 1.10.5"
}

module "iam" {
    source = "./iam"
}

module "infrastructure" {
    source = "./infrastructure"

    motivation_test_lambda_role_arn = module.iam.motivation_test_lambda_role_arn
}

provider "aws" {
    region = "eu-west-2"
}