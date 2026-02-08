# Networking Glossary & Terminology

Short definitions for terms you will see in job posts, docs, and the [roadmaps](#/learning/networking/beginner-networking-roadmap) in this section. No fluff—just what you need to orient yourself.

---

## Fundamentals

- **TCP/IP** — The main suite of protocols for the internet: IP for addressing and routing, TCP for reliable connections, UDP for lightweight/datagram traffic. Everything else (HTTP, DNS, etc.) runs on top.
- **OSI model** — Seven-layer reference (Physical, Data Link, Network, Transport, Session, Presentation, Application). In practice people refer to L2 (switching), L3 (routing), L4 (TCP/UDP), L7 (applications).
- **CIDR** — Classless Inter-Domain Routing. Notation like `192.168.1.0/24` for subnet size; the number after the slash is the prefix length (bits). Used for addressing and summarization.
- **Subnet** — A logical division of an IP network. Subnet mask or prefix length defines how many addresses are in the segment.
- **Default gateway** — The router a host uses to reach destinations outside its local subnet.

---

## Layer 2 (Switching)

- **VLAN** — Virtual LAN. Splits a physical switch into separate broadcast domains; traffic between VLANs requires a router or L3 switch.
- **Trunk** — A link that carries multiple VLANs (e.g. 802.1Q tagged). Used between switches and to routers.
- **STP (Spanning Tree Protocol)** — Prevents loops in switched networks by blocking redundant paths. Variants: RSTP, MSTP.
- **Ethernet** — Dominant L2 technology. MAC addresses, frames, and switches that forward by MAC table.

---

## Layer 3 (Routing)

- **Routing** — Forwarding packets between networks based on destination IP. Routers use routing tables and protocols to learn paths.
- **BGP** — Border Gateway Protocol. The protocol that glues the internet together; used for inter-domain routing and in many data centers.
- **OSPF** — Open Shortest Path First. Link-state IGP (interior gateway protocol) used inside an autonomous system.
- **EIGRP** — Cisco’s advanced distance-vector protocol; proprietary but widely used in Cisco shops.
- **Static route** — Manually configured path to a network; no protocol, just admin-defined next hop.
- **Autonomous System (AS)** — A collection of networks under one administrative control. BGP exchanges routes between ASes.

---

## Operations & Design

- **NOC** — Network Operations Center. Team that monitors, troubleshoots, and maintains the network 24/7.
- **SD-WAN** — Software-Defined WAN. Centralized control of WAN links (often multiple transports) for better performance and cost.
- **Load balancer** — Distributes traffic across multiple servers or paths for redundancy and scale.
- **Firewall** — Device or software that enforces access policy (allow/deny) based on rules, often L3/L4 and sometimes L7.
- **DMZ** — Demilitarized zone. Segment where public-facing services sit, isolated from internal LAN.

---

## Automation & Cloud

- **API** — Application Programming Interface. Network devices and controllers often expose APIs for automation (e.g. REST).
- **NetDevOps / Network automation** — Using code (Python, Ansible, etc.) to configure and manage network devices instead of only CLI.
- **VPC** — Virtual Private Cloud. Isolated network segment in a cloud provider (AWS, Azure, GCP); you manage subnets, routing, and often firewall rules.

Use the [Certifications & Career](#/learning/networking/networking-certifications-and-career) resource for how these fit the roadmaps.
