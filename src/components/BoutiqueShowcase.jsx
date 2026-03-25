// // components/BoutiqueShowcase.js
// import React from 'react';
// import './BoutiqueShowcase.css';

// const BoutiqueShowcase = () => {
//   const boutiques = [
//     {
//       name: 'ÉLITE COUTURE',
//       category: 'Luxury Evening',
//       image: 'https://via.placeholder.com/300x400',
//       items: 45,
//       rating: 4.9,
//       badge: 'Premium'
//     },
//     {
//       name: 'WEAVE & DRAPE',
//       category: 'Ethnic Wear',
//       image: 'https://via.placeholder.com/300x400',
//       items: 32,
//       rating: 4.8,
//       badge: 'Handloom'
//     },
//     {
//       name: 'THE BOARDROOM',
//       category: 'Corporate',
//       image: 'https://via.placeholder.com/300x400',
//       items: 28,
//       rating: 4.7,
//       badge: 'Power Suits'
//     },
//     {
//       name: 'VINTAGE VOGUE',
//       category: 'Party Wear',
//       image: 'https://via.placeholder.com/300x400',
//       items: 38,
//       rating: 4.9,
//       badge: 'Statement'
//     }
//   ];

//   return (
//     <section className="boutique-showcase">
//       <div className="boutique-header">
//         <h2 className="boutique-title">
//           Partner Boutiques,
//           <span className="boutique-title-highlight"> Curated Luxury</span>
//         </h2>
//         <p className="boutique-subtitle">
//           We partner with the finest boutiques to bring you an exclusive collection of luxury fashion.
//           Each piece is authenticated and professionally cleaned.
//         </p>
//       </div>

//       <div className="boutique-grid">
//         {boutiques.map((boutique, index) => (
//           <div key={index} className="boutique-card fade-in">
//             <div className="boutique-image">
//               <img src={boutique.image} alt={boutique.name} />
//               <span className="boutique-badge">{boutique.badge}</span>
//             </div>
//             <div className="boutique-info">
//               <h3>{boutique.name}</h3>
//               <p>{boutique.category}</p>
//               <div className="boutique-stats">
//                 <span className="boutique-items">{boutique.items} items</span>
//                 <span className="boutique-rating">★ {boutique.rating}</span>
//               </div>
//               <button className="boutique-btn">Explore Collection</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="boutique-cta">
//         <div className="cta-card">
//           <h3>Own a Boutique?</h3>
//           <p>Join our platform and turn your inventory into passive income. 0% commission for first 3 months.</p>
//           <button className="btn btn-primary">Partner With Us</button>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default BoutiqueShowcase;


// //----------------2------------
// // components/BoutiqueShowcase.js
// import React from 'react';
// import './BoutiqueShowcase.css';

// const BoutiqueShowcase = () => {
//   const boutiques = [
//     {
//       name: 'ÉLITE COUTURE',
//       category: 'Luxury Evening',
//       image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop',
//       items: 45,
//       rating: 4.9,
//       badge: 'Premium'
//     },
//     {
//       name: 'WEAVE & DRAPE',
//       category: 'Ethnic Wear',
//       image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop',
//       items: 32,
//       rating: 4.8,
//       badge: 'Handloom'
//     },
//     {
//       name: 'THE BOARDROOM',
//       category: 'Corporate',
//       image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
//       items: 28,
//       rating: 4.7,
//       badge: 'Power Suits'
//     },
//     {
//       name: 'VINTAGE VOGUE',
//       category: 'Party Wear',
//       image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
//       items: 38,
//       rating: 4.9,
//       badge: 'Statement'
//     }
//   ];

//   return (
//     <section className="boutique-showcase">
//       <div className="boutique-header">
//         <h2 className="boutique-title">
//           Partner Boutiques,
//           <span className="boutique-title-highlight"> Curated Luxury</span>
//         </h2>
//         <p className="boutique-subtitle">
//           We partner with the finest boutiques to bring you an exclusive collection of luxury fashion.
//           Each piece is authenticated and professionally cleaned.
//         </p>
//       </div>

//       <div className="boutique-grid">
//         {boutiques.map((boutique, index) => (
//           <div key={index} className="boutique-card fade-in">
//             <div className="boutique-image">
//               <img src={boutique.image} alt={boutique.name} />
//               <span className="boutique-badge">{boutique.badge}</span>
//             </div>
//             <div className="boutique-info">
//               <h3>{boutique.name}</h3>
//               <p>{boutique.category}</p>
//               <div className="boutique-stats">
//                 <span className="boutique-items">{boutique.items} items</span>
//                 <span className="boutique-rating">★ {boutique.rating}</span>
//               </div>
//               <button className="boutique-btn">Explore Collection</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="boutique-cta">
//         <div className="cta-card">
//           <h3>Own a Boutique?</h3>
//           <p>Join our platform and turn your inventory into passive income. 0% commission for first 3 months.</p>
//           <button className="btn btn-primary">Partner With Us</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BoutiqueShowcase;

//----------------3------------
// components/BoutiqueShowcase.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoutiqueShowcase.css';

const BoutiqueShowcase = () => {
  const navigate = useNavigate();

  const boutiques = [
    {
      name: 'ÉLITE COUTURE',
      category: 'Luxury Evening',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop',
      items: 45,
      rating: 4.9,
      badge: 'Premium'
    },
    {
      name: 'WEAVE & DRAPE',
      category: 'Ethnic Wear',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop',
      items: 32,
      rating: 4.8,
      badge: 'Handloom'
    },
    {
      name: 'THE BOARDROOM',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
      items: 28,
      rating: 4.7,
      badge: 'Power Suits'
    },
    {
      name: 'VINTAGE VOGUE',
      category: 'Party Wear',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      items: 38,
      rating: 4.9,
      badge: 'Statement'
    }
  ];

  const handleExploreCollection = (boutiqueName) => {
    navigate('/boutiques');
    setTimeout(() => {
      alert(`✨ Exploring ${boutiqueName}\n\n• 45+ luxury items\n• Free shipping\n• 30-day returns\n• Expert styling advice\n\nReady to rent?`);
    }, 100);
  };

  const handlePartnerWithUs = () => {
    alert('🤝 Partner With The Luxe Wardrobe\n\nBenefits:\n• 0% commission for first 3 months\n• Access to 50K+ customers\n• Free cataloging service\n• Professional cleaning network\n• Marketing support\n\nContact: partners@theluxewardrobe.com');
  };

  return (
    <section className="boutique-showcase">
      <div className="boutique-header">
        <h2 className="boutique-title">
          Partner Boutiques,
          <span className="boutique-title-highlight"> Curated Luxury</span>
        </h2>
        <p className="boutique-subtitle">
          We partner with the finest boutiques to bring you an exclusive collection of luxury fashion.
          Each piece is authenticated and professionally cleaned.
        </p>
      </div>

      <div className="boutique-grid">
        {boutiques.map((boutique, index) => (
          <div key={index} className="boutique-card fade-in">
            <div className="boutique-image">
              <img src={boutique.image} alt={boutique.name} />
              <span className="boutique-badge">{boutique.badge}</span>
            </div>
            <div className="boutique-info">
              <h3>{boutique.name}</h3>
              <p>{boutique.category}</p>
              <div className="boutique-stats">
                <span className="boutique-items">{boutique.items} items</span>
                <span className="boutique-rating">★ {boutique.rating}</span>
              </div>
              <button 
                className="boutique-btn"
                onClick={() => handleExploreCollection(boutique.name)}
              >
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="boutique-cta">
        <div className="cta-card">
          <h3>Own a Boutique?</h3>
          <p>Join our platform and turn your inventory into passive income. 0% commission for first 3 months.</p>
          <button className="btn btn-primary" onClick={handlePartnerWithUs}>
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoutiqueShowcase;