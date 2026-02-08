# Intermediate Networking Learning Map

This map is for people who have completed (or nearly completed) the [Beginner Networking Learning Map](#/learning/networking/beginner-networking-roadmap) and its checklist. You can design a small multi-VLAN network, configure OSPF, and document what you did. The next step is **enterprise protocols**, **design basics**, **automation intro**, and **cert readiness** (e.g. CCNA or equivalent). This document covers what actually matters at this stage.

---

## What to add now

### More routing and redundancy

- **Concepts** — Second IGP or EIGRP if you’re in a Cisco shop; equal-cost and unequal-cost load sharing. First-hop redundancy (HSRP, VRRP, GLBP) so a default gateway can fail over.
- **Practice** — In [GNS3](#/learning/networking/where-to-practice-networking) or EVE-NG: two routers with redundant links, OSPF cost tuning, and HSRP between two L3 switches. Break links and verify convergence.
- **Why** — Real networks have redundancy; you need to understand how routing and FHRP behave when links or devices fail.

### Switching beyond basics

- **Concepts** — STP/RSTP (why it exists, root bridge, port roles), EtherChannel/LACP, maybe basic stacking or VSS if your lab supports it.
- **Practice** — Build a topology with redundant links; observe STP blocking. Configure EtherChannel and confirm it’s used. Document root and port roles.
- **Why** — Loops and link aggregation are everyday topics in NOC and design; see [Glossary](#/learning/networking/networking-glossary).

### Security at the edge

- **Concepts** — ACLs (standard and extended), where to apply them (inbound/outbound), and basic firewall ideas (stateful vs stateless). VPN concepts (site-to-site, remote access) at a high level.
- **Practice** — Permit/deny specific traffic between VLANs; restrict management access. If you have a firewall image in the lab, add a simple inside/outside policy.
- **Why** — Network security and [network security roles](#/learning/networking/networking-roles-and-expectations) expect you to understand segmentation and access control.

### Automation intro

- **Concepts** — Why we automate (consistency, scale), SSH vs API, idempotency. One tool: Ansible or Python with netmiko/paramiko.
- **Practice** — Automate one repetitive task: e.g. backup configs of all devices, or push a standard ACL. Start with a small inventory (2–3 devices). Don’t aim for perfection; aim for “it works and I can explain it.”
- **Why** — The [Advanced roadmap](#/learning/networking/advanced-networking-roadmap) goes deeper; here you get the mindset and one practical win.

---

## Readiness checklist

Before moving to the [Advanced roadmap](#/learning/networking/advanced-networking-roadmap), you should be able to:

- Design and implement a small enterprise-style network (multiple VLANs, OSPF or EIGRP, HSRP, STP, EtherChannel).
- Explain how STP prevents loops and how HSRP provides default gateway failover.
- Apply ACLs to enforce a simple policy and explain the impact.
- Run at least one automation script (backup or config push) against your lab.
- Consider sitting a vendor cert (CCNA, JNCIA, etc.) if you haven’t already; see [Certifications & Career](#/learning/networking/networking-certifications-and-career).

---

## What to avoid

- **Only theory** — Every concept should end in a lab. Use [Where to Practice](#/learning/networking/where-to-practice-networking) to scale up (EVE-NG, GNS3) if needed.
- **Skipping documentation** — Keep writing short design notes and change summaries; they matter in interviews and in NOC/design roles.
- **Chasing every vendor** — One vendor in depth (Cisco or Juniper) is enough at this stage; concepts transfer.

Next: [Advanced Networking Learning Map](#/learning/networking/advanced-networking-roadmap).
