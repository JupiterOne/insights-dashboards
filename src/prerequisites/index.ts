export enum DashboardPrerequisiteCategory {
  DIRECTORY_SERVICES = 'DIRECTORY_SERVICES',
  ENDPOINT_MANAGEMENT = 'ENDPOINT_MANAGEMENT',
  ANTIVIRUS = 'ANTIVIRUS',
  EDR = 'EDR',
  VIRTUALIZATION = 'VIRTUALIZATION',
  CLOUD = 'CLOUD',
}

export const DashboardPrerequisiteCategoryTitles = {
  [DashboardPrerequisiteCategory.DIRECTORY_SERVICES]: 'Directory Services',
  [DashboardPrerequisiteCategory.ENDPOINT_MANAGEMENT]: 'Endpoint Management',
  [DashboardPrerequisiteCategory.ANTIVIRUS]: 'Antivirus',
  [DashboardPrerequisiteCategory.EDR]: 'EDR',
  [DashboardPrerequisiteCategory.VIRTUALIZATION]: 'Virtualization',
  [DashboardPrerequisiteCategory.CLOUD]: 'Cloud',
};
