import * as awsAccountBoard from "./boards/aws-accounts/board.json";
import * as awsIamBoard from "./boards/aws-iam/board.json";
import * as awsS3Security from "./boards/aws-s3-security/board.json";
import * as codeDepsBoard from "./boards/code-deps-licenses/board.json";
import * as dataBreachCostBoard from "./boards/data-breach-cost/board.json";
import * as dataProtectionBoard from "./boards/data-protection/board.json";
import * as developmentBoard from "./boards/development/board.json";
import * as gdprDataLocationsBoard from "./boards/gdprDataLocations/board.json";
import * as highRiskAssetsBoard from "./boards/high-risk-assets/board.json";
import * as resourceClassificationBoard from "./boards/resource-classification/board.json";
import * as riskRegisterBoard from "./boards/risk-register/board.json";
import * as teamGrowthBoard from "./boards/team-growth/board.json";
import * as userAccessBoard from "./boards/user-access/board.json";
import * as userEndpointsBoard from "./boards/user-endpoints/board.json";
import * as userTrainingBoard from "./boards/user-training/board.json";
import * as vendorMgmtBoard from "./boards/vendor-mgmt/board.json";
import * as vulnReportingBoard from "./boards/vuln-reporting/board.json";

export const InsightsDashboards = {
  "AWS Accounts": awsAccountBoard,
  "AWS IAM": awsIamBoard,
  "AWS S3 Security": awsS3Security,
  "Software Dependencies and Licenses": codeDepsBoard,
  "Data Brach Cost": dataBreachCostBoard,
  "Data Protection": dataProtectionBoard,
  "Secure Development": developmentBoard,
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
