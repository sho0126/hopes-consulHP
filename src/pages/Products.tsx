import React, { useState } from 'react';
import { Sparkles, Search, Code, Mail, ArrowRight, Clock, Lightbulb, Zap } from 'lucide-react';

const Products = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const products = [
    {
      icon: Sparkles,
      name: 'AI業務自動化パッケージ',
      status: '開発中',
      statusColor: 'bg-blue-100 text-blue-800',
      description: 'Custom GPTsを活用した業務自動化ツール群。文書作成、データ分析、顧客対応などの定型業務を効率化します。',
      features: [
        '文書自動生成機能',
        'データ分析・レポート作成',
        '顧客問い合わせ自動対応',
        '業務フロー最適化'
      ],
      expectedLaunch: '2024年春予定'
    },
    {
      icon: Search,
      name: '効率化診断ツール',
      status: '企画中',
      statusColor: 'bg-yellow-100 text-yellow-800',
      description: '企業のデジタル化レベルを診断し、最適な効率化戦略を提案するオンラインツールです。',
      features: [
        '現状のデジタル化レベル診断',
        'カスタマイズされた改善提案',
        'ROI試算機能',
        '実装ロードマップ生成'
      ],
      expectedLaunch: '2024年夏予定'
    },
    {
      icon: Code,
      name: 'ノーコード開発プラットフォーム',
      status: '構想中',
      statusColor: 'bg-gray-100 text-gray-800',
      description: '中小企業向けに特化したノーコード開発環境。専門知識なしでビジネスアプリケーションを構築できます。',
      features: [
        'ドラッグ&ドロップでアプリ作成',
        '豊富なテンプレート',
        'クラウド連携機能',
        '運用サポート付き'
      ],
      expectedLaunch: '2024年冬予定'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">COMING SOON</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Products
            </h1>
            
            <p className="text-xl md:text-2xl mb-16 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              革新的なプロダクトを開発中です。
              <br />
              最新情報をお届けしますので、ぜひご登録ください。
            </p>
          </div>
        </div>
      </section>

      {/* Products in Development */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              開発中のプロダクト
            </h2>
            <p className="text-xl text-gray-600 font-light">
              お客様のニーズに応える革新的なソリューションを準備しています
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl p-12 shadow-sm">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mb-6">
                      <product.icon className="h-10 w-10 text-white" />
                    </div>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-3xl font-light text-gray-900 mb-6">{product.name}</h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-8 text-lg">
                      {product.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-light text-gray-900 mb-4">主な機能</h4>
                        <ul className="space-y-3">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-light text-gray-900 mb-4">リリース予定</h4>
                        <div className="flex items-center text-gray-600 mb-6">
                          <Clock className="h-5 w-5 mr-3" />
                          {product.expectedLaunch}
                        </div>
                        <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-8 py-3 text-sm font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg">
                          詳細を問い合わせる
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              最新情報をお届け
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 font-light">
              プロダクトの開発状況やリリース情報を
              <br />
              いち早くお知らせいたします
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="メールアドレスを入力"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-8 py-3 font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg flex-shrink-0"
                >
                  登録
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Custom Development CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4">カスタム開発</h3>
                  <p className="text-gray-600 font-light">お客様のニーズに合わせた専用システムの開発</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4">迅速な対応</h3>
                  <p className="text-gray-600 font-light">プロトタイプから本格運用まで短期間で実現</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4">継続サポート</h3>
                  <p className="text-gray-600 font-light">導入後の運用・保守まで長期的にサポート</p>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                今すぐ必要なソリューションがありますか？
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 font-light">
                パッケージプロダクトの完成を待たずに、
                <br />
                お客様専用のシステムを開発いたします
              </p>
              
              <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-12 py-4 text-lg font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg inline-flex items-center">
                カスタム開発について相談する
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;