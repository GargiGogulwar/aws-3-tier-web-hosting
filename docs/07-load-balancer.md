# Application Load Balancer (ALB)

## Overview

An Application Load Balancer (ALB) is a Layer 7 load balancer provided by AWS Elastic Load Balancing (ELB). It distributes incoming HTTP and HTTPS requests across multiple application servers, improving availability, scalability, and fault tolerance.

In this project, an Internet-facing Application Load Balancer receives client requests and securely forwards them to the Apache web servers deployed in private subnets.

---

## Objectives

The Application Load Balancer was configured to:

- Distribute incoming traffic across multiple application servers.
- Improve application availability.
- Eliminate single points of failure.
- Route requests only to healthy application servers.
- Secure communication between the load balancer and backend servers.

---

## Architecture

```text
                 Internet
                     │
             HTTP/HTTPS Request
                     │
                     ▼
      Application Load Balancer (Public)
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
  App Server 1             App Server 2
     (Private)               (Private)
```

---

## Configuration

| Property | Value |
|----------|-------|
| Load Balancer Type | Application Load Balancer |
| Scheme | Internet-facing |
| Listener | HTTP (80) |
| Target Type | EC2 Instances |
| Backend Protocol | HTTPS (443) |
| Health Check | HTTPS |

---

## Listener Configuration

The Application Load Balancer listens for incoming HTTP requests from users and forwards them to the target group containing the Apache web servers.

### Listener

| Protocol | Port | Action |
|----------|------|--------|
| HTTP | 80 | Forward to Target Group |

---

## Target Group

The Target Group contains the backend application servers that process client requests.

### Configuration

| Property | Value |
|----------|-------|
| Target Type | Instances |
| Protocol | HTTPS |
| Port | 443 |
| Health Check Protocol | HTTPS |

The Application Load Balancer continuously monitors the health of each target. Requests are forwarded only to healthy application servers.

---

## Health Checks

Health checks verify whether each application server is capable of serving requests.

### Configuration

| Setting | Value |
|----------|-------|
| Protocol | HTTPS |
| Port | 443 |
| Path | / |
| Healthy Threshold | Default AWS Configuration |
| Unhealthy Threshold | Default AWS Configuration |

Only healthy instances receive user traffic.

---

## Request Flow

```text
User
 │
 ▼
Application Load Balancer
 │
 ├──────────────► App Server 1
 │
 └──────────────► App Server 2
```

The Application Load Balancer automatically distributes traffic between the available backend servers.

---

## High Availability

The Application Load Balancer improves application reliability by:

- Distributing incoming traffic evenly.
- Detecting unhealthy instances.
- Routing requests only to healthy servers.
- Supporting deployments across multiple Availability Zones.

---

## Security

The Application Load Balancer is protected using a dedicated Security Group.

Security measures include:

- Accepts HTTP traffic from the internet.
- Communicates securely with backend servers over HTTPS.
- Application servers remain inaccessible directly from the internet.
- Backend communication is encrypted using SSL.

---

## Benefits

- Improved scalability
- High availability
- Automatic traffic distribution
- Continuous health monitoring
- Secure backend communication
- Better fault tolerance

---

## Outcome

The Application Load Balancer serves as the entry point for the web application by distributing incoming requests across multiple Apache web servers. Combined with health checks and backend HTTPS communication, it provides a highly available, secure, and reliable application delivery layer for the AWS three-tier architecture.
