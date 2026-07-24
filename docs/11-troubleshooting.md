# Troubleshooting

## Overview

During the implementation of the AWS 3-Tier Web Hosting Architecture, several configuration and networking issues were encountered. Each issue was analyzed and resolved systematically using AWS services, Linux networking tools, and Apache logs.

---

# Issue 1

## Target Group Health Check Failed

### Problem

The Application Load Balancer continuously reported the backend application servers as Unhealthy.

### Cause

Incorrect Network ACL configuration blocked HTTPS traffic to the application servers.

### Resolution

Updated the inbound HTTPS rule with the correct VPC CIDR block, allowing the Application Load Balancer to communicate with the backend servers.

---

# Issue 2

## Backend HTTPS Timeout

### Problem

HTTPS requests from the Application Load Balancer timed out.

### Cause

Port 443 was not correctly configured for communication between the Application Load Balancer and Apache web servers.

### Resolution

Verified Apache SSL configuration and updated Security Groups and Network ACLs to allow HTTPS traffic.

---

# Issue 3

## Apache SSL Configuration

### Problem

Apache was unable to serve HTTPS requests.

### Cause

SSL certificates and VirtualHost configuration were incomplete.

### Resolution

Configured self-signed SSL certificates and enabled HTTPS on Apache.

---

# Issue 4

## SSH Connectivity

### Problem

Unable to connect directly to private EC2 instances.

### Cause

Private instances do not have public IP addresses.

### Resolution

Configured a Bastion Host inside the public subnet and used SSH tunneling for administrative access.

---

# Issue 5

## Database Connectivity

### Problem

Application servers could not establish communication with PostgreSQL.

### Cause

Security Group rules for port 5432 were missing.

### Resolution

Configured PostgreSQL Security Group to allow traffic only from the application server Security Group.

---

# Issue 6

## Website Not Accessible

### Problem

The web application was inaccessible through the Application Load Balancer.

### Cause

Incorrect Target Group registration and listener configuration.

### Resolution

Verified listener configuration, registered backend instances correctly, and confirmed healthy targets.

---

## Troubleshooting Tools Used

- SSH
- curl
- Apache Logs
- OpenSSL
- systemctl
- ss
- ping
- Security Groups
- Network ACLs
- Target Group Health Checks
- Application Load Balancer Monitoring

---

## Lessons Learned

This project provided hands-on experience in designing, deploying, securing, and troubleshooting a complete AWS 3-Tier Web Hosting Architecture. It reinforced concepts related to AWS networking, EC2 management, Apache configuration, HTTPS implementation, database security, and systematic infrastructure debugging.

---

## Outcome

All identified issues were successfully resolved, resulting in a fully functional, secure, and highly available three-tier architecture deployed on AWS. The troubleshooting process significantly improved understanding of AWS networking, security services, and production-level infrastructure management.
