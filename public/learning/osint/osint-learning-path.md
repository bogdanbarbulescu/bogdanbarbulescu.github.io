# OSINT Learning Path

This path is for pentesters, red teamers, threat intelligence analysts, journalists, and researchers who want to build a solid foundation in open-source intelligence. It focuses on **methodology, tooling, and legal and ethical boundaries**—not a tool dump. You will learn what to learn and in what order so you can run effective OSINT within scope and with clear deliverables.

---

## Reality Check

- **What people think**
  - "OSINT = Google + Shodan" or "just run theHarvester and you're done."
  - That more tools and automation mean better intelligence.
  - That anything "public" is fair game to use however you like.
- **What it actually is**
  - **Hypothesis-driven research** — You start with a clear question (e.g. "Who owns this domain?" or "What infrastructure does this group use?"). You choose sources, gather data, verify, and document. Tools support the process; they do not replace thinking.
  - **Source verification and corroboration** — One hit is not intelligence. You cross-check, note confidence levels, and distinguish fact from inference. Bad OSINT is unchecked aggregation.
  - **Documentation and knowing when to stop** — Findings need sources and caveats. You also need to know when you are out of scope, in a legal gray area, or violating platform terms of service. For operators: OPSEC matters—your recon can be observed.
- **What to avoid at the start**
  - **Tool overload** — Installing every OSINT tool and running them without a question or methodology. Learn one vertical (e.g. people or domains) and one or two tools well first.
  - **Skipping verification and legal/ToS** — Using breached data, ignoring jurisdiction (e.g. Computer Misuse Act, CFAA), or violating platform terms. "Public" does not always mean "authorized for your use."
  - **Mixing OSINT with active scanning without scope** — Port scanning, credential stuffing, or aggressive scraping without clear authorization or rules of engagement. OSINT is about information that is already exposed; active exploitation is a different discipline and needs explicit scope.

---

## Foundations

### Definitions

- **OSINT (Open Source Intelligence)** — Intelligence derived from publicly available or otherwise legally obtainable information. "Open" refers to the source type (not classified or proprietary in the sense of secret), not necessarily "free" or "easy."
- **SOCMINT (Social Media Intelligence)** — OSINT applied to social media. Same principles: question framing, verification, and legal/ToS. Platforms have strict terms; violating them can get you banned or create legal risk.
- **HUMINT, SIGINT, etc.** — Human intelligence, signals intelligence, and other "INTs" are outside this path. OSINT is only what you can get from open sources.
- **"Open" vs "public" and gray areas** — Public means accessible (e.g. a public profile, a certificate transparency log). Gray areas: data breaches, leaked databases, or information obtained by violating ToS (e.g. scraping behind a login). Many practitioners draw a line: use only what is legally and ethically obtainable under your role and jurisdiction. When in doubt, get authorization or legal advice.

### Core Mindset

- **Question framing** — Before touching a tool, write down: "What do I need to know? For whom? By when?" A vague "find everything about X" leads to noise and scope creep.
- **Source reliability** — Primary vs secondary sources; official vs third-party. Note where each finding came from and how reliable it is. Corroborate critical claims.
- **Corroboration** — One source is a lead, not a conclusion. Cross-check with other sources and note conflicts or gaps.
- **Documenting findings** — Record URLs, timestamps, and what you actually saw. Your future self and your client will need to reproduce or challenge the finding.

### Legal and Terms of Service

- **Jurisdiction** — Laws differ. Computer Misuse Act (UK), CFAA (US), and local data-protection and privacy laws can apply. Accessing systems without authorization, or using data in ways that violate law or contract, is not "just OSINT."
- **Platform ToS** — Social networks, search engines, and data providers have terms of service. Automated scraping, fake accounts, or bulk collection often violate ToS. Violations can mean account bans, legal action, or invalidation of your work in a formal setting.
- **Rules of engagement (RoE) and authorization** — For pentests and red team engagements, recon is usually in scope only when and how the client authorizes. Stay within written RoE. For threat intel or journalism, know your organization's or publication's policies and any legal review requirements.

---

## Methodology

### Recon Phases (High Level)

1. **Target identification** — Define the person, org, domain, or campaign. Get a clear scope and a list of initial identifiers (names, emails, domains, handles).
2. **Surface and, if in scope, dark web** — Surface web: search engines, social profiles, forums, paste sites, and technical sources (DNS, certificates, Shodan). Dark web work requires specific tooling and OPSEC; treat it as a separate skill and stay within legal and RoE bounds.
3. **Domain, email, and social** — For domains: whois, DNS, subdomains, historical DNS, and certificate transparency. For people/orgs: social profiles, professional networks, and public mentions. For emails: breach checks only when authorized and legal.
4. **Verification and link analysis** — Confirm that identifiers link to the same entity; map relationships (people, infra, campaigns). Use timelines and evidence chains.
5. **Reporting** — Structure: question, methodology, sources, findings, confidence, and caveats. Avoid overclaiming; distinguish "we found X" from "we infer Y from X."

### Typical Outputs

- **Person or org profile** — Identifiers, affiliations, public footprint, and (if in scope) infrastructure or exposure notes.
- **Infrastructure map** — Domains, subdomains, IPs, and services; ownership and hosting where visible.
- **Credential or exposure checks** — Only when explicitly in scope and legal (e.g. have-i-been-pwned style with authorization, or internal breach checks under policy). Do not use unauthorized breach data for targeting.
- **Report structure** — Executive summary, methodology, findings with sources, and limitations. Enough for a client or team to act or to hand off to another analyst.

---

## Tools (By Category)

Keep the list lean: learn one tool per category well, then add. Tools follow methodology—they do not replace it.

### Search and Aggregation

- **Google dorks** — `site:`, `filetype:`, `inurl:`, and other operators to narrow search. Essential for finding exposed docs, login pages, or specific content.
- **Shodan** — Search engine for internet-connected devices and services. Useful for external attack surface and service fingerprinting. Stay within ToS and engagement scope.
- **Censys** — Similar idea: certificates, hosts, and domain data. Good for mapping infra and certificate transparency.
- **Certificate transparency (CT)** — Logs of issued certificates. Use to discover subdomains and related domains. Multiple UIs and APIs exist (e.g. crt.sh, Censys).

### Social and Identity

- **theHarvester** — Aggregates emails, subdomains, and sometimes names/hosts from public sources. Good starting point for domain and email discovery; verify output.
- **recon-ng** — Modular recon framework. Use for structured workflows (e.g. domain → whois → DNS → harvest). Steeper learning curve but encourages methodology.
- **Maltego (or alternatives)** — Graph-based link analysis. Good for visualizing relationships; commercial and community editions. Alternatives: hand-built graphs in a notebook or other graph tools.
- **Archive use** — Wayback Machine, archive.today, and similar. Capture historical pages and deleted content; note archive date and completeness.

### Domain and DNS

- **whois** — Registration and registrar data. Often sanitized but still useful for dates and names.
- **DNS enumeration** — A, AAAA, MX, TXT, NS records. Use `dig`, `nslookup`, or scripts. Subdomain discovery: wordlists + DNS (e.g. sublist3r, amass, or custom scripts).
- **Historical DNS** — Services that store historical DNS records. Helpful for tracking infra changes or old footprints.

### Documents and Metadata

- **ExifTool** — Extract metadata from images and documents. Useful for checking origin, device, or author when such data is present.
- **PDF and document metadata** — Many docs embed creator, timestamps, or paths. Strip or sanitize before publishing; check when analyzing.

---

## Where OSINT Fits in Security

- **Red team** — Pre-engagement recon: external attack surface, phishing targets, and key people. All within RoE and scope. OPSEC: assume your recon is visible to the client or third parties.
- **Blue team / threat intel** — Attribution, IOC enrichment, and campaign tracking. Map TTPs and infrastructure to known or new actors; feed detection and response.
- **Pentests** — Scope discovery and client-approved recon. Use OSINT to find in-scope assets, tech stack, and high-value targets; do not cross into unauthorized access or abuse.

---

## Ethics and Limitations

- **Do not harass, dox, or exceed authorization** — Finding information does not justify publishing it to harm or intimidate. Respect privacy and dignity. In engagements, stay within written scope.
- **Respect platform rules** — ToS and automation limits exist for a reason. Violations can undermine your credibility and create legal risk.
- **"Public" vs "ethical to use"** — Something can be technically public (e.g. exposed by misconfiguration) and still be off-limits for your use without authorization. When in doubt, get clarity from your client, legal, or ethics guidelines.

---

## Learning Path / Timeline

- **Months 1–2: Methodology and one vertical**
  - Learn the recon phases and the importance of question framing and verification. Pick one vertical: e.g. people (social, professional profiles) or domains (DNS, certs, subdomains).
  - Practice: Google dorks, one tool (e.g. theHarvester or Shodan), and produce a short report with sources and caveats.
  - Goal: You can define a question, choose sources, run a small toolset, and write a simple report.

- **Months 3–4: Add another vertical and verification**
  - Add a second vertical (e.g. if you started with domains, add people or emails; if people, add domains). Build verification habits: corroborate key findings, note confidence levels.
  - Optional: basic automation (scripts or recon-ng modules) to repeat workflows. Do not automate before you can do the steps manually and explain them.
  - Goal: You can run a multi-source workflow and document methodology and limitations.

- **Months 5–6: One end-to-end project**
  - One project from question to report: e.g. "recon for a lab engagement" (your own lab or a CTF) or "threat actor / org profile" (publicly reported actor, no unauthorized access).
  - Write a short methodology document: what you did, what you used, and what you would do differently.
  - Goal: You have a portfolio piece and a repeatable process you can adapt to new questions.

Adjust for prior experience: if you already do pentest or threat intel, you may compress the first phase and focus on OSINT-specific methodology and tooling.

---

## Readiness Checklist (You're Ready to Go Deeper When …)

- You can define a clear question, choose appropriate sources, and explain why they are relevant.
- You can run a small toolset (e.g. dorks + one harvest/scan tool + manual verification) and produce a short report with sources and caveats.
- You know when to stop: you understand scope, RoE, and the line between passive OSINT and active or unauthorized access.
- You document findings so that someone else could reproduce or challenge them.

---

## What to Defer (For Now)

- **Deep dark web tradecraft** — Requires separate OPSEC, tooling, and often legal review. Get solid on surface and legal OSINT first.
- **Custom automation at scale** — Scripts and frameworks come after you have a repeatable manual process. Avoid building a "OSINT platform" before you can deliver one good report.
- **Paid or classified sources** — Commercial feeds and classified intel are their own world. Master open and legal sources first; add paid/classified only when your role and clearance require it.

---

## Further Reading and Resources

- **Books** — *Open Source Intelligence Techniques* (Michael Bazzell) is a practical, regularly updated reference for methodology and tools. Use the latest edition; OSINT tooling changes fast.
- **Blogs and frameworks** — NIST and community OSINT frameworks (e.g. OSINT Framework on GitHub) for taxonomy and tool lists. Follow a few practitioners who publish methodology and writeups.
- **Practice** — OSINT CTFs, lab targets (e.g. TryHackMe/HTB OSINT rooms), or authorized recon for your own org or a test engagement. Focus on one question at a time and a clean report.

Keep the path focused: one vertical done well, then add. Prioritize methodology, verification, and legal/ethical boundaries over the latest tool or dataset.
