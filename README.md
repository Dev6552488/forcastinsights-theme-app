# ForcastInsights

ForcastInsights is a responsive, client-side React application for exploring forecasting and analytics concepts. It combines a multi-page marketing and dashboard experience with a persistent light/dark theme and a session-only registration flow.

The application is built with Create React App and React Router. It does not require a backend, database, or API credentials to run locally.

## Features

- Responsive Home, Insights, About, Registration, and Profile pages
- Light and dark themes using React Context and CSS custom properties
- Theme preference persistence with `localStorage`
- Client-side navigation with active route indicators
- Registration form with controlled inputs and inline validation
- Validation for full name, email, password strength, and password confirmation
- Accessible labels, focus management, ARIA error associations, and live error regions
- Session-only user profile stored in React Context
- Unit and behavior tests for validation, registration, and profile routing
- Responsive layouts for desktop and mobile viewports

## Technology Stack

| Area | Technology |
| --- | --- |
| Framework | React 19 |
| Application scaffold | Create React App 5 |
| Routing | React Router DOM 7 |
| State management | React Context API |
| Styling | CSS3, CSS custom properties, and responsive media queries |
| Theme persistence | Browser `localStorage` |
| Testing | Jest, React Testing Library, User Event, and jest-dom |
| Package management | npm |

The project does not use Tailwind CSS. Styling is implemented in component and page-level CSS files, with shared theme variables defined in `src/components/ThemeToggle.css`.

## Requirements

- Node.js 18 or newer is recommended
- npm 9 or newer, or another npm-compatible package manager
- A modern browser with JavaScript and `localStorage` enabled

The repository includes `package-lock.json` using lockfile version 3. Use `npm ci` for a reproducible installation.

## Installation

Clone the repository:

```bash
git clone https://github.com/Dev6552488/forcastinsights-theme-app.git
cd forcastinsights-theme-app
```

Install the dependencies:

```bash
npm ci
```

If you are not using the lockfile, install with:

```bash
npm install
```

## Development

Start the Create React App development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The development server supports client-side routes such as `/insights`, `/about`, `/register`, and `/profile`.

Stop the server with `Ctrl+C`.

If port `3000` is already in use, Create React App may prompt to use another port. On PowerShell, choose one explicitly with:

```powershell
$env:PORT=3001
npm start
```

On Bash-compatible shells, use:

```bash
PORT=3001 npm start
```

## Usage

### Navigate the application

The main navigation contains these routes:

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Product overview, feature cards, and registration CTA |
| `/insights` | Insights | Filterable sample analytics dashboard |
| `/about` | About | Mission, values, team, and company timeline |
| `/register` | Register | Accessible account registration form |
| `/profile` | Profile | Session profile for the registered user |

The Home page also provides a **Create Account** link to `/register`. The Navbar marks only the current route as active.

### Change the theme

Use the theme button in the Navbar to switch between light and dark modes. The selected theme is written to `localStorage` under the `theme` key and restored on the next visit.

The theme is represented by the `data-theme` attribute on the document root. CSS variables define colors for backgrounds, text, accents, borders, cards, navigation, and shadows.

### Register and view a profile

1. Open `/register`.
2. Enter a full name containing 2-60 supported characters.
3. Enter a valid email address.
4. Enter a password with at least 8 characters, including uppercase, lowercase, numeric, and non-whitespace special characters.
5. Enter the same password in the confirmation field.
6. Submit the form.

A valid submission stores only the normalized full name and lowercase email in `UserContext`, then navigates to `/profile`. Passwords are not stored in Context and are never displayed on the Profile page.

The profile is intentionally session-only. Refreshing the browser clears the React Context state, and directly opening `/profile` without a registered user redirects back to `/register`.

Example valid password:

```text
Forecast1!
```

## Validation Rules

Validation is implemented in `src/utils/validation.js` and shared by the registration form and its tests.

| Field | Rules |
| --- | --- |
| Full name | Required; trimmed before validation and storage; 2-60 characters; letters, spaces, hyphens, apostrophes, and periods only |
| Email | Required; trimmed and lowercased before storage and display; must match the email pattern |
| Password | Required; not trimmed; at least 8 characters; uppercase, lowercase, number, and special character required |
| Confirm password | Required; must exactly match the password |

Spaces are allowed inside passwords and count toward the minimum length, but they do not satisfy the special-character requirement.

Fields are validated on blur. After the first submit attempt, edited fields are revalidated as the user types. Invalid submissions display field-level errors, focus the first invalid field, and expose errors through associated ARIA attributes and live regions.

## Project Architecture

### Application composition

`src/index.js` creates the React root and renders `App` in `React.StrictMode`.

`src/App.js` composes the application in this order:

```text
ThemeProvider
  UserProvider
    BrowserRouter
      Routes
```

`ThemeProvider` manages the theme and synchronizes it with `localStorage` and the document's `data-theme` attribute. `UserProvider` manages the current session user and exposes `registerUser`. `Routes` maps URL paths to page components.

### Registration flow

```text
Home or Navbar
  -> Register
  -> validateRegistrationForm
  -> registerUser({ fullName, email })
  -> /profile
```

`Register` owns controlled values, errors, touched-field state, submit-attempt state, input references, blur/change validation, focus management, and navigation. `Profile` reads the current user from `UserContext` and redirects visitors without a session user to `/register`.

### Styling architecture

- `src/assets/styles/global.css` defines reset, typography, focus, scrollbar, and base layout behavior.
- `src/components/ThemeToggle.css` defines the light/dark CSS variable palettes and theme button styles.
- `src/components/Navbar.css` defines responsive navigation styles.
- Page-specific CSS files define Home, Insights, About, Registration, and Profile layouts.
- Breakpoints at 768px and 520px adapt cards, navigation, forms, and profile details for smaller screens.

### Testing architecture

`src/setupTests.js` loads jest-dom matchers and the TextEncoder/TextDecoder polyfills required by the current test environment. Tests cover:

- Validation patterns and normalization
- Required fields and field-specific error messages
- Password complexity and spaces
- Confirmation matching
- Blur and post-submit change validation
- First-invalid-field focus behavior
- Context data safety
- Registration-to-profile navigation and form reset
- Profile redirect and non-sensitive display

## Scripts

The available npm scripts are defined in `package.json`:

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm test` | Run Jest tests in watch mode |
| `npm test -- --watchAll=false` | Run the complete test suite once |
| `npm run build` | Create an optimized production bundle in `build/` |
| `npm run eject` | Eject from Create React App; this action is irreversible |

Run the usual verification commands before submitting changes:

```bash
npm test -- --watchAll=false
npm run build
```

## Dependency Requirements

Runtime dependencies:

- `react`: `^19.2.8`
- `react-dom`: `^19.2.8`
- `react-router-dom`: `^7.18.3`
- `react-scripts`: `5.0.1`
- `ajv`: `^8.20.0`

Development dependencies:

- `@testing-library/dom`: `^10.4.1`
- `@testing-library/jest-dom`: `^7.0.1`
- `@testing-library/react`: `^16.3.3`
- `@testing-library/user-event`: `^14.6.7`

`react-scripts` supplies the Create React App build, Jest, Babel, and ESLint tooling. `ajv` is declared in the project dependencies; the current registration flow uses the local validation helpers in `src/utils/validation.js`.

## File Structure

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
