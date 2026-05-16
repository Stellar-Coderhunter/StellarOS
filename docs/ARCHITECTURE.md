# StellarOS Architecture Notes

## Current Direction

StellarOS should evolve from a toolkit into a platform, not the other way around.

That means the early architecture is centered on setup automation and developer workflow primitives, with later layers building on top.

## Layered Model

```text
Base Linux System
  -> Ubuntu or Debian host environment

Bootstrap Layer
  -> install dependencies
  -> verify environment
  -> configure common tooling

Developer Workflow Layer
  -> compile
  -> test
  -> deploy
  -> inspect logs

Experience Layer
  -> dashboard
  -> AI copilot
  -> IDE integration
  -> templates

Distribution Layer
  -> package the experience as a branded OS image
```

## Why This Structure

- It keeps the MVP useful before the distro exists
- It gives contributors multiple entry points
- It reduces project risk by validating workflows early
- It allows independent progress across docs, scripts, UI, and packaging

## Early Modules

### `frontend/`

The user-facing surface for StellarOS. This can begin as a dashboard or browser-based IDE and later evolve into a richer desktop experience.

Potential responsibilities:

- contract editor
- deployment UI
- logs and transaction views
- AI assistant panel for setup help and workflow guidance
- project templates

### `backend/`

The orchestration layer for development workflows.

Potential responsibilities:

- compile, test, and deploy runners
- environment diagnostics
- AI context assembly from logs, tool output, and project metadata
- local service APIs
- integration with Stellar and Soroban tooling

### `contracts/`

Soroban contracts, examples, templates, and test fixtures used by contributors and future product features.

### `scripts/`

Automation for installation, checks, and local developer workflows.

### `docs/`

Project architecture, setup flows, contributor direction, and decision records.

### Future `extensions/` or `ide/`

Editor integrations, snippets, templates, and developer tooling that may live alongside or inside the frontend experience.

## Principles

- Favor composable scripts over giant one-shot installers
- Keep distro-specific assumptions isolated and documented
- Make every automation step inspectable by contributors
- Treat docs as part of the product
