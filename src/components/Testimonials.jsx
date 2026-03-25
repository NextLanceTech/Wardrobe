// // components/Testimonials.js
// import React, { useState } from 'react';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       name: 'Priya Sharma',
//       role: 'Corporate Professional',
//       image: 'https://via.placeholder.com/100',
//       text: 'The corporate subscription is a game-changer! I get 5 high-end pieces every month without the hassle of shopping. The digital twin feature ensured everything fits perfectly.',
//       rating: 5,
//       rentalCount: 24,
//       waterSaved: 1200,
//       badge: 'Power Renter'
//     },
//     {
//       name: 'Alex Chen',
//       role: 'Frequent Traveler',
//       image: 'https://via.placeholder.com/100',
//       text: 'Traveled to Paris for a week with just a carry-on. Had a wardrobe waiting at the hotel - no luggage fees, no laundry. The weather-appropriate suggestions were spot on!',
//       rating: 5,
//       rentalCount: 18,
//       waterSaved: 900,
//       badge: 'Jet Setter'
//     },
//     {
//       name: 'Maya Patel',
//       role: 'Event Planner',
//       image: 'https://via.placeholder.com/100',
//       text: 'From wedding guest to gala events, I rent everything. The backup size option saved me twice, and the AR try-on makes choosing so easy. Love the sustainability tracking!',
//       rating: 5,
//       rentalCount: 32,
//       waterSaved: 1600,
//       badge: 'Style Icon'
//     }
//   ];

//   return (
//     <section className="testimonials">
//       <div className="testimonials-header">
//         <h2 className="testimonials-title">
//           Loved By Thousands,
//           <span className="testimonials-title-highlight"> Trusted By All</span>
//         </h2>
//         <p className="testimonials-subtitle">
//           Join our community of fashion-forward renters who've discovered the joy of luxury fashion
//           without the commitment.
//         </p>
//       </div>

//       <div className="testimonials-container">
//         <div className="testimonials-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="testimonial-card">
//               <div className="testimonial-header">
//                 <img src={testimonial.image} alt={testimonial.name} />
//                 <div className="testimonial-info">
//                   <h3>{testimonial.name}</h3>
//                   <p>{testimonial.role}</p>
//                   <span className="testimonial-badge">{testimonial.badge}</span>
//                 </div>
//                 <div className="testimonial-rating">
//                   {'★'.repeat(testimonial.rating)}
//                 </div>
//               </div>
//               <p className="testimonial-text">"{testimonial.text}"</p>
//               <div className="testimonial-stats">
//                 <div className="stat">
//                   <span className="stat-value">{testimonial.rentalCount}</span>
//                   <span className="stat-label">Rentals</span>
//                 </div>
//                 <div className="stat">
//                   <span className="stat-value">{testimonial.waterSaved}L</span>
//                   <span className="stat-label">Water Saved</span>
//                 </div>
//                 <div className="stat">
//                   <span className="stat-value">🌱</span>
//                   <span className="stat-label">Eco Hero</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="testimonials-dots">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               className={`dot ${activeIndex === index ? 'active' : ''}`}
//               onClick={() => setActiveIndex(index)}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="testimonials-achievements">
//         <div className="achievement-card">
//           <span className="achievement-number">50K+</span>
//           <span className="achievement-label">Happy Renters</span>
//         </div>
//         <div className="achievement-card">
//           <span className="achievement-number">100K+</span>
//           <span className="achievement-label">Successful Rentals</span>
//         </div>
//         <div className="achievement-card">
//           <span className="achievement-number">2M L</span>
//           <span className="achievement-label">Water Saved</span>
//         </div>
//         <div className="achievement-card">
//           <span className="achievement-number">500+</span>
//           <span className="achievement-label">Partner Boutiques</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// components/Testimonials.js
import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Corporate Professional',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'The corporate subscription is a game-changer! I get 5 high-end pieces every month without the hassle of shopping. The digital twin feature ensured everything fits perfectly.',
      rating: 5,
      rentalCount: 24,
      waterSaved: 1200,
      badge: 'Power Renter'
    },
    {
      name: 'Alex Chen',
      role: 'Frequent Traveler',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'Traveled to Paris for a week with just a carry-on. Had a wardrobe waiting at the hotel - no luggage fees, no laundry. The weather-appropriate suggestions were spot on!',
      rating: 5,
      rentalCount: 18,
      waterSaved: 900,
      badge: 'Jet Setter'
    },
    {
      name: 'Maya Patel',
      role: 'Event Planner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'From wedding guest to gala events, I rent everything. The backup size option saved me twice, and the AR try-on makes choosing so easy. Love the sustainability tracking!',
      rating: 5,
      rentalCount: 32,
      waterSaved: 1600,
      badge: 'Style Icon'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">
          Loved By Thousands,
          <span className="testimonials-title-highlight"> Trusted By All</span>
        </h2>
        <p className="testimonials-subtitle">
          Join our community of fashion-forward renters who've discovered the joy of luxury fashion
          without the commitment.
        </p>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                  <span className="testimonial-badge">{testimonial.badge}</span>
                </div>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-stats">
                <div className="stat">
                  <span className="stat-value">{testimonial.rentalCount}</span>
                  <span className="stat-label">Rentals</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{testimonial.waterSaved}L</span>
                  <span className="stat-label">Water Saved</span>
                </div>
                <div className="stat">
                  <span className="stat-value">🌱</span>
                  <span className="stat-label">Eco Hero</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="testimonials-achievements">
        <div className="achievement-card">
          <span className="achievement-number">50K+</span>
          <span className="achievement-label">Happy Renters</span>
        </div>
        <div className="achievement-card">
          <span className="achievement-number">100K+</span>
          <span className="achievement-label">Successful Rentals</span>
        </div>
        <div className="achievement-card">
          <span className="achievement-number">2M L</span>
          <span className="achievement-label">Water Saved</span>
        </div>
        <div className="achievement-card">
          <span className="achievement-number">500+</span>
          <span className="achievement-label">Partner Boutiques</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;