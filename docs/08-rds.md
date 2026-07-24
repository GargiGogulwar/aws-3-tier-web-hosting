# PostgreSQL Database Server

## Overview

PostgreSQL is a powerful, open-source relational database management system (RDBMS) used for storing and managing application data. In this project, PostgreSQL was deployed on a dedicated Amazon EC2 instance instead of Amazon RDS to meet the project requirements and provide complete control over the database environment.

The database server is deployed in a private subnet and is accessible only by the application servers, ensuring secure communication and data protection.

---

## Objectives

The PostgreSQL Database Server was configured to:

- Store application data securely.
- Provide reliable database services to the application layer.
- Prevent direct public access.
- Ensure secure communication between the application and database tiers.

---

## Architecture

```text
                Internet
                    │
                    ▼
        Application Load Balancer
                    │
                    ▼
        Apache Application Servers
                    │
         PostgreSQL (Port 5432)
                    │
                    ▼
      PostgreSQL Database Server
          (Private Subnet)
```

---

## Configuration

| Property | Value |
|----------|-------|
| Database | PostgreSQL |
| Deployment | Amazon EC2 |
| Subnet | Private Database Subnet |
| Public IP | Disabled |
| Default Port | 5432 |
| Internet Access | No |

---

## Installation

The PostgreSQL server was installed and configured on a dedicated EC2 instance.

### Installation Steps

- Update system packages.
- Install PostgreSQL.
- Start and enable the PostgreSQL service.
- Create the required database and user.
- Configure authentication settings.
- Allow connections only from the application servers.

---

## Security Configuration

The PostgreSQL server is protected using Security Groups and Network ACLs.

### Security Group Rules

| Protocol | Port | Source |
|----------|------|--------|
| PostgreSQL | 5432 | Application Server Security Group |

No inbound internet traffic is allowed.

---

## Database Communication

The application servers establish secure connections to the PostgreSQL server using the PostgreSQL protocol over port **5432**.

```text
App Server 1
      │
      ├──────────────┐
      │              │
      ▼              ▼
App Server 2     PostgreSQL
                     │
                     ▼
              Database Storage
```

---

## Why PostgreSQL on EC2?

Instead of Amazon RDS, PostgreSQL was deployed on an EC2 instance because the project requirements specified a self-managed database server.

Advantages include:

- Full administrative control.
- Custom PostgreSQL configuration.
- Manual backup and maintenance.
- Ability to install additional database tools.
- Hands-on experience managing database infrastructure.

---

## Security Measures

The following security practices were implemented:

- Database deployed in a private subnet.
- No public IP address assigned.
- Access restricted using Security Groups.
- Protected by Network ACLs.
- Accessible only from the application servers.
- Administrative access only through the Bastion Host.

---

## Benefits

- Secure database deployment
- Complete administrative control
- Better understanding of database management
- Improved network isolation
- Seamless integration with the application layer

---

## Outcome

The PostgreSQL Database Server provides a secure and reliable data storage solution for the web application. By deploying the database on a dedicated EC2 instance within a private subnet, the architecture ensures that sensitive data remains protected while allowing only authorized application servers to establish database connections. This implementation satisfies the project requirements while following secure AWS infrastructure design principles.
