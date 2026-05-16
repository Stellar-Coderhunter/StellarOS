# StellarOS

StellarOS is an open source developer platform for the Stellar ecosystem.

The long-term vision is a Stellar-focused Linux distribution. The short-term goal is much more practical: build a polished developer toolkit that makes Stellar and Soroban development fast to start, easy to test, and pleasant to contribute to.

## Vision

Think of the project in phases:

```text
Phase 1: Stellar developer bootstrap toolkit
Phase 2: Developer dashboard and IDE integrations
Phase 3: Custom Ubuntu-based StellarOS image
```

We are intentionally starting with the toolkit first. That gives contributors something useful to ship early, keeps scope healthy, and creates the foundation for the future distro.

## What StellarOS Is

- A contributor-friendly open source project for Stellar developers
- A toolkit-first path toward a custom Ubuntu or Debian-based distribution
- A place to standardize setup, local testing, deployment flows, and developer experience

## What StellarOS Is Not

- A kernel or Linux distribution built from scratch
- A promise to replace Ubuntu, Fedora, or Debian
- A monolithic product that needs every feature before contributors can help

## Near-Term MVP

The first milestone is a bootstrap experience that helps a developer go from a clean machine to a ready-for-Stellar workstation quickly.

Initial MVP areas:

- Install core Stellar and Soroban development dependencies
- Verify local machine readiness
- Document a repeatable development environment
- Prepare the repo for future dashboard, wallet, and IDE work

## Planned Feature Areas

- Stellar and Soroban CLI setup
- Rust, Scarb, and Node.js environment installation
- Local testnet and testing helpers
- AI copilot for onboarding, environment diagnostics, and Soroban workflow guidance
- IDE extensions or a custom Stellar-focused IDE
- Wallet and key management utilities
- Deployment and contract workflow automation
- Optional custom Ubuntu image generation in later phases

## AI Idea For StellarOS

One strong direction for this project is an AI-powered Stellar developer copilot built into the toolkit and future dashboard.

What it could do:

- explain Stellar and Soroban commands in plain language
- inspect a developer's local setup and suggest fixes when bootstrap or tool checks fail
- guide contributors through contract compile, test, and deploy flows
- summarize Soroban contract templates and generated project structure
- help turn terminal errors into actionable next steps
- generate starter scripts, tests, and documentation for common Stellar workflows

Why it fits this project:

- It makes the toolkit more beginner-friendly without changing the core mission
- It strengthens the dashboard and IDE vision for Phase 2
- It gives StellarOS a distinctive developer-experience layer beyond basic setup automation

Possible first MVP:

- a CLI assistant that reads environment check output
- a dashboard assistant panel for setup help and workflow suggestions
- curated prompts and workflow templates for Soroban development

## Repository Structure

```text
.github/              GitHub issue and PR templates
frontend/             Future dashboard, IDE surface, and user-facing tools
backend/              APIs, services, automation runners, and orchestration
contracts/            Soroban smart contracts, examples, and templates
docs/                 Architecture, roadmap support, and planning docs
scripts/              Bootstrap and automation scripts
README.md             Project entry point
ROADMAP.md            Phased direction and milestones
CONTRIBUTING.md       How to contribute
SECURITY.md           Security reporting policy
```

## Getting Started

### For Contributors

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md)
2. Review [ROADMAP.md](./ROADMAP.md)
3. Pick a good first issue or propose a focused improvement
4. Build on the bootstrap toolkit and the monorepo foundations before reaching for distro-level work

### For Maintainers

The repo is currently scaffolded as a monorepo. The next implementation steps are:

- grow `scripts/bootstrap.sh` into a reliable setup script
- define the first backend workflow services
- create the initial frontend shell for the dashboard or IDE experience
- add starter Soroban contracts in `contracts/`

## First Contribution Ideas

- Improve the bootstrap script
- Add environment verification checks
- Design an AI copilot flow for setup troubleshooting and Soroban guidance
- Scaffold the first frontend app shell
- Define backend routes or CLI runner conventions
- Add starter contract templates
- Write setup docs for Ubuntu, Debian, or WSL
- Add Soroban workflow helpers
- Design the dashboard architecture
- Propose plugin or IDE integration ideas

## Design Principles

- Toolkit before distro
- Automation over manual setup
- Reproducible contributor workflows
- Small, reviewable pull requests
- Clear docs for every new feature

## Community

If you want to help shape StellarOS, open an issue, propose a roadmap item, or submit a small first PR. Early contributors will help define the project's standards, tooling, and developer experience.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
