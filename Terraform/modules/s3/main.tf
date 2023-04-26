resource "aws_s3_bucket" "cloud-resume" {
  bucket = "achebeh-bucket"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}

# resource "aws_s3_bucket_public_access_block" "public-bucket-block" {
#   bucket = aws_s3_bucket.cloud-resume.id

#   block_public_acls       = false
#   block_public_policy     = false
#   ignore_public_acls      = false
#   restrict_public_buckets = false
# }

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
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "PublicReadGetObject"
        Effect = "Allow"
        Principal = "*"
        Action = [
          "s3:GetObject"
        ]
        Resource = [
          "${aws_s3_bucket.cloud-resume.arn}/*"
        ]
      }
    ]
  })
}

resource "aws_s3_object" "static-files" {
    for_each = fileset("../build/", "**/*")
    bucket = aws_s3_bucket.cloud-resume.id
    key = each.value
    source = "../build/${each.value}"
    etag = filemd5("../build/${each.value}")
}