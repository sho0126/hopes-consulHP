import React from 'react';
import { ArrowRight, Bot, TrendingUp, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI導入支援',
      subtitle: '経営課題を解決するAI活用戦略',
      description: '中小企業診断士の経営視点から、貴社の本質的な課題を見極め、最適なAIソリューションを提案。技術導入ありきではなく、投資対効果を重視した実践的な支援を行います。',
      features: ['経営診断に基づくAI活用領域の特定', '費用対効果シミュレーション', '段階的導入計画の策定'],
      link: '/services'
    },
    {
      icon: TrendingUp,
      title: '効率化戦略策定',
      subtitle: '経営戦略と一体化した効率化ロードマップ',
      description: 'デジタル化を目的化せず、競争優位性の確立と持続的成長を実現する効率化戦略を設計。中小企業診断士が経営全体を俯瞰し、真の変革を支援します。',
      features: ['業務プロセスのデジタル化推進', 'IT人材の育成支援', 'IT投資の最適配分と実行管理'],
      link: '/services'
    },
    {
      icon: Code2,
      title: '受託開発',
      subtitle: '経営課題解決型のシステム開発',
      description: '業務分析から要件定義、開発、運用まで一貫支援。中小企業診断士の知見を活かし、単なるシステム化ではなく、業務改革と成長を実現するソリューションを提供します。',
      features: ['業務プロセス最適化設計', '投資効果の最大化', '内製化移行支援'],
      link: '/services'
    }
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center min-h-[550px]">
          {/* Text Content - exactly same size as image, positioned left and higher */}
          <div className="absolute w-full max-w-2xl h-[500px] z-20 bg-gray-50 shadow-lg" style={{ transform: 'translateX(-250px) translateY(-20px)' }}>
            <div className="h-full flex items-center px-8 sm:px-12 lg:px-16">
              <div className="max-w-lg">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
                    About us
                  </h2>
                  <div className="flex items-center mb-10">
                    <div className="w-16 h-[2px] bg-gray-400"></div>
                    <span className="ml-5 text-base text-gray-700 font-light">私たちについて</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6 leading-relaxed">
                  中小企業診断士とAIエンジニアが、<br />
                  企業の経営問題を解決します。
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
                  私たちは単なるコンサルタントではありません。
                  実際に手を動かし、お客様と共に成果を創り上げる「実践型パートナー」として、
                  貴社の持続的な成長と競争力強化を実現します。
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 text-sm font-medium tracking-wide"
                >
                  詳しくはこちら
                </Link>
              </div>
            </div>
          </div>

          {/* Image - exactly same size as text box, positioned right and lower */}
          <div className="absolute w-full max-w-2xl h-[500px] z-10" style={{ transform: 'translateX(250px) translateY(20px)' }}>
            <img
              src="/images/blue-wave.png"
              alt="Modern office workspace"
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Services Section Below */}
      <div className="bg-gray-50 py-24 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
              Our Services
            </h3>
            <p className="text-gray-600">人がより創造的な仕事に集中できる環境を、最新技術で実現します</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mb-8 mx-auto">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-lg font-medium text-gray-800 mb-4 text-left">
                  {service.subtitle}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed font-light mb-6 text-left flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full mr-3 flex-shrink-0"></div>
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
      </div>
    </section>
  );
};

export default ServicesOverview;