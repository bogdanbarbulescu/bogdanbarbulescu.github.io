# DevOps FAQ

Short, direct answers to questions that come up when exploring DevOps as a career. For the full learning path, see the [Beginner](#/learning/devops/beginner-devops-roadmap), [Intermediate](#/learning/devops/intermediate-devops-roadmap), and [Advanced](#/learning/devops/advanced-devops-roadmap) roadmaps.

---

## Do I need a development background?

Not strictly. Many DevOps engineers come from sysadmin, networking, or support roles and learn scripting and automation on the job. You do need comfort with: Linux/CLI, at least one scripting language (Bash, Python), and the willingness to read and write code (configs, pipelines, IaC). A dev background helps with CI/CD and tooling but is not required. See [Roles](#/learning/devops/devops-roles-and-expectations) and the [Beginner roadmap](#/learning/devops/beginner-devops-roadmap).

---

## How long until I get a job?

There is no fixed timeline. Typical ranges: 6–18 months of serious, consistent learning to be ready for a junior DevOps or platform role, if you already have some IT or dev basics. If you are starting from zero (no Linux, no Git), add time for foundations. Variables: hours per week, whether you use [Where to Practice](#/learning/devops/where-to-practice-devops), and whether you follow a roadmap. The [Beginner DevOps Learning Map](#/learning/devops/beginner-devops-roadmap) is built around a 6–12 month foundation.

---

## DevOps vs SRE vs platform engineer—what’s the difference?

Overlapping roles with different emphasis. **DevOps** often implies end-to-end ownership of build, test, and deploy; culture and tooling. **SRE** emphasizes reliability (SLIs, SLOs, error budgets) and reducing toil with software. **Platform engineer** builds and runs the internal platform (APIs, tooling, K8s) that other devs use. See [Roles and Expectations](#/learning/devops/devops-roles-and-expectations) for a clear comparison. Many job posts use these terms interchangeably; read the description.

---

## When should I get certified?

After you have hands-on experience. Certs (CKA, Terraform Associate, cloud) signal knowledge but do not replace building pipelines, running containers, and writing IaC. Use the [Intermediate](#/learning/devops/intermediate-devops-roadmap) and [Advanced](#/learning/devops/advanced-devops-roadmap) roadmaps to decide when you’re ready; see [Certifications & Career](#/learning/devops/devops-certifications-and-career) for which certs fit which stage.

---

## What if I only have a few hours a week?

You can still progress; it will take longer. Prioritize: (1) a small lab (Docker locally, GitHub Actions for CI—see [Where to Practice](#/learning/devops/where-to-practice-devops)), (2) a structured path (e.g. the [Beginner roadmap](#/learning/devops/beginner-devops-roadmap)), (3) one project you can show (e.g. a repo with Dockerfile + CI that builds and pushes an image). Consistency over volume.

---

## Do I need to know Kubernetes from day one?

No. Start with Linux, Git, scripting, and Docker. Kubernetes is an [Intermediate](#/learning/devops/intermediate-devops-roadmap) topic. Learn containers first; then learn how to orchestrate them. See [Glossary](#/learning/devops/devops-glossary) for terms and [Toolchain overview](#/learning/devops/devops-toolchain-overview) for where K8s fits.

---

## Is DevOps only about “running pipelines”?

No. A large part of the job is design (how do we deploy safely?), collaboration with dev and ops, incident response, and improving reliability and developer experience. Pipelines and tooling are central, but so are process, documentation, and communication. The [Advanced roadmap](#/learning/devops/advanced-devops-roadmap) touches on platform ownership and lead responsibilities.

---

## Can I practice at home without expensive cloud?

Yes. Use local Docker, Minikube or Kind for Kubernetes, GitHub Actions (free for public repos), and Terraform with local or free-tier cloud. See [Where to Practice](#/learning/devops/where-to-practice-devops) for when to use each. You can build a strong foundation before spending on cloud.
