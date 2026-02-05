# Where to Practice: Labs & Platforms

A single reference for where to build skills at each stage. The [Beginner](#/learning/red/beginner-red-team-roadmap), [Intermediate](#/learning/red/intermediate-red-team-roadmap), and [Advanced](#/learning/red/advanced-red-team-roadmap) roadmaps mention these in context; here they are in one place.

---

## Beginner (0–6 months)

### TryHackMe (THM)

- **What it is** — Guided rooms and paths: Linux, Windows, networking, web, AD basics. Less overwhelming than “here’s a box, root it.”
- **Use it for** — Foundations: CLI, services, basic exploitation. Paths like “Complete Beginner” and “Jr Penetration Tester” align with the first phase of the [Beginner roadmap](#/learning/red/beginner-red-team-roadmap).
- **How to use it** — Read the material; do not just copy answers. Treat each room as a mini lab: take notes and map to the kill chain or ATT&CK if you have started that.
- **Cost** — Free tier; subscription for full access and VPN.

### OverTheWire (Bandit, etc.)

- **What it is** — Wargames: SSH into levels, find the password for the next level. Bandit = Linux basics (files, permissions, etc.).
- **Use it for** — Command-line comfort and basic Linux. Good before or alongside THM.
- **Cost** — Free.

### Your Own Lab (VMs)

- **What it is** — A small set of VMs: e.g. one Kali (or attack VM), one Windows client, one Linux server. Run locally (VirtualBox, VMware) or in the cloud.
- **Use it for** — Practicing tools (nmap, netcat, RDP, SSH) without a platform’s hints. Builds discipline and reproducibility.
- **Cost** — Your hardware or cloud (minimal cost for a few VMs).

---

## Intermediate (6–12+ months)

### HackTheBox (HTB)

- **What it is** — Machines (and challenges) you attack to get user and root flags. Retired machines have writeups; active ones do not.
- **Use it for** — Taking off the training wheels: timebox (e.g. 2 hours), try without walkthroughs, then compare. Do 5–10 machines with written reports and ATT&CK mapping, as in the [Intermediate roadmap](#/learning/red/intermediate-red-team-roadmap).
- **How to use it** — Start with retired easy/medium. Write a short report per machine (timeline, findings, remediation). Avoid “CTF brain”—focus on methodology, not just flags.
- **Cost** — Free for limited access; VIP for retired machines and labs.

### Proving Grounds (PG)

- **What it is** — Offensive Security’s practice environment: machines similar in style to OSCP.
- **Use it for** — OSCP-style practice: timeboxing, reporting, and breadth. Good after HTB when you are considering OSCP.
- **Cost** — Subscription.

### Small AD Lab (Your Own or GOAD)

- **What it is** — One DC + one or two Windows clients (and optionally an attack VM). Build it yourself or use something like GOAD (Game of Active Directory).
- **Use it for** — AD fundamentals: users, groups, GPOs, Kerberoasting, BloodHound, impacket. The [Beginner roadmap](#/learning/red/beginner-red-team-roadmap) emphasizes building this in months 5–7; the [Intermediate](#/learning/red/intermediate-red-team-roadmap) deepens it.
- **Cost** — Your hardware or cloud; GOAD and similar are free (scripts/automation).

---

## Advanced (12+ months, operational)

### HTB Pro Labs / CRTO Lab

- **What it is** — Multi-machine, AD-focused labs with time pressure. HTB Pro = extended scenarios; CRTO = C2 and AD (vendor-specific).
- **Use it for** — Full kill chain under time limits, C2 usage, and report writing that could go to a client. Aligns with [Advanced roadmap](#/learning/red/advanced-red-team-roadmap) adversary emulation.
- **Cost** — Subscription or cert purchase.

### Custom AD + Detection

- **What it is** — Your own or community AD lab (e.g. GOAD, Purple Team Labs) plus logging (Sysmon, Windows events) and optionally a SIEM (Splunk, ELK) and Sigma rules.
- **Use it for** — OPSEC and purple team: run attacks, see what gets logged, tune detection, and document what defenders would see. Critical for moving from “can I get DA?” to “can I do it without being seen?”
- **Cost** — Time and possibly cloud/hardware.

### Engagement-Style Labs

- **What it is** — Self-scoped “engagement”: you define scope, RoE, and deliverable report; you run the full chain and write as if for a client.
- **Use it for** — Leading in practice before you lead real engagements. See [Advanced roadmap](#/learning/red/advanced-red-team-roadmap).

---

## What to Avoid

- **Only playing CTF** — CTFs are fun but often puzzle-heavy (stego, obscure tricks). Red team and pentest are about realistic vulns and methodology. Balance CTF with HTB/THM machines and AD labs.
- **Only reading writeups** — Use writeups after you have tried; do not copy-paste. Your goal is to build a repeatable process and document it.
- **Skipping reporting** — Every lab should produce at least a short report (what you did, what you found, how to fix). Reporting is the deliverable in the real world; see [Certifications & Career](#/learning/red/red-team-certifications-and-career).

---

## Quick Reference

| Stage | Focus | Platforms / Labs |
|-------|--------|-------------------|
| Beginner | Foundations, first exploits | TryHackMe, OverTheWire, own VMs |
| Intermediate | AD, methodology, reporting | HTB, PG, small AD lab (GOAD, etc.) |
| Advanced | Full kill chain, C2, OPSEC | HTB Pro, CRTO lab, custom AD + detection, engagement-style labs |

Stick to one or two platforms at a time; depth and documentation beat platform hopping. Use the roadmaps to decide *when* to use each; this page is the *where*.
