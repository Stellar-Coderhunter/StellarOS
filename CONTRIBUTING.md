# Contributing to StellarOS

Thank you for contributing to StellarOS.

This project is being built in public from an early stage, so good contributions are not limited to code. Clear docs, focused issues, architecture feedback, shell scripting, testing, and developer experience improvements all matter here.

## Before You Start

- Read [README.md](./README.md) to understand the project scope
- Read [ROADMAP.md](./ROADMAP.md) to see the current phase
- Prefer contributions that strengthen the MVP before expanding scope

## Best First Areas

- Bootstrap tooling
- Ubuntu or Debian setup docs
- Soroban and Stellar CLI workflow helpers
- Shell script hardening
- Architecture documentation
- GitHub templates and contributor experience

## How to Contribute

### Report a Bug

- Use the bug report template
- Include your OS version and environment details
- Share exact reproduction steps
- Include logs or terminal output when relevant

### Suggest a Feature

- Use the feature request template
- Explain the user problem first, then the proposed solution
- Keep proposals scoped to a single improvement when possible

### Submit a Pull Request

- Keep PRs focused and easy to review
- Update docs when behavior changes
- Avoid unrelated refactors in the same PR
- Add or update tests when the project has test coverage for that area

## Development Guidelines

### Scope

Right now, we are prioritizing:

- Environment setup automation
- Documentation
- Contributor onboarding
- Architecture for future modules

Right now, we are not prioritizing:

- Building a full Linux distro immediately
- Shipping a wallet before core tooling is stable
- Large speculative rewrites without a tracked issue

### Style

- Prefer small shell scripts over opaque automation
- Keep scripts readable and well commented when logic is non-obvious
- Default to portable, explicit commands where practical
- Write docs for contributors who may be new to Stellar

### Commit and PR Quality

- Use descriptive commit messages
- Reference related issues in the PR body when applicable
- Include a short testing note in your PR

Example testing note:

```text
Tested on Ubuntu 24.04
Ran: bash scripts/bootstrap.sh --help
Verified: script exits cleanly and prints usage
```

## Branching

If you have push access, create a focused branch for each change.

Suggested branch naming:

```text
feat/bootstrap-checks
fix/readme-links
docs/roadmap-clarity
```

## Documentation Expectations

If your contribution changes how contributors install, run, or understand something, update the relevant docs in the same pull request.

## Questions

If a change is large or has architecture implications, open an issue first so we can align on direction before significant implementation work begins.
