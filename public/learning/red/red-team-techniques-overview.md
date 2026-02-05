# Key Techniques: A Map of the Attack Lifecycle

A high-level map of the attack lifecycle so you see how techniques connect. For detailed tradecraft, use the [Beginner](#/learning/red/beginner-red-team-roadmap), [Intermediate](#/learning/red/intermediate-red-team-roadmap), and [Advanced](#/learning/red/advanced-red-team-roadmap) roadmaps. For a full taxonomy, see [MITRE ATT&CK](https://attack.mitre.org/); this is a short tour.

---

## The Flow

```
Recon → Initial Access → Execution → Persistence → Privilege Escalation → Lateral Movement → Collection → Exfiltration (or Objective)
```

Real engagements do not always hit every phase; scope may assume you already have a foothold. But understanding the full chain helps you plan and report.

---

## Reconnaissance

- **What** — Gathering information about the target: networks, hosts, users, services, and trust relationships.
- **Why** — You cannot attack what you do not know. Recon shapes what you do next (which ports, which creds, which path to DA).
- **Examples** — Network scanning (nmap), AD enumeration (BloodHound, CME), web app mapping (Burp, crawlers), OSINT (public info, breach data). In red team, recon is ongoing; you refine as you get access.
- **Detection** — Scanning and enumeration create logs (connection attempts, failed logins, LDAP queries). OPSEC means doing enough recon without burning scope or alerting unnecessarily.

---

## Initial Access

- **What** — Getting the first foothold: a shell, a session, or credentials that let you act as a user or on a system.
- **Why** — Everything else builds on this. In many pentests you “assume foothold”; in full red team you often prove initial access (phishing, external vuln, etc.).
- **Examples** — Phishing (link or attachment), exploiting internet-facing apps (web, VPN, RDP), credential stuffing or password spray, physical (if in scope). See [Advanced roadmap](#/learning/red/advanced-red-team-roadmap) for initial access in depth.
- **Detection** — Login events, new processes, network connections. Defenders look for anomalous logins and first-time access from unknown IPs or devices.

---

## Execution

- **What** — Running code on a system (your payload, script, or abuse of a legitimate tool).
- **Why** — You need to execute to get a shell, run a C2 beacon, or move to the next phase.
- **Examples** — Exploit (e.g. RCE), scheduled task, service, WMI, PowerShell, script. “Living off the land” (LOLBins) uses signed binaries to reduce new files and sometimes evade AV/EDR.
- **Detection** — Process creation, script execution (PowerShell logging), and parent-child process relationships. EDR is strong here; known malicious hashes and behaviors get flagged.

---

## Persistence

- **What** — Keeping access across reboots or credential changes so you do not lose your foothold.
- **Why** — Engagements last days or weeks; persistence lets you come back without re-exploiting initial access.
- **Examples** — Scheduled tasks, services, registry Run keys, WMI event subscriptions, C2 beacons, backdoor accounts. Each has tradeoffs (visibility, complexity).
- **Detection** — New scheduled tasks, new services, registry changes, and recurring callbacks (C2). Persistence mechanisms are heavily monitored; choose and document what defenders would see.

---

## Privilege Escalation

- **What** — Going from low privilege (e.g. normal user) to high privilege (e.g. local admin, domain admin) on a host or in the domain.
- **Why** — You need higher rights to dump credentials, install persistence, or reach the objective.
- **Examples** — Misconfigured services, vulnerable drivers, token abuse, AD misconfigurations (ACLs, delegation), credential reuse (local admin same everywhere), Kerberoasting, DCSync. See [Glossary](#/learning/red/red-team-glossary) and [Intermediate roadmap](#/learning/red/intermediate-red-team-roadmap) for AD-specific techniques.
- **Detection** — Logon events (e.g. 4624), privilege changes, and sensitive operations (e.g. LSASS access, replication). Many techniques are well-documented in Sigma and ATT&CK.

---

## Lateral Movement

- **What** — Moving from one host or account to another inside the network (e.g. workstation to server, user A to user B).
- **Why** — The objective is often on another system (file server, DC, crown jewels). You move until you reach it.
- **Examples** — RDP, SSH, psexec/WMI (impacket), pass-the-hash, pass-the-ticket, C2 beacons. All assume you have credentials or session that allow access to the next hop.
- **Detection** — Network connections (RDP, SMB, etc.), logon events from new sources, and C2 traffic. Lateral movement is a focus of detection; OPSEC matters.

---

## Collection

- **What** — Gathering data that matters to the objective: credentials, files, emails, or other sensitive assets.
- **Why** — Red team objectives often include “access to X” or “exfiltrate a sample”; collection is the step before exfil or proof.
- **Examples** — Credential dumping (LSASS, SAM, DCSync), reading shares, mailbox access, keylogging (if in scope). Must stay in scope and RoE.
- **Detection** — Access to sensitive stores (LSASS, SAM), large reads, and credential extraction tools. Highly monitored; often the “last step” before defenders escalate.

---

## Exfiltration (or Objective)

- **What** — Moving data out of the network (exfil) or otherwise proving you achieved the objective (e.g. screenshot of crown jewels, proof of DA).
- **Why** — Engagement success is often defined as “we got to X and can prove it.” Exfil may be simulated (small sample) or out of scope; RoE define this.
- **Examples** — Data over C2, DNS, HTTPS, or physical. For “objective only,” sometimes proof of access (screenshot, file listing) is enough without real exfil.
- **Detection** — Unusual outbound traffic, large transfers, and staging of data. Exfil is a high-priority detection target.

---

## How This Fits the Roadmaps

- **Beginner** — You learn the chain conceptually and practice a few phases in labs (recon, execution, maybe privesc and lateral movement). You do not need to run the full chain; you need to understand the flow and document what you did.
- **Intermediate** — You run full chains in AD labs and pro labs: recon to DA (or equivalent) with persistence and reporting. You map actions to ATT&CK and think about detection at each phase.
- **Advanced** — You lead engagements where the full chain (including initial access and C2) is in scope. You make tradecraft decisions (when to evade, when to accept detection) and report the story end-to-end.

Use this map as a mental checklist when planning or reporting; use ATT&CK and the roadmaps for technique depth.
