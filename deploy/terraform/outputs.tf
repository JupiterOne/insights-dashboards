output "s3_bucket_name" {
  value = aws_s3_bucket.insights_dashboards.id
}

output "s3_bucket_arn" {
  value = aws_s3_bucket.insights_dashboards.arn
}
