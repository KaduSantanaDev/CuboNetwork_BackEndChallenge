# CuboNetwork_BackEndChallenge API

This repository contains the source code for the CuboNetwork_BackEndChallenge API. It is a backend challenge designed to demonstrate your skills in building and designing RESTful APIs.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Authentication](#authentication)
  - [Example Requests](#example-requests)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [NestJs](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/KaduSantanaDev/CuboNetwork_BackEndChallenge.git
```

2. Install the dependencies:
```bash
cd CuboNetwork_BackEndChallenge
npm install
```

3. Setup environments variables:
```bash
DATABASE_URL=<your_database_connection_string>
```

4. Start the server:
```bash
npm run start:dev
```

# Usage
## Endpoints

### The API exposes the following endpoints:

GET: /api/users -> Should return an array of users

POST: /api/users -> name, last_name and percentage are required

# Authentication

IN DEVELOPMENT
