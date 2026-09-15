import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { useUser } from '../../context/UserContext';
import './Profile.css';

const Profile = () => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/register" replace />;
  }

  return (
    <div className="page profile-page">
      <Navbar />
      <main className="main-content profile-content">
        <section className="profile-card" aria-labelledby="profile-title">
          <div className="profile-success-icon" aria-hidden="true">✓</div>
          <p className="profile-eyebrow">Account ready</p>
          <h1 id="profile-title">Welcome, {user.fullName}</h1>
          <p className="profile-intro">
            Your ForcastInsights profile has been created for this session.
          </p>

          <dl className="profile-details">
            <div className="profile-detail">
              <dt>Full name</dt>
              <dd>{user.fullName}</dd>
            </div>
            <div className="profile-detail">
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
          </dl>

          <Link to="/" className="profile-back-link">Back to Home</Link>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 ForcastInsights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
