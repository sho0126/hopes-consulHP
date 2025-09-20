import React from 'react';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import ServicesOverview from '../components/ServicesOverview';
import Statistics from '../components/Statistics';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
      <NewsSection />
      <ServicesOverview />
      <Statistics />
      <CTASection />
    </div>
  );
};

export default Home;