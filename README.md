# Nest.js Backend

## Prerequisites

- Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- Install [PostgreSQL](https://www.postgresql.org/) and ensure it's running

## Setup Instructions

1. **Clone the repository**

   ```sh
   git clone git@github.com:dev-rathore/nestjs-backend.git
   cd nestjs-backend
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**

   **Copy `.env.example` to `.env`**

   ```sh
   cp .env.example .env
   ```

4. **Run PostgreSQL Locally**

   **Option 1: Using a Local Installation**

   Ensure PostgreSQL is installed and running:

   ```sh
   sudo service postgresql start # For Linux
   # OR
   brew services start postgresql # For Mac
   ```

   Create a database manually if needed:

   ```sh
   psql -U postgres -c "CREATE DATABASE nestjs_db;"
   ```

   **Option 2: Using Docker**

   Alternatively, you can run PostgreSQL in a Docker container:

   ```sh
   docker run --name local-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=nestjs_db -p 5432:5432 -d postgres
   ```

5. **Start the server**

   ```sh
   # watch mode
   npm run start:dev

   # production mode
   npm run start:prod
   ```

6. **Server is live 🎉**

   Check server running live at [http://localhost:8080](http://localhost:8080)

## Swagger Docs

Check Swagger docs at [http://localhost:8080/api/docs](http://localhost:8080/api/docs)

## Run tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
