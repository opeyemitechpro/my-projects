#!/bin/bash

# Bash script to intialize Jenkins Master Server 
# Install Java, Jenkins, Docker, SonarQube, Trivy, AWS cli, Kubectl, and eksctl

set -e # Exit script on first error.

# Log all output to file 
exec >> /var/log/setup_script.log 2>&1


###################################

echo "Initializing script..."

# Update system packages
echo "Updating system packages..."
sudo apt-get update -y

# # Install OpenJDK 17
# echo "Installing OpenJDK 17..."
# sudo apt update -y
# sudo apt install fontconfig openjdk-17-jre -y

# # Check the Java installation
# echo "Checking Java installation..."
# java -version


############################
# Install OpenJDK 21
echo "Installing OpenJDK 21..."
sudo apt update -y
sudo apt install fontconfig openjdk-21-jre -y

echo "Checking Java installation..."
java -version

###################################



# # Install Jenkins
# echo "Installing Jenkins..."
# sudo wget -q -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

# # Add Jenkins to the apt repository list
# echo "Adding Jenkins repository..."
# echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

# # Update package list and install Jenkins
# sudo apt-get update
# sudo apt-get install jenkins -y


####################################

# Install Jenkins
echo "Installing Jenkins..."

sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins -y

# Enable Jenkins to start on boot
echo "Enabling Jenkins to start on boot..."
sudo systemctl enable jenkins

# Start Jenkins service
echo "Starting Jenkins service..."
sudo systemctl start jenkins

# Check Jenkins service status
# sudo systemctl status jenkins

echo "Jenkins installation completed successfully!"

######################################



# # Install Docker
# echo "Installing Docker"
# echo
# sudo apt-get update -y
# sudo apt-get install docker.io -y
# sudo usermod -aG docker $USER   # Add the current user to the docker group
# newgrp docker
# sudo chmod 777 /var/run/docker.sock

# # Restart Docker after System restart
# sudo systemctl enable docker

#############

# Install Docker
echo "Installing Docker"
echo

# Update package lists
sudo apt-get update -y

# Install Docker
sudo apt-get install docker.io -y

# Create docker group if it doesn't exist
sudo groupadd -f docker

# Add all existing users to the docker group
for user in $(grep -E '^[^:]+:[^:]+:[0-9]{4}' /etc/passwd | cut -d: -f1); do
    sudo usermod -aG docker $user
done

# Set permissions for Docker socket
sudo chmod 666 /var/run/docker.sock

# Install ACL package for additional permission management
sudo apt-get install acl -y
sudo setfacl -m user:${USER}:rw /var/run/docker.sock

# Enable Docker service to start on boot
sudo systemctl enable docker

# Start Docker service
sudo systemctl start docker

# Apply changes without requiring logout
newgrp docker

echo "Docker installation complete."

#################

# Wait for Docker to initialize
sleep 10

###################################

# Sonarqube Container
echo "Installing Sonarqube..."
echo
docker run -d --name sonar -p 9000:9000 --restart unless-stopped sonarqube:lts-community

# Provide user with feedback
echo "SonarQube is now running and accessible at http://localhost:9000"

###################################

# Install Trivy (Security scanner for containers and other artifacts)
echo "Installing Trivy..."
sudo apt-get install wget apt-transport-https gnupg lsb-release -y
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update -y
sudo apt-get install trivy -y

# Update system packages again
echo "Updating system packages..."
sudo apt-get update -y

###################################

# Install AWS CLI
echo "Installing AWS CLI..."
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo apt install unzip -y
unzip awscliv2.zip
sudo ./aws/install

# Clean up AWS CLI installation files
rm awscliv2.zip
rm -rf aws

# Configure AWS CLI by running:
# aws configure


###################################

# Install Kubectl (Command-line tool for Kubernetes)
echo "Installing Kubectl..."
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
chmod +x kubectl

# Create a local bin directory for the user if it doesn't exist and move Kubectl there
mkdir -p ~/.local/bin
mv ./kubectl ~/.local/bin/kubectl

# Optionally, check Kubectl version
# kubectl version --client

# Configure Kubectl Autocomplete (Optional)
echo "Setting up Kubectl autocomplete..."
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc

###################################

# Install eksctl (Command-line tool for Amazon EKS)
echo "Installing eksctl..."
ARCH=amd64  # For ARM systems, set ARCH to arm64, armv6, or armv7
PLATFORM=$(uname -s)_$ARCH
curl -sLO "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_$PLATFORM.tar.gz"
tar -xzf eksctl_$PLATFORM.tar.gz -C /tmp && rm eksctl_$PLATFORM.tar.gz
sudo mv /tmp/eksctl /usr/local/bin/eksctl

###################################

# Begin Installation -  Node_Exporter
echo "Installing Node Exporter"
echo
sudo useradd \
    --system \
    --no-create-home \
    --shell /bin/false node_exporter

wget https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-amd64.tar.gz

tar -xvf node_exporter-1.6.1.linux-amd64.tar.gz

sudo mv \
  node_exporter-1.6.1.linux-amd64/node_exporter \
  /usr/local/bin/
  
rm -rf node_exporter*

# node_exporter --version

# node_exporter --help


# Create a node_exporter.service file and add the following text
echo "Creating a node_exporter.service file"

sudo cat > /tmp/node_exporter.service << EOF

[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

StartLimitIntervalSec=500
StartLimitBurst=5

[Service]
User=node_exporter
Group=node_exporter
Type=simple
Restart=on-failure
RestartSec=5s
ExecStart=/usr/local/bin/node_exporter \
    --collector.logind

[Install]
WantedBy=multi-user.target
EOF

sleep 5

# Move the node_exporter.service file to the correct location
sudo mv /tmp/node_exporter.service /etc/systemd/system/node_exporter.service

# Change the ownership and permissions of the node_exporter.service file
sudo chown root:root /etc/systemd/system/node_exporter.service
sudo chmod 644 /etc/systemd/system/node_exporter.service
# Reload the systemd manager configuration
sudo systemctl daemon-reload

# start the Node Exporter after reboot, enable the service.
echo "Starting Node Exporter Service"
echo
sudo systemctl enable node_exporter

# start node exporter 
sudo systemctl start node_exporter

# Check the status of Node Exporter
# sudo systemctl status node_exporter

# Access Node Exporter on <public-ip:9100>

# optionally, you can check the node exporter metrics using the following command
# http://<public-ip>:9100/metrics


# Use this to check for node_exporter installation issues
# journalctl -u node_exporter -f --no-pager

sleep 5
echo "Node_Exporter Installation complete."

# End Installation - Node_Exporter 

###################################

# Provide feedback to the user
echo "Installation of aws cli, kubectl, eksctl completed successfully!"

# Rename Hostname for easy id at prompt
sudo hostnamectl set-hostname Jenkins-Master
# exec bash

echo "Initialization script completed successfully."
