# Key Protocols: A Quick Reference

A high-level map of the protocols and concepts you’ll use daily. For detailed study, use the [Beginner](#/learning/networking/beginner-networking-roadmap), [Intermediate](#/learning/networking/intermediate-networking-roadmap), and [Advanced](#/learning/networking/advanced-networking-roadmap) roadmaps. For definitions, see [Glossary](#/learning/networking/networking-glossary).

---

## Layer 2 (Data Link)

- **Ethernet** — Frames, MAC addresses, CSMA/CD (historically). Switches learn MACs and forward; VLANs segment broadcast domains. **When you use it:** Every LAN; VLANs and trunks are core to design.
- **802.1Q** — VLAN tagging on trunks. **When you use it:** Any link carrying multiple VLANs between switches or to a router.
- **STP / RSTP** — Loop prevention. **When you use it:** Redundant links in a switched network; you must understand root bridge and port roles to troubleshoot.

---

## Layer 3 (Network)

- **IPv4 / IPv6** — Addressing and routing. Subnetting, CIDR, and default gateway are foundational. **When you use it:** Always; see [Beginner roadmap](#/learning/networking/beginner-networking-roadmap) for order of study.
- **ICMP** — Ping, traceroute, and error messages. **When you use it:** Troubleshooting connectivity and path.
- **ARP** — Map IP to MAC on a segment. **When you use it:** Implicitly whenever traffic crosses a subnet; useful to understand for debugging.

---

## Routing protocols

- **Static** — Manually configured routes. **When you use it:** Small networks, default routes, or specific overrides.
- **OSPF** — Link-state IGP; scales well, vendor-neutral. **When you use it:** Interior routing in most enterprises; learn in [Beginner](#/learning/networking/beginner-networking-roadmap), deepen in [Intermediate](#/learning/networking/intermediate-networking-roadmap).
- **EIGRP** — Cisco distance-vector; fast convergence, proprietary. **When you use it:** Cisco-heavy environments.
- **BGP** — Path-vector; inter-domain and often data center. **When you use it:** Internet edge, multi-homing, or large data center fabrics; see [Advanced roadmap](#/learning/networking/advanced-networking-roadmap).

---

## Layer 4 (Transport)

- **TCP** — Reliable, connection-oriented; flow control and retransmission. **When you use it:** HTTP, SSH, most application traffic.
- **UDP** — Connectionless, no guarantee. **When you use it:** DNS, VoIP, streaming, or when latency matters more than reliability.

---

## Application layer (selected)

- **DNS** — Name to IP. **When you use it:** Every environment; understand caching and where DNS can break connectivity.
- **HTTP/HTTPS** — Web traffic. **When you use it:** Proxies, load balancers, and security (TLS termination, inspection).
- **SSH** — Secure device access. **When you use it:** Management of routers, switches, and servers; prefer over Telnet.

Use this page as a quick lookup; pair with labs from [Where to Practice](#/learning/networking/where-to-practice-networking) and the roadmaps for depth.
