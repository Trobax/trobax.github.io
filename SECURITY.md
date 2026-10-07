# Security Policy

## Supported Versions

Only the latest commit on the `master` branch is actively supported with security updates and dependency patches.

| Version | Supported          |
| ------- | ------------------ |
| master  | :white_check_mark: |
| < 1.0   | :x:                |

---

## Reporting a Vulnerability

If you discover a security vulnerability or potential issue within this project:

1. **Do not open a public issue.** Please report vulnerabilities privately to ensure responsible disclosure.
2. Contact the maintainer directly via email:
   - **Email**: [zhammoud.zakaria@gmail.com](mailto:zhammoud.zakaria@gmail.com)
   - **Subject Line**: `[SECURITY VULNERABILITY] - trobax.github.io`
3. Include the following details in your report:
   - Description of the vulnerability and its potential impact.
   - Clear steps to reproduce the issue or proof-of-concept (PoC).
   - Any proposed fixes or remediation steps (if known).

---

## Response Timeline

- **Initial Response**: Within 48 hours acknowledging receipt of your report.
- **Assessment & Triage**: Confirmation of the issue and severity assessment within 5 business days.
- **Resolution**: A patch will be tested, merged to `master`, and deployed via GitHub Pages as soon as practically possible.

---

## Security Best Practices in this Repository

- **Automated Scanning**: Dependabot alerts and GitHub secret scanning are enabled to monitor dependencies.
- **Static Export**: The application is compiled to static files (`out/`) with no persistent server-side runtime, eliminating standard server-side injection vectors.
- **Strict Content Handling**: External links use `rel="noopener noreferrer"` attributes to prevent tab-nabbing vulnerabilities.
