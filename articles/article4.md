The MITRE ATT&CK® framework is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. It's used as a foundation for threat modeling and methodology development in the private sector, government, and cybersecurity product/service community.

**Tactics** represent the *why* behind an adversary's action – their tactical objective or goal. They are the high-level categories under which specific **Techniques** (the *how*) are grouped. Understanding these tactics helps organizations anticipate adversary actions and build better defenses.

Here's a brief overview of the tactics presented (generally following a potential attack lifecycle, though attackers may not use all tactics or follow a strict order):

### 1. Reconnaissance
*   **Goal:** Gather information to plan future adversary operations.
*   **Description:** This involves researching potential targets, identifying vulnerabilities, understanding the target's infrastructure (domains, employee info, network blocks), and gathering any data that could be useful for initial exploitation. This often happens *before* direct interaction with the target network.

### 2. Initial Access
*   **Goal:** Gain an initial foothold within the target network.
*   **Description:** This is how the adversary gets *in*. Common methods include spearphishing emails, exploiting public-facing applications, using valid accounts (stolen or default), or compromising external remote services.

### 3. Execution
*   **Goal:** Run adversary-controlled code on a local or remote system.
*   **Description:** Once inside, the adversary needs to execute their malicious payloads. This could involve running scripts (PowerShell, Python, shell scripts), executing compiled code, or leveraging built-in system tools for malicious purposes.

### 4. Persistence
*   **Goal:** Maintain their foothold across restarts, changed credentials, and other interruptions.
*   **Description:** Adversaries want to ensure they can regain access if they get disconnected. This involves techniques like creating scheduled tasks, modifying registry keys, adding new services, or planting web shells.

### 5. Privilege Escalation
*   **Goal:** Gain higher-level permissions on a system or network.
*   **Description:** Adversaries often gain initial access with standard user privileges. To achieve broader goals, they need elevated access (e.g., administrator or SYSTEM). This involves exploiting system weaknesses, vulnerabilities, or misconfigurations.

### 6. Defense Evasion
*   **Goal:** Avoid detection by security defenses.
*   **Description:** This involves techniques used to bypass security controls like antivirus, EDR, firewalls, and logging mechanisms. Examples include obfuscating files, disabling security software, clearing logs, using trusted processes, or masquerading as legitimate activity.

### 7. Credential Access
*   **Goal:** Steal account names and passwords/hashes.
*   **Description:** Credentials allow adversaries to gain access to more systems and data, often enabling lateral movement and privilege escalation. Techniques include keylogging, dumping credential material from memory (e.g., LSASS), brute-forcing, or accessing credential stores.

### 8. Discovery
*   **Goal:** Figure out the environment and identify resources of interest.
*   **Description:** Once inside, the adversary explores the system and network to understand its structure, identify valuable data, find other connected systems, and locate user accounts. This involves system/network scanning, querying system information, and listing files/processes.

### 9. Lateral Movement
*   **Goal:** Move from one system to another within the compromised network.
*   **Description:** After compromising one system, adversaries often pivot to others to expand their access or find specific targets. This commonly involves using stolen credentials with remote services like RDP, SMB/Windows Admin Shares, or SSH.

### 10. Collection
*   **Goal:** Gather data relevant to the adversary's objectives.
*   **Description:** Before exfiltration, the adversary needs to collect the targeted information. This might involve accessing data from local drives, browsers, email clients, databases, or staging it in a central location.

### 11. Command and Control (C2)
*   **Goal:** Communicate with compromised systems to control them.
*   **Description:** Adversaries need a way to send commands to their implants and receive data back. This involves establishing covert communication channels, often using common protocols (HTTP/S, DNS) or custom protocols to blend in with normal traffic.

### 12. Exfiltration
*   **Goal:** Steal data from the target network.
*   **Description:** This is the process of transferring the collected data out of the victim's control. Data might be compressed, encrypted, and sent out over the C2 channel, uploaded to cloud storage, or transferred via alternative protocols.

### 13. Impact
*   **Goal:** Disrupt availability, compromise integrity, or destroy systems/data.
*   **Description:** This tactic focuses on the adversary's ultimate objective, which might be manipulating data, disrupting operations (e.g., ransomware encryption), destroying systems, defacing websites, or denying service.

Understanding these tactics provides a structured way to think about cyberattacks, improve detection capabilities, conduct threat hunting, and emulate adversary behavior for testing defenses.
