import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import './Insights.css';

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const insights = [
    {
      id: 1,
      title: 'Q4 Revenue Forecast',
      category: 'Revenue',
      metric: '+23.5%',
      trend: 'up',
      description: 'Projected revenue growth based on current pipeline and seasonal trends.',
      date: '2026-08-28',
    },
    {
      id: 2,
      title: 'Customer Churn Analysis',
      category: 'Retention',
      metric: '-2.1%',
      trend: 'down',
      description: 'Churn rate decreased after implementing new onboarding flow.',
      date: '2026-08-25',
    },
    {
      id: 3,
      title: 'Market Expansion Opportunity',
      category: 'Growth',
      metric: '+15.8%',
      trend: 'up',
      description: 'Identified high-potential markets in APAC region for Q1 2027.',
      date: '2026-08-22',
    },
    {
      id: 4,
      title: 'Operational Cost Optimization',
      category: 'Costs',
      metric: '-8.3%',
      trend: 'down',
      description: 'AI-driven resource allocation reduced infrastructure costs significantly.',
      date: '2026-08-20',
    },
    {
      id: 5,
      title: 'Product Adoption Rate',
      category: 'Product',
      metric: '+34.2%',
      trend: 'up',
      description: 'New feature adoption exceeded projections by 2.3x in first month.',
      date: '2026-08-18',
    },
    {
      id: 6,
      title: 'Sales Pipeline Velocity',
      category: 'Sales',
      metric: '+12.7%',
      trend: 'up',
      description: 'Deal closure time reduced from 45 to 38 days on average.',
      date: '2026-08-15',
    },
  ];

  const categories = ['all', 'Revenue', 'Retention', 'Growth', 'Costs', 'Product', 'Sales'];

  const filteredInsights = activeFilter === 'all'
    ? insights
    : insights.filter(insight => insight.category === activeFilter);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="page insights-page">
      <Navbar />
      <main className="main-content">
        <header className="page-header">
          <div className="header-content">
            <h1>Insights Dashboard</h1>
            <p>Data-driven forecasts and analytics for informed decision-making</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-primary">Export Report</button>
            <button className="btn btn-secondary">Create Insight</button>
          </div>
        </header>

        <div className="filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>

        <div className="insights-grid">
          {filteredInsights.map(insight => (
            <article key={insight.id} className="insight-card">
              <div className="card-header">
                <span className="card-category">{insight.category}</span>
                <span className={`card-trend trend-${insight.trend}`}>
                  {insight.trend === 'up' ? '↑' : '↓'} {insight.metric}
                </span>
              </div>
              <h3 className="card-title">{insight.title}</h3>
              <p className="card-description">{insight.description}</p>
              <div className="card-footer">
                <time className="card-date" dateTime={insight.date}>
                  {formatDate(insight.date)}
                </time>
                <button className="btn btn-sm btn-secondary">View Details</button>
              </div>
            </article>
          ))}
        </div>

        {filteredInsights.length === 0 && (
          <div className="empty-state">
            <p>No insights found for this category.</p>
          </div>
        )}

        <div className="pagination">
          <button className="btn btn-secondary" disabled>Previous</button>
          <span className="page-info">Page 1 of 1</span>
          <button className="btn btn-secondary" disabled>Next</button>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2026 ForcastInsights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Insights;