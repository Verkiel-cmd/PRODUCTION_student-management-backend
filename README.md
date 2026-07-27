## Table of Contents
 
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Configuration](#configuration)
7. [Usage](#usage)
8. [Deployment](#deployment)
9. [Related Repositories](#related-repositories)
10. [Maintainer](#maintainer)
11. [License](#license)
---
 
## Overview
 
**University Veracity** is a Student Management System developed and maintained as a solo full-stack project. This repository contains the backend service, which is responsible for handling authentication, student record management, and administrative operations for the platform.
 
This service is currently deployed in a **production environment** and serves as the operational backbone for the associated frontend client.
 
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
 
## Prerequisites
 
Before setting up this project locally, ensure the following are installed and available:
 
- Node.js (LTS version recommended)
- npm
- Access to a MySQL-compatible database instance
- A valid Brevo API key
---
 
## Installation
 
Clone the repository and install dependencies:
 
```bash
git clone https://github.com/Verkiel-cmd/PRODUCTION_student-management-backend.git
cd PRODUCTION_student-management-backend
npm install
```
 
---
 
## Configuration
 
Create a `.env` file in the project root with the following variables:
 
| Variable | Description |
|---|---|
| `PORT` | Port on which the server runs |
| `DB_HOST` | MySQL database host |
| `DB_USER` | MySQL database username |
| `DB_PASSWORD` | MySQL database password |
| `DB_NAME` | MySQL database name |
| `BREVO_API_KEY` | API key for the Brevo email service |
| `JWT_SECRET` | Secret key used for signing authentication tokens |
 
---
 
## Usage
 
To start the server locally:
 
```bash
node index.js
```
 
The API will be available at `http://localhost:<PORT>`.
 
---
 
## Deployment
 
This service is deployed on **Render**, with continuous integration and deployment managed through the GitHub Actions workflow defined in `.github/workflows`. Any push to the `main` branch triggers the deployment pipeline automatically.
 
---
 
## Related Repositories
 
| Repository | Description |
|---|---|
| [PRODUCTION_student-management-frontend](https://github.com/Verkiel-cmd/PRODUCTION_student-management-frontend) | React/Vite client application, deployed on Netlify |
 
---
 
## Maintainer
 
**Verkiel-cmd**
GitHub: [github.com/Verkiel-cmd](https://github.com/Verkiel-cmd)
 
---
 
## License
 
This project is proprietary. All rights reserved. Unauthorized use, distribution, or reproduction is prohibited without explicit permission from the maintainer.
