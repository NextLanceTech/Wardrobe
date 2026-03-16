// components/CTASection.js
import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">
          Ready to Transform Your Wardrobe?
        </h2>
        <p className="cta-subtitle">
          Join thousands of fashion enthusiasts who've discovered the joy of luxury rental.
          No commitments, no hassle, just stunning outfits for every occasion.
        </p>

        <div className="cta-features">
          <div className="cta-feature">
            <span className="feature-icon">✓</span>
            <span>Free delivery on first rental</span>
          </div>
          <div className="cta-feature">
            <span className="feature-icon">✓</span>
            <span>Cancel anytime</span>
          </div>
          <div className="cta-feature">
            <span className="feature-icon">✓</span>
            <span>24/7 customer support</span>
          </div>
          <div className="cta-feature">
            <span className="feature-icon">✓</span>
            <span>Earn carbon credits</span>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="btn btn-primary btn-large">
            Download The App
          </button>
          <button className="btn btn-secondary btn-large">
            Browse Wardrobe
          </button>
        </div>

        <div className="cta-app-previews">
          <div className="app-preview">
            <div className="preview-screen">
              <div className="preview-content">
                <span className="preview-badge">Digital Twin</span>
                <div className="preview-heatmap"></div>
              </div>
            </div>
          </div>
          <div className="app-preview">
            <div className="preview-screen">
              <div className="preview-content">
                <span className="preview-badge">AR Try-On</span>
                <div className="preview-ar"></div>
              </div>
            </div>
          </div>
          <div className="app-preview">
            <div className="preview-screen">
              <div className="preview-content">
                <span className="preview-badge">Smart Sync</span>
                <div className="preview-calendar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;