import React from 'react';
import { FileText, Users, Clock, CheckCircle, ArrowRight, Scale, Calculator, Briefcase } from 'lucide-react';

const Shigyo効率化 = () => {
  const challenges = [
    {
      icon: FileText,
      title: '専門業務の時間が事務作業に奪われる',
      currentIssues: [
        '同じような書類なのに毎回ゼロから作成',
        '過去の類似案件を探すのに30分以上'
      ],
      solutions: [
        'よく使う書類をテンプレート化し、必要箇所だけ入力',
        '過去案件を瞬時に検索できるシステム構築'
      ]
    },
    {
      icon: Users,
      title: '"あの人じゃないと分からない"問題',
      currentIssues: [
        'ベテランが休むと業務が止まる',
        '引き継ぎに膨大な時間がかかる',
        '「この件どうなってる？」に即答できない'
      ],
      solutions: [
        '顧客とのやり取りを自動記録',
        '誰でも対応できる業務マニュアルのデジタル化'
      ]
    },
    {
      icon: Clock,
      title: '繁忙期の残業地獄と収益性の低下',
      currentIssues: [
        '決算期・年度末に残業発生',
        'ミスによるやり直しで二度手間'
      ],
      solutions: [
        '繰り返し作業を自動化し、ピーク時の負荷軽減',
        'AIチェックでミスを事前に防止'
      ]
    }
  ];

  const caseStudies = [
    {
      icon: Briefcase,
      type: '司法書士法人',
      size: '従業員5名',
      challenges: [
        '登記見積書作成に1件15分、日に10件以上作成',
        'メール返信の定型文作成が煩雑'
      ],
      solutions: [
        '登記見積書の自動作成システム構築',
        'AIによるメール下書き自動生成ツール構築'
      ],
      results: [
        '見積書作成時間を完全自動化',
        'メール対応時間を80%削減',
        '月間60時間のコア業務時間創出'
      ]
    },
    {
      icon: Calculator,
      type: '税理士法人',
      size: '従業員40名',
      challenges: [
        '面談後の議事録作成が負担（1件1時間）',
        'クライアントからの受領書類の整理に時間'
      ],
      solutions: [
        'AI音声認識による面談議事録の自動作成',
        'AIによる受領書類の自動整理・分類システム'
      ],
      results: [
        '議事録作成時間を80%削減（1時間→12分）',
        '書類整理の完全自動化で月40時間削減',
        'スタッフが税務相談業務に注力できる環境を整備'
      ]
    }
  ];

  const plans = [
    {
      name: 'スポットプラン',
      price: '単発5万円〜',
      features: [
        '1業務のデジタル化',
        '既存ツールの活用提案',
      ]
    },
    {
      name: 'プレミアムプラン',
      price: '月額15万円〜',
      features: [
        '事務所全体の効率化推進',
        'コンサルタントによる伴走支援',
      ],
      recommended: true
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            士業の専門性を、テクノロジーで最大化する
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            〜業務効率化で、より多くのクライアントに価値を〜
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            法律事務所・税理士事務所・司法書士事務所など、士業特有の課題を熟知した中小企業診断士が、最適なデジタル化をご支援します。
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#contact"
              className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-10 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              無料相談を申し込む
            </a>
            <a
              href="#case-studies"
              className="border-2 border-gray-800 text-gray-800 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              導入実績を見る
            </a>
          </div>
        </div>
      </section>

      {/* Why We Are the Best Choice */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-12">
            なぜ当社が士業効率化の最適解なのか
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 md:p-12 shadow-sm">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <span className="font-semibold text-indigo-900">代表自身が司法書士法人を経営する現役司法書士であり、日々の業務課題に直面。<br　/>また所属の中小企業診断士は、数多くの士業事務所の経営課題に向き合ってきた経験があります。</span>
              <br />司法書士事務所の特異な業務フロー、税理士事務所の繁忙期における顧客対応、法律事務所の書類管理など、
              士業特有の課題を肌で理解しているからこそ、本当に必要な効率化を設計できます。
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              さらに、<span className="font-semibold text-indigo-900">AIエンジニアとのハイブリッドチーム</span>により、
              最新技術を士業の実務に最適化して導入。単なるシステム会社では実現できない、
              <span className="font-semibold text-indigo-900">「経営視点での投資対効果」と「現場での使いやすさ」</span>を両立させます。
            </p>
            <div className="bg-white rounded-2xl p-6 mt-8">
              <p className="text-center text-xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                業界No.1の士業特化型効率化サービス
              </p>
              <p className="text-center text-gray-600">
                士業事務所の効率化支援実績と専門性において、私たちは業界最高水準のサービスを提供します。
                他社にはない士業特化のノウハウと、実践的なソリューションで貴事務所の成長を加速させます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-16">
            士業事務所の課題と解決例
          </h2>
          <div className="space-y-20">
            {challenges.map((challenge, index) => (
              <div key={index}>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center">
                    <challenge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold ml-4">{challenge.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 rounded-2xl p-6 h-full">
                    <h4 className="text-lg font-semibold text-red-800 mb-4">現状の課題</h4>
                    <ul className="space-y-2">
                      {challenge.currentIssues.map((issue, i効率化) => (
                        <li key={i効率化} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-700">{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 h-full">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">当社の解決例</h4>
                    <ul className="space-y-3">
                      {challenge.solutions.map((solution, i効率化) => (
                        <li key={i効率化} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-16">
            導入実績例
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{study.type}</h3>
                <p className="text-gray-600 text-center mb-6">{study.size}</p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-600 mb-2">課題</p>
                    <ul className="space-y-1">
                      {study.challenges.map((challenge, i効率化) => (
                        <li key={i効率化} className="text-sm text-gray-700">• {challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-blue-600 mb-2">施策</p>
                    <ul className="space-y-1">
                      {study.solutions.map((solution, i効率化) => (
                        <li key={i効率化} className="text-sm text-gray-700">• {solution}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-green-600 mb-2">成果</p>
                    <ul className="space-y-1">
                      {study.results.map((result, i効率化) => (
                        <li key={i効率化} className="text-sm font-semibold text-green-800">• {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
            料金プラン
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 flex flex-col ${
                  plan.recommended
                    ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-xl'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="h-8 mb-4">
                  {plan.recommended ? (
                    <div className="bg-white text-indigo-900 text-sm font-semibold px-4 py-1 rounded-full inline-block">
                      おすすめ
                    </div>
                  ) : (
                    <div className="text-gray-600 text-sm font-medium">
                      まずはお試し
                    </div>
                  )}
                </div>
                <h3 className={`text-2xl font-semibold mb-4 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-3xl font-bold mb-6 ${plan.recommended ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent'}`}>
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8 flex-grow min-h-[100px]">
                  {plan.features.map((feature, i効率化) => (
                    <li key={i効率化} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.recommended ? 'text-white' : 'text-blue-600'}`} />
                      <span className={plan.recommended ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 rounded-full font-medium transition-all duration-300 text-center block ${
                    plan.recommended
                      ? 'bg-white text-indigo-900 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white hover:shadow-lg'
                  }`}
                >
                  無料相談を申し込む
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 効率化 for Legal Professionals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-16">
            なぜ士業にこそ効率化が必要か
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">付加価値業務への集中</h3>
              <p className="text-gray-600">
                定型業務を自動化し、法的助言や税務コンサルティングなど高付加価値業務に注力
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">若手人材の確保</h3>
              <p className="text-gray-600">
                効率化推進により働きやすい環境を整備し、優秀な人材を獲得
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">競合との差別化</h3>
              <p className="text-gray-600">
                迅速・正確なサービス提供により、顧客満足度向上
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">
            士業事務所の効率化化を今すぐ始めましょう
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            まずは無料相談から。貴事務所の課題をお聞かせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-indigo-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              無料相談を申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shigyo効率化;