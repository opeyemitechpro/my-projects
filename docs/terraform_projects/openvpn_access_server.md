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
pin: true
---

# **OpenVPN Access Server Setup Using Terraform**

## Setup and Host Your Own Free VPN Server on AWS Using Terraform and OpenVPN

In this project, we will demonstrate how to setup and self-host a VPN server on AWS using terraform and OpenVPN Access Server.

??? youtube "Watch the Video - How To Create a Free Self-Hosted VPN Server on AWS using Terraform and OpenVPN"
    <figure markdown="1">
    [![Create a Free Self-Hosted VPN Server on AWS using Terraform and OpenVPN](../../assets/images/300_Credit-YT-Thumbnail.png "Create a Free Self-Hosted VPN Server on AWS using Terraform and OpenVPN")](https://www.youtube.com/@opeyemitechpro)
    <figcaption>Create a Free Self-Hosted VPN Server on AWS using Terraform and OpenVPN</figcaption>
    </figure>
    /// caption
    YouTube Video thumbnail
    ///

    In this video I share How To Create a Free Self-Hosted VPN Server on AWS using Terraform and OpenVPN


## **Introduction**

Setting up a self-hosted VPN server can be a cost-effective and secure solution for personal or organizational needs. This documentation provides a step-by-step guide on using a Terraform configuration script to deploy an OpenVPN server on AWS. With this guide, you'll learn how to configure the script, customize it for your requirements, and launch a fully functional VPN server that ensures your internet traffic remains private and encrypted.

## **Pre-requisites**

- [x] AWS account _(free tier account will work)_
- [x] Terraform installed on local machine
- [x] OpenVPN Client installed on local machine
- [x] Your AWS access key ID and secret access key
- [x] AWS CLI installed and configured with your AWS access key ID and Secret access keys (_[learn more about AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html)_) 
- [x] The OpenVPN-Terraform Setup Script [here](https://github.com/opeyemitechpro/OpenVPN-Terraform-Setup){: target="_blank" }


[OpenVPN-Terraform Source Code](https://github.com/opeyemitechpro/OpenVPN-Terraform-Setup){: target="_blank" .md-button .md-button--primary}


## **How the Terraform Config Script works**

??? info "Click here to see details of how the OpenVPN Terraform config works under the hood"

    [OpenVPN-Terraform Source Code](https://github.com/opeyemitechpro/OpenVPN-Terraform-Setup){: target="_blank" .md-button}
        
    Each of the files in  this terraform configuration module is explained below:

    ??? tip "The `ami.tf` file"
        
            ``` tf title="ami.tf"
            # Select latest Ubuntu 22.04 ami 

            data "aws_ami" "ubuntu" {
            most_recent = true

            filter {
                name   = "name"
                values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
            }

            filter {
                name   = "virtualization-type"
                values = ["hvm"]
            }

            owners = ["099720109477"]  # Canonical's AWS account ID
            }
            ```
        
        This `ami.tf` is used to find the latest Ubuntu 22.04 AMI (Amazon Machine Image) from the AWS ami Catalog. 
        
        - It creates a data source named "ubuntu" that searches for AMIs with these criteria:
        
            - Uses most_recent = true to get the latest version

            - Filters for Ubuntu 22.04 (Jammy Jellyfish) images using the name pattern

            - Ensures it's using HVM (Hardware Virtual Machine) virtualization

            - Only looks for images owned by Canonical (Ubuntu's publisher) using their AWS account ID (099720109477)

        This prevents hardcoding a specific AMI ID into the script, which could become outdated. The AMI ID is then referenced elsewhere in the Terraform code using `data.aws_ami.ubuntu.id`

    ??? tip "The `OpenVPN_ec2.tf` file"

        This is the main config file that sets up the OpenVPN server infrastructure.

        - It reates an EC2 instance for the OpenVPN server with the specified configurations (using Ubuntu AMI selected above)

        - Sets up a key pair for SSH access

        - Configures the instance metadata options so it can be queried by the user_data script

        - Creates and saves an RSA private key locally

        - Includes tags for resource management

        - Sets the connection profile name for the VPN server

        - Displays available AWS regions through a null resource and determines the selected region during execution

    ??? tip "The `openvpn_userdata.tpl` file"

        This is the userdata script that is used to bootstrap the server immediately after it is provisioned by Terraform. It is configured as a template file so that terraform can interpolate the value of `openvpn_user` variable from the variables declared in the config file into the user_data script.

        How it works:
        - Sets bash environment and error handling

        - Captures all the setup process in the log file `/var/log/setup_script.log` so it can be referenced if there are errors 

        - Updates system packages

        - Retrieves instance metadata (FQDN and Public IP) from AWS metadata service which will be needed by the OpenVPN installatin script

        - Downloads the installation script from [Angristan's GitHub repository](https://github.com/angristan/openvpn-install)  and sets the executable permissions on the file

        - Runs the installation script configuration automatically without prompts using the "Public IP" and "FQDN" values queried from the instance metadata

        - Sets the Custom client name (from variable ${openvpn_user})

        - Moves the generated client profile (.ovpn file) to Ubuntu user's home directory

        - Sets the system hostname to "OpenVPN-Server"

        
    ??? tip "The `outputs.tf` file"

        The `outputs.tf` file defines values that will be displayed after Terraform completes its execution. In this specific file, it outputs: [1]

        The following values will be displayed:
        - Public IP address of the OpenVPN server

        - Instance ID of the server

        - Key pair name used for SSH access

        - Details on how to access the VPN server 

        - Path to the private key file that was created

        - SSH connection string (ready to use command for connecting to the server)

        - Location of the downloaded OpenVPN profile (.ovpn file)

        - Next Steps Instructions

        These outputs help users understand where important files are located and what steps to take next after the infrastructure is deployed.


    ??? tip "The `ovpn.tf` file"

        The `ovpn.tf` file manages the retrieval of the OpenVPN configuration file from the remote VPN server and donwloads it in the terraform working directory. The main purpose of this file is to ensure you get the OpenVPN client configuration file automatically downloaded to your local machine once it's ready on the server.


        - It creates a null_resource that checks if the OpenVPN server instance has being created

        - Sets a trigger that determines when the ip address of the instance changes. At that point, terraform can ssh into the machine using the generate private key to access the OVPN profile config file

        - Using the remote-exec block, it waits until the OpenVPN config file is created on the server by polling every 20 seconds until the file exists

        - Using the local-exec block, terrafom doownloads the *.ovpn config file from the server to your local machine using SCP and stores it in the terraform working directory

        - It disables strict host checking for simplicity

        - Using Cleanup local-exec provisioner, sets a trigger to destroy the locally saved *.ovpn file when the infrastructure is destroyed

    ??? tip "The `provider.tf` file"

        The file essentially sets up the foundational configuration sources and versions needed for Terraform to interact with AWS and to use other necessary providers for the OpenVPN deployment. 

    ??? tip "The `securityGrp.tf` file"

        This configures the required security group profile for the OpenVPN server. It opens the required ports for ingress and egress and the neccesary port protocols (tcp and udp).

    ??? tip "The `terraform.tfvars` file"

        Here, values are assigned to all the declared variables in the config script.  You can freely change any values here to customize the script for your own purpose

    ??? tip "The `variables.tf` file"

        The `variables.tf` file is used to define variables that make the configuration more dynamic and reusable. By abstracting values into variables, I can easily customize the infrastructure without directly modifying the configuration files.


## **Setting the script options**

The script allows you to set some options based on your use case. These are the available options you can set:

- [x] ==project_name== - This is used for labelling purposes only. It is appended to the resource tags
- [x]  ==OpenVPN_instance_type== - This has been set to `t2-micro` so the setup remains within the AWS free-tier plan.  You can change this to any suitable instance type but a t2-micro will server in most situations
- [x] ==openvpn_user== - This is the username used to create the `*.ovpn` profile file on the VPN server. The profile name is displayed when you connect through the OpenVPN client. It is currently set to append the selected AWS region so you can easily know which region you are connected to.
- [x] ==selected_region== - this option is set at runtime and it is required for the script to run. Here you select the AWS region where you want your server to be hosted.  The region you select will determine where your VPN traffic is routed through. For example, if you select `ca-central-1`, your VPN traffic will be routed through the AWS Canada Central IP address and as such your public IP address will read "Quebec, Montreal, Canada" 

![Public IP address showing Canada](../../assets/images/ovpn-canada-ip.png "Public IP address showing Canada")

The list of acceptable AWS regions are shown [here](https://opeyemitech.pro/my-projects/terraform_projects/openvpn_access_server/#list-of-accepted-aws-regions)

## **Running the script**
Follow the ==**"Quick Start Guide"**== below to provision and configure your OpenVPN server and to connect to your new VPN network.

## **Quick Start Guide**

??? info "Click here for a quick start guide on setting up the OpenVPN Access Server"

    ## Clone the Repository
    Create a folder on your local machine and clone the repository in the folder

    ``` sh
    git clone https://github.com/opeyemitechpro/OpenVPN-Terraform.git
    ```
    
    ## Initialize the terraform configuration
    From within the cloned directory, initialize the terraform configuration

    ``` sh
    terraform init
    ```

    ![Terraform Initialiaztion Command](../../assets/images/ovpn-terraform-init.png "Terraform Initialiaztion Command")

    ## Apply the Terraform Configuration

    ``` sh
    terraform apply
    ```
    
    - When prompted, enter an AWS region from the list below and respond `yes` to the prompt.  (e.g. `us-west-2`)
    - This will be the AWS region where the VPN server and all resources will be hosted. 

    ![Terraform apply command](../../assets/images/ovpn-terraform-apply.png "Terraform apply command")
    
    
    ### ==List of accepted AWS regions==

    -  us-east-1       =  N. Virginia 
    -  us-east-2       =  Ohio 
    -  us-west-1       =  N. California 
    -  us-west-2       =  Oregon 
    -  af-south-1      =  Cape Town 
    -  ap-east-1       =  Hong Kong 
    -  ap-south-1      =  Mumbai 
    -  ap-southeast-1  =  Singapore 
    -  ap-southeast-2  =  Sydney 
    -  ap-southeast-3  =  Jakarta 
    -  ap-northeast-1  =  Tokyo 
    -  ap-northeast-2  =  Seoul 
    -  ap-northeast-3  =  Osaka 
    -  ca-central-1    =  Canada Central 
    -  eu-central-1    =  Frankfurt 
    -  eu-west-1       =  Ireland 
    -  eu-west-2       =  London 
    -  eu-west-3       =  Paris 
    -  eu-north-1      =  Stockholm 
    -  eu-south-1      =  Milan 
    -  eu-south-2      =  Zurich 
    -  me-south-1      =  Bahrain 
    -  me-central-1    =  UAE 
    -  sa-east-1       =  São Paulo 

    ## Outputs
    At the end of the terraform apply command, the script outputs the following details on the screen:

    - The Public IP address of the VPN Server
    - The instance-ID
    - The name of the keypair created
    - The path where the private key file was saved on your local machine
    - SSH connection string that you can use to the VPN server
    - The OpenVPN profile file that you will use to ssh into the VPN server
    - Further steps to launch your VPN connection

    ![Terraform Output](../../assets/images/ovpn-terraform-output.png "Terraform Output Screen")

    **Showing the OpenVPN server on the AWS EC2 Console**
    ![AWS Console Showing the OpenVPN Server details](../../assets/images/ovpn-terraform-console.png "AWS Console Showing the OpenVPN Server details")

    ## Connect to your VPN
    - Download and install [OpenVPN Connect client](https://openvpn.net/client/) on your local machine
    - Import the `*.ovpn` file into the OpenVPN cient appllication
    - Connect to your VPN network

    ![OpenVPN Client Connected to the VPN](../../assets/images/ovpn-terraform-connect.png "OpenVPN Client Connected to the VPN")

    ## Testing your VPN Connection
    One very simple way to check if you are actually connected to your new VPN network is to open your browser and check your public IP address. You can use websites like [whatsmyip.com](hhtps://whatsmyip.com) or simply search "what is my ip address" on Google to check your public IP address.  

    ![Public IP address showing Canada](../../assets/images/ovpn-canada-ip.png "Public IP address showing Canada")
    
    When you are connected to your VPN server, your internet traffic will be routed through your VPN server and as such, only your VPN server IP address will be seen publicly, your local ISP assigned ip address will be hidden from the internet. 

    ## Cleanup
    The whole infrastructure can be destroyed by simply using the command:

    ``` sh
    terraform destroy
    ```

    - Enter the AWS region that you entered above and respond `yes` to the prompt.
    - This will terminate the EC2 instance and all resources created and also delete the files that were locally created in the terraform working directory i.e. the *.ovpn user profile and the keypair file that was created earlier 

    ![Terraform Destroy Command](../../assets/images/ovpn-terraform-destroy.png "Terraform Destroy Command")


## **Conclusion**

Setting up a self-hosted VPN server using this Terraform configuration script is a straightforward and efficient way to enhance your network security and maintain control over your data. By following this documentation, you can deploy a robust OpenVPN server on AWS, customize it to your needs, and ensure private and secure internet access. This guide aims to empower you with the knowledge and tools to manage your own VPN server effectively. For any troubleshooting or further customization, explore the Terraform and OpenVPN documentation for advanced insights and solutions. 