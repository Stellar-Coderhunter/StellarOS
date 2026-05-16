# StellarOS Roadmap

## Phase 1: Toolkit MVP

Goal: make Stellar development setup fast, repeatable, and contributor-friendly.

Planned work:

- Bootstrap script for Ubuntu or Debian-based systems
- Installation checks for Rust, Scarb, Node.js, and Stellar tooling
- Setup documentation for local development
- Shell script reliability and logging improvements
- AI-assisted setup troubleshooting based on environment check output
- Monorepo scaffolding for frontend, backend, and contracts
- Starter task breakdown for contributors

Definition of done for this phase:

- A contributor can clone the repo, run the bootstrap flow, and understand the next steps from the docs

## Phase 2: Developer Experience Layer

Goal: reduce friction after setup.

Planned work:

- Development dashboard concepts
- First frontend shell and navigation
- Backend workflow services for compile, test, and deploy
- AI copilot for Soroban commands, error explanation, and workflow guidance
- IDE extension or editor integrations
- Project templates for Soroban contracts
- Local workflow commands for compile, test, and deploy
- Better diagnostics and environment reporting

## Phase 3: Platform Layer

Goal: package the experience into a distribution-friendly format.

Planned work:

- Ubuntu-based image customization research
- Automated package bundles
- Branding, installer flow, and release process
- Optional ISO generation with tools like Cubic

## Open Questions

- Should the toolkit target Ubuntu only first, or Ubuntu and Debian together?
- Should the IDE path begin with VS Code extensions, a web dashboard, or Electron?
- Should local testnet setup be part of Phase 1 or introduced after bootstrap stability?

## Contributor-Friendly Issue Themes

- `good first issue`: documentation, flags, validation, and script ergonomics
- `help wanted`: architecture proposals, setup verification, packaging research
- `phase-1`: MVP setup automation
- `phase-2`: dashboard and IDE design
- `phase-3`: distro and packaging work
