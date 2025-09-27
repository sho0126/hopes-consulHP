import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: '代表取締役 田中 太郎',
      role: '中小企業診断士 / AIコンサルタント',
      description: '大手IT企業で10年間のシステム開発経験を経て、中小企業診断士として独立。経営とテクノロジーの両面から企業の効率化を支援。',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'CTO 佐藤 花子',
      role: 'AIエンジニア / システムアーキテクト',
      description: 'AI・機械学習分野で8年の経験を持つエンジニア。スタートアップから大企業まで幅広いAI導入プロジェクトを手がける。',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Target,
      title: '成果へのコミットメント',
      description: 'ツールの導入ではなく、お客様の業務改善と利益向上を最終目標とします。'
    },
    {
      icon: Users,
      title: '現場に寄り添う姿勢',
      description: '現場の声を大切にし、実際に使われるソリューションを提供します。'
    },
    {
      icon: Award,
      title: '継続的な改善',
      description: '導入後も継続的にサポートし、長期的な成功を支援します。'
    },
    {
      icon: Heart,
      title: '誠実なパートナーシップ',
      description: 'お客様との信頼関係を最も大切にし、透明性のある関係を築きます。'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">ABOUT US</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              About
            </h1>
            
            <p className="text-xl md:text-2xl mb-16 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              私たちは、AIとビジネスの架け橋となり、
              <br />
              企業の真の成長を支援するコンサルティング会社です。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              私たちのミッション
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-16">
              テクノロジーの力で、人々がより創造的で価値のある仕事に集中できる世界を実現する。
              単なるツールの導入ではなく、組織全体の変革を通じて、持続可能な成長を支援します。
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">なぜホープスコンサルティングなのか</h3>
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  多くの企業が効率化の必要性を感じながらも、「何から始めればいいかわからない」「投資対効果が見えない」という課題を抱えています。
                </p>
                <p className="text-gray-600 leading-relaxed font-light">
                  私たちは経営とテクノロジーの両方の視点から、お客様にとって最適なソリューションを設計し、確実な成果につなげます。
                </p>
              </div>
              <div className="bg-white rounded-3xl p-12 shadow-sm">
                <div className="text-center">
                  <div className="text-6xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                    100+
                  </div>
                  <p className="text-gray-600 font-light">支援企業数</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              チーム紹介
            </h2>
            <p className="text-xl text-gray-600 font-light">
              経営とテクノロジーの専門家が、お客様の成功を支援します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-12 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
                />
                <h3 className="text-2xl font-light text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600 mb-6 font-medium">{member.role}</p>
                <p className="text-gray-600 leading-relaxed font-light">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              私たちの価値観
            </h2>
            <p className="text-xl text-gray-600 font-light">
              お客様との長期的なパートナーシップを大切にしています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mb-8">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            一緒に未来を創りませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            まずは無料相談で、貴社の課題をお聞かせください
          </p>
          <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-12 py-4 text-lg font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg">
            お問い合わせ
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;