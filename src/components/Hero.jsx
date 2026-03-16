// components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
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
          <Link to="/wardrobe" className="btn btn-primary">
            Explore Wardrobe
          </Link>
          <Link to="/how-it-works" className="btn btn-secondary">
            See How It Works
          </Link>
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

      <div className="hero-visual">
        <div className="hero-card hero-card-1">
          <span className="card-badge">Digital Twin</span>
          <div className="card-preview">
            <div className="heatmap-preview">
              <div className="heatmap-segment tight">Tight</div>
              <div className="heatmap-segment perfect">Perfect</div>
            </div>
          </div>
        </div>
        
        <div className="hero-card hero-card-2">
          <span className="card-badge">AR Try-On</span>
          <div className="card-preview ar-preview">
            <div className="ar-model"></div>
          </div>
        </div>

        <div className="hero-card hero-card-3">
          <span className="card-badge">Smart Sync</span>
          <div className="card-preview calendar-preview">
            <div className="calendar-event">Wedding in Tuscany</div>
            <div className="calendar-event">Board Meeting</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;