import awsAccount from "./boards/aws-accounts/board.json";
import awsCostAnalysis from "./boards/aws-cost-analysis/board.json";
import awsIam from "./boards/aws-iam/board.json";
import awsResources from "./boards/aws-resources/board.json";
import awsS3Security from "./boards/aws-s3-security/board.json";
import azureDataStoreSecurity from "./boards/azure-datastore-security/board.json";
import azureResources from "./boards/azure-resources/board.json";
import cloudInstanceWorkloadAnalysis from "./boards/cloud-instance-workload-analysis/board.json";
import softwareDependenciesAndLicenses from "./boards/software-dependencies-and-licenses/board.json";
import criticalAttackSurface from "./boards/critical-attack-surface/board.json";
import dataBreachCost from "./boards/data-breach-cost/board.json";
import dataProtection from "./boards/data-protection/board.json";
import deviceManagement from './boards/device-management/board.json';
import secureDevelopment from "./boards/secure-development/board.json";
import firewall from "./boards/network-security/board.json";
import gcpCompute from "./boards/gcp-compute/board.json";
import gcpIam from "./boards/gcp-iam/board.json";
import gdprDataLocations from "./boards/gdpr-data-locations/board.json";
import githubInsights from "./boards/github-insights/board.json";
import googleWorkspace from "./boards/google-workspace/board.json";
import highRiskAssets from "./boards/high-risk-assets/board.json";
import jamfCrowdStrike from "./boards/jamf-crowdstrike/board.json";
import jiraInsights from "./boards/jira-insights/board.json";
import kubernetesSecurityContext from "./boards/kubernetes-security-context/board.json";
import oktaUserManagement from "./boards/okta-user-management/board.json";
import resourceClassification from "./boards/resource-classification/board.json";
import riskRegister from "./boards/risk-register/board.json";
import teamGrowth from "./boards/team-growth/board.json";
import teamManagerDirectReports from "./boards/team-manager-direct-reports/board.json";
import toxicCombinations from "./boards/toxic-combinations/board.json";
import userAccess from "./boards/user-access/board.json";
import userEndpointBlastRadius from "./boards/user-endpoint-blast-radius/board.json";
import userEndpoints from "./boards/user-endpoints/board.json";
import userTraining from "./boards/user-training/board.json";
import vendorMgmt from "./boards/vendor-mgmt/board.json";
import vulnReporting from "./boards/vuln-reporting/board.json";
import povInsights from "./boards/pov-insights/board.json"

// All of these boards are available as templates for import when creating a new board in app
export const InsightsDashboards = {
  "AWS Accounts": awsAccount,
  "AWS Cost Analysis": awsCostAnalysis,
  "AWS IAM": awsIam,
  "AWS Resources": awsResources,
  "AWS S3 Security": awsS3Security,
  "Azure DataStore Security": azureDataStoreSecurity,
  "Azure Resources": azureResources,
  "Critical Asset Attack Surface": criticalAttackSurface,
  "CrowdStrike and JAMF Comparison": jamfCrowdStrike,
  "Data Breach Cost": dataBreachCost,
  "Data Protection": dataProtection,
  'Device Management': deviceManagement,
  "GCP Compute": gcpCompute,
  "GCP IAM": gcpIam,
  "GDPR Data Locations": gdprDataLocations,
  "GitHub Insights": githubInsights,
  "Google Workspace": googleWorkspace,
  "High Risk Assets": highRiskAssets,
  "IR - Cloud Instance Workload Analysis": cloudInstanceWorkloadAnalysis,
  "IR - User Endpoint Blast Radius": userEndpointBlastRadius,
  "Jira Insights": jiraInsights,
  "Kubernetes Security Context": kubernetesSecurityContext,
  "Network Access and Firewall Rules": firewall,
  "Okta User Management": oktaUserManagement,
  "Resource Classification": resourceClassification,
  "Risk Register": riskRegister,
  "Secure Development": secureDevelopment,
  "Software Dependencies and Licenses": softwareDependenciesAndLicenses,
  "Team / Peers, Manager and Direct Reports": teamManagerDirectReports,
  "Team Growth": teamGrowth,
  "Toxic Combinations": toxicCombinations,
  "User Access": userAccess,
  "User Endpoints": userEndpoints,
  "User Training": userTraining,
  "Vendor Management": vendorMgmt,
  "Vulnerability Reporting": vulnReporting,
  "PoV Insights": povInsights,
};

export enum BoardCategory {
  FAVORITE = "FAVORITE",
  ASSETS_ATTACK_SURFACE = "ASSETS_ATTACK_SURFACE", // "Assets & Attack Surface"
  CLOUD_POSTURE = "CLOUD_POSTURE", // "Cloud Posture"
  DATA_PROTECTION_PRIVACY = "DATA_PROTECTION_PRIVACY", // "Data Protection & Privacy"
  INCIDENT_RESPONSE = "INCIDENT_RESPONSE",
  SDLC_DEVSECOPS = "SDLC_DEVSECOPS", // "SDLC & DevSecOps"
  SOFTWARE_SUPPLY_CHAIN = "SOFTWARE_SUPPLY_CHAIN", // "Software Supply Chain Security"
  USERS_ACCESS = "USERS_ACCESS", // "Users & Access"
  VULNERABILITY_MANAGEMENT = "VULNERABILITY_MANAGEMENT",
}

export const BoardCategoryTitles = {
  [BoardCategory.FAVORITE]: "Favorites",
  [BoardCategory.ASSETS_ATTACK_SURFACE]: "Assets & Attack Surface",
  [BoardCategory.CLOUD_POSTURE]: "Cloud Posture",
  [BoardCategory.DATA_PROTECTION_PRIVACY]: "Data Protection & Privacy",
  [BoardCategory.INCIDENT_RESPONSE]: "Incident Response",
  [BoardCategory.SDLC_DEVSECOPS]: "SDLC & DevSecOps",
  [BoardCategory.SOFTWARE_SUPPLY_CHAIN]: "Software Supply Chain Security",
  [BoardCategory.USERS_ACCESS]: "Users & Access",
  [BoardCategory.VULNERABILITY_MANAGEMENT]: "Vulnerability Management",
};

// Boards here will be added as "J1 Managed Boards"
// Boards with categories will be displayed in their respective category by default
// An undefined category will just be displayed in the 'J1 Managed Dashboards' section
export const MANAGED_BOARDS = [
  {
    id: "high-risk-assets",
    name: "High Risk Assets",
    category: BoardCategory.ASSETS_ATTACK_SURFACE,
    ...highRiskAssets,
  },
  {
    id: "resource-classification",
    name: "Resource Classification",
    category: BoardCategory.ASSETS_ATTACK_SURFACE,
    ...resourceClassification,
  },
  {
    id: "firewall",
    name: "Network Access and Firewall Rules",
    category: BoardCategory.ASSETS_ATTACK_SURFACE,
    ...firewall,
  },
  {
    id: "device-management",
    name: "Device Management",
    category: BoardCategory.ASSETS_ATTACK_SURFACE,
    ...deviceManagement,
  },
  {
    id: "toxic-combinations",
    name: "Toxic Combinations",
    category: BoardCategory.ASSETS_ATTACK_SURFACE,
    ...toxicCombinations,
  },
  {
    id: "aws-accounts",
    name: "AWS Accounts",
    category: BoardCategory.CLOUD_POSTURE,
    ...awsAccount,
  },
  {
    id: "aws-cost-analysis",
    name: "AWS Cost Analysis",
    category: BoardCategory.CLOUD_POSTURE,
    ...awsCostAnalysis,
  },
  {
    id: "aws-iam",
    name: "AWS IAM",
    category: BoardCategory.CLOUD_POSTURE,
    ...awsIam,
  },
  {
    id: "aws-resources",
    name: "AWS Resources",
    category: BoardCategory.CLOUD_POSTURE,
    ...awsResources,
  },
  {
    id: "aws-s3-security",
    name: "AWS S3 Security",
    category: BoardCategory.CLOUD_POSTURE,
    ...awsS3Security,
  },
  {
    id: "azure-datastore-security",
    name: "Azure DataStore Security",
    category: BoardCategory.CLOUD_POSTURE,
    ...azureDataStoreSecurity,
  },
  {
    id: "azure-resources",
    name: "Azure Resources",
    category: BoardCategory.CLOUD_POSTURE,
    ...azureResources,
  },
  {
    id: "gcp-compute",
    name: "GCP Compute",
    category: BoardCategory.CLOUD_POSTURE,
    ...gcpCompute,
  },
  {
    id: "gcp-iam",
    name: "GCP IAM",
    category: BoardCategory.CLOUD_POSTURE,
    ...gcpIam,
  },
  {
    id: "data-breach-cost",
    name: "Data Breach Cost",
    category: BoardCategory.DATA_PROTECTION_PRIVACY,
    ...dataBreachCost,
  },
  {
    id: "data-protection",
    name: "Data Protection",
    category: BoardCategory.DATA_PROTECTION_PRIVACY,
    ...dataProtection,
  },
  {
    id: "gdpr-data-locations",
    name: "GDPR Data Locations",
    category: BoardCategory.DATA_PROTECTION_PRIVACY,
    ...gdprDataLocations,
  },
  {
    id: "ir-cloud-instance-workload-analysis",
    name: "Cloud Instance Workload Analysis",
    category: BoardCategory.INCIDENT_RESPONSE,
    ...cloudInstanceWorkloadAnalysis,
  },
  {
    id: "ir-user-endpoint-blast-radius",
    name: "User Endpoint Blast Radius",
    category: BoardCategory.INCIDENT_RESPONSE,
    ...userEndpointBlastRadius,
  },
  {
    id: "github-insights",
    name: "GitHub Insights",
    category: BoardCategory.SDLC_DEVSECOPS,
    ...githubInsights,
  },
  {
    id: "jira-insights",
    name: "Jira Insights",
    category: BoardCategory.SDLC_DEVSECOPS,
    ...jiraInsights,
  },
  {
    id: "secure-development",
    name: "Secure Development",
    category: BoardCategory.SDLC_DEVSECOPS,
    ...secureDevelopment,
  },
  {
    id: "software-dependencies-and-licenses",
    name: "Software Dependencies and Licenses",
    category: BoardCategory.SOFTWARE_SUPPLY_CHAIN,
    ...softwareDependenciesAndLicenses,
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    category: BoardCategory.USERS_ACCESS,
    ...googleWorkspace,
  },
  {
    id: "okta-user-management",
    name: "Okta User Management",
    category: BoardCategory.USERS_ACCESS,
    ...oktaUserManagement,
  },
  {
    id: "team-manager-direct-reports",
    name: "Team / Peers, Manager and Direct Reports",
    category: BoardCategory.USERS_ACCESS,
    ...teamManagerDirectReports,
  },
  {
    id: "user-access",
    name: "User Access",
    category: BoardCategory.USERS_ACCESS,
    ...userAccess,
  },
  {
    id: "user-endpoints",
    name: "User Endpoints",
    category: BoardCategory.USERS_ACCESS,
    ...userEndpoints,
  },
  {
    id: "user-training",
    name: "User Training",
    category: BoardCategory.USERS_ACCESS,
    ...userTraining,
  },
  {
    id: "vulnerability-reporting",
    name: "Vulnerability Reporting",
    category: BoardCategory.VULNERABILITY_MANAGEMENT,
    ...vulnReporting,
  },
  {
    id: "pov-insights",
    name: "PoV Insights",
    category: BoardCategory.FAVORITE,
    ...povInsights,
  },
];

export default InsightsDashboards;
