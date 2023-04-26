resource "aws_cloudfront_distribution" "s3_distribution" {

  origin {
    domain_name              = var.domain_name.bucket_regional_domain_name
    origin_id                = "my-website-s3-origin"
  }

  enabled             = true
  is_ipv6_enabled     = true


  default_cache_behavior {
    target_origin_id = "my-website-s3-origin"
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