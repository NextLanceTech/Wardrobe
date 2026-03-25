// // components/Features.js
// import React from 'react';
// import './Features.css';

// const Features = () => {
//   const features = [
//     {
//       icon: '🔍',
//       title: 'Digital Twin Technology',
//       description: 'Upload two photos and get a 3D body scan with heat maps showing exactly how garments will fit.',
//       badge: 'NEW',
//       color: '#9775fa'
//     },
//     {
//       icon: '🔄',
//       title: 'Backup Size Guarantee',
//       description: 'Order a backup size for just $5. Only pay for the one you wear, never be without options.',
//       badge: '$5 ONLY',
//       color: '#51cf66'
//     },
//     {
//       icon: '👗',
//       title: 'AR Virtual Mirror',
//       description: 'See how fabrics drape on your body in real-time with our augmented reality try-on feature.',
//       badge: 'AR',
//       color: '#ff6b6b'
//     },
//     {
//       icon: '🤖',
//       title: 'AI Personal Stylist',
//       description: 'Sync your calendar and get personalized outfit suggestions for every event.',
//       badge: 'AI',
//       color: '#fcc419'
//     },
//     {
//       icon: '🏃',
//       title: '911 Fashion Delivery',
//       description: 'Emergency outfit delivery within 60 minutes in major cities. Perfect for last-minute events.',
//       badge: '60 MIN',
//       color: '#20c997'
//     },
//     {
//       icon: '🌱',
//       title: 'Sustainability Dashboard',
//       description: 'Track your water savings and earn carbon credits with every rental.',
//       badge: 'ECO',
//       color: '#94d82d'
//     }
//   ];

//   return (
//     <section className="features">
//       <div className="features-header">
//         <h2 className="features-title">
//           Luxury Features,
//           <span className="features-title-highlight"> Revolutionary Technology</span>
//         </h2>
//         <p className="features-subtitle">
//           We've combined cutting-edge tech with luxury fashion to create an experience that's
//           seamless, sustainable, and stunning.
//         </p>
//       </div>

//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div key={index} className="feature-card fade-in">
//             <div className="feature-icon" style={{ background: feature.color + '20' }}>
//               <span>{feature.icon}</span>
//             </div>
//             <div className="feature-content">
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//             <span className="feature-badge" style={{ background: feature.color }}>
//               {feature.badge}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="features-showcase">
//         <div className="showcase-item">
//           <div className="showcase-visual nfc-preview">
//             <div className="nfc-scan">
//               <span className="scan-line"></span>
//             </div>
//           </div>
//           <div className="showcase-content">
//             <h4>NFC Authentication</h4>
//             <p>Scan the NFC tag to see the garment's life story, water savings, and authenticity proof.</p>
//           </div>
//         </div>

//         <div className="showcase-item">
//           <div className="showcase-visual qr-preview">
//             <div className="qr-code">📱</div>
//           </div>
//           <div className="showcase-content">
//             <h4>Smart QR Styling</h4>
//             <p>Scan the QR tag for 3 ways to style, see previous renters' photos, and get instant care instructions.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


//--------2----------
// components/Features.js
// import React, { useState } from 'react';
// import './Features.css';

// const Features = () => {
//   const [selectedFeature, setSelectedFeature] = useState(null);

//   const features = [
//     {
//       icon: '🔍',
//       title: 'Digital Twin Technology',
//       description: 'Upload two photos and get a 3D body scan with heat maps showing exactly how garments will fit.',
//       badge: 'NEW',
//       color: '#9775fa',
//       action: () => alert('📸 Digital Twin Demo:\n\n1. Take front and side photos\n2. AI creates 3D model\n3. Get accurate measurements\n4. See heat map for fit prediction\n\nTry it now in the Wardrobe section!')
//     },
//     {
//       icon: '🔄',
//       title: 'Backup Size Guarantee',
//       description: 'Order a backup size for just $5. Only pay for the one you wear, never be without options.',
//       badge: '$5 ONLY',
//       color: '#51cf66',
//       action: () => alert('🔄 Backup Size Feature:\n\n• Add backup size for just $5\n• Try both sizes at home\n• Return the one that doesn\'t fit\n• Only pay for the one you wear\n\nPerfect fit guaranteed!')
//     },
//     {
//       icon: '👗',
//       title: 'AR Virtual Mirror',
//       description: 'See how fabrics drape on your body in real-time with our augmented reality try-on feature.',
//       badge: 'AR',
//       color: '#ff6b6b',
//       action: () => alert('👗 AR Virtual Mirror:\n\n• Point camera at yourself\n• See clothes draped on your body\n• Mix and match different items\n• Share looks with friends\n\nComing soon to all devices!')
//     },
//     {
//       icon: '🤖',
//       title: 'AI Personal Stylist',
//       description: 'Sync your calendar and get personalized outfit suggestions for every event.',
//       badge: 'AI',
//       color: '#fcc419',
//       action: () => alert('🤖 AI Stylist:\n\n• Sync your calendar\n• Get event-based suggestions\n• Weather-appropriate outfits\n• Style recommendations\n\nGo to Events section to try!')
//     },
//     {
//       icon: '🏃',
//       title: '911 Fashion Delivery',
//       description: 'Emergency outfit delivery within 60 minutes in major cities. Perfect for last-minute events.',
//       badge: '60 MIN',
//       color: '#20c997',
//       action: () => alert('🏃 911 Fashion Delivery:\n\n• Emergency delivery in 60 mins\n• Available in major cities\n• Premium fee applies\n• 24/7 service\n\nCall now: 1-800-FASHION-911')
//     },
//     {
//       icon: '🌱',
//       title: 'Sustainability Dashboard',
//       description: 'Track your water savings and earn carbon credits with every rental.',
//       badge: 'ECO',
//       color: '#94d82d',
//       action: () => alert('🌱 Sustainability Dashboard:\n\n• Track water savings\n• Earn carbon credits\n• See environmental impact\n• Get eco-badges\n\nCheck your Dashboard for details!')
//     }
//   ];

//   const handleNFCClick = () => {
//     alert('📱 NFC Tag Demo:\n\n• Scan NFC tag on garment\n• See life story\n• Water savings data\n• Authentication proof\n• Previous rentals count\n\nAvailable on premium items!');
//   };

//   const handleQRClick = () => {
//     alert('📱 QR Code Demo:\n\n• Scan QR on garment tag\n• 3 styling ways\n• Previous renters photos\n• Care instructions\n• Emergency support\n\nScan anytime for styling help!');
//   };

//   return (
//     <section className="features">
//       <div className="features-header">
//         <h2 className="features-title">
//           Luxury Features,
//           <span className="features-title-highlight"> Revolutionary Technology</span>
//         </h2>
//         <p className="features-subtitle">
//           We've combined cutting-edge tech with luxury fashion to create an experience that's
//           seamless, sustainable, and stunning.
//         </p>
//       </div>

//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div key={index} className="feature-card fade-in" onClick={feature.action}>
//             <div className="feature-icon" style={{ background: feature.color + '20' }}>
//               <span>{feature.icon}</span>
//             </div>
//             <div className="feature-content">
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//             <span className="feature-badge" style={{ background: feature.color }}>
//               {feature.badge}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="features-showcase">
//         <div className="showcase-item" onClick={handleNFCClick} style={{cursor: 'pointer'}}>
//           <div className="showcase-visual nfc-preview">
//             <div className="nfc-scan">
//               <span className="scan-line"></span>
//             </div>
//           </div>
//           <div className="showcase-content">
//             <h4>NFC Authentication</h4>
//             <p>Scan the NFC tag to see the garment's life story, water savings, and authenticity proof.</p>
//             <button className="showcase-btn">Tap to Scan</button>
//           </div>
//         </div>

//         <div className="showcase-item" onClick={handleQRClick} style={{cursor: 'pointer'}}>
//           <div className="showcase-visual qr-preview">
//             <div className="qr-code">📱</div>
//           </div>
//           <div className="showcase-content">
//             <h4>Smart QR Styling</h4>
//             <p>Scan the QR tag for 3 ways to style, see previous renters' photos, and get instant care instructions.</p>
//             <button className="showcase-btn">Scan QR Code</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

//-----3--------------
// components/Features.js - Enhanced
import React, { useState } from 'react';
import './Features.css';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: '🔍',
      title: 'Digital Twin Technology',
      description: 'Upload two photos and get a 3D body scan with heat maps showing exactly how garments will fit.',
      badge: 'NEW',
      color: '#9775fa',
      gradient: 'linear-gradient(135deg, #9775fa, #d0bfff)',
      stats: '98% Accuracy',
      action: () => alert('📸 Digital Twin Demo:\n\n✓ 98% fit accuracy\n✓ 200+ measurements\n✓ Real-time heat map\n✓ 3D visualization')
    },
    {
      icon: '🔄',
      title: 'Backup Size Guarantee',
      description: 'Order a backup size for just $5. Only pay for the one you wear, never be without options.',
      badge: '$5 ONLY',
      color: '#51cf66',
      gradient: 'linear-gradient(135deg, #51cf66, #8ce99a)',
      stats: '100% Satisfaction',
      action: () => alert('🔄 Backup Size:\n\n✓ Just $5 extra\n✓ Try both sizes\n✓ Return unused\n✓ Pay only for worn')
    },
    {
      icon: '👗',
      title: 'AR Virtual Mirror',
      description: 'See how fabrics drape on your body in real-time with our augmented reality try-on feature.',
      badge: 'AR',
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      stats: 'Real-time',
      action: () => alert('👗 AR Mirror:\n\n✓ Real-time draping\n✓ 50+ fabrics\n✓ Mix & match\n✓ Share looks')
    },
    {
      icon: '🤖',
      title: 'AI Personal Stylist',
      description: 'Sync your calendar and get personalized outfit suggestions for every event.',
      badge: 'AI',
      color: '#fcc419',
      gradient: 'linear-gradient(135deg, #fcc419, #ffe066)',
      stats: '24/7 Available',
      action: () => alert('🤖 AI Stylist:\n\n✓ Calendar sync\n✓ Weather aware\n✓ Style preferences\n✓ Instant suggestions')
    },
    {
      icon: '🏃',
      title: '911 Fashion Delivery',
      description: 'Emergency outfit delivery within 60 minutes in major cities. Perfect for last-minute events.',
      badge: '60 MIN',
      color: '#20c997',
      gradient: 'linear-gradient(135deg, #20c997, #38d9a9)',
      stats: '24/7 Service',
      action: () => alert('🏃 911 Delivery:\n\n✓ 60 min guarantee\n✓ 24/7 availability\n✓ Real-time tracking\n✓ Premium support')
    },
    {
      icon: '🌱',
      title: 'Sustainability Dashboard',
      description: 'Track your water savings and earn carbon credits with every rental.',
      badge: 'ECO',
      color: '#94d82d',
      gradient: 'linear-gradient(135deg, #94d82d, #b2f2bb)',
      stats: '10K+ Saved',
      action: () => alert('🌱 Impact:\n\n✓ 50L water per rental\n✓ Carbon credits\n✓ Eco badges\n✓ Tree planting')
    }
  ];

  return (
    <section className="features">
      <div className="features-header animate-fadeInUp">
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
          <div 
            key={index} 
            className={`feature-card animate-scaleIn ${hoveredFeature === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredFeature(index)}
            onMouseLeave={() => setHoveredFeature(null)}
            onClick={feature.action}
            style={{ '--gradient': feature.gradient }}
          >
            <div className="feature-icon" style={{ background: feature.color + '20' }}>
              <span className="feature-icon-emoji">{feature.icon}</span>
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="feature-stats">
              <span className="stat">{feature.stats}</span>
            </div>
            <span className="feature-badge" style={{ background: feature.color }}>
              {feature.badge}
            </span>
            <div className="feature-hover-effect"></div>
          </div>
        ))}
      </div>

      <div className="features-showcase">
        <div className="showcase-item glass" onClick={() => alert('📱 NFC Authentication:\n\n• Scan NFC tag\n• See garment history\n• Water savings data\n• Authentication proof')}>
          <div className="showcase-visual nfc-preview">
            <div className="nfc-scan">
              <span className="scan-line"></span>
            </div>
          </div>
          <div className="showcase-content">
            <h4>NFC Authentication</h4>
            <p>Scan the NFC tag to see the garment's life story, water savings, and authenticity proof.</p>
            <button className="showcase-btn">Tap to Scan</button>
          </div>
        </div>

        <div className="showcase-item glass" onClick={() => alert('📱 QR Styling:\n\n• 3 styling ways\n• Previous renters photos\n• Care instructions\n• Emergency support')}>
          <div className="showcase-visual qr-preview">
            <div className="qr-code">📱</div>
          </div>
          <div className="showcase-content">
            <h4>Smart QR Styling</h4>
            <p>Scan the QR tag for 3 ways to style, see previous renters' photos, and get instant care instructions.</p>
            <button className="showcase-btn">Scan QR Code</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;