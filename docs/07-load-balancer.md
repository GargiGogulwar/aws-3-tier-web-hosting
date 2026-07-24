# Bastion Host

## Overview

A Bastion Host is a secure EC2 instance deployed in a public subnet that serves as the only entry point for administrators to access resources located in private subnets. It eliminates the need to expose private instances directly to the internet, significantly improving the overall security of the infrastructure.

In this project, the Bastion Host was used to securely manage the Apache application servers and the PostgreSQL database server.

---

## Objectives

The Bastion Host was deployed to:

- Provide secure SSH access to private EC2 instances.
- Prevent direct internet access to backend servers.
- Centralize administrative access.
- Improve the security of the AWS infrastructure.

---

## Architecture

```text
Administrator
      │
 SSH (22)
      │
      ▼
Bastion Host
(Public Subnet)
      │
 SSH (22)
      ▼
Private Application Servers
      │
      ▼
PostgreSQL Database Server
```

---

## Deployment

| Resource | Configuration |
|----------|---------------|
| Instance Type | Amazon EC2 |
| Subnet | Public Subnet |
| Public IP | Enabled |
| Internet Access | Yes |
| Security Group | Allows SSH from Administrator IP |

---

## Security Group Configuration

### Inbound Rules

| Protocol | Port | Source |
|----------|------|--------|
| SSH | 22 | Administrator Public IP |

### Outbound Rules

| Protocol | Port | Destination |
|----------|------|-------------|
| SSH | 22 | Private Application Servers |
| SSH | 22 | PostgreSQL Database Server |

---

## SSH Workflow

The administrator first connects to the Bastion Host using SSH. From the Bastion Host, SSH access is established to the private application servers and the PostgreSQL database server.

This approach ensures that private instances remain inaccessible from the public internet.

---

## Advantages

- Eliminates direct SSH access to private instances.
- Centralized and controlled administrative access.
- Reduces the attack surface of the infrastructure.
- Enhances overall security.
- Follows AWS security best practices.

---

## Security Best Practices

- Allow SSH access only from trusted IP addresses.
- Store private key files securely.
- Disable unnecessary services on the Bastion Host.
- Regularly update the operating system and installed packages.
- Monitor SSH login activity.

---

## Benefits

- Secure remote administration
- Improved network isolation
- Reduced exposure to external threats
- Controlled access to private resources
- Easy management of backend infrastructure

---

## Outcome

The Bastion Host provides a secure gateway for managing private EC2 instances without exposing them directly to the internet. By acting as the single point of administrative access, it strengthens the security of the three-tier architecture while enabling efficient infrastructure management.
