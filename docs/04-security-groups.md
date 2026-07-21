# Security Groups

## Bastion Host

- SSH (22) from trusted IP

## Load Balancer

- HTTP (80) from Internet

## Application Servers

- HTTP from Load Balancer
- SSH only from Bastion Host

## Benefits

Security Groups act as virtual firewalls protecting EC2 instances.
