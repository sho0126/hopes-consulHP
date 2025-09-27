import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8">
            <span className="text-xs sm:text-sm font-medium text-gray-500 tracking-wider sm:tracking-widest uppercase">AI × BUSINESS CONSULTING</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-8 md:mb-12 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              AIが実現する
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              人にしかできない仕事に
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              集中できる未来へ
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 md:mb-16 text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal px-4 sm:px-0">
            中小企業診断士とAIエンジニアが最適な効率化を設計し、
            <br className="hidden sm:block" />
            一人当たり20%の業務削減を実現いたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg inline-flex items-center justify-center"
            >
              無料相談を予約する
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Link>
            <Link
              to="/shigyo-効率化"
              className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium tracking-wide hover:bg-white transition-all duration-300 rounded-lg border border-gray-200 inline-flex items-center justify-center"
            >
              士業の方はこちら
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;