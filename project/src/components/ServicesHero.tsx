import React from 'react';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">AI × BUSINESS CONSULTING</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-12 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-16 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            AIが実現する、人にしかできない仕事に集中できる未来へ。
            <br />
            中小企業診断士とAIエンジニアが最適なDXを設計し、
            <br />
            一人当たり20%の業務削減を実現いたします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;