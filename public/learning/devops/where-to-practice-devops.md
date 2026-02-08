# Where to Practice: Labs & Environments

A single reference for where to build DevOps skills at each stage. The [Beginner](#/learning/devops/beginner-devops-roadmap), [Intermediate](#/learning/devops/intermediate-devops-roadmap), and [Advanced](#/learning/devops/advanced-devops-roadmap) roadmaps mention these in context; here they are in one place.

---

## Docker (local)

- **What it is** — Run containers on your machine. Install Docker Desktop or Docker Engine; build images with Dockerfiles, run containers, push to a registry.
- **Use it for** — First steps with containers: run a web app, multi-container setup (e.g. app + DB), and understanding images vs containers. Aligns with the [Beginner roadmap](#/learning/devops/beginner-devops-roadmap). Free and enough for foundations.
- **Get it** — [docker.com](https://www.docker.com/products/docker-desktop) (Desktop or Engine; Linux often uses Engine).

---

## Minikube / Kind (local Kubernetes)

- **What it is** — Minikube or Kind run a small Kubernetes cluster on your laptop. Minikube: one-node cluster; Kind: K8s in Docker (good for CI).
- **Use it for** — After you’re comfortable with Docker: learning Pods, Deployments, Services, and basic K8s concepts. Fits [Intermediate](#/learning/devops/intermediate-devops-roadmap) and cert prep (CKA/CKAD). See [Certifications & Career](#/learning/devops/devops-certifications-and-career).
- **Get it** — [minikube.sigs.k8s.io](https://minikube.sigs.k8s.io/), [kind.sigs.k8s.io](https://kind.sigs.k8s.io/). Free.

---

## GitHub Actions / GitLab CI

- **What it is** — CI/CD built into the Git host. Define workflows in YAML; runs on push/PR. Free tiers for public repos and limited private use.
- **Use it for** — Learning pipelines: build, test, push images, deploy. Essential for the [Beginner](#/learning/devops/beginner-devops-roadmap) and [Intermediate](#/learning/devops/intermediate-devops-roadmap) roadmaps. Real-world and resume-friendly.
- **Get it** — GitHub or GitLab account; workflows live in your repo. See [Toolchain overview](#/learning/devops/devops-toolchain-overview) for where CI fits.

---

## Cloud free tiers (AWS, GCP, Azure)

- **What it is** — Limited free usage for VMs, containers, serverless, and sometimes managed K8s. Enough for learning and small projects.
- **Use it for** — After local Docker and CI: run containers in the cloud, try managed services (e.g. ECS, EKS free tier), and practice IaC (Terraform) against real APIs. Fits [Intermediate](#/learning/devops/intermediate-devops-roadmap) and [Advanced](#/learning/devops/advanced-devops-roadmap).
- **Get it** — AWS Free Tier, Google Cloud Free Program, Azure Free Account. Watch usage to avoid charges.

---

## Terraform (local or cloud)

- **What it is** — IaC tool; you write HCL, apply it to create/update/destroy resources. Can target local providers (e.g. Docker) or cloud.
- **Use it for** — Learning IaC without big cloud spend: start with local/Docker provider, then add one cloud provider. Aligns with [Intermediate](#/learning/devops/intermediate-devops-roadmap) and Terraform Associate prep. Terraform Cloud has a free tier for remote state and runs.
- **Get it** — [terraform.io](https://www.terraform.io/). Open source; Terraform Cloud optional.

---

## What to avoid

- **Only following tutorials** — You must write your own Dockerfile, pipeline, and Terraform config; break things and fix them. Labs are where theory becomes practice.
- **Skipping version control** — Every lab should live in Git with clear commits. Builds habits that matter in interviews and on the job; see [Certifications & Career](#/learning/devops/devops-certifications-and-career).

Use the [Glossary](#/learning/devops/devops-glossary) and [Toolchain overview](#/learning/devops/devops-toolchain-overview) when you need quick reference while practicing.
