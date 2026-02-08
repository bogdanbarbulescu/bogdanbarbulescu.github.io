# Intermediate Blue Team Learning Map

This map is for practitioners who have completed (or nearly completed) the [Beginner Blue Team Learning Map](#/learning/blue/beginner-blue-team-roadmap) and its readiness checklist. You can triage alerts, work with logs and a SIEM, and understand the IR lifecycle. The next step is **detection engineering** (Sigma, rule tuning), **EDR/XDR usage**, **threat hunting basics**, **playbooks and runbooks**, and **purple team collaboration**. This document covers what actually matters at this stage—and what to avoid.

---

## Reality Check for Intermediate

- **What people think "intermediate" is**
  - Running every SIEM and EDR at once; memorizing ATT&CK IDs; and collecting certs.
  - Being the person who “writes all the rules” without understanding triage or false positive impact.
- **What it actually is**
  - **Reproducible detection**: you can write or tune a rule, explain what it detects and what it might miss, and document it. You understand log sources and visibility gaps.
  - **Working with SOC and IR**: your rules and playbooks are used by others; you get feedback and tune. You can run a purple-style exercise: attack + detect + tune.
  - **Threat hunting**: you can form a hypothesis (“if an attacker did X we’d see Y”), run queries, and document what you found or didn’t find.
- **Why intermediates stall**
  - **Skipping triage feedback**: they build rules but never measure false positives or work with SOC to improve. Rules pile up; quality suffers.
  - **No purple team exposure**: they don’t test detection against real (or simulated) attacks; they don’t know what they’re missing.
  - **Tool hopping**: new platform every year without depth in one SIEM/EDR and one detection language (e.g. Sigma).

---

## Detection Engineering

### Sigma and Rule Writing

- **What Sigma is**
  - Open-source, portable detection rule format. Rules describe conditions on log data (e.g. event ID, field values); backends convert them to SIEM-specific queries (Splunk, Elastic, etc.). See [Detection & Visibility](#/learning/blue/blue-team-detection-and-visibility-overview) for context.
- **Practice**
  - Write at least 3–5 Sigma rules for techniques you care about (e.g. from ATT&CK). Test them in a lab: run the attack (or use a dataset), confirm the rule fires, and document. Tune to reduce false positives.
- **Mapping to ATT&CK**
  - Tag rules with ATT&CK technique IDs. Use this for coverage reporting: “We detect these techniques; we have no detection for these.” Gap analysis drives what you build next.

### Rule Lifecycle and Tuning

- **Lifecycle**
  - Design → test → deploy → monitor (false positives, missed detections) → tune or retire. Rules that always fire on benign activity should be tuned or disabled; document why.
- **Working with SOC**
  - SOC feedback is gold: “This alert is noisy,” “We never see this.” Use it to refine rules and playbooks. Avoid building rules in a vacuum.

### EDR and XDR (Practical Use)

- **What EDR gives you**
  - Process, network, and file visibility on endpoints; behavioral and signature-based alerts. Often integrated with SIEM or used as a primary detection source.
- **At intermediate**
  - Use at least one EDR (or EDR-like lab) to understand what data it provides and how alerts are generated. Know how to investigate an EDR alert (process tree, network, file) and when to escalate to IR.
- **XDR**
  - Vendor term for “more sources, unified.” In practice: same mindset—more data, better correlation. Depth in one platform beats shallow knowledge of many.

---

## Threat Hunting Basics

- **Hypothesis-driven hunting**
  - Form a hypothesis: “If an attacker did X (e.g. Kerberoasting, lateral movement with psexec), we would see Y in our logs.” Query your SIEM/EDR for Y. Document: did you find it? If not, is it a visibility gap or no attack?
- **Data you need**
  - Auth logs, process creation, network connections. Same data as detection; different mindset (proactive, not alert-driven). Use the [Detection & Visibility](#/learning/blue/blue-team-detection-and-visibility-overview) map to know where to look per phase.
- **Output**
  - Hunt report or one-pager: hypothesis, query, result (findings or “no evidence”). Feed findings into new detection rules or tuning.

---

## Playbooks and Runbooks

- **Playbooks**
  - Step-by-step response for a scenario (e.g. “credential dump detected,” “phishing click”). Include: trigger, who does what, escalation path, and how to close. Keep them short and actionable.
- **Runbooks**
  - How to perform a task: run a query, isolate a host, revoke a token. SOC and IR use these daily. Document the “how” so others can follow.
- **Practice**
  - Write or refine at least two playbooks (e.g. one for malware alert, one for suspicious auth). Test them in a lab or tabletop; get feedback from a peer or lead.

---

## Purple Team Collaboration

- **What purple team is**
  - Red runs attacks; blue observes alerts, tunes detection, and documents coverage. Both sides improve. Can be formal (scheduled exercise) or informal (red runs a technique, blue checks if it was detected).
- **At intermediate**
  - Participate in at least one purple-style exercise (in a lab or with a red team). Your role: run or review detection, document what was detected and what wasn’t, and suggest rule or visibility improvements. See [Advanced roadmap](#/learning/blue/advanced-blue-team-roadmap) for leading purple team design.
- **Takeaway**
  - Detection that is never tested against real (or simulated) attacks is guesswork. Purple team closes the loop.

---

## Labs and Practice at Intermediate Level

- **Splunk BOTS, Sigma labs, AD + SIEM lab**
  - Use these to practice detection engineering and hunting. Build rules, run attacks (or use datasets), and document coverage. See [Where to Practice](#/learning/blue/where-to-practice-blue-team).
- **Goals**
  - At least 5–10 rules you wrote or significantly tuned; at least one purple-style exercise where you documented detection coverage; at least two playbooks you can walk someone through.

---

## Readiness Checklist (Moving to Advanced)

You are ready to think of yourself as "advanced" when you can *demonstrate* most of the following:

- **Detection**
  - You have written or tuned rules (e.g. Sigma) that are in use (or would be in a lab). You can explain what they detect, what the false positive risk is, and how they map to ATT&CK.
- **Hunting**
  - You have run at least 3–5 hypothesis-driven hunts and documented results. You can form a hypothesis from threat intel or ATT&CK and translate it into queries.
- **Purple team**
  - You have participated in a purple-style exercise and produced a short coverage summary (what was detected, what wasn’t, recommendations).
- **Process**
  - Your playbooks and runbooks are clear enough for someone else to follow. You incorporate SOC/IR feedback into tuning and documentation.
- **Ownership**
  - You can own a small detection or playbook area end-to-end: design, deploy, monitor, tune.

When you can do this, move to the [Advanced Blue Team Learning Map](#/learning/blue/advanced-blue-team-roadmap) for IR leadership, detection program ownership, and purple team design.
