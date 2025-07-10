# 🚀 OrangeHRM Automation

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-00b200?logo=cypress&logoColor=white)
![Mochawesome](https://img.shields.io/badge/reported%20with-Mochawesome-00b200?logo=mochawesome&logoColor=white)

Automated testing project for **OrangeHRM** web application.  
This project uses **Cypress**, including **Cucumber** (BDD), and **Mochawesome** for comprehensive testing and reporting.

---

## 🛠️ Tech Stack
- ⚙️ **Cypress** for E2E automation
- 🥒 **Cucumber** for BDD (feature files & step definitions)
- 📊 **Mochawesome** for HTML report generation

---

## 🧩 Features Tested

- 🟢 Login functionality
- 🟢 Add new employee

---

## ⚙️ Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/rayhanrndy/orangehrm-automation.git
   cd features-testing-saucedemo
2. Install dependencies:
   ```bash
   npm install
🏃‍♂️ Running Tests
- Run all tests in headless mode
  ```bash
  npm run test:cypress
- Run tests with UI
  ```bash
  npx cypress open
- Merge test report
  ```bash
  npm run report:merge
- Generate test report
  ```bash
  npm run report:generate
  npm run report:open
