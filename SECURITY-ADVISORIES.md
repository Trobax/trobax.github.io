# Security Advisory & Vulnerability Log

This document tracks security advisories, vulnerability disclosures, and resolutions relevant to this repository and its dependencies.

---

## Resolved Advisories

### GHSA-955w-7g7g-r745 / CVE-2026-23864: Next.js Remote Code Execution via ImageResponse
- **Package**: `next` (npm)
- **Severity**: High (CVSS 7.5)
- **Affected Range**: `>= 16.2.0, < 16.3.6`
- **Patched Version**: `16.3.6`
- **Resolution Date**: October 7, 2026
- **Status**: :white_check_mark: **Resolved**
- **Description**:
  The Node.js `ImageResponse` implementation in `next/og` was vulnerable to an upstream injection issue when attacker-controlled inputs were rendered into SVG elements, styles, or attributes.
- **Remediation**:
  Updated `next` to `^16.3.6` in `package.json` and updated `package-lock.json`. Full clean build and type check verified.

---

### GHSA-wq5f-xc86-pv6w: librsvg Vulnerability in sharp
- **Package**: `sharp` (transitive dependency)
- **Severity**: High
- **Patched Version**: `>= 0.35.5`
- **Resolution Date**: October 7, 2026
- **Status**: :white_check_mark: **Resolved**
- **Remediation**:
  Updated via `npm audit fix` with zero breaking changes.

---

### GHSA-68fv-2mgg-jv7q: Event-Loop Denial of Service in source-map-js
- **Package**: `source-map-js` (transitive dependency)
- **Severity**: High
- **Affected Range**: `1.0.0 - 1.2.1`
- **Patched Version**: `^1.2.1` (patched build)
- **Resolution Date**: October 7, 2026
- **Status**: :white_check_mark: **Resolved**
- **Remediation**:
  Updated via `npm audit fix`.

---

## Static Code Scanning & Policy Status

| Scanner | Target | Configuration | Status |
| :--- | :--- | :--- | :--- |
| **GitHub CodeQL** | JavaScript / TypeScript | `.github/workflows/codeql-analysis.yml` | :white_check_mark: Active (v3) |
| **Dependabot** | npm dependencies | Automated alerts & security updates | :white_check_mark: Active (0 vulnerabilities) |
| **Static Export Verification** | Next.js output | Static compilation (`out/`) | :white_check_mark: Passing |

---

## Reporting New Vulnerabilities

To report a new security advisory or vulnerability, refer to our [SECURITY.md](SECURITY.md) for direct, private disclosure instructions.
