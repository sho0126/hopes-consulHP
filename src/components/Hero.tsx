import React from 'react';
import { Sparkles, Users, Award, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'AI導入支援',
      description: 'Custom GPTsやAIツールを活用した業務自動化で、月160時間の工数削減を実現します。',
      features: ['業務自動化', 'データ分析', '顧客対応効率化']
    },
    {
      icon: Users,
      title: 'DX戦略策定',
      description: '中小企業診断士が経営視点でROIを重視したデジタル変革戦略を設計します。',
      features: ['現状分析', '戦略立案', '実行支援']
    },
    {
      icon: Award,
      title: '補助金活用支援',
      description: 'IT導入補助金など最大1.2億円の実績を持つ専門家が申請から実績報告まで代行します。',
      features: ['申請書作成', '採択率向上', '実績報告']
    }
  ];

  const stats = [
    { number: '100+', label: '支援企業数' },
    { number: '20%', label: '平均業務削減率' },
    { number: '1.2億円', label: '補助金取得実績' },
    { number: '95%', label: '顧客満足度' }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'AI導入支援サービスの提供を開始しました',
      date: '2024-01-15',
      excerpt: 'Custom GPTsを活用した業務自動化支援サービスの提供を開始いたします。',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: '製造業A社様にてDX推進プロジェクトが完了',
      date: '2024-01-10',
      excerpt: '生産管理システムの導入により、業務効率が30%向上。月間160時間の工数削減を実現しました。',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'IT導入補助金2024年度の申請支援を開始',
      date: '2024-01-05',
      excerpt: '2024年度IT導入補助金の申請支援サービスを開始いたします。',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">AI × BUSINESS CONSULTING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              AIが実現する、<br />
              人にしかできない<br />
              仕事に集中できる未来へ
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
                className="bg-white/80 backdrop-blur-sm text-gray-700 px-12 py-4 text-lg font-medium tracking-wide hover:bg-white transition-all duration-300 rounded-lg border border-gray-200 inline-flex items-center justify-center"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative z-10">
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
              <div key={index} className="bg-gray-50 rounded-3xl p-10 hover:shadow-md transition-all duration-300">
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
                  to="/services"
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

      {/* Statistics */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              実績
            </h2>
            <p className="text-xl text-gray-600 font-light">
              数字で見る私たちの成果
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-3xl p-8">
                <div className="text-5xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-light text-gray-900">{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              最新ニュース
            </h2>
            <Link 
              to="/news"
              className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300"
            >
              すべて見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-light mb-6">
                    {item.excerpt}
                  </p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300"
                  >
                    続きを読む
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 relative z-10">
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
              className="bg-white text-gray-700 px-12 py-4 text-lg font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 rounded-lg border border-gray-200 inline-flex items-center justify-center"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;