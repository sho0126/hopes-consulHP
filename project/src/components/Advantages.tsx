import React from 'react';
import { Users, Zap, Target } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      title: '経営×技術のハイブリッド体制',
      subtitle: '「経営の本質から考える効率化」を実践します。',
      description: '中小企業診断士が経営診断の手法で貴社の本質的な課題を見極め、その解決に最適な技術を選定・実装します。売上向上、コスト削減、組織力強化など、経営の根幹に関わる課題解決にコミットし、技術はあくまで手段として活用します。',
      icon: Users,
      color: 'bg-gray-900'
    },
    {
      title: '低コストかつ迅速な開発',
      subtitle: '「まずは小さく試したい」を叶えます。',
      description: 'Custom GPTsやGoogle Apps Script等を駆使し、大掛かりなシステム開発なしに、最短1週間で業務課題を解決するプロトタイプを構築可能。現場で実際に触れて効果を実感いただいてから、本格的な展開を判断できます。',
      icon: Zap,
      color: 'bg-gray-700'
    },
    {
      title: '成果へのコミットメント',
      subtitle: '「作りっぱなし」にはいたしません。',
      description: '私たちのゴールは、ツールを導入することではなく、お客様の業務が改善され、利益が向上することです。そのため、導入後の運用定着から効果測定まで徹底的に伴走します。目標の達成度に応じた成功報酬型のご契約も可能。成果に対する私たちの覚悟です。',
      icon: Target,
      color: 'bg-gray-600'
    }
  ];

  return (
    <section id="advantages" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
          </defs>
        </svg>

        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
            なぜホープスコンサルティングなのか
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {advantages.map((advantage, index) => (
            <div key={index} className={`${index % 2 === 1 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row items-center gap-6 sm:gap-8`}>
              <div className="w-full md:w-2/3">
                <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
                  <div className="mb-4 sm:mb-6">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-700">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-4 sm:mb-6">
                    {advantage.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-4 sm:mb-6">
                    {advantage.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                    {advantage.description}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 flex items-center justify-center py-8 md:py-0">
                <advantage.icon className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32" style={{stroke: "url(#gradient)", strokeWidth: 1.5, fill: "none"}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;