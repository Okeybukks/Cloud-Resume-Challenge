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

resource "aws_s3_bucket" "cloud-resume" {
  bucket = "achebeh-resume-bucket"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_public_access_block" "public-bucket-block" {
  bucket = aws_s3_bucket.cloud-resume.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "s3-web-config" {
  bucket = aws_s3_bucket.cloud-resume.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }

}

resource "aws_s3_bucket_policy" "allow_access_to_objects" {
  bucket = aws_s3_bucket.cloud-resume.id
  policy = data.aws_iam_policy_document.allow_access_to_objects.json
}

data "aws_iam_policy_document" "aallow_access_to_objects" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    effect = "Allow"

    actions = [
      "s3:GetObject",
    ]

    resources = [
      aws_s3_bucket.example.arn,
      "${aws_s3_bucket.achebeh-resume-bucket.arn}/*",
    ]
  }
}