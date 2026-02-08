# DevOps Glossary & Terminology

Short definitions for terms you will see in job posts, docs, and the [roadmaps](#/learning/devops/beginner-devops-roadmap) in this section. No fluff—just what you need to orient yourself.

---

## Culture & Practice

- **DevOps** — A culture and set of practices that bring development and operations together: faster feedback, automation, shared ownership of the full lifecycle from code to production. Not a job title alone; it describes how teams work.
- **SRE (Site Reliability Engineering)** — Discipline that uses software engineering to run systems: automation, SLIs/SLOs, error budgets, and reducing toil. Often overlaps with DevOps; see [Roles](#/learning/devops/devops-roles-and-expectations).
- **Shift-left** — Moving quality, security, and testing earlier in the pipeline (e.g. in dev or CI) instead of only at release or in production.
- **Toil** — Manual, repetitive work that could be automated. SRE aims to reduce toil so engineers focus on improvement.

---

## CI/CD & Pipelines

- **CI (Continuous Integration)** — Automatically building and testing code when changes are pushed. Goal: catch integration issues early. Tools: GitHub Actions, GitLab CI, Jenkins, etc.
- **CD (Continuous Delivery / Deployment)** — Continuous Delivery: code is always in a deployable state; releases are frequent and low-risk. Continuous Deployment: every change that passes tests goes to production automatically.
- **Pipeline** — The automated sequence from commit to run: build → test → artifact → (optionally) deploy. See [Toolchain overview](#/learning/devops/devops-toolchain-overview).
- **Artifact** — The output of a build (e.g. a container image, a JAR, a binary) that gets stored and deployed. Often stored in a registry.
- **Registry** — Repository for artifacts. For containers: Docker Hub, GitHub Container Registry, ECR, GCR. For packages: npm, Maven, etc.

---

## Containers & Orchestration

- **Container** — Isolated runtime for an application and its dependencies, sharing the host OS kernel. Portable and consistent across dev, test, and prod. Docker is the common runtime.
- **Docker** — Platform for building, shipping, and running containers. Dockerfile defines the image; `docker build` creates it; `docker run` runs it. See [Where to Practice](#/learning/devops/where-to-practice-devops).
- **Image** — Immutable snapshot of an application and its dependencies; the template from which containers are created.
- **Kubernetes (K8s)** — Orchestration system for containers: scheduling, scaling, self-healing, and declarative config (YAML). Dominant in production; see [Intermediate](#/learning/devops/intermediate-devops-roadmap) and [Advanced](#/learning/devops/advanced-devops-roadmap) roadmaps.
- **Pod** — Smallest deployable unit in Kubernetes; one or more containers that share network and storage.
- **Helm** — Package manager for Kubernetes: templated charts for deploying apps and their configs.

---

## Infrastructure & IaC

- **IaC (Infrastructure as Code)** — Defining infrastructure (servers, networks, cloud resources) in code so it can be versioned, reviewed, and applied consistently. Tools: Terraform, Pulumi, CloudFormation, Ansible (config management).
- **Terraform** — Popular IaC tool; declarative (HCL); works across AWS, Azure, GCP, and many providers. See [Certifications & Career](#/learning/devops/devops-certifications-and-career) for Terraform Associate.
- **Ansible** — Configuration management and automation: playbooks (YAML) to configure servers, deploy apps, or run ad-hoc tasks. Agentless (SSH).

---

## Observability

- **Observability** — Ability to understand system state from external outputs: logs, metrics, traces. “Can we answer questions we didn’t anticipate?”
- **Logging** — Recording events and messages from applications and infrastructure. Centralized in a log aggregator (e.g. ELK, Loki, cloud logging).
- **Metrics** — Numeric measurements over time (CPU, latency, error rate). Stored in time-series DBs (Prometheus, Grafana, cloud monitoring).
- **Tracing** — Following a request across services to see latency and dependencies. Often OpenTelemetry or vendor-specific (Jaeger, Zipkin).
- **SLI (Service Level Indicator)** — A measurable aspect of service health (e.g. availability, latency). SRE uses SLIs to define SLOs.
- **SLO (Service Level Objective)** — Target for an SLI (e.g. “99.9% availability”). Drives error budgets and prioritization.
- **Error budget** — Amount of “allowed” unreliability (1 − SLO). When the budget is exhausted, focus shifts from new features to reliability.

---

## Other

- **Git** — Version control for source code. Branching, pull requests, and trunk-based flow are central to CI/CD. See [Beginner roadmap](#/learning/devops/beginner-devops-roadmap).
- **Build** — Compiling or packaging code into an artifact. In CI, the build step often runs tests and produces the artifact.
- **Deploy** — Releasing an artifact to an environment (staging, production). Can be rolling, blue-green, or canary.

Use the [Certifications & Career](#/learning/devops/devops-certifications-and-career) resource for how certs and roles use these terms.
