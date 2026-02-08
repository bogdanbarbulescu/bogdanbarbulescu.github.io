# Intermediate DevOps Learning Map

Next steps after foundations: Kubernetes, IaC, pipeline design, observability, and cert readiness. For where to lab, see [Where to Practice](#/learning/devops/where-to-practice-devops); for terms, see [Glossary](#/learning/devops/devops-glossary).

---

## Prerequisites

You should have completed the [Beginner roadmap](#/learning/devops/beginner-devops-roadmap) or equivalent: Linux, scripting, Git, one CI system, and Docker. You can build an image, run a container, and have a pipeline that produces an artifact.

---

## Core topics (in order)

### 1. Kubernetes basics

- **Concepts** — Cluster, control plane, nodes; Pods, Deployments, Services; ConfigMaps and Secrets; namespaces. How K8s schedules and runs your containers.
- **Practice** — Run Minikube or Kind; deploy an app (Deployment + Service); expose it; use ConfigMap/Secret for config. Do the same via YAML and via kubectl. See [Where to Practice](#/learning/devops/where-to-practice-devops).
- **Why** — Most production container workloads run on K8s or similar; you need to operate and debug at this level. Aligns with CKA/CKAD; see [Certifications & Career](#/learning/devops/devops-certifications-and-career).

### 2. IaC (Terraform or equivalent)

- **Concepts** — Declarative resources; state; plan and apply; one cloud provider (AWS, GCP, or Azure) for compute, networking, and optionally managed K8s.
- **Practice** — Define a small environment in Terraform: VPC, VM or ECS/EKS-style resource, and run plan/apply. Keep state in Terraform Cloud or S3. Move a real project’s infra into Terraform.
- **Why** — Reproducible, reviewable infrastructure is standard; Terraform Associate is a common cert. See [Toolchain overview](#/learning/devops/devops-toolchain-overview).

### 3. Pipeline design

- **Concepts** — Stages (build, test, security scan, deploy); environments (dev, staging, prod); secrets and env vars; approval gates and rollback.
- **Practice** — Extend your CI to: run tests in parallel, build and push to a registry, deploy to a dev/staging environment (e.g. K8s or cloud). Add a simple security check (e.g. image scan or dependency check).
- **Why** — Real pipelines have multiple stages and environments; you need to design for safety and speed.

### 4. Observability (logs and metrics)

- **Concepts** — Centralized logging; metrics (latency, errors, throughput); dashboards and alerts. One stack (e.g. Prometheus + Grafana, or cloud-native).
- **Practice** — Instrument a small app or use a demo app; send logs and metrics to a central place; build a dashboard and one alert. Understand SLI/SLO in principle; see [Glossary](#/learning/devops/devops-glossary).
- **Why** — You can’t run what you can’t see; SRE and reliability work depend on observability. See [Advanced roadmap](#/learning/devops/advanced-devops-roadmap) for deeper SRE.

### 5. Cert readiness (optional but recommended)

- **Concepts** — CKA/CKAD (Kubernetes), Terraform Associate, or one cloud associate cert. Know the exam format and domains; fill gaps from the roadmaps.
- **Practice** — Timed practice exams; rehearse CLI and YAML under time pressure. See [Certifications & Career](#/learning/devops/devops-certifications-and-career) for which cert fits your goal.
- **Why** — Certs help with HR and signal; they work best when backed by hands-on from this roadmap.

---

## Readiness checklist

Before moving to the [Advanced roadmap](#/learning/devops/advanced-devops-roadmap), you should be able to:

- Deploy and troubleshoot an app on Kubernetes (Pods, Deployments, Services, config).
- Write and apply Terraform for at least one cloud provider (or equivalent IaC).
- Design a pipeline with build, test, artifact, and deploy to at least one environment.
- Set up basic observability (logs and metrics) for a service.
- Explain how a change goes from commit to running in K8s (or cloud) with the tools you use.

---

## Timeline (rough)

- **Months 1–4** — Kubernetes: learn the object model, deploy and operate apps; optionally CKA/CKAD.
- **Months 3–6** — IaC: Terraform for one cloud; consider Terraform Associate.
- **Ongoing** — Pipeline improvements and observability; integrate with the above. Next: [Advanced DevOps Learning Map](#/learning/devops/advanced-devops-roadmap).
