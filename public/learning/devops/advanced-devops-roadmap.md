# Advanced DevOps Learning Map

Scale and ownership: Kubernetes at scale, multi-cloud, SRE practices, platform engineering, and lead/principal readiness. For foundations, see [Beginner](#/learning/devops/beginner-devops-roadmap) and [Intermediate](#/learning/devops/intermediate-devops-roadmap) roadmaps; for terms, see [Glossary](#/learning/devops/devops-glossary).

---

## Prerequisites

You should have solid intermediate experience: K8s in production or close (deploy, scale, debug), IaC in use, pipelines with multiple environments, and basic observability. You are ready to own larger systems and guide others.

---

## Core topics

### 1. Kubernetes at scale

- **Concepts** — Multi-node clusters; resource limits and QoS; scheduling and affinity; ingress and service mesh (e.g. Istio) if relevant; security (RBAC, network policies, pod security). High availability and disaster recovery.
- **Practice** — Run or use a multi-node cluster; design for failure (node loss, zone failure); tune resources and observe behavior. Document runbooks for common failures.
- **Why** — Production clusters have many workloads and failure modes; you need to design and operate for scale and resilience. See [Certifications & Career](#/learning/devops/devops-certifications-and-career) for CKA/CKS if you want to certify depth.

### 2. Multi-cloud and hybrid

- **Concepts** — Running workloads across AWS, Azure, GCP, or on-prem; consistency via IaC and abstraction; trade-offs of multi-cloud (complexity vs flexibility). Hybrid: cloud + data center.
- **Practice** — Use Terraform (or similar) to provision in two providers; design a minimal “portable” pattern (e.g. K8s + object storage). Understand cost and lock-in.
- **Why** — Many organizations span more than one cloud; platform and lead roles often need to reason about this. See [Roles](#/learning/devops/devops-roles-and-expectations).

### 3. SRE practices

- **Concepts** — SLIs, SLOs, error budgets; toil reduction; incident response and postmortems; capacity planning and scaling. Reliability as a product.
- **Practice** — Define SLIs and SLOs for a service; implement error-budget-based policy (e.g. freeze features when budget is exhausted). Run a game day or postmortem. See [Glossary](#/learning/devops/devops-glossary) for definitions.
- **Why** — SRE is the next step for many DevOps engineers; see [Roles](#/learning/devops/devops-roles-and-expectations) and [Reading list](#/learning/devops/devops-reading-list).

### 4. Platform engineering

- **Concepts** — Internal platform as a product; APIs and self-service for devs; standards for deploy, observability, and security. Developer experience and golden paths.
- **Practice** — Design or improve an internal platform: e.g. “how do teams get a new service running in K8s?” Document the path; reduce friction with templates, docs, and automation.
- **Why** — Platform engineers own this space; see [Roles](#/learning/devops/devops-roles-and-expectations). Lead and principal roles often own platform strategy.

### 5. Lead and principal expectations

- **Concepts** — Owning technical direction for pipelines, platform, or reliability; mentoring; cross-team alignment; trade-off decisions (build vs buy, tech debt vs features). Communicating with leadership.
- **Practice** — Lead a technical initiative (e.g. “migrate all services to K8s” or “define SLOs for tier-1 services”); write design docs and run reviews; mentor one or more engineers.
- **Why** — Career progression for many stops at lead or principal; see [Certifications & Career](#/learning/devops/devops-certifications-and-career) for role progression.

---

## Readiness checklist

You are ready for advanced/lead roles when you can:

- Design and operate a production Kubernetes environment (multi-node, HA, security, observability).
- Reason about multi-cloud or hybrid and implement patterns with IaC.
- Define and use SLIs/SLOs and error budgets; run effective incidents and postmortems.
- Design or run an internal platform that other teams depend on.
- Lead technical decisions and mentor others; communicate trade-offs to non-engineers.

---

## Summary

Advanced DevOps is about scale, reliability, and ownership. The [Intermediate roadmap](#/learning/devops/intermediate-devops-roadmap) gives you the tools; this one gives you the practices and scope. Use the [Reading list](#/learning/devops/devops-reading-list) for SRE and platform deep dives, and [Certifications & Career](#/learning/devops/devops-certifications-and-career) for how this maps to roles and progression.
