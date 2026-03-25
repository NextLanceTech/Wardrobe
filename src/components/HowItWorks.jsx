// // components/HowItWorks.js
// import React, { useState } from 'react';
// import './HowItWorks.css';

// const HowItWorks = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       title: 'Create Digital Twin',
//       description: 'Take two photos and our AI creates your 3D body scan with accurate measurements.',
//       icon: '📸',
//       details: [
//         'Upload front and side photos',
//         'AI generates 200+ measurements',
//         'Heat map shows fit prediction',
//         'Save multiple body profiles'
//       ]
//     },
//     {
//       title: 'Browse & Try Virtually',
//       description: 'Use AR to see how garments look on your digital twin before renting.',
//       icon: '👆',
//       details: [
//         'AR mirror try-on',
//         'Mix & match with your wardrobe',
//         'See fabric draping in real-time',
//         'Get AI style suggestions'
//       ]
//     },
//     {
//       title: 'Select Backup Size',
//       description: 'Order a backup size for just $5 - only pay for the one you wear.',
//       icon: '🔄',
//       details: [
//         '$5 backup size guarantee',
//         'Free size exchange',
//         'Pay only for worn item',
//         'Perfect fit guaranteed'
//       ]
//     },
//     {
//       title: 'Fast Delivery',
//       description: 'Choose from standard or 60-minute emergency delivery.',
//       icon: '🚚',
//       details: [
//         '2-hour standard delivery',
//         '60-minute 911 service',
//         'Track in real-time',
//         'Eco-friendly packaging'
//       ]
//     },
//     {
//       title: 'Wear & Enjoy',
//       description: 'Scan QR tags for styling tips and instant support.',
//       icon: '✨',
//       details: [
//         '3 ways to style guide',
//         'Previous renters photos',
//         '24/7 emergency support',
//         'Care instructions'
//       ]
//     },
//     {
//       title: 'Easy Return',
//       description: 'Drop at partner lockers or schedule pickup - no packaging needed.',
//       icon: '📦',
//       details: [
//         'Drop-and-Go lockers',
//         'Carbon credits for returns',
//         'No packaging required',
//         'Instant refund processing'
//       ]
//     }
//   ];

//   return (
//     <section className="how-it-works">
//       <div className="how-header">
//         <h2 className="how-title">
//           From Selection to Return,
//           <span className="how-title-highlight"> Effortlessly Luxe</span>
//         </h2>
//         <p className="how-subtitle">
//           Six simple steps to luxury fashion without the commitment. We handle everything
//           so you can focus on looking your best.
//         </p>
//       </div>

//       <div className="how-container">
//         <div className="how-timeline">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className={`timeline-step ${activeStep === index ? 'active' : ''}`}
//               onClick={() => setActiveStep(index)}
//             >
//               <div className="step-number">{index + 1}</div>
//               <div className="step-content">
//                 <span className="step-icon">{step.icon}</span>
//                 <h3>{step.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="how-demo">
//           <div className="demo-visual">
//             {activeStep === 0 && (
//               <div className="demo-digital-twin">
//                 <div className="twin-model">
//                   <div className="model-heatmap">
//                     <div className="heatmap-zone tight-zone">Tight</div>
//                     <div className="heatmap-zone perfect-zone">Perfect</div>
//                     <div className="heatmap-zone loose-zone">Loose</div>
//                   </div>
//                 </div>
//                 <div className="twin-measurements">
//                   <div className="measurement-item">
//                     <span>Bust</span>
//                     <strong>34"</strong>
//                   </div>
//                   <div className="measurement-item">
//                     <span>Waist</span>
//                     <strong>26"</strong>
//                   </div>
//                   <div className="measurement-item">
//                     <span>Hips</span>
//                     <strong>36"</strong>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeStep === 1 && (
//               <div className="demo-ar">
//                 <div className="ar-screen">
//                   <div className="ar-model-preview"></div>
//                   <div className="ar-controls">
//                     <button className="ar-btn">👗 Try Different</button>
//                     <button className="ar-btn">🔄 Mix & Match</button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeStep === 2 && (
//               <div className="demo-backup">
//                 <div className="size-card primary">
//                   <span className="size-label">Primary</span>
//                   <span className="size-value">Size M</span>
//                   <span className="size-price">$89</span>
//                 </div>
//                 <div className="size-card backup">
//                   <span className="size-label">Backup</span>
//                   <span className="size-value">Size L</span>
//                   <span className="size-price">+$5</span>
//                 </div>
//                 <div className="size-note">Only pay for the one you wear</div>
//               </div>
//             )}

//             {activeStep === 3 && (
//               <div className="demo-delivery">
//                 <div className="delivery-option standard">
//                   <span>🚚 Standard</span>
//                   <span>2 hours</span>
//                   <span>Free</span>
//                 </div>
//                 <div className="delivery-option emergency">
//                   <span>🏃 911 Fashion</span>
//                   <span>60 min</span>
//                   <span>$19</span>
//                 </div>
//               </div>
//             )}

//             {activeStep === 4 && (
//               <div className="demo-qr">
//                 <div className="qr-scan-preview">
//                   <div className="qr-code-box">📱</div>
//                   <div className="qr-info">
//                     <h4>3 Ways to Style</h4>
//                     <ul>
//                       <li>✨ Casual with sneakers</li>
//                       <li>💼 Formal with heels</li>
//                       <li>🌆 Evening with clutch</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeStep === 5 && (
//               <div className="demo-return">
//                 <div className="locker-map">
//                   <div className="locker-location gym">💪 Gym</div>
//                   <div className="locker-location coffee">☕ Coffee</div>
//                   <div className="locker-location office">💼 Office</div>
//                 </div>
//                 <div className="return-benefit">
//                   <span>🌱 Earn 2 Carbon Credits</span>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="demo-details">
//             <h3>{steps[activeStep].title}</h3>
//             <p>{steps[activeStep].description}</p>
//             <ul className="demo-features">
//               {steps[activeStep].details.map((detail, index) => (
//                 <li key={index}>{detail}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

//----------2----------
// components/HowItWorks.js
import React, { useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

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
      ],
      demo: () => alert('📸 Digital Twin Demo:\n\n1. Click "Upload Photo"\n2. Take front-facing photo\n3. Take side photo\n4. AI creates your 3D model\n\nAccuracy: 98.5%')
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
      ],
      demo: () => alert('👆 AR Try-On:\n\n• Point camera at yourself\n• Select any garment\n• See how it looks instantly\n• Try different colors\n• Share with friends')
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
      ],
      demo: () => alert('🔄 Backup Size:\n\n• Add backup size for $5\n• Receive both sizes\n• Try both at home\n• Return the one that doesn\'t fit\n• Only pay for worn item!')
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
      ],
      demo: () => {
        const choice = window.confirm('🚚 Choose Delivery:\n\nClick OK for 911 Emergency (60min)\nCancel for Standard (2hrs)');
        if (choice) {
          alert('🏃 911 DISPATCHED!\n\nYour outfit will arrive in 60 minutes.\nTracking ID: #911-2024');
        } else {
          alert('🚚 Standard Delivery Confirmed!\n\nYour outfit will arrive in 2 hours.\nTracking ID: #STD-2024');
        }
      }
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
      ],
      demo: () => alert('✨ QR Code Scanned!\n\nStyle Options:\n1. Casual with sneakers 👟\n2. Formal with heels 👠\n3. Evening with clutch 👛\n\nEmergency Support: 24/7 available')
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
      ],
      demo: () => {
        const locker = prompt('📍 Find Nearest Locker:\n\nEnter your location:\n1. Downtown\n2. Midtown\n3. Uptown\n4. Airport');
        if (locker) {
          alert(`✅ Return Confirmed!\n\nDropped at ${locker} Locker\nCarbon Credits Earned: +5 🌱\nRefund Processing: $${Math.floor(Math.random() * 100) + 50}`);
        }
      }
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
    setShowDemo(true);
    steps[index].demo();
  };

  return (
    <section className="how-it-works" id="how-it-works">
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
              onClick={() => handleStepClick(index)}
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
                    <button className="ar-btn" onClick={() => alert('👗 Trying different outfit...')}>👗 Try Different</button>
                    <button className="ar-btn" onClick={() => alert('🔄 Mix & Match feature coming soon!')}>🔄 Mix & Match</button>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="demo-backup">
                <div className="size-card primary" onClick={() => alert('✅ Primary Size Selected: Size M - $89')}>
                  <span className="size-label">Primary</span>
                  <span className="size-value">Size M</span>
                  <span className="size-price">$89</span>
                </div>
                <div className="size-card backup" onClick={() => alert('🔄 Backup Size Added: Size L - +$5\n\nTotal: $94 (refundable if unused)')}>
                  <span className="size-label">Backup</span>
                  <span className="size-value">Size L</span>
                  <span className="size-price">+$5</span>
                </div>
                <div className="size-note">Only pay for the one you wear</div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="demo-delivery">
                <div className="delivery-option standard" onClick={() => alert('🚚 Standard Delivery Selected\n\nDelivery in 2 hours\nTracking: #STD-2024\nFree Delivery')}>
                  <span>🚚 Standard</span>
                  <span>2 hours</span>
                  <span>Free</span>
                </div>
                <div className="delivery-option emergency" onClick={() => alert('🏃 911 Emergency Delivery\n\nPriority Dispatch\nDelivery in 60 minutes\nAdditional $19\nConfirm?')}>
                  <span>🏃 911 Fashion</span>
                  <span>60 min</span>
                  <span>$19</span>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="demo-qr">
                <div className="qr-scan-preview" onClick={() => alert('✨ QR Code Scanned!\n\nStyle Options:\n1. Casual with sneakers 👟\n2. Formal with heels 👠\n3. Evening with clutch 👛')}>
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
                  <div className="locker-location gym" onClick={() => alert('💪 Drop at Equinox Gym Locker\n\nLocation: 123 Main St\nCode: 1234\nCarbon Credits: +2')}>💪 Gym</div>
                  <div className="locker-location coffee" onClick={() => alert('☕ Drop at Starbucks Locker\n\nLocation: 456 Oak Ave\nCode: 5678\nCarbon Credits: +2')}>☕ Coffee</div>
                  <div className="locker-location office" onClick={() => alert('💼 Drop at WeWork Locker\n\nLocation: 789 Pine St\nCode: 9012\nCarbon Credits: +2')}>💼 Office</div>
                </div>
                <div className="return-benefit" onClick={() => alert('🌱 Carbon Credits Earned: +2\n\nTotal Credits: 48\nRedeem for discounts!')}>
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
            <button className="demo-action-btn" onClick={() => steps[activeStep].demo()}>
              Try Interactive Demo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;