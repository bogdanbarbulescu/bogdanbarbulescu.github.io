# Ethics & Rules of Engagement

Red team and pentest work have clear boundaries. This page explains why they exist and what “authorized testing” and RoE mean in plain language. Important for anyone learning offensive security—especially if you practice at home or in public labs.

---

## Why Boundaries Exist

- **Legal** — Unauthorized access to computer systems is a crime in virtually every jurisdiction. Even “just testing” without permission can lead to prosecution. Authorization (from the owner of the system or someone with legal authority to grant it) is what separates red team work from hacking.
- **Ethical** — You are trusted with access to sensitive environments and data. Abusing that trust (e.g. going out of scope, exfiltrating real data beyond proof, or using access for personal gain) harms the client and the profession.
- **Professional** — Clients and employers need to know they can give you scope and you will stay within it. Reputation is built on trust; one bad engagement can end a career.

---

## Authorized Testing

- **Definition** — You have explicit permission from the system owner (or their designated authority) to conduct the test. “Owner” usually means the organization that operates the systems (e.g. the company’s IT or security leadership).
- **Form** — Permission should be in writing: a contract, statement of work (SOW), or rules of engagement (RoE) document that describes scope, duration, and allowed actions. Verbal “go ahead” is not enough for anything beyond a trivial lab.
- **Scope** — What is in scope (which systems, networks, users) and what is out of scope (e.g. production databases, certain credentials, third-party systems). If in doubt, ask. Do not assume.
- **Labs and platforms** — When you use TryHackMe, HackTheBox, Pro Labs, or your own VMs, the platform or you are the “owner.” Their terms of service or your lab design define what is allowed. Stay within those bounds.

---

## Rules of Engagement (RoE)

RoE are the written rules for an engagement. They typically cover:

- **Objectives** — What success looks like (e.g. “achieve access to the finance server” or “find and report vulns in these applications”).
- **In scope / out of scope** — Systems, networks, and actions that are allowed or forbidden. Example: “Phishing is in scope for these users; destruction of data is out of scope.”
- **Duration** — Start and end date (and sometimes time windows, e.g. no testing during business-critical hours).
- **Communication** — How to report critical findings (e.g. within 24 hours), who to contact, and how to pause if the client requests it.
- **Escalation** — When to stop (e.g. suspected real breach, client request) and who has authority to call the engagement off.
- **Data handling** — What you may capture (e.g. credentials for proof only), how you must protect or destroy it, and what you may not exfiltrate.

If you are leading an engagement, you own (or co-draft) the RoE and get client sign-off. If you are on the team, you read and follow them. No exceptions.

---

## Common Pitfalls

- **Testing without permission** — Scanning or attacking a system “to see if it’s vulnerable” without authorization is illegal. Do not do it. Use your lab or authorized platforms only.
- **Scope creep** — Doing something “because we could” that was not in scope (e.g. phishing when it was not agreed, testing a system that was out of scope) is unprofessional and can void the engagement or have legal consequences.
- **Ignoring RoE** — If the RoE say “stop when the client asks,” you stop. If they say “no destructive actions,” you do not run destructive payloads. RoE exist to protect both you and the client.
- **Mishandling data** — Credentials, PII, or other sensitive data you capture during a test must be protected and (per RoE) often destroyed after the engagement. Do not reuse client data in your lab or share it.

---

## Labs and Home Practice

- **Your lab** — Systems you own (your VMs, your cloud account) are yours to test. Keep them isolated from production and from the internet if you are running vulnerable images.
- **Public platforms** — THM, HTB, Pro Labs, etc. authorize you to attack their targets under their terms. Do not attack their infrastructure (e.g. their main website or scoring system); only the designated targets.
- **Bug bounties** — If you participate in a bug bounty program, the program rules are your RoE. Stay within scope and disclosure rules; do not exfiltrate data or cause damage.

---

## When in Doubt

- **Ask** — If scope or RoE are unclear, ask the client or your lead. Do not assume.
- **Document** — If you get verbal clarification, follow up in writing (e.g. email) so there is a record.
- **Stop** — If you think you may have gone out of scope or caused unintended harm, stop and report. Better to pause and clarify than to continue and breach trust or law.

Red team work is powerful and rewarding precisely because it is authorized and bounded. Respect those boundaries and you protect yourself, your client, and the profession. For how RoE fit into leading engagements, see the [Advanced roadmap](#/learning/red/advanced-red-team-roadmap).
