# forcastinsights-theme-app
# ForcastInsights - React Context Theme Switcher

A multi-page React application built for **ForcastInsights** featuring a global Light/Dark theme toggler built with the React Context API and persistent state handling.

---

## 🚀 Live Demo

- **Live URL**: [Insert your Vercel/Netlify link here]
- **Repository**: (https://github.com/Dev6552488/forcastinsights-theme-app)

---

## 📌 Features

- **Global State Management**: Utilizes the React Context API to manage and distribute theme state across the application without prop drilling.
- **Light / Dark Mode Toggling**: Dynamically changes background colors, typography, and UI elements across components.
- **Persistent Theme**: Saves the selected theme in `localStorage` to ensure preferences persist across page navigations and reloads[cite: 1].
- **Multi-Page Navigation**: Structured multi-page routing implemented via React Router[cite: 1].

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router DOM
- **State Management**: React Context API (`createContext`, `useContext`)[cite: 1]
- **Styling**: CSS3 / Tailwind CSS (Dynamic class binding)
- **Persistence**: Web Storage API (`localStorage`)[cite: 1]

---

## 📂 Project Structure

```text
forcastinsights-theme-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── global.css
│   │       ├── global.js
│   │       └── variables/
│   │           ├── colors.js
│   │           └── metrics.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── ThemeToggle.jsx
│   │   └── ThemeToggle.css
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── UserContext.jsx
│   ├── pages/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Insights/
│   │   │   ├── Insights.jsx
│   │   │   └── Insights.css
│   │   ├── Profile/
│   │   │   ├── Profile.jsx
│   │   │   ├── Profile.css
│   │   │   └── Profile.test.jsx
│   │   ├── Register/
│   │   │   ├── Register.jsx
│   │   │   ├── Register.css
│   │   │   └── Register.test.jsx
│   │   └── Welcome/
│   │       ├── index.js
│   │       └── styles.js
│   ├── routes/
│   │   ├── index.js
│   │   └── history.js
│   ├── utils/
│   │   ├── validation.js
│   │   └── validation.test.js
│   ├── App.js
│   ├── index.js
│   └── setupTests.js
├── .eslintrc.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

The `Welcome` page and `src/assets/styles/global.js` require the uninstalled `styled-components` package, while `src/routes/history.js` requires the uninstalled `history` package. The `colors.js` and `metrics.js` files are unused legacy style-variable modules. None of these legacy files is imported by the active application. The active route tree is defined in `src/routes/index.js`.

## Deployment Notes

`npm run build` creates a static bundle in `build/`, which is ignored by Git. A static host must be configured to serve `index.html` for client-side routes so direct navigation to `/insights`, `/about`, `/register`, or `/profile` works after deployment.

No production API, authentication service, or database is connected. The current registration and profile behavior is a front-end demonstration only.

## Repository

- [GitHub repository](https://github.com/Dev6552488/forcastinsights-theme-app)
- [Live demo](https://forcastinsights-theme-app.vercel.app/)
