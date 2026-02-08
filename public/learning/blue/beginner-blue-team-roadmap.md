# Beginner Blue Team Learning Map

Opinionated 6–12 month roadmap to build real junior blue team foundations: logs, triage, SIEM basics, and incident response fundamentals. For where to lab, see [Where to Practice](#/learning/blue/where-to-practice-blue-team); for terms, see [Glossary](#/learning/blue/blue-team-glossary).

---

## Reality Check (Non-Negotiable)

- **What beginners think blue teaming is**
  - Watching dashboards and clicking “dismiss” on alerts; or “hacking back” and chasing attackers in real time like in movies.
  - A job where you only need one tool (e.g. “learn Splunk”) and everything else is optional.
  - Pure monitoring with no writing, no tuning, and no collaboration with red team or IT.
- **What it actually is (at junior level)**
  - **Alert triage and log analysis**: deciding true positive vs false positive, escalating when needed, and following playbooks.
  - **Understanding what generates logs**: OS, network, auth, and applications. You cannot detect what you cannot see.
  - **Documentation and process**: runbooks, playbooks, incident notes. Communication with SOC, IR, and sometimes red team.
  - Long stretches of “normal” with occasional spikes; the job is to spot the abnormal and act consistently.
- **Why most beginners fail or stall**
  - **Tool-first mindset**: learning a SIEM UI before understanding logs, events, and what normal looks like.
  - **No writing or note-taking**: they cannot explain what they looked at, why they escalated or closed, or reproduce the analysis.
  - **Chasing advanced topics** (threat hunting, custom ML detection) without ever having triaged hundreds of alerts or handled one full incident.
  - **Cert collection** instead of deep practice in one lab or platform.
- **Skills that are useless at this stage (delay them)**
  - Custom ML models and advanced analytics before you can write a simple detection rule and explain it.
  - SOAR and heavy automation before you can run a playbook manually and document it.
  - Deep forensics (memory, disk) before you are solid on log-based triage and IR basics.

---

## Core Technical Foundations (Only What Matters)

### OS and Logging (Defender’s Perspective)

- **Windows**
  - Where events live: Security, System, Application logs; Sysmon if enabled. Key event IDs: logon (4624, 4625, 4648), process creation (4688, Sysmon 1), network (Sysmon 3). What “normal” looks like for logons and processes.
  - **Why it matters**: Most corporate environments are Windows + AD; alerts and IR depend on understanding what Windows logs and where.
- **Linux**
  - Auth logs (e.g. auth.log, secure), syslog, and common locations. SSH, sudo, and process accounting. What “normal” looks like for a server or workstation.
  - **Why it matters**: Servers, cloud, and appliances are often Linux; you need to read Linux logs for triage and IR.

### Networking Basics (Enough to Read Traffic and Logs)

- **Core topics**
  - IP, ports, DNS, HTTP(S), and common protocols. How firewalls and proxies log; what a flow or connection log contains.
  - **Why it matters**: Many alerts are network-based (C2, lateral movement, exfil). You need to read connection logs and understand what “normal” traffic looks like for your environment (conceptually).

### Log Sources and SIEM Basics

- **What a SIEM does**
  - Collects logs from many sources (endpoints, network, auth, cloud); normalizes and stores them; runs rules to generate alerts. You search and build rules on top of that data.
- **Hands-on**
  - Use one SIEM (Splunk free, Elastic, or similar) in a lab. Ingest at least: Windows events (or Sysmon), and one other source (e.g. firewall or DNS). Run a few queries; build one or two simple rules (e.g. “alert on X event ID when Y condition”).
- **Why it matters**
  - SOC and detection engineering revolve around SIEM (or equivalent). You need to be comfortable with queries, time ranges, and how rules fire.

### Alert Triage and Process

- **Triage loop**
  - Receive alert → understand what triggered it (which rule, which log) → decide: true positive (escalate or respond), false positive (tune or document), or need more data. Document the outcome.
- **Playbooks**
  - Follow a playbook for at least one scenario (e.g. “suspicious PowerShell,” “impossible travel”). Even in a lab, practice: what do I do first, second, third? What do I document?
- **Why it matters**
  - Day-one SOC work is triage and playbook execution. Building the habit early separates you from people who only know theory.

### Incident Response Basics (High Level)

- **Phases**
  - Detect → Contain (isolate host, revoke creds) → Eradicate (remove malware, patch) → Recover (restore service) → Lessons learned. You may not own all phases as a beginner; you need to know the flow.
- **Containment**
  - What it means: stop the bleed (e.g. disconnect host, disable account). Why speed and clarity matter. Who decides (IR lead, management)?
- **Why it matters**
  - Blue team exists to detect and respond. Even if your first role is triage-only, you need to understand what happens after escalation.

### ATT&CK as a Map (Not Memorization)

- **Use ATT&CK**
  - As a structured way to think about “what could an attacker do?” and “where do we have detection?” Do not memorize IDs; use the matrix to map alerts and gaps. See [Detection & Visibility](#/learning/blue/blue-team-detection-and-visibility-overview).
- **Why it matters**
  - Red team, threat intel, and detection all speak ATT&CK. You will see it in job posts, playbooks, and reports.

---

## Hands-On Learning Platforms

### Recommended Order

- **Phase 1: Logs and OS (Months 0–2)**
  - Set up a small lab: one Windows VM, one Linux VM. Enable basic logging; perform actions (logon, run process, connect to a port) and find the corresponding log entries. Use [Where to Practice](#/learning/blue/where-to-practice-blue-team) for ideas.
- **Phase 2: SIEM and Triage (Months 3–5)**
  - Ingest logs into a SIEM (Splunk, Elastic, or similar). Run pre-built or simple rules; triage simulated alerts. Use BOTS or a detection lab if available. Document each triage: what you did, what you concluded.
- **Phase 3: Playbooks and IR Basics (Months 5–8)**
  - Follow or write a short playbook for one or two scenarios. In a lab, simulate an incident (e.g. “malicious process detected”) and walk through contain → eradicate → recover on paper or in the lab.
- **Phase 4: Consolidation (Months 8–12)**
  - Combine everything: log sources, SIEM, triage, and one incident-style scenario. Produce a short “detection coverage” or “incident summary” document. Aim for clarity and reproducibility.

### What Good Practice Looks Like Now

- You can open a SIEM (or log set), run a query, and explain what you are looking at. You can triage an alert and document true positive / false positive / escalate. You can describe the IR lifecycle and where your role fits. Consistency and documentation beat tool depth at this stage.

---

## Certifications (Honest Evaluation)

- **Helpful early (after some practice)**
  - **BTL1** (Security Blue Team): entry-level blue team cert; hands-on and practical. Good after you have log and triage basics from this roadmap.
  - **Vendor certs** (e.g. Splunk fundamentals): if your target role uses that platform, a basic cert shows you can use the tool. Pair with lab work.
- **Neutral or resume-padding at this stage**
  - Pure multiple-choice “cyber” certs with no hands-on. They may get you past HR but do not replace triage and log analysis practice.
- **Certs to delay**
  - GCIH, GCFE, and similar until you have solid triage and IR basics. Those certs assume you can already work with logs and runbooks; do the foundation first.

See [Certifications & Career](#/learning/blue/blue-team-certifications-and-career) for how certs fit the roadmaps and job search.

---

## Real-Life Expectations for Junior Roles

- **What entry-level SOC / blue team actually looks like**
  - Triage alerts; follow playbooks; escalate when needed. Document what you did and why. Shift work is common in 24/7 SOCs.
  - You will see many false positives; the job is to handle them quickly and consistently and to spot the real issues.
- **Non-technical skills beginners underestimate**
  - **Writing**: clear, concise triage notes and escalation summaries. **Communication**: asking for context, handing off to IR or detection. **Time management**: not getting stuck on one alert; knowing when to escalate.

---

## Readiness Checklist (Moving to Intermediate)

You are ready to think of yourself as “intermediate” when you can *demonstrate* most of the following:

- **Logs and OS**
  - You can find and interpret relevant Windows and Linux log entries for logon, process creation, and network activity. You know what “normal” looks like in a small lab.
- **SIEM and Triage**
  - You can run queries, build a simple rule, and triage at least 10–20 alerts (real or simulated) with documented outcomes. You can explain why you escalated or closed.
- **Process**
  - You have followed or written at least one playbook. You can describe the IR lifecycle and where detection and containment fit.
- **ATT&CK**
  - You can map at least a few alerts or techniques to ATT&CK (high level). You use it as a map, not a checklist.
- **Documentation**
  - Your lab work includes short writeups or notes that another person could follow. You do not rely on memory alone.

When you can do this, move to the [Intermediate Blue Team Learning Map](#/learning/blue/intermediate-blue-team-roadmap) for detection engineering, threat hunting, and purple team collaboration.
