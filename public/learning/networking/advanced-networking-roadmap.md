# Advanced Networking Learning Map

This map is for people who have completed the [Intermediate Networking Learning Map](#/learning/networking/intermediate-networking-roadmap) and its checklist. You can design and operate a small enterprise network with redundancy, basic security, and a bit of automation. The next step is **design at scale**, **deeper automation**, **cloud networking**, and **lead/architect readiness**. This document covers what actually matters at this stage.

---

## Design at scale

- **Concepts** — Hierarchical design (core, distribution, access); summarization and why we reduce routing table size; high availability (redundant paths, fast convergence). BGP basics: when and why you use it (data center, internet edge, multi-site).
- **Practice** — In [EVE-NG](#/learning/networking/where-to-practice-networking) or GNS3: multi-area OSPF or small BGP topology; practice summarization and failover. Document the design and the “why” behind each choice.
- **Why** — [Design roles](#/learning/networking/networking-roles-and-expectations) expect you to own architecture decisions and tradeoffs; see [Certifications & Career](#/learning/networking/networking-certifications-and-career) for typical progression.

---

## Automation and programmability

- **Concepts** — REST APIs on network devices and controllers; data formats (JSON, YAML); version control for configs and playbooks. CI/CD for network changes (optional but increasingly common).
- **Practice** — Use Ansible or Python to build a full workflow: fetch configs, validate, push changes, and roll back if needed. Integrate with Git. Start with a small topology and grow.
- **Why** — Large networks are unmanageable without automation; this is the differentiator between “configurer” and “engineer” in many shops.

---

## Cloud networking

- **Concepts** — VPC, subnets, routing tables, security groups / NACLs, and how they map to what you know from on-prem. Hybrid: VPN or Direct Connect and how traffic flows between cloud and datacenter.
- **Practice** — Build a small VPC in one cloud (AWS, Azure, or GCP): subnets, route tables, a couple of instances, and basic security rules. Compare to your on-prem mental model.
- **Why** — Most organizations have or are moving to cloud; network roles increasingly touch VPCs and hybrid connectivity.

---

## Soft skills and ownership

- **Concepts** — Change management, risk assessment, and communication with security, systems, and applications teams. Leading a design review or outage post-mortem.
- **Practice** — For every significant lab, write a one-page “design doc” or “change summary” as if you were presenting to a manager or peer. Get feedback if you can.
- **Why** — [Advanced roles](#/learning/networking/networking-certifications-and-career) (lead, architect) are as much about clarity and process as about technical depth.

---

## Readiness checklist

You are ready for lead/architect-style responsibilities when you can:

- Propose and defend a hierarchical design for a multi-site or large campus scenario.
- Use BGP in a lab for internet or data center use case and explain path selection.
- Automate at least one end-to-end workflow (e.g. config deploy and rollback) with version control.
- Explain how a VPC compares to an on-prem network and how traffic is secured and routed.
- Document designs and changes in a way that others can review and operate.

---

## What to avoid

- **Isolation** — Advanced work happens in teams. Practice explaining your design and tradeoffs; use the [Further Reading](#/learning/networking/networking-reading-list) and community (forums, meetups) to stay current.
- **Ignoring security** — Design and automation should include security by default: segmentation, least privilege, and secure management. Align with [network security](#/learning/networking/networking-roles-and-expectations) expectations.

For certs and career progression at this stage, see [Certifications & Career in Networking](#/learning/networking/networking-certifications-and-career).
