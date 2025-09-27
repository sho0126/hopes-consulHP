import React from 'react';
import { FileText, User, Monitor, Settings, Clock, BarChart3 } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: FileText,
      title: '日々のルーチンで業務が逼迫',
      subtitle: '「毎日が作業で終わる」',
      description: '「本来やるべき戦略検討に時間を使えていない…」'
    },
    {
      icon: User,
      title: '知識と業務が属人化',
      subtitle: '「担当者不在で停滞」',
      description: '「あの人が辞めたら、この業務は回らなくなる…」'
    },
    {
      icon: Monitor,
      title: 'デジタル化の開始手順が不明',
      subtitle: '「何から手を付けるべきか」',
      description: '「IT投資で失敗したくないが、相談相手がいない…」'
    },
    {
      icon: Settings,
      title: 'ツール導入後に運用定着せず',
      subtitle: '「結局 Excel に逆戻り」',
      description: '「高い費用をかけたのに、誰も使ってくれない…」'
    },
    {
      icon: Clock,
      title: '書類作成・入力に時間を要す',
      subtitle: '「転記ミスが発生」',
      description: '「単純作業のミスで、顧客の信頼を損ねたくない…」'
    },
    {
      icon: BarChart3,
      title: '複数の管理表が肥大化',
      subtitle: '「全体像が把握できない」',
      description: '「正確な経営判断に必要なデータがすぐに出てこない…」'
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto mt-6 sm:mt-8 md:mt-12 px-4 sm:px-0">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-normal">
              AIが実現する、人にしかできない仕事に集中できる未来へ。
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light mt-4">
              中小企業診断士とAIエンジニアが最適な効率化を設計し、<br className="hidden sm:block" />
              一人当たり20%の業務削減を実現いたします。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                <problem.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">
                {problem.title}
              </h3>
              <p className="text-base sm:text-base text-gray-900 font-medium mb-3 sm:mb-4">
                {problem.subtitle}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;