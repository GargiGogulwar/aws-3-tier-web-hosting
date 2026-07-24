# Subnets

## Overview

A subnet is a logical subdivision of a Virtual Private Cloud (VPC). It enables the organization of AWS resources into separate network segments based on their purpose and security requirements.

This project uses both public and private subnets to implement a secure and scalable three-tier architecture.

---

## Objectives

The subnet design was implemented to:

- Separate internet-facing and internal resources.
- Improve security by isolating sensitive components.
- Support high availability across multiple Availability Zones.
- Control network traffic efficiently.

---

## Subnet Configuration

| Subnet | Type | Purpose |
|---------|------|---------|
| Public Subnet 1 | Public | Bastion Host, Application Load Balancer |
| Public Subnet 2 | Public | NAT Gateway |
| Private App Subnet 1 | Private | Apache Web Server 1 |
| Private App Subnet 2 | Private | Apache Web Server 2 |
| Private Database Subnet | Private | PostgreSQL Database Server |

---

## Public Subnets

Public subnets are associated with a Route Table that contains a route to the Internet Gateway.

Resources deployed in public subnets include:

- Bastion Host
- Application Load Balancer
- NAT Gateway

These resources either require direct internet access or facilitate internet connectivity for private resources.

---

## Private Application Subnets

The application servers are deployed inside private subnets to prevent direct access from the internet.

Characteristics:

- No public IP addresses
- Accessible only through the Application Load Balancer
- Administrative access only through the Bastion Host
- Outbound internet connectivity provided via the NAT Gateway

Hosting the web servers in private subnets significantly improves the security of the application.

---

## Private Database Subnet

The PostgreSQL database server is deployed in a dedicated private subnet.

Advantages include:

- Complete isolation from public internet traffic
- Accepts connections only from application servers
- Reduced attack surface
- Enhanced protection for application data

---

## High Availability

The application layer is distributed across two Availability Zones.

Benefits include:

- Improved fault tolerance
- Better application availability
- Load balancing across multiple servers
- Increased reliability during infrastructure failures

---

## Network Flow

```text
Internet
    │
    ▼
Application Load Balancer
    │
    ▼
Private App Server 1
Private App Server 2
    │
    ▼
PostgreSQL Database Server
```

---

## Benefits of Using Separate Subnets

- Improved network organization
- Better access control
- Enhanced security
- Easier resource management
- Support for scalable cloud architectures

---

## Outcome

The subnet architecture provides secure communication between all application components while ensuring that only the necessary resources are exposed to the internet. This design follows AWS networking best practices for a three-tier application architecture.
