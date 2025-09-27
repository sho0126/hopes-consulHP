import React from 'react';
import ServicesHero from '../components/ServicesHero';
import Problems from '../components/Problems';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import ServiceFlow from '../components/ServiceFlow';

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <Problems />
      <Services />
      <Advantages />
      <ServiceFlow />
    </div>
  );
};

export default ServicesPage;