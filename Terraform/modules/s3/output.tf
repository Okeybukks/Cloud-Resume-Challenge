output s3_bucket {
  value       = aws_s3_bucket.cloud-resume
  description = "s3 bucket"
}

output s3_bucket_id {
  value       = aws_s3_bucket.cloud-resume.id
  description = "s3 bucket"
}
