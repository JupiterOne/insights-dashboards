export const CLOUD = {
  id: "cloud",
  title: "Cloud",
  integrationsNames: ["aws", "google_cloud", "azure"],
};

export const VULNERABILITY_SCANNER = {
  id: "vulnerability-scanner",
  title: "Vulnerability Scanner",
  integrationsNames: ["qualys", "rapid7-insight", "tenable-cloud"],
};

export const DEVICE_MANAGEMENT = {
  id: "device-management",
  title: "Device Management",
  integrationsNames: [
    "addigy",
    "airwatch",
    "automox",
    "device42",
    "jamf",
    "fleetdm",
    "kandji",
    "microsoft-365",
    "simplemdm",
    "tanium",
    "snipe-it",
  ],
};

export const CODE_SCANNERS = {
  id: "code-scanners",
  title: "Code Scanners",
  integrationsNames: ["veracode", "snyk"],
};

export const ENDPOINT_AGENTS = {
  id: "endpoint-agents",
  title: "Endpoint Agents",
  integrationsNames: [
    "cbdefense",
    "cisco_amp",
    "sentinelone",
    "crowdstrike",
    "malwarebytes",
    "defender-endpoint",
    "palo-alto",
    "trend-vision-one",
    "sophos",
  ],
};

export const CODE_MANAGEMENT = {
  id: "code-management",
  title: "Code Management",
  integrationsNames: ["github", "gitlab", "bitbucket", "npm", "artifactory"],
};

export const IDENTITY_AND_ACCESS = {
  id: "identity-and-access",
  title: "Identity and Access",
  integrationsNames: ["okta", "jumpcloud", "google", "azure"],
};

export const TRAINING = {
  id: "training",
  title: "Training",
  integrationsNames: ["knowbe4"],
};

export const retrievePrerequisitesGroup = (groupId: string) => {
  switch (groupId) {
    case "cloud":
      return CLOUD;
    case "vulnerability-scanner":
      return VULNERABILITY_SCANNER;
    case "device-management":
      return DEVICE_MANAGEMENT;
    case "code-scanners":
      return CODE_SCANNERS;
    case "endpoint-agents":
      return ENDPOINT_AGENTS;
    case "code-management":
      return CODE_MANAGEMENT;
    case "identity-and-access":
      return IDENTITY_AND_ACCESS;
    case "training":
      return TRAINING;
    default:
      return null;
  }
};
export interface Prerequisites {
  groups?: {
    customGroups?: {
      category: string;
      integrationsNames: string[];
    }[];
    groupIds?: string[];
  }[];
  supportedUseCase: string;
}
