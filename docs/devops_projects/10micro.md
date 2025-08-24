---
icon: material/infinity
title: DevSecOps Project - 11-Microservices CI-CD & Monitoring
description: End-to-End CI/CD & Monitoring Using Kubernetes, Terraform, Jenkins, Grafana & Prometheus
subtitle: End-to-End CI/CD & Monitoring Using Kubernetes, Terraform, Jenkins, Grafana & Prometheus
comments: true 
tags:
  - AWS
  - DevOps
  - Kubernetes
status: new
pin: true
---

# **DevSecOps Project - 11-Microservices End-to-End CI/CD & Monitoring Using Kubernetes, Terraform, Jenkins, Grafana & Prometheus**

## **11-Microservices End-to-End CI/CD & Monitoring**

In this mini-project, I will demonstrate how to setup and self-host a VPN server on AWS using terraform and OpenVPN Access Server.

??? youtube "Watch the Video - DevSecOps Project - 11-Microservices End-to-End CI/CD & Monitoring Using Kubernetes, Terraform, Jenkins, Grafana & Prometheus" 
    <figure markdown="1">
    [![DevSecOps Project - 11-Microservices End-to-End CI/CD & Monitoring Using Kubernetes, Terraform, Jenkins, Grafana & Prometheus](../../assets/images/Video-Coming-Soon-PlaceHolder.png "DevSecOps Project - 11-Microservices End-to-End CI/CD & Monitoring Using Kubernetes, Terraform, Jenkins, Grafana & Prometheus")](https://youtube.com/@opeyemitechpro){: target="_blank" }
    <!-- <figcaption>Create a Free Self-Hosted VPN Server on AWS using Terraform and OpenVPN</figcaption>  -->
    </figure>
    /// caption
    DevSecOps Project - 11-Microservices End-to-End CI/CD & Monitoring Using Kubernetes, Terraform, Jenkins, Grafana & Prometheus
    ///


## **Introduction**

Setting up a self-hosted VPN server can be a cost-effective and secure solution for personal or organizational needs. This documentation provides a step-by-step guide on using a Terraform configuration script to deploy an OpenVPN Access server on AWS. 
With this guide, you'll learn how to configure the script, customize it for your requirements, and launch a fully functional VPN server in less than 5-minutes and ensures your internet traffic remains private and encrypted without been locked in a vpn subscription plan.
This VPN server is also "disposable", meaning, you can create and delete it anytime after use with just one command :smile: 

## **Pre-requisites**

- [x] AWS account _([free tier account will work :fontawesome-solid-arrow-up-right-from-square:](https://aws.amazon.com/free/){: target="_blank" })_
- [x] Terraform installed on local machine _([How to Install Terraform :fontawesome-solid-arrow-up-right-from-square:](https://developer.hashicorp.com/terraform/install){: target="_blank" })_
- [x] OpenVPN Connect Client software installed on local machine _(download from [here:fontawesome-solid-arrow-up-right-from-square:](https://openvpn.net/client/){: target="_blank" })_
- [x] Your AWS access key ID and secret access key _(learn how to get your AWS access keys [here :fontawesome-solid-arrow-up-right-from-square:](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html){: target="_blank" })_
- [x] AWS CLI installed and configured with your AWS access key ID and Secret access keys _(learn more about AWS CLI [here :fontawesome-solid-arrow-up-right-from-square:](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html){: target="_blank" })_ 
- [x] The OpenVPN-Terraform Setup Script _(click the button below)_

    <div style="text-align: center;">
    [11-Microservices-k8s-App Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App){: target="_blank" .md-button .md-button--primary}
    </div>




## *Install Gitleaks**

``` sh
# Download and install the latest release of Gitleaks
curl -sSfL https://raw.githubusercontent.com/gitleaks/gitleaks/master/scripts/install.sh | sudo sh -s -- -b /usr/local/bin
```

``` sh
curl -s https://api.github.com/repos/gitleaks/gitleaks/releases/latest \
| grep "browser_download_url.*linux.*amd64" \
| cut -d '"' -f 4 \
| wget -qi -

tar -xvf gitleaks_*.tar.gz
sudo mv gitleaks /usr/local/bin/
gitleaks version
```


``` sh
GITLEAKS_VERSION=$(curl -s "https://api.github.com/repos/gitleaks/gitleaks/releases/latest" | grep -Po '"tag_name": "v\K[0-9.]+')
wget -qO gitleaks.tar.gz https://github.com/gitleaks/gitleaks/releases/latest/download/gitleaks_${GITLEAKS_VERSION}_linux_x64.tar.gz
sudo tar xf gitleaks.tar.gz -C /usr/local/bin gitleaks
# gitleaks version
rm -rf gitleaks.tar.gz
```

## **Workflow**

- [ ] Run Terraform to setup Jenkins
- [ ] Confiure Jenkins
    - [ ] Install plugins: Go to `Dashboard > Manage Jenkins > Manage Plugins` and install the following plugins:
        - SonarQube Scanner
        - Docker
        - Docker pipeline
        - Docker build step
        - Cloudbees docker build and publish
        - Kubernetes
        - Kubernetes CLI
        - Email Extension Template
        - Prometheus Metrics
        - OWASP Dependency Check Plugin
    - [ ] Configure Jenkins Plugins
    - [ ] Configure SonarQube Server Token

## **Configure Plugins**

### **SonarQube**

- [x] Server Name: sonar
(Or use a suitable name)

- [x] Server URL: `<sonar_server_ip:9000>`

!!! tip "Tip"
    
    Since our SonarQube server is running as a docker container on port `9000` on the same machine as the Jenkins server, use `http://<server_ip_address>:9000` as the SonarQube Server URL


### **Prometheus**
- [x] No further configuration needed
- [x] By default, the Prometheus metrics will be scrapped from `http://<jenkins_server_ip:8080>/prometheus`

### **Docker Hub Credentials**

- [x] Configure Docker Credentials to enable pushing docker images to Docker Hub

### **Jenkins Email Notifications**

Goto `Dashboard > Manage Jenkins > System` and configure both the __"Extended E-mail Notification"__ and the __"E-mail Notification"__ sections as below:

- [x] SMTP Server Name: smtp.gmail.com
- [x] SMTP Port:  465
- [x] Username:    `user_email_id@gmail.com`
- [x] Password: `app_password`
- [x] Use SSL: checked
- [x] System Admin e-mail address: `<Admin_Name> <user_email_id@gmail.com>`
- [x] Default Content Type: `HTML`
- [x] Test email delivery


!!! tip "Tip"

    - The settings above apply to Gmail address configuration. Confirm SMTP settings from your email service provider.
    - Copy `App password` from your gmail account security settings and use that as the password in the above configuration.



## **What this Terraform Configuration Script Does**

This terraform configuration creates a fully functional, free and ready-to-use self-hosted OpenVPN Server in any chosen AWS region. The script perfomes the following operations:

- Creates a Ubuntu 22.04 EC2 instance and configures a fully functional OpenVPN Access Server on it
- Configures the server as a type t2-micro instance so that it can run within the AWS Free-tier plan (Learn more about the AWS free-tier plan [here](https://aws.amazon.com/free){: target="_blank" })
- Sets up and configures the VPN server with an IP address in the speicified AWS region.
- Generates an AWS keypair file for optional SSH connection to the EC2 instance, downloads the file and saves it in the terraform working directory on your local machine. The chosen AWS region is appended to the name of the keypair file.
- Generates an OpenVPN User Profile file (*.ovpn) that will be used to authenticate and establish an encrypted VPN connection from your local machine to the VPN server. The OpenPVN User Profile file is also donwloaded and saved to the terraform working directory on your local machine.
- One command tear down that destroys and cleans up the whole infrastructure along with the locally created files (the keypair file and the *.ovpn user profile file)


## **Jenkins Pipeline Script**

Copy the script below and paste into the job pipeline section:

??? info "Jenkins Pipeline script for the Jenkins job"

    <div style="text-align: center;">
    [11-Microservices-k8s-App Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App){: target="_blank" .md-button}
    </div>    
    
    The Jenkins CI/CD pipeline is below:

    ???+ code-file "Jenkins Pipeline Script"
            
        ``` groovy hl_lines="9-21 214-225"
        // 11-Microservices-k8s-App Jenkins Pipeline Script

        pipeline {
            agent any

            environment {
                // ====== CONFIG VARIABLES ======
                // Replace values with the values configured in Jenkins server configuration
                DOCKER_TOOL       = 'docker' // Docker tool name configured in Jenkins
                GIT_BRANCH        = 'OpeyemiTechPro-v1'
                GIT_URL           = 'https://github.com/opeyemitechpro/11-Microservices-k8s-App.git'
                SONAR_SERVER      = 'sonar' // SonarQube Server name configured in Jenkins
                SONAR_SCANNER     = 'sonar-scanner' // SonarQube tool name configured in Jenkins
                SONAR_PROJECT_NAME = '11-micro-serve'
                DOCKER_CRED_ID    = 'my-docker-cred'
                DOCKER_HUB_USER   = 'opeyemitechpro'
                DEST_EMAIL        = 'opeyemitechpro@gmail.com'
                REPLYTO_EMAIL     = 'opeyemitechpro@gmail.com'
                DOCKER_TAG_PREFIX = 'ver-1'
                DOCKER_TAG        = 'ver-1.$BUILD_NUMBER'
                        
                SCANNER_HOME 	  = tool "${SONAR_SCANNER}"
            }

            stages {
                stage('Clean Workspace') {
                    steps {

                        cleanWs()
                    }
                }

                stage('Git Checkout') {
                    steps {
                        git branch: "${GIT_BRANCH}", url: "${GIT_URL}"
                    }
                }

                stage('Gitleaks Scan') {
                    steps {
                        sh 'gitleaks detect --source . -r gitleaks_report-$BUILD_NUMBER.json'
                    }
                }

                stage('SonarQube Analysis') {
                //   environment {
                //       SCANNER_HOME = tool "${SONAR_SCANNER}"
                //   }
                    steps {
                        withSonarQubeEnv("${SONAR_SERVER}") {
                            sh '''$SCANNER_HOME/bin/${SONAR_SCANNER} \
                                -Dsonar.projectKey=${SONAR_PROJECT_NAME} \
                                -Dsonar.projectName=${SONAR_PROJECT_NAME} \
                                -Dsonar.java.binaries=.'''
                        }
                    }
                }

                stage('TRIVY FS SCAN') {
                    steps {
                        sh 'trivy fs -o trivy-fs-report_$BUILD_NUMBER.txt .'
                    }
                }
                
                // DOCKER IMAGE BUILDS

                stage('adservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/adservice") {
                            sh "docker build -t ${DOCKER_HUB_USER}/adservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/adservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('cartservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/cartservice/src") {
                            sh "docker build -t ${DOCKER_HUB_USER}/cartservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/cartservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('checkoutservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/checkoutservice") {
                            sh "docker build -t ${DOCKER_HUB_USER}/checkoutservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/checkoutservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('currencyservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/currencyservice") {
                            sh "docker build -t ${DOCKER_HUB_USER}/currencyservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/currencyservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('emailservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/emailservice") {
                            sh "docker build -t ${DOCKER_HUB_USER}/emailservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/emailservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('frontend DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/frontend") {
                            sh "docker build -t ${DOCKER_HUB_USER}/frontend:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/frontend:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('loadgenerator DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/loadgenerator") {
                            sh "docker build -t ${DOCKER_HUB_USER}/loadgenerator:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/loadgenerator:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('paymentservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/paymentservice") {
                            sh "docker build -t ${DOCKER_HUB_USER}/paymentservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/paymentservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('productcatalogservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/productcatalogservice") {
                            sh "docker build -t ${DOCKER_HUB_USER}/productcatalogservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/productcatalogservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('recommendationservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/recommendationservice") {
                            sh "docker build -t ${DOCKER_HUB_USER}/recommendationservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/recommendationservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }
                stage('shippingservice DockerImage') {
                    steps { 
                        script {
                            withDockerRegistry(credentialsId: "${DOCKER_CRED_ID}", toolName: "${DOCKER_TOOL}") {
                            dir("${env.WORKSPACE}/src/shippingservice") {
                            sh "docker build -t ${DOCKER_HUB_USER}/shippingservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER ."
                            sh "docker push ${DOCKER_HUB_USER}/shippingservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                                }
                            }
                        }
                    }
                }

                stage('DockerImage CleanUp') {
                    steps { 
                            sh "docker rmi ${DOCKER_HUB_USER}/adservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/cartservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/checkoutservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/currencyservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/emailservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/frontend:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/loadgenerator:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/paymentservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/productcatalogservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/recommendationservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                            sh "docker rmi ${DOCKER_HUB_USER}/shippingservice:$DOCKER_TAG_PREFIX.$BUILD_NUMBER"
                    }
                }
            // stage("Kubernetes deploy"){
                // steps {
                //     withKubeConfig(caCertificate: '', clusterName: '', contextName: '', credentialsId: 'cluster-ID', namespace: 'opeyemi-apps', restrictKubeConfigAccess: false, serverUrl: 'https://FDC152307BF6A5337A2C02C976A8D19F.gr7.us-east-2.eks.amazonaws.com')
                    //   {
                    //       sh ' kubectl apply -f buildnow.yml -n opeyemi-apps'
                    //       sh ' kubectl get pods -n opeyemi-apps '
                    //       sh ' kubectl get svc -n opeyemi-apps '
                        //  sh " kubectl get service -n opeyemi-apps frontend-external | awk '{print \$4}' "
                    //   }
                    //       sh ' date'
                //    }
            //    }
            }

            post {
                always {
                    emailext(
                        attachLog: true,
                        attachmentsPattern: 'trivy-fs-report_$BUILD_NUMBER.txt, dependency-check-report.html, gitleaks_report-$BUILD_NUMBER.json',
                        body: '''
                        Project <strong>"$PROJECT_NAME"</strong> has completed.<br>
                        Build Number: $BUILD_NUMBER <br> Build Tag: $BUILD_TAG <br>
                        Job Url: <a href="$JOB_URL">Job URL</a> <br> Build Status: <strong>$BUILD_STATUS</strong><br><br>
                        Check console output at <a href="${BUILD_URL}console">Console URL</a> to view the results.
                        ''',
                        subject: 'Project: $PROJECT_NAME, Build #: $BUILD_NUMBER - $BUILD_STATUS',
                        to: "$DEST_EMAIL",
                        replyTo: "$REPLYTO_EMAIL"
                    )
                }
            }
        }
        
        ```

        - [x] Lines 9-21 contain environment variables. Replace the values according to your Jenkins server configuration
        - [x] Uncomment lines 214 to 225 when you have configured your EKS cluster and set the parameters accordingly in your Jenkins server 
        
        

## Jenkins Plugins to install

- sonar
- SonarQube Scanner
- docker
- docker pipeline
- docker build step
- cloudbees docker build and publish
- kubernetes
- kubernetes CLI
- Email Notifications
- Extended Email Notifications
- Prometheus Metrics
- 

## Jenkins Email Configuration

- SMTP Server Name: smtp.gmail.com
- Username:    user_email_id@gmail.com
- Password: app_password
- Use SSL: checked
- SMTP Port:  465




## **Setting the script options**

The script allows you to set some options based on your use case. These are the available options you can set:

- [x] ==project_name== - This is used for labelling purposes only. It is appended to the resource tags
- [x]  ==OpenVPN_instance_type== - This has been set to `t2-micro` so the setup remains within the AWS free-tier plan.  You can change this to any suitable instance type but a t2-micro will server in most situations
- [x] ==openvpn_user== - This is the username used to create the `*.ovpn` profile file on the VPN server. The profile name is displayed when you connect through the OpenVPN client. It is currently set to append the selected AWS region so you can easily know which region you are connected to.
- [x] ==selected_region== - this option is set at runtime and it is required for the script to run. Here you select the AWS region where you want your server to be hosted.  The region you select will determine where your VPN traffic is routed through. For example, if you select `ca-central-1`, your VPN traffic will be routed through the AWS Canada Central IP address and as such your public IP address will read "Quebec, Montreal, Canada" 

![Public IP address showing Canada](../../assets/images/ovpn-canada-ip.png "Public IP address showing Canada")
/// caption
Public IP address showing Canada
///

The list of acceptable AWS regions are shown [here](https://opeyemitechpro.github.io/my-projects/terraform_projects/openvpn_access_server/#list-of-accepted-aws-regions)






######################################################

## AWS IAM Policies required for EKS Cluster Creation

- [x] AmazonEC2FullAccess
- [x] AmazonEKS_CNI_Policy
- [x] AmazonEKSClusterPolicy
- [x] AmazonEKSWorkerNodePolicy
- [x] AmazonPCIFullAccess
- [x] AWSCloudFormationFullAccess
- [x] IAMFullAccess
- [x] IAMUserChangePolicy


## Create EKS Cluster

Create your EKS Cluster

``` sh
eksctl create cluster \
  --name ope-k8s-cluster \
  --region us-east-2 \
  --with-oidc 
```

!!! tip "Tip"

    - Replace the clsuter name with your desired name





## Install and Setup ArgoCD on EKS



## Install and setup Prometheus Stack on EKS using Helm


### Install Helm
``` sh
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

### Check Helm version
``` sh
helm version
```

### Add Helm repo
``` sh

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm repo update
```

> ***(Optionally) Search Available Hem Charts***
``` sh
helm search repo prometheus-community
```

### create namespace
``` sh
kubectl create namespace monitoring
```

### Install Prometheus Stack into monitoring namespace 
``` sh
helm install prometheus prometheus-community/kube-prometheus-stack \
  -n monitoring \
  --set prometheus.prometheusSpec.maximumStartupDurationSeconds=300 \
  --set alertmanager.persistence.storageClass="gp2" \
  --set server.persistentVolume.storageClass="gp2"
```

### Check running status of pods to verify deployment

``` sh
kubectl --namespace monitoring get pods -l "release=prometheus"
```

OR
``` sh
kubectl get pods -n monitoring
```


### List all services in the monitoring namespace
``` sh
kubectl get svc -n monitoring
```


### Display Grafana URL (optional)
``` sh
kubectl get svc -n monitoring prometheus-grafana
```

### Display Prometheus URL (optional)
``` sh
kubectl get svc -n monitoring prometheus-kube-prometheus-prometheus
```

### Expose Grafana on a LoadBalancer
Change Grafana Service Type from ClusterIP to LoadBalancer to expose for external access

``` sh
kubectl patch svc prometheus-grafana \
  -n monitoring \
  -p '{"spec": {"type": "LoadBalancer"}}'
```

### Expose Prometheus on a LoadBalancer
Change Prometheus Service Type from ClusterIP to LoadBalancer to expose for external access

``` sh
kubectl patch svc prometheus-kube-prometheus-prometheus \
  -n monitoring \
  -p '{"spec": {"type": "LoadBalancer"}}'
```


### Display LoadBalancer URL for Grafana and Prometheus

``` sh
kubectl get svc -n monitoring
```

You may need to wait a while for the `EXTERNAL-IP` field to be populated, then open each URL for both Grafana and Prometheus in your browser (Grafana on port 80, Prometheus on port 9090)


### Get Grafana password

``` sh
kubectl --namespace monitoring get secrets prometheus-grafana -o json 
```


Copy the admin-password from the json output and decode it in base-64 using the command below

``` sh
echo "<admin-password>" | base64 --decode

```

OR use this command

``` sh
kubectl --namespace monitoring get secrets prometheus-grafana -o jsonpath="{.data.admin-password}" | base64 -d ; echo
```

!!! tip "Tip"

    - Default Username is `admin`
    - The decoded password should translate to `prom-operator` which is the default grafana password.


---
<br><br><br>


??? code-file "Install & Configure Node-Exporter on linux"

    ## Install & Configure Node-Exporter on linux

    ``` sh
    #!/bin/bash

    set -e

    NODE_EXPORTER_VERSION="1.8.1"
    DOWNLOAD_URL="https://github.com/prometheus/node_exporter/releases/download/v${NODE_EXPORTER_VERSION}/node_exporter-${NODE_EXPORTER_VERSION}.linux-amd64.tar.gz"

    echo "🚀 Installing Node Exporter v${NODE_EXPORTER_VERSION}..."

    # Download and extract
    curl -LO ${DOWNLOAD_URL}
    tar -xzf node_exporter-${NODE_EXPORTER_VERSION}.linux-amd64.tar.gz
    sudo mv node_exporter-${NODE_EXPORTER_VERSION}.linux-amd64/node_exporter /usr/local/bin/
    rm -rf node_exporter-${NODE_EXPORTER_VERSION}.linux-amd64*

    # Create user
    sudo useradd -rs /bin/false node_exporter || true

    # Create systemd service
    cat <<EOF | sudo tee /etc/systemd/system/node_exporter.service
    [Unit]
    Description=Node Exporter
    Wants=network-online.target
    After=network-online.target

    [Service]
    User=node_exporter
    Group=node_exporter
    Type=simple
    ExecStart=/usr/local/bin/node_exporter

    [Install]
    WantedBy=default.target
    EOF

    # Reload and start
    sudo systemctl daemon-reload
    sudo systemctl enable --now node_exporter


    # Verify
    echo "✅ Node Exporter is running!"
    curl -s http://localhost:9100/metrics | head -n 5

    ```

---
<br>

## Scrapping Metrics

To Scrape metrics from a standalone Linux server (our Jenkins server) running node_exporter using a Prometheus instance running inside EKS

### ✅ Prerequisites:
- [x] Prometheus is installed via Helm chart.
- [x] Node_exporter is running and accessible on our Jenkins server (default port: `9100`).
- [x] The Jenkins server's IP address is publicly accessible or reachable from within the EKS cluster (e.g., via VPC Peering, VPN, or internal networking).
- [x] Security Groups and firewall rules allow traffic from EKS nodes to port `9100` on the Jenkins server.

### 🚀 Steps to Add Standalone Server to Prometheus Scrape Targets

#### 1. Create Additional Scrape Config via Secret

Create a file named `additional-scrape-configs.yaml` with the following content:

``` yaml hl_lines="3 12"
- job_name: 'jenkins-node-exporter'
  static_configs:
    - targets: ['<server_ip>:9100']
      labels:
        instance: '<instance_name>'
        role: 'node-exporter'
        environment: 'dev'

- job_name: 'jenkins-prom-plugin'
  metrics_path: /prometheus
  static_configs:
    - targets: ['<server_ip>:8080']
      labels:
        instance: 'instance_name'
        role: 'jenkins-master'
        environment: 'dev'

```

!!! tip "Tip"

    Edit the higlighted lines and replace `<server-ip>` with the IP address or DNS name of your standalone Linux server. In this case, your jenkins server.


#### 2. Now create a Kubernetes secret

``` sh
kubectl create secret generic additional-scrape-configs \
  --from-file=additional-scrape-configs.yaml \
  -n monitoring

```

#### 3. Edit Prometheus Custom Resource

First get the prometheus resource name

``` sh
kubectl get prometheus -n monitoring
```

Then edit the prometheus custom resource

``` sh
kubectl edit prometheus prometheus-kube-prometheus-prometheus -n monitoring
```

Under `spec` add:

``` yaml
  additionalScrapeConfigs:
    name: additional-scrape-configs
    key: additional-scrape-configs.yaml
```

So the result should look like this:

``` yaml
spec:
  ...
  additionalScrapeConfigs:
    name: additional-scrape-configs
    key: additional-scrape-configs.yaml
```

#### 4. Apply and Verify

Prometheus will reload its config automatically by deafult. Wait a minute, then:

* Go to the Prometheus UI (`/targets` page).
* Look for the job `node-exporter-standalone`.
* Ensure it’s marked as UP.

<br><br>


### To Uninstall Prometheus-Stack and delete namespace

``` sh
helm uninstall prometheus -n monitoring
kubectl delete namespace monitoring
```


########################################################



## **Conclusion**

Setting up a self-hosted VPN server using this Terraform configuration script is a straightforward and efficient way to enhance your network security and maintain control over your data. By following this documentation, you can deploy a robust OpenVPN server on AWS, customize it to your needs, and ensure private and secure internet access. This guide aims to empower you with the knowledge and tools to manage your own VPN server effectively. For any troubleshooting or further customization, explore the Terraform and OpenVPN documentation for advanced insights and solutions. 