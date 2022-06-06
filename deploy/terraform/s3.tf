resource "aws_s3_bucket" "insights_dashboards" {
  bucket = "${var.deploy_config.environment}-insights-dashboards"
  acl    = "private"
  tags = {
    Project        = var.deploy_config.project
    Classification = "internal"
    Description    = "bucket that copies the source from insights-dashboards in GitHub"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm     = "AES256"
      }
    }
  }
}
