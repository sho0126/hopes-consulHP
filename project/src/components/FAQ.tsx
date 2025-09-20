import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'AIやITの知識がなくても導入可能でしょうか？',
      answer: 'はい、全く問題ございません。現場での丁寧なヒアリングから始まり、専門用語を使わずに分かりやすく説明いたします。導入後も社員様が自走できるよう、分かりやすいマニュアル作成と研修を行います。'
    },
    {
      question: '効果が出るまでの期間はどの程度でしょうか？',
      answer: 'プロトタイプでの効果実証は最短1ヶ月で可能です。本格導入においても3ヶ月で効果測定ができるよう設計しています。ただし、業務の複雑さや規模により期間は変動する場合があります。'
    },
    {
      question: '対応エリアについて教えてください',
      answer: '全国どちらでもオンラインで対応可能です。首都圏（東京・神奈川・千葉・埼玉）については、対面でのご訪問も承っております。お客様のご都合に合わせて最適な形でサポートいたします。'
    },
    {
      question: 'セキュリティは大丈夫でしょうか？',
      answer: 'はい、もちろんです。お客様の大切な情報をお預かりする上で、セキュリティは最優先事項です。使用するツールやプラットフォームは、業界標準のセキュリティ基準を満たすもののみを選定します。具体的な対策については、個別にご説明いたします。'
    },
    {
      question: '導入後、自分たちだけで運用できるか不安です',
      answer: 'ご安心ください。私たちは「社員の皆様が自走できる」状態を目指し、分かりやすいマニュアル作成と丁寧な研修を行います。また、導入後も一定期間のサポートや、いつでも相談できる保守運用プランもご用意しております。'
    },
    {
      question: '費用対効果が本当に出るのか、まだ半信半疑です',
      answer: 'そのご懸念はもっともです。だからこそ、私たちはPhase 1の「現状分析・投資効果試算」に力を入れています。感覚的な「良さそう」ではなく、具体的な数字で効果を予測し、ご納得いただいた上で次のステップに進みます。まずは無料相談で、貴社の状況をお聞かせください。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            よくあるご質問
          </h2>
          <p className="text-xl text-gray-600 font-light">
            お客様からよくいただくご質問にお答えします
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <button
                className="w-full px-10 py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-light text-gray-900 pr-6">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-10 pb-8">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed font-light text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-light mb-6">他にもご質問がございましたら</h3>
          <p className="text-gray-300 mb-8 font-light">
            お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
          </p>
          <button className="bg-white text-gray-900 px-12 py-4 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors duration-200">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;