import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import BoutiqueShowcase from '../components/BoutiqueShowcase';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <HowItWorks />
      <BoutiqueShowcase />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;