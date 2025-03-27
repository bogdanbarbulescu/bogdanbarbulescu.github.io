# Summary: "Five Things We Are Going to Continue to Ignore in 2025 | John Strand"

**Date:** October 26, 2024  
**Source:** Excerpts from "Five Things We Are Going to Continue to Ignore in 2025 | John Strand" webcast  

## Executive Summary

John Strand, in a refreshingly blunt and prediction-averse webcast, outlines five key areas within cybersecurity that organizations have historically ignored and are likely to continue overlooking in 2025. Drawing from his experience as a pentester, Strand argues that the industry's focus on new buzzwords and high-severity vulnerabilities often overshadows persistent, foundational issues that continue to be exploited. 

These ignored areas include legacy applications, exceptions, cloud services (particularly concerning logging and security assumptions), developers (and their inherent challenges), and a general tendency towards "meeting the minimum" in security practices. Strand advocates for a shift in focus towards addressing these long-standing problems and developing compensating controls, emphasizing the importance of making pentesters' jobs more difficult by improving overall security posture. He critiques the overreliance on automated solutions and highlights the value of human expertise in uncovering complex vulnerabilities.

## Main Themes and Important Ideas/Facts

### Legacy Applications
- Organizations continue to operate critical infrastructure on outdated hardware (e.g., AS400, Solaris SPARC servers) and software due to the "if it ain't broke, don't fix it" mentality.
- Obtaining hardware for these legacy systems can be incredibly difficult and expensive.
- The lack of a replacement plan for core legacy systems is a significant concern.
- Legacy issues extend beyond just old applications and servers; they can manifest in modern applications through the use of outdated and insecure libraries (e.g., a .NET cryptographic library allowing cleartext password extraction).
- **Quote:** "What's infuriating is the fact that when you're dealing with these organizations, they're like 'Yeah, it's a legacy app, our entire banking infrastructure works on it.' And you start asking the question, 'Okay, what's your plan for replacing it?' and it's crickets—like nothing."
- The accumulation of ignored low and medium vulnerabilities in these legacy systems creates a "snowball of crap" that can be exploited when new vulnerability classes emerge.

### Exceptions
- Organizations frequently grant exceptions for testing specific systems or individuals (e.g., C-suite executives), often including those most likely to be targeted.
- Exceptions are also made for third-party vendors and difficult-to-fix vulnerabilities.
- A concerning trend is excluding systems from the scope of a penetration test after a critical vulnerability is discovered.
- **Quote:** "Who are the very first people hackers are going to go after? They're absolutely going to go after the C-suite. Yet, they create exceptions for them."
- Vendors sometimes refuse to fix vulnerabilities in their products, leaving customers in a difficult position.

### Cloud Services
- While cloud migration can offer security benefits, the assumption that cloud providers inherently solve all security issues is flawed.
- Many SaaS applications suffer from "legacy software" issues due to a lack of updates and innovation driven by profit motives.
- A significant problem is the timing and reliability of logs from cloud services. Logs are often delayed (hours or even a day), hindering timely detection and response to attacks.
- **Quote:** "Timing and logs in general for cloud services—many of the logs that you get out of Microsoft when attacking Office 365 aren’t showing up in our customers' SIEMs in a timely fashion to detect the attacks."
- The cost of accessing necessary logs for basic security can be prohibitive with some vendors.
- Organizations often defer liability to cloud vendors but don’t adequately vet their security practices.

### Developers
- Despite security teams potentially having visibility into developer practices, significant security risks persist.
- Common issues include:
  - The use of production data in development environments.
  - Local administrator privileges on developer workstations.
  - Bolting security on at the end of the development lifecycle.
- **Quote:** "One of the most unforgivable sins that a developer can commit is using production data in dev environments. This happens all the time."
- Late-stage security testing often puts developers in a difficult position, potentially fostering resentment towards security teams. Strand advocates for early engagement and prioritization of critical vulnerabilities.
- The ease of standing up cloud development environments can lead to forgotten and insecure systems.

### Meeting the Minimum
- Organizations often prioritize achieving the bare minimum requirements for compliance standards rather than genuinely improving their security posture.
- The industry's heavy focus on ransomware, while understandable, can distract from other critical threats like nation-state actors engaging in stealthy, long-term campaigns.
- The overhyping of "single panes of glass" and AI as silver bullets for cybersecurity problems is a form of "snake oil selling" that ignores the complexity of security.
- The cybersecurity job market narrative of "1 million open jobs" may not reflect the reality of available and accessible positions.
- The infosec training landscape needs to move beyond expensive, traditional models, with more accessible and free/low-cost options becoming increasingly important.

## Recommendations and Call to Action (Implied)

- Organizations need to prioritize the replacement and remediation of legacy systems and applications.
- The practice of granting broad and uncritical exceptions should be re-evaluated, especially for critical systems and high-value targets.
- Organizations must demand better logging and timely telemetry from their cloud service providers and actively monitor cloud environments for threats.
- Security should be integrated earlier into the software development lifecycle, and developers need better guidance and tooling that doesn’t necessitate insecure configurations.
- A shift in mindset is needed from simply "checking boxes" for compliance to actively striving for robust security.
- The industry should move beyond the exclusive focus on ransomware and address a wider range of threats.
- Organizations and individuals should seek out and support accessible and effective cybersecurity training options.
- Develop compensating controls for unavoidable legacy systems and accepted exceptions.

## Conclusion

Strand’s webcast serves as a critical reminder that despite the constant influx of new technologies and threats, many organizations continue to struggle with fundamental security challenges that have been overlooked for years. By highlighting these persistent issues and advocating for a more proactive and comprehensive approach to security, Strand encourages the industry to address the "crap we've ignored" to build a more resilient and secure digital landscape. His emphasis on collaboration between security teams and the rest of the organization, coupled with a focus on enabling defenders, provides a practical path forward for tackling these long-standing problems.
