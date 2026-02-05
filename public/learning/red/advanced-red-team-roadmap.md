# Advanced Red Team Learning Map

This map is for operators who have completed the [Intermediate Red Team Learning Map](#/learning/red/intermediate-red-team-roadmap) and its readiness checklist. You can run internal-style engagements, produce client-ready reports, and hold at least one solid practical cert. The next step is **leading engagements**, **adversary emulation at scale** (C2, persistence, evasion), **initial access**, and **progression to lead, principal, or research roles**. This document covers what actually matters at this stage—and what to avoid.

---

## Reality Check for Advanced

- **What people think "advanced" is**
  - Custom malware, 0-days, and nation-state tradecraft.
  - Title-chasing: "principal" or "lead" without owning outcomes.
  - Being the person who does the "cool" technical work while others handle clients and reports.
- **What it actually is**
  - **Leading scoped engagements**: defining objectives, scope, and rules of engagement; coordinating the team; and owning client communication and report quality.
  - **Making tradecraft decisions**: when to use C2 vs when to go loud and fast; when to invest in evasion vs when to accept detection for the exercise; when to build vs buy.
  - **Owning outcomes**: the client remembers whether you achieved the objective and delivered a report that helped them improve—not whether you used the latest C2.
  - **Mentoring or researching**: lifting others up or contributing tradecraft and detection that the community uses.
- **Why advanced operators stall**
  - **Staying in the weeds**: only technical work, no leadership, no client-facing responsibility. They remain the "go-to hacker" but never lead.
  - **Avoiding initial access or client work**: they assume "you have a foothold" or defer kickoffs and report delivery to someone else. Real red team leads own the full story.
  - **Chasing tools instead of outcomes**: new framework every year, no consolidation of methodology or reporting standards.

---

## Leading Engagements

### Scoping and Rules of Engagement

- **Objectives**
  - Define what "success" means: e.g. access to crown jewels, domain admin, or proof that detection would catch critical actions. Get client sign-off in writing.
  - In scope / out of scope: which systems, networks, and users; what is off limits (e.g. production DBs, certain credentials). Clarify physical, social engineering, and cloud if relevant.
- **Rules of engagement (RoE)**
  - What is allowed: phishing, after-hours testing, use of C2, persistence. What is not: destructive actions, exfil of real PII beyond what is needed to prove impact.
  - Communication: how to report critical findings (e.g. within 24 hours), who to contact, and how to pause if the client requests it.
  - Escalation: when to stop (e.g. suspected breach, client request) and who has authority to call it.
- **Why it matters**
  - Poor scoping leads to scope creep, missed expectations, or legal/ethical issues. The lead owns this; do not delegate it to the client alone.

### Team Coordination

- **Roles and handoffs**
  - Who does recon, who does initial access (if in scope), who runs C2 and lateral movement, who collects evidence and writes the report. Define handoffs: when operator A passes credentials or context to operator B, it is documented (e.g. in a shared runbook or ticketing system).
  - Avoid "everyone does everything" with no single owner for reporting; the report is the deliverable the client keeps.
- **Documentation**
  - Timeline of actions, tool output, and screenshots from the start. Do not reconstruct the engagement from memory at report time. Use a consistent format (e.g. date/time, operator, action, result) so the report author can build the narrative.
- **Quality and review**
  - At least one senior review of the report before delivery. Set standards: exec summary length, finding format (description, evidence, impact, remediation), and ATT&CK mapping. Balance depth vs delivery time—do not sacrifice clarity for exhaustiveness.

### Client Communication

- **Kickoff**
  - Confirm scope, RoE, and objectives. Answer questions; clarify what the red team will and will not do. Set expectations for status updates and report delivery.
- **During the engagement**
  - Status updates at agreed cadence (e.g. weekly or at milestones). If you find something critical, notify the client per RoE—do not wait for the final report.
- **Report delivery**
  - Deliver on time. Walk through the report in a call if the client wants it: exec summary first, then findings, then Q&A. Be ready to explain attack path and business impact in plain language.

---

## Adversary Emulation at Scale

### Full Kill Chain with C2

- **End-to-end flow**
  - Initial access (if in scope) → execution → persistence → privilege escalation → lateral movement → collection → exfiltration or objective. Use C2 where it adds realism: long-running operations, multiple hosts, and consolidated access. Use "loud and fast" (e.g. impacket, RDP) when the objective is to find vulns and report quickly.
  - Document both approaches: "We used C2 for persistence and lateral movement over 2 weeks" vs "We used psexec and RDP for a 3-day internal test." The client and report should reflect the chosen model.
- **When to use C2**
  - Multi-day or multi-week engagements; need for persistence and stealth; objective that requires sustained access (e.g. data collection, crown jewels). When not: short internal pentest, "assume foothold" scope, or client with no detection to test.
- **Persistence strategies**
  - Scheduled tasks, services, WMI event subscriptions, registry Run keys, and (where appropriate) C2 beacons. Know how each maps to detection: Sigma, EDR, and Windows events (e.g. 4698, 7045, Sysmon). Choose persistence that fits the scenario and document what would be visible to defenders.
- **Operating over days or weeks**
  - OPSEC: assume logging; minimize noisy tool use during "quiet" phases. Plan for blue team response: they may start hunting. Document what you did and when so the report can describe both the attack path and (if applicable) whether and how defenders detected or responded.

### Frameworks and Scenarios

- **MITRE ATT&CK**
  - Use it to structure emulation: pick a subset of techniques that match the objective (e.g. credential access, lateral movement) and map your actions to the matrix. The report then speaks in a language defenders and management understand.
- **Vendor and community scenarios**
  - Carbanak, FIN6, or other published adversary profiles: use them as templates for technique selection and reporting. Do not copy them blindly; adapt to scope and client environment.
- **Takeaway**
  - Adversary emulation at scale means "we behaved like a realistic adversary over the full kill chain and documented it"—not "we ran a random set of tools."

---

## Evasion and EDR Awareness

### What EDR Sees

- **Typical EDR coverage**
  - Process creation and parent-child relationships; injection (e.g. DLL, process hollowing); network connections and DNS; file creation and modification; kernel callbacks (e.g. driver load, image load). Many products also use behavioral and ML-based detections.
- **Why "run the same hash" fails**
  - Known tool hashes (mimikatz, SharpHound, Cobalt Strike, etc.) are in blocklists or trigger high-fidelity alerts. In a monitored environment you must assume your binaries and scripts are fingerprinted unless you have explicitly tested otherwise. Evasion is a cat-and-mouse game; at advanced level you need to know the cost and when to accept detection for the exercise.

### Evasion Concepts (Practical, Not Malware Dev)

- **Living off the land (LOLBins)**
  - Use signed, native binaries (PowerShell, cscript, mshta, etc.) where possible to reduce new files and process creation patterns. Understand that many LOLBins are also monitored; it is not a silver bullet.
- **Signed binaries and trusted paths**
  - Executing from trusted locations or using signed code can reduce some detections. Tradeoff: complexity and maintenance vs benefit. Use when the engagement objective justifies it (e.g. testing detection for a specific technique).
- **Less-known C2 channels**
  - DNS, HTTPS with custom profiles, or other protocols that blend with normal traffic. Again: tradeoff between realism, effort, and detection. Document what you used and what defenders could see.
- **When to invest in evasion vs when to accept detection**
  - If the goal is "prove we can get to crown jewels," sometimes going loud is acceptable and the report focuses on impact and remediation. If the goal is "test whether blue team detects us," evasion is part of the exercise. Lead and client should agree up front.

### Testing Detection with Blue Team

- **Purple team and tuning**
  - Work with blue team to run an attack, observe alerts, and tune rules (e.g. Sigma). Validate that critical actions are (or are not) detected. The report can include "Detection coverage: the following techniques were detected; the following were not."
- **Defer or treat carefully**
  - Deep kernel/rootkit territory: only if it is in scope and you have the skills. Focus on practical tradecraft and decision-making that improves client outcomes.

---

## Initial Access

### Why It Matters

- Many engagements assume "you have a foothold." Real red teams often must prove initial access: phishing, external vuln, or (where scoped) physical. If you never do initial access, you are doing internal pentests with a red team label. Leading a full red team engagement means owning the entire story from the outside in when scope allows.

### Phishing and Social Engineering

- **Concepts**
  - Phishing: convincing a user to open a link or attachment or to divulge credentials. Social engineering: manipulating people (e.g. vishing, pretexting) to gain access or information. Both have legal and ethical boundaries; scope and RoE must be explicit.
- **Scoping**
  - Simulated phishing (e.g. internal platform or controlled campaign) vs full custom campaign. Which users, which systems, and what success looks like (e.g. credential capture, code execution). Get written approval and define what is off limits.
- **Internal vs external**
  - Internal: your team or client runs the infrastructure. External: third-party service or red team infrastructure. Clarify who hosts links and captures data and how data is handled and destroyed after the engagement.
- **Takeaway**
  - Do not run phishing or social engineering without clear scope, RoE, and client approval. Document everything for the report and for legal/audit.

### External Attack Surface

- **Internet-facing apps and VPNs**
  - Web apps, VPN gateways, and remote access services: often the first step in a real attack. At advanced level you should be able to scope an external test (or work with specialists) and connect it to internal phases: e.g. "We phished a user, obtained credentials, then moved laterally."
- **Cloud identity (high level)**
  - Azure AD, Okta, and other identity providers: many organizations are hybrid or cloud-first. Understand that initial access may be cloud account takeover (e.g. password spray, token theft) rather than on-prem. Defer deep cloud offensive work unless it is in scope and you are trained; otherwise coordinate with someone who is.

### Physical and Other Vectors

- **Brief mention**
  - Physical access (e.g. dropped USB, office access) and other vectors (e.g. supply chain) are real but often out of scope or handled by specialists. Acknowledge them in scoping; do not dive deep unless relevant to your role.

---

## Red Team vs Penetration Test

### Objectives

- **Penetration test**
  - Typically: find vulnerabilities and misconfigurations, report them, and recommend remediation. Scope is often defined by systems or applications; success is "we found and documented X findings."
- **Red team**
  - Typically: achieve a specific objective (e.g. access to crown jewels, exfil of sample data) and demonstrate impact. Success is "we showed that an adversary could do Y, and here is the path and how to fix it." Finding vulns is a means, not the only deliverable.
- **Why the distinction matters**
  - Clients and contracts use these terms differently. Set expectations: "This is a red team engagement; we will pursue an objective and report the story and findings" vs "This is a pentest; we will test in-scope systems and report vulnerabilities."

### Rules and Scope

- **Red team**
  - May allow phishing, social engineering, longer duration, and broader scope (e.g. "get to the finance server"). RoE still define limits (no destruction, no exfil of real PII beyond proof).
- **Pentest**
  - Often no phishing, no social engineering, and shorter duration. Scope is usually a defined set of systems or apps.
- **Avoid scope creep**
  - Do not turn a pentest into an ad-hoc red team (e.g. "while we were at it we phished") without client agreement and updated RoE. Do not sell a red team and then deliver only a vuln list without the narrative and impact.

### Reporting Differences

- **Red team report**
  - Often includes a timeline, attack path narrative, and business impact: "An attacker could do X, which would result in Y (e.g. data breach, downtime)." Findings are tied to the path and to remediation that would break the path.
- **Pentest report**
  - Often findings-centric: each vuln with severity, evidence, and remediation. Less emphasis on end-to-end story unless it was a scenario-based test.
- **Blend when appropriate**
  - Some engagements are hybrid (e.g. internal pentest with a red team-style narrative). Agree with the client what the deliverable looks like before you start.

---

## Research and Tradecraft Development

### When to Build vs Buy

- **Custom tooling and scripts**
  - Build when: nothing off the shelf does what you need, or you need to reduce detection surface and can maintain the tool. Buy (or use open source) when: existing tools are good enough and your time is better spent on methodology and reporting.
  - Balance time vs value: a one-off script that saves 2 hours once may not be worth it; a script that standardizes evidence collection for every engagement might be.
- **One-off techniques**
  - Research and develop when it serves an engagement or a clear gap (e.g. a new detection bypass that clients care about). Do not chase novelty for its own sake.

### Sharing and Community

- **Conferences and writeups**
  - Sharing tradecraft (techniques, tools, or detection) improves the community and your reputation. It also feeds back into engagements: you explain your work clearly and stay sharp.
- **Internal knowledge bases**
  - Runbooks, tool docs, and after-action reviews so the next engagement does not start from zero. Leads should encourage and maintain this.

### Staying Current

- **Detection**
  - Sigma, vendor blogs, and open-source detection projects: know what defenders are deploying. It informs your tradecraft and your report ("Detection X would have caught this if enabled").
- **Adversary reports**
  - Mandiant, CrowdStrike, and similar: real adversary TTPs and campaigns. Use them to inform scenario choice and technique selection; do not chase every new report as a checklist.
- **Tool updates**
  - C2 frameworks, impacket, and other tools evolve. Stay current enough to use them safely and document correctly; do not let tool churn replace methodology and reporting discipline.

---

## Readiness Checklist (Lead / Principal / Research)

You are ready to think of yourself as a **lead** or **principal** when you can *demonstrate* most of the following:

- **Engagement leadership**
  - You have led at least 2–3 engagements end-to-end: scoping, RoE, team coordination, execution, and report delivery. The reports passed client and internal review.
  - You can run a kickoff, manage status updates, and present findings to technical and non-technical audiences.
- **Mentoring**
  - You have mentored others (e.g. report review, tradecraft guidance, or shadowing on engagements). Others come to you for methodology and quality questions.
- **Tradecraft and outcomes**
  - You make deliberate choices about C2, evasion, and scope. You balance "get the objective" with "deliver a report that helps the client." You do not burn engagements with careless OPSEC or missing reports.
- **Professional boundaries**
  - You can say no to scope creep and yes to clear objectives. You protect client data and credentials and follow RoE. You escalate when needed.

**Optional research track:** You have contributed public research (writeup, tool, or detection) that others use. It feeds back into your engagements (e.g. better reports, clearer methodology). Research is not required for lead/principal; it is one path among others.

---

## 6–12 Month Timeline (Post-Intermediate)

- **Months 1–3: Lead or Co-Lead Engagements**
  - Goals:
    - Lead or co-lead at least one engagement from scoping to report. Own client communication (kickoff, status, delivery).
    - Review at least one report from a peer and give structured feedback. Establish or follow team standards for findings and ATT&CK mapping.
    - If you have not already, run one full adversary emulation (C2 + persistence) in a lab and document it as you would for a client.
- **Months 4–6: Full Adversary Emulation with C2 and Persistence**
  - Goals:
    - Run a multi-phase engagement (or lab) that includes initial access (if in scope), C2, persistence, lateral movement, and objective. Produce a report with timeline, attack path, and detection notes.
    - Map your actions to a framework (e.g. ATT&CK or a vendor scenario). Practice tuning or writing detection rules with blue team (or in lab).
    - Understand EDR and evasion at a practical level: what you used, what would be detected, and when you accepted detection for the exercise.
- **Months 7–9: Initial Access and Evasion Lab Work**
  - Goals:
    - If initial access is in scope for your role: run a scoped phishing or external test (or lab equivalent) and document it. Understand legal/ethical boundaries and RoE.
    - Invest in one evasion or detection-testing exercise: e.g. test a technique against EDR, document what was detected and what was not, and summarize for a report.
    - Optional: present internally or externally (e.g. brown bag, conference) on a technique or engagement lesson learned.
- **Months 10–12: Consolidate Lead Role or Research**
  - Goals:
    - Lead 1–2 more engagements with full ownership. Refine runbooks, templates, and handoffs so the next engagement is smoother.
    - If pursuing research: publish a writeup, tool, or detection that others can use; tie it back to engagement value (e.g. "This technique appeared in engagement X; here is how we detected it").
    - Mentor at least one person (report review, shadowing, or methodology). Ensure they can explain their work and deliver a clean report.

Throughout the 6–12 months, the priority is **leadership and outcomes**: leading engagements, making tradecraft decisions, and delivering reports that help clients improve. The goal is to be the lead who owns the full story—from scope to initial access (when applicable) to report—and who lifts others up, not just the operator who can get domain admin and disappear.
