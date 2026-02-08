# Beginner Networking Learning Map

A 6–12 month roadmap to build real networking foundations: TCP/IP, switching, routing, and basic operations. For where to lab, see [Where to Practice](#/learning/networking/where-to-practice-networking); for terms, see [Glossary](#/learning/networking/networking-glossary).

---

## What beginners often get wrong

- **Tool-first** — Jumping into advanced topics (BGP, SD-WAN) before understanding subnetting, VLANs, and how a packet gets from A to B.
- **No hands-on** — Reading or watching only; never building a topology and troubleshooting it.
- **Cert chase** — Collecting certs without deep practice. One solid foundation (e.g. CCNA-level) beats shallow breadth.

**What actually matters at this stage:** Solid L2/L3 fundamentals, CLI comfort, and the ability to document and reproduce what you did. The [Intermediate](#/learning/networking/intermediate-networking-roadmap) and [Advanced](#/learning/networking/advanced-networking-roadmap) roadmaps build on this.

---

## Core topics (in order)

### 1. IP addressing and subnetting

- **Concepts** — IPv4 address structure, subnet mask, CIDR, default gateway. Why hosts need an IP and a way to reach other subnets.
- **Practice** — Subnet a given range; plan addressing for a small network (e.g. three subnets, one router). Use [Packet Tracer](#/learning/networking/where-to-practice-networking) or paper.
- **Why** — Everything else assumes you can size and assign subnets correctly.

### 2. Layer 2: switches and VLANs

- **Concepts** — Ethernet, MAC addresses, broadcast domain, VLANs, trunk (802.1Q), access ports. How a switch forwards frames and how VLANs segment traffic.
- **Practice** — Build a small switched network; create VLANs, assign ports, trunk between switches. Verify connectivity within and across VLANs.
- **Why** — Most campus and data center networks are switched first; routing comes on top.

### 3. Layer 3: routing basics

- **Concepts** — Router role, routing table, static routes, default route. How a packet leaves a subnet and reaches another.
- **Practice** — Add a router to your lab; configure static routes so all subnets can reach each other. Then add a default route toward “the internet.”
- **Why** — You need to understand path selection before dynamic protocols make sense.

### 4. Dynamic routing (one protocol)

- **Concepts** — Why we use routing protocols (scale, failover). Pick one to start: OSPF is common and vendor-neutral.
- **Practice** — Replace static routes with OSPF in a small topology (2–3 routers). Observe neighbor adjacency and routing table.
- **Why** — Real networks use dynamic routing; you need to understand at least one IGP.

### 5. CLI and documentation

- **Concepts** — Basic device access (console, SSH), show commands, config change process. Saving configs and documenting changes.
- **Practice** — Every lab: write a short note (addressing plan, what you configured, one thing you’d improve). Build the habit early; see [Certifications & Career](#/learning/networking/networking-certifications-and-career) for why this matters in jobs.

---

## Readiness checklist

Before moving to the [Intermediate roadmap](#/learning/networking/intermediate-networking-roadmap), you should be able to:

- Subnet and assign IPs for a small multi-subnet design.
- Configure VLANs and trunks on at least one vendor’s CLI.
- Configure static and OSPF routing so all subnets communicate.
- Explain in one or two sentences how a packet gets from host A to host B (L2 and L3).
- Document a simple lab (addressing, topology, and config summary).

---

## Timeline (rough)

- **Months 1–3** — IP, subnetting, L2 and VLANs; small Packet Tracer labs.
- **Months 4–6** — Routing (static, then OSPF); slightly larger topologies; start keeping lab notes.
- **Months 7–12** — Solidify with repeated labs, consider first cert (e.g. CCNA) if your goal is NOC or junior design. See [Certifications & Career](#/learning/networking/networking-certifications-and-career).

Adjust for your pace; consistency matters more than speed. Next: [Intermediate Networking Learning Map](#/learning/networking/intermediate-networking-roadmap).
