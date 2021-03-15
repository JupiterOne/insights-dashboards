import awsAccountBoard from "./boards/aws-accounts/board.json";
import awsIamBoard from "./boards/aws-iam/board.json";
import awsResourcesBoard from "./boards/aws-resources/board.json";
import awsS3Security from "./boards/aws-s3-security/board.json";
import codeDepsBoard from "./boards/code-deps-licenses/board.json";
import dataBreachCostBoard from "./boards/data-breach-cost/board.json";
import dataProtectionBoard from "./boards/data-protection/board.json";
import developmentBoard from "./boards/development/board.json";
import firewallBoard from "./boards/firewall/board.json";
import gdprDataLocationsBoard from "./boards/gdpr-data-locations/board.json";
import highRiskAssetsBoard from "./boards/high-risk-assets/board.json";
import resourceClassificationBoard from "./boards/resource-classification/board.json";
import riskRegisterBoard from "./boards/risk-register/board.json";
import teamGrowthBoard from "./boards/team-growth/board.json";
import userAccessBoard from "./boards/user-access/board.json";
import userEndpointsBoard from "./boards/user-endpoints/board.json";
import userTrainingBoard from "./boards/user-training/board.json";
import vendorMgmtBoard from "./boards/vendor-mgmt/board.json";
import vulnReportingBoard from "./boards/vuln-reporting/board.json";

const InsightsDashboards = {
  "AWS Accounts": awsAccountBoard,
  "AWS IAM": awsIamBoard,
  "AWS Resources": awsResourcesBoard,
  "AWS S3 Security": awsS3Security,
  "Software Dependencies and Licenses": codeDepsBoard,
  "Data Brach Cost": dataBreachCostBoard,
  "Data Protection": dataProtectionBoard,
  "Secure Development": developmentBoard,
  "Firewall Rules Matrix": firewallBoard,
  "GDPR Data Locations": gdprDataLocationsBoard,
  "High Risk Assets": highRiskAssetsBoard,
  "Resource Classification": resourceClassificationBoard,
  "Risk Register": riskRegisterBoard,
  "Team Growth": teamGrowthBoard,
  "User Access": userAccessBoard,
  "User Endpoints": userEndpointsBoard,
  "User Training": userTrainingBoard,
  "Vendor Management": vendorMgmtBoard,
  "Vulnerability Reporting": vulnReportingBoard,
};

export default InsightsDashboards;
