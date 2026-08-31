import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import Routes from './routes';
import './assets/styles/global.css';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}