terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
}

# S3 RESOURCE
module "s3" {
  source = "./modules/s3"
}

# CLOUDFRONT RESOURCE
# module "cloudfront"{
#   source = "./modules/cloudfront"
#   domain_name = module.s3.s3_bucket
#   depends_on = [module.s3]
#   s3_bucket_id = module.s3.s3_bucket_id
# }