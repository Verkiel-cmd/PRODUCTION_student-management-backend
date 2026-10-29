Required Notice: Copyright (c) 2026 Verkiel-cmd (https://github.com/Verkiel-cmd)

# PolyForm Strict License 1.0.0

<https://polyformproject.org/licenses/strict/1.0.0>

## Acceptance

In order to get any license under these terms, you must agree to them as both strict obligations and conditions to all your licenses.

## Copyright License

The licensor grants you a copyright license for the software to do everything you might do with the software that would otherwise infringe the licensor's copyright in it for any permitted purpose, other than distributing the software or making changes or new works based on the software.

## Patent License

The licensor grants you a patent license for the software that covers patent claims the licensor can license, or becomes able to license, that you would infringe by using the software.

## Noncommercial Purposes

Any noncommercial purpose is a permitted purpose.

## Personal Uses

Personal use for research, experiment, and testing for the benefit of public knowledge, personal study, private entertainment, hobby projects, amateur pursuits, or religious observance, without any anticipated commercial application, is use for a permitted purpose.

## Noncommercial Organizations

Use by any charitable organization, educational institution, public research organization, public safety or health organization, environmental protection organization, or government institution is use for a permitted purpose regardless of the source of funding or obligations resulting from the funding.

## Fair Use

You may have "fair use" rights for the software under the law. These terms do not limit them.

## No Other Rights

These terms do not allow you to sublicense or transfer any of your licenses to anyone else, or prevent the licensor from granting licenses to anyone else.  These terms do not imply any other licenses.

## Patent Defense

If you make any written claim that the software infringes or contributes to infringement of any patent, your patent license for the software granted under these terms ends immediately. If your company makes such a claim, your patent license ends immediately for work on behalf of your company.

## Violations

The first time you are notified in writing that you have violated any of these terms, or done anything with the software not covered by your licenses, your licenses can nonetheless continue if you come into full compliance with these terms, and take practical steps to correct past violations, within 32 days of receiving notice.  Otherwise, all your licenses end immediately.

## No Liability

***As far as the law allows, the software comes as is, without any warranty or condition, and the licensor will not be liable to you for any damages arising out of these terms or the use or nature of the software, under any kind of legal claim.***

## Definitions

The **licensor** is the individual or entity offering these terms, and the **software** is the software the licensor makes available under these terms.

**You** refers to the individual or entity agreeing to these terms.

**Your company** is any legal entity, sole proprietorship, or other kind of organization that you work for, plus all organizations that have control over, are under the control of, or are under common control with that organization.  **Control** means ownership of substantially all the assets of an entity, or the power to direct its management and policies by vote, contract, or otherwise.  Control can be direct or indirect.

**Your licenses** are all the licenses granted to you for the software under these terms.

**Use** means anything you do with the software requiring one of your licenses.

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
