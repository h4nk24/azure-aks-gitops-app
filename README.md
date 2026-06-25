# Azure AKS GitOps App

Sample HTTP application for the Terraform-based Azure AKS GitOps lab.

## Endpoints

- `/`: application metadata
- `/healthz`: health check

## Build and deployment

The default project workflow does not require local Docker. GitHub Actions
tests the application, builds the container image, pushes it to Azure
Container Registry, and updates the Kustomize image tag for Argo CD.
