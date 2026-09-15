import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="page home-page">
      <Navbar />
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to ForcastInsights</h1>
            <p className="hero-subtitle">
              Your intelligent platform for data-driven forecasting and analytics.
              Transform raw data into actionable insights with our advanced tools.
            </p>
            <div className="hero-actions">
              <a href="#features" className="btn btn-primary">Explore Features</a>
              <a href="/insights" className="btn btn-secondary">View Insights</a>
              <Link to="/register" className="btn btn-primary">Create Account</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="preview-header">
                <span className="preview-dot"></span>
                <span className="preview-dot"></span>
                <span className="preview-dot"></span>
              </div>
              <div className="preview-chart">
                <div className="chart-bars">
                  <div className="bar" style={{ height: '40%' }}></div>
                  <div className="bar" style={{ height: '65%' }}></div>
                  <div className="bar" style={{ height: '35%' }}></div>
                  <div className="bar" style={{ height: '80%' }}></div>
                  <div className="bar" style={{ height: '55%' }}></div>
                  <div className="bar" style={{ height: '70%' }}></div>
                  <div className="bar" style={{ height: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>Powerful tools to elevate your forecasting capabilities</p>
          </div>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Real-time Analytics</h3>
              <p>Monitor your metrics in real-time with live dashboards and instant updates.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Forecasts</h3>
              <p>Leverage machine learning models for accurate predictions and trend analysis.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Custom Reports</h3>
              <p>Generate detailed reports tailored to your business needs and KPIs.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart Alerts</h3>
              <p>Get notified instantly when metrics cross thresholds or anomalies are detected.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Seamless Integration</h3>
              <p>Connect with your existing tools via APIs and pre-built connectors.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Team Collaboration</h3>
              <p>Share insights, annotate data, and collaborate with your team in real-time.</p>
            </article>
          </div>
        </section>

        <section className="cta">
          <div className="cta-content">
            <h2>Ready to Transform Your Data?</h2>
            <p>Join thousands of teams already using ForcastInsights to make smarter decisions.</p>
            <a href="/about" className="btn btn-primary btn-large">Learn More</a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 ForcastInsights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;