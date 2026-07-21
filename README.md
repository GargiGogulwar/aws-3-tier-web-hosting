# AWS 3-Tier Web Hosting Architecture

A highly available and secure 3-tier web hosting architecture built on AWS using a custom VPC, public and private subnets, a Bastion Host, private EC2 instances, and an Application Load Balancer.

## Project Overview

This project demonstrates how to deploy a static website on private EC2 instances while allowing secure public access through an Application Load Balancer (ALB). Administrative access to private instances is provided through a Bastion Host.

The architecture follows AWS best practices by isolating application servers in private subnets while exposing only the load balancer and Bastion Host to the internet.

---

## Architecture

```
                   Internet
                       │
                       ▼
        Application Load Balancer
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
   App Server 1              App Server 2
 (Private Subnet)          (Private Subnet)
          ▲                         ▲
          └────────────┬────────────┘
                       │
                 Bastion Host
                 (Public Subnet)
```

---

## AWS Services Used

- Amazon VPC
- Public & Private Subnets
- Internet Gateway
- NAT Gateway
- Route Tables
- Security Groups
- EC2 Instances
- Application Load Balancer
- Target Group
- Apache HTTP Server

---

## Features

- Custom VPC
- Multi-AZ deployment
- Public and Private Subnets
- Bastion Host for secure SSH access
- Two private EC2 application servers
- Application Load Balancer
- Health Checks using Target Groups
- Static website deployment
- High Availability
- Secure Network Architecture

---

## Project Structure

```
aws-3-tier-web-hosting/
│
├── architecture/
│   └── architecture.drawio
│
├── docs/
│   ├── 01-vpc.md
│   ├── 02-subnets.md
│   ├── 03-route-tables.md
│   ├── 04-security-groups.md
│   ├── 05-nacl.md
│   ├── 06-ec2.md
│   ├── 07-load-balancer.md
│   ├── 08-rds.md
│   └── 09-testing.md
│
├── website/
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── assets/
│   └── images/
│
├── screenshots/
│
└── README.md
```

---

## Deployment Steps

1. Created a custom VPC.
2. Created public and private subnets across two Availability Zones.
3. Attached an Internet Gateway.
4. Configured a NAT Gateway.
5. Configured Route Tables.
6. Created Security Groups.
7. Launched a Bastion Host in the public subnet.
8. Launched two EC2 application servers in private subnets.
9. Installed Apache HTTP Server.
10. Deployed the website to both EC2 instances.
11. Created an Application Load Balancer.
12. Registered both EC2 instances in the Target Group.
13. Verified health checks.
14. Successfully accessed the website through the ALB DNS.

---

## Security Architecture

- Bastion Host is the only EC2 instance with a public IP.
- Application servers are deployed in private subnets.
- SSH access to private instances is only allowed from the Bastion Host.
- HTTP traffic reaches application servers only through the Application Load Balancer.

---

## Screenshots

Add screenshots of:

- VPC
- Subnets
- Route Tables
- Internet Gateway
- NAT Gateway
- Security Groups
- EC2 Instances
- Bastion Host
- Load Balancer
- Target Group
- Website running
- SSH connections

---

## Challenges Faced

- Configuring private subnet routing.
- Establishing SSH access through the Bastion Host.
- Deploying the website to private EC2 instances.
- Configuring the Application Load Balancer.
- Registering healthy targets.

---

## Future Improvements

- Amazon RDS Integration
- Auto Scaling Group
- HTTPS using AWS Certificate Manager
- Route 53 Custom Domain
- CloudWatch Monitoring
- AWS WAF
- CI/CD using GitHub Actions

---

## Note

Amazon RDS could not be configured due to AWS Free Plan limitations. However, the complete networking architecture, Bastion Host, private EC2 deployment, Application Load Balancer, and website hosting were successfully implemented and tested.

---

## Author

**Gargi Gogulwar**

B.Tech Computer Science & Engineering

PCCOE, Pune

GitHub: https://github.com/GargiGogulwar
