# Network Access Control Lists (Network ACLs)

## Overview

A Network Access Control List (Network ACL or NACL) is an optional security layer that controls inbound and outbound traffic at the subnet level. Unlike Security Groups, Network ACLs are stateless, meaning both inbound and outbound rules must be explicitly configured.

In this project, Network ACLs were used to provide an additional layer of protection for both public and private subnets.

---

## Objectives

The Network ACLs were configured to:

- Filter traffic entering and leaving each subnet.
- Protect application servers from unauthorized access.
- Allow only the required ports for communication.
- Add an extra security layer beyond Security Groups.

---

## Public Subnet Network ACL

The public subnet hosts the Bastion Host, Application Load Balancer, and NAT Gateway.

### Inbound Rules

| Rule # | Protocol | Port | Source | Action |
|--------|----------|------|---------|--------|
| 100 | HTTP | 80 | 0.0.0.0/0 | Allow |
| 110 | HTTPS | 443 | 0.0.0.0/0 | Allow |
| 120 | SSH | 22 | Administrator IP | Allow |
| 130 | TCP | 1024-65535 | 0.0.0.0/0 | Allow |
| * | All | All | All | Deny |

### Outbound Rules

| Rule # | Protocol | Port | Destination | Action |
|--------|----------|------|-------------|--------|
| 100 | HTTP | 80 | 0.0.0.0/0 | Allow |
| 110 | HTTPS | 443 | 0.0.0.0/0 | Allow |
| 120 | TCP | 1024-65535 | 0.0.0.0/0 | Allow |
| * | All | All | All | Deny |

---

## Private Subnet Network ACL

The private subnet hosts the Apache Web Servers and PostgreSQL Database Server.

### Inbound Rules

| Rule # | Protocol | Port | Source | Action |
|--------|----------|------|---------|--------|
| 100 | HTTP | 80 | 10.0.0.0/16 | Allow |
| 110 | HTTPS | 443 | 10.0.0.0/16 | Allow |
| 120 | SSH | 22 | Public Subnet CIDR | Allow |
| 130 | PostgreSQL | 5432 | Private App Subnets | Allow |
| 140 | TCP | 1024-65535 | 10.0.0.0/16 | Allow |
| * | All | All | All | Deny |

### Outbound Rules

| Rule # | Protocol | Port | Destination | Action |
|--------|----------|------|-------------|--------|
| 100 | HTTP | 80 | 0.0.0.0/0 | Allow |
| 110 | HTTPS | 443 | 0.0.0.0/0 | Allow |
| 120 | PostgreSQL | 5432 | Private Database Subnet | Allow |
| 130 | TCP | 1024-65535 | 0.0.0.0/0 | Allow |
| * | All | All | All | Deny |

---

## Difference Between Security Groups and Network ACLs

| Feature | Security Group | Network ACL |
|----------|---------------|-------------|
| Applied To | EC2 Instance | Subnet |
| Stateful | Yes | No |
| Allow Rules | Yes | Yes |
| Deny Rules | No | Yes |
| Return Traffic | Automatically Allowed | Must Be Explicitly Allowed |

---

## Traffic Flow

```text
Internet
    │
    ▼
Public Subnet
(ALB, Bastion Host)
    │
    ▼
Private App Subnets
(App Server 1 & App Server 2)
    │
    ▼
Private Database Subnet
(PostgreSQL Server)
```

The Network ACL evaluates every packet entering or leaving each subnet before it reaches the associated resources.

---

## Challenges Faced

During deployment, the Application Load Balancer health checks initially failed because the private subnet Network ACL contained an incorrect CIDR block for HTTPS traffic. As a result, HTTPS requests from the load balancer were blocked before reaching the application servers.

After updating the inbound HTTPS rule to allow traffic from the correct VPC CIDR block, the health checks became successful and the target group status changed to **Healthy**.

This troubleshooting process reinforced the importance of correctly configuring subnet-level firewall rules.

---

## Benefits

- Subnet-level traffic filtering
- Additional security beyond Security Groups
- Explicit allow and deny rules
- Better protection against unauthorized access
- Improved control over network communication

---

## Outcome

The Network ACL configuration provides an additional layer of security by controlling traffic at the subnet level. Combined with Security Groups, it ensures that only legitimate traffic reaches the application and database servers while maintaining a secure and reliable three-tier architecture.
