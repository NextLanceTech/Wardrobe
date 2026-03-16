// components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Digital Twin Technology',
      description: 'Upload two photos and get a 3D body scan with heat maps showing exactly how garments will fit.',
      badge: 'NEW',
      color: '#9775fa'
    },
    {
      icon: '🔄',
      title: 'Backup Size Guarantee',
      description: 'Order a backup size for just $5. Only pay for the one you wear, never be without options.',
      badge: '$5 ONLY',
      color: '#51cf66'
    },
    {
      icon: '👗',
      title: 'AR Virtual Mirror',
      description: 'See how fabrics drape on your body in real-time with our augmented reality try-on feature.',
      badge: 'AR',
      color: '#ff6b6b'
    },
    {
      icon: '🤖',
      title: 'AI Personal Stylist',
      description: 'Sync your calendar and get personalized outfit suggestions for every event.',
      badge: 'AI',
      color: '#fcc419'
    },
    {
      icon: '🏃',
      title: '911 Fashion Delivery',
      description: 'Emergency outfit delivery within 60 minutes in major cities. Perfect for last-minute events.',
      badge: '60 MIN',
      color: '#20c997'
    },
    {
      icon: '🌱',
      title: 'Sustainability Dashboard',
      description: 'Track your water savings and earn carbon credits with every rental.',
      badge: 'ECO',
      color: '#94d82d'
    }
  ];

  return (
    <section className="features">
      <div className="features-header">
        <h2 className="features-title">
          Luxury Features,
          <span className="features-title-highlight"> Revolutionary Technology</span>
        </h2>
        <p className="features-subtitle">
          We've combined cutting-edge tech with luxury fashion to create an experience that's
          seamless, sustainable, and stunning.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card fade-in">
            <div className="feature-icon" style={{ background: feature.color + '20' }}>
              <span>{feature.icon}</span>
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <span className="feature-badge" style={{ background: feature.color }}>
              {feature.badge}
            </span>
          </div>
        ))}
      </div>

      <div className="features-showcase">
        <div className="showcase-item">
          <div className="showcase-visual nfc-preview">
            <div className="nfc-scan">
              <span className="scan-line"></span>
            </div>
          </div>
          <div className="showcase-content">
            <h4>NFC Authentication</h4>
            <p>Scan the NFC tag to see the garment's life story, water savings, and authenticity proof.</p>
          </div>
        </div>

        <div className="showcase-item">
          <div className="showcase-visual qr-preview">
            <div className="qr-code">📱</div>
          </div>
          <div className="showcase-content">
            <h4>Smart QR Styling</h4>
            <p>Scan the QR tag for 3 ways to style, see previous renters' photos, and get instant care instructions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;