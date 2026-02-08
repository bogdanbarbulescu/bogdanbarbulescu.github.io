# Toolchain: A Map of the Pipeline

A high-level map of the pipeline and ecosystem: from source to run. For detailed study, use the [Beginner](#/learning/devops/beginner-devops-roadmap), [Intermediate](#/learning/devops/intermediate-devops-roadmap), and [Advanced](#/learning/devops/advanced-devops-roadmap) roadmaps. For definitions, see [Glossary](#/learning/devops/devops-glossary).

---

## The pipeline (source → run)

1. **Source** — Code and config live in Git (GitHub, GitLab, etc.). Branches, PRs, and trunk-based flow drive when builds run.
2. **Build** — CI (GitHub Actions, GitLab CI, Jenkins, etc.) runs on push/PR: compile, test, lint, security checks. Output: artifact (e.g. container image, binary).
3. **Artifact** — Stored in a registry (Docker Hub, GHCR, ECR, GCR). Versioned and immutable; deploy uses a specific tag or digest.
4. **Deploy** — Release to an environment (dev, staging, prod). Can be manual approval, automated on merge, or canary/blue-green. Target: VMs, containers (Docker, ECS), or Kubernetes.
5. **Run** — Application runs in the environment. Observability (logs, metrics, traces) and config (env, secrets, IaC) support operation and debugging.

---

## Key tool categories

### Version control and collaboration

- **Git** — Foundation. Branching, PRs, and merge strategy define how changes enter the pipeline. See [Beginner roadmap](#/learning/devops/beginner-devops-roadmap).
- **GitHub / GitLab / Bitbucket** — Hosting, PRs, and often CI. Many teams use one of these as the hub.

### CI/CD

- **GitHub Actions, GitLab CI** — Pipeline-as-code in the repo; good for getting started. See [Where to Practice](#/learning/devops/where-to-practice-devops).
- **Jenkins** — Self-hosted; plugins for many integrations. Common in enterprises.
- **Other** — CircleCI, Travis, Azure DevOps, etc. Concepts (build → test → artifact → deploy) are similar across tools.

### Containers and orchestration

- **Docker** — Build and run containers; Dockerfile and registry. See [Beginner](#/learning/devops/beginner-devops-roadmap) and [Glossary](#/learning/devops/devops-glossary).
- **Kubernetes** — Orchestration: scheduling, scaling, self-healing. See [Intermediate](#/learning/devops/intermediate-devops-roadmap) and [Advanced](#/learning/devops/advanced-devops-roadmap).
- **Helm** — Package manager for K8s; charts for apps and configs.

### Infrastructure as Code

- **Terraform** — Multi-cloud IaC; HCL; stateful. See [Intermediate](#/learning/devops/intermediate-devops-roadmap) and [Certifications & Career](#/learning/devops/devops-certifications-and-career).
- **Pulumi** — IaC in general-purpose languages (e.g. TypeScript, Python).
- **CloudFormation, Bicep** — Native to AWS and Azure; good if you stay in one cloud.

### Observability

- **Logging** — ELK, Loki, cloud logging (CloudWatch, etc.). Centralize and search.
- **Metrics** — Prometheus, Grafana, cloud monitoring. Dashboards and alerts.
- **Tracing** — OpenTelemetry, Jaeger, Zipkin. Request flow across services. See [Glossary](#/learning/devops/devops-glossary) (observability, SLI, SLO).

---

## How it fits together

- **Dev** commits → **Git** → **CI** builds and tests → **Registry** holds artifact → **Deploy** (manual or automated) → **Run** in VMs/K8s/cloud. **Observability** and **IaC** support the whole loop.

Use this page as a quick map; pair with [Where to Practice](#/learning/devops/where-to-practice-devops) and the roadmaps for hands-on depth.
