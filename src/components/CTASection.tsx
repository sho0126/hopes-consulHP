import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
          まずは無料相談から始めませんか？
        </h2>
        <p className="text-xl text-gray-600 mb-12 font-light">
          貴社の課題をお聞かせください。最適なソリューションをご提案いたします。
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
            className="bg-white text-gray-700 px-12 py-4 text-lg font-medium tracking-wide hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-200 inline-flex items-center justify-center"
          >
            サービス詳細を見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;