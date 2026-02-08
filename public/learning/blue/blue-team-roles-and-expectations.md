# Blue Team: Roles and Expectations

A focused look at defensive security roles: what they do, what they deliver, and who they fit. For a side-by-side comparison with red team and pentest, see [Red Team, Pentest & Blue Team](#/learning/red/red-team-vs-pentest-vs-blue). For the learning path, see the [Beginner](#/learning/blue/beginner-blue-team-roadmap) and [Intermediate](#/learning/blue/intermediate-blue-team-roadmap) roadmaps.

---

## SOC Analyst (L1 / L2)

- **What they do** — Monitor alerts from SIEM, EDR, and other tools; triage events (true positive, false positive, or escalate); run playbooks for common scenarios; escalate to IR or detection engineering when needed. L1 often does first-line triage and basic containment; L2 does deeper analysis and may tune or suggest rule changes.
- **Typical scope** — Internal: logs, alerts, ticketing. They do not attack; they improve triage quality and response time.
- **Deliverable** — Triage outcomes, incident tickets, escalation notes, and (over time) input to playbooks and detection tuning.
- **Day-to-day** — Alert review, log analysis, following runbooks, communicating with other teams. Can be shift work in 24/7 SOCs.
- **Who it fits** — People who like puzzles, can handle repetition with attention to detail, and want to grow into IR or detection engineering. Entry point for many blue team careers.

---

## Detection Engineer

- **What they do** — Build and tune detection rules (Sigma, SIEM, EDR); map coverage to ATT&CK; close visibility gaps; reduce false positives. They work with SOC (what alerts do we need?) and IR (what did we miss?).
- **Typical scope** — Log sources, SIEM/EDR platforms, rule lifecycle. Often works with threat intel and red team in purple exercises.
- **Deliverable** — Detection rules, coverage reports, tuning recommendations, and documentation of what is detected and where gaps remain.
- **Day-to-day** — Writing and testing rules, analyzing log sources, purple team collaboration, and reviewing alerts that SOC flags as noisy or missing.
- **Who it fits** — People who like building systems, thinking like an attacker (to design detection), and working with data and logic. Often comes from SOC or IR.

---

## Incident Responder

- **What they do** — Respond to confirmed incidents: contain (isolate hosts, revoke access), eradicate (remove malware, close vulns), recover (restore systems), and document. Lead or support incident response; may be on-call.
- **Typical scope** — Active incidents; post-incident reviews and playbook updates.
- **Deliverable** — Incident reports, containment actions, root cause analysis, and lessons learned. Playbooks and runbooks updated from real events.
- **Day-to-day** — Investigation (logs, EDR, forensics), coordination with IT and management, and documentation. Can be high pressure during active incidents.
- **Who it fits** — People who stay calm under pressure, can work across teams, and want to “stop the bad thing” and improve for next time. Often promoted from SOC L2 or from sysadmin/networking.

---

## Threat Hunter

- **What they do** — Proactively search for threats that have not yet triggered an alert. Hypothesis-driven: “If an attacker did X, we would see Y.” Use SIEM, EDR, and logs to validate or refute hypotheses.
- **Typical scope** — Same data as SOC and detection (logs, EDR); different mindset (hunt, don’t wait for alerts).
- **Deliverable** — Hunt reports, new detection ideas, and feedback to detection engineering. Sometimes part of detection or IR team.
- **Day-to-day** — Building hypotheses, querying data, iterating, and documenting findings. Blend of analysis and detection thinking.
- **Who it fits** — People who like deep dives, curiosity-driven investigation, and turning “what if” into “we checked and here’s what we see.”

---

## How This Fits With Red and Pentest

| | Red Team | Pentest | Blue Team |
|--|----------|---------|-----------|
| **Primary goal** | Achieve objective; show impact | Find and report vulns | Detect and respond |
| **Scope** | Often broad (phishing, internal, C2) | Usually defined systems/apps | Internal monitoring and response |
| **Duration** | Often weeks | Days to few weeks | Ongoing |
| **Deliverable** | Story + findings + impact | Findings + remediation | Rules, playbooks, incidents |
| **Mindset** | Adversary; “can we get there?” | Tester; “what’s broken?” | Defender; “what do we see?” |

Blue team roles often collaborate with red team in **purple team** exercises: red runs attacks, blue tunes detection; both improve. See the [Intermediate](#/learning/blue/intermediate-blue-team-roadmap) and [Advanced](#/learning/blue/advanced-blue-team-roadmap) roadmaps for purple team and detection program ownership.

---

## How to Choose

- **Start with SOC** if you want a clear entry point (monitoring, triage) and to learn the environment. Many detection engineers and IR analysts start here.
- **Aim for detection engineering** if you prefer building rules and systems over day-to-day triage; often a step after SOC or from a technical background.
- **Aim for IR** if you want to own the response when something bad happens and to work across teams under pressure.
- **Threat hunting** can be a dedicated role or part of detection/IR; it rewards curiosity and hypothesis-driven work.

You can move between these roles. Use the [Glossary](#/learning/blue/blue-team-glossary) and roadmaps to build the skills that transfer across all of them.
