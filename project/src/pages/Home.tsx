import React from 'react';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import ServicesOverview from '../components/ServicesOverview';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
      <NewsSection />
      <ServicesOverview />
      <CTASection />
    </div>
  );
};

export default Home;