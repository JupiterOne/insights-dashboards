# insights-dashboards

This repo contains a set of sample dashboards in JSON format can be easily
imported into JupiterOne Insights app.

## AWS Accounts

description...

> Prerequisite: This requires AWS integrations and works best with multiple AWS
> accounts configured using AWS Organizations.


## Data Breach Cost

description...

> Prerequisite: This requires a DLP service to be enabled and integrated, such
> as Amazon Macie.

![screenshot-data-breach-costs](screenshots/data-breach-cost.png)

## Vendor Management

Show metrics related to current Vendors, and their validation state. This can be
helpful to maintain a registry of Vendors your company interacts with, and alert
on newly discovered, unvalidated vendors.

> Prerequisite: This requires one or more configured integrations, which create
> Vendor entities. It also assumes you're using an IdP or SSO service (such as
> Google GSuite) that issues OAuth tokens against third-party Vendor apps.


