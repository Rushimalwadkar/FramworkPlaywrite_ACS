# ACS International India Playwright Framework

A TypeScript Playwright framework combining page objects with data-driven tests. Each test receives reusable page objects through custom fixtures, while navigation scenarios are maintained as data in `src/test-data/site.data.ts`.

## Requirements

- Node.js 20 or newer
- Java 8 or newer to generate and open the Allure HTML report

## Setup

```bash
npm install
npx playwright install chromium
```

## Run tests

```bash
npm test
npm run test:headed
npm run test:ui
npm run typecheck
```

`npm test` runs headed by default for local/manual runs. When `JENKINS_URL` is set in Jenkins, tests run headless. `npm run test:headed` explicitly forces headed mode.

Set `BASE_URL` to run against another environment:

```bash
BASE_URL=https://www.acsi-india.org npm test
```

## Allure reports

`npm test` writes Allure result files to `allure-results/` as well as a Playwright HTML report in `playwright-report/`.

```bash
npm run allure:generate
npm run allure:open
```

## Project structure

```text
src/
  fixtures/
    test.fixture.ts       # Injects page objects into tests
  pages/
    content.page.ts       # Shared content-page navigation
    home.page.ts          # Homepage locators and actions
  test-data/
    site.data.ts          # Data-driven navigation scenarios
tests/
  smoke/
    home.spec.ts          # Homepage and navigation-link checks
    navigation.spec.ts    # Internal route smoke checks
playwright.config.ts      # Browser, base URL, artifacts, and reporters
```

Add a route to `primaryNavigation` to include it in both the homepage-link and route smoke tests. Add page-specific locators and actions to the corresponding page object rather than duplicating selectors in test files.
