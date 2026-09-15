import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Routes from './routes';
import './assets/styles/global.css';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes />
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}
