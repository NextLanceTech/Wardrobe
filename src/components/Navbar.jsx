// // components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/dashboard', label: 'Dashboard' },
//     { path: '/wardrobe', label: 'Wardrobe' },
//     { path: '/events', label: 'Events' },
//     { path: '/boutiques', label: 'Boutiques' },
//     { path: '/profile', label: 'Profile' },
//   ];

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           <span className="logo-text">THE LUXE</span>
//           <span className="logo-subtext">WARDROBE</span>
//         </Link>

//         <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         <div className="navbar-actions">
//           <button className="icon-button">
//             <span className="notification-badge">3</span>
//             🔔
//           </button>
//           <div className="user-profile">
//             <img 
//               src="https://via.placeholder.com/40" 
//               alt="User" 
//               className="user-avatar"
//             />
//             <span className="user-name">Sarah</span>
//           </div>
//           <button 
//             className={`hamburger ${isOpen ? 'active' : ''}`}
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//--------2------------
// components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//     setShowProfileMenu(false);
//   }, [location]);

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/dashboard', label: 'Dashboard' },
//     { path: '/wardrobe', label: 'Wardrobe' },
//     { path: '/events', label: 'Events' },
//     { path: '/boutiques', label: 'Boutiques' },
//   ];

//   const handleLogout = () => {
//     // In a real app, this would clear auth tokens
//     alert('Logged out successfully!');
//     navigate('/');
//   };

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           <span className="logo-text">THE LUXE</span>
//           <span className="logo-subtext">WARDROBE</span>
//         </Link>

//         <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         <div className="navbar-actions">
//           <button 
//             className="icon-button notification-btn"
//             onClick={() => alert('🔔 You have 3 new notifications!\n\n1. Your rental of Silk Gown ends in 2 days\n2. New items added to your wishlist\n3. Spring collection now available')}
//           >
//             <span className="notification-badge">3</span>
//             🔔
//           </button>
//           <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
//             <img 
//               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
//               alt="User" 
//               className="user-avatar"
//             />
//             <span className="user-name">Sarah</span>
//           </div>
//           {showProfileMenu && (
//             <div className="profile-dropdown">
//               <Link to="/profile" className="dropdown-item">My Profile</Link>
//               <Link to="/profile?tab=history" className="dropdown-item">Rental History</Link>
//               <Link to="/profile?tab=saved" className="dropdown-item">Saved Items</Link>
//               <Link to="/profile?tab=settings" className="dropdown-item">Settings</Link>
//               <hr />
//               <button onClick={handleLogout} className="dropdown-item logout">Logout</button>
//             </div>
//           )}
//           <button 
//             className={`hamburger ${isOpen ? 'active' : ''}`}
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//------------3-----------
// components/Navbar.js - Enhanced
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowProfileMenu(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/wardrobe', label: 'Wardrobe', icon: '👗' },
    { path: '/events', label: 'Events', icon: '📅' },
    { path: '/boutiques', label: 'Boutiques', icon: '🏪' },
  ];

  const handleLogout = () => {
    alert('✨ Logged out successfully!\n\nThank you for using The Luxe Wardrobe.\nWe hope to see you again soon! ✨');
    navigate('/');
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled glass' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon animate-float">✨</div>
          <div>
            <span className="logo-text">THE LUXE</span>
            <span className="logo-subtext">WARDROBE</span>
          </div>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link tooltip ${location.pathname === link.path ? 'active' : ''}`}
              data-tooltip={link.label}
            >
              <span className="link-icon">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button 
            className="icon-button notification-btn tooltip"
            data-tooltip="Notifications"
            onClick={() => {
              alert('🔔 New Notifications!\n\n✨ Your rental of Silk Gown ends in 2 days\n✨ 5 new items added to your wishlist\n✨ Spring collection now available\n✨ You earned 10 carbon credits!');
            }}
          >
            <span className="notification-badge pulse">3</span>
            🔔
          </button>
          <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              alt="User" 
              className="user-avatar"
            />
            <span className="user-name">Sarah</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          {showProfileMenu && (
            <div className="profile-dropdown animate-scaleIn">
              <Link to="/profile" className="dropdown-item">
                <span>👤</span> My Profile
              </Link>
              <Link to="/profile?tab=history" className="dropdown-item">
                <span>📜</span> Rental History
              </Link>
              <Link to="/profile?tab=saved" className="dropdown-item">
                <span>❤️</span> Saved Items
              </Link>
              <Link to="/profile?tab=settings" className="dropdown-item">
                <span>⚙️</span> Settings
              </Link>
              <hr />
              <button onClick={handleLogout} className="dropdown-item logout">
                <span>🚪</span> Logout
              </button>
            </div>
          )}
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;