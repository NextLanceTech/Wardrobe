import React, { useState } from 'react';
import './Wardrobe.css';

const Wardrobe = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showDigitalTwin, setShowDigitalTwin] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items', count: 156 },
    { id: 'evening', name: 'Evening Gowns', count: 45 },
    { id: 'corporate', name: 'Corporate', count: 32 },
    { id: 'ethnic', name: 'Ethnic Wear', count: 28 },
    { id: 'casual', name: 'Casual Luxury', count: 38 },
    { id: 'accessories', name: 'Accessories', count: 13 }
  ];

  const items = [
    {
      id: 1,
      name: 'Silk Evening Gown',
      brand: 'ÉLITE COUTURE',
      price: 89,
      category: 'evening',
      image: 'https://via.placeholder.com/300x400',
      sizes: ['XS', 'S', 'M', 'L'],
      fitScore: 98,
      rentalCount: 45,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Italian Wool Blazer',
      brand: 'THE BOARDROOM',
      price: 65,
      category: 'corporate',
      image: 'https://via.placeholder.com/300x400',
      sizes: ['S', 'M', 'L', 'XL'],
      fitScore: 95,
      rentalCount: 32,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Handwoven Saree',
      brand: 'WEAVE & DRAPE',
      price: 79,
      category: 'ethnic',
      image: 'https://via.placeholder.com/300x400',
      sizes: ['Free Size'],
      fitScore: 96,
      rentalCount: 28,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Sequined Party Dress',
      brand: 'VINTAGE VOGUE',
      price: 95,
      category: 'evening',
      image: 'https://via.placeholder.com/300x400',
      sizes: ['XS', 'S', 'M'],
      fitScore: 92,
      rentalCount: 56,
      rating: 4.7
    },
    {
      id: 5,
      name: 'Cashmere Sweater',
      brand: 'LUXE CASUAL',
      price: 45,
      category: 'casual',
      image: 'https://via.placeholder.com/300x400',
      sizes: ['S', 'M', 'L'],
      fitScore: 97,
      rentalCount: 23,
      rating: 4.8
    },
    {
      id: 6,
      name: 'Designer Clutch',
      brand: 'ACCESSOIRES',
      price: 35,
      category: 'accessories',
      image: 'https://via.placeholder.com/300x400',
      sizes: ['One Size'],
      fitScore: 100,
      rentalCount: 67,
      rating: 4.9
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="wardrobe-page">
      <div className="wardrobe-header">
        <h1>The Virtual Wardrobe</h1>
        <p>Explore our curated collection of luxury fashion</p>
      </div>

      <div className="wardrobe-controls">
        <div className="digital-twin-toggle">
          <button 
            className={`twin-btn ${showDigitalTwin ? 'active' : ''}`}
            onClick={() => setShowDigitalTwin(!showDigitalTwin)}
          >
            <span className="btn-icon">🔍</span>
            {showDigitalTwin ? 'Hide Digital Twin' : 'Show Digital Twin'}
          </button>
        </div>

        <div className="view-toggle">
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <span className="btn-icon">⊞</span>
            Grid
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <span className="btn-icon">≡</span>
            List
          </button>
        </div>
      </div>

      {showDigitalTwin && (
        <div className="digital-twin-panel">
          <div className="twin-preview">
            <h3>Your Digital Twin</h3>
            <div className="twin-visualization">
              <div className="twin-model">
                <div className="measurement-points">
                  <span className="measurement bust">34"</span>
                  <span className="measurement waist">26"</span>
                  <span className="measurement hips">36"</span>
                </div>
                <div className="fit-heatmap">
                  <div className="heatmap-zone zone1">Perfect Fit Zone</div>
                  <div className="heatmap-zone zone2">Consider Backup</div>
                </div>
              </div>
            </div>
            <div className="twin-stats">
              <div className="twin-stat">
                <span className="stat-value">98%</span>
                <span className="stat-label">Overall Fit Score</span>
              </div>
              <div className="twin-stat">
                <span className="stat-value">45</span>
                <span className="stat-label">Perfect Fit Items</span>
              </div>
              <div className="twin-stat">
                <span className="stat-value">3</span>
                <span className="stat-label">Need Backup</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="wardrobe-container">
        <aside className="wardrobe-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li 
                key={category.id}
                className={selectedCategory === category.id ? 'active' : ''}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </li>
            ))}
          </ul>

          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="price-range">
              <input type="range" min="0" max="200" defaultValue="100" />
              <div className="price-labels">
                <span>$0</span>
                <span>$200+</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h4>Sizes</h4>
            <div className="size-filters">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <label key={size} className="size-checkbox">
                  <input type="checkbox" />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Fit Score</h4>
            <div className="fit-filters">
              <label className="fit-checkbox">
                <input type="checkbox" />
                <span>90%+ (Perfect Fit)</span>
              </label>
              <label className="fit-checkbox">
                <input type="checkbox" />
                <span>80-89% (Good Fit)</span>
              </label>
              <label className="fit-checkbox">
                <input type="checkbox" />
                <span>Show Backup Needed</span>
              </label>
            </div>
          </div>
        </aside>

        <main className="wardrobe-main">
          <div className={`items-grid ${viewMode}`}>
            {filteredItems.map(item => (
              <div key={item.id} className={`item-card ${viewMode}`}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  <span className="item-fit-badge">
                    Fit Score: {item.fitScore}%
                  </span>
                  {item.fitScore < 95 && (
                    <span className="backup-badge">Backup Available</span>
                  )}
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-brand">{item.brand}</p>
                  <div className="item-meta">
                    <span className="item-price">${item.price}/day</span>
                    <span className="item-rating">★ {item.rating}</span>
                  </div>
                  <div className="item-sizes">
                    {item.sizes.map(size => (
                      <span key={size} className="size-tag">{size}</span>
                    ))}
                  </div>
                  <div className="item-actions">
                    <button className="try-on-btn">👁️ Try On</button>
                    <button className="rent-btn">Rent Now</button>
                  </div>
                  <div className="item-stats">
                    <span className="rental-count">📅 {item.rentalCount} rentals</span>
                    <span className="savings">💧 50L saved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wardrobe;