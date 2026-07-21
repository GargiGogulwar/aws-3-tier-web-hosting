# Amazon RDS

## Overview

Amazon RDS was planned as the database tier for this 3-tier architecture.

The database would be deployed in private database subnets to ensure secure access from the application servers only.

## Planned Configuration

- Engine: MySQL
- Deployment: Private Subnets
- Multi-AZ: Optional
- Public Access: Disabled
- Access: Only from EC2 Application Servers

## Architecture

Internet
        │
        ▼
Application Load Balancer
        │
        ▼
EC2 Application Servers
        │
        ▼
Amazon RDS (Private Subnets)

## Note

Amazon RDS was not deployed because the AWS Free Plan account restricted the required RDS configuration.

The rest of the architecture, including networking, Bastion Host, EC2 instances, Application Load Balancer, and website deployment, was successfully implemented and tested.
