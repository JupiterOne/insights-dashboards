# insights-dashboards

This repo contains a set of sample dashboards in JSON format can be easily
imported into JupiterOne Insights app.

List of dashboards:

- [AWS Accounts](src/boards/aws-accounts/)
- [AWS Cost Analysis](src/boards/aws-cost-analysis)
- [AWS IAM](src/boards/aws-iam/)
- [AWS Resources](src/boards/aws-resources/)
- [AWS S3 Security](src/boards/aws-s3-security/)
- [Azure DataStore Resources](src/boards/azure-datastore-security/)
- [Azure Resources](src/boards/azure-resources/)
- [Critical Asset Attack Surface](src/boards/critical-attack-surface)
- [Data Breach Cost](src/boards/data-breach-cost/)
- [Data Protection](src/boards/data-protection/)
- [Development](src/boards/development/)
- [GCP Compute Projects and Instances](src/boards/gcp-compute/)
- [GCP IAM](src/boards/gcp-iam/)
- [GDPR Data Locations](src/boards/gdpr-data-locations/)
- [Google Workspace](src/boards/google-workspace/)
- [GitHub Insights](src/boards/github-insights)
- [High Risk Assets](src/boards/high-risk-assets/)
- [IR - Cloud Instance & Workload Analysis](src/boards/cloud-instance-workload-analysis)
- [IR - User Endpoint Blast Radius](src/boards/user-endpoint-blast-radius/)
- [Jamf & CrowdStrike Sensor Activity](src/boards/jamf-crowdstrike/)
- [Jira Insights](src/boards/jira-insights/)
- [Network Security](src/boards/network-security/)
- [Okta User Management](src/boards/okta-user-management/)
- [Resource Classification](src/boards/resource-classification/)
- [Risk Register](src/boards/risk-register/)
- [Software Package Dependencies and Licenses](src/boards/code-deps-licenses/)
- [Team Growth](src/boards/team-growth/)
- [Team, Manager and Direct Reports](src/boards/team-manager-direct-reports/)
- [User Access](src/boards/user-access/)
- [User Endpoints](src/boards/user-endpoints/)
- [User Training](src/boards/user-training/)
- [Vendor Management](src/boards/vendor-mgmt/)
- [Vulnerability Reporting](src/boards/vuln-reporting/)

## Importing a dashboard to your J1 account

To import a dashboard template to your own JupiterOne account, simply
add a new dashboard in your Insights app, and upload (or drag-n-drop)
the desired `board.json` file to your new board.

![j1-insights-upload](j1-insights-upload.png)

## Contributing your dashboard template

We welcome and appreciate your contribution to this repository of 
dashboard templates. You can download the dashboard JSON using the
download button near the top right of your selected Insights board
in the JupiterOne web app, and make a pull request to this repo.
Alternatively, feel free to share that JSON directly to our support
team or in the `jupiterone-community` Slack.

The JSON download only contains the widget definitions and layout.
It does **NOT** contain any of your actual data.
