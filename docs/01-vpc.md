# Virtual Private Cloud (VPC)

## Overview

A Virtual Private Cloud (VPC) is a logically isolated network within Amazon Web Services (AWS) where cloud resources are deployed securely. It provides complete control over networking, including IP address ranges, subnets, routing, internet connectivity, and security.

For this project, a custom VPC was created to host the complete three-tier web application architecture. All AWS resources—including the Bastion Host, Application Load Balancer, Apache Web Servers, and PostgreSQL Database Server—are deployed inside this VPC.

---

## Objective

The primary objectives of creating a VPC were:

- Isolate the infrastructure from other AWS customers.
- Organize resources into public and private subnets.
- Secure communication between application components.
- Control inbound and outbound network traffic.
- Support a scalable and highly available architecture.

---

## VPC Configuration

| Property | Value |
|----------|-------|
| VPC Type | Custom VPC |
| IPv4 CIDR Block | 10.0.0.0/16 |
| DNS Resolution | Enabled |
| DNS Hostnames | Enabled |
| Internet Connectivity | Internet Gateway |
| Outbound Internet Access | NAT Gateway |

---

## Architecture Inside the VPC

The VPC contains multiple networking components:

### Public Resources

- Internet Gateway
- Bastion Host
- Application Load Balancer
- NAT Gateway

### Private Resources

- Apache Web Server 1
- Apache Web Server 2
- PostgreSQL Database Server

Private resources are not directly accessible from the internet. External traffic reaches the application only through the Application Load Balancer, while administrative SSH access is provided through the Bastion Host.

---

## Benefits of Using a Custom VPC

- Complete network isolation
- Better security through subnet segregation
- Controlled routing using Route Tables
- Additional protection using Network ACLs
- Security Group-based access control
- High availability across multiple Availability Zones

---

## Network Layout

```text
                    Internet
                        │
                 Internet Gateway
                        │
        ┌────────────────────────────────┐
        │          Custom VPC            │
        │         10.0.0.0/16            │
        │                                │
        │  Public Subnets                │
        │   • Bastion Host               │
        │   • Load Balancer              │
        │   • NAT Gateway                │
        │                                │
        │  Private App Subnets           │
        │   • Apache Server 1            │
        │   • Apache Server 2            │
        │                                │
        │  Private DB Subnet             │
        │   • PostgreSQL Server          │
        └────────────────────────────────┘
```

---

## Security Considerations

Several security mechanisms were implemented within the VPC:

- Security Groups act as instance-level firewalls.
- Network ACLs provide subnet-level protection.
- Application servers remain in private subnets.
- Database server is isolated from public internet access.
- SSH access is permitted only through the Bastion Host.

---

## Outcome

The custom VPC successfully provides a secure, scalable, and isolated networking environment for deploying the AWS 3-Tier Web Hosting Architecture. It forms the foundation of the complete infrastructure by securely connecting all application components while maintaining controlled internet access.

---

