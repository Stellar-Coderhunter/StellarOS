#!/usr/bin/env bash

set -euo pipefail

show_help() {
  cat <<'EOF'
StellarOS bootstrap

Usage:
  bash scripts/bootstrap.sh [--check] [--help]

Options:
  --check   Run environment checks without installing anything
  --help    Show this help message

Current status:
  This is an MVP scaffold. The script currently validates basic environment
  information and provides a clear place for contributors to extend setup
  automation for Stellar and Soroban development.
EOF
}

log() {
  printf '[stellaros] %s\n' "$1"
}

check_command() {
  local cmd="$1"

  if command -v "$cmd" >/dev/null 2>&1; then
    printf '  - %-10s found\n' "$cmd"
  else
    printf '  - %-10s missing\n' "$cmd"
  fi
}

run_checks() {
  log "Running environment checks"
  printf 'System information:\n'
  printf '  - OS: %s\n' "$(uname -s)"
  printf '  - Arch: %s\n' "$(uname -m)"

  printf 'Command availability:\n'
  check_command curl
  check_command git
  check_command rustc
  check_command cargo
  check_command node
  check_command npm
  check_command stellar
  check_command soroban
  check_command scarb
}

main() {
  local check_only=false

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --check)
        check_only=true
        shift
        ;;
      --help|-h)
        show_help
        exit 0
        ;;
      *)
        printf 'Unknown argument: %s\n\n' "$1" >&2
        show_help >&2
        exit 1
        ;;
    esac
  done

  if [[ "$check_only" == true ]]; then
    run_checks
    exit 0
  fi

  log "Bootstrap installer is not implemented yet"
  log "Next step: contributors can extend this script with package installation"
  log "Tip: run 'bash scripts/bootstrap.sh --check' to inspect the current environment"
}

main "$@"
