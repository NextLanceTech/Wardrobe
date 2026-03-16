// pages/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = {
    activeRentals: 3,
    totalRentals: 24,
    waterSaved: 1200,
    carbonCredits: 48,
    upcomingEvents: 2
  };

  const activeRentals = [
    {
      id: 1,
      name: 'Silk Evening Gown',
      boutique: 'ÉLITE COUTURE',
      returnDate: '2024-03-25',
      image: 'https://via.placeholder.com/100',
      status: 'Wearing Now'
    },
    {
      id: 2,
      name: 'Italian Wool Blazer',
      boutique: 'THE BOARDROOM',
      returnDate: '2024-03-26',
      image: 'https://via.placeholder.com/100',
      status: 'Returning Soon'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      event: 'Wedding in Tuscany',
      date: '2024-04-15',
      suggestions: 3,
      weather: 'Sunny, 24°C'
    },
    {
      id: 2,
      event: 'Tech Gala',
      date: '2024-04-20',
      suggestions: 2,
      weather: 'Indoor'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, Sarah! 👋</h1>
        <p>Your sustainable fashion journey continues</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👗</div>
          <div className="stat-details">
            <span className="stat-value">{stats.activeRentals}</span>
            <span className="stat-label">Active Rentals</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔄</div>
          <div className="stat-details">
            <span className="stat-value">{stats.totalRentals}</span>
            <span className="stat-label">Total Rentals</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💧</div>
          <div className="stat-details">
            <span className="stat-value">{stats.waterSaved}L</span>
            <span className="stat-label">Water Saved</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🌱</div>
          <div className="stat-details">
            <span className="stat-value">{stats.carbonCredits}</span>
            <span className="stat-label">Carbon Credits</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card active-rentals">
          <h2>Active Rentals</h2>
          <div className="rentals-list">
            {activeRentals.map(rental => (
              <div key={rental.id} className="rental-item">
                <img src={rental.image} alt={rental.name} />
                <div className="rental-info">
                  <h3>{rental.name}</h3>
                  <p>{rental.boutique}</p>
                  <span className="return-date">Return by: {rental.returnDate}</span>
                </div>
                <span className={`rental-status ${rental.status === 'Wearing Now' ? 'active' : 'warning'}`}>
                  {rental.status}
                </span>
              </div>
            ))}
          </div>
          <button className="card-btn">View All</button>
        </div>

        <div className="dashboard-card upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-item">
                <div className="event-header">
                  <h3>{event.event}</h3>
                  <span className="event-date">{event.date}</span>
                </div>
                <div className="event-details">
                  <span className="event-weather">☀️ {event.weather}</span>
                  <span className="event-suggestions">{event.suggestions} outfit suggestions</span>
                </div>
                <button className="event-btn">View Suggestions</button>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card sustainability">
          <h2>Sustainability Impact</h2>
          <div className="impact-meter">
            <div className="meter">
              <div className="meter-fill" style={{ width: '75%' }}></div>
            </div>
            <p>You've saved 75% more water than average renters</p>
          </div>
          <div className="impact-badges">
            <div className="badge">
              <span className="badge-icon">🌱</span>
              <span>Eco Warrior</span>
            </div>
            <div className="badge">
              <span className="badge-icon">💧</span>
              <span>Water Saver</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🔄</span>
              <span>Circular Fashion</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card smart-sync">
          <h2>Smart Sync</h2>
          <div className="sync-preview">
            <div className="calendar-event">
              <span className="event-name">Wedding in Tuscany</span>
              <span className="event-time">Apr 15, 2024</span>
            </div>
            <div className="sync-suggestions">
              <p>AI has pre-selected 3 outfits for this event</p>
              <button className="suggestion-btn">View Selections</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;