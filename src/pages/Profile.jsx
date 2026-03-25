// import React, { useState } from 'react';
// import './Profile.css';

// const Profile = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   const user = {
//     name: 'Sarah Johnson',
//     email: 'sarah.j@example.com',
//     memberSince: 'January 2024',
//     avatar: 'https://via.placeholder.com/150',
//     location: 'New York, NY',
//     stats: {
//       rentals: 24,
//       waterSaved: 1200,
//       carbonCredits: 48,
//       followers: 156,
//       following: 89
//     },
//     badges: [
//       { name: 'Eco Warrior', icon: '🌱', description: 'Saved 1000+ liters of water' },
//       { name: 'Style Icon', icon: '👗', description: '50+ rentals' },
//       { name: 'Power Renter', icon: '👑', description: 'Top 10% of renters' },
//       { name: 'Early Adopter', icon: '🚀', description: 'Joined in first month' }
//     ]
//   };

//   const rentalHistory = [
//     {
//       id: 1,
//       item: 'Silk Evening Gown',
//       boutique: 'ÉLITE COUTURE',
//       date: '2024-03-15',
//       price: 89,
//       image: 'https://via.placeholder.com/100',
//       status: 'Completed',
//       rating: 5
//     },
//     {
//       id: 2,
//       item: 'Italian Wool Blazer',
//       boutique: 'THE BOARDROOM',
//       date: '2024-03-10',
//       price: 65,
//       image: 'https://via.placeholder.com/100',
//       status: 'Completed',
//       rating: 5
//     },
//     {
//       id: 3,
//       item: 'Handwoven Saree',
//       boutique: 'WEAVE & DRAPE',
//       date: '2024-03-01',
//       price: 79,
//       image: 'https://via.placeholder.com/100',
//       status: 'Completed',
//       rating: 4
//     }
//   ];

//   const savedItems = [
//     {
//       id: 1,
//       name: 'Sequin Party Dress',
//       boutique: 'VINTAGE VOGUE',
//       price: 75,
//       image: 'https://via.placeholder.com/150',
//       fitScore: 96
//     },
//     {
//       id: 2,
//       name: 'Cashmere Sweater',
//       boutique: 'LUXE CASUAL',
//       price: 45,
//       image: 'https://via.placeholder.com/150',
//       fitScore: 98
//     }
//   ];

//   return (
//     <div className="profile-page">
//       <div className="profile-header">
//         <div className="profile-cover">
//           <div className="profile-avatar">
//             <img src={user.avatar} alt={user.name} />
//             <button className="edit-avatar">📷</button>
//           </div>
//           <h1>{user.name}</h1>
//           <p className="profile-location">{user.location}</p>
//           <p className="profile-member">Member since {user.memberSince}</p>
//         </div>
//       </div>

//       <div className="profile-stats">
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.rentals}</span>
//           <span className="stat-label">Rentals</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.waterSaved}L</span>
//           <span className="stat-label">Water Saved</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.carbonCredits}</span>
//           <span className="stat-label">Carbon Credits</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.followers}</span>
//           <span className="stat-label">Followers</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.following}</span>
//           <span className="stat-label">Following</span>
//         </div>
//       </div>

//       <div className="profile-badges">
//         <h2>Badges & Achievements</h2>
//         <div className="badges-grid">
//           {user.badges.map(badge => (
//             <div key={badge.name} className="badge-card">
//               <span className="badge-icon">{badge.icon}</span>
//               <div className="badge-info">
//                 <h3>{badge.name}</h3>
//                 <p>{badge.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="profile-tabs">
//         <button 
//           className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
//           onClick={() => setActiveTab('overview')}
//         >
//           Overview
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
//           onClick={() => setActiveTab('history')}
//         >
//           Rental History
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
//           onClick={() => setActiveTab('saved')}
//         >
//           Saved Items
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
//           onClick={() => setActiveTab('settings')}
//         >
//           Settings
//         </button>
//       </div>

//       <div className="profile-content">
//         {activeTab === 'overview' && (
//           <div className="overview-tab">
//             <div className="sustainability-impact">
//               <h3>Your Impact</h3>
//               <div className="impact-meter">
//                 <div className="meter">
//                   <div className="meter-fill" style={{ width: '75%' }}></div>
//                 </div>
//                 <p>You've saved 75% more water than average renters</p>
//               </div>
//               <div className="impact-stats">
//                 <div className="impact-stat">
//                   <span className="impact-value">{user.stats.waterSaved}L</span>
//                   <span className="impact-label">Water Saved</span>
//                 </div>
//                 <div className="impact-stat">
//                   <span className="impact-value">{user.stats.carbonCredits}</span>
//                   <span className="impact-label">Carbon Credits</span>
//                 </div>
//                 <div className="impact-stat">
//                   <span className="impact-value">25kg</span>
//                   <span className="impact-label">CO₂ Reduced</span>
//                 </div>
//               </div>
//             </div>

//             <div className="recent-activity">
//               <h3>Recent Activity</h3>
//               <div className="activity-list">
//                 <div className="activity-item">
//                   <span className="activity-icon">👗</span>
//                   <div className="activity-details">
//                     <p>Rented <strong>Silk Evening Gown</strong> from ÉLITE COUTURE</p>
//                     <span className="activity-time">2 days ago</span>
//                   </div>
//                 </div>
//                 <div className="activity-item">
//                   <span className="activity-icon">⭐</span>
//                   <div className="activity-details">
//                     <p>Earned <strong>Eco Warrior</strong> badge</p>
//                     <span className="activity-time">1 week ago</span>
//                   </div>
//                 </div>
//                 <div className="activity-item">
//                   <span className="activity-icon">💧</span>
//                   <div className="activity-details">
//                     <p>Reached <strong>1000L water saved</strong> milestone</p>
//                     <span className="activity-time">2 weeks ago</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'history' && (
//           <div className="history-tab">
//             <h3>Rental History</h3>
//             <div className="rental-list">
//               {rentalHistory.map(rental => (
//                 <div key={rental.id} className="rental-history-item">
//                   <img src={rental.image} alt={rental.item} />
//                   <div className="rental-history-info">
//                     <h4>{rental.item}</h4>
//                     <p className="boutique-name">{rental.boutique}</p>
//                     <p className="rental-date">Rented on {rental.date}</p>
//                     <div className="rental-rating">
//                       {'★'.repeat(rental.rating)}{'☆'.repeat(5-rental.rating)}
//                     </div>
//                   </div>
//                   <div className="rental-history-price">
//                     <span className="price">${rental.price}</span>
//                     <span className="status">{rental.status}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'saved' && (
//           <div className="saved-tab">
//             <h3>Saved Items</h3>
//             <div className="saved-grid">
//               {savedItems.map(item => (
//                 <div key={item.id} className="saved-item">
//                   <img src={item.image} alt={item.name} />
//                   <div className="saved-info">
//                     <h4>{item.name}</h4>
//                     <p className="boutique">{item.boutique}</p>
//                     <p className="fit-score">Fit Score: {item.fitScore}%</p>
//                     <div className="saved-actions">
//                       <span className="price">${item.price}/day</span>
//                       <button className="rent-now-btn">Rent Now</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'settings' && (
//           <div className="settings-tab">
//             <h3>Account Settings</h3>
//             <form className="settings-form">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input type="text" defaultValue={user.name} />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="email" defaultValue={user.email} />
//               </div>
//               <div className="form-group">
//                 <label>Location</label>
//                 <input type="text" defaultValue={user.location} />
//               </div>
//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input type="tel" placeholder="+1 (555) 123-4567" />
//               </div>
//               <div className="form-group">
//                 <label>Notification Preferences</label>
//                 <div className="checkbox-group">
//                   <label>
//                     <input type="checkbox" defaultChecked /> Email notifications
//                   </label>
//                   <label>
//                     <input type="checkbox" defaultChecked /> Push notifications
//                   </label>
//                   <label>
//                     <input type="checkbox" defaultChecked /> SMS updates
//                   </label>
//                 </div>
//               </div>
//               <button type="submit" className="save-btn">Save Changes</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


//---------2------------
// pages/Profile.js
// import React, { useState } from 'react';
// import './Profile.css';

// const Profile = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   const user = {
//     name: 'Sarah Johnson',
//     email: 'sarah.j@example.com',
//     memberSince: 'January 2024',
//     avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
//     location: 'New York, NY',
//     stats: {
//       rentals: 24,
//       waterSaved: 1200,
//       carbonCredits: 48,
//       followers: 156,
//       following: 89
//     },
//     badges: [
//       { name: 'Eco Warrior', icon: '🌱', description: 'Saved 1000+ liters of water' },
//       { name: 'Style Icon', icon: '👗', description: '50+ rentals' },
//       { name: 'Power Renter', icon: '👑', description: 'Top 10% of renters' },
//       { name: 'Early Adopter', icon: '🚀', description: 'Joined in first month' }
//     ]
//   };

//   const rentalHistory = [
//     {
//       id: 1,
//       item: 'Silk Evening Gown',
//       boutique: 'ÉLITE COUTURE',
//       date: '2024-03-15',
//       price: 89,
//       image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=150&h=150&fit=crop',
//       status: 'Completed',
//       rating: 5
//     },
//     {
//       id: 2,
//       item: 'Italian Wool Blazer',
//       boutique: 'THE BOARDROOM',
//       date: '2024-03-10',
//       price: 65,
//       image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=150&h=150&fit=crop',
//       status: 'Completed',
//       rating: 5
//     },
//     {
//       id: 3,
//       item: 'Handwoven Saree',
//       boutique: 'WEAVE & DRAPE',
//       date: '2024-03-01',
//       price: 79,
//       image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=150&h=150&fit=crop',
//       status: 'Completed',
//       rating: 4
//     }
//   ];

//   const savedItems = [
//     {
//       id: 1,
//       name: 'Sequin Party Dress',
//       boutique: 'VINTAGE VOGUE',
//       price: 75,
//       image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=250&fit=crop',
//       fitScore: 96
//     },
//     {
//       id: 2,
//       name: 'Cashmere Sweater',
//       boutique: 'LUXE CASUAL',
//       price: 45,
//       image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=250&fit=crop',
//       fitScore: 98
//     }
//   ];

//   return (
//     <div className="profile-page">
//       <div className="profile-header">
//         <div className="profile-cover">
//           <div className="profile-avatar">
//             <img src={user.avatar} alt={user.name} />
//             <button className="edit-avatar">📷</button>
//           </div>
//           <h1>{user.name}</h1>
//           <p className="profile-location">{user.location}</p>
//           <p className="profile-member">Member since {user.memberSince}</p>
//         </div>
//       </div>

//       <div className="profile-stats">
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.rentals}</span>
//           <span className="stat-label">Rentals</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.waterSaved}L</span>
//           <span className="stat-label">Water Saved</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.carbonCredits}</span>
//           <span className="stat-label">Carbon Credits</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.followers}</span>
//           <span className="stat-label">Followers</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-value">{user.stats.following}</span>
//           <span className="stat-label">Following</span>
//         </div>
//       </div>

//       <div className="profile-badges">
//         <h2>Badges & Achievements</h2>
//         <div className="badges-grid">
//           {user.badges.map(badge => (
//             <div key={badge.name} className="badge-card">
//               <span className="badge-icon">{badge.icon}</span>
//               <div className="badge-info">
//                 <h3>{badge.name}</h3>
//                 <p>{badge.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="profile-tabs">
//         <button 
//           className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
//           onClick={() => setActiveTab('overview')}
//         >
//           Overview
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
//           onClick={() => setActiveTab('history')}
//         >
//           Rental History
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
//           onClick={() => setActiveTab('saved')}
//         >
//           Saved Items
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
//           onClick={() => setActiveTab('settings')}
//         >
//           Settings
//         </button>
//       </div>

//       <div className="profile-content">
//         {activeTab === 'overview' && (
//           <div className="overview-tab">
//             <div className="sustainability-impact">
//               <h3>Your Impact</h3>
//               <div className="impact-meter">
//                 <div className="meter">
//                   <div className="meter-fill" style={{ width: '75%' }}></div>
//                 </div>
//                 <p>You've saved 75% more water than average renters</p>
//               </div>
//               <div className="impact-stats">
//                 <div className="impact-stat">
//                   <span className="impact-value">{user.stats.waterSaved}L</span>
//                   <span className="impact-label">Water Saved</span>
//                 </div>
//                 <div className="impact-stat">
//                   <span className="impact-value">{user.stats.carbonCredits}</span>
//                   <span className="impact-label">Carbon Credits</span>
//                 </div>
//                 <div className="impact-stat">
//                   <span className="impact-value">25kg</span>
//                   <span className="impact-label">CO₂ Reduced</span>
//                 </div>
//               </div>
//             </div>

//             <div className="recent-activity">
//               <h3>Recent Activity</h3>
//               <div className="activity-list">
//                 <div className="activity-item">
//                   <span className="activity-icon">👗</span>
//                   <div className="activity-details">
//                     <p>Rented <strong>Silk Evening Gown</strong> from ÉLITE COUTURE</p>
//                     <span className="activity-time">2 days ago</span>
//                   </div>
//                 </div>
//                 <div className="activity-item">
//                   <span className="activity-icon">⭐</span>
//                   <div className="activity-details">
//                     <p>Earned <strong>Eco Warrior</strong> badge</p>
//                     <span className="activity-time">1 week ago</span>
//                   </div>
//                 </div>
//                 <div className="activity-item">
//                   <span className="activity-icon">💧</span>
//                   <div className="activity-details">
//                     <p>Reached <strong>1000L water saved</strong> milestone</p>
//                     <span className="activity-time">2 weeks ago</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'history' && (
//           <div className="history-tab">
//             <h3>Rental History</h3>
//             <div className="rental-list">
//               {rentalHistory.map(rental => (
//                 <div key={rental.id} className="rental-history-item">
//                   <img src={rental.image} alt={rental.item} />
//                   <div className="rental-history-info">
//                     <h4>{rental.item}</h4>
//                     <p className="boutique-name">{rental.boutique}</p>
//                     <p className="rental-date">Rented on {rental.date}</p>
//                     <div className="rental-rating">
//                       {'★'.repeat(rental.rating)}{'☆'.repeat(5-rental.rating)}
//                     </div>
//                   </div>
//                   <div className="rental-history-price">
//                     <span className="price">${rental.price}</span>
//                     <span className="status">{rental.status}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'saved' && (
//           <div className="saved-tab">
//             <h3>Saved Items</h3>
//             <div className="saved-grid">
//               {savedItems.map(item => (
//                 <div key={item.id} className="saved-item">
//                   <img src={item.image} alt={item.name} />
//                   <div className="saved-info">
//                     <h4>{item.name}</h4>
//                     <p className="boutique">{item.boutique}</p>
//                     <p className="fit-score">Fit Score: {item.fitScore}%</p>
//                     <div className="saved-actions">
//                       <span className="price">${item.price}/day</span>
//                       <button className="rent-now-btn">Rent Now</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'settings' && (
//           <div className="settings-tab">
//             <h3>Account Settings</h3>
//             <form className="settings-form">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input type="text" defaultValue={user.name} />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="email" defaultValue={user.email} />
//               </div>
//               <div className="form-group">
//                 <label>Location</label>
//                 <input type="text" defaultValue={user.location} />
//               </div>
//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input type="tel" placeholder="+1 (555) 123-4567" />
//               </div>
//               <div className="form-group">
//                 <label>Notification Preferences</label>
//                 <div className="checkbox-group">
//                   <label>
//                     <input type="checkbox" defaultChecked /> Email notifications
//                   </label>
//                   <label>
//                     <input type="checkbox" defaultChecked /> Push notifications
//                   </label>
//                   <label>
//                     <input type="checkbox" defaultChecked /> SMS updates
//                   </label>
//                 </div>
//               </div>
//               <button type="submit" className="save-btn">Save Changes</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

//---------------3----------

// pages/Profile.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    notifications: {
      email: true,
      push: true,
      sms: false
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) setActiveTab(tab);
  }, [location]);

  const user = {
    name: formData.name,
    email: formData.email,
    memberSince: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    location: formData.location,
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
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=150&h=150&fit=crop',
      status: 'Completed',
      rating: 5
    },
    {
      id: 2,
      item: 'Italian Wool Blazer',
      boutique: 'THE BOARDROOM',
      date: '2024-03-10',
      price: 65,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=150&h=150&fit=crop',
      status: 'Completed',
      rating: 5
    },
    {
      id: 3,
      item: 'Handwoven Saree',
      boutique: 'WEAVE & DRAPE',
      date: '2024-03-01',
      price: 79,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=150&h=150&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=250&fit=crop',
      fitScore: 96
    },
    {
      id: 2,
      name: 'Cashmere Sweater',
      boutique: 'LUXE CASUAL',
      price: 45,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=250&fit=crop',
      fitScore: 98
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        notifications: {
          ...formData.notifications,
          [name]: checked
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert(`✅ Profile Updated!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\n\nNotifications: ${Object.entries(formData.notifications).filter(([k,v]) => v).map(([k]) => k).join(', ')}`);
    setEditMode(false);
  };

  const handleRentAgain = (item) => {
    alert(`🔄 Renting Again: ${item.item}\n\nPrice: $${item.price}/day\nDelivery: 2 hours\nBackup size available for +$5\n\nProceed to checkout?`);
  };

  const handleRemoveFromSaved = (itemId) => {
    alert(`🗑️ Removed from saved items`);
  };

  const handleRentSaved = (item) => {
    alert(`✨ Renting: ${item.name}\n\nPrice: $${item.price}/day\nFit Score: ${item.fitScore}%\nBackup size: +$5\n\nAdd to cart?`);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-avatar">
            <img src={user.avatar} alt={user.name} />
            <button className="edit-avatar" onClick={() => alert('📸 Change Profile Picture\n\nUpload a new photo\nMax size: 5MB\nFormats: JPG, PNG')}>
              📷
            </button>
          </div>
          <h1>{user.name}</h1>
          <p className="profile-location">{user.location}</p>
          <p className="profile-member">Member since {user.memberSince}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card" onClick={() => alert(`📊 Rental Stats\n\nTotal Rentals: ${user.stats.rentals}\nActive Rentals: 2\nCompleted: 22\nReturn Rate: 100%`)}>
          <span className="stat-value">{user.stats.rentals}</span>
          <span className="stat-label">Rentals</span>
        </div>
        <div className="stat-card" onClick={() => alert(`💧 Environmental Impact\n\nWater Saved: ${user.stats.waterSaved}L\nCO₂ Reduced: 25kg\nTrees Equivalent: 5\nPlastic Saved: 3kg`)}>
          <span className="stat-value">{user.stats.waterSaved}L</span>
          <span className="stat-label">Water Saved</span>
        </div>
        <div className="stat-card" onClick={() => alert(`🌱 Carbon Credits\n\nTotal Credits: ${user.stats.carbonCredits}\nRedeemable: Yes\nNext Reward at: 100 credits\nValue: $0.50 per credit`)}>
          <span className="stat-value">{user.stats.carbonCredits}</span>
          <span className="stat-label">Carbon Credits</span>
        </div>
        <div className="stat-card" onClick={() => alert(`👥 Social Stats\n\nFollowers: ${user.stats.followers}\nFollowing: ${user.stats.following}\nStyle Circle Rank: Top 10%\nPosts: 15`)}>
          <span className="stat-value">{user.stats.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-card" onClick={() => alert(`👥 Following\n\nFollowing: ${user.stats.following} boutiques\nTop Boutiques: ÉLITE COUTURE, THE BOARDROOM\nNew items daily`)}>
          <span className="stat-value">{user.stats.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      <div className="profile-badges">
        <h2>Badges & Achievements</h2>
        <div className="badges-grid">
          {user.badges.map(badge => (
            <div key={badge.name} className="badge-card" onClick={() => alert(`🏆 ${badge.name}\n\n${badge.description}\nEarned: ${badge.name === 'Eco Warrior' ? 'March 2024' : badge.name === 'Style Icon' ? 'February 2024' : badge.name === 'Power Renter' ? 'January 2024' : 'January 2024'}`)}>
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
                    <button className="rent-again-btn" onClick={() => handleRentAgain(rental)}>
                      Rent Again
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="saved-tab">
            <h3>Saved Items ({savedItems.length})</h3>
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
                      <div className="saved-buttons">
                        <button className="remove-saved-btn" onClick={() => handleRemoveFromSaved(item.id)}>
                          Remove
                        </button>
                        <button className="rent-now-btn" onClick={() => handleRentSaved(item)}>
                          Rent Now
                        </button>
                      </div>
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
            {!editMode ? (
              <div className="settings-view">
                <div className="settings-item">
                  <label>Full Name</label>
                  <p>{formData.name}</p>
                </div>
                <div className="settings-item">
                  <label>Email</label>
                  <p>{formData.email}</p>
                </div>
                <div className="settings-item">
                  <label>Phone Number</label>
                  <p>{formData.phone}</p>
                </div>
                <div className="settings-item">
                  <label>Location</label>
                  <p>{formData.location}</p>
                </div>
                <button className="edit-profile-btn" onClick={() => setEditMode(true)}>
                  Edit Profile
                </button>
              </div>
            ) : (
              <form className="settings-form" onSubmit={handleSaveProfile}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name} 
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email} 
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Notification Preferences</label>
                  <div className="checkbox-group">
                    <label>
                      <input 
                        type="checkbox" 
                        name="email"
                        checked={formData.notifications.email}
                        onChange={handleInputChange}
                      /> Email notifications
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        name="push"
                        checked={formData.notifications.push}
                        onChange={handleInputChange}
                      /> Push notifications
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        name="sms"
                        checked={formData.notifications.sms}
                        onChange={handleInputChange}
                      /> SMS updates
                    </label>
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={() => setEditMode(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;