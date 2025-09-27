import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
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
      {/* Hero Section with Banner */}
      <section className="relative bg-white">
        {/* Banner Image */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/about-banner.png')`,
            }}
          >
            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="mb-6">
                <span className="text-base font-semibold text-white tracking-widest uppercase drop-shadow-lg">ABOUT US</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-medium mb-8 text-white drop-shadow-2xl">
                About
              </h1>

              <p className="text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-lg">
                私たちは、AIとビジネスの架け橋となり、
                <br />
                企業の真の成長を支援するコンサルティング会社です。
              </p>
            </div>
          </div>

          {/* Gradient Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-3 text-gray-900">
              会社概要
            </h2>
            <div className="border-t-2 border-gray-900 mb-12"></div>

            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2">会社名</h3>
                  </div>
                  <div>
                    <p className="text-lg text-gray-900">ホープスコンサルティング株式会社</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2">代表取締役</h3>
                  </div>
                  <div>
                    <p className="text-lg text-gray-900">高橋　望</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2">設立</h3>
                  </div>
                  <div>
                    <p className="text-lg text-gray-900">2023年9月27日</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2">資本金</h3>
                  </div>
                  <div>
                    <p className="text-lg text-gray-900">100万円</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2">所在地</h3>
                  </div>
                  <div>
                    <p className="text-lg text-gray-900">〒150-0002<br />東京都渋谷区渋谷2丁目2番4号青山アルコープ402号室</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2">事業内容</h3>
                  </div>
                  <div>
                    <ul className="space-y-2 text-lg text-gray-900">
                      <li>• AI・効率化コンサルティング</li>
                      <li>• システム開発・導入支援</li>
                      <li>• 業務プロセス改善支援</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2">従業員数</h3>
                  </div>
                  <div>
                    <p className="text-lg text-gray-900">３名（業務委託社員含む）</p>
                  </div>
                </div>
              </div>
            </div>
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