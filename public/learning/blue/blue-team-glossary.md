# Blue Team Glossary & Terminology

Short definitions for terms you will see in job posts, runbooks, and the [roadmaps](#/learning/blue/beginner-blue-team-roadmap) in this section. No fluff—just what you need to orient yourself. For how blue fits with red and pentest, see [Red Team, Pentest & Blue Team](#/learning/red/red-team-vs-pentest-vs-blue).

---

## General

- **Blue team** — Defensive security: monitoring, detection, incident response. They react to what the red team (or real attackers) does and improve visibility and response.
- **Red team** — A team that simulates real adversaries to test detection and response. Blue team’s “opponent” in exercises; understanding red improves blue.
- **Purple team** — Red and blue working together: red runs attacks, blue tunes detection; both improve. Often the best way to close detection gaps.
- **SOC (Security Operations Center)** — Team that monitors alerts, triages events, and coordinates response. L1/L2 analysts are the front line; escalation goes to IR or detection engineering.

---

## Detection & Visibility

- **SIEM (Security Information and Event Management)** — Central place where logs are collected, correlated, and analyzed. Alerts are built from log patterns (e.g. rules, Sigma). Splunk, Elastic, Microsoft Sentinel, and others.
- **EDR (Endpoint Detection and Response)** — Software on endpoints (laptops, servers) that monitors process, network, and file activity and raises alerts. Defenders use EDR to detect and respond to malicious behavior; red team must assume EDR in real environments.
- **XDR (Extended Detection and Response)** — Broader than EDR: integrates endpoint, network, cloud, and email into one platform. Vendor term; in practice it means “more data sources, unified detection.”
- **NDR (Network Detection and Response)** — Focus on network traffic: flows, packets, and behavioral analysis to detect C2, lateral movement, and exfil. Complements EDR and SIEM.
- **Sigma** — Open-source format for detection rules that can be mapped to many SIEMs. Defenders use Sigma to detect ATT&CK techniques; community rules are widely shared.
- **Visibility gap** — A phase of the attack (or a system) where you have no logs or no detection. Finding and closing visibility gaps is core blue team work.
- **Tuning** — Adjusting detection rules to reduce false positives or improve coverage. Part of detection engineering and purple team work.

---

## Alerting & Triage

- **Alert triage** — Deciding whether an alert is a true positive (real threat), false positive (benign activity), or needs more investigation. SOC analysts do this constantly.
- **False positive** — Alert that fires on benign or expected activity. Too many false positives burn out analysts and cause alert fatigue; tuning aims to reduce them.
- **True positive** — Alert that correctly identifies malicious or suspicious activity. Goal is to triage quickly and escalate to IR when needed.
- **IOC (Indicator of Compromise)** — Artifact that suggests compromise: IP, hash, domain, URL, registry key. Used in rules and threat intel; can be outdated when attackers change infrastructure.

---

## Incident Response & Operations

- **Incident response (IR)** — Process of containing, eradicating, and recovering from a security incident. Often framed as detect → contain → eradicate → recover → lessons learned.
- **Playbook** — Step-by-step guide for responding to a type of incident or alert (e.g. “phishing click,” “credential dump detected”). Helps analysts act consistently.
- **Runbook** — Operational procedures: how to run a tool, escalate, or perform a task. Overlaps with playbook; often used for day-to-day ops.
- **SOAR (Security Orchestration, Automation and Response)** — Tools that automate response: run playbooks, enrich alerts, and trigger actions (e.g. isolate host, block IP). Complements SIEM and EDR.

---

## Threat Intel & Hunting

- **Threat hunting** — Proactive search for threats that have not yet triggered an alert. Hypothesis-driven: “If an attacker did X, we would see Y in our logs.”
- **Threat intel (intelligence)** — Information about adversaries, IOCs, and TTPs. Used to tune detection and prioritize what to look for. Can be commercial, open source, or internal.
- **TTP (Tactics, Techniques, Procedures)** — How an adversary operates. ATT&CK organizes TTPs; blue team maps detection and incidents to ATT&CK to speak a common language with red team and management.

---

## Frameworks & Taxonomy

- **MITRE ATT&CK** — Matrix of tactics and techniques used by adversaries. Defenders use it to map coverage (“we detect these techniques”), gap analysis (“we have no detection for these”), and to align with red team and threat intel. Not a checklist—a map.
- **Kill chain** — Model of an attack: Recon → Initial access → Execution → Persistence → Privilege escalation → Lateral movement → Collection → Exfiltration. Blue team builds visibility and detection at each stage; see [Detection & Visibility](#/learning/blue/blue-team-detection-and-visibility-overview).

---

## Certifications (common abbreviations)

- **BTL1** — Blue Team Level 1 (Security Blue Team). Entry-level defensive cert; hands-on and practical.
- **GCIH** — GIAC Certified Incident Handler. Incident response focused.
- **GCFE** — GIAC Certified Forensic Examiner. Digital forensics.
- **GCIA** — GIAC Certified Intrusion Analyst. Network and log analysis.

Use the [Certifications & Career](#/learning/blue/blue-team-certifications-and-career) resource for how these fit the roadmaps.
