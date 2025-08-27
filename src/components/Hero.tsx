import React from 'react';
import { ArrowRight, Sparkles, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'AI導入支援',
      description: 'Custom GPTsやAIツールを活用した業務自動化で、月160時間の工数削減を実現します。',
      link: '/services'
    },
    {
      icon: Users,
      title: 'DX戦略策定',
      description: '中小企業診断士が経営視点でROIを重視したデジタル変革戦略を設計します。',
      link: '/services'
    },
    {
      icon: Award,
      title: '補助金活用支援',
      description: 'IT導入補助金など最大1.2億円の実績を持つ専門家が申請から実績報告まで代行します。',
      link: '/services'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white text-gray-700 px-12 py-4 text-lg font-medium tracking-wide hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-200 inline-flex items-center justify-center"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
                <p className="text-gray-600 leading-relaxed font-light mb-8">
                  {service.description}
                </p>
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

      {/* Statistics */}
      <section className="py-24 bg-white">
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
            <div className="text-center">
              <div className="text-5xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                100+
              </div>
              <p className="text-gray-600 font-light">支援企業数</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                20%
              </div>
              <p className="text-gray-600 font-light">平均業務削減率</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                1.2億円
              </div>
              <p className="text-gray-600 font-light">補助金取得実績</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                95%
              </div>
              <p className="text-gray-600 font-light">顧客満足度</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-gray-50">
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
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="AI導入支援サービス"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="text-sm text-gray-500 mb-4">2024.01.15</div>
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                  AI導入支援サービスの提供を開始しました
                </h3>
                <p className="text-gray-600 font-light">
                  Custom GPTsを活用した業務自動化支援サービスの提供を開始いたします。
                </p>
              </div>
            </article>

            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="導入事例"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="text-sm text-gray-500 mb-4">2024.01.10</div>
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                  製造業A社様にてDX推進プロジェクトが完了
                </h3>
                <p className="text-gray-600 font-light">
                  生産管理システムの導入により、業務効率が30%向上しました。
                </p>
              </div>
            </article>

            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="補助金申請支援"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="text-sm text-gray-500 mb-4">2024.01.05</div>
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                  IT導入補助金2024年度の申請支援を開始
                </h3>
                <p className="text-gray-600 font-light">
                  2024年度IT導入補助金の申請支援サービスを開始いたします。
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            まずは無料相談から始めませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            貴社の課題をお聞かせください。最適なソリューションをご提案いたします。
          </p>
          <Link 
            to="/contact"
            className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-12 py-4 text-lg font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg inline-flex items-center"
          >
            無料相談を予約する
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;