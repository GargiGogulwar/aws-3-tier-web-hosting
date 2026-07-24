# Testing and Validation

## Overview

After deploying the AWS 3-Tier Web Hosting Architecture, several validation tests were performed to verify that all infrastructure components were functioning correctly. The objective was to ensure secure communication, proper routing, successful load balancing, and reliable database connectivity.

---

## Test Objectives

The testing process aimed to verify:

- Network connectivity
- Application accessibility
- Load balancer functionality
- Backend HTTPS communication
- Database connectivity
- Security configurations
- High availability

---

## Validation Checklist

| Component | Status |
|-----------|--------|
| VPC Configuration | ✅ Passed |
| Public & Private Subnets | ✅ Passed |
| Route Tables | ✅ Passed |
| Security Groups | ✅ Passed |
| Network ACLs | ✅ Passed |
| Bastion Host SSH Access | ✅ Passed |
| Apache Web Servers | ✅ Passed |
| Application Load Balancer | ✅ Passed |
| Target Group Health Checks | ✅ Passed |
| PostgreSQL Server | ✅ Passed |
| Backend HTTPS Communication | ✅ Passed |

---

## Connectivity Tests

### Internet to ALB

Result:

- Website successfully accessible through the Application Load Balancer.

Status:

✅ Passed

---

### ALB to Application Servers

The Application Load Balancer successfully forwarded requests to both Apache web servers over HTTPS.

Status:

✅ Passed

---

### Health Check Validation

The Target Group continuously monitored the backend application servers.

Result:

- Both targets reported Healthy.

Status:

✅ Passed

---

### SSH Connectivity

Administrative access was verified using the Bastion Host.

Connection Path:

Administrator

↓

Bastion Host

↓

Private Application Servers

Status:

✅ Passed

---

### Database Connectivity

The application servers successfully established communication with the PostgreSQL database server over port 5432.

Status:

✅ Passed

---

### Security Validation

The following security measures were verified:

- Application servers inaccessible from the public internet.
- Database server deployed in a private subnet.
- Security Groups correctly configured.
- Network ACLs functioning as expected.
- Backend HTTPS communication encrypted.

Status:

✅ Passed

---

## Final Result

The AWS 3-Tier Web Hosting Architecture successfully passed all deployment and validation tests. All infrastructure components communicated securely and performed as expected, demonstrating a functional, secure, and highly available cloud architecture.
