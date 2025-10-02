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
show_ai_buttons: true

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


The goal of this project is to design and implement an end-to-end DevOps workflow that automates:

* Infrastructure provisioning with Terraform
* Continuous Integration (CI) using Jenkins for building, testing, scanning, and pushing container images
* Continuous Delivery (CD) using ArgoCD (GitOps) for seamless deployment to Amazon EKS
* Security and code quality checks with SonarQube, Gitleaks, and Trivy
* Monitoring and observability with Prometheus and Grafana

All components were carefully integrated to simulate a real-world DevOps environment, covering every stage from source code to production deployment.

The project highlights key modern DevOps practices, including:

* **Infrastructure as Code (IaC):** Automating cloud resource provisioning with Terraform.
* **GitOps:** Managing Kubernetes deployments declaratively with ArgoCD.
* **CI/CD Automation:** Orchestrating multi-stage pipelines with Jenkins.
* **Cloud-Native Security:** Ensuring code quality, vulnerability management, and secrets detection.
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

- [x] Infrstructure Setup
    - Setup Jenkins Using Terraform
    - Create Kubernetes Cluster on EKS
- [x] Configure Jenkins
    - [x] Install plugins: Go to `Dashboard > Manage Jenkins > Manage Plugins` and install the following plugins:
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
    - [x] Configure Jenkins Plugins
    - [x] Configure SonarQube Server Token
    - [x] Setup Jenkins CI/CD Pipelines
- [x] Install and Setup Grafana and Prometheus Monitoring
- [x] Install ArgoCD for GitOps
- [x] Deploy Application to EKS Using GitOps
- [x] CleanUp Resources

---

## Infrastructure Setup

---
### :simple-sonarqubeserver: Configure SonarQube Server

From your browser, login to your **SonarQube server** using the  server ip and port `9000` 

Server URL: `<sonar_server_ip>:9000`

!!! tip "Tip"
    
    Since our SonarQube server is running as a docker container on port `9000` on the same machine as the Jenkins server, use `<jenkins_server_ip>:9000` as the SonarQube Server URL.

Create a User token by going to `Administration > Security > Users` and save it somewhere for later

This token will be used to authenticate Jenkins to access the SonarQube server.


---

### Jenkins Server Setup

For the purpose of this project, we will be creating our Jenkins Server on an ec2 instance using Terraform as our IaC tool. The Jenkins server will also serve as out base server from where we will manage other infrastructures like  the EKS cluster.

I have included the link to my Github repo containing the Jenkins server Terraform script below.  

??? tip "Pre-requisites for the terraform script"

    You will need the following pre-requisites to run the terraform script on your local machine:

    - [x] An AWS account _([Get one here :fontawesome-solid-arrow-up-right-from-square:](https://aws.amazon.com/free/){: target="_blank" })_
    - [x] Terraform CLI installed on your local machine _([How to Install Terraform :fontawesome-solid-arrow-up-right-from-square:](https://developer.hashicorp.com/terraform/install){: target="_blank" })_
    - [x] Your AWS access key ID and secret access key _(learn how to get your AWS access keys [here :fontawesome-solid-arrow-up-right-from-square:](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html){: target="_blank" })_
    - [x] AWS CLI installed and configured with your AWS access key ID and Secret access keys _(learn more about AWS CLI [here :fontawesome-solid-arrow-up-right-from-square:](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html){: target="_blank" })_ 

??? info "What does this terraform script do?"
    The Terrafom script will do the following:

    - [x] Provision an ec2 instance of type `t2.large` (You can easily set a different instance type in the `terraform.tfvars` file)
    - [x] Provision the ec2 instance in the default VPC
    - [x] Configure the security group to expose (1) all the required ports for this project. The required ports are: 22, 25, 80, 443, 465, 8080, 9000 and 9100. (The ports and their descriptions are listed in the `terraform.tfvars` file) { .annotate }
    - [x] Create an AWS Key-Pair file and download the file unto your terraform working directory on your local machine _(the folder from where you initiated the terraform apply command)_
    - [x] Using the included Bash script _(in the user_data field)_, it will bootstrap and install the following:

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

    !!! warning "Important Security Note"
        Since this is just a demo project, the ports are deliberately exposed and may be accessible over the internet for the duration of the project demonstration. ==This is not a good security practice in production environments and should be avoided :smile:==

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

Use the `Public IP address` to access the Jenkins server initial setup UI from your browser on port `8080`.

`<server_public_ip>:8080`

Also, open the terraform working folder from a terminal and use the `SSH connection string` to access the jenkins server.

``` sh 
ssh -i `key_pair_filename` ubuntu@`<server_public_ip>`
```

#### Login to Jenkins Server

Go back to the Jenkins server terminal to copy the initial Admin password

From the jenkins server terminal, enter the command and copy the password displayed
``` sh
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

??? tip "Jenkins initial Admin Password - alternative method"
    You can also find the initial Jenkins Admin Password by checking the running status of jenkins using the command below:
    ``` sh
    sudo systemctl status jenkins
    ```


From the Jenkins server initial setup UI page in your browser, enter the jenkins initial admin password you copied to proceed with jenkins server setup.

Install the `Suggested Plugins` and login to the Jenkins Server as Admin

Install suggested Jenkins Plugins and login as admin

Optionally, Setup a new admin password - `jenkins > admin > security`

#### Install Additional Plugins

Go to `Manage Jenkins > Plugins > Available Plugins`, search for and install the following jenkins plugins from the plugin page then restart Jenkins:

- SonarQube Scanner _(Scans your code and communicates with the SonarQube server)_
- Docker _(Enables Jenkins to use docker commands)_
- Docker pipeline _(Enables Jenkins to use docker commands in pipeline jobs)_
- Docker build step 
- Cloudbees docker build and publish
- Email Extension Template _(Used to send job email notifications)_
- Prometheus Metrics _(Exposes Jenkins internal metrics so we can scrape and display them through Grafana dashboards)_

---

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

---

#### Add Credentials

Go to `Manage Jenkins > Credentials > (Global) > Add Credentials` and add the following credentials:


- [x] Add SonarQube Credentials
    - Choose Secret Text as the kind
    - Set the ID and description as `sonar-token`
    - Click Add

- [x] Add Docker Hub Credentials:
    - Choose Username with password as the kind.
    - Set the ID and description as `my-docker-cred`
    - Enter your Docker Hub username and password.
    - Click Add.

- [x] Add GitHub Credentials:
    - Choose Secret text as the kind.
    - Set the ID and description as `github-cred`
    - Enter your GitHub Personal Access Token as the secret.
    - Click Add.

- [x] Add e-mail Credentials:
    - Choose Username and Password as the kind
    - Set ID and description as `email-ID`
    - Enter your email username
    - Enter the `App password` generated from Gmail as the password _(:red_circle: Do not use your real Gmail password here)_
    - Click Add.




---


#### Configure Plugins

Go to `Manage Jenkins > Tools` and configure each of the plugin tools as explained below: 

**SonarQube Scanner Installations**

Go to `Manage Jenkins > Tools > SonarQube Scanner installations` and add a new SonarQube Scanner installation as below:

- [x] SonarQube Scanner: `sonar-scanner` (Or use a suitable name)

!!! tip "Tip"
    This name will be used later in our CI pipeline to reference the sonar tool installation so ensure you choose a unique name.

- [x] Leave the default SonarQube version as it is


Set the SonarQube server URL under `Manage Jenkins > System > SonarQube Installations`

Server Name: `sonar` _(This name will be used later in the job pipeline)_

Server URL: `http://<sonar_server_ip>:9000` _(URL of the SonarQube server on port 9000)_

Server authentication token: Select the `sonar token ID` saved earlier in the credentials tab

`Apply` and `Save`


---

**Docker**

Go to `Manage Jenkins > Tools > Docker installations` and add a new docker installation

Docker Name: `docker`

Set to `Install Automatically from docker.com`

Click `Apply` and `Save`

---

Go to `Manage Jenkins > System` and configure the following settings:

System Admin e-mail address: `Jenkins Admin <your-email@email.com>` 
_(Enter the Jenkins Admin email here, this will appear in the email sender field of your inbox)_


---

**SonarQube servers**

Name: `sonar` _(This name will be used later in the pipeline)_

Server URL: `<sonar_server_ip:9000>` _(This should be the ip address of the SonarQube server on port `9000` which in our case, is also the same as our Jenkins server ip address)_

Server Authentication token: `sonar-token`


---

**Declarative Pipeline (Docker)**

Docker Label: `docker`

---

**Prometheus**

No further configuration needed

By default, the Prometheus metrics will be scrapped from `http://<jenkins_server_ip:8080>/prometheus`

---

**Jenkins Email Notifications**

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

    - The settings above apply to Gmail address configuration. Confirm SMTP settings from your email service provider if different from Gmail.
    - Copy `App password` from your Gmail account security settings and use that as the password in the above configuration.

---

**Default Content Type**

Set to `HTML (text/html)`

---

Click `Save` to close the configurations page

---


### :simple-jenkins: **Setting Up the Jenkins Pipelines**

For this project we will set up 2 separate pipelines.

1. **Continuous Integration (CI) Pipeline** - This pipeline will be responsible for building, testing, scanning and pushing the docker images to Docker Hub
2. **Continuous Delivery (CD) Pipeline** - This pipeline will be responsible for updating the k8s manifest file in the GitHub repo with the new docker image tags pushed by the CI pipeline

#### Continuous Integration (CI) Pipeline

- Go to `Jenkins > Create a Job` and give the new job item a name

- Select `Pipeline` and click `OK`

Go to `the_job_name > Configuration > Pipeline` and select `Pipeline script`

Copy and paste the CI pipeline script below into the script template box.

Click `Save`

Below is the Jenkins pipeline script for the `Continous Integration (CI)`.

I have include details on how this pipeline script works in the annotation box below.

??? info "Jenkins Continuous Integration (CI) Pipeline script for the Jenkins CI job"

    <div style="text-align: center;">
    [11-Microservices-k8s-App Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App){: target="_blank" .md-button}
    </div>    
    
    The Jenkins CI pipeline is below:

    ??? code-file "Jenkins CI Pipeline Script - Click here"
            
        ``` groovy hl_lines="9-24"
        // 11-Microservices-k8s-App Jenkins Pipeline Script
        
        pipeline {
            agent any

            environment {
                // ====== CONFIG VARIABLES ======
                // Replace values with the values configured in your Jenkins server configuration
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
    
    ??? info "How This Jenkins Pipeline Script Works"

        Below is a breif description of how this jenkins CI pipeline script works

        This Jenkins pipeline automates the entire CI workflow for the 11-microservices Kubernetes application. It takes care of pulling the source code, scanning for security issues, analyzing code quality, building Docker images for each microservice, pushing them to Docker Hub, and finally updating the Kubernetes manifests with the new image tags. Here’s how it works step by step:
        
        * Environment Setup - The pipeline defines environment variables for Git, Docker, SonarQube, Trivy, Gitleaks, and email notifications. These variables let Jenkins know where to pull code from, where to push images, and how to connect with external tools like SonarQube or Docker Hub. The Docker image tag is dynamically generated from the Jenkins build number (e.g. ver-23).

        * Workspace Preparation - The pipeline starts with Clean Workspace, which clears out any old files or artifacts from previous builds. This ensures that every run starts fresh and avoids conflicts.

        * Source Code Checkout - Jenkins pulls the application code from the configured GitHub branch (OpeyemiTechPro-v1) to the workspace, making it ready for scanning and builds.

        * Security & Quality Scans

            * Gitleaks Scan: Detects any hardcoded secrets (API keys, passwords, tokens) in the repository.

            * SonarQube Analysis: Runs static code analysis for code quality, bugs, and maintainability issues.

            * Trivy FS Scan: Scans the project’s filesystem for known vulnerabilities before building the Docker images.

        * Docker Image Build & Push - Each microservice (adservice, cartservice, checkoutservice, etc.) has its own build stage. Jenkins Switches into each of the microservice directory, builds a Docker image tagged with the current build version, pushes the image to Docker Hub using stored credentials and this process is repeated for all 11 microservices, ensuring they are all containerized and versioned consistently.

        * Docker Image Cleanup - Once the images are pushed to Docker Hub, Jenkins cleans up local images to free up space on the build server to avoid taking up unneccessary space on the Jenkins server

        * Update Kubernetes Manifest - Instead of deploying directly, the pipeline triggers a separate Jenkins job called `Update-Manifest`. The `Update-Manifest` job updates the Kubernetes deployment manifests with the newly built Docker tags, ensuring that the cluster always runs the latest version of the services.

        * Post-Build Notifications - Regardless of success or failure, Jenkins sends an email notification with build details, logs, and scan reports (Trivy, Gitleaks, dependency-check). This gives visibility into what happened during the pipeline run.

        ✅ In summary: This pipeline performs code checkout → security scans → code quality analysis → Docker builds → image push → Kubernetes manifest update → notifications.
        It enforces DevSecOps practices while automating the entire CI/CD workflow for the microservices app on Kubernetes.



---

#### **Continuous Delivery (CD) Pipeline**

- Go to `Jenkins > Create a Job` and create a second job item

- Name the job `Update-Manifest`

!!! tip "Tip"
    It is important that the pipeline must be named `Update-Manifest` because this will be referenced by the CI pipeline script we created earlier. If you choose to use a different name, ensure you modify your CI pipeline script to reflect that.


- Select `Pipeline` and click `OK`

Go to `Update-Manifest > Configuration > Pipeline` and select `Pipeline script`

Copy and paste the CD pipeline script below into the script template box.

Click `Save`

Below is the Jenkins pipeline script for the `Continous Deployment (CD)`.

I have also included details on how this pipeline script works in the annotation box below.

??? info "Jenkins CD Pipeline script for the `Update-Manifest` Jenkins job"

    <div style="text-align: center;">
    [11-Microservices-k8s-App-ArgoCD Manifest Source Code :simple-github: :fontawesome-solid-arrow-up-right-from-square:](https://github.com/opeyemitechpro/11-Microservices-k8s-App-ArgoCD){: target="_blank" .md-button}
    </div>



    ??? code-file "Jenkins CD Pipeline Script - Click here"

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

