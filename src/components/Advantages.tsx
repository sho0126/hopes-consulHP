import React from 'react';
import { Users, Zap, Target, Award } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Users,
      title: '経営×技術のハイブリッド体制',
      subtitle: '「それ、本当に儲かるの？」に誠実にお答えします。',
      description: '中小企業診断士が経営者の視点で投資対効果を徹底的にシミュレーション。単なるツール導入ではなく「利益に繋がる効率化」を設計します。パートナーAIエンジニアがその設計思想を深く理解し、最適な技術で形にするため、経営と現場の間にズレが生じません。',
      color: 'bg-gray-900'
    },
    {
      icon: Zap,
      title: '低コストかつ迅速な開発',
      subtitle: '「まずは小さく試したい」を叶えます。',
      description: 'Custom GPTsやGoogle Apps Script等を駆使し、大掛かりなシステム開発なしに、最短1週間で業務課題を解決するプロトタイプを構築可能。現場で実際に触れて効果を実感いただいてから、本格的な展開を判断できます。',
      color: 'bg-gray-700'
    },
    {
      icon: Target,
      title: '成果へのコミットメント',
      subtitle: '「作りっぱなし」にはいたしません。',
      description: '私たちのゴールは、ツールを導入することではなく、お客様の業務が改善され、利益が向上することです。そのため、導入後の運用定着から効果測定まで徹底的に伴走します。目標の達成度に応じた成功報酬型のご契約も可能。成果に対する私たちの覚悟です。',
      color: 'bg-gray-600'
    },
    {
      icon: Award,
      title: '補助金活用による投資負担軽減',
      subtitle: '使える制度は、賢く使い切る。',
      description: 'IT導入補助金やものづくり補助金など、国や自治体の支援制度を最大限に活用します。累計取得額1.2億円超の実績を持つ専門家が、事業計画に合わせた最適な補助金を選定し、採択率を高める申請書の作成から実績報告まで、複雑な手続きをワンストップで代行します。',
      color: 'bg-gray-500'
    }
  ];

  return (
    <section id="advantages" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            なぜホープスコンサルティングなのか
          </h2>
        </div>

        <div className="space-y-24">
          {advantages.map((advantage, index) => (
            <div key={index} className={`${index % 2 === 1 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row items-center gap-16`}>
              <div className="md:w-1/2">
                <div className={`w-20 h-20 ${advantage.color} rounded-full flex items-center justify-center mb-8`}>
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-6">
                  <span className="text-6xl font-light text-gray-200">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-6">
                  {advantage.title}
                </h3>
                <p className="text-xl font-medium text-gray-900 mb-6">
                  {advantage.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {advantage.description}
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className={`${advantage.color} rounded-3xl p-16 text-white min-h-[400px] flex items-center justify-center`}>
                  <div className="text-center">
                    <advantage.icon className="h-32 w-32 mx-auto mb-8 opacity-80" />
                    <h4 className="text-2xl font-light">{advantage.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;