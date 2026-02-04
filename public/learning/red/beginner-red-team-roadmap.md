# Beginner Red Team Learning Map

Opinionated 6–12 month roadmap to build real junior red team foundations without tool addiction or empty theory.

---

## Reality Check (Non-Negotiable)

- **What beginners think red teaming is**
  - Point-and-click hacking with "pro" tools (Metasploit, Cobalt Strike), YouTube payloads, flashy shells, and instant domain admin.
  - CTF-style puzzle solving where everything is exploitable if you just try enough tricks.
  - A job where you "hack all day" without documentation, scoping, or talking to anyone.
- **What it actually is (at junior level)**
  - Methodical recon, note-taking, and hypothesis testing against imperfect, messy environments.
  - Mostly **privilege escalation, lateral movement, and abuse of boring misconfigurations**, not 0‑days.
  - Operating under strict rules of engagement, documenting impact clearly, and mapping actions to business risk.
  - Long stretches of "nothing works" where you debug your own mistakes, infrastructure, and environment issues.
- **Why most beginners fail or stall**
  - **Tool-first mindset**: learning `nmap`, `Burp`, `Metasploit` before understanding OS, networks, auth.
  - **CTF brain**: sprinting to flags, guessing exploits, relying on hints/walkthroughs instead of building a repeatable methodology.
  - **No writing or note-taking**: they cannot explain what they did, why it worked, or reproduce it.
  - **Chasing advanced topics** (EDR bypass, custom loaders, kernel exploits) without ever having compromised a simple AD lab properly.
  - **Cert collection** instead of deep practice.
- **Skills that are useless at this stage (delay them)**
  - Advanced exploit dev (ROP chains, custom shellcode encoders, kernel bugs).
  - Evasion tooling (custom C2 loaders, heavy obfuscation, packers) beyond basic OPSEC.
  - Deep malware dev (implant architectures, low‑level Windows internals).
  - Highly specialized red team frameworks (Cobalt Strike, Brute Ratel, Sliver) before you can operate with simple shells and SSH/RDP.
  - Over-optimizing your lab gear (homelab obsession) instead of actually attacking a small, realistic network.

---

## Core Technical Foundations (Only What Matters)

### OS Fundamentals (Attacker's Perspective)

- **Windows (priority for enterprise work)**
  - Local users/groups, `net localgroup`, local vs domain accounts.
  - Services, scheduled tasks, startup locations, registry basics.
  - File/registry permissions and UAC; where credentials tend to live.
  - PowerShell basics, execution policy, script logging at a high level.
  - Event logs (security, system, application) and what you leak by being noisy.
  - **Why it matters**: Almost every corporate environment is Windows + AD; privilege escalation, persistence, credential theft, and OPSEC all depend on understanding how Windows actually works.
- **Linux**
  - Users/groups, `sudo`, file permissions (`chmod`, `chown`, setuid/setgid bits).
  - Services and daemons (`systemd`, `init`, `cron`), log locations.
  - SSH keys and config, basic hardening (and how attackers go around it).
  - **Why it matters**: Many internet-facing assets (web servers, VPNs, appliances, containers) are Linux; you need to move comfortably in shells, escalate, and pivot.

### Networking Concepts That Directly Translate to Exploitation

- **Core topics**
  - IP addressing, CIDR, routing basics, default gateways.
  - DNS, HTTP(S), SMB, RDP, SSH, common ports and what they mean.
  - Firewalls, NAT, and typical enterprise segmentation patterns (DMZ, internal, management VLANs).
  - VPNs and how remote access changes your attack surface.
  - **Why it matters operationally**:
    - You design scans that don't burn scope or time.
    - You understand *why* a port is open and what realistic attacks exist on that protocol.
    - You can reason about pivoting, choke points, and where detection is likely.

### Basic Active Directory Concepts (No Buzzwords)

- **Core objects and structure**
  - Domains, forests, domain controllers, member servers, workstations.
  - Users, computers, groups, OUs, GPOs.
- **Auth & access (at a beginner level)**
  - What Kerberos does in practice (tickets, SPNs, TGS abuse conceptually, not deep crypto).
  - NTLM and why password reuse + weak passwords are catastrophic.
  - Admin groups (Domain Admins, Enterprise Admins, local Administrators) and nested groups.
- **Common attack-relevant misconfigs**
  - Local admin password reuse; over-privileged service accounts.
  - Unconstrained/ constrained delegation (conceptual) and SPN-based abuse.
  - Poor GPO hygiene granting excessive rights.
- **Why AD basics matter**
  - Most real internal engagements are **AD privilege escalation and lateral movement exercises**.
  - Tools like BloodHound, CME, and `impacket` are useless if you don't understand what the graph and ACLs are telling you.

---

## Tools (Minimal, Purpose-Driven)

### Enumeration & Recon Tools to Learn Deeply

- **nmap**
  - Use it to understand port states, service detection, and simple scripts.
  - Practice: given `nmap` output, decide what to do next *without* Googling the exact version string.
- **netcat / socat**
  - Simple TCP clients/servers, port redirection, pivoting.
  - Practice: build reverse/bind shells manually, forward traffic, debug services.
- **tcpdump / Wireshark**
  - See what your tools are actually sending; watch auth flows and leaks.
  - Practice: capture an LLMNR spoof, an HTTP login, or SMB negotiation and explain it.
- **AD/Windows enumeration**
  - CrackMapExec (CME) for basic auth spraying and host/SMB enumeration.
  - BloodHound + SharpHound for mapping relationships (small lab first).
  - impacket basics: `psexec.py`, `wmiexec.py`, `secretsdump.py`.
- **Web basics**
  - Browser dev tools and **Burp Suite Community** for intercepting requests, understanding cookies, and seeing auth flows.

### Entry-Level Exploitation Tooling

- **Metasploit Framework**
  - Use sparingly: treat each module as code you don't fully trust, inspect options and network behavior.
  - Focus on a small number of modules relevant to your lab, not the entire universe.
- **sqlmap (basic usage)**
  - Only after you can manually identify simple SQLi; use it to confirm and to see payloads.
- **Responder / Inveigh (in labs)**
  - Understand what LLMNR/NetBIOS poisoning *is* before running these.

### Tools to Avoid Entirely (for Now)

- Automated red team / adversary emulation frameworks (Cobalt Strike, Brute Ratel, commercial C2s).
- Heavy auto-recon wrappers that hide `nmap`/`ffuf`/`gobuster`/etc behind a single command.
- Complex exploit packs that run dozens of exploits at once.
- Any tool you cannot explain in terms of:
  - **What protocol it speaks**
  - **What packets it sends**
  - **What auth/permissions it needs**
  - **What defenders see when it runs**

---

## Frameworks & Mental Models

### MITRE ATT&CK as a Planning Aid

- Treat ATT&CK as **a structured brainstorm**, not a memorization list.
- Map your actions in a lab to ATT&CK techniques: initial access, execution, privilege escalation, persistence, lateral movement, collection, exfiltration.
- Use it to ask: "What are 1–2 simple techniques I understand in each category for Windows AD?" rather than trying to learn them all.

### Kill Chain Thinking (Beginner Level)

```
Recon → Initial Access → Execution/Foothold → Privilege Escalation → Lateral Movement → Objectives/Impact → Reporting
```

- **Recon**: what exists, where the trust is, what is exposed.
- **Initial access**: phishing, exposed service, credential reuse.
- **Foothold & privesc**: from low-priv to admin on that host.
- **Lateral movement**: to higher-value systems/DC.
- **Objectives/impact**: prove risk with minimal damage (e.g., file access, mailbox access, DC control in lab).
- **Reporting**: explain story, show impact, map to controls.

### Labs vs Real Environments

- **Labs**
  - Often flat networks, no EDR, vulnerable by design.
  - You typically have unlimited attempts, hints, and reset buttons.
- **Real environments**
  - Partial/inaccurate documentation; machines and ACLs in weird states.
  - Monitoring, EDR, change windows, and humans using the systems.
  - Political/organizational constraints: things you *could* do but must not.
- **Mental shift**
  - In labs you are proving you can break in; in real ops you are proving **how bad it is and how to fix it** while not breaking the business.

---

## Hands-On Learning Platforms

### Recommended Order

- **Phase 1: Foundations (Months 0–2)**
  - OverTheWire Bandit and similar wargames for Linux fundamentals.
  - TryHackMe: targeted beginner paths (e.g., Linux fundamentals, Windows fundamentals, networking).
  - Practice: build a local VM lab (1 Kali, 1 Windows client, 1 small Linux server).
- **Phase 2: Beginner Offense (Months 3–4)**
  - TryHackMe: specific rooms on Windows, AD basics, and network services (not puzzles).
  - 3–5 easy HackTheBox/Proving Grounds machines, but treat each as an engagement:
    - Write scope, do recon, plan, execute, and write a short report.
- **Phase 3: AD & Internal Focus (Months 5–7)**
  - Build a **tiny AD lab**: 1 DC + 1 Windows workstation + attacker VM.
  - Reproduce known attack paths from public writeups (password reuse, Kerberoasting, GPP password abuse, etc.).
- **Phase 4: Realistic Labs (Months 8–9+)**
  - Higher-fidelity labs (THM AD paths, HTB Pro Labs, or community AD labs).
  - Focus on end-to-end operations: initial access to domain admin plus reporting.

### Avoiding CTF-Style Bad Habits

- No guessy, random wordlists before you understand the application or service.
- No brute forcing just because a login form exists.
- Do not immediately read walkthroughs; instead, timebox, document attempts, then compare with writeups.
- For every machine:
  - **Keep a timeline of actions**.
  - **Map each meaningful action to ATT&CK**.
  - **Write 1–2 pages of reporting-style notes**.

### What Good Practice Looks Like Now

- Consistent, boring, repeatable process: recon → enumerate → hypothesize → test → document.
- You can come back a week later, read your notes, and re-do the attack quickly.
- You focus on **understanding why** a vuln exists and how to fix it, not just getting root.

---

## Certifications (Honest Evaluation)

- **Helpful early (after some practice)**
  - **eJPT / eJPTv2**: good as a first cert once you have basic host/network skills. It reinforces methodology and core web/net/host testing.
  - **PNPT** (Practical Network Penetration Tester): strong for network + AD + reporting; realistic exam. Aim after you can compromise your own AD lab end-to-end.
- **Neutral or resume-padding at this stage**
  - Pure multiple-choice certs without a hands-on exam component.
  - Vendor-specific "cyber" certificates that don't require you to compromise and report on anything.
- **Certs to delay**
  - Offensive exploit-dev certs (OSEP, OSCE3, SANS exploit dev tracks).
  - Specialist red team certs (CRTO, advanced C2/AD certs) until you have:
    - Strong Windows/AD fundamentals.
    - At least one realistic internal-style lab completed end-to-end.
- **Time and cost vs skill**
  - Months 0–6: **no certs needed**; invest time in labs.
  - Months 6–9: if budget allows and fundamentals are solid, consider eJPT.
  - Months 9–12+: if you can afford it and your AD/lab skills are strong, consider PNPT or similar.

---

## Real-Life Expectations for Junior Roles

- **What entry-level red team / pentest actually looks like**
  - Supporting seniors: recon, data collection, running agreed tools, documenting evidence.
  - Re-testing fixed findings; updating reports.
  - Building and maintaining lab/infrastructure scripts, small tools, and checklists.
  - Many hours in documents, calls, and ticketing systems, not shells.
- **Non-technical skills beginners underestimate**
  - **Writing**: clear, concise finding descriptions and remediation steps.
  - **Communication**: asking clarifying questions, explaining risk without drama.
  - **Time management**: scoping tasks, not going down rabbit holes without value.
  - **Professionalism & ethics**: understanding legal/contractual boundaries and following them.

---

## Readiness Checklist (Moving to Intermediate)

You are ready to think of yourself as "intermediate" when you can *demonstrate* most of the following in your own lab and public platforms:

- **OS & Networking**
  - Comfortably administer basic tasks in Windows and Linux from the command line.
  - Given `nmap` output for a small subnet, you can propose and execute a reasonable attack plan.
- **AD & Internal Attack Path**
  - In a simple AD lab, starting as a low-priv domain user, you can:
    - Enumerate users, groups, and shares.
    - Identify at least one realistic misconfiguration.
    - Escalate to domain admin using well-documented techniques without step-by-step guides.
- **Tool Understanding**
  - For your core tools (`nmap`, CME, BloodHound, `impacket`, Burp), you can explain:
    - What protocol each uses.
    - What typical detections they might trigger.
    - At least one manual alternative if the tool is unavailable.
- **Process & Reporting**
  - For 5–10 machines/labs you've done, you have:
    - Timelines of actions.
    - ATT&CK mappings.
    - Short reports that a non-technical friend could roughly understand.
- **Professional Behaviors**
  - You manage your own learning plan and adjust based on weaknesses.
  - You can explain what you know and what you don't without bluffing.

---

## 6–12 Month Timeline (Concrete)

- **Months 0–2: Foundations**
  - 1–2 hours/day, 5 days/week.
  - Goals:
    - Linux + Windows CLI basics through wargames and practice VMs.
    - Solid grasp of IP, ports, routing, DNS, HTTP, and SMB.
    - First exposure to `nmap`, `netcat`, SSH, and RDP.
- **Months 3–4: Structured Offensive Basics**
  - 2 hours/day, 5 days/week if possible.
  - Goals:
    - Complete selected TryHackMe beginner paths (Linux, Windows, networking, basic web).
    - 3–5 easy boxes on HTB/Proving Grounds with written reports.
    - Start mapping your actions to ATT&CK and the kill chain.
- **Months 5–7: AD & Internal Focus**
  - 2–3 hours/day average.
  - Goals:
    - Build and operate a small AD lab; perform end-to-end compromise multiple times.
    - Learn and deeply understand a small set of tools: `nmap`, CME, BloodHound, `impacket`, Burp.
    - Practice realistic attack paths: credential reuse, Kerberoasting, misconfigured groups.
- **Months 8–9: Realistic Labs & Optional First Cert**
  - 2–3 hours/day, focused.
  - Goals:
    - Work through one higher-fidelity lab (AD-focused or network-wide range).
    - Produce full engagement-style reports for at least 2–3 scenarios.
    - If budget and time allow, sit for eJPT; if not, replicate the exam-style workflow in your own lab.
- **Months 10–12: Consolidation & Job Readiness**
  - Goals:
    - Refine a portfolio: documentation of labs, reports, and maybe small scripts.
    - Practice explaining findings to non-technical people.
    - If skills and finances allow, prepare for a more advanced practical cert (PNPT or similar), or double down on lab realism instead.

Throughout the entire 6–12 months, the priority is **fundamentals, deliberate practice, and documentation**, not chasing tools or titles. The goal is to be the beginner who can actually run a small internal-style operation in a lab and explain it clearly, not just someone who "has done CTFs" and owns a stack of certificates.
