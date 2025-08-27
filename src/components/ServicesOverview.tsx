import React from 'react';
import { ArrowRight, Sparkles, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'AI導入支援',
      description: 'Custom GPTsやAIツールを活用した業務自動化で、月160時間の工数削減を実現します。',
      features: ['業務自動化', 'データ分析', '顧客対応効率化'],
      link: '/services'
    },
    {
      icon: Users,
      title: 'DX戦略策定',
      description: '中小企業診断士が経営視点でROIを重視したデジタル変革戦略を設計します。',
      features: ['現状分析', '戦略立案', '実行支援'],
      link: '/services'
    },
    {
      icon: Award,
      title: '補助金活用支援',
      description: 'IT導入補助金など最大1.2億円の実績を持つ専門家が申請から実績報告まで代行します。',
      features: ['申請書作成', '採択率向上', '実績報告'],
      link: '/services'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            私たちのサービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            経営とテクノロジーの両面から、お客様の成長を支援します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mb-8">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to={service.link}
                className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300"
              >
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;