// import React, { useState } from 'react';
// import './Wardrobe.css';

// const Wardrobe = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [viewMode, setViewMode] = useState('grid');
//   const [showDigitalTwin, setShowDigitalTwin] = useState(false);

//   const categories = [
//     { id: 'all', name: 'All Items', count: 156 },
//     { id: 'evening', name: 'Evening Gowns', count: 45 },
//     { id: 'corporate', name: 'Corporate', count: 32 },
//     { id: 'ethnic', name: 'Ethnic Wear', count: 28 },
//     { id: 'casual', name: 'Casual Luxury', count: 38 },
//     { id: 'accessories', name: 'Accessories', count: 13 }
//   ];

//   const items = [
//     {
//       id: 1,
//       name: 'Silk Evening Gown',
//       brand: 'ÉLITE COUTURE',
//       price: 89,
//       category: 'evening',
//       image: 'https://via.placeholder.com/300x400',
//       sizes: ['XS', 'S', 'M', 'L'],
//       fitScore: 98,
//       rentalCount: 45,
//       rating: 4.9
//     },
//     {
//       id: 2,
//       name: 'Italian Wool Blazer',
//       brand: 'THE BOARDROOM',
//       price: 65,
//       category: 'corporate',
//       image: 'https://via.placeholder.com/300x400',
//       sizes: ['S', 'M', 'L', 'XL'],
//       fitScore: 95,
//       rentalCount: 32,
//       rating: 4.8
//     },
//     {
//       id: 3,
//       name: 'Handwoven Saree',
//       brand: 'WEAVE & DRAPE',
//       price: 79,
//       category: 'ethnic',
//       image: 'https://via.placeholder.com/300x400',
//       sizes: ['Free Size'],
//       fitScore: 96,
//       rentalCount: 28,
//       rating: 4.9
//     },
//     {
//       id: 4,
//       name: 'Sequined Party Dress',
//       brand: 'VINTAGE VOGUE',
//       price: 95,
//       category: 'evening',
//       image: 'https://via.placeholder.com/300x400',
//       sizes: ['XS', 'S', 'M'],
//       fitScore: 92,
//       rentalCount: 56,
//       rating: 4.7
//     },
//     {
//       id: 5,
//       name: 'Cashmere Sweater',
//       brand: 'LUXE CASUAL',
//       price: 45,
//       category: 'casual',
//       image: 'https://via.placeholder.com/300x400',
//       sizes: ['S', 'M', 'L'],
//       fitScore: 97,
//       rentalCount: 23,
//       rating: 4.8
//     },
//     {
//       id: 6,
//       name: 'Designer Clutch',
//       brand: 'ACCESSOIRES',
//       price: 35,
//       category: 'accessories',
//       image: 'https://via.placeholder.com/300x400',
//       sizes: ['One Size'],
//       fitScore: 100,
//       rentalCount: 67,
//       rating: 4.9
//     }
//   ];

//   const filteredItems = selectedCategory === 'all' 
//     ? items 
//     : items.filter(item => item.category === selectedCategory);

//   return (
//     <div className="wardrobe-page">
//       <div className="wardrobe-header">
//         <h1>The Virtual Wardrobe</h1>
//         <p>Explore our curated collection of luxury fashion</p>
//       </div>

//       <div className="wardrobe-controls">
//         <div className="digital-twin-toggle">
//           <button 
//             className={`twin-btn ${showDigitalTwin ? 'active' : ''}`}
//             onClick={() => setShowDigitalTwin(!showDigitalTwin)}
//           >
//             <span className="btn-icon">🔍</span>
//             {showDigitalTwin ? 'Hide Digital Twin' : 'Show Digital Twin'}
//           </button>
//         </div>

//         <div className="view-toggle">
//           <button 
//             className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
//             onClick={() => setViewMode('grid')}
//           >
//             <span className="btn-icon">⊞</span>
//             Grid
//           </button>
//           <button 
//             className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
//             onClick={() => setViewMode('list')}
//           >
//             <span className="btn-icon">≡</span>
//             List
//           </button>
//         </div>
//       </div>

//       {showDigitalTwin && (
//         <div className="digital-twin-panel">
//           <div className="twin-preview">
//             <h3>Your Digital Twin</h3>
//             <div className="twin-visualization">
//               <div className="twin-model">
//                 <div className="measurement-points">
//                   <span className="measurement bust">34"</span>
//                   <span className="measurement waist">26"</span>
//                   <span className="measurement hips">36"</span>
//                 </div>
//                 <div className="fit-heatmap">
//                   <div className="heatmap-zone zone1">Perfect Fit Zone</div>
//                   <div className="heatmap-zone zone2">Consider Backup</div>
//                 </div>
//               </div>
//             </div>
//             <div className="twin-stats">
//               <div className="twin-stat">
//                 <span className="stat-value">98%</span>
//                 <span className="stat-label">Overall Fit Score</span>
//               </div>
//               <div className="twin-stat">
//                 <span className="stat-value">45</span>
//                 <span className="stat-label">Perfect Fit Items</span>
//               </div>
//               <div className="twin-stat">
//                 <span className="stat-value">3</span>
//                 <span className="stat-label">Need Backup</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="wardrobe-container">
//         <aside className="wardrobe-sidebar">
//           <h3>Categories</h3>
//           <ul className="category-list">
//             {categories.map(category => (
//               <li 
//                 key={category.id}
//                 className={selectedCategory === category.id ? 'active' : ''}
//                 onClick={() => setSelectedCategory(category.id)}
//               >
//                 <span className="category-name">{category.name}</span>
//                 <span className="category-count">{category.count}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="filter-section">
//             <h4>Price Range</h4>
//             <div className="price-range">
//               <input type="range" min="0" max="200" defaultValue="100" />
//               <div className="price-labels">
//                 <span>$0</span>
//                 <span>$200+</span>
//               </div>
//             </div>
//           </div>

//           <div className="filter-section">
//             <h4>Sizes</h4>
//             <div className="size-filters">
//               {['XS', 'S', 'M', 'L', 'XL'].map(size => (
//                 <label key={size} className="size-checkbox">
//                   <input type="checkbox" />
//                   <span>{size}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="filter-section">
//             <h4>Fit Score</h4>
//             <div className="fit-filters">
//               <label className="fit-checkbox">
//                 <input type="checkbox" />
//                 <span>90%+ (Perfect Fit)</span>
//               </label>
//               <label className="fit-checkbox">
//                 <input type="checkbox" />
//                 <span>80-89% (Good Fit)</span>
//               </label>
//               <label className="fit-checkbox">
//                 <input type="checkbox" />
//                 <span>Show Backup Needed</span>
//               </label>
//             </div>
//           </div>
//         </aside>

//         <main className="wardrobe-main">
//           <div className={`items-grid ${viewMode}`}>
//             {filteredItems.map(item => (
//               <div key={item.id} className={`item-card ${viewMode}`}>
//                 <div className="item-image">
//                   <img src={item.image} alt={item.name} />
//                   <span className="item-fit-badge">
//                     Fit Score: {item.fitScore}%
//                   </span>
//                   {item.fitScore < 95 && (
//                     <span className="backup-badge">Backup Available</span>
//                   )}
//                 </div>
//                 <div className="item-details">
//                   <h3>{item.name}</h3>
//                   <p className="item-brand">{item.brand}</p>
//                   <div className="item-meta">
//                     <span className="item-price">${item.price}/day</span>
//                     <span className="item-rating">★ {item.rating}</span>
//                   </div>
//                   <div className="item-sizes">
//                     {item.sizes.map(size => (
//                       <span key={size} className="size-tag">{size}</span>
//                     ))}
//                   </div>
//                   <div className="item-actions">
//                     <button className="try-on-btn">👁️ Try On</button>
//                     <button className="rent-btn">Rent Now</button>
//                   </div>
//                   <div className="item-stats">
//                     <span className="rental-count">📅 {item.rentalCount} rentals</span>
//                     <span className="savings">💧 50L saved</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Wardrobe;


//--------------2------------------
// pages/Wardrobe.js
// import React, { useState } from 'react';
// import './Wardrobe.css';

// const Wardrobe = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [viewMode, setViewMode] = useState('grid');
//   const [showDigitalTwin, setShowDigitalTwin] = useState(false);

//   const categories = [
//     { id: 'all', name: 'All Items', count: 156 },
//     { id: 'evening', name: 'Evening Gowns', count: 45 },
//     { id: 'corporate', name: 'Corporate', count: 32 },
//     { id: 'ethnic', name: 'Ethnic Wear', count: 28 },
//     { id: 'casual', name: 'Casual Luxury', count: 38 },
//     { id: 'accessories', name: 'Accessories', count: 13 }
//   ];

//   const items = [
//     {
//       id: 1,
//       name: 'Silk Evening Gown',
//       brand: 'ÉLITE COUTURE',
//       price: 89,
//       category: 'evening',
//       image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop',
//       sizes: ['XS', 'S', 'M', 'L'],
//       fitScore: 98,
//       rentalCount: 45,
//       rating: 4.9
//     },
//     {
//       id: 2,
//       name: 'Italian Wool Blazer',
//       brand: 'THE BOARDROOM',
//       price: 65,
//       category: 'corporate',
//       image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
//       sizes: ['S', 'M', 'L', 'XL'],
//       fitScore: 95,
//       rentalCount: 32,
//       rating: 4.8
//     },
//     {
//       id: 3,
//       name: 'Handwoven Saree',
//       brand: 'WEAVE & DRAPE',
//       price: 79,
//       category: 'ethnic',
//       image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop',
//       sizes: ['Free Size'],
//       fitScore: 96,
//       rentalCount: 28,
//       rating: 4.9
//     },
//     {
//       id: 4,
//       name: 'Sequined Party Dress',
//       brand: 'VINTAGE VOGUE',
//       price: 95,
//       category: 'evening',
//       image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
//       sizes: ['XS', 'S', 'M'],
//       fitScore: 92,
//       rentalCount: 56,
//       rating: 4.7
//     },
//     {
//       id: 5,
//       name: 'Cashmere Sweater',
//       brand: 'LUXE CASUAL',
//       price: 45,
//       category: 'casual',
//       image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
//       sizes: ['S', 'M', 'L'],
//       fitScore: 97,
//       rentalCount: 23,
//       rating: 4.8
//     },
//     {
//       id: 6,
//       name: 'Designer Clutch',
//       brand: 'ACCESSOIRES',
//       price: 35,
//       category: 'accessories',
//       image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop',
//       sizes: ['One Size'],
//       fitScore: 100,
//       rentalCount: 67,
//       rating: 4.9
//     }
//   ];

//   const filteredItems = selectedCategory === 'all' 
//     ? items 
//     : items.filter(item => item.category === selectedCategory);

//   return (
//     <div className="wardrobe-page">
//       <div className="wardrobe-header">
//         <h1>The Virtual Wardrobe</h1>
//         <p>Explore our curated collection of luxury fashion</p>
//       </div>

//       <div className="wardrobe-controls">
//         <div className="digital-twin-toggle">
//           <button 
//             className={`twin-btn ${showDigitalTwin ? 'active' : ''}`}
//             onClick={() => setShowDigitalTwin(!showDigitalTwin)}
//           >
//             <span className="btn-icon">🔍</span>
//             {showDigitalTwin ? 'Hide Digital Twin' : 'Show Digital Twin'}
//           </button>
//         </div>

//         <div className="view-toggle">
//           <button 
//             className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
//             onClick={() => setViewMode('grid')}
//           >
//             <span className="btn-icon">⊞</span>
//             Grid
//           </button>
//           <button 
//             className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
//             onClick={() => setViewMode('list')}
//           >
//             <span className="btn-icon">≡</span>
//             List
//           </button>
//         </div>
//       </div>

//       {showDigitalTwin && (
//         <div className="digital-twin-panel">
//           <div className="twin-preview">
//             <h3>Your Digital Twin</h3>
//             <div className="twin-visualization">
//               <div className="twin-model">
//                 <div className="measurement-points">
//                   <span className="measurement bust">34"</span>
//                   <span className="measurement waist">26"</span>
//                   <span className="measurement hips">36"</span>
//                 </div>
//                 <div className="fit-heatmap">
//                   <div className="heatmap-zone zone1">Perfect Fit Zone</div>
//                   <div className="heatmap-zone zone2">Consider Backup</div>
//                 </div>
//               </div>
//             </div>
//             <div className="twin-stats">
//               <div className="twin-stat">
//                 <span className="stat-value">98%</span>
//                 <span className="stat-label">Overall Fit Score</span>
//               </div>
//               <div className="twin-stat">
//                 <span className="stat-value">45</span>
//                 <span className="stat-label">Perfect Fit Items</span>
//               </div>
//               <div className="twin-stat">
//                 <span className="stat-value">3</span>
//                 <span className="stat-label">Need Backup</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="wardrobe-container">
//         <aside className="wardrobe-sidebar">
//           <h3>Categories</h3>
//           <ul className="category-list">
//             {categories.map(category => (
//               <li 
//                 key={category.id}
//                 className={selectedCategory === category.id ? 'active' : ''}
//                 onClick={() => setSelectedCategory(category.id)}
//               >
//                 <span className="category-name">{category.name}</span>
//                 <span className="category-count">{category.count}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="filter-section">
//             <h4>Price Range</h4>
//             <div className="price-range">
//               <input type="range" min="0" max="200" defaultValue="100" />
//               <div className="price-labels">
//                 <span>$0</span>
//                 <span>$200+</span>
//               </div>
//             </div>
//           </div>

//           <div className="filter-section">
//             <h4>Sizes</h4>
//             <div className="size-filters">
//               {['XS', 'S', 'M', 'L', 'XL'].map(size => (
//                 <label key={size} className="size-checkbox">
//                   <input type="checkbox" />
//                   <span>{size}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="filter-section">
//             <h4>Fit Score</h4>
//             <div className="fit-filters">
//               <label className="fit-checkbox">
//                 <input type="checkbox" />
//                 <span>90%+ (Perfect Fit)</span>
//               </label>
//               <label className="fit-checkbox">
//                 <input type="checkbox" />
//                 <span>80-89% (Good Fit)</span>
//               </label>
//               <label className="fit-checkbox">
//                 <input type="checkbox" />
//                 <span>Show Backup Needed</span>
//               </label>
//             </div>
//           </div>
//         </aside>

//         <main className="wardrobe-main">
//           <div className={`items-grid ${viewMode}`}>
//             {filteredItems.map(item => (
//               <div key={item.id} className={`item-card ${viewMode}`}>
//                 <div className="item-image">
//                   <img src={item.image} alt={item.name} />
//                   <span className="item-fit-badge">
//                     Fit Score: {item.fitScore}%
//                   </span>
//                   {item.fitScore < 95 && (
//                     <span className="backup-badge">Backup Available</span>
//                   )}
//                 </div>
//                 <div className="item-details">
//                   <h3>{item.name}</h3>
//                   <p className="item-brand">{item.brand}</p>
//                   <div className="item-meta">
//                     <span className="item-price">${item.price}/day</span>
//                     <span className="item-rating">★ {item.rating}</span>
//                   </div>
//                   <div className="item-sizes">
//                     {item.sizes.map(size => (
//                       <span key={size} className="size-tag">{size}</span>
//                     ))}
//                   </div>
//                   <div className="item-actions">
//                     <button className="try-on-btn">👁️ Try On</button>
//                     <button className="rent-btn">Rent Now</button>
//                   </div>
//                   <div className="item-stats">
//                     <span className="rental-count">📅 {item.rentalCount} rentals</span>
//                     <span className="savings">💧 50L saved</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Wardrobe;

//-------------3-----------
// pages/Wardrobe.js
import React, { useState } from 'react';
import './Wardrobe.css';

const Wardrobe = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showDigitalTwin, setShowDigitalTwin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [priceRange, setPriceRange] = useState(200);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedFitScores, setSelectedFitScores] = useState([]);
  const [rentalSuccess, setRentalSuccess] = useState(null);

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
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop',
      sizes: ['XS', 'S', 'M', 'L'],
      fitScore: 98,
      rentalCount: 45,
      rating: 4.9,
      description: 'Elegant silk gown perfect for formal events and weddings'
    },
    {
      id: 2,
      name: 'Italian Wool Blazer',
      brand: 'THE BOARDROOM',
      price: 65,
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
      sizes: ['S', 'M', 'L', 'XL'],
      fitScore: 95,
      rentalCount: 32,
      rating: 4.8,
      description: 'Premium wool blazer for professional settings'
    },
    {
      id: 3,
      name: 'Handwoven Saree',
      brand: 'WEAVE & DRAPE',
      price: 79,
      category: 'ethnic',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop',
      sizes: ['Free Size'],
      fitScore: 96,
      rentalCount: 28,
      rating: 4.9,
      description: 'Traditional handwoven saree with intricate details'
    },
    {
      id: 4,
      name: 'Sequined Party Dress',
      brand: 'VINTAGE VOGUE',
      price: 95,
      category: 'evening',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      sizes: ['XS', 'S', 'M'],
      fitScore: 92,
      rentalCount: 56,
      rating: 4.7,
      description: 'Sparkling sequin dress for parties and celebrations'
    },
    {
      id: 5,
      name: 'Cashmere Sweater',
      brand: 'LUXE CASUAL',
      price: 45,
      category: 'casual',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
      sizes: ['S', 'M', 'L'],
      fitScore: 97,
      rentalCount: 23,
      rating: 4.8,
      description: 'Soft cashmere sweater for casual luxury'
    },
    {
      id: 6,
      name: 'Designer Clutch',
      brand: 'ACCESSOIRES',
      price: 35,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop',
      sizes: ['One Size'],
      fitScore: 100,
      rentalCount: 67,
      rating: 4.9,
      description: 'Elegant designer clutch for special occasions'
    },
    {
      id: 7,
      name: 'Velvet Evening Gown',
      brand: 'ÉLITE COUTURE',
      price: 110,
      category: 'evening',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop',
      sizes: ['S', 'M', 'L'],
      fitScore: 94,
      rentalCount: 38,
      rating: 4.8,
      description: 'Luxurious velvet gown for winter events'
    },
    {
      id: 8,
      name: 'Linen Summer Dress',
      brand: 'RESORT LUXE',
      price: 55,
      category: 'casual',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      sizes: ['XS', 'S', 'M', 'L'],
      fitScore: 99,
      rentalCount: 42,
      rating: 4.9,
      description: 'Breathable linen dress perfect for summer'
    }
  ];

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(i => i.id === item.id);
    if (existingItem) {
      alert(`${item.name} is already in your cart!`);
    } else {
      setCartItems([...cartItems, { ...item, rentalDays: 3, backupSize: false }]);
      setRentalSuccess(item.name);
      setTimeout(() => setRentalSuccess(null), 3000);
      alert(`✨ ${item.name} added to cart!\n\nPrice: $${item.price}/day\nAdd backup size for $5?`);
    }
  };

  const handleTryOn = (item) => {
    alert(`👗 AR Try-On: ${item.name}\n\n• Point your camera at yourself\n• See how it looks in real-time\n• Try different colors\n• Share with friends\n\nLoading AR experience...`);
  };

  const handleSizeSelect = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleFitScoreSelect = (score) => {
    if (selectedFitScores.includes(score)) {
      setSelectedFitScores(selectedFitScores.filter(s => s !== score));
    } else {
      setSelectedFitScores([...selectedFitScores, score]);
    }
  };

  const getFilteredItems = () => {
    let filtered = items;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    filtered = filtered.filter(item => item.price <= priceRange);
    
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(item => 
        item.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    if (selectedFitScores.length > 0) {
      filtered = filtered.filter(item => {
        if (selectedFitScores.includes('perfect') && item.fitScore >= 90) return true;
        if (selectedFitScores.includes('good') && item.fitScore >= 80 && item.fitScore < 90) return true;
        if (selectedFitScores.includes('backup') && item.fitScore < 95) return true;
        return false;
      });
    }
    
    return filtered;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="wardrobe-page">
      {rentalSuccess && (
        <div className="success-toast">
          ✅ {rentalSuccess} added to cart!
        </div>
      )}

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

        <div className="cart-toggle">
          <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
            🛒 Cart ({cartItems.length})
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

      {showCart && cartItems.length > 0 && (
        <div className="cart-panel">
          <h3>Shopping Cart ({cartItems.length} items)</h3>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price}/day × {item.rentalDays} days</p>
              </div>
              <button 
                className="remove-btn"
                onClick={() => setCartItems(cartItems.filter(i => i.id !== item.id))}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: ${cartItems.reduce((sum, item) => sum + (item.price * item.rentalDays), 0)}</strong>
            <button 
              className="checkout-btn"
              onClick={() => {
                alert(`✅ Checkout Successful!\n\nTotal: $${cartItems.reduce((sum, item) => sum + (item.price * item.rentalDays), 0)}\nItems: ${cartItems.length}\nDelivery: 2 hours\nTracking ID: #${Math.random().toString(36).substr(2, 8).toUpperCase()}`);
                setCartItems([]);
                setShowCart(false);
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

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
            <button 
              className="update-twin-btn"
              onClick={() => alert('📸 Update Digital Twin:\n\n1. Take new front photo\n2. Take new side photo\n3. AI updates measurements\n4. Get new fit predictions')}
            >
              Update Measurements
            </button>
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
            <h4>Price Range (${priceRange})</h4>
            <div className="price-range">
              <input 
                type="range" 
                min="0" 
                max="200" 
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
              />
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
                  <input 
                    type="checkbox" 
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeSelect(size)}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Fit Score</h4>
            <div className="fit-filters">
              <label className="fit-checkbox">
                <input 
                  type="checkbox"
                  checked={selectedFitScores.includes('perfect')}
                  onChange={() => handleFitScoreSelect('perfect')}
                />
                <span>90%+ (Perfect Fit)</span>
              </label>
              <label className="fit-checkbox">
                <input 
                  type="checkbox"
                  checked={selectedFitScores.includes('good')}
                  onChange={() => handleFitScoreSelect('good')}
                />
                <span>80-89% (Good Fit)</span>
              </label>
              <label className="fit-checkbox">
                <input 
                  type="checkbox"
                  checked={selectedFitScores.includes('backup')}
                  onChange={() => handleFitScoreSelect('backup')}
                />
                <span>Show Backup Needed</span>
              </label>
            </div>
          </div>

          <button 
            className="clear-filters-btn"
            onClick={() => {
              setSelectedCategory('all');
              setPriceRange(200);
              setSelectedSizes([]);
              setSelectedFitScores([]);
            }}
          >
            Clear All Filters
          </button>
        </aside>

        <main className="wardrobe-main">
          <div className="items-count">
            Showing {filteredItems.length} of {items.length} items
          </div>
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
                  <p className="item-description">{item.description}</p>
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
                    <button className="try-on-btn" onClick={() => handleTryOn(item)}>
                      👁️ Try On
                    </button>
                    <button className="rent-btn" onClick={() => handleAddToCart(item)}>
                      Rent Now
                    </button>
                  </div>
                  <div className="item-stats">
                    <span className="rental-count">📅 {item.rentalCount} rentals</span>
                    <span className="savings">💧 {Math.floor(item.rentalCount * 2.5)}L saved</span>
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