// components/HowItWorks.js
import React, { useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Create Digital Twin',
      description: 'Take two photos and our AI creates your 3D body scan with accurate measurements.',
      icon: '📸',
      details: [
        'Upload front and side photos',
        'AI generates 200+ measurements',
        'Heat map shows fit prediction',
        'Save multiple body profiles'
      ]
    },
    {
      title: 'Browse & Try Virtually',
      description: 'Use AR to see how garments look on your digital twin before renting.',
      icon: '👆',
      details: [
        'AR mirror try-on',
        'Mix & match with your wardrobe',
        'See fabric draping in real-time',
        'Get AI style suggestions'
      ]
    },
    {
      title: 'Select Backup Size',
      description: 'Order a backup size for just $5 - only pay for the one you wear.',
      icon: '🔄',
      details: [
        '$5 backup size guarantee',
        'Free size exchange',
        'Pay only for worn item',
        'Perfect fit guaranteed'
      ]
    },
    {
      title: 'Fast Delivery',
      description: 'Choose from standard or 60-minute emergency delivery.',
      icon: '🚚',
      details: [
        '2-hour standard delivery',
        '60-minute 911 service',
        'Track in real-time',
        'Eco-friendly packaging'
      ]
    },
    {
      title: 'Wear & Enjoy',
      description: 'Scan QR tags for styling tips and instant support.',
      icon: '✨',
      details: [
        '3 ways to style guide',
        'Previous renters photos',
        '24/7 emergency support',
        'Care instructions'
      ]
    },
    {
      title: 'Easy Return',
      description: 'Drop at partner lockers or schedule pickup - no packaging needed.',
      icon: '📦',
      details: [
        'Drop-and-Go lockers',
        'Carbon credits for returns',
        'No packaging required',
        'Instant refund processing'
      ]
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-header">
        <h2 className="how-title">
          From Selection to Return,
          <span className="how-title-highlight"> Effortlessly Luxe</span>
        </h2>
        <p className="how-subtitle">
          Six simple steps to luxury fashion without the commitment. We handle everything
          so you can focus on looking your best.
        </p>
      </div>

      <div className="how-container">
        <div className="how-timeline">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-step ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <span className="step-icon">{step.icon}</span>
                <h3>{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="how-demo">
          <div className="demo-visual">
            {activeStep === 0 && (
              <div className="demo-digital-twin">
                <div className="twin-model">
                  <div className="model-heatmap">
                    <div className="heatmap-zone tight-zone">Tight</div>
                    <div className="heatmap-zone perfect-zone">Perfect</div>
                    <div className="heatmap-zone loose-zone">Loose</div>
                  </div>
                </div>
                <div className="twin-measurements">
                  <div className="measurement-item">
                    <span>Bust</span>
                    <strong>34"</strong>
                  </div>
                  <div className="measurement-item">
                    <span>Waist</span>
                    <strong>26"</strong>
                  </div>
                  <div className="measurement-item">
                    <span>Hips</span>
                    <strong>36"</strong>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="demo-ar">
                <div className="ar-screen">
                  <div className="ar-model-preview"></div>
                  <div className="ar-controls">
                    <button className="ar-btn">👗 Try Different</button>
                    <button className="ar-btn">🔄 Mix & Match</button>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="demo-backup">
                <div className="size-card primary">
                  <span className="size-label">Primary</span>
                  <span className="size-value">Size M</span>
                  <span className="size-price">$89</span>
                </div>
                <div className="size-card backup">
                  <span className="size-label">Backup</span>
                  <span className="size-value">Size L</span>
                  <span className="size-price">+$5</span>
                </div>
                <div className="size-note">Only pay for the one you wear</div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="demo-delivery">
                <div className="delivery-option standard">
                  <span>🚚 Standard</span>
                  <span>2 hours</span>
                  <span>Free</span>
                </div>
                <div className="delivery-option emergency">
                  <span>🏃 911 Fashion</span>
                  <span>60 min</span>
                  <span>$19</span>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="demo-qr">
                <div className="qr-scan-preview">
                  <div className="qr-code-box">📱</div>
                  <div className="qr-info">
                    <h4>3 Ways to Style</h4>
                    <ul>
                      <li>✨ Casual with sneakers</li>
                      <li>💼 Formal with heels</li>
                      <li>🌆 Evening with clutch</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 5 && (
              <div className="demo-return">
                <div className="locker-map">
                  <div className="locker-location gym">💪 Gym</div>
                  <div className="locker-location coffee">☕ Coffee</div>
                  <div className="locker-location office">💼 Office</div>
                </div>
                <div className="return-benefit">
                  <span>🌱 Earn 2 Carbon Credits</span>
                </div>
              </div>
            )}
          </div>

          <div className="demo-details">
            <h3>{steps[activeStep].title}</h3>
            <p>{steps[activeStep].description}</p>
            <ul className="demo-features">
              {steps[activeStep].details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;