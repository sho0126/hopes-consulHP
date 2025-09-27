import React from 'react';
import { CheckCircle, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: '診断・戦略策定プラン',
      price: '20万円',
      duration: '（税別）',
      description: 'まずは課題を整理し、どこから手をつけるべきか明確にしたい企業様向け',
      features: [
        'Phase 1のみの提供',
        '経営課題ヒアリング',
        '業務フローの可視化',
        'ボトルネック特定',
        '効率化戦略マップの作成',
        'ROIシミュレーションシート'
      ],
      icon: Zap,
      color: 'bg-gray-700',
      popular: false
    },
    {
      name: '標準パッケージ',
      price: '60万円〜',
      duration: '（税別）／月',
      description: 'Phase 1〜3までを3ヶ月間でトータルサポート',
      features: [
        'Phase 1-3 完全対応',
        '業務の規模・数に応じて変動',
        'プロトタイプ構築・テスト運用',
        '社員向け研修の実施',
        '効果測定・モニタリング',
        '継続的な改善サポート'
      ],
      icon: Star,
      color: 'bg-gray-900',
      popular: true
    },
    {
      name: '成功報酬プラン',
      price: '要相談',
      duration: '',
      description: '初期費用を抑え、目標達成度に応じて報酬をいただくプラン',
      features: [
        '初期費用を大幅に削減',
        '成果に応じた報酬設定',
        '目標達成度による料金調整',
        'リスクを最小化',
        '長期的なパートナーシップ',
        '成果保証のコミットメント'
      ],
      icon: CheckCircle,
      color: 'bg-gray-600',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            お客様の状況に合わせて柔軟に対応いたします。
            まずはお見積りをご依頼ください。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-50 rounded-3xl p-10 ${plan.popular ? 'ring-2 ring-gray-900 transform scale-105' : ''} hover:bg-gray-100 transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide">
                    人気プラン
                  </div>
                </div>
              )}
              
              <div className={`w-20 h-20 ${plan.color} rounded-full flex items-center justify-center mb-8`}>
                <plan.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-light text-gray-900 mb-6">{plan.name}</h3>
              
              <div className="mb-8">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-light text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 font-light">{plan.duration}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-10 leading-relaxed font-light">
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full ${plan.color} text-white py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-200`}>
                お見積り依頼
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gray-900 rounded-3xl p-12 max-w-4xl mx-auto text-white">
            <h3 className="text-3xl font-light mb-6">まずは無料相談から</h3>
            <p className="text-gray-300 mb-8 leading-relaxed font-light">
              どのプランが最適か分からない場合は、まず無料相談をご利用ください。
              貴社の現状をお伺いし、最適なアプローチをご提案いたします。
            </p>
            <button className="bg-white text-gray-900 px-12 py-4 text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300">
              無料相談を予約する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;