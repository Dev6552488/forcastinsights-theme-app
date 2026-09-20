# ForcastInsights - React Theme Switcher Application

A multi-page React application built for **ForcastInsights** featuring a global Light/Dark theme toggler built with the React Context API and persistent state handling.

---

## 🚀 Live Demo

- **Live URL**: [https://forcastinsights-theme-app.vercel.app/](https://forcastinsights-theme-app.vercel.app/)
- **Repository**: [https://github.com/Dev6552488/forcastinsights-theme-app](https://github.com/Dev6552488/forcastinsights-theme-app)

---

## 📌 Features

- **Global State Management**: Utilizes the React Context API (`ThemeContext`, `UserContext`) to manage and distribute theme and user state across the application without prop drilling.
- **Light / Dark Mode Toggling**: Dynamically changes background colors, typography, and UI elements across all components using CSS custom properties.
- **Persistent Theme**: Saves the selected theme in `localStorage` to ensure preferences persist across page navigations and reloads.
- **Multi-Page Navigation**: Structured multi-page routing implemented via React Router v7.
- **User Registration Flow**: Demo registration and profile pages with form validation using a custom validation utility.
- **Responsive Design**: Mobile-first responsive navigation and layout.
- **Accessibility**: Semantic HTML, ARIA labels, focus management, and keyboard navigation support.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | React 19.2.8 |
| **Routing** | React Router DOM 7.18.3 |
| **Build Tool** | Create React App (react-scripts 5.0.1) |
| **State Management** | React Context API (`createContext`, `useContext`, `useReducer` pattern) |
| **Styling** | CSS3 with CSS Custom Properties (CSS Variables) for theming |
| **Persistence** | Web Storage API (`localStorage`) |
| **Testing** | Jest + React Testing Library (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`) |
| **Linting** | ESLint (extends `react-app`) |

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
│   │       ├── global.css          # Global styles with CSS variable theme definitions
│   │       ├── global.js           # Legacy (unused) - requires styled-components
│   │       └── variables/
│   │           ├── colors.js       # Legacy (unused) style variables
│   │           └── metrics.js      # Legacy (unused) style variables
│   ├── components/
│   │   ├── Navbar.jsx              # Main navigation with active link highlighting
│   │   ├── Navbar.css
│   │   ├── ThemeToggle.jsx         # Light/Dark mode toggle button
│   │   └── ThemeToggle.css
│   ├── context/
│   │   ├── ThemeContext.jsx        # Theme state + persistence + CSS variable sync
│   │   └── UserContext.jsx         # User registration state management
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
│   │       ├── index.js            # Legacy (unused) - requires styled-components
│   │       └── styles.js           # Legacy (unused) - requires styled-components
│   ├── routes/
│   │   ├── index.js                # Active route definitions
│   │   └── history.js              # Legacy (unused) - requires history package
│   ├── utils/
│   │   ├── validation.js           # Form validation utilities
│   │   └── validation.test.js      # Validation unit tests
│   ├── App.js                      # Root component with providers + router
│   ├── index.js                    # Entry point (React 18+ createRoot)
│   └── setupTests.js               # Jest + Testing Library setup
├── .eslintrc.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

**Note**: The `Welcome` page (`src/pages/Welcome/`), `src/assets/styles/global.js`, `src/routes/history.js`, and the variable files (`colors.js`, `metrics.js`) are legacy files that require uninstalled packages (`styled-components`, `history`). They are **not imported** by the active application. The active route tree is defined in `src/routes/index.js`.

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Dev6552488/forcastinsights-theme-app.git
cd forcastinsights-theme-app

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode with hot reloading |
| `npm run build` | Creates a production build in the `build/` directory |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects from Create React App (irreversible) |

---

## 🎨 Theming Implementation

The theme system uses **CSS Custom Properties** defined in `src/assets/styles/global.css`:

```css
:root[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #eaeaea;
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-muted: #888888;
  --accent-color: #2563eb;
  --accent-hover: #1d4ed8;
  --border-color: #dddddd;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --navbar-bg: #ffffff;
}

:root[data-theme="dark"] {
  --bg-primary: #121212;
  --bg-secondary: #1e1e1e;
  --bg-tertiary: #2d2d2d;
  --text-primary: #f0f0f0;
  --text-secondary: #b0b0b0;
  --text-muted: #888888;
  --accent-color: #60a5fa;
  --accent-hover: #93c5fd;
  --border-color: #333333;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --navbar-bg: #1e1e1e;
}
```

The `ThemeContext` synchronizes the `data-theme` attribute on `<html>` with the selected theme, enabling instant theme switching without re-renders of styled components.

---

## 🔧 Key Implementation Details

### Theme Context (`src/context/ThemeContext.jsx`)
- Initializes theme from `localStorage` on mount
- Persists theme changes to `localStorage`
- Updates `document.documentElement.setAttribute('data-theme', theme)` for CSS variable switching
- Provides `toggleTheme()` function for UI interaction

### User Context (`src/context/UserContext.jsx`)
- Manages user registration state (fullName, email)
- Provides `registerUser(userData)` function
- Accepts optional `initialUser` prop for testing/SSR

### Routing (`src/routes/index.js`)
- Uses React Router v7 `createBrowserRouter` pattern via `<Routes>` and `<Route>`
- Defines 5 routes: `/`, `/insights`, `/about`, `/register`, `/profile`

### Form Validation (`src/utils/validation.js`)
- Exports `validateField(name, value)` and `validateForm(formData)` functions
- Validates required fields, email format, name length
- Used by Register and Profile pages

---

## 🧪 Testing

```bash
# Run tests in watch mode
npm test

# Run tests with coverage
npm test -- --coverage --watchAll=false
```

Test files are co-located with components:
- `src/pages/Register/Register.test.jsx`
- `src/pages/Profile/Profile.test.jsx`
- `src/utils/validation.test.js`

---

## 📦 Deployment

### Build for Production

```bash
npm run build
```

This creates a static bundle in the `build/` directory.

### Static Hosting Configuration

For client-side routing to work on static hosts (Vercel, Netlify, GitHub Pages, AWS S3 + CloudFront), configure the host to **serve `index.html` for all non-asset requests** (SPA fallback).

**Vercel** (vercel.json):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify** (_redirects):
```
/*  /index.html  200
```

**Apache** (.htaccess):
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## 📝 Notes

- **No backend API**: The registration and profile features are front-end demonstrations only. No authentication service or database is connected.
- **React 19**: This project uses React 19 with the new `createRoot` API (no `ReactDOM.render`).
- **Create React App**: Built with CRA (react-scripts). For new projects, consider Vite or Next.js.

---

## 📄 License

This project is for educational/assignment purposes.

---

## 👤 Author

**Vishal** - [GitHub](https://github.com/Dev6552488)
