---
icon: material/infinity
title: Hands-On DevSecOps Project - Automating Provisioning, Deployment and Monitoring of an 11-Microservice e-Commerce App on EKS
description: Infrastructure Automation, Continuous Integration, GitOps Deployment, and Observability for an E-Commerce Microservices Platform on Amazon EKS
subtitle: End-to-End CI/CD & Monitoring Using Kubernetes, Terraform, Jenkins, Grafana & Prometheus
comments: true 
tags:
  - AWS
  - DevOps
  - Kubernetes
  - Terraform
  - Jenkins
  - Prometheus
  - Grafana
status: new
pin: true
---

## Introduction

This project demonstrates a complete, production-grade DevSecOps pipeline for deploying a cloud-native e-commerce application built on 11 different microservices written in multiple programming languages that communicate with each other over gRPC. The application was originally designed by Google Developers for the GKE but I have adapted it to be deployed on Amazon EKS or on any Kubernetes cluster.

??? youtube "Watch the Video Walkthrough here - DevSecOps Project - End-to-end Deployment and Monitoring of 11-Microservice e-Commerce App to AWS EKS with Jenkins, ArgoCD, Terraform, Grafana & Prometheus" 
    <figure markdown="1">
    [![DevSecOps Project - End-to-end Deployment and Monitoring of 11-Microservice e-Commerce App on AWS EKS using Jenkins, ArgoCD, Terraform, Grafana & Prometheus](../../assets/images/Video-Coming-Soon-PlaceHolder.png "DevSecOps Project - End-to-end Deployment and Monitoring of 11-Microservice e-Commerce App on AWS EKS using Jenkins, ArgoCD, Terraform, Grafana & Prometheus")](https://youtube.com/@opeyemitechpro){: target="_blank" }
    <!-- <figcaption>Create a Free Self-Hosted VPN Server on AWS using Terraform and OpenVPN</figcaption>  -->
    </figure>
    /// caption
    DevSecOps Project - End-to-end Deployment and Monitoring of 11-Microservice e-Commerce App to AWS EKS with Jenkins, ArgoCD, Terraform, Grafana & Prometheus
    ///


The goal of this project was to design and implement an end-to-end DevOps workflow that automates:

* Infrastructure provisioning with Terraform
* Continuous Integration (CI) using Jenkins for building, testing, scanning, and pushing container images
* Continuous Delivery (CD) using ArgoCD (GitOps) for seamless deployment to Amazon EKS
* Security and quality checks with SonarQube, Gitleaks, and Trivy
* Monitoring and observability with Prometheus and Grafana

All components were carefully integrated to simulate a real-world DevOps environment, covering every stage from source code to production deployment.

The project highlights key modern DevOps practices, including:

* **Infrastructure as Code (IaC):** Automating cloud resource provisioning with Terraform.
* **GitOps:** Managing Kubernetes deployments declaratively with ArgoCD.
* **CI/CD Automation:** Orchestrating multi-stage pipelines with Jenkins.
* **Cloud-Native Security:** Ensuring code quality, vulnerability management, and secret detection.
* **Observability:** Collecting and visualizing system and application metrics with Prometheus and Grafana.

By the end of this project, you’ll gain a detailed understanding of how each tool was implemented and how the entire pipeline works together to deliver a scalable, secure, and automated deployment workflow on AWS.



??? tip "Repos used for this project"
    <div style="text-align: center;">
    [11-Microservices-k8s-App Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App){: target="_blank" .md-button}
    </div>

    <div style="text-align: center;">
    [11-Microservices-k8s-App-ArgoCD Manifest Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App-ArgoCD){: target="_blank" .md-button}
    </div>


## Architecture Overview



## Project Workflow

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


## Infrastructure Setup



### Jenkins Server Setup

For the purpose of this project, we will be creating our Jenkins Server on an ec2 instance using Terraform as our IaC tool. The Jenkins server will also serve as out base server from where we will mange other infrastructures liek the EKS cluster.

I have included the link to my Github repo containing the Jenkins server Terraform script below.  

??? tip "Pre-requisites for the terraform script"

    You will need the following pre-requisites to run the terraform script on your local machine:

    - [x] An AWS account _([Get one here :fontawesome-solid-arrow-up-right-from-square:](https://aws.amazon.com/free/){: target="_blank" })_
    - [x] Terraform CLI installed on your local machine _([How to Install Terraform :fontawesome-solid-arrow-up-right-from-square:](https://developer.hashicorp.com/terraform/install){: target="_blank" })_
    - [x] Your AWS access key ID and secret access key _(learn how to get your AWS access keys [here :fontawesome-solid-arrow-up-right-from-square:](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html){: target="_blank" })_
    - [x] AWS CLI installed and configured with your AWS access key ID and Secret access keys _(learn more about AWS CLI [here :fontawesome-solid-arrow-up-right-from-square:](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html){: target="_blank" })_ 

??? tip "What does this terraform script do?"
    The Terrafom script will do the following:

    - [x] Provision an ec2 instance of type `t2.large` (You can easily set a different instance type in the `terraform.tfvars` file)
    - [x] Provision the ec2 instance in the default VPC
    - [x] Confiure the security group to expose [^note] all the required ports for this project. The required ports are: 22, 25, 80, 443, 465, 8080, 9000 and 9100. (The ports and their descriptions are listed in the `terraform.tfvars` file)
    - [x] Create an AWS Key-Pair file and download the file unto your terraform working directory on your local machine (the folder from where you inintiated the terraform apply command)
    - [x] Using the included Bash script (in the user_data field), it will bootstrap and install the following:

        * Ubuntu 24.04 (the latest version)
        * Jenkins
        * Docker
        * SonarQube Docker Container
        * eksctl
        * aws CLI
        * kubectl
        * node_exporter
        * trivy scanner
        * gitleaks

    - [x] Output the `Public IP address` and the `SSH connection string` for the newly provisioned Jenkins server  
    - [x] The terraform script will also be used to `destroy` the server and its resources during the clean-up stage of this project.

    [^note]: Since this is just a demo project, the ports are accessible on the internet for the duration of the project demonstration. ==This is not a good security practice in production environments and should be avoided :smile:==

Clone the Repo on your local machine and apply the terraform config:

``` sh
git clone 
```

``` sh
terraform init
terraform apply
```

Ater the terraform script executes, it displays the `Public IP Address` and the `SSH Connection string` of the Jenkins Server in the format below:

`ssh -i <Key-pair_filename> ubuntu@<Jenkins_Master_public_ip>`

Use the `Public IP address` to access the Jenkins server UI from your browser on port `8080`.

`<server_public_ip>:8080`

Also, open the terraform working folder from a terminal and use the `SSH connection string` to access the jenkins server.

``` sh 
ssh -i `key_pair_filename` ubuntu@`<server_public_ip>`
```

#### Jenkins Server Configuration

Get the Jenkins initial Admin password

From the jenkins terminal, enter the command:
``` sh
sudo cat 
```

??? tip

to From the Jenkins Initial UI setup page,  

Setup Jenkins Server

Login to Jenkins Server

`<jenkins-server-ip>:8080`

Copy Initial admin Password

``` sh
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

OR 

``` sh
sudo systemctl status jenkins
```

Install suggested Jenkins Plugins and login as admin
Setup new admin password `jenkins > admin > security`

Install plugins `manage jenkins > Plugins > Available plugins`

Install the plugins below and restart the server if requested






??? code-file "==Delete Later=="
    **Install Gitleaks**

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

- [x] SMTP Server Name: `smtp.gmail.com`
- [x] SMTP Port:  `465`
- [x] Username:    `user_email_id@gmail.com`
- [x] Password: `app_password`
- [x] Use SSL: `checked`
- [x] System Admin e-mail address: `<Admin_Name> <user_email_id@gmail.com>`
- [x] Default Content Type: `HTML`
- [x] Test email delivery


!!! tip "Tip"

    - The settings above apply to Gmail address configuration. Confirm SMTP settings from your email service provider.
    - Copy `App password` from your gmail account security settings and use that as the password in the above configuration.

---

## :simple-jenkins: **Jenkins Pipeline Scripts**

Below are the Jenkins pipeline scripts for the `Continous Integration (CI)` and the `Continous Delivery (CD)` jobs.

### Jenkins CI Pipeline Script

??? info "Jenkins CI Pipeline script for the Jenkins job"

    <div style="text-align: center;">
    [11-Microservices-k8s-App Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App){: target="_blank" .md-button}
    </div>    
    
    The Jenkins CI pipeline is below:

    ???+ code-file "Jenkins Pipeline Script"
            
        ``` groovy hl_lines="9-24"
        // 11-Microservices-k8s-App Jenkins Pipeline Script
        
        pipeline {
            agent any

            environment {
                // ====== CONFIG VARIABLES ======
                // Replace values with the values configured in Jenkins server configuration
                DOCKER_TOOL       = 'docker' // Docker tool name configured in Jenkins
                GIT_BRANCH        = 'OpeyemiTechPro-v1' // Git Branch name where code resides 
                GIT_URL           = 'https://github.com/opeyemitechpro/11-Microservices-k8s-App.git'
                SONAR_SERVER      = 'sonar' // SonarQube Server name configured in Jenkins
                SONAR_SCANNER     = 'sonar-scanner' // SonarQube tool name configured in Jenkins
                SONAR_PROJECT_NAME = '11-microservice-eCommerce' // Project Name to appear on SonarQube Server Analysis page
                DOCKER_CRED_ID    = 'my-docker-cred' // Docker login credentials configure in Jenkins credentials
                DOCKER_HUB_USER   = 'opeyemitechpro' // Docker Hub Repo to hold docker images
                DEST_EMAIL        = 'opeyemitechpro@gmail.com' // Destination email for post job notification
                REPLYTO_EMAIL     = 'opeyemitechpro@gmail.com' // Reply-To email for post job notification

                SCANNER_HOME      = tool "${SONAR_SCANNER}"


                // Declare values for these variables to suit your environment needs 
                DOCKER_TAG        = "ver-$BUILD_NUMBER" // Docker tag dynamically generated after each build

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
                        sh 'gitleaks detect --source . -r gitleaks_report-$BUILD_NUMBER.json || true'
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
                            sh "docker build -t ${DOCKER_HUB_USER}/adservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/adservice:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/cartservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/cartservice:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/checkoutservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/checkoutservice:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/currencyservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/currencyservice:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/emailservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/emailservice:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/frontend:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/frontend:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/loadgenerator:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/loadgenerator:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/paymentservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/paymentservice:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/productcatalogservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/productcatalogservice:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/recommendationservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/recommendationservice:$DOCKER_TAG"
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
                            sh "docker build -t ${DOCKER_HUB_USER}/shippingservice:$DOCKER_TAG ."
                            sh "docker push ${DOCKER_HUB_USER}/shippingservice:$DOCKER_TAG"
                                }
                            }
                        }
                    }
                }

                stage('DockerImage CleanUp') {
                    steps { 
                            sh "docker rmi ${DOCKER_HUB_USER}/adservice:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/cartservice:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/checkoutservice:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/currencyservice:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/emailservice:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/frontend:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/loadgenerator:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/paymentservice:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/productcatalogservice:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/recommendationservice:$DOCKER_TAG"
                            sh "docker rmi ${DOCKER_HUB_USER}/shippingservice:$DOCKER_TAG"
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

            stage('Update k8s Manifest') {
            steps {
                echo "Activate Update Manifest Job"
                build job: 'Update-Manifest', parameters: [string(name: 'DOCKER_TAG', value: "${DOCKER_TAG}")]
                // Note: The build job "Update-Manifest" must be the exact name of the Jenkins job that updates the k8s manifest
                }
            }

        }

            post {
                always {
                    emailext(
                        attachLog: true,
                        attachmentsPattern: 'trivy-fs-report_$BUILD_NUMBER.txt, dependency-check-report.html, gitleaks_report-$BUILD_NUMBER.json',
                        subject: 'Project: $PROJECT_NAME, Build #: $BUILD_NUMBER - $BUILD_STATUS',
                        to: "$DEST_EMAIL",
                        replyTo: "$REPLYTO_EMAIL",
                        body: '''
                        Project <strong>"$PROJECT_NAME"</strong> has completed.<br>
                        Build Number: $BUILD_NUMBER <br> 
                        Build Tag: $BUILD_TAG <br>
                        Job Url: <a href="$JOB_URL">Job URL</a> <br> 
                        Build Status: <strong>$BUILD_STATUS</strong><br><br>
                        Check console output at <a href="${BUILD_URL}console">Console URL</a> OR <a href="${BUILD_URL}pipeline-overview">Pipeline Overview</a> to view the results.
                        '''
                    )
                }
            }
        }
        
        ```

        - [x] Lines `9-24` contain environment variables. Replace the values according to your Jenkins server configuration


### Jenkins CD Pipeline Script

??? info "Jenkins CD Pipeline script for the Manifest Update Jenkins job"

    <div style="text-align: center;">
    [11-Microservices-k8s-App-ArgoCD Manifest Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App-ArgoCD){: target="_blank" .md-button}
    </div>



    ???+ code-file "Jenkins CD Pipeline Script"

        ``` groovy hl_lines="7-18"
                // 11-Microservices-k8s-App-ArgoCD Manifest Update Jenkins Pipeline Script
                
                pipeline {
                    agent any
                        environment {
                            // ====== CONFIG VARIABLES ======
                            // Replace values with the values configured in your Jenkins server configuration
                            GIT_CRED                = 'github_cred'

                            // Declare values for these variables to suit your environment needs
                            GIT_BRANCH              = 'main'
                            GIT_URL                 = 'https://github.com/opeyemitechpro/11-Microservices-k8s-App-ArgoCD.git'
                            DOCKER_CRED_ID          = 'my-docker-cred'
                            DOCKER_HUB_USER         = 'opeyemitechpro'
                            GIT_COMMIT_USER         = 'Jenkins CI'
                            GIT_COMMIT_EMAIL        = 'opeyemitechpro@gmail.com'
                            DEST_EMAIL              = 'opeyemitechpro@gmail.com'
                            REPLYTO_EMAIL           = 'opeyemitechpro@gmail.com'

                        }

                        parameters {
                                string(name: 'DOCKER_TAG', defaultValue: 'latest', description: 'Docker image tag passed from Jenkins CI Job')
                            }

                    stages {
                            stage('Git Checkout') {
                                    steps {
                                        git branch: "${GIT_BRANCH}", url: "${GIT_URL}"
                                    }
                                }

                                stage('Update Manifest with New Docker Tag') {
                                    steps {
                                        script {
                                            // Show manifest file content before tag replacement
                                            sh "echo '--- BEFORE ---'"
                                            sh "grep 'image:' 11-microservice-ArgoCD-manifest.yaml || true"

                                            // Replace all image tags in the manifest
                                            // Using regex to match all lines like: opeyemitechpro/something:oldtag
                                            sh '''
                                                sed -i -E "s|(opeyemitechpro/[a-zA-Z0-9_-]+):[a-zA-Z0-9._-]+|\\1:${DOCKER_TAG}|g" 11-microservice-ArgoCD-manifest.yaml
                                            '''

                                            // Show manifest file content after replacing tags
                                            sh "echo '--- AFTER ---'"
                                            sh "grep 'image:' 11-microservice-ArgoCD-manifest.yaml || true"
                                        }
                                    }
                                }

                                stage('Commit & Push Changes') {
                                    steps {
                                        withCredentials([usernamePassword(credentialsId: 'github_cred', 
                                                    passwordVariable: 'GIT_PASSWORD', 
                                                    usernameVariable: 'GIT_USERNAME')]) {

                                            sh '''
                                                git config user.email "${GIT_COMMIT_EMAIL}"
                                                git config user.name "${GIT_COMMIT_USER}"

                                                git add 11-microservice-ArgoCD-manifest.yaml
                                                git commit -m "Update images to tag ${DOCKER_TAG} (triggered by Jenkins Job: $PROJECT_NAME - build ${BUILD_NUMBER})" || echo "No changes to commit"

                                                git remote set-url origin https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/opeyemitechpro/11-Microservices-k8s-App-ArgoCD.git
                                                git push origin HEAD:main
                                            '''
                                        }
                                    }
                                }

                    }

                    post {
                        always {
                            emailext(

                                subject: 'Project: $PROJECT_NAME, Build #: $BUILD_NUMBER - $BUILD_STATUS',
                                to: "$DEST_EMAIL",
                                replyTo: "$REPLYTO_EMAIL",
                                body: '''
                                Project <strong>"$PROJECT_NAME"</strong> has completed.<br>
                                Build Number: $BUILD_NUMBER <br> 
                                Build Tag: $BUILD_TAG <br>
                                Job Url: <a href="$JOB_URL">Job URL</a> <br> 
                                Build Status: <strong>$BUILD_STATUS</strong><br><br>
                                New Tag: $DOCKER_TAG <br>
                                Check console output at <a href="${BUILD_URL}console">Console URL</a> or <a href="${BUILD_URL}pipeline-overview">Pipeline Overview URL</a> to view the results.
                                '''
                            )
                        }
                    }
                }

        ```

        - [x] Lines `7-18` contain environment variables. Replace the values according to your Jenkins server configuration

---
        
        

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


### Kubernetes Cluster Setup 







## CI Pipeline setup with Jenkins



## CCD Pipeline with ArgoCD (GitOps)



## Monitoring & Observability







    <div style="text-align: center;">
    [11-Microservices-k8s-App Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App){: target="_blank" .md-button .md-button--primary}
    </div>







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

!!! tip inline end "Tip"

    - Replace the clsuter name with your desired cluster name

``` sh hl_lines="2"
eksctl create cluster \
  --name opeyemi-k8s-cluster \
  --region us-east-2  
```

!!! tip
    Replace `opeyemi-k8s-cluster` with a suitable name for your own cluster.


### :simple-helm: Install Helm

Check if Helm is installed on your local machine

``` sh
helm version
```

If not, install Helm with this command

``` sh
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

---


## :simple-argo: ArgoCD Installation and Setup on EKS using Helm

Add ArgoCD Helm repo

``` sh
helm repo add argo https://argoproj.github.io/argo-helm
helm repo update
```

Install ArgoCD Helm Chart

``` sh
helm install opeyemi-argo-cd argo/argo-cd --namespace argocd --create-namespace
```

!!! tip "Tip"
    This will name the release `opeyemi-argo-cd` and create the `argocd` namespace if it doesn't exist then install ArgoCD in the `argocd` namespace.



???+ tip "Optional Steps to confirm the `argocd` installation"
    View helm releases in all namespaces (including the `argocd` namespace)
    
    ``` sh
    helm list -n argocd
    ```

    Check running status of pods in the `argocd` namespace to verify deployment

    ``` sh
    kubectl get pods -n argocd
    ```

    Get Helm release notes for the argocd installation

    ``` sh
    helm get notes opeyemi-argo-cd -n argocd
    ```

Expose the `argocd-server` service as a LoadBalancer

By default all the pods in the `argocd` namespace are of `ClusterIP` type. We need to expose the `argocd-server` service as a LoadBalancer service type to make it accessible from outside the cluster.

First, display list of services running in the argocd namespace

``` sh
kubectl get svc -n argocd
```

Next, expose the `opeyemi-argo-cd-argocd-server` service as a LoadBalancer type

``` sh
kubectl patch svc opeyemi-argo-cd-argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
```

!!! tip "Tip"
    You will need to wait a short while for LoadBalancer URL to become ready before you can access it inthe browser.

You can retrieve the LoadBalancer URL with:

``` sh
kubectl get svc -n argocd
```
OR use 
``` sh
kubectl get svc opeyemi-argo-cd-argocd-server -n argocd -o=jsonpath='{.status.loadBalancer.ingress[0].hostname}'
```

Use this LoadBalancer URL to access ArgoCD UI from your browser.

The initial password for the `admin` account is auto-generated and stored in the field `password` in a secret named `argocd-initial-admin-secret` in your Argo CD installation namespace. You can simply retrieve this password using kubectl:


??? warning inline end "Warning"

    In Production, You should delete the `argocd-initial-admin-secret` from the Argo CD namespace once you change the password. The secret serves no other purpose than to store the initially generated password in clear and can safely be deleted at any time. It will be re-created on demand by Argo CD if a new admin password must be re-generated. 
    
    [Learn more :fontawesome-solid-arrow-up-right-from-square:](https://argo-cd.readthedocs.io/en/stable/getting_started/#4-login-using-the-cli){: target="_blank" }

``` sh
kubectl get secrets -n argocd
```
OR use

``` sh
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```

??? tip "Accessing initial ArgoCD Admin password"
    Alternatively, you could access the ArgoCD initial Admin password by first displaying the contents of the `argocd-initial-admin-secret` then base64 decode the password field as show below:

    ``` sh
    kubectl get secrets argocd-initial-admin-secret -n argocd
    ```

    ``` sh
    echo "<initial-password-string>" | base64 -d
    ```
    * Where `initial-password-string` is the string in the password field of the json output

!!! tip 

    * [How to install ArgoCD using Helm Charts :fontawesome-solid-arrow-up-right-from-square:](https://artifacthub.io/packages/helm/argo/argo-cd){: target="_blank" }
    * You can also follow the ArgoCD installation guide on the [ArgoCD Documentation Website :fontawesome-solid-arrow-up-right-from-square:](https://argo-cd.readthedocs.io/en/stable/getting_started/#1-install-argo-cd){: target="_blank" }
    * You can access the helm release notes for the argocd by running: 
    ``` sh
    helm get notes opeyemi-argo-cd -n argocd
    ```

---

## :simple-prometheus: Prometheus Stack Installation and Setup on EKS using Helm

Add the kube-prometheus-stack Helm repo

``` sh
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

Install Prometheus Stack into `monitoring` namespace 


``` sh
helm install opeyemi-prometheus prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --create-namespace
```

??? code-file "==Delete this later=="
    ``` sh
    helm install prometheus prometheus-community/kube-prometheus-stack \
    --namespace monitoring \
    --create-namespace \
    --set prometheus.prometheusSpec.maximumStartupDurationSeconds=300 \
    --set alertmanager.persistence.storageClass="gp2" \
    --set server.persistentVolume.storageClass="gp2"
    ```


!!! tip "Tip"

    This will create the `monitoring` namespace if it doesn't exist already and deploy the full Prometheus monitoring stack (Prometheus + Grafana + Alertmanager + exporters) into the `monitoring` namespace

Check running status of pods in the `monitoring` namespace to verify deployment

``` sh
kubectl --namespace monitoring get pods -l "release=opeyemi-prometheus"
```

OR
``` sh
kubectl get pods -n monitoring
```

??? tip "Optionally you can display helm release notes for the Prometheus installation"
    ``` sh
    helm get notes opeyemi-prometheus -n monitoring
    ```

Expose Prometheus and Grafana as a LoadBalancer type to access

By default all the pods in the `monitoring`  namespace are of `ClusterIP` type. We need to expose Grafana and Prometheus services as LoadBalancer service types to make them accessible from outside the cluster.

First list all services in the monitoring namespace

``` sh
kubectl get svc -n monitoring
```

??? code-file "==Delete Later=="
    Display Grafana URL (optional)
    ``` sh
    kubectl get svc -n monitoring prometheus-grafana
    ```

    Display Prometheus URL (optional)
    ``` sh
    kubectl get svc -n monitoring prometheus-kube-prometheus-prometheus
    ``` 


Expose Grafana as a LoadBalancer for external access

``` sh
kubectl patch svc prometheus-grafana \
  -n monitoring \
  -p '{"spec": {"type": "LoadBalancer"}}'
```

Expose Prometheus as a LoadBalancer for external access

``` sh
kubectl patch svc prometheus-kube-prometheus-prometheus \
  -n monitoring \
  -p '{"spec": {"type": "LoadBalancer"}}'
```

Display list of all the services in the `monitoring` namespace again. AWS would create LoadBalancer URLs for each of Grafana and Prometheus

``` sh
kubectl get svc -n monitoring
```

!!! tip "Tip"

    You may need to wait a while for the `EXTERNAL-IP` field to be populated, then open each URL for both Grafana and Prometheus in your browser (Grafana on port `80`, Prometheus on port `9090`)


To get Grafana password, enter the command below. This will display the contents of the `prometheus-grafana` secret in json format. Copy the `admin-password` from the json output and decode it in base-64

``` sh
kubectl get secrets -n monitoring
```

``` sh
kubectl --namespace monitoring get secrets prometheus-grafana -o json 
```


``` sh
echo "<admin-password>" | base64 --decode

```

!!! tip "Tip"

    Replace the `<admin-password>` with the password string you copied from the json output


OR use this command

``` sh
kubectl --namespace monitoring get secrets prometheus-grafana -o jsonpath="{.data.admin-password}" | base64 -d ; echo
```

!!! tip "Tip"

    - Default Grafana Username is `admin`
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

## Clean-Up 

To avoid incurring uneccessary costs, it is advisable to clean up (destroy) all the infrastructural resources created during this project.

To destroy the infrastructure created by Terraform, navigate to the directory where your Terraform configuration files are located and run:

``` sh
terraform destroy --auto-approve
```

Uninstall ArgoCD and the kube-Prometheus stack

``` sh
helm uninstall opeyemi-argo-cd --n argocd
kubectl delete namespace argocd
helm uninstall opeyemi-prometheus --n monitoring 
kubectl delete namespace monitoring
```

Delete the EKS Cluster along with all other cluster resources

``` sh
eksctl delete cluster --name opeyemi-k8s-cluster --region us-east-2
```

!!! tip "Tip"

    * Wait until each of the commands completes 
    * Check your AWS Console to confirm that all resources have been successfully terminated
    


## **Conclusion**

Setting up a self-hosted VPN server using this Terraform configuration script is a straightforward and efficient way to enhance your network security and maintain control over your data. By following this documentation, you can deploy a robust OpenVPN server on AWS, customize it to your needs, and ensure private and secure internet access. This guide aims to empower you with the knowledge and tools to manage your own VPN server effectively. For any troubleshooting or further customization, explore the Terraform and OpenVPN documentation for advanced insights and solutions. 

