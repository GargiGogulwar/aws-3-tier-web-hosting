# AWS 3-Tier Web Hosting Architecture

## Overview
This project demonstrates a secure and scalable 3-tier web application architecture on AWS using VPC networking, private subnets, an Application Load Balancer, Apache web servers, and a PostgreSQL database.

## Architecture

                                    INTERNET
                                        │
                                        ▼
                             ┌─────────────────────┐
                             │       Users         │
                             └─────────────────────┘
                                        │
                                  HTTP (80)
                                        │
                                        ▼
                  ┌─────────────────────────────────────┐
                  │ Application Load Balancer (Public)  │
                  └─────────────────────────────────────┘
                               │                │
                     HTTPS (443)│                │HTTPS (443)
                               ▼                ▼
        ┌────────────────────────────┐   ┌────────────────────────────┐
        │        App Server 1         │   │        App Server 2         │
        │    Apache + SSL (Private)   │   │    Apache + SSL (Private)   │
        └────────────────────────────┘   └────────────────────────────┘
                     │                               │
                     └───────────────┬───────────────┘
                                     │
                            PostgreSQL (5432)
                                     │
                                     ▼
                    ┌────────────────────────────┐
                    │ PostgreSQL DB Server (EC2) │
                    │       Private Subnet       │
                    └────────────────────────────┘

                    ▲
                    │ SSH (22)
            ┌──────────────────────┐
            │    Bastion Host       │
            │     Public Subnet     │
            └──────────────────────┘
                    ▲
                    │
               Administrator

## AWS Services Used

- Amazon VPC
- Public & Private Subnets
- Internet Gateway
- NAT Gateway
- EC2 (Bastion Host)
- EC2 (2 Apache App Servers)
- EC2 (PostgreSQL Database)
- Application Load Balancer
- Target Groups
- Security Groups
- Network ACLs
- Route Tables

## Features

- Secure 3-tier architecture
- Private application servers
- Bastion host for secure SSH access
- Application Load Balancer
- End-to-end backend HTTPS (ALB → EC2)
- PostgreSQL database
- High availability across Availability Zones

## Testing

- Website accessible via ALB DNS
- Target Group Health Checks: Healthy
- HTTPS communication between ALB and App Servers
## Security

- HTTPS communication between the Application Load Balancer and Apache web servers.
- Self-signed SSL certificates installed on backend EC2 instances.
- Application servers deployed in private subnets.
- SSH access only through the Bastion Host.
