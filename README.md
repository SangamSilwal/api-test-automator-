# API Test Automator

A lightweight and modular command-line tool designed to automate API testing workflows using OpenAPI specifications.

---

## 🚧 Beta Notice

> **This project is currently in beta.**  
> It is actively under development, and you may encounter unexpected issues — especially with the command-line interface (CLI).  
> I am currently working on resolving some CLI-related bugs and improving the overall reliability.

---

## 🚀 Features

- **OpenAPI Integration** – Uses `openapi.yaml` to define and validate API contracts  
- **CLI Tooling** – Custom command-line scripts under `cli/` to automate API tests  
- **TypeScript + JavaScript** – Built using TypeScript (≈60%) and JavaScript (≈39%)  
- **Jest Testing** – Supports unit and integration testing with Jest  
- **Code Quality Tools** – Includes ESLint and Prettier for formatting and linting  

---

## 📁 Project Structure

```
api-test-automator-/
├── cli/                # Command-line interface logic
├── src/                # Core testing engine and helpers
├── openapi.yaml        # API schema definition
├── jest.config.js      # Test configuration
├── eslint.config.js    # ESLint rules
├── .prettierrc         # Code formatter rules
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
git clone https://github.com/SangamSilwal/api-test-automator.git
cd api-test-automator-
npm install
# or
yarn install
```

---

## 🧪 Running Tests

Run unit and integration tests using:

```bash
npm test
# or
yarn test
```

---

## 🧰 Available Scripts

- `npm run lint` – Run ESLint checks  
- `npm run format` – Format code with Prettier  
- `npm run build` – Compile TypeScript  
- `npm test` – Run Jest tests  

---



---

## 📬 Contact

If you have any feedback, suggestions, or bugs to report, please open an issue on the [GitHub Issues page](https://github.com/SangamSilwal/api-test-automator/issues).