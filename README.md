# forcastinsights-theme-app
# ForcastInsights - React Context Theme Switcher

A multi-page React application built for **ForcastInsights** featuring a global Light/Dark theme toggler built with the React Context API and persistent state handling.

---

## 🚀 Live Demo

- **Live URL**: [Insert your Vercel/Netlify link here]
- **Repository**: [Insert your GitHub repository link here]

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
src/
├── components/
│   ├── Navbar.jsx
│   └── ThemeToggle.jsx
├── context/
│   └── ThemeContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Insights.jsx
│   └── About.jsx
├── App.jsx
└── index.js
