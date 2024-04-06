#!/bin/bash

# Step 1: Deploy the CloudFormation stack to create ECR repositories
STACK_NAME="BuffetIndicator"
CFN_TEMPLATE="ecr-repositories.yaml"

echo "Deploying CloudFormation stack to create ECR repositories..."
aws cloudformation deploy --template-file $CFN_TEMPLATE --stack-name $STACK_NAME --capabilities CAPABILITY_NAMED_IAM

# Fetch the ECR repository URIs
FRONTEND_REPO_URI=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query "Stacks[0].Outputs[?OutputKey=='FrontendECRRepositoryURI'].OutputValue" --output text)
API_REPO_URI=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query "Stacks[0].Outputs[?OutputKey=='ApiECRRepositoryURI'].OutputValue" --output text)
POSTGRES_REPO_URI=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query "Stacks[0].Outputs[?OutputKey=='PostgresECRRepositoryURI'].OutputValue" --output text)

echo "ECR Repositories created:"
echo "Frontend: $FRONTEND_REPO_URI"
echo "API: $API_REPO_URI"
echo "Postgres: $POSTGRES_REPO_URI"

# Step 2: Build and push Docker images to the ECR repositories
# Assuming Dockerfiles are located in directories named frontend, api, and postgres respectively
echo "Building and pushing Docker images..."

$(aws ecr get-login --no-include-email) # Log in to ECR

# Build and push Frontend
docker build -t bifrontend ./frontend/
docker tag bifrontend:latest $FRONTEND_REPO_URI:latest
docker push $FRONTEND_REPO_URI:latest

# Build and push API
docker build -t biapi ./api/
docker tag biapi:latest $API_REPO_URI:latest
docker push $API_REPO_URI:latest

# Build and push Postgres
docker build -t bipostgres ./postgres/
docker tag bipostgres:latest $POSTGRES_REPO_URI:latest
docker push $POSTGRES_REPO_URI:latest

# Step 3: Deploy the Docker images to LightSail (requires AWS CLI v2)
# Note: This step might require additional configurations such as service and container names, ports, etc.

echo "Deploying containers to LightSail..."
# This step is highly dependent on your specific LightSail configuration and needs.
# As of my last update, the LightSail deployment would be done manually or with AWS CLI commands tailored to your setup.
# Example placeholder command (replace with your actual deployment command):
# aws lightsail create-container-service-deployment --service-name "MyLightSailService" ...

echo "Deployment script completed."
