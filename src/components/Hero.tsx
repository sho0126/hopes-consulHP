import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">AI × BUSINESS CONSULTING</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            AIが実現する、<br />
            人にしかできない仕事に<br />
            集中できる未来へ
          </h1>
          
          <p className="text-xl md:text-2xl mb-16 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            中小企業診断士とAIエンジニアが最適なDXを設計し、
            <br />
            一人当たり20%の業務削減を実現いたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-12 py-4 text-lg font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg inline-flex items-center justify-center"
            >
              無料相談を予約する
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services"
              className="bg-white/80 backdrop-blur-sm text-gray-700 px-12 py-4 text-lg font-medium tracking-wide hover:bg-white/90 transition-all duration-300 rounded-lg border border-white/50 inline-flex items-center justify-center"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;