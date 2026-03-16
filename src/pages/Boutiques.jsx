import React, { useState } from 'react';
import './Boutiques.css';

const Boutiques = () => {
  const [selectedBoutique, setSelectedBoutique] = useState(null);

  const boutiques = [
    {
      id: 1,
      name: 'ÉLITE COUTURE',
      category: 'Luxury Evening',
      image: 'https://via.placeholder.com/400x300',
      logo: 'https://via.placeholder.com/100',
      coverImage: 'https://via.placeholder.com/1200x400',
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
          image: 'https://via.placeholder.com/200x300'
        },
        {
          id: 102,
          name: 'Embroidered Ball Gown',
          price: 120,
          image: 'https://via.placeholder.com/200x300'
        }
      ]
    },
    {
      id: 2,
      name: 'THE BOARDROOM',
      category: 'Corporate',
      image: 'https://via.placeholder.com/400x300',
      logo: 'https://via.placeholder.com/100',
      coverImage: 'https://via.placeholder.com/1200x400',
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
          image: 'https://via.placeholder.com/200x300'
        },
        {
          id: 202,
          name: 'Tailored Trousers',
          price: 45,
          image: 'https://via.placeholder.com/200x300'
        }
      ]
    },
    {
      id: 3,
      name: 'WEAVE & DRAPE',
      category: 'Ethnic Wear',
      image: 'https://via.placeholder.com/400x300',
      logo: 'https://via.placeholder.com/100',
      coverImage: 'https://via.placeholder.com/1200x400',
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
          image: 'https://via.placeholder.com/200x300'
        },
        {
          id: 302,
          name: 'Embroidered Lehenga',
          price: 150,
          image: 'https://via.placeholder.com/200x300'
        }
      ]
    },
    {
      id: 4,
      name: 'VINTAGE VOGUE',
      category: 'Party Wear',
      image: 'https://via.placeholder.com/400x300',
      logo: 'https://via.placeholder.com/100',
      coverImage: 'https://via.placeholder.com/1200x400',
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
          image: 'https://via.placeholder.com/200x300'
        },
        {
          id: 402,
          name: 'Velvet Blazer',
          price: 60,
          image: 'https://via.placeholder.com/200x300'
        }
      ]
    }
  ];

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
                <button className="explore-btn">Explore Boutique</button>
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
                  <div key={collection.name} className="collection-card">
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
                      <button className="rent-btn">Rent Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="boutique-actions">
              <button className="follow-btn">Follow Boutique</button>
              <button className="contact-btn">Contact Partner</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Boutiques;