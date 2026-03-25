// import React, { useState } from 'react';
// import './Events.css';

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [calendarSynced, setCalendarSynced] = useState(false);

//   const upcomingEvents = [
//     {
//       id: 1,
//       title: 'Wedding in Tuscany',
//       date: '2024-04-15',
//       type: 'Wedding',
//       location: 'Florence, Italy',
//       weather: 'Sunny, 24°C',
//       guests: 150,
//       dressCode: 'Formal/Black Tie Optional',
//       suggestions: [
//         {
//           id: 101,
//           name: 'Silk Chiffon Gown',
//           brand: 'ÉLITE COUTURE',
//           image: 'https://via.placeholder.com/200x300',
//           fitScore: 98,
//           price: 89,
//           weatherMatch: 'Perfect for warm weather',
//           colors: ['Blush', 'Champagne']
//         },
//         {
//           id: 102,
//           name: 'Embroidered Lehenga',
//           brand: 'WEAVE & DRAPE',
//           image: 'https://via.placeholder.com/200x300',
//           fitScore: 96,
//           price: 95,
//           weatherMatch: 'Breathable fabric',
//           colors: ['Gold', 'Ivory']
//         },
//         {
//           id: 103,
//           name: 'Sequin Evening Dress',
//           brand: 'VINTAGE VOGUE',
//           image: 'https://via.placeholder.com/200x300',
//           fitScore: 94,
//           price: 85,
//           weatherMatch: 'Lightweight',
//           colors: ['Navy', 'Silver']
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Tech Gala 2024',
//       date: '2024-04-20',
//       type: 'Corporate',
//       location: 'San Francisco, CA',
//       weather: 'Indoor',
//       guests: 500,
//       dressCode: 'Business Formal/Cocktail',
//       suggestions: [
//         {
//           id: 201,
//           name: 'Italian Wool Blazer',
//           brand: 'THE BOARDROOM',
//           image: 'https://via.placeholder.com/200x300',
//           fitScore: 97,
//           price: 65,
//           weatherMatch: 'Indoor appropriate',
//           colors: ['Charcoal', 'Navy']
//         },
//         {
//           id: 202,
//           name: 'Silk Blouse & Trousers',
//           brand: 'CORPORATE CHIC',
//           image: 'https://via.placeholder.com/200x300',
//           fitScore: 95,
//           price: 75,
//           weatherMatch: 'Professional',
//           colors: ['Cream', 'Black']
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Beachside Brunch',
//       date: '2024-05-01',
//       type: 'Casual',
//       location: 'Malibu, CA',
//       weather: 'Sunny, 28°C',
//       guests: 30,
//       dressCode: 'Resort Casual',
//       suggestions: [
//         {
//           id: 301,
//           name: 'Linen Maxi Dress',
//           brand: 'RESORT LUXE',
//           image: 'https://via.placeholder.com/200x300',
//           fitScore: 99,
//           price: 55,
//           weatherMatch: 'Perfect for beach',
//           colors: ['White', 'Coral']
//         }
//       ]
//     }
//   ];

//   const handleSyncCalendar = () => {
//     setCalendarSynced(true);
//     // In a real app, this would integrate with Google/Outlook Calendar
//   };

//   return (
//     <div className="events-page">
//       <div className="events-header">
//         <h1>Smart Event Sync</h1>
//         <p>Let AI style you for every occasion</p>
//       </div>

//       {!calendarSynced ? (
//         <div className="calendar-sync-card">
//           <div className="sync-icon">📅</div>
//           <h2>Sync Your Calendar</h2>
//           <p>Connect your Google or Outlook calendar to get personalized outfit suggestions for every event</p>
//           <div className="sync-buttons">
//             <button className="sync-btn google" onClick={handleSyncCalendar}>
//               <span className="btn-icon">G</span>
//               Sync with Google
//             </button>
//             <button className="sync-btn outlook" onClick={handleSyncCalendar}>
//               <span className="btn-icon">O</span>
//               Sync with Outlook
//             </button>
//           </div>
//           <p className="sync-note">We'll never post anything without your permission</p>
//         </div>
//       ) : (
//         <>
//           <div className="events-timeline">
//             <h2>Your Upcoming Events</h2>
//             <div className="timeline">
//               {upcomingEvents.map((event, index) => (
//                 <div 
//                   key={event.id} 
//                   className={`timeline-item ${selectedEvent?.id === event.id ? 'active' : ''}`}
//                   onClick={() => setSelectedEvent(event)}
//                 >
//                   <div className="timeline-marker">{index + 1}</div>
//                   <div className="timeline-content">
//                     <h3>{event.title}</h3>
//                     <p className="event-date">{event.date}</p>
//                     <span className="event-type">{event.type}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {selectedEvent && (
//             <div className="event-details">
//               <div className="event-header">
//                 <div>
//                   <h2>{selectedEvent.title}</h2>
//                   <p className="event-location">{selectedEvent.location}</p>
//                 </div>
//                 <div className="event-meta">
//                   <div className="meta-item">
//                     <span className="meta-label">Date</span>
//                     <span className="meta-value">{selectedEvent.date}</span>
//                   </div>
//                   <div className="meta-item">
//                     <span className="meta-label">Weather</span>
//                     <span className="meta-value">☀️ {selectedEvent.weather}</span>
//                   </div>
//                   <div className="meta-item">
//                     <span className="meta-label">Guests</span>
//                     <span className="meta-value">{selectedEvent.guests}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="dress-code-card">
//                 <h3>Dress Code</h3>
//                 <p>{selectedEvent.dressCode}</p>
//                 <div className="weather-note">
//                   <span className="note-icon">🌡️</span>
//                   <span>AI suggests breathable fabrics due to weather</span>
//                 </div>
//               </div>

//               <div className="suggestions-section">
//                 <h3>AI-Picked Outfits for You</h3>
//                 <div className="suggestions-grid">
//                   {selectedEvent.suggestions.map(suggestion => (
//                     <div key={suggestion.id} className="suggestion-card">
//                       <div className="suggestion-image">
//                         <img src={suggestion.image} alt={suggestion.name} />
//                         <span className="fit-score">Fit: {suggestion.fitScore}%</span>
//                       </div>
//                       <div className="suggestion-info">
//                         <h4>{suggestion.name}</h4>
//                         <p className="brand">{suggestion.brand}</p>
//                         <div className="color-tags">
//                           {suggestion.colors.map(color => (
//                             <span key={color} className="color-tag">{color}</span>
//                           ))}
//                         </div>
//                         <p className="weather-match">{suggestion.weatherMatch}</p>
//                         <div className="suggestion-actions">
//                           <span className="price">${suggestion.price}/day</span>
//                           <button className="reserve-btn">Reserve</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Events;

//--------2---------
// pages/Events.js
// import React, { useState } from 'react';
// import './Events.css';

// const Events = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [calendarSynced, setCalendarSynced] = useState(false);

//   const upcomingEvents = [
//     {
//       id: 1,
//       title: 'Wedding in Tuscany',
//       date: '2024-04-15',
//       type: 'Wedding',
//       location: 'Florence, Italy',
//       weather: 'Sunny, 24°C',
//       guests: 150,
//       dressCode: 'Formal/Black Tie Optional',
//       suggestions: [
//         {
//           id: 101,
//           name: 'Silk Chiffon Gown',
//           brand: 'ÉLITE COUTURE',
//           image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop',
//           fitScore: 98,
//           price: 89,
//           weatherMatch: 'Perfect for warm weather',
//           colors: ['Blush', 'Champagne']
//         },
//         {
//           id: 102,
//           name: 'Embroidered Lehenga',
//           brand: 'WEAVE & DRAPE',
//           image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=400&fit=crop',
//           fitScore: 96,
//           price: 95,
//           weatherMatch: 'Breathable fabric',
//           colors: ['Gold', 'Ivory']
//         },
//         {
//           id: 103,
//           name: 'Sequin Evening Dress',
//           brand: 'VINTAGE VOGUE',
//           image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop',
//           fitScore: 94,
//           price: 85,
//           weatherMatch: 'Lightweight',
//           colors: ['Navy', 'Silver']
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Tech Gala 2024',
//       date: '2024-04-20',
//       type: 'Corporate',
//       location: 'San Francisco, CA',
//       weather: 'Indoor',
//       guests: 500,
//       dressCode: 'Business Formal/Cocktail',
//       suggestions: [
//         {
//           id: 201,
//           name: 'Italian Wool Blazer',
//           brand: 'THE BOARDROOM',
//           image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop',
//           fitScore: 97,
//           price: 65,
//           weatherMatch: 'Indoor appropriate',
//           colors: ['Charcoal', 'Navy']
//         },
//         {
//           id: 202,
//           name: 'Silk Blouse & Trousers',
//           brand: 'CORPORATE CHIC',
//           image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop',
//           fitScore: 95,
//           price: 75,
//           weatherMatch: 'Professional',
//           colors: ['Cream', 'Black']
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Beachside Brunch',
//       date: '2024-05-01',
//       type: 'Casual',
//       location: 'Malibu, CA',
//       weather: 'Sunny, 28°C',
//       guests: 30,
//       dressCode: 'Resort Casual',
//       suggestions: [
//         {
//           id: 301,
//           name: 'Linen Maxi Dress',
//           brand: 'RESORT LUXE',
//           image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop',
//           fitScore: 99,
//           price: 55,
//           weatherMatch: 'Perfect for beach',
//           colors: ['White', 'Coral']
//         }
//       ]
//     }
//   ];

//   const handleSyncCalendar = () => {
//     setCalendarSynced(true);
//   };

//   return (
//     <div className="events-page">
//       <div className="events-header">
//         <h1>Smart Event Sync</h1>
//         <p>Let AI style you for every occasion</p>
//       </div>

//       {!calendarSynced ? (
//         <div className="calendar-sync-card">
//           <div className="sync-icon">📅</div>
//           <h2>Sync Your Calendar</h2>
//           <p>Connect your Google or Outlook calendar to get personalized outfit suggestions for every event</p>
//           <div className="sync-buttons">
//             <button className="sync-btn google" onClick={handleSyncCalendar}>
//               <span className="btn-icon">G</span>
//               Sync with Google
//             </button>
//             <button className="sync-btn outlook" onClick={handleSyncCalendar}>
//               <span className="btn-icon">O</span>
//               Sync with Outlook
//             </button>
//           </div>
//           <p className="sync-note">We'll never post anything without your permission</p>
//         </div>
//       ) : (
//         <>
//           <div className="events-timeline">
//             <h2>Your Upcoming Events</h2>
//             <div className="timeline">
//               {upcomingEvents.map((event, index) => (
//                 <div 
//                   key={event.id} 
//                   className={`timeline-item ${selectedEvent?.id === event.id ? 'active' : ''}`}
//                   onClick={() => setSelectedEvent(event)}
//                 >
//                   <div className="timeline-marker">{index + 1}</div>
//                   <div className="timeline-content">
//                     <h3>{event.title}</h3>
//                     <p className="event-date">{event.date}</p>
//                     <span className="event-type">{event.type}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {selectedEvent && (
//             <div className="event-details">
//               <div className="event-header">
//                 <div>
//                   <h2>{selectedEvent.title}</h2>
//                   <p className="event-location">{selectedEvent.location}</p>
//                 </div>
//                 <div className="event-meta">
//                   <div className="meta-item">
//                     <span className="meta-label">Date</span>
//                     <span className="meta-value">{selectedEvent.date}</span>
//                   </div>
//                   <div className="meta-item">
//                     <span className="meta-label">Weather</span>
//                     <span className="meta-value">☀️ {selectedEvent.weather}</span>
//                   </div>
//                   <div className="meta-item">
//                     <span className="meta-label">Guests</span>
//                     <span className="meta-value">{selectedEvent.guests}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="dress-code-card">
//                 <h3>Dress Code</h3>
//                 <p>{selectedEvent.dressCode}</p>
//                 <div className="weather-note">
//                   <span className="note-icon">🌡️</span>
//                   <span>AI suggests breathable fabrics due to weather</span>
//                 </div>
//               </div>

//               <div className="suggestions-section">
//                 <h3>AI-Picked Outfits for You</h3>
//                 <div className="suggestions-grid">
//                   {selectedEvent.suggestions.map(suggestion => (
//                     <div key={suggestion.id} className="suggestion-card">
//                       <div className="suggestion-image">
//                         <img src={suggestion.image} alt={suggestion.name} />
//                         <span className="fit-score">Fit: {suggestion.fitScore}%</span>
//                       </div>
//                       <div className="suggestion-info">
//                         <h4>{suggestion.name}</h4>
//                         <p className="brand">{suggestion.brand}</p>
//                         <div className="color-tags">
//                           {suggestion.colors.map(color => (
//                             <span key={color} className="color-tag">{color}</span>
//                           ))}
//                         </div>
//                         <p className="weather-match">{suggestion.weatherMatch}</p>
//                         <div className="suggestion-actions">
//                           <span className="price">${suggestion.price}/day</span>
//                           <button className="reserve-btn">Reserve</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Events;

//----------3---------
// pages/Events.js
import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [calendarSynced, setCalendarSynced] = useState(false);
  const [syncedEvents, setSyncedEvents] = useState([]);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Wedding in Tuscany',
      date: '2024-04-15',
      type: 'Wedding',
      location: 'Florence, Italy',
      weather: 'Sunny, 24°C',
      guests: 150,
      dressCode: 'Formal/Black Tie Optional',
      suggestions: [
        {
          id: 101,
          name: 'Silk Chiffon Gown',
          brand: 'ÉLITE COUTURE',
          image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=400&fit=crop',
          fitScore: 98,
          price: 89,
          weatherMatch: 'Perfect for warm weather',
          colors: ['Blush', 'Champagne']
        },
        {
          id: 102,
          name: 'Embroidered Lehenga',
          brand: 'WEAVE & DRAPE',
          image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=400&fit=crop',
          fitScore: 96,
          price: 95,
          weatherMatch: 'Breathable fabric',
          colors: ['Gold', 'Ivory']
        },
        {
          id: 103,
          name: 'Sequin Evening Dress',
          brand: 'VINTAGE VOGUE',
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop',
          fitScore: 94,
          price: 85,
          weatherMatch: 'Lightweight',
          colors: ['Navy', 'Silver']
        }
      ]
    },
    {
      id: 2,
      title: 'Tech Gala 2024',
      date: '2024-04-20',
      type: 'Corporate',
      location: 'San Francisco, CA',
      weather: 'Indoor',
      guests: 500,
      dressCode: 'Business Formal/Cocktail',
      suggestions: [
        {
          id: 201,
          name: 'Italian Wool Blazer',
          brand: 'THE BOARDROOM',
          image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop',
          fitScore: 97,
          price: 65,
          weatherMatch: 'Indoor appropriate',
          colors: ['Charcoal', 'Navy']
        },
        {
          id: 202,
          name: 'Silk Blouse & Trousers',
          brand: 'CORPORATE CHIC',
          image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop',
          fitScore: 95,
          price: 75,
          weatherMatch: 'Professional',
          colors: ['Cream', 'Black']
        }
      ]
    },
    {
      id: 3,
      title: 'Beachside Brunch',
      date: '2024-05-01',
      type: 'Casual',
      location: 'Malibu, CA',
      weather: 'Sunny, 28°C',
      guests: 30,
      dressCode: 'Resort Casual',
      suggestions: [
        {
          id: 301,
          name: 'Linen Maxi Dress',
          brand: 'RESORT LUXE',
          image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop',
          fitScore: 99,
          price: 55,
          weatherMatch: 'Perfect for beach',
          colors: ['White', 'Coral']
        }
      ]
    }
  ];

  const handleSyncCalendar = (provider) => {
    setCalendarSynced(true);
    setSyncedEvents(upcomingEvents);
    alert(`✅ Calendar Synced with ${provider}!\n\nFound ${upcomingEvents.length} upcoming events.\nAI is now analyzing outfits for each event.`);
  };

  const handleReserveOutfit = (suggestion, eventTitle) => {
    alert(`✨ Outfit Reserved!\n\nItem: ${suggestion.name}\nEvent: ${eventTitle}\nPrice: $${suggestion.price}/day\n\nDelivery: 2 hours before event\nSize recommendations: Based on your Digital Twin\nBackup size available for +$5\n\nWould you like to add backup size?`);
  };

  const handleAddToWishlist = (suggestion) => {
    alert(`💖 Added to Wishlist!\n\n${suggestion.name}\nWe'll notify you when price drops or similar items are available.`);
  };

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Smart Event Sync</h1>
        <p>Let AI style you for every occasion</p>
      </div>

      {!calendarSynced ? (
        <div className="calendar-sync-card">
          <div className="sync-icon">📅</div>
          <h2>Sync Your Calendar</h2>
          <p>Connect your Google or Outlook calendar to get personalized outfit suggestions for every event</p>
          <div className="sync-buttons">
            <button className="sync-btn google" onClick={() => handleSyncCalendar('Google Calendar')}>
              <span className="btn-icon">G</span>
              Sync with Google
            </button>
            <button className="sync-btn outlook" onClick={() => handleSyncCalendar('Outlook Calendar')}>
              <span className="btn-icon">O</span>
              Sync with Outlook
            </button>
          </div>
          <p className="sync-note">We'll never post anything without your permission</p>
        </div>
      ) : (
        <>
          <div className="events-timeline">
            <h2>Your Upcoming Events ({syncedEvents.length})</h2>
            <div className="timeline">
              {syncedEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className={`timeline-item ${selectedEvent?.id === event.id ? 'active' : ''}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="timeline-marker">{index + 1}</div>
                  <div className="timeline-content">
                    <h3>{event.title}</h3>
                    <p className="event-date">{event.date}</p>
                    <span className="event-type">{event.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedEvent && (
            <div className="event-details">
              <div className="event-header">
                <div>
                  <h2>{selectedEvent.title}</h2>
                  <p className="event-location">{selectedEvent.location}</p>
                </div>
                <div className="event-meta">
                  <div className="meta-item">
                    <span className="meta-label">Date</span>
                    <span className="meta-value">{selectedEvent.date}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Weather</span>
                    <span className="meta-value">☀️ {selectedEvent.weather}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Guests</span>
                    <span className="meta-value">{selectedEvent.guests}</span>
                  </div>
                </div>
              </div>

              <div className="dress-code-card">
                <h3>Dress Code</h3>
                <p>{selectedEvent.dressCode}</p>
                <div className="weather-note">
                  <span className="note-icon">🌡️</span>
                  <span>AI suggests breathable fabrics due to weather</span>
                </div>
              </div>

              <div className="suggestions-section">
                <h3>AI-Picked Outfits for You</h3>
                <div className="suggestions-grid">
                  {selectedEvent.suggestions.map(suggestion => (
                    <div key={suggestion.id} className="suggestion-card">
                      <div className="suggestion-image">
                        <img src={suggestion.image} alt={suggestion.name} />
                        <span className="fit-score">Fit: {suggestion.fitScore}%</span>
                      </div>
                      <div className="suggestion-info">
                        <h4>{suggestion.name}</h4>
                        <p className="brand">{suggestion.brand}</p>
                        <div className="color-tags">
                          {suggestion.colors.map(color => (
                            <span key={color} className="color-tag">{color}</span>
                          ))}
                        </div>
                        <p className="weather-match">{suggestion.weatherMatch}</p>
                        <div className="suggestion-actions">
                          <span className="price">${suggestion.price}/day</span>
                          <div className="action-buttons">
                            <button 
                              className="wishlist-btn"
                              onClick={() => handleAddToWishlist(suggestion)}
                            >
                              🤍
                            </button>
                            <button 
                              className="reserve-btn"
                              onClick={() => handleReserveOutfit(suggestion, selectedEvent.title)}
                            >
                              Reserve
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Events;