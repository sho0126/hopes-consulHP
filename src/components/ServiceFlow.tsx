import React from 'react';
import { Search, Wrench, TrendingUp } from 'lucide-react';

const ServiceFlow = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: '診断・計画策定',
      duration: '約1ヶ月',
      icon: Search,
      content: '経営課題ヒアリング、業務フローの徹底的な可視化、ボトルネック特定、課題の優先順位付け、投資対効果（ROI）の試算',
      outcome: '現状の課題と、どこから手をつければ最も効果が出るかが一目でわかる「効率化戦略マップ」と「ROIシミュレーションシート」をご提出します。',
      color: 'bg-gray-900'
    },
    {
      phase: 'Phase 2',
      title: '改善実装',
      duration: '約1〜2ヶ月',
      icon: Wrench,
      content: '効率化戦略マップに基づき、最も効果的なツールを選定・ご提案。プロトタイプを構築し、現場でのテスト運用を実施。業務マニュアルの整備と社員様向け研修の実施。',
      outcome: '特定の業務において、具体的な時間削減（目標：月160時間など）を実証します。社員の皆様が自走できる状態を目指します。',
      color: 'bg-gray-700'
    },
    {
      phase: 'Phase 3',
      title: '効果測定・定着支援',
      duration: '3ヶ月目以降',
      icon: TrendingUp,
      content: '導入効果（削減時間、コスト、ミス発生率など）をモニタリング。現場からのフィードバックに基づき追加チューニングを実施。社内での成功事例としてナレッジ共有を支援。',
      outcome: '一過性の改善で終わらず、継続的に業務改善が生まれる組織文化の土台を構築します。',
      color: 'bg-gray-600'
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            サービスの流れと料金
          </h2>
          <p className="text-xl text-gray-600 font-light">
            お客様の状況に合わせて柔軟に対応しますが、標準的な進め方は以下の通りです。
          </p>
        </div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {index < phases.length - 1 && (
                <div className="absolute left-10 top-32 w-px h-40 bg-gray-200"></div>
              )}
              
              <div className="flex flex-col lg:flex-row items-start gap-16">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 ${phase.color} rounded-full flex items-center justify-center mb-6`}>
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500 tracking-wide">{phase.phase}</div>
                    <div className="text-sm text-gray-400 font-light">{phase.duration}</div>
                  </div>
                </div>

                <div className="flex-grow bg-white rounded-3xl p-12 shadow-sm">
                  <h3 className="text-3xl font-light text-gray-900 mb-8">{phase.title}</h3>
                  
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-xl font-light text-gray-900 mb-4">主な内容</h4>
                      <p className="text-gray-600 leading-relaxed font-light">{phase.content}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-light text-gray-900 mb-4">成果イメージ</h4>
                      <p className="text-gray-600 leading-relaxed font-light">{phase.outcome}</p>
                    </div>
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

export default ServiceFlow;