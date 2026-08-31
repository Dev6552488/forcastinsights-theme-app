import React from 'react';
import Navbar from '../../components/Navbar';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      bio: 'Former VP of Analytics at TechCorp. 15+ years in data science and business intelligence.',
      avatar: 'SC',
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO & Co-founder',
      bio: 'Ex-Google ML Engineer. PhD in Computer Science. Published 20+ papers on forecasting algorithms.',
      avatar: 'MJ',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Led product at Stripe and Airbnb. Expert in B2B SaaS and user-centered design.',
      avatar: 'ER',
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Built scalable systems at Netflix and Uber. Advocate for clean architecture and developer experience.',
      avatar: 'DK',
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Data-Driven Decisions',
      description: 'We believe every business decision should be backed by solid data and rigorous analysis.',
    },
    {
      icon: '🔬',
      title: 'Continuous Innovation',
      description: 'We constantly push the boundaries of what\'s possible with forecasting technology.',
    },
    {
      icon: '🤝',
      title: 'Customer Success First',
      description: 'Our success is measured by the tangible value we deliver to our customers.',
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'We\'re democratizing access to enterprise-grade analytics for businesses of all sizes.',
    },
  ];

  const milestones = [
    { year: '2023', title: 'Founded', description: 'Started with a vision to make forecasting accessible' },
    { year: '2024', title: 'Series A', description: 'Raised $15M led by Accel Partners' },
    { year: '2025', title: '10K Customers', description: 'Reached 10,000 active customers globally' },
    { year: '2026', title: 'AI Platform Launch', description: 'Released next-gen AI forecasting engine' },
  ];

  return (
    <div className="page about-page">
      <Navbar />
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>About ForcastInsights</h1>
            <p className="hero-tagline">
              We\'re on a mission to democratize predictive analytics and empower 
              every organization to make smarter, faster decisions.
            </p>
          </div>
        </section>

        <section className="mission">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <div className="mission-text">
              <p>
                In today's fast-paced business environment, the ability to anticipate 
                future trends and outcomes is no longer a luxury—it's a necessity. 
                Yet, advanced forecasting tools have traditionally been reserved for 
                large enterprises with dedicated data science teams.
              </p>
              <p>
                ForcastInsights was founded to change that. We combine cutting-edge 
                machine learning with intuitive design to bring enterprise-grade 
                predictive analytics to organizations of all sizes.
              </p>
              <p>
                Our platform transforms complex data into clear, actionable insights, 
                enabling teams to move from reactive to proactive decision-making.
              </p>
            </div>
          </div>
        </section>

        <section className="values">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="team">
          <div className="section-header">
            <h2>Meet the Team</h2>
            <p>The people behind ForcastInsights</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article key={index} className="team-card">
                <div className="team-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones that shaped our story</p>
          </div>
          <div className="timeline-container">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-content">
            <h2>Join Us on This Journey</h2>
            <p>Whether you're a customer, partner, or future team member, we'd love to connect.</p>
            <div className="cta-actions">
              <a href="/insights" className="btn btn-primary">Try ForcastInsights</a>
              <a href="mailto:hello@forecastinsights.com" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 ForcastInsights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;