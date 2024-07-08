# Rest API with NestJS and Vite+React

![image](https://github.com/pooranjoyb/nest-rest/assets/90945182/83784c3f-4f62-442c-9ce1-7a103c26652b)

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `api`: a [Nest.js](https://nestjs.com/) app
- `client`: another [React.js](https://vitejs.dev/) app

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Get Started

To run all apps and packages, run the following command:

- Install Dependencies
```bash
npm install
```
- Generate Prisma Client
```bash
npm run prisma:client
```
- Start the PostgresSQL DB in Docker Container
```bash
# Assuming you have Docker installed.

sudo npm run psql:docker

# Windows Users (Use Administrator Powershell)
npm run psql:docker
```
- Start the Turbo-Repo
```bash
npm run dev
```
#### NestJS will be running in `localhost:3000` and ReactJS FE will be running in `localhost:5173`

- To start Prisma Studio
```bash
npm run prisma:studio
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
