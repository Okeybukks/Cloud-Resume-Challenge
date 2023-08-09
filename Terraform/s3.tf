resource "aws_s3_bucket" "cloud_resume" {
  bucket = "achebeh-bucket"

  tags = {
    Name        = "Cloud Resume bucket"
  }
}

# AWS Puclic Access Configuration for create S3 Bucket
resource "aws_s3_bucket_public_access_block" "cloud_public_access" {
  bucket = aws_s3_bucket.cloud_resume.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# AWS Bucket ownership control Creation
resource "aws_s3_bucket_ownership_controls" "cloud_control" {
  bucket = aws_s3_bucket.cloud_resume.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# Attaching ownership control and public access configurration on created bucket
resource "aws_s3_bucket_acl" "cloud_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.cloud_control,
  ]

  bucket = aws_s3_bucket.cloud_resume.id
  acl    = "private"
}


resource "aws_s3_bucket_policy" "allow_cloudfront_access_to_bucket" {
  bucket = aws_s3_bucket.cloud_resume.id
  policy = data.aws_iam_policy_document.allow_access_to_bucket.json
}

data "aws_iam_policy_document" "allow_access_to_bucket" {
  statement {
    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.cloudfront_identity.iam_arn]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.cloud_resume.arn}/*",
    ]
  }
}