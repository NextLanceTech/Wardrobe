// pages/Dashboard.js
// import React from 'react';
// import './Dashboard.css';

// const Dashboard = () => {
//   const stats = {
//     activeRentals: 3,
//     totalRentals: 24,
//     waterSaved: 1200,
//     carbonCredits: 48,
//     upcomingEvents: 2
//   };

//   const activeRentals = [
//     {
//       id: 1,
//       name: 'Silk Evening Gown',
//       boutique: 'ÉLITE COUTURE',
//       returnDate: '2024-03-25',
//       image: 'https://via.placeholder.com/100',
//       status: 'Wearing Now'
//     },
//     {
//       id: 2,
//       name: 'Italian Wool Blazer',
//       boutique: 'THE BOARDROOM',
//       returnDate: '2024-03-26',
//       image: 'https://via.placeholder.com/100',
//       status: 'Returning Soon'
//     }
//   ];

//   const upcomingEvents = [
//     {
//       id: 1,
//       event: 'Wedding in Tuscany',
//       date: '2024-04-15',
//       suggestions: 3,
//       weather: 'Sunny, 24°C'
//     },
//     {
//       id: 2,
//       event: 'Tech Gala',
//       date: '2024-04-20',
//       suggestions: 2,
//       weather: 'Indoor'
//     }
//   ];

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h1>Welcome back, Sarah! 👋</h1>
//         <p>Your sustainable fashion journey continues</p>
//       </div>

//       <div className="stats-grid">
//         <div className="stat-card">
//           <div className="stat-icon">👗</div>
//           <div className="stat-details">
//             <span className="stat-value">{stats.activeRentals}</span>
//             <span className="stat-label">Active Rentals</span>
//           </div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">🔄</div>
//           <div className="stat-details">
//             <span className="stat-value">{stats.totalRentals}</span>
//             <span className="stat-label">Total Rentals</span>
//           </div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">💧</div>
//           <div className="stat-details">
//             <span className="stat-value">{stats.waterSaved}L</span>
//             <span className="stat-label">Water Saved</span>
//           </div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">🌱</div>
//           <div className="stat-details">
//             <span className="stat-value">{stats.carbonCredits}</span>
//             <span className="stat-label">Carbon Credits</span>
//           </div>
//         </div>
//       </div>

//       <div className="dashboard-grid">
//         <div className="dashboard-card active-rentals">
//           <h2>Active Rentals</h2>
//           <div className="rentals-list">
//             {activeRentals.map(rental => (
//               <div key={rental.id} className="rental-item">
//                 <img src={rental.image} alt={rental.name} />
//                 <div className="rental-info">
//                   <h3>{rental.name}</h3>
//                   <p>{rental.boutique}</p>
//                   <span className="return-date">Return by: {rental.returnDate}</span>
//                 </div>
//                 <span className={`rental-status ${rental.status === 'Wearing Now' ? 'active' : 'warning'}`}>
//                   {rental.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <button className="card-btn">View All</button>
//         </div>

//         <div className="dashboard-card upcoming-events">
//           <h2>Upcoming Events</h2>
//           <div className="events-list">
//             {upcomingEvents.map(event => (
//               <div key={event.id} className="event-item">
//                 <div className="event-header">
//                   <h3>{event.event}</h3>
//                   <span className="event-date">{event.date}</span>
//                 </div>
//                 <div className="event-details">
//                   <span className="event-weather">☀️ {event.weather}</span>
//                   <span className="event-suggestions">{event.suggestions} outfit suggestions</span>
//                 </div>
//                 <button className="event-btn">View Suggestions</button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="dashboard-card sustainability">
//           <h2>Sustainability Impact</h2>
//           <div className="impact-meter">
//             <div className="meter">
//               <div className="meter-fill" style={{ width: '75%' }}></div>
//             </div>
//             <p>You've saved 75% more water than average renters</p>
//           </div>
//           <div className="impact-badges">
//             <div className="badge">
//               <span className="badge-icon">🌱</span>
//               <span>Eco Warrior</span>
//             </div>
//             <div className="badge">
//               <span className="badge-icon">💧</span>
//               <span>Water Saver</span>
//             </div>
//             <div className="badge">
//               <span className="badge-icon">🔄</span>
//               <span>Circular Fashion</span>
//             </div>
//           </div>
//         </div>

//         <div className="dashboard-card smart-sync">
//           <h2>Smart Sync</h2>
//           <div className="sync-preview">
//             <div className="calendar-event">
//               <span className="event-name">Wedding in Tuscany</span>
//               <span className="event-time">Apr 15, 2024</span>
//             </div>
//             <div className="sync-suggestions">
//               <p>AI has pre-selected 3 outfits for this event</p>
//               <button className="suggestion-btn">View Selections</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


//---------------2-----------
// pages/Dashboard.js
// import React from 'react';
// import './Dashboard.css';

// const Dashboard = () => {
//   const stats = {
//     activeRentals: 3,
//     totalRentals: 24,
//     waterSaved: 1200,
//     carbonCredits: 48,
//     upcomingEvents: 2
//   };

//   const activeRentals = [
//     {
//       id: 1,
//       name: 'Silk Evening Gown',
//       boutique: 'ÉLITE COUTURE',
//       returnDate: '2024-03-25',
//       image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=150&h=150&fit=crop',
//       status: 'Wearing Now'
//     },
//     {
//       id: 2,
//       name: 'Italian Wool Blazer',
//       boutique: 'THE BOARDROOM',
//       returnDate: '2024-03-26',
//       image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=150&h=150&fit=crop',
//       status: 'Returning Soon'
//     }
//   ];

//   const upcomingEvents = [
//     {
//       id: 1,
//       event: 'Wedding in Tuscany',
//       date: '2024-04-15',
//       suggestions: 3,
//       weather: 'Sunny, 24°C'
//     },
//     {
//       id: 2,
//       event: 'Tech Gala',
//       date: '2024-04-20',
//       suggestions: 2,
//       weather: 'Indoor'
//     }
//   ];

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h1>Welcome back, Sarah! 👋</h1>
//         <p>Your sustainable fashion journey continues</p>
//       </div>

//       <div className="stats-grid">
//         <div className="stat-card">
//           <div className="stat-icon">👗</div>
//           <div className="stat-details">
//             <span className="stat-value">{stats.activeRentals}</span>
//             <span className="stat-label">Active Rentals</span>
//           </div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">🔄</div>
//           <div className="stat-details">
//             <span className="stat-value">{stats.totalRentals}</span>
//             <span className="stat-label">Total Rentals</span>
//           </div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">💧</div>
//           <div className="stat-details">
//             <span className="stat-value">{stats.waterSaved}L</span>
//             <span className="stat-label">Water Saved</span>
//           </div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">🌱</div>
//           <div className="stat-details">
//             <span className="stat-value">{stats.carbonCredits}</span>
//             <span className="stat-label">Carbon Credits</span>
//           </div>
//         </div>
//       </div>

//       <div className="dashboard-grid">
//         <div className="dashboard-card active-rentals">
//           <h2>Active Rentals</h2>
//           <div className="rentals-list">
//             {activeRentals.map(rental => (
//               <div key={rental.id} className="rental-item">
//                 <img src={rental.image} alt={rental.name} />
//                 <div className="rental-info">
//                   <h3>{rental.name}</h3>
//                   <p>{rental.boutique}</p>
//                   <span className="return-date">Return by: {rental.returnDate}</span>
//                 </div>
//                 <span className={`rental-status ${rental.status === 'Wearing Now' ? 'active' : 'warning'}`}>
//                   {rental.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <button className="card-btn">View All</button>
//         </div>

//         <div className="dashboard-card upcoming-events">
//           <h2>Upcoming Events</h2>
//           <div className="events-list">
//             {upcomingEvents.map(event => (
//               <div key={event.id} className="event-item">
//                 <div className="event-header">
//                   <h3>{event.event}</h3>
//                   <span className="event-date">{event.date}</span>
//                 </div>
//                 <div className="event-details">
//                   <span className="event-weather">☀️ {event.weather}</span>
//                   <span className="event-suggestions">{event.suggestions} outfit suggestions</span>
//                 </div>
//                 <button className="event-btn">View Suggestions</button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="dashboard-card sustainability">
//           <h2>Sustainability Impact</h2>
//           <div className="impact-meter">
//             <div className="meter">
//               <div className="meter-fill" style={{ width: '75%' }}></div>
//             </div>
//             <p>You've saved 75% more water than average renters</p>
//           </div>
//           <div className="impact-badges">
//             <div className="badge">
//               <span className="badge-icon">🌱</span>
//               <span>Eco Warrior</span>
//             </div>
//             <div className="badge">
//               <span className="badge-icon">💧</span>
//               <span>Water Saver</span>
//             </div>
//             <div className="badge">
//               <span className="badge-icon">🔄</span>
//               <span>Circular Fashion</span>
//             </div>
//           </div>
//         </div>

//         <div className="dashboard-card smart-sync">
//           <h2>Smart Sync</h2>
//           <div className="sync-preview">
//             <div className="calendar-event">
//               <span className="event-name">Wedding in Tuscany</span>
//               <span className="event-time">Apr 15, 2024</span>
//             </div>
//             <div className="sync-suggestions">
//               <p>AI has pre-selected 3 outfits for this event</p>
//               <button className="suggestion-btn">View Selections</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

//------------3----------
// pages/Dashboard.js - Enhanced
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeRentals, setActiveRentals] = useState([
    {
      id: 1,
      name: 'Silk Evening Gown',
      boutique: 'ÉLITE COUTURE',
      returnDate: '2024-03-25',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=150&h=150&fit=crop',
      status: 'Wearing Now',
      daysLeft: 2,
      price: 89
    },
    {
      id: 2,
      name: 'Italian Wool Blazer',
      boutique: 'THE BOARDROOM',
      returnDate: '2024-03-26',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=150&h=150&fit=crop',
      status: 'Returning Soon',
      daysLeft: 3,
      price: 65
    }
  ]);

  const [stats] = useState({
    activeRentals: 3,
    totalRentals: 24,
    waterSaved: 1200,
    carbonCredits: 48,
    upcomingEvents: 2
  });

  const [upcomingEvents] = useState([
    {
      id: 1,
      event: 'Wedding in Tuscany',
      date: '2024-04-15',
      suggestions: 3,
      weather: 'Sunny, 24°C',
      daysUntil: 20
    },
    {
      id: 2,
      event: 'Tech Gala',
      date: '2024-04-20',
      suggestions: 2,
      weather: 'Indoor',
      daysUntil: 25
    }
  ]);

  const handleExtendRental = (rental) => {
    alert(`✨ Extend Rental: ${rental.name}\n\nCurrent return: ${rental.returnDate}\nExtended return: ${new Date(new Date(rental.returnDate).getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}\nAdditional cost: $${rental.price * 3}\n\nConfirm extension?`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header animate-fadeInUp">
        <div>
          <h1>Welcome back, Sarah! 👋</h1>
          <p>Your sustainable fashion journey continues</p>
        </div>
        <div className="header-stats">
          <div className="header-stat">
            <span className="stat-badge">✨ VIP Member</span>
          </div>
        </div>
      </div>

      <div className="stats-grid animate-fadeInUp" style={{animationDelay: '0.1s'}}>
        <div className="stat-card premium-card">
          <div className="stat-icon">👗</div>
          <div className="stat-details">
            <span className="stat-value">{stats.activeRentals}</span>
            <span className="stat-label">Active Rentals</span>
          </div>
          <div className="stat-trend">+2 this week</div>
        </div>
        <div className="stat-card premium-card">
          <div className="stat-icon">🔄</div>
          <div className="stat-details">
            <span className="stat-value">{stats.totalRentals}</span>
            <span className="stat-label">Total Rentals</span>
          </div>
          <div className="stat-trend">Top 10%</div>
        </div>
        <div className="stat-card premium-card">
          <div className="stat-icon">💧</div>
          <div className="stat-details">
            <span className="stat-value">{stats.waterSaved}L</span>
            <span className="stat-label">Water Saved</span>
          </div>
          <div className="stat-trend">+200L this month</div>
        </div>
        <div className="stat-card premium-card">
          <div className="stat-icon">🌱</div>
          <div className="stat-details">
            <span className="stat-value">{stats.carbonCredits}</span>
            <span className="stat-label">Carbon Credits</span>
          </div>
          <div className="stat-trend">Redeemable</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card active-rentals animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
          <div className="card-header">
            <h2>Active Rentals</h2>
            <span className="card-badge">{activeRentals.length} items</span>
          </div>
          <div className="rentals-list">
            {activeRentals.map(rental => (
              <div key={rental.id} className="rental-item">
                <img src={rental.image} alt={rental.name} />
                <div className="rental-info">
                  <h3>{rental.name}</h3>
                  <p>{rental.boutique}</p>
                  <span className="return-date">Return in {rental.daysLeft} days</span>
                </div>
                <div className="rental-actions">
                  <span className={`rental-status ${rental.status === 'Wearing Now' ? 'active' : 'warning'}`}>
                    {rental.status}
                  </span>
                  <button className="extend-btn" onClick={() => handleExtendRental(rental)}>
                    Extend
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="card-btn">View All Rentals →</button>
        </div>

        <div className="dashboard-card upcoming-events animate-fadeInRight" style={{animationDelay: '0.2s'}}>
          <div className="card-header">
            <h2>Upcoming Events</h2>
            <span className="card-badge">{upcomingEvents.length} events</span>
          </div>
          <div className="events-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-item">
                <div className="event-header">
                  <h3>{event.event}</h3>
                  <span className="event-date">{event.date}</span>
                </div>
                <div className="event-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${100 - (event.daysUntil / 30 * 100)}%` }}></div>
                  </div>
                  <span className="event-days">{event.daysUntil} days away</span>
                </div>
                <div className="event-details">
                  <span className="event-weather">☀️ {event.weather}</span>
                  <span className="event-suggestions">🎯 {event.suggestions} suggestions</span>
                </div>
                <button className="event-btn">View AI Suggestions →</button>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card sustainability animate-fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="card-header">
            <h2>Sustainability Impact</h2>
            <span className="card-badge">Eco Hero</span>
          </div>
          <div className="impact-meter">
            <div className="meter">
              <div className="meter-fill" style={{ width: '75%' }}></div>
            </div>
            <p>You've saved 75% more water than average renters</p>
          </div>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="impact-value">🌱 1,200L</span>
              <span className="impact-label">Water Saved</span>
            </div>
            <div className="impact-stat">
              <span className="impact-value">🌍 25kg</span>
              <span className="impact-label">CO₂ Reduced</span>
            </div>
            <div className="impact-stat">
              <span className="impact-value">🎄 5</span>
              <span className="impact-label">Trees Equivalent</span>
            </div>
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
          <button className="card-btn">View Full Impact →</button>
        </div>

        <div className="dashboard-card smart-sync animate-fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="card-header">
            <h2>Smart Sync</h2>
            <span className="card-badge">AI Active</span>
          </div>
          <div className="sync-preview">
            <div className="calendar-event">
              <span className="event-name">💒 Wedding in Tuscany</span>
              <span className="event-time">Apr 15, 2024</span>
            </div>
            <div className="calendar-event">
              <span className="event-name">💼 Tech Gala</span>
              <span className="event-time">Apr 20, 2024</span>
            </div>
            <div className="calendar-event">
              <span className="event-name">🏖️ Beach Vacation</span>
              <span className="event-time">May 1, 2024</span>
            </div>
          </div>
          <div className="sync-suggestions">
            <div className="suggestion-icon">🤖</div>
            <div>
              <p>AI has pre-selected <strong>5 outfits</strong> for your upcoming events</p>
              <button className="suggestion-btn">View Selections →</button>
            </div>
          </div>
        </div>
      </div>

      <div className="recommendations animate-fadeInUp" style={{animationDelay: '0.4s'}}>
        <h2>Recommended for You</h2>
        <div className="recommendations-grid">
          {[
            { name: 'Velvet Evening Gown', price: 95, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=200&h=250&fit=crop', match: '98% match' },
            { name: 'Silk Blazer Set', price: 85, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=250&fit=crop', match: '95% match' },
            { name: 'Floral Maxi Dress', price: 65, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=250&fit=crop', match: '92% match' }
          ].map((item, idx) => (
            <div key={idx} className="rec-card">
              <img src={item.image} alt={item.name} />
              <div className="rec-info">
                <h4>{item.name}</h4>
                <p>${item.price}/day</p>
                <span className="rec-match">{item.match}</span>
                <button className="rec-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;