# Creating Cloudfront Identity
resource "aws_cloudfront_origin_access_identity" "cloudfront_identity" {
  comment = "Cloude Resume Cloudfront identity"
}

resource "aws_cloudfront_distribution" "s3_distribution" {

  origin {
    domain_name = aws_s3_bucket.cloud_resume.bucket_regional_domain_name
    origin_id   = "my_website_s3_origin"
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.cloudfront_identity.cloudfront_access_identity_path

    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  comment             = "cloud resume cloudfront"


  default_cache_behavior {
    target_origin_id = "my_website_s3_origin"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}