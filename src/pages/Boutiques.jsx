// import React, { useState } from 'react';
// import './Boutiques.css';

// const Boutiques = () => {
//   const [selectedBoutique, setSelectedBoutique] = useState(null);

//   const boutiques = [
//     {
//       id: 1,
//       name: 'ÉLITE COUTURE',
//       category: 'Luxury Evening',
//       image: 'https://via.placeholder.com/400x300',
//       logo: 'https://via.placeholder.com/100',
//       coverImage: 'https://via.placeholder.com/1200x400',
//       location: 'Beverly Hills, CA',
//       rating: 4.9,
//       items: 45,
//       followers: 2300,
//       description: 'High-end evening wear and red carpet gowns from top designers.',
//       collections: [
//         { name: 'Spring Gala', items: 12 },
//         { name: 'Black Tie', items: 18 },
//         { name: 'Cocktail', items: 15 }
//       ],
//       featured: [
//         {
//           id: 101,
//           name: 'Silk Chiffon Gown',
//           price: 89,
//           image: 'https://via.placeholder.com/200x300'
//         },
//         {
//           id: 102,
//           name: 'Embroidered Ball Gown',
//           price: 120,
//           image: 'https://via.placeholder.com/200x300'
//         }
//       ]
//     },
//     {
//       id: 2,
//       name: 'THE BOARDROOM',
//       category: 'Corporate',
//       image: 'https://via.placeholder.com/400x300',
//       logo: 'https://via.placeholder.com/100',
//       coverImage: 'https://via.placeholder.com/1200x400',
//       location: 'New York, NY',
//       rating: 4.8,
//       items: 32,
//       followers: 1800,
//       description: 'Power suits and corporate wear for the modern professional.',
//       collections: [
//         { name: 'Executive Suite', items: 15 },
//         { name: 'Power Blazers', items: 10 },
//         { name: 'Silk Blouses', items: 7 }
//       ],
//       featured: [
//         {
//           id: 201,
//           name: 'Italian Wool Blazer',
//           price: 65,
//           image: 'https://via.placeholder.com/200x300'
//         },
//         {
//           id: 202,
//           name: 'Tailored Trousers',
//           price: 45,
//           image: 'https://via.placeholder.com/200x300'
//         }
//       ]
//     },
//     {
//       id: 3,
//       name: 'WEAVE & DRAPE',
//       category: 'Ethnic Wear',
//       image: 'https://via.placeholder.com/400x300',
//       logo: 'https://via.placeholder.com/100',
//       coverImage: 'https://via.placeholder.com/1200x400',
//       location: 'Mumbai, India',
//       rating: 4.9,
//       items: 38,
//       followers: 3200,
//       description: 'Traditional and fusion ethnic wear with handcrafted details.',
//       collections: [
//         { name: 'Bridal Collection', items: 15 },
//         { name: 'Festival Wear', items: 12 },
//         { name: 'Indo-Western', items: 11 }
//       ],
//       featured: [
//         {
//           id: 301,
//           name: 'Handwoven Saree',
//           price: 79,
//           image: 'https://via.placeholder.com/200x300'
//         },
//         {
//           id: 302,
//           name: 'Embroidered Lehenga',
//           price: 150,
//           image: 'https://via.placeholder.com/200x300'
//         }
//       ]
//     },
//     {
//       id: 4,
//       name: 'VINTAGE VOGUE',
//       category: 'Party Wear',
//       image: 'https://via.placeholder.com/400x300',
//       logo: 'https://via.placeholder.com/100',
//       coverImage: 'https://via.placeholder.com/1200x400',
//       location: 'London, UK',
//       rating: 4.8,
//       items: 28,
//       followers: 1500,
//       description: 'Vintage-inspired party wear and statement pieces.',
//       collections: [
//         { name: '1920s Glam', items: 8 },
//         { name: 'Disco Fever', items: 10 },
//         { name: 'Modern Vintage', items: 10 }
//       ],
//       featured: [
//         {
//           id: 401,
//           name: 'Sequin Mini Dress',
//           price: 75,
//           image: 'https://via.placeholder.com/200x300'
//         },
//         {
//           id: 402,
//           name: 'Velvet Blazer',
//           price: 60,
//           image: 'https://via.placeholder.com/200x300'
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="boutiques-page">
//       <div className="boutiques-header">
//         <h1>Partner Boutiques</h1>
//         <p>Discover luxury fashion from the world's finest boutiques</p>
//       </div>

//       {!selectedBoutique ? (
//         <div className="boutiques-grid">
//           {boutiques.map(boutique => (
//             <div 
//               key={boutique.id} 
//               className="boutique-card"
//               onClick={() => setSelectedBoutique(boutique)}
//             >
//               <div className="boutique-card-image">
//                 <img src={boutique.image} alt={boutique.name} />
//                 <div className="boutique-rating">
//                   <span>★ {boutique.rating}</span>
//                 </div>
//               </div>
//               <div className="boutique-card-content">
//                 <div className="boutique-logo">
//                   <img src={boutique.logo} alt={boutique.name} />
//                 </div>
//                 <h3>{boutique.name}</h3>
//                 <p className="boutique-category">{boutique.category}</p>
//                 <p className="boutique-location">{boutique.location}</p>
//                 <div className="boutique-stats">
//                   <span className="stat">{boutique.items} items</span>
//                   <span className="stat">{boutique.followers} followers</span>
//                 </div>
//                 <button className="explore-btn">Explore Boutique</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="boutique-detail">
//           <button className="back-btn" onClick={() => setSelectedBoutique(null)}>
//             ← Back to Boutiques
//           </button>

//           <div className="boutique-cover">
//             <img src={selectedBoutique.coverImage} alt={selectedBoutique.name} />
//             <div className="cover-overlay">
//               <div className="boutique-logo-large">
//                 <img src={selectedBoutique.logo} alt={selectedBoutique.name} />
//               </div>
//               <h2>{selectedBoutique.name}</h2>
//               <p>{selectedBoutique.location}</p>
//             </div>
//           </div>

//           <div className="boutique-info-section">
//             <div className="boutique-description">
//               <h3>About</h3>
//               <p>{selectedBoutique.description}</p>
//             </div>

//             <div className="boutique-stats-large">
//               <div className="stat-item">
//                 <span className="stat-value">{selectedBoutique.items}</span>
//                 <span className="stat-label">Items</span>
//               </div>
//               <div className="stat-item">
//                 <span className="stat-value">{selectedBoutique.followers}</span>
//                 <span className="stat-label">Followers</span>
//               </div>
//               <div className="stat-item">
//                 <span className="stat-value">{selectedBoutique.rating}</span>
//                 <span className="stat-label">Rating</span>
//               </div>
//             </div>

//             <div className="collections-section">
//               <h3>Collections</h3>
//               <div className="collections-grid">
//                 {selectedBoutique.collections.map(collection => (
//                   <div key={collection.name} className="collection-card">
//                     <h4>{collection.name}</h4>
//                     <p>{collection.items} items</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="featured-section">
//               <h3>Featured Items</h3>
//               <div className="featured-grid">
//                 {selectedBoutique.featured.map(item => (
//                   <div key={item.id} className="featured-item">
//                     <img src={item.image} alt={item.name} />
//                     <div className="featured-info">
//                       <h4>{item.name}</h4>
//                       <p className="featured-price">${item.price}/day</p>
//                       <button className="rent-btn">Rent Now</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="boutique-actions">
//               <button className="follow-btn">Follow Boutique</button>
//               <button className="contact-btn">Contact Partner</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Boutiques;

//---------2----------
// pages/Boutiques.js
import React, { useState } from 'react';
import './Boutiques.css';

const Boutiques = () => {
  const [selectedBoutique, setSelectedBoutique] = useState(null);
  const [followedBoutiques, setFollowedBoutiques] = useState([]);

  const boutiques = [
    {
      id: 1,
      name: 'ÉLITE COUTURE',
      category: 'Luxury Evening',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop',
      location: 'Beverly Hills, CA',
      rating: 4.9,
      items: 45,
      followers: 2300,
      description: 'High-end evening wear and red carpet gowns from top designers.',
      collections: [
        { name: 'Spring Gala', items: 12 },
        { name: 'Black Tie', items: 18 },
        { name: 'Cocktail', items: 15 }
      ],
      featured: [
        {
          id: 101,
          name: 'Silk Chiffon Gown',
          price: 89,
          image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop'
        },
        {
          id: 102,
          name: 'Embroidered Ball Gown',
          price: 120,
          image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop'
        }
      ]
    },
    {
      id: 2,
      name: 'THE BOARDROOM',
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=400&fit=crop',
      location: 'New York, NY',
      rating: 4.8,
      items: 32,
      followers: 1800,
      description: 'Power suits and corporate wear for the modern professional.',
      collections: [
        { name: 'Executive Suite', items: 15 },
        { name: 'Power Blazers', items: 10 },
        { name: 'Silk Blouses', items: 7 }
      ],
      featured: [
        {
          id: 201,
          name: 'Italian Wool Blazer',
          price: 65,
          image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop'
        },
        {
          id: 202,
          name: 'Tailored Trousers',
          price: 45,
          image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop'
        }
      ]
    },
    {
      id: 3,
      name: 'WEAVE & DRAPE',
      category: 'Ethnic Wear',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&h=400&fit=crop',
      location: 'Mumbai, India',
      rating: 4.9,
      items: 38,
      followers: 3200,
      description: 'Traditional and fusion ethnic wear with handcrafted details.',
      collections: [
        { name: 'Bridal Collection', items: 15 },
        { name: 'Festival Wear', items: 12 },
        { name: 'Indo-Western', items: 11 }
      ],
      featured: [
        {
          id: 301,
          name: 'Handwoven Saree',
          price: 79,
          image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=400&fit=crop'
        },
        {
          id: 302,
          name: 'Embroidered Lehenga',
          price: 150,
          image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=400&fit=crop'
        }
      ]
    },
    {
      id: 4,
      name: 'VINTAGE VOGUE',
      category: 'Party Wear',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop',
      logo: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop',
      coverImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&h=400&fit=crop',
      location: 'London, UK',
      rating: 4.8,
      items: 28,
      followers: 1500,
      description: 'Vintage-inspired party wear and statement pieces.',
      collections: [
        { name: '1920s Glam', items: 8 },
        { name: 'Disco Fever', items: 10 },
        { name: 'Modern Vintage', items: 10 }
      ],
      featured: [
        {
          id: 401,
          name: 'Sequin Mini Dress',
          price: 75,
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop'
        },
        {
          id: 402,
          name: 'Velvet Blazer',
          price: 60,
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop'
        }
      ]
    }
  ];

  const handleFollowBoutique = (boutiqueId, boutiqueName) => {
    if (followedBoutiques.includes(boutiqueId)) {
      setFollowedBoutiques(followedBoutiques.filter(id => id !== boutiqueId));
      alert(`👋 Unfollowed ${boutiqueName}`);
    } else {
      setFollowedBoutiques([...followedBoutiques, boutiqueId]);
      alert(`✅ Following ${boutiqueName}!\n\nYou'll receive updates on new collections and exclusive offers.`);
    }
  };

  const handleContactPartner = (boutiqueName) => {
    alert(`📧 Contact ${boutiqueName}\n\nEmail: partners@theluxewardrobe.com\nPhone: 1-800-FASHION\n\nOr message through the app for quick response.`);
  };

  const handleRentItem = (item, boutiqueName) => {
    alert(`✨ Renting: ${item.name}\n\nBoutique: ${boutiqueName}\nPrice: $${item.price}/day\nFit Score: 96%\nBackup size: +$5\n\nAdd to cart and checkout?`);
  };

  const handleExploreCollection = (boutique) => {
    alert(`✨ Exploring ${boutique.name}\n\n• ${boutique.items} luxury items\n• ${boutique.collections.length} collections\n• Rating: ${boutique.rating}★\n• ${boutique.followers} followers\n\nBrowse the full collection now!`);
  };

  return (
    <div className="boutiques-page">
      <div className="boutiques-header">
        <h1>Partner Boutiques</h1>
        <p>Discover luxury fashion from the world's finest boutiques</p>
      </div>

      {!selectedBoutique ? (
        <div className="boutiques-grid">
          {boutiques.map(boutique => (
            <div 
              key={boutique.id} 
              className="boutique-card"
              onClick={() => setSelectedBoutique(boutique)}
            >
              <div className="boutique-card-image">
                <img src={boutique.image} alt={boutique.name} />
                <div className="boutique-rating">
                  <span>★ {boutique.rating}</span>
                </div>
              </div>
              <div className="boutique-card-content">
                <div className="boutique-logo">
                  <img src={boutique.logo} alt={boutique.name} />
                </div>
                <h3>{boutique.name}</h3>
                <p className="boutique-category">{boutique.category}</p>
                <p className="boutique-location">{boutique.location}</p>
                <div className="boutique-stats">
                  <span className="stat">{boutique.items} items</span>
                  <span className="stat">{boutique.followers} followers</span>
                </div>
                <button className="explore-btn" onClick={(e) => {
                  e.stopPropagation();
                  handleExploreCollection(boutique);
                }}>
                  Explore Boutique
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="boutique-detail">
          <button className="back-btn" onClick={() => setSelectedBoutique(null)}>
            ← Back to Boutiques
          </button>

          <div className="boutique-cover">
            <img src={selectedBoutique.coverImage} alt={selectedBoutique.name} />
            <div className="cover-overlay">
              <div className="boutique-logo-large">
                <img src={selectedBoutique.logo} alt={selectedBoutique.name} />
              </div>
              <h2>{selectedBoutique.name}</h2>
              <p>{selectedBoutique.location}</p>
            </div>
          </div>

          <div className="boutique-info-section">
            <div className="boutique-description">
              <h3>About</h3>
              <p>{selectedBoutique.description}</p>
            </div>

            <div className="boutique-stats-large">
              <div className="stat-item">
                <span className="stat-value">{selectedBoutique.items}</span>
                <span className="stat-label">Items</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{selectedBoutique.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{selectedBoutique.rating}</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>

            <div className="collections-section">
              <h3>Collections</h3>
              <div className="collections-grid">
                {selectedBoutique.collections.map(collection => (
                  <div key={collection.name} className="collection-card" onClick={() => alert(`📁 ${collection.name}\n\n${collection.items} items available\nExplore now!`)}>
                    <h4>{collection.name}</h4>
                    <p>{collection.items} items</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="featured-section">
              <h3>Featured Items</h3>
              <div className="featured-grid">
                {selectedBoutique.featured.map(item => (
                  <div key={item.id} className="featured-item">
                    <img src={item.image} alt={item.name} />
                    <div className="featured-info">
                      <h4>{item.name}</h4>
                      <p className="featured-price">${item.price}/day</p>
                      <button className="rent-btn" onClick={() => handleRentItem(item, selectedBoutique.name)}>
                        Rent Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="boutique-actions">
              <button 
                className={`follow-btn ${followedBoutiques.includes(selectedBoutique.id) ? 'followed' : ''}`}
                onClick={() => handleFollowBoutique(selectedBoutique.id, selectedBoutique.name)}
              >
                {followedBoutiques.includes(selectedBoutique.id) ? 'Following ✓' : 'Follow Boutique'}
              </button>
              <button className="contact-btn" onClick={() => handleContactPartner(selectedBoutique.name)}>
                Contact Partner
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Boutiques;