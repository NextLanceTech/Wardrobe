// components/Hero.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">
//           Luxury Fashion,
//           <span className="hero-title-highlight"> On Your Terms</span>
//         </h1>
//         <p className="hero-subtitle">
//           Experience high-end fashion without the commitment. Rent, style, and return with our
//           revolutionary platform that combines AI-powered fitting, sustainable practices, and
//           effortless logistics.
//         </p>
        
//         <div className="hero-cta">
//           <Link to="/wardrobe" className="btn btn-primary">
//             Explore Wardrobe
//           </Link>
//           <Link to="/how-it-works" className="btn btn-secondary">
//             See How It Works
//           </Link>
//         </div>

//         <div className="hero-stats">
//           <div className="stat-item">
//             <span className="stat-number">10K+</span>
//             <span className="stat-label">Happy Renters</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">500+</span>
//             <span className="stat-label">Luxury Items</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">50K+</span>
//             <span className="stat-label">Liters Saved</span>
//           </div>
//         </div>
//       </div>

//       <div className="hero-visual">
//         <div className="hero-card hero-card-1">
//           <span className="card-badge">Digital Twin</span>
//           <div className="card-preview">
//             <div className="heatmap-preview">
//               <div className="heatmap-segment tight">Tight</div>
//               <div className="heatmap-segment perfect">Perfect</div>
//             </div>
//           </div>
//         </div>
        
//         <div className="hero-card hero-card-2">
//           <span className="card-badge">AR Try-On</span>
//           <div className="card-preview ar-preview">
//             <div className="ar-model"></div>
//           </div>
//         </div>

//         <div className="hero-card hero-card-3">
//           <span className="card-badge">Smart Sync</span>
//           <div className="card-preview calendar-preview">
//             <div className="calendar-event">Wedding in Tuscany</div>
//             <div className="calendar-event">Board Meeting</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//----------------------2------------------
// components/Hero.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">
//           Luxury Fashion,
//           <span className="hero-title-highlight"> On Your Terms</span>
//         </h1>
//         <p className="hero-subtitle">
//           Experience high-end fashion without the commitment. Rent, style, and return with our
//           revolutionary platform that combines AI-powered fitting, sustainable practices, and
//           effortless logistics.
//         </p>
        
//         <div className="hero-cta">
//           <Link to="/wardrobe" className="btn btn-primary">
//             Explore Wardrobe
//           </Link>
//           <Link to="/how-it-works" className="btn btn-secondary">
//             See How It Works
//           </Link>
//         </div>

//         <div className="hero-stats">
//           <div className="stat-item">
//             <span className="stat-number">10K+</span>
//             <span className="stat-label">Happy Renters</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">500+</span>
//             <span className="stat-label">Luxury Items</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">50K+</span>
//             <span className="stat-label">Liters Saved</span>
//           </div>
//         </div>
//       </div>

//       <div className="hero-visual">
//         <div className="hero-card hero-card-1">
//           <span className="card-badge">Digital Twin</span>
//           <div className="card-preview">
//             <div className="heatmap-preview">
//               <div className="heatmap-segment tight">Tight</div>
//               <div className="heatmap-segment perfect">Perfect</div>
//             </div>
//           </div>
//         </div>
        
//         <div className="hero-card hero-card-2">
//           <span className="card-badge">AR Try-On</span>
//           <div className="card-preview ar-preview">
//             <div className="ar-model">
//               <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=200&fit=crop" alt="AR Preview" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}} />
//             </div>
//           </div>
//         </div>

//         <div className="hero-card hero-card-3">
//           <span className="card-badge">Smart Sync</span>
//           <div className="card-preview calendar-preview">
//             <div className="calendar-event">Wedding in Tuscany</div>
//             <div className="calendar-event">Board Meeting</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//----------------------3------------------
// components/Hero.js
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Hero.css';

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleExploreClick = () => {
//     navigate('/wardrobe');
//   };

//   const handleHowItWorksClick = () => {
//     const howSection = document.getElementById('how-it-works');
//     if (howSection) {
//       howSection.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       navigate('/');
//       setTimeout(() => {
//         const section = document.getElementById('how-it-works');
//         if (section) section.scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     }
//   };

//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">
//           Luxury Fashion,
//           <span className="hero-title-highlight"> On Your Terms</span>
//         </h1>
//         <p className="hero-subtitle">
//           Experience high-end fashion without the commitment. Rent, style, and return with our
//           revolutionary platform that combines AI-powered fitting, sustainable practices, and
//           effortless logistics.
//         </p>
        
//         <div className="hero-cta">
//           <button onClick={handleExploreClick} className="btn btn-primary">
//             Explore Wardrobe
//           </button>
//           <button onClick={handleHowItWorksClick} className="btn btn-secondary">
//             See How It Works
//           </button>
//         </div>

//         <div className="hero-stats">
//           <div className="stat-item">
//             <span className="stat-number">10K+</span>
//             <span className="stat-label">Happy Renters</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">500+</span>
//             <span className="stat-label">Luxury Items</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">50K+</span>
//             <span className="stat-label">Liters Saved</span>
//           </div>
//         </div>
//       </div>

//       <div className="hero-visual">
//         <div className="hero-card hero-card-1">
//           <span className="card-badge">Digital Twin</span>
//           <div className="card-preview">
//             <div className="heatmap-preview">
//               <div className="heatmap-segment tight">Tight</div>
//               <div className="heatmap-segment perfect">Perfect</div>
//             </div>
//           </div>
//         </div>
        
//         <div className="hero-card hero-card-2">
//           <span className="card-badge">AR Try-On</span>
//           <div className="card-preview ar-preview">
//             <div className="ar-model">
//               <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=200&fit=crop" alt="AR Preview" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}} />
//             </div>
//           </div>
//         </div>

//         <div className="hero-card hero-card-3">
//           <span className="card-badge">Smart Sync</span>
//           <div className="card-preview calendar-preview">
//             <div className="calendar-event">Wedding in Tuscany</div>
//             <div className="calendar-event">Board Meeting</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//---------4-----------
// components/Hero.js - Enhanced
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const cards = heroRef.current.querySelectorAll('.hero-card');
      cards.forEach((card, index) => {
        const speed = 20 + index * 10;
        const moveX = x * speed;
        const moveY = y * speed;
        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreClick = () => {
    navigate('/wardrobe');
  };

  const handleHowItWorksClick = () => {
    const howSection = document.getElementById('how-it-works');
    if (howSection) {
      howSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg-particles"></div>
      <div className="hero-content animate-fadeInLeft">
        <div className="hero-badge">
          <span className="badge-text">✨ AI-Powered Fashion</span>
        </div>
        <h1 className="hero-title">
          Luxury Fashion,
          <span className="hero-title-highlight"> On Your Terms</span>
        </h1>
        <p className="hero-subtitle">
          Experience high-end fashion without the commitment. Rent, style, and return with our
          revolutionary platform that combines AI-powered fitting, sustainable practices, and
          effortless logistics.
        </p>
        
        <div className="hero-cta">
          <button onClick={handleExploreClick} className="btn btn-primary">
            <span>✨</span> Explore Wardrobe
          </button>
          <button onClick={handleHowItWorksClick} className="btn btn-secondary">
            <span>▶</span> See How It Works
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Happy Renters</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Luxury Items</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Liters Saved</span>
          </div>
        </div>
      </div>

      <div className="hero-visual animate-fadeInRight">
        <div className="hero-card hero-card-1 glass">
          <span className="card-badge">
            <span className="badge-icon">🔍</span> Digital Twin
          </span>
          <div className="card-preview">
            <div className="heatmap-preview">
              <div className="heatmap-segment tight">Tight</div>
              <div className="heatmap-segment perfect">Perfect</div>
            </div>
          </div>
        </div>
        
        <div className="hero-card hero-card-2 glass">
          <span className="card-badge">
            <span className="badge-icon">👗</span> AR Try-On
          </span>
          <div className="card-preview ar-preview">
            <div className="ar-model">
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&h=200&fit=crop" alt="AR Preview" />
              <div className="ar-overlay">
                <span className="ar-scan-line"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-card hero-card-3 glass">
          <span className="card-badge">
            <span className="badge-icon">🤖</span> Smart Sync
          </span>
          <div className="card-preview calendar-preview">
            <div className="calendar-event">
              <span className="event-icon">💒</span>
              <span>Wedding in Tuscany</span>
            </div>
            <div className="calendar-event">
              <span className="event-icon">💼</span>
              <span>Board Meeting</span>
            </div>
            <div className="calendar-event">
              <span className="event-icon">🏖️</span>
              <span>Beach Vacation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-mouse"></div>
      </div>
    </section>
  );
};

export default Hero;