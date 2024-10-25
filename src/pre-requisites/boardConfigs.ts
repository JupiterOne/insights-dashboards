import { Prerequisites } from "./config";

export const awsAccountsPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["aws"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows AWS master accounts, sub-accounts, as well as validated/unvalidated external accounts discovered by JupiterOne via analysis of IAM policies and trusts.",
};

export const awsCostAnalysisPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["aws"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Uses helpful queries for identifying resources that can result in increasing costs and attack surface within your AWS environment.",
};

export const awsIAMPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["aws"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows AWS IAM Groups, Users, Roles, and important access policy assignments.",
};

export const awsResourcesPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["aws"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows AWS resources like EC2, ENI, EBS, RDS and Lamba functions in your environment and their related metrics across these accounts.",
};

export const awsS3SecurityPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["aws"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Show several key configurations, metrics, and graphs related to AWS S3 security.",
};

export const azureDataStoreSecurityPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["azure"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows Azure container resources and encryption settings as well as logging options set on containers.",
};

export const azureResourcesPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["azure"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows Azure resources covering encryption settings, guest access, and resource access to key vaults.",
};

export const cloudInstanceWorloadAnalysisPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
  ],
  supportedUseCase:
    "* Is the workload/instance still active or online?\n* What are its configurations?\n* What resources are connected to it?\n* What else are in the same blast radius?\n* How is it connected to the Internet (external attack path)?\n* Who has admin/privileged access to it? - What data stores does it have access to?",
};

export const dataBreachCostPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
    {
      groupIds: ["vulnerability-scanner"],
    },
  ],
  supportedUseCase:
    "Shows sensitive data discovery findings from publicly accessible or unencrypted data stores, and use a formula to calculate the potential cost if based on the number of sensitive data records that could be exposed.",
};

export const dataProtectionPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
  ],
  supportedUseCase:
    "Shows DataStore distributions with key metrics on unclassified data, unencrypted data, and non-public data stores with public access.",
};

export const deviceAnomalyDetectionPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["device-management"],
    },
    {
      groupIds: ["endpoint-agents"],
    },
  ],
  supportedUseCase:
    "Shows insights produced by the anomaly detection system (powered by JupiterOne AI). The system scans the *unified_device* entities in your account, and uses advanced machine learning algorithms to detect anomalies in that data set.",
};

export const deviceManagementPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["device-management"],
    },
    {
      groupIds: ["endpoint-agents"],
    },
  ],
  supportedUseCase:
    "Shows Devices missing Host Agents, OS Type and Version Breakdowns, Encryption Status, and Devices with Problems.",
};

export const gcpComputePreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["google_cloud"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows important configurations related to GCP Compute Projects and Instances.",
};

export const gcpIAMPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud",
          integrationsNames: ["google_cloud"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows GCP IAM users, roles, service accounts, and important access privilege information.",
};

export const gdprDataLocationsPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
  ],
  supportedUseCase: "Shows data stores in the EU, US, and elsewhere.",
};

export const githubInsightsPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Code Management",
          integrationsNames: ["github"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows detailed information on GitHub accounts, reporting on user access, developer activity, collaborator details, insights on pull requests, and issue summaries by repo.",
};

export const googleWorkspacePreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Identity and Access",
          integrationsNames: ["google"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows various counts of both admin and non-admin users, third-party OAuth tokens and non-active super-admins. Additional widgets allow for Chrome version insight as well as notification of outdated/vulnerable versions of Chrome.",
};

export const highRiskAssetsPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
  ],
  supportedUseCase:
    "Shows vulnerability findings associated with production and internet-facing systems, non-public data stores with public access, and public data stores containing sensitive data.",
};

export const jiraInsightsPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Ticketing/Workflows",
          integrationsNames: ["jira"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows detailed information on Jira accounts, reporting on users, issues, and remediations.",
};

export const mongoDbInsightsPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Cloud Infrastructure",
          integrationsNames: ["mongodb"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Review all MongoDB production users, API keys, and projects that are in production.",
};

export const networkAccessAndFirewallRulesPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
  ],
  supportedUseCase:
    "This board contains several widgets:\n\n- A list of firewalls (e.g. network ACLs, security groups) allowing Internet access\n- A matrix table showing the ingress/egress access and allowed ports from/to an external network, including the internet\n- A matrix table showing the ingress/egress access and allowed ports between internal networks\n- A list of expired certificates\n- A list of DNS records not pointing to an internal resource\n- A list of domains/subdomains",
};

export const oktaUserManagementPreReq: Prerequisites = {
  groups: [
    {
      customGroups: [
        {
          category: "Identity and Access",
          integrationsNames: ["okta"],
        },
      ],
    },
  ],
  supportedUseCase:
    "Shows Okta users by current status, inactive users, and deprovisioned/inactive users with access to other accounts.",
};

export const resourceClassificationPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
  ],
  supportedUseCase:
    "Review all your DataStore and Host classifications across your cloud infrastructure.",
};

export const secureDevelopmentPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["code-management"],
    },
  ],
  supportedUseCase:
    "Shows a dynamically updating report of package dependencies in the software code repos and their corresponding licenses, which is helpful to produce an open-source report for auditing.\n\nThe dashboard can be shared with an auditor/customer/partner by generating a unique shareable link.",
};

export const softwarePackageDependenciesAndLicensesPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["code-management"],
    },
  ],
  supportedUseCase:
    "Shows a dynamically updating report of package dependencies in the software code repos and their corresponding licenses, which is helpful to produce an open-source report for auditing.\n\nThe dashboard can be shared with an auditor/customer/partner by generating a unique shareable link.",
};

export const teamGrowthPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["identity-and-access"],
    },
  ],
  supportedUseCase:
    "Shows total number of employees and the number of new team members added in the last 30/60/90 days.",
};

export const teamManagerAndDirectReportsPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["identity-and-access"],
    },
  ],
  supportedUseCase:
    "This is an interactive dashboard that prompts you to enter an individual's email to get the person's peers/team members, manager, and direct reports.",
};

export const toxicCombinationsPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
    {
      groupIds: ["endpoint-agents", "vulnerability-scanner"],
    },
  ],
  supportedUseCase:
    "This dashboard presents multiple operational and reporting metrics to help with vulnerability management. It aggregates findings and risks across both infrastructure and application development, identifies the highest risk items by context, such as findings impacting production workloads and applications deployed to production.\n\nThis dashboard also reports on vulnerability analytics and patterns -- Top 10 CVEs, Top 10 CWEs -- as well as workflow items such as Jira issues or records from other ticketing systems.",
};

export const userAccessPreReq: Prerequisites = {
  supportedUseCase:
    "Shows users across different environments/accounts, admin users, and shared/system user accounts.",
};

export const userEndpointBlastRadiusPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["endpoint-agents"],
    },
  ],
  supportedUseCase:
    "This is an interactive dashboard that prompts you to enter a macAddress of a device and visualize the device owner's access, full inventory of digital identities, and the resources they have access to.",
};

export const userEndpointsPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["endpoint-agents"],
    },
    {
      groupIds: ["device-management"],
    },
  ],
  supportedUseCase:
    "Shows key metrics and status associated with user endpoints/devices and endpoint security agents.",
};

export const userTrainingPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["training"],
    },
  ],
  supportedUseCase:
    "Shows metrics and status related to security awareness training for endusers.",
};

export const vulnerabilityReportingPreReq: Prerequisites = {
  groups: [
    {
      groupIds: ["cloud"],
    },
    {
      groupIds: ["code-management", "vulnerability-scanner", "code-scanners"],
    },
  ],
  supportedUseCase:
    "This dashboard presents multiple operational and reporting metrics to help with vulnerability management. It aggregates findings and risks across both infrastructure and application development, identifies the highest risk items by context, such as findings impacting production workloads and applications deployed to production.\n\nThis dashboard also reports on vulnerability analytics and patterns -- Top 10 CVEs, Top 10 CWEs -- as well as workflow items such as Jira issues or records from other ticketing systems.",
};
