# Beginner DevOps Learning Map

A 6–12 month roadmap to build real DevOps foundations: Linux, scripting, Git, CI, and containers. For where to lab, see [Where to Practice](#/learning/devops/where-to-practice-devops); for terms, see [Glossary](#/learning/devops/devops-glossary).

---

## What beginners often get wrong

- **Tool-first** — Jumping into Kubernetes or advanced cloud before understanding Linux, Git, and how a build pipeline runs.
- **No hands-on** — Reading or watching only; never writing a Dockerfile, pushing to a registry, or running a CI job.
- **Cert chase** — Collecting certs without building real pipelines and running containers. One solid foundation beats shallow breadth.

**What actually matters at this stage:** Linux/CLI comfort, basic scripting, Git workflow, one CI system, and containers (Docker). The [Intermediate](#/learning/devops/intermediate-devops-roadmap) and [Advanced](#/learning/devops/advanced-devops-roadmap) roadmaps build on this.

---

## Core topics (in order)

### 1. Linux and CLI

- **Concepts** — Filesystem, permissions, processes, packages, SSH, and basic shell usage. Why servers and containers run Linux.
- **Practice** — Use a Linux VM or WSL; navigate, edit files (vim/nano), install packages, run services. Do everything from the terminal at least once.
- **Why** — Almost all DevOps tooling runs on Linux; you need to be at home in the shell.

### 2. Scripting (Bash and/or Python)

- **Concepts** — Variables, conditionals, loops, functions; reading/writing files; calling commands. Enough to automate small tasks.
- **Practice** — Write scripts that: parse logs, check disk space, or trigger a build. Prefer Python if you plan to do more automation later; Bash for quick glue. See [Where to Practice](#/learning/devops/where-to-practice-devops) for environments.
- **Why** — Automation is central; scripts are the first step before IaC and pipelines.

### 3. Git

- **Concepts** — Repos, commits, branches, pull/merge, remotes (e.g. GitHub, GitLab). How teams use Git for code and config.
- **Practice** — Create a repo, make branches, open a PR, resolve a merge. Use Git for every lab from here on; see [Certifications & Career](#/learning/devops/devops-certifications-and-career) for why this matters in jobs.
- **Why** — CI/CD is triggered from Git; IaC and configs live in Git. You must be fluent.

### 4. CI basics

- **Concepts** — Trigger on push/PR; build step; test step; artifact (e.g. container image). One pipeline end-to-end.
- **Practice** — Add a GitHub Actions or GitLab CI workflow to a small project: run tests and build a Docker image. Push the image to a registry (Docker Hub or GHCR). See [Toolchain overview](#/learning/devops/devops-toolchain-overview) for the big picture.
- **Why** — Pipelines are the backbone of DevOps; you need to read, write, and debug at least one system.

### 5. Containers (Docker)

- **Concepts** — Image vs container; Dockerfile; build and run; volumes and networks; registry. One service in a container, then two (e.g. app + DB).
- **Practice** — Write a Dockerfile for a simple app; build, run locally, push to a registry. Run a multi-container stack (e.g. docker-compose). Use [Where to Practice](#/learning/devops/where-to-practice-devops) for Docker setup.
- **Why** — Containers are the standard unit of deployment; Kubernetes comes next in the [Intermediate roadmap](#/learning/devops/intermediate-devops-roadmap).

### 6. Optional: first cloud and IaC

- **Concepts** — One cloud provider (AWS, GCP, or Azure): account, CLI, one or two services (e.g. compute, container registry). IaC: Terraform or CloudFormation to create a small resource.
- **Practice** — Use free tier: create a VM or run a container in the cloud; define it in Terraform. Don’t go deep yet—just enough to see the loop: code → apply → resource.
- **Why** — Many jobs expect some cloud; a taste now makes [Intermediate](#/learning/devops/intermediate-devops-roadmap) easier.

---

## Readiness checklist

Before moving to the [Intermediate roadmap](#/learning/devops/intermediate-devops-roadmap), you should be able to:

- Use the Linux CLI for common tasks (files, processes, packages, SSH).
- Write a small script (Bash or Python) that automates something useful.
- Use Git: branch, commit, push, open a PR.
- Add a CI workflow that builds and tests (and optionally builds a container image).
- Write a Dockerfile, build an image, run a container, and push to a registry.
- Explain in one or two sentences: what happens from “git push” to “artifact in registry.”

---

## Timeline (rough)

- **Months 1–3** — Linux and CLI; scripting; Git and a first pipeline.
- **Months 4–6** — Docker: Dockerfile, multi-container, registry; integrate with CI.
- **Months 7–12** — Solidify with a small project (e.g. app in Docker + CI); optional first cloud and IaC. Consider first cert when ready; see [Certifications & Career](#/learning/devops/devops-certifications-and-career).

Adjust for your pace; consistency matters more than speed. Next: [Intermediate DevOps Learning Map](#/learning/devops/intermediate-devops-roadmap).
