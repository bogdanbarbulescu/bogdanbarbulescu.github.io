# Intermediate Red Team Learning Map

This map is for operators who have completed (or nearly completed) the [Beginner Red Team Learning Map](#/learning/red/beginner-red-team-roadmap) and its readiness checklist. You can compromise a simple AD lab end-to-end, document your actions, and explain your tools. The next step is **operational readiness**: deeper AD exploitation, C2 and OPSEC awareness, professional reporting, and preparation for advanced certs and real engagements. This document covers what actually matters at this stage—and what to avoid.

---

## Reality Check for Intermediate

- **What people think "intermediate" is**
  - Running C2 frameworks, memorizing ATT&CK IDs, and collecting more certs.
  - Doing "red team" by dropping implants and moving fast without caring about detection.
  - Being the person who "gets domain admin" while the rest of the team writes reports.
- **What it actually is**
  - **Reproducible tradecraft**: you can run the same attack path again, document it, and explain why each step worked.
  - **Understanding detection**: you know what logs and alerts your actions generate and how to reduce or accept that exposure.
  - **Writing for clients**: findings, evidence, remediation, and exec summaries that technical and non-technical readers can use.
  - Operating under time and scope pressure without going down rabbit holes or burning the engagement.
- **Why intermediates stall**
  - **Skipping reporting**: they can pop shells but cannot produce an engagement-style report that would be acceptable to a client.
  - **Ignoring OPSEC**: they run loud tools in labs and never learn what defenders see; when they hit a monitored environment, they get burned fast.
  - **Chasing advanced techniques** (custom loaders, EDR bypass, kernel exploits) before solidifying AD methodology and detection awareness.
  - **Cert stacking** without depth: multiple practical certs but no consistent ability to run a full-scope engagement and document it.
- **Skills to defer until you are clearly operational**
  - Full custom C2 development and heavy obfuscation.
  - Kernel-level exploit development and rootkit-style persistence.
  - Advanced malware dev (implant architectures, low-level Windows internals beyond what you need for AD).

---

## Deeper Active Directory

### ACL Abuse and BloodHound-Driven Paths

- **Beyond "run SharpHound"**
  - BloodHound is a graph of relationships and **ACLs**. The value is in reading the graph: why does this user have a path to Domain Admin? Which ACLs are misconfigured?
  - Practice: given a BloodHound path, explain each edge in plain language (e.g. "User A is in Group B; Group B has GenericAll on Computer C").
  - Use BloodHound to find attack paths you have not seen in writeups; then execute them manually (impacket, RDP, etc.) and document.
- **Common high-value ACL misconfigurations**
  - GenericAll, WriteDacl, WriteOwner on users, computers, or groups.
  - ForceChangePassword and how it leads to credential takeover.
  - AddMember and nested group abuse.
- **Why it matters**
  - Real internal engagements are full of one-off ACLs and legacy groups. You need to spot them and chain them, not rely on a single known technique.

### Kerberos at Operational Level

- **Golden and Silver Ticket concepts**
  - What is stored in a TGT vs a TGS; what the KRBTGT hash represents and why it is the "key to the kingdom."
  - Silver tickets: when they are useful (service persistence, lateral movement without touching the DC) and their limitations (scope, detection).
  - Do not aim to "memorize" ticket crafting; aim to understand what each ticket type proves and what defenders can see (Kerberos logging, 4768/4769, etc.).
- **Delegation abuse**
  - Unconstrained vs constrained vs RBCD (Resource-Based Constrained Delegation). Which allows which abuse (e.g. impersonation, DCSync from a compromise).
  - How to find delegation misconfigs in BloodHound and abuse them with impacket or other tools.
- **Kerberoasting and AS-REP roasting**
  - You did these as a beginner; at intermediate you should know when they are the right move, what hashes you get, how to crack them, and what logging looks like (4769, 4624/4634, etc.).

### DCSync, DCShadow, and Similar

- **DCSync**
  - What it is: abusing the MS-DRSR protocol to pull hashes from a DC. Requires appropriate rights (e.g. Replicating Directory Changes).
  - When it matters: you have compromised an account or ACL that grants replication rights; you need a full hash dump for pass-the-hash or offline cracking.
  - Detection: 4662 (replication), and often 4610/4624 in context. Understand that this is one of the noisiest actions in AD.
- **DCShadow**
  - Conceptual: registering a fake DC and pushing changes (e.g. adding DCSync rights to your account). Rare in real engagements; useful to understand for depth.
  - Defer deep practice until you are comfortable with DCSync and ACL abuse in labs.
- **Rule of thumb**
  - Prefer the least privileged path that achieves the objective. DCSync is powerful but loud; sometimes lateral movement and local credential collection are enough and harder to detect.

### GPO and OU Design from an Attacker Perspective

- **GPOs**
  - Where policies live (SYSVOL, replication), what they can do (drive maps, scripts, registry, security settings), and how to find misconfigurations (e.g. credentials in GPP, overly broad apply permissions).
  - GPO abuse: reading GPOs from the domain, identifying weak settings, and using them for persistence or privilege escalation.
- **OU structure**
  - How OUs and inheritance affect where GPOs apply and where admins look. Attacker use: predict where high-value targets and weak policies live.

---

## Operational Tooling and OPSEC

### C2 Concepts

- **What a C2 is**
  - A command-and-control framework: implants on targets call back to your server; you send commands and receive output. Used for persistence, lateral movement, and consolidation when simple RDP/SSH/shells are not enough or are too noisy.
- **When you might use one**
  - **In a lab**: to simulate realistic adversary behavior and to practice OPSEC (e.g. traffic patterns, logging).
  - **In a real engagement**: when scope and rules of engagement allow it and when the objective (e.g. long-term persistence, data collection) justifies the added complexity and detection surface.
- **The cost**
  - C2 traffic, process creation, and in-memory behavior are heavily monitored. EDR and network detection will see common frameworks unless you invest in evasion—and evasion is a deep rabbit hole. At intermediate, the goal is to **understand** that cost, not to become a C2 operator.
- **Practical stance**
  - Learn one framework (e.g. Covenant, Sliver, or a commercial lab license) enough to know how beacons work, what callbacks look like, and what logs they generate. Prefer improving your AD and reporting over chasing C2 mastery.

### Tool Choices: Impacket vs C2 vs Native

- **When to use impacket**
  - One-off execution, credential dumping, and lateral movement when you have credentials. No long-term implant; minimal footprint. Ideal for many internal engagements.
- **When to use native RDP/SSH**
  - When you have credentials and the target allows it; no custom binary, often less suspicious than a new process from a C2 payload.
- **When C2 might be appropriate**
  - Multi-day operations, persistence requirements, or when you need to consolidate access from many hosts. Only after you understand the detection tradeoffs.
- **Avoid**
  - Using C2 "because it's cool" in every lab. Use the simplest tool that meets the objective.

### Basic OPSEC

- **Logging**
  - Assume every significant action (logon, process creation, network connection, PowerShell, etc.) can be logged. Know which Windows events (4688, 4624, 4648, 4768/4769, etc.) and which Sysmon/EDR events matter for your actions.
  - In labs: enable logging (e.g. Sysmon, Windows Event Forwarding) and review what your tools generate. Adjust tradecraft to reduce noise where it matters.
- **AV/EDR awareness**
  - Many labs have no EDR; real environments do. At intermediate you should know that in-memory execution, PowerShell without constraints, and known tool hashes are commonly flagged. Do not rely on "the client has no EDR" as a permanent assumption.
- **Mistakes that burn engagements**
  - Running the same hash of a well-known tool (e.g. mimikatz, SharpHound) on a monitored host without testing in a lab first.
  - No coordination with the blue team: no scope on monitoring, no discussion of expected activity. Result: you get "caught" in a way that does not add value and wastes time.
  - Exfiltrating or touching data outside scope; ignoring rules of engagement.

### Defer for Now

- Custom loaders, packers, and heavy obfuscation.
- Kernel exploits and rootkits.
- Deep malware dev (implant design, low-level persistence). Focus on AD, reporting, and detection awareness first.

---

## Detection and Purple Team Thinking

- **Why "can I get domain admin?" is not enough**
  - In real engagements you are paid to demonstrate risk **and** to help the client improve. If you achieve domain admin in a way that every SIEM would catch, you have shown that the attack works—but you have also shown that detection is possible. The value is in explaining both: what you did, what was (or should have been) detected, and how to fix it.
- **Mapping actions to what defenders see**
  - For each major action (e.g. Kerberoasting, DCSync, lateral movement with psexec), know the typical Windows/Sysmon/EDR events and Sigma or ATT&CK-based rules that would fire.
  - Use ATT&CK as a shared language: "We used technique T1558.003 (Kerberoasting); detection rule X would have alerted on 4769 with specific conditions."
- **Purple team exercises**
  - Red and blue work together: red runs an attack, blue tunes detection and response; red adapts. Even if you only do this in a lab (e.g. you run attacks and review Splunk/ELK + Sigma rules), it will improve your OPSEC and your ability to write useful findings.
- **Takeaway**
  - At intermediate, you should be able to answer: "If I do X, what would a competent defender see, and how would I reduce or accept that exposure?"

---

## Reporting and Professionalism

### Engagement-Style Reports

- **Structure**
  - **Executive summary**: 1–2 pages for management: what was tested, what was found (high level), and what to do next.
  - **Findings**: each finding with title, severity, description, evidence (screenshots, logs, steps), impact, and remediation. Map to ATT&CK where useful.
  - **Appendix**: detailed technical notes, full attack path, tool output if needed. Not every reader needs this; the main report should stand alone.
- **Evidence**
  - Screenshots and command output that clearly show the vulnerability and the result. Timestamps and host names so the client can reproduce or verify.
- **Remediation**
  - Concrete, actionable steps. Not "patch the system" but "apply MS patch KBxxxx; verify with …; consider GPO to enforce …."

### Writing for Multiple Audiences

- **Technical readers** (admins, blue team): enough detail to reproduce and fix (commands, logs, configurations).
- **Management**: risk in business terms (e.g. "An attacker with access to this share could read all HR data"), no jargon without explanation.
- **Avoid**
  - One-size-fits-all blobs of text. Use the exec summary for leadership and the findings section for technical owners.

### Time Management and Scoping

- **During an engagement**
  - Agree on scope (hosts, networks, out-of-scope), rules of engagement, and reporting deliverables up front.
  - Timebox: do not spend three days on one host unless it is critical. Document what you tried, what worked, and move on.
  - Communicate: if you are stuck or if you find something critical, tell the client or your lead. Do not go dark.
- **Professional behaviors**
  - Deliver reports on time; if you cannot, say so early. Follow up on remediation if that is in scope. Protect client data and credentials; no lab reuse of real environment details.

---

## Labs and Practice at Intermediate Level

### Pro Labs and Custom AD Builds

- **HTB Pro Labs, CRTO lab, and similar**
  - Multi-machine, AD-focused environments with time pressure and (often) no walkthroughs. Use them to practice full kill chain: initial access, privilege escalation, lateral movement, objective (e.g. DA or critical data), and **full report**.
  - Goal: complete the lab and produce a report that could be handed to a client. That means exec summary, findings with evidence, remediation, and ATT&CK mapping.
- **Custom AD lab**
  - Build or use a community lab (e.g. GOAD, Purple Team Labs) with multiple domains or forests, varied trust and delegation, and optional detection (Splunk/ELK + Sigma). Practice attack paths you have not seen in writeups.
- **Introducing detection**
  - Add Sysmon and a SIEM (or even just Windows Event Log review) to your lab. Run your usual tools and see what gets logged. Tune or write one or two Sigma rules. This will improve your OPSEC and your ability to describe detection in reports.

### Goals at This Stage

- **Full kill chain under time pressure** with minimal reliance on walkthroughs.
- **Documentation**: timelines, tool output, and reports for every significant lab.
- **OPSEC awareness**: at least one lab where you care about what would be detected and you adjust your tradecraft (or document why you accepted the noise).

### What Good Practice Looks Like

- You can run an internal-style engagement in a lab (recon to DA or equivalent objective) and produce a report that a senior would not be ashamed to send to a client.
- You can explain to a defender what you did and what they should look for (logs, rules).
- You do not chase the hardest box; you chase **consistent, repeatable, documented** operations.

---

## Certifications (Intermediate Stage)

### OSCP

- **What it is**
  - Offensive Security's practical penetration testing cert: multiple machines in a time-limited lab, plus a report. Includes a small buffer overflow component. It is an HR filter and a real skills test.
- **When to attempt it**
  - After you can consistently root/compromise Medium-difficulty HTB machines without full walkthroughs and after you have written several engagement-style reports. Do not sit for it as a "first practical cert" if you have not done the beginner path.
- **How it differs from HTB**
  - Time pressure (exam clock), no hints, report quality matters. Practice timeboxing (e.g. 2 hours per machine, then document and move on) and report writing under exam conditions.
- **Preparation**
  - Buffer overflow: learn the basics (stack, EIP overwrite, bad chars, shellcode). Do not spend months on exploit dev; get to the point where you can do a simple BOF and then focus on the rest of the exam.
  - Labs: do the OSCP lab machines or equivalent (HTB, Proving Grounds) with strict time limits and full reports.

### CRTO and Similar Red Team Certs

- **CRTO (Certified Red Team Operator)**
  - C2-focused (often Cobalt Strike or similar), AD-heavy. Valuable if you are moving toward red team roles and need to show you can operate in a C2 environment. Do not do it before you are solid on AD and OPSEC basics.
- **Other practical red team / AD certs**
  - Evaluate by: is there a hands-on exam? Does it require reporting? Does it match the kind of work you want (internal vs external, AD vs web)? Prefer certs that reinforce methodology and reporting over those that are purely "get the flag."

### What to Avoid

- **Stacking certs without depth**: multiple practical certs but you still cannot run a full engagement and write a clean report. One cert done well is better than three done poorly.
- **Skipping report practice**: if the cert has a report component, treat it as important as the technical component. In the real world, the report is often what the client sees most.

---

## Readiness Checklist (Moving to Advanced / Operational)

You are ready to think of yourself as "advanced" or ready for senior/operational roles when you can *demonstrate* most of the following:

- **AD and tradecraft**
  - You have compromised multiple AD environments (labs or pro labs) using varied paths (ACL abuse, delegation, Kerberoasting, DCSync where appropriate) and documented each path clearly.
  - You can read a BloodHound graph, pick a path, and execute it with minimal lookup. You understand what logs your actions generate.
- **OPSEC and detection**
  - You have run at least one lab with logging/detection (Sysmon, SIEM, or Sigma) and have adjusted your tradecraft or documented detection. You can explain to a defender what to look for for a given technique.
- **Reporting**
  - You have produced at least 3–5 engagement-style reports (exec summary, findings with evidence, remediation, ATT&CK mapping) that could be sent to a client. A senior has reviewed at least one and given feedback.
- **Certification**
  - You hold at least one solid practical cert (OSCP, CRTO, PNPT, or equivalent) that required a hands-on exam and a report, and you can back it up in conversation.
- **Professional behaviors**
  - You manage scope and time; you communicate when stuck or when you find critical issues. You do not burn engagements with careless OPSEC or missing reports.

---

## 6–12 Month Timeline (Post-Beginner)

- **Months 1–3: Deep AD and Tooling**
  - 2–3 hours/day average.
  - Goals:
    - Master BloodHound-driven path discovery and ACL abuse in your AD lab; execute at least 2–3 paths you have not seen in writeups.
    - Deepen Kerberos: Golden/Silver Ticket concepts, delegation abuse, Kerberoasting/AS-REP roasting at operational level. Understand related logging (4768, 4769, etc.).
    - Introduce one C2 framework in the lab (e.g. Covenant, Sliver); understand callbacks, logging, and why C2 is noisy.
- **Months 4–6: OPSEC and Detection Awareness**
  - 2–3 hours/day average.
  - Goals:
    - Add detection to your lab (Sysmon, Windows Event Log review, or Splunk/ELK + Sigma). Run your usual tools and document what gets logged.
    - Complete at least one purple-style exercise: run attacks, tune or write detection rules, adjust tradecraft. Write a short "detection report" for your own actions.
    - Optional: start HTB Pro Labs or CRTO-style lab; focus on full kill chain plus report, not just root.
- **Months 7–9: Reporting and Pro Labs**
  - 2–3 hours/day, focused.
  - Goals:
    - Produce 3–5 full engagement-style reports (exec summary, findings, evidence, remediation, ATT&CK). Have at least one reviewed by a senior or peer.
    - Complete one or more pro labs (HTB Pro, CRTO lab, or equivalent) under time pressure with full documentation.
    - Practice timeboxing: e.g. 2 hours per machine, then document and move on. No endless rabbit holes.
- **Months 10–12: Cert Prep or First Engagement-Style Practice**
  - Goals:
    - If targeting OSCP: buffer overflow basics, lab machines with time limits, and report practice under exam conditions. Sit the exam when you are consistently passing practice runs.
    - If targeting CRTO or similar: complete the vendor lab and any practice material; ensure you can operate C2 and document actions for reporting.
    - If not pursuing a cert: run 2–3 full-scope "engagement-style" labs (you define scope, RoE, and deliverable report) and treat them as real engagements. Get feedback on reports.

Throughout the 6–12 months, the priority is **operational readiness**: reproducible tradecraft, detection awareness, and professional reporting. The goal is to be the operator who can run an internal-style engagement and deliver a report that helps the client improve—not just the one who can get domain admin in a lab and disappear.
