import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative pt-20 bg-white">
      {/* Banner Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/service-banner.png')`,
          }}
        >
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="mb-6">
              <span className="text-base font-semibold text-white tracking-widest uppercase drop-shadow-lg">AI × BUSINESS CONSULTING</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-medium mb-8 text-white drop-shadow-2xl">
              Services
            </h1>

          </div>
        </div>

        {/* Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default ServicesHero;