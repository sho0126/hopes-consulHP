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
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            課題の提示
          </h2>
          <p className="text-xl text-gray-600 font-light">
            以下に当てはまるものがあればチャンスです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-8">
                <problem.icon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-900 font-medium mb-4">
                {problem.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
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