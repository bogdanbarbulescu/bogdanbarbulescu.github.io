# Detection & Visibility: A Map for Defenders

A high-level map of what defenders see across the attack lifecycle: log sources, where SIEM/EDR fit, and common visibility gaps. For detailed learning, use the [Beginner](#/learning/blue/beginner-blue-team-roadmap), [Intermediate](#/learning/blue/intermediate-blue-team-roadmap), and [Advanced](#/learning/blue/advanced-blue-team-roadmap) roadmaps. For a full taxonomy of techniques, see [MITRE ATT&CK](https://attack.mitre.org/); this is a short tour from a defender’s perspective.

---

## The Flow (Defender View)

```
Recon → Initial Access → Execution → Persistence → Privilege Escalation → Lateral Movement → Collection → Exfiltration (or Objective)
```

At each phase, defenders ask: **What data do we have? What would we see if an attacker did this?** Gaps are where you have no logs or no detection.

---

## Log Sources (Overview)

- **Authentication** — Windows Security (4624, 4625, 4648, 4768, 4769), Linux auth.log, IdP/SSO logs. Critical for initial access, lateral movement, and privilege changes.
- **Endpoint (EDR / Sysmon)** — Process creation, network connections, file and registry changes. Strong for execution, persistence, and many privilege escalation and lateral movement techniques.
- **Network** — Firewall, proxy, DNS, NetFlow. Strong for C2, exfil, and lateral movement (connections). Often a gap for encrypted or allowed traffic.
- **Cloud** — CloudTrail, Azure AD, O365, etc. Needed when identity and workloads are in the cloud.
- **Application** — Web server, DB, and app logs. Depends on what you deploy; often under-instrumented.

---

## Reconnaissance

- **What attackers do** — Gather information: networks, hosts, users, services, trust (e.g. AD enumeration, scanning).
- **What defenders see** — Connection attempts (firewall, IDS), failed logins (4625), LDAP queries (if logged), DNS lookups, and (sometimes) scanning patterns. EDR may see process and network activity from the attacker’s host if they are inside.
- **Common gaps** — Passive recon may generate little log; internal scanning and enumeration may not be logged if you don’t have EDR or sufficient auth/logging. Visibility here improves with EDR and centralized auth logging.

---

## Initial Access

- **What attackers do** — Get the first foothold: phishing, exploit, credential stuffing, etc.
- **What defenders see** — New logins (4624, 4648), first-time access from unknown IP/device, email gateway (phishing), web/app logs (exploit), VPN/auth (credential use). EDR may see first process execution on the compromised host.
- **Common gaps** — Phishing clicks may not be logged if endpoint or email security doesn’t report; cloud identity abuse may need cloud-specific logs. Missing MFA or conditional access increases risk; logs must be ingested to detect anomalies.

---

## Execution

- **What attackers do** — Run code: payload, script, LOLBin, scheduled task, etc.
- **What defenders see** — Process creation (4688, Sysmon 1), parent-child relationships, script execution (PowerShell logging if enabled). EDR is strong here: hashes, command lines, and behavior.
- **Common gaps** — PowerShell and script logging not enabled; no EDR on some hosts (e.g. legacy, OT). Rules must exist and be tuned or you get noise or silence.

---

## Persistence

- **What attackers do** — Survive reboot: scheduled tasks, services, registry, WMI, C2 beacon.
- **What defenders see** — New scheduled tasks (4698, Sysmon), new services (7045), registry changes (Sysmon 12/13), recurring callbacks (network, EDR). Auth logs for new logon events if they come back later.
- **Common gaps** — Persistence in places you don’t log (e.g. some WMI, obscure registry); C2 over allowed protocols (e.g. HTTPS to common CDN) may blend in without behavioral rules.

---

## Privilege Escalation

- **What attackers do** — Go from low to high privilege: local admin, domain admin, abuse of AD or misconfigs.
- **What defenders see** — Logon events (4624 with elevated type), sensitive operations (LSASS access, replication/DCSync), Kerberos (4768, 4769). EDR and Sigma have many rules for credential dumping and AD abuse.
- **Common gaps** — No EDR on DCs or critical servers; replication and Kerberos logging not centralized. Overprivileged accounts and weak detection for subtle abuse.

---

## Lateral Movement

- **What attackers do** — Move from host to host or account to account: RDP, SMB, psexec, pass-the-hash, C2.
- **What defenders see** — Network connections (RDP, SMB, etc.), logon events from new sources (4624, 4648), EDR process/network. C2 traffic if not obscured.
- **Common gaps** — Encrypted or allowed protocols with no behavioral analysis; first-time RDP/SMB from a user may not be alerted if you don’t baseline. EDR and NDR help; correlation across hosts matters.

---

## Collection

- **What attackers do** — Gather credentials, files, or other data (e.g. LSASS, shares, mailbox).
- **What defenders see** — Access to sensitive stores (LSASS, SAM), large or unusual reads, credential extraction tools. EDR and Sigma are strong for known tools and behaviors.
- **Common gaps** — Custom or rare tools; access patterns that look “normal” without context. Data access logging (e.g. DLP, share audit) often incomplete.

---

## Exfiltration (or Objective)

- **What attackers do** — Move data out (C2, DNS, HTTPS, physical) or prove objective (screenshot, listing).
- **What defenders see** — Unusual outbound traffic, large transfers, staging activity. DNS and proxy logs; EDR/NDR for connections and volume.
- **Common gaps** — Exfil over allowed channels (e.g. cloud sync, HTTPS to common domains); no DLP or data flow visibility. Behavioral and volume-based rules help.

---

## How SIEM and EDR Fit In

- **SIEM** — Aggregates logs from auth, network, EDR, cloud, and apps. Runs correlation rules (e.g. Sigma) and produces alerts. You need the right sources and enough retention; rules must be tuned to avoid alert fatigue.
- **EDR** — Provides endpoint visibility and detection; often feeds the SIEM. Strong for execution, persistence, and many privilege escalation and lateral movement techniques. Gaps: no EDR on some systems; evasion can reduce visibility.
- **NDR / network** — Complements EDR: traffic analysis, C2 and exfil detection. Use where you have flow or packet data and behavioral rules.

---

## Using This Map

- **Coverage** — For each phase, ask: do we have logs? Do we have detection? Map to ATT&CK and document gaps. See [Intermediate](#/learning/blue/intermediate-blue-team-roadmap) and [Advanced](#/learning/blue/advanced-blue-team-roadmap) for detection program and purple team.
- **Hunting** — When you form a hypothesis (“if they did X we’d see Y”), use this map to choose where to look (auth, EDR, network) and what to query.
- **Purple team** — Red runs techniques; blue checks what was seen at each phase and tunes or adds visibility. This map is your checklist for “what should we have seen?”

Use the roadmaps for depth; use this page as a one-place reference for defender visibility across the lifecycle.
