---
icon: simple/openvpn
title: OpenVPN Access Server Setup
description: How to setup and host your own VPN Server for Free on AWS using Terraform & OpenVPN
subtitle: Setup & Host Your Own VPN Access Server on AWS using Terraform
comments: false 
tags:
  - AWS
  - Terraform
  - OpenVPN
status: new
---

# **OpenVPN Access Server Setup**

## Setup and Host Your Own VPN Server on AWS Using Terraform and OpenVPN for Free

In this project, we will demonstrate how setup and self-host a VPN server on AWS using terraform and OpenVPN Access Server.

## Introduction

## Pre-requisites

- AWS account _(free tier will work)_
- Terraform installed on local machine
- 

!!! attention "Integrate with site navigation" 

Step 1 - Clone the Repo 

``` sh
git clone https://github.com/opeyemitechpro/OpenVPN-Terraform.git
```

Step 2 - Open the `terraform.tfvars` file and set the following parameters to suitable values:

- `region_name`: Set this to match aws region where you want your VPN server to be located. e.g. the aws region