import awsAccount from "./boards/aws-accounts/board.json";
import awsIam from "./boards/aws-iam/board.json";
import awsResources from "./boards/aws-resources/board.json";
import awsS3Security from "./boards/aws-s3-security/board.json";
import codeDeps from "./boards/code-deps-licenses/board.json";
import dataBreachCost from "./boards/data-breach-cost/board.json";
import dataProtection from "./boards/data-protection/board.json";
import development from "./boards/development/board.json";
import firewall from "./boards/network-security/board.json";
import gdprDataLocations from "./developments/gdpr-data-locations/board.json";
import highRiskAssets from "./boards/high-risk-assets/board.json";
import resourceClassification from "./boards/resource-classification/board.json";
import riskRegister from "./boards/risk-register/board.json";
import teamGrowth from "./boards/team-growth/board.json";
import userAccess from "./boards/user-access/board.json";
import userEndpoints from "./boards/user-endpoints/board.json";
import userTraining from "./boards/user-training/board.json";
import vendorMgmt from "./boards/vendor-mgmt/board.json";
import vulnReporting from "./boards/vuln-reporting/board.json";
import gcpCompute from "./boards/gcp-compute/board.json";
import gcpIam from "./boards/gcp-iam/board.json";
import azureDataStoreSecurity from "./boards/azure-datastore-security/board.json";
import azureResources from "./boards/azure-resources/board.json";
import awsCostAnalysis from "./boards/aws-cost-analysis/board.json";
import cloudInstanceWorkloadAnalysis from "./boards/cloud-instance-workload-analysis/board.json";
import criticalAssetAttackSurface from "./boards/critical-asset-attack-surface/board.json";
import githubInsights from "./boards/github-insights/board.json";
import googleWorkspace from "./boards/google-workspace/board.json";
import jamfCrowdStrike from "./boards/jamf-crowdstrike/board.json";
import jiraInsights from "./boards/jira-insights/board.json";
import kubernetesSecurityContext from "./boards/kubernetes-security-context/board.json";
import oktaUserManagement from "./boards/okta-user-management/board.json";
import teamPeersManagersDirectReports from "./boards/team-peers-managers-direct-reports/board.json";
import userEndpointBlast from "./boards/user-endpoint-blast/board.json";

const InsightsDashboards = {
  "AWS Accounts": awsAccount,
  "AWS Cost Analysis": awsCostAnalysis,
  "AWS IAM": awsIam,
  "AWS Resources": awsResources,
  "AWS S3 Security": awsS3Security,
  "Azure DataStore Security": azureDataStoreSecurity,
  "Azure Resources": azureResources,
  "Cloud Instance Workload Anlysis": cloudInstanceWorkloadAnalysis,
  "Critical Asset Attack Surface": criticalAssetAttackSurface,
  "CrowdStrike and JAMF Comparison": jamfCrowdStrike,
  "Data Breach Cost": dataBreachCost,
  "Data Protection": dataProtection,
  "Network Security": firewall,
  "GCP Compute": gcpCompute,
  "GCP IAM": gcpIam,
  "GDPR Data Locations": gdprDataLocations,
  "GitHub Insights": githubInsights,
  "Google Workspace": googleWorkspace,
  "High Risk Assets": highRiskAssets,
  "Jira Insights": jiraInsights,
  "Kubernetes Security Context": kubernetesSecurityContext,
  "Okta User Management": oktaUserManagement,
  "Resource Classification": resourceClassification,
  "Risk Register": riskRegister,
  "Secure Development": development,
  "Software Dependencies and Licenses": codeDeps,
  "Team / Peers, Manager and Direct Reports": teamPeersManagersDirectReports,
  "Team Growth": teamGrowth,
  "User Access": userAccess,
  "User Endpoints": userEndpoints,
  "User Endpoint Blast Radius": userEndpointBlast,
  "User Training": userTraining,
  "Vendor Management": vendorMgmt,
  "Vulnerability Reporting": vulnReporting,
};

export default InsightsDashboards;
