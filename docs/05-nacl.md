# Network Access Control Lists (NACLs)

## Overview

Network Access Control Lists (NACLs) provide an additional layer of security at the subnet level by controlling inbound and outbound traffic.

## Configuration

### Public Subnets

**Inbound Rules**
- HTTP (80) from Anywhere (0.0.0.0/0)
- HTTPS (443) from Anywhere (0.0.0.0/0)
- SSH (22) from trusted IP
- Ephemeral Ports (1024-65535)

**Outbound Rules**
- Allow all traffic

### Private Subnets

**Inbound Rules**
- HTTP (80) from Application Load Balancer
- SSH (22) from Bastion Host
- Ephemeral Ports (1024-65535)

**Outbound Rules**
- Allow all traffic

## Benefits

- Stateless packet filtering
- Additional subnet-level security
- Complements Security Groups
