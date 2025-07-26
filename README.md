# Playwright Automation Challenge  

**Automating critical user flows for DemoBlaze with Playwright.**  

🚀 Installation & Setup

## Prerequisites

2. [NodeJs](https://nodejs.org/en/download)
4. [Typescript](https://www.typescriptlang.org/download)
5. [VSCode](https://code.visualstudio.com/download)

How to use:

git clone <https://github.com/LaurinLF/Playwright_automation_challenge.git>

cd Playwright_automation_challenge

1. Install dependencies:
   ```
   npm install -D @playwright/test typescript
   ```

2. Initialize your TypeScript configuration:
   ```
   npx tsc --init
   ```

3. Install Playwright browsers:
   ```
   npx playwright install
   ```

4. Run your Playwright tests:
   ```
   npx playwright test
   or
   npx playwright test --project=chromium
   ```

5. Report:
   ```
   npx playwright show-report
   ``` 

Extra optional tools:

npm install -D ts-node eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier