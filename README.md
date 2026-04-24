# Demo Blaze Cypress Automation

This repository contains Cypress end-to-end tests for login and order flows on the Demo Blaze website.

## Prerequisites

Before running tests, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- A terminal or command prompt

To verify installation, run:

```bash
node -v
npm -v
```

If you do not have Node.js installed, download it from https://nodejs.org and install it first.

## Setup

1. Clone or download the project.
2. Open a terminal in the project folder.
3. Install the project dependencies:

```bash
npm install
```

This command downloads Cypress, `@cypress/grep`, and other required packages.

## Key project features

- **Page Object Support**: reusable page objects are in `cypress/support/pages/` and keep UI interactions organized.
- **Reusable commands**: custom Cypress commands are defined in `cypress/support/commands.js` for alerts and common behaviors.
- **Feature-based specs**: test files are organized by feature under `cypress/e2e/`, including `auth/` for login and `cart/` for place-order tests.
- **Fixtures**: test data is stored in `cypress/fixtures/` for stable, reusable input values.
- **Central configuration**: `cypress.config.js` defines `baseUrl`, timeouts, retries, viewport size, and failure capture settings.
- **Tag-based filtering**: uses the official `@cypress/grep` plugin to run tests by tags such as `@login`.
- **CI-friendly scripts**: npm scripts like `npm run cy:run` and `npm run cy:smoke` make automation easy in CI pipelines.
- **Test Cases**: 
    - **Login**: The login suite includes the happy path and 2 negative tests. These ensure that common user behaviours, which is path of the critical business flow are covered.
    - **Place-Order**: The place order suite includes a happy path that verifies the user flow of successfully placing an order.

## Run tests with `npx cypress`

`npx` runs the locally installed package without installing it globally.

### Open Cypress Test Runner (interactive mode)

```bash
npx cypress open
```

This opens the Cypress desktop app so you can select and run tests manually.

### Run all tests in the terminal (headless mode)

```bash
npx cypress run
```

This runs the full test suite from the command line.


### Browser
You may specify what browser to run with the --browser argument. e.g.

```bash
npx cypress run --browser chrome
```

### Headed
If you wish to run the tests on a visual browser, use the --headed and --browser arguments. e.g.

```bash
npx cypress run --browser chrome --headed
```

### Spec
If you want to run only a single test file, use the --spec argument. e.g.

```bash
npx cypress run --spec cypress/e2e/auth/login.cy.js
```

## Run tests with `npm run`

The project provides npm scripts to make running tests easier.

### Run the full suite

```bash
npm run cy:run
```

### Open Cypress in interactive mode

```bash
npm run cy:open
```
### Run only tests tagged `@smoke`

```bash
npm run cy:smoke
```

This command uses the official `@cypress/grep` plugin to run only tests that have the `@smoke` tag.

### Run login tests only in headed mode

```bash
npm run cy:login:headed
```

This runs the login test specs located in `cypress/e2e/auth/`.


## Notes
- If you want to run a different tag, you can use the same pattern from the command line or add a new npm script.

## AI Usage
Codex AI agent was used to research and implement the use of Tag-based filtering.
