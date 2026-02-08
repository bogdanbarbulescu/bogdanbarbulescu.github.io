# Further Reading & Resources

A curated list of books, blogs, vendor docs, conferences, and courses for blue team and defensive security. The [roadmaps](#/learning/blue/beginner-blue-team-roadmap) are the hub; these are for deep dives and staying current. Links are external; we do not maintain an exhaustive list—prioritize quality and relevance to your stage.

---

## Books

- **Operating system and networking** — Any solid OS and TCP/IP book for foundations. For defenders: understand how OS and networks generate logs and what “normal” looks like. *Windows Internals* (Russinovich et al.) for deep Windows; useful when you need to interpret advanced EDR or forensics.
- **Blue team and detection** — *Blue Team Handbook* (Don Murdoch) for practical SOC and IR. *Practical Threat Detection Engineering* (Megan Roddie et al.) for detection engineering and Sigma. *The Practice of Network Security Monitoring* (Richard Bejtlich) for NSM and traffic analysis.
- **Incident response** — *Incident Response & Computer Forensics* (Jason Luttgens et al.) for IR process and forensics basics. *The Ransomware Hunting Team* (Renee Dudley) for a narrative on defensive work.
- **Reporting and soft skills** — General technical writing and communication books help for incident reports, playbooks, and management updates. Clarity and structure matter as much as technical depth.

---

## Blogs and Sites

- **Detection and Sigma** — Sigma Project (sigma rules repository), Sigma HQ, and detection engineering blogs. Many practitioners publish Sigma rules and detection logic; use them to learn and adapt.
- **Vendor threat intel and research** — Mandiant (Google), CrowdStrike, Microsoft (MSRC, Defender), SentinelOne, etc. Publish adversary reports and TTPs; use them to prioritize detection and hunting, not to chase every report.
- **Blue team and DFIR** — SANS Internet Storm Center, DFIR blogs, and SOC/IR writeups. Focus on methodology (how they triaged, what they looked at) and how they map to ATT&CK.
- **General infosec** — Krebs on Security, Dark Reading, The Hacker News for news. Use sparingly; depth comes from the roadmaps and hands-on practice.

---

## Conferences and Talks

- **Black Hat, DEF CON, BSides** — Talks on detection, IR, purple team, and ATT&CK are often recorded. Pick talks on SIEM, EDR, threat hunting, and incident response.
- **Vendor conferences** — SANS, Splunk .conf, Elastic, and security vendor events. Often paid; useful if your employer sponsors or you are investing in a cert or platform.
- **Local BSides** — Community-driven; good for networking and shorter talks. Search “BSides [city].”

---

## Courses and Training

- **Structured learning** — Align with the roadmaps: TryHackMe defensive paths for beginners; Security Blue Team (BTL1), SANS (GCIH, GCFE, GCIA), and vendor training (Splunk, Elastic) for intermediate/advanced. Prefer courses that include hands-on and labs, not just video.
- **Vendor training** — Splunk, Microsoft (Sentinel, Defender), Elastic, and others. Choose based on your stage and what your target role uses; see [Certifications & Career](#/learning/blue/blue-team-certifications-and-career).
- **Free and low-cost** — Sigma repository and detection labs, Splunk BOTS, Wireshark and PCAP challenges, and Blue Team Labs Online. Do not substitute passive watching for hands-on practice.

---

## How to Use This List

- **Do not try to read everything** — Pick one or two books and one or two blogs/sources that match your current phase. Rotate as you advance.
- **Prefer doing over consuming** — Reading supports practice; it does not replace it. Use the [Where to Practice](#/learning/blue/where-to-practice-blue-team) resource and the roadmaps to stay hands-on.
- **Contribute back** — When you write a playbook, improve a Sigma rule, or publish a hunt report, you become part of the reading list for others. The community stays strong when people share.

If you find a resource that fits this section and is high quality, consider contributing it to the project (e.g. via a pull request to this file)—the app is open source and the list can grow with the community.
