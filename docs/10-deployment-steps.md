# Deployment Steps

## Overview

This document outlines the deployment process followed to build the AWS 3-Tier Web Hosting Architecture.

---

## Step 1

Create a Custom VPC.

---

## Step 2

Create Public and Private Subnets across multiple Availability Zones.

---

## Step 3

Attach an Internet Gateway to the VPC.

---

## Step 4

Create a NAT Gateway inside a Public Subnet.

---

## Step 5

Configure Public and Private Route Tables.

---

## Step 6

Associate Route Tables with their respective subnets.

---

## Step 7

Configure Security Groups.

---

## Step 8

Configure Network ACLs.

---

## Step 9

Launch the Bastion Host.

---

## Step 10

Launch two Apache Web Server EC2 instances inside private subnets.

---

## Step 11

Install Apache HTTP Server.

---

## Step 12

Configure self-signed SSL certificates.

---

## Step 13

Deploy the website files.

---

## Step 14

Launch a PostgreSQL EC2 instance.

---

## Step 15

Install and configure PostgreSQL.

---

## Step 16

Configure database security.

---

## Step 17

Create an Application Load Balancer.

---

## Step 18

Create a Target Group.

---

## Step 19

Register both Apache Web Servers as targets.

---

## Step 20

Configure HTTPS Health Checks.

---

## Step 21

Verify Target Group Health.

---

## Step 22

Test website accessibility using the ALB DNS name.

---

## Step 23

Validate SSH connectivity using the Bastion Host.

---

## Step 24

Verify database connectivity.

---

## Step 25

Complete end-to-end infrastructure testing.

---

## Outcome

The deployment successfully resulted in a secure, scalable, and highly available AWS 3-Tier Web Hosting Architecture following AWS networking and security best practices.
