<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Employee Management System with Email Notifications

This is a NestJS backend application that manages employee data and sends email notifications asynchronously using Redis job queues (Bull).

## Key Features

### Employee Module
- **Create Employee Endpoint**: Add new employees with basic details like name, job title, and department.
```
POST http://localhost:3001/v1/employees
{
    "name": "John",
    "jobTitle": "Programmer",
    "email": "reciever@gmail.com",
    "department": "IT"
}
```

- **Read Employee Endpoint**: Retrieve employee details using their ID and list all employees.
- **[Optional] Update Employee Endpoint**: Update an employee's job title and department.
```
PUT http://localhost:3001/v1/employees/XX
{
    "name": "Nick",
    "jobTitle": "Programmer",
    "email": "reciever@gmail.com",
    "department": "IT"
}
```
- **[Optional] Delete Employee Endpoint**: Remove an employee from the system.

### Email Service Module
- **Email Notification on Employee Creation**: Sends a welcome email asynchronously to newly created employees using a job queue.
- **Redis Queue (Bull)**: Manages and triggers email notifications asynchronously through a Redis-backed queue.

### Database Module with TypeORM

- **Database Integration with TypeORM**: This module connects to a database (PostgreSQL) to persist employee data and other information.
- **Employee Data Persistence**: Employee details such as name, job title, email and department are stored in the database and can be queried, updated, or deleted.
- **TypeORM Entity**: The `Employee` entity is used to define the schema for the employee data and interact with the database.
- **Database Connection**: A database connection is established during the application startup using TypeORM configuration (database credentials, host, etc.).

---

## Project Installation

Follow these steps to set up the project:

1. Copy the example environment file and create your `.env`:

   ```sh
   cp .env.example .env
2. Set env variables in .env file:
    ```sh
    // email
    EMAIL_SERVICE=smtp.gmail.com
    EMAIL_USER=email@gmail.com
    EMAIL_PASSWORD=PASSWORD
    
    // db
    DATABASE_TYPE=postgres
    DATABASE_HOST=
    DATABASE_PORT=
    DATABASE_NAME=
    DATABASE_USERNAME=
    DATABASE_PASSWORD=
    ```
Install the dependencies:

```sh
npm i
```
Start the development server:

```sh
npm run start:dev
```

# Dockerfile and Docker Compose Environment Variables Setup

In `docker-compose.yml`, ensure that the environment variables are set for use in your application:

```Dockerfile
// email
EMAIL_SERVICE=smtp.gmail.com
EMAIL_USER=email@gmail.com
EMAIL_PASSWORD=PASSWORD

// db
DATABASE_TYPE=postgres
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
```