# Security Groups

## Overview

Security Groups act as virtual firewalls that control inbound and outbound traffic for AWS resources. Unlike Network ACLs, Security Groups operate at the instance level and are stateful, meaning return traffic is automatically allowed.

In this project, separate Security Groups were configured for the Application Load Balancer, Bastion Host, Application Servers, and PostgreSQL Database Server to ensure secure communication between each layer.

---

## Objectives

The Security Groups were configured to:

- Allow users to access the web application.
- Restrict SSH access to authorized administrators.
- Permit only the required communication between application components.
- Protect the database from direct external access.

---

## Security Group Architecture

```text
Internet
    │
    ▼
Application Load Balancer
    │
    ▼
Application Servers
    │
    ▼
PostgreSQL Database
```

---

## Application Load Balancer Security Group

### Inbound Rules

| Protocol | Port | Source |
|----------|------|--------|
| HTTP | 80 | 0.0.0.0/0 |
| HTTPS | 443 | 0.0.0.0/0 |

### Outbound Rules

| Protocol | Port | Destination |
|----------|------|-------------|
| HTTPS | 443 | Application Server Security Group |

The ALB accepts requests from users and forwards them securely to the backend application servers.

---

## Bastion Host Security Group

### Inbound Rules

| Protocol | Port | Source |
|----------|------|--------|
| SSH | 22 | Administrator Public IP |

### Outbound Rules

| Protocol | Port | Destination |
|----------|------|-------------|
| SSH | 22 | Application Servers |

The Bastion Host provides secure administrative access to resources inside private subnets.

---

## Application Server Security Group

### Inbound Rules

| Protocol | Port | Source |
|----------|------|--------|
| HTTP | 80 | Application Load Balancer SG |
| HTTPS | 443 | Application Load Balancer SG |
| SSH | 22 | Bastion Host SG |

### Outbound Rules

| Protocol | Port | Destination |
|----------|------|-------------|
| PostgreSQL | 5432 | Database Security Group |
| HTTPS | 443 | Internet (via NAT Gateway) |

The application servers only accept requests from trusted AWS resources.

---

## PostgreSQL Database Security Group

### Inbound Rules

| Protocol | Port | Source |
|----------|------|--------|
| PostgreSQL | 5432 | Application Server SG |

### Outbound Rules

| Protocol | Port | Destination |
|----------|------|-------------|
| All Traffic | All | Default |

The database server accepts connections only from the application servers and remains inaccessible from the public internet.

---

## Benefits of Using Security Groups

- Instance-level firewall protection
- Restricts unauthorized access
- Secure communication between application layers
- Automatic handling of return traffic
- Easy management using Security Group references

---

## Security Flow

```text
Users
   │
HTTP / HTTPS
   │
Application Load Balancer
   │
HTTPS
   │
Application Servers
   │
PostgreSQL (5432)
   │
Database Server
```

SSH administration follows a separate path:

```text
Administrator
      │
SSH (22)
      │
Bastion Host
      │
SSH (22)
      │
Application Servers
```

---

## Outcome

Security Groups ensure that every component communicates only with trusted resources. By restricting access at the instance level, the infrastructure remains secure while allowing only the necessary traffic required for the three-tier application to function.
