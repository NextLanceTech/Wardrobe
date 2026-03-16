import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    memberSince: 'January 2024',
    avatar: 'https://via.placeholder.com/150',
    location: 'New York, NY',
    stats: {
      rentals: 24,
      waterSaved: 1200,
      carbonCredits: 48,
      followers: 156,
      following: 89
    },
    badges: [
      { name: 'Eco Warrior', icon: '🌱', description: 'Saved 1000+ liters of water' },
      { name: 'Style Icon', icon: '👗', description: '50+ rentals' },
      { name: 'Power Renter', icon: '👑', description: 'Top 10% of renters' },
      { name: 'Early Adopter', icon: '🚀', description: 'Joined in first month' }
    ]
  };

  const rentalHistory = [
    {
      id: 1,
      item: 'Silk Evening Gown',
      boutique: 'ÉLITE COUTURE',
      date: '2024-03-15',
      price: 89,
      image: 'https://via.placeholder.com/100',
      status: 'Completed',
      rating: 5
    },
    {
      id: 2,
      item: 'Italian Wool Blazer',
      boutique: 'THE BOARDROOM',
      date: '2024-03-10',
      price: 65,
      image: 'https://via.placeholder.com/100',
      status: 'Completed',
      rating: 5
    },
    {
      id: 3,
      item: 'Handwoven Saree',
      boutique: 'WEAVE & DRAPE',
      date: '2024-03-01',
      price: 79,
      image: 'https://via.placeholder.com/100',
      status: 'Completed',
      rating: 4
    }
  ];

  const savedItems = [
    {
      id: 1,
      name: 'Sequin Party Dress',
      boutique: 'VINTAGE VOGUE',
      price: 75,
      image: 'https://via.placeholder.com/150',
      fitScore: 96
    },
    {
      id: 2,
      name: 'Cashmere Sweater',
      boutique: 'LUXE CASUAL',
      price: 45,
      image: 'https://via.placeholder.com/150',
      fitScore: 98
    }
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-avatar">
            <img src={user.avatar} alt={user.name} />
            <button className="edit-avatar">📷</button>
          </div>
          <h1>{user.name}</h1>
          <p className="profile-location">{user.location}</p>
          <p className="profile-member">Member since {user.memberSince}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <span className="stat-value">{user.stats.rentals}</span>
          <span className="stat-label">Rentals</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{user.stats.waterSaved}L</span>
          <span className="stat-label">Water Saved</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{user.stats.carbonCredits}</span>
          <span className="stat-label">Carbon Credits</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{user.stats.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{user.stats.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      <div className="profile-badges">
        <h2>Badges & Achievements</h2>
        <div className="badges-grid">
          {user.badges.map(badge => (
            <div key={badge.name} className="badge-card">
              <span className="badge-icon">{badge.icon}</span>
              <div className="badge-info">
                <h3>{badge.name}</h3>
                <p>{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Rental History
        </button>
        <button 
          className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          Saved Items
        </button>
        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <div className="sustainability-impact">
              <h3>Your Impact</h3>
              <div className="impact-meter">
                <div className="meter">
                  <div className="meter-fill" style={{ width: '75%' }}></div>
                </div>
                <p>You've saved 75% more water than average renters</p>
              </div>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-value">{user.stats.waterSaved}L</span>
                  <span className="impact-label">Water Saved</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-value">{user.stats.carbonCredits}</span>
                  <span className="impact-label">Carbon Credits</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-value">25kg</span>
                  <span className="impact-label">CO₂ Reduced</span>
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">👗</span>
                  <div className="activity-details">
                    <p>Rented <strong>Silk Evening Gown</strong> from ÉLITE COUTURE</p>
                    <span className="activity-time">2 days ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">⭐</span>
                  <div className="activity-details">
                    <p>Earned <strong>Eco Warrior</strong> badge</p>
                    <span className="activity-time">1 week ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">💧</span>
                  <div className="activity-details">
                    <p>Reached <strong>1000L water saved</strong> milestone</p>
                    <span className="activity-time">2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="history-tab">
            <h3>Rental History</h3>
            <div className="rental-list">
              {rentalHistory.map(rental => (
                <div key={rental.id} className="rental-history-item">
                  <img src={rental.image} alt={rental.item} />
                  <div className="rental-history-info">
                    <h4>{rental.item}</h4>
                    <p className="boutique-name">{rental.boutique}</p>
                    <p className="rental-date">Rented on {rental.date}</p>
                    <div className="rental-rating">
                      {'★'.repeat(rental.rating)}{'☆'.repeat(5-rental.rating)}
                    </div>
                  </div>
                  <div className="rental-history-price">
                    <span className="price">${rental.price}</span>
                    <span className="status">{rental.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="saved-tab">
            <h3>Saved Items</h3>
            <div className="saved-grid">
              {savedItems.map(item => (
                <div key={item.id} className="saved-item">
                  <img src={item.image} alt={item.name} />
                  <div className="saved-info">
                    <h4>{item.name}</h4>
                    <p className="boutique">{item.boutique}</p>
                    <p className="fit-score">Fit Score: {item.fitScore}%</p>
                    <div className="saved-actions">
                      <span className="price">${item.price}/day</span>
                      <button className="rent-now-btn">Rent Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-tab">
            <h3>Account Settings</h3>
            <form className="settings-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" defaultValue={user.name} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue={user.email} />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" defaultValue={user.location} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="form-group">
                <label>Notification Preferences</label>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked /> Email notifications
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked /> Push notifications
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked /> SMS updates
                  </label>
                </div>
              </div>
              <button type="submit" className="save-btn">Save Changes</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;