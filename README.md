Copyright (c) 2026 Verkiel-cmd

This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0).

Under this license, anyone who accesses this code must follow these strict terms:

- ATTRIBUTION (BY): Credit must be explicitly given to the original creator (Verkiel-cmd), with a link back to the original repository.
- NON-COMMERCIAL (NC): You may not use the material for commercial purposes or financial gain.
- NO DERIVATIVES (ND): If you remix, transform, or build upon the material, you may not distribute the modified material.

To view a copy of this license, visit: http://creativecommons.org/licenses/by-nc-nd/4.0/

---

> PROPRIETARY SOFTWARE — NOT OPEN SOURCE
> This repository is public for portfolio and demonstration purposes only. Forking, copying, reusing, redistributing, deploying, or running this code, in whole or in part, is NOT permitted without explicit written consent from the maintainer. No setup or installation instructions are provided in this document, intentionally. See the Usage Restrictions section below.

---

## Table of Contents

1. [Overview](#overview)
2. [Usage Restrictions](#usage-restrictions)
3. [What This Service Does](#what-this-service-does)
4. [Architecture](#architecture)
5. [Technology Stack](#technology-stack)
6. [Deployment](#deployment)
7. [Related Repositories](#related-repositories)
8. [Maintainer](#maintainer)
9. [License](#license)

---

## Overview

Student Management System developed and maintained solely by the repository owner. This repository contains the backend service, which handles authentication, student record management, and administrative operations for the platform.

This service is live and currently deployed in a **production environment**. It is not a demo, sample, or starter project.

---

## Usage Restrictions

Read this section before interacting with this codebase in any way.

- This code is NOT free to use. Public visibility does not imply permission to use, copy, run, or distribute it.
- Do NOT fork this repository and deploy it, host it, run it locally, or present it as your own, in part or in full.
- Do NOT copy code from this repository into another project, academic submission, or codebase without prior written permission from the maintainer.
- Do NOT redistribute, sublicense, or sell any portion of this codebase.
- This repository is connected to a live authentication system and real student data. It is not intended to be run outside of the maintainer's own controlled environment.
- Contributions, pull requests, and issues from outside parties are not currently accepted on this repository.
- Violations of these terms may be subject to takedown requests and/or legal action under applicable copyright law.

If you would like permission to reference, learn from, or reuse any part of this project, contact the maintainer directly. See the Maintainer section below.

---

## What This Service Does

This backend exposes the API that the University Veracity platform runs on. At a high level, it is responsible for:

- Authenticating users through a custom OTP-based verification flow
- Creating, updating, and retrieving student records
- Supporting administrative operations for the platform's admin dashboard
- Sending transactional emails, such as OTP codes, to users
- Serving as the data and logic layer behind the associated frontend client

---

## Architecture

| Component | Description |
|---|---|
| API Layer | RESTful endpoints built with Express.js |
| Database | Relational data store (MySQL), hosted on Aiven |
| Email Service | Transactional email delivery via the Brevo API |
| Authentication | Custom OTP-based flow, served via a dedicated auth subdomain |
| CI/CD | Automated build and deployment pipeline via GitHub Actions |

---

## Technology Stack

| Category | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MySQL (Aiven) |
| Email Provider | Brevo |
| Hosting | Render |
| Domain / DNS | DNSExit (dynamic DNS) |
| CI/CD | GitHub Actions |

---

## Deployment

This service is deployed on **Render**, with continuous integration and deployment managed through the GitHub Actions workflow defined in `.github/workflows`. Any push to the `main` branch by the maintainer triggers the deployment pipeline automatically to a live, production instance.

---

## Related Repositories

| Repository | Description |
|---|---|
| [PRODUCTION_student-management-frontend](https://github.com/Verkiel-cmd/PRODUCTION_student-management-frontend) | React/Vite client application, deployed on Netlify |

---

## Maintainer

**Verkiel-cmd**
GitHub: [github.com/Verkiel-cmd](https://github.com/Verkiel-cmd)

For permission requests, licensing questions, or reports of unauthorized use, contact the maintainer through GitHub.

---

## License

This project is proprietary. All rights reserved.

No part of this repository, including but not limited to source code, configuration files, documentation, and architecture, may be copied, modified, forked, redistributed, sublicensed, deployed, run, or used for any purpose, commercial or non-commercial, without explicit prior written permission from the maintainer.

This repository being publicly visible on GitHub is for portfolio and demonstration purposes ONLY, and does NOT constitute an open source license or grant of usage rights under any implied license, including but not limited to MIT, Apache, or GPL style terms.
