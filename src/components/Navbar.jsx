import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/insights', label: 'Insights' },
    { path: '/about', label: 'About' },
    { path: '/register', label: 'Register' },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" aria-label="ForcastInsights Home">
          <span className="brand-icon">📊</span>
          <span className="brand-text">ForcastInsights</span>
        </Link>

        <ul className="navbar-nav">
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className="nav-link"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
