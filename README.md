# 🚀 Optimotion Dashboard - Cypress Automation Framework

## 📌 Overview

This repository contains an End-to-End (E2E) automation testing framework developed using **Cypress** for the **Optimotion Admin Dashboard**.

The framework automates major user workflows such as authentication, dashboard navigation, profile verification, and other administrative modules. It follows the **Page Object Model (POM)** design pattern to improve code reusability, readability, and maintainability.

---

# 🎯 Objectives

* Automate repetitive UI testing.
* Validate major dashboard functionalities.
* Verify API responses during user interactions.
* Improve testing efficiency and reduce manual effort.
* Create a scalable and maintainable automation framework.

---

# 🛠 Technology Stack

* **Cypress**
* **JavaScript (ES6)**
* **Node.js**
* **Visual Studio Code**
* **Git & GitHub**

---

# 📂 Project Structure

```text
OptiDashboard/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── dashboard.cy.js
│   │   ├── profile.cy.js
│   │   └── ...
│   │
│   ├── fixtures/
│   │   └── user.json
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── DashboardPage.js
│   │   └── ProfilePage.js
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   ├── screenshots/
│   ├── videos/
│   └── downloads/
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ✅ Features

* Admin Login Automation
* Dashboard Navigation
* Profile Page Validation
* Custom Cypress Commands
* Page Object Model (POM)
* API Request Monitoring
* Screenshot Capture on Failure
* Video Recording
* Reusable Test Components
* Environment Variable Support

---

# 🧪 Modules Tested

* Admin Login
* Dashboard
* Profile
* Renewals
* Booking
* Fleet Management
* Customer Management
* Employees
* Models
* Invoice
* Logs
* Feature Control

---

# 🔍 Testing Approach

The framework performs:

* Functional Testing
* End-to-End Testing
* UI Validation
* Smoke Testing
* Regression Testing
* API Response Validation
* Navigation Testing

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/OPTIMotion1/YOUR_REPOSITORY.git
```

Navigate to the project:

```bash
cd YOUR_REPOSITORY
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Running the Tests

Open Cypress Test Runner:

```bash
npx cypress open
```

Run all tests in headless mode:

```bash
npx cypress run
```

Run a specific test:

```bash
npx cypress run --spec cypress/e2e/profile.cy.js
```

---

# 🔐 Environment Configuration

Create a `cypress.env.json` file:

```json
{
  "username": "YOUR_USERNAME",
  "password": "YOUR_PASSWORD"
}
```

**Note:** This file is excluded using `.gitignore` and should never be committed to GitHub.

---

# 📊 APIs Validated

During execution, the framework validates successful API responses for modules including:

* Authentication
* User Profile
* Notifications
* Analytics
* Renewals
* Bookings
* Fleet
* Customers
* Feature Controls
* Invoices
* Employee Management

---

# 🐞 Challenges Encountered

During development and execution, the following issues were identified:

* Incorrect element selectors.
* `cy.type()` receiving `undefined` values.
* Dynamic content loading.
* Authentication/session management.
* API synchronization.
* Live data dependencies.
* Browser timing issues.

---

# 🚧 Possible Future Challenges

* UI redesign causing selector failures.
* Changes in API endpoints.
* Authentication flow modifications.
* Role-based access changes.
* Session expiration.
* Network latency.
* Browser compatibility updates.
* Dynamic data affecting assertions.
* Backend service downtime.

---

# 💡 Best Practices Followed

* Page Object Model (POM)
* Custom Cypress Commands
* Reusable Components
* Environment Variables
* Git Version Control
* Modular Test Structure
* Meaningful Assertions
* Clean Project Organization

---

# 📈 Future Enhancements

* Mochawesome HTML Reports
* Allure Reports
* GitHub Actions CI/CD
* Parallel Test Execution
* Cross-Browser Testing
* API Contract Validation
* Data-Driven Testing
* Performance Testing Integration

---

# 👨‍💻 Author

**Shivam Parashar**

* PG-DAC Graduate
* Java Backend Developer
* Cypress Automation Tester
* Spring Boot & React Developer

---

# ⭐ If you find this project useful, consider giving it a star on GitHub!
