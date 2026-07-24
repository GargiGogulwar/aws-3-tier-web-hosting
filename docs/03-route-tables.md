# Route Tables

## Overview

A Route Table contains a set of rules that determine where network traffic is directed within a Virtual Private Cloud (VPC). Each subnet in the VPC is associated with a Route Table, allowing AWS resources to communicate with each other, the internet, or other networks.

In this project, separate Route Tables are used for public and private subnets to maintain security and proper traffic flow.

---

## Objectives

The Route Tables were configured to:

- Allow public resources to access the internet.
- Prevent direct internet access to private instances.
- Enable private instances to download updates through the NAT Gateway.
- Maintain secure communication between application components.

---

## Public Route Table

The Public Route Table is associated with the public subnets.

### Routes

| Destination | Target |
|-------------|--------|
| 10.0.0.0/16 | Local |
| 0.0.0.0/0 | Internet Gateway |

### Associated Resources

- Bastion Host
- Application Load Balancer
- NAT Gateway

The Internet Gateway allows these resources to communicate with the public internet.

---

## Private Route Table

The Private Route Table is associated with the application and database subnets.

### Routes

| Destination | Target |
|-------------|--------|
| 10.0.0.0/16 | Local |
| 0.0.0.0/0 | NAT Gateway |

### Associated Resources

- Apache Web Server 1
- Apache Web Server 2
- PostgreSQL Database Server

The NAT Gateway provides outbound internet access while preventing unsolicited inbound traffic.

---

## Traffic Flow

### Incoming Traffic

```text
Internet
    │
Internet Gateway
    │
Application Load Balancer
    │
Private Application Servers
    │
PostgreSQL Database
```

### Outgoing Traffic

```text
Private Instances
      │
      ▼
 NAT Gateway
      │
      ▼
Internet Gateway
      │
      ▼
Internet
```

---

## Why Use Separate Route Tables?

Using different Route Tables for public and private subnets provides several benefits:

- Prevents direct internet access to sensitive resources.
- Ensures secure routing between application layers.
- Supports controlled outbound internet connectivity.
- Follows AWS networking best practices.

---

## Benefits

- Secure network segmentation
- Controlled internet access
- Improved infrastructure management
- Better scalability
- Enhanced application security

---

## Outcome

The Route Tables successfully direct network traffic between public and private resources while ensuring that application servers and the PostgreSQL database remain protected from direct internet exposure. This routing configuration forms a key component of the secure three-tier architecture.
