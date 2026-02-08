# Where to Practice: Labs & Environments

A single reference for where to build defensive skills at each stage. The [Beginner](#/learning/blue/beginner-blue-team-roadmap), [Intermediate](#/learning/blue/intermediate-blue-team-roadmap), and [Advanced](#/learning/blue/advanced-blue-team-roadmap) roadmaps mention these in context; here they are in one place.

---

## Beginner (0–6 months)

### Log and OS Basics (Your Own VMs)

- **What it is** — A small set of VMs: e.g. one Windows client, one Linux server, one “attacker” or lab host. Enable basic logging (Windows Event Log, Sysmon optional, or Linux auth/syslog).
- **Use it for** — Understanding what logs exist, where they live, and what normal looks like. Map a few events (logon, process creation) to actions you perform. Aligns with the first phase of the [Beginner roadmap](#/learning/blue/beginner-blue-team-roadmap).
- **Cost** — Your hardware or cloud (minimal cost for a few VMs).

### Wireshark and Packet Analysis

- **What it is** — Capture and analyze network traffic. Use sample PCAPs (e.g. from Malware-Traffic-Analysis.net, SANS challenges) or your own lab.
- **Use it for** — Reading traffic, spotting anomalies, and understanding protocols (HTTP, DNS, SMB). Foundation for NDR and network-centric detection.
- **Cost** — Free (Wireshark); PCAP sources are often free.

### TryHackMe (Defensive Paths)

- **What it is** — Guided rooms and paths; some are blue-team oriented (intro to digital forensics, SOC, Splunk).
- **Use it for** — Structured intro to triage, logs, and tools in a guided way. Good before diving into a full SIEM lab.
- **Cost** — Free tier; subscription for full access.

---

## Intermediate (6–12+ months)

### Splunk Boss of the SOC (BOTS)

- **What it is** — Splunk’s blue team / detection challenge: datasets and scenarios you analyze with Splunk (or similar) to find malicious activity.
- **Use it for** — Practicing SIEM-style investigation and detection thinking. Aligns with [Intermediate roadmap](#/learning/blue/intermediate-blue-team-roadmap) detection engineering and triage depth.
- **Cost** — Splunk free tier or lab license; BOTS datasets and scenarios are often free or low cost.

### Sigma and Detection Labs

- **What it is** — Sigma rule repository and labs (e.g. Sigma HQ, detection-lab style environments) where you run attacks and validate or write Sigma rules.
- **Use it for** — Learning detection logic, ATT&CK mapping, and tuning. Critical for detection engineering.
- **Cost** — Free (Sigma is open source); lab setup is your time and possibly cloud.

### Blue Team Labs Online (BTLO) / Similar Ranges

- **What it is** — Scenario-based defensive challenges: investigate an incident, find IOCs, write a report. BTLO and similar platforms offer structured scenarios.
- **Use it for** — Incident response and investigation practice without building everything yourself.
- **Cost** — Varies; some free scenarios, some subscription.

### AD + SIEM / EDR Lab (Your Own or Community)

- **What it is** — Small AD environment (e.g. GOAD or your own) plus a SIEM (Splunk, Elastic, or Sentinel) and optionally EDR or Sysmon. You (or a partner) run attacks; you build and tune detection.
- **Use it for** — End-to-end visibility and detection: what do we see at each phase of the kill chain? Purple team in a box. See [Detection & Visibility](#/learning/blue/blue-team-detection-and-visibility-overview).
- **Cost** — Your hardware or cloud; open-source SIEM and Sigma are free.

---

## Advanced (12+ months, operational)

### Purple Team Scenarios with Red Team

- **What it is** — Coordinated exercises: red team (or you in a red hat) runs attacks; blue team (you or a lab) tunes detection and documents coverage. Can be in your own lab or in a range.
- **Use it for** — Testing detection at scale, MTTD/MTTR practice, and report writing that includes “what we detected, what we didn’t, and why.” Aligns with [Advanced roadmap](#/learning/blue/advanced-blue-team-roadmap).
- **Cost** — Time; possibly range or lab subscription.

### Engagement-Style Detection Reviews

- **What it is** — Self-scoped “engagement”: define a scenario (e.g. “assume breach at initial access”), run or simulate the attack, document what you would detect and where the gaps are. Produce a short detection coverage report.
- **Use it for** — Leading in practice before you lead real purple team or detection program work.
- **Cost** — Your time and lab.

---

## What to Avoid

- **Only watching and not doing** — Blue team skills require hands-on: run the query, tune the rule, write the playbook. Passive video consumption does not replace lab work.
- **Skipping documentation** — Every lab should produce at least short notes: what you looked at, what you found, what you’d improve. Playbooks and runbooks are deliverables in the real world; see [Certifications & Career](#/learning/blue/blue-team-certifications-and-career).
- **Tool-only focus** — Learning one SIEM or EDR is good; understanding logs, ATT&CK, and detection logic transfers to any platform.

---

## Quick Reference

| Stage | Focus | Platforms / Labs |
|-------|--------|-------------------|
| Beginner | Logs, triage, OS and network basics | Own VMs + logging, Wireshark/PCAPs, TryHackMe defensive paths |
| Intermediate | SIEM, Sigma, detection engineering, IR scenarios | Splunk BOTS, Sigma labs, BTLO, AD + SIEM lab |
| Advanced | Purple team, detection program, MTTD/MTTR | Purple scenarios, engagement-style detection reviews |

Stick to one or two environments at a time; depth and documentation beat platform hopping. Use the roadmaps to decide *when* to use each; this page is the *where*.
