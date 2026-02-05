# Red Team Glossary & Terminology

Short definitions for terms you will see in job posts, writeups, and the [roadmaps](#/learning/red/beginner-red-team-roadmap) in this section. No fluff—just what you need to orient yourself.

---

## General

- **Red team** — A team that simulates real adversaries to test detection and response. Goal: achieve an objective (e.g. access crown jewels) and show impact, not just find vulns.
- **Blue team** — Defensive security: monitoring, detection, incident response. They react to what the red team (or real attackers) does.
- **Purple team** — Red and blue working together: red runs attacks, blue tunes detection; both improve.
- **Penetration test (pentest)** — Authorized testing to find vulnerabilities and misconfigurations. Often scope-limited (e.g. these systems, no phishing). Deliverable: findings report.
- **Adversary emulation** — Mimicking a specific threat (e.g. a known APT) to test whether defenses would catch that behavior.

---

## Active Directory & Windows

- **AD (Active Directory)** — Microsoft’s directory service: users, groups, computers, OUs, GPOs. Most enterprise internal networks are AD; red team work is often “get to Domain Admin.”
- **DA (Domain Admin)** — High-privilege group in AD. “Getting DA” = full control over the domain; common engagement objective.
- **DC (Domain Controller)** — Server that runs AD; holds credentials and enforces policy. Compromising the DC (or its credentials) is often the crown jewel.
- **Kerberos** — Default authentication protocol in AD. Tickets (TGT, TGS) are used for access; attacking tickets (e.g. Kerberoasting) is a core technique.
- **Kerberoasting** — Attack that requests service tickets for accounts with SPNs and then cracks the encrypted part offline to get hashes. Common path to privilege escalation.
- **Golden Ticket** — Forged Kerberos TGT using the KRBTGT hash. Lets you impersonate any user in the domain. Requires DC compromise first.
- **Silver Ticket** — Forged TGS for a specific service. Used for persistence or lateral movement without touching the DC again.
- **DCSync** — Abusing AD replication (MS-DRSR) to pull password hashes from a DC. Requires replication rights; very noisy.
- **NTLM** — Older Windows auth protocol. Weak hashes (NTLM hash) are often dumped and reused (pass-the-hash).
- **Pass-the-hash (PtH)** — Using a captured NTLM hash to authenticate without the plaintext password. Common in lateral movement.
- **BloodHound** — Tool that maps AD relationships and ACLs. You run collectors (e.g. SharpHound), import the data, and follow “attack paths” to high privilege.
- **ACL (Access Control List)** — Permissions on AD objects (users, groups, computers). Misconfigured ACLs (e.g. GenericAll, WriteDacl) are a major source of privilege escalation.

---

## Tools & Infrastructure

- **C2 (Command and Control)** — Framework or infrastructure that lets an operator control compromised machines (beacons, implants). E.g. Cobalt Strike, Covenant, Sliver. Red teams use C2 for sustained operations; defenders try to detect C2 traffic and behavior.
- **Impacket** — Python library/tools for network protocols (SMB, Kerberos, etc.). Scripts like `psexec.py`, `secretsdump.py`, `wmiexec.py` are standard for lateral movement and credential dumping.
- **nmap** — Network scanner: ports, services, OS. Foundational for recon.
- **Burp Suite** — Web proxy for intercepting and modifying HTTP(S) requests. Used in web app and API testing.
- **Metasploit** — Exploitation framework. Use sparingly when learning; understand what each module does before relying on it.

---

## Detection & OPSEC

- **OPSEC (Operational Security)** — Not getting caught. Knowing what logs and alerts your actions create and reducing or accepting that exposure.
- **EDR (Endpoint Detection and Response)** — Software on endpoints (laptops, servers) that monitors process, network, and file activity and raises alerts. Red team must assume EDR in real environments.
- **AV (Antivirus)** — Often used loosely to include EDR. Known malicious hashes and patterns get blocked or flagged.
- **Sigma** — Open-source format for detection rules (often mapped to SIEMs). Defenders use Sigma to detect ATT&CK techniques; red team should know what’s commonly deployed.
- **SIEM (Security Information and Event Management)** — Central place where logs are collected and analyzed. Alerts are built from log patterns (e.g. Sigma rules).

---

## Frameworks & Taxonomy

- **MITRE ATT&CK** — Matrix of tactics and techniques used by adversaries. Used to plan tests, map actions, and speak a common language with defenders. Not a checklist to memorize—a map to navigate.
- **Kill chain** — Model of an attack: Recon → Initial access → Execution → Persistence → Privilege escalation → Lateral movement → Collection → Exfiltration (or objective). Red team operations often follow this flow.
- **TTP (Tactics, Techniques, Procedures)** — How an adversary operates. ATT&CK organizes TTPs; red team reports often map findings to ATT&CK techniques.

---

## Engagement & Professional

- **RoE (Rules of Engagement)** — Written agreement: what’s in/out of scope, what’s allowed (e.g. phishing), how to communicate, when to stop. Never test without clear RoE.
- **Scope** — What you are allowed to test (systems, networks, users). Going out of scope is unprofessional and can be illegal.
- **Finding** — A vulnerability or misconfiguration documented in a report. Usually includes description, evidence, impact, and remediation.
- **Remediation** — Steps the client should take to fix a finding. Good reports give concrete, actionable remediation.

---

## Certifications (common abbreviations)

- **OSCP** — Offensive Security Certified Professional. Hands-on pentest cert; time-limited exam and report. Often used as an HR filter.
- **CRTO** — Certified Red Team Operator. C2- and AD-focused; practical exam.
- **PNPT** — Practical Network Penetration Tester. Strong on AD and reporting; realistic exam.
- **eJPT** — eLearnSecurity Junior Penetration Tester. Entry-level practical cert.

Use the [Certifications & Career](#/learning/red/red-team-certifications-and-career) resource for how these fit the roadmaps.
