# Where to Practice: Labs & Simulators

A single reference for where to build networking skills at each stage. The [Beginner](#/learning/networking/beginner-networking-roadmap), [Intermediate](#/learning/networking/intermediate-networking-roadmap), and [Advanced](#/learning/networking/advanced-networking-roadmap) roadmaps mention these in context; here they are in one place.

---

## Packet Tracer (Cisco)

- **What it is** — Free Cisco simulator: routers, switches, PCs, and basic protocols. Good for learning CLI and topology without real hardware.
- **Use it for** — First steps: IP addressing, VLANs, static and dynamic routing (RIP, OSPF, EIGRP), basic ACLs. Aligns with the first phase of the [Beginner roadmap](#/learning/networking/beginner-networking-roadmap). Limited compared to real IOS, but enough for foundations.
- **Get it** — [Cisco NetAcad](https://www.netacad.com/courses/packet-tracer) (free with registration).

---

## GNS3

- **What it is** — Network emulator that runs real or virtualized images (Cisco, Juniper, Linux, etc.). More flexible and realistic than Packet Tracer.
- **Use it for** — After you outgrow Packet Tracer: multi-vendor labs, complex topologies, and integration with VMs (e.g. for firewall or server testing). Fits [Intermediate](#/learning/networking/intermediate-networking-roadmap) and beyond. Requires more RAM and setup.
- **Get it** — [gns3.com](https://www.gns3.com/). Free; some images (e.g. Cisco) require your own licensing.

---

## EVE-NG

- **What it is** — Another emulation platform; runs in a browser and supports many vendor images. Popular in training and certification prep.
- **Use it for** — Same as GNS3: realistic, multi-vendor labs when you need more than Packet Tracer. Good for CCNP/CCIE-style topologies. See [Certifications & Career](#/learning/networking/networking-certifications-and-career) for how labs support cert prep.
- **Get it** — [eve-ng.net](https://www.eve-ng.net/). Community edition free; professional edition has extra features.

---

## Cisco CML (Virl / Modeling Lab)

- **What it is** — Cisco’s official lab platform: virtual IOS/IOS-XE devices in a controlled environment. Subscription-based.
- **Use it for** — When you want official Cisco images and support without building your own GNS3/EVE-NG image library. Often used in training and for CCNP/CCIE practice.
- **Get it** — Cisco Learning Network; subscription required.

---

## Physical lab (optional)

- **What it is** — Real routers and switches (e.g. used Cisco 2960, 3560, 1921). Can be cheap on eBay; power and noise are the downsides.
- **Use it for** — If you like hands-on and want to see LEDs, cables, and console. Not required; simulators and emulators are enough for most learning. Consider only after you are comfortable in Packet Tracer or GNS3.

---

## What to avoid

- **Only watching videos** — You must type configs, break things, and fix them. Labs are where theory becomes muscle memory.
- **Skipping documentation** — For every lab, note what you did, why, and what you’d change. Builds habits that matter in NOC and design; see [Certifications & Career](#/learning/networking/networking-certifications-and-career) for how reporting and documentation help in job interviews.

Use the [Glossary](#/learning/networking/networking-glossary) and [Protocols overview](#/learning/networking/networking-protocols-overview) when you need quick reference while labbing.
