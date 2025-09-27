import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            プライバシーポリシー
          </h1>
          <p className="text-center text-gray-600">
            最終更新日：2025年1月1日
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">1. 個人情報の取得について</h2>
                <p className="text-gray-600 leading-relaxed">
                  ホープスコンサルティング株式会社（以下、「当社」といいます。）は、お客様から以下の情報を取得します。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>氏名</li>
                  <li>会社名</li>
                  <li>メールアドレス</li>
                  <li>電話番号</li>
                  <li>お問い合わせ内容</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">2. 個人情報の利用目的</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、お客様から取得した個人情報を以下の目的で利用いたします。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>お問い合わせへの返信</li>
                  <li>サービスに関するご案内</li>
                  <li>契約の履行</li>
                  <li>アフターサービスの提供</li>
                  <li>新サービスの開発・改善</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">3. 個人情報の第三者提供</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>お客様の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要な場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために必要な場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">4. 個人情報の安全管理</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、個人情報の紛失、破壊、改ざん、漏洩などのリスクに対して、個人情報の安全管理が図られるよう、適切な管理を行います。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">5. 個人情報の開示・訂正・削除</h2>
                <p className="text-gray-600 leading-relaxed">
                  お客様は、当社に対してご自身の個人情報の開示・訂正・削除を求めることができます。
                  お客様ご本人からの請求であることを確認の上、速やかに対応いたします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">6. Cookie（クッキー）の使用について</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社のウェブサイトでは、お客様により良いサービスを提供するため、Cookie を使用することがあります。
                  Cookie により個人を特定できる情報を取得することはありません。
                  また、お客様はブラウザの設定により Cookie の使用を拒否することができます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">7. アクセス解析ツールについて</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社のウェブサイトでは、Google Analytics を利用してアクセス情報を収集しています。
                  この際、IP アドレス等の情報を収集していますが、個人を特定する情報は収集していません。
                  収集した情報は、ウェブサイトの利用状況の分析や改善のために使用します。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">8. 法令等の遵守</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、個人情報保護法その他の法令・ガイドラインを遵守して、個人情報を取り扱います。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">9. プライバシーポリシーの変更</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                  変更した場合は、当社ウェブサイト上で公表いたします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">10. お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed">
                  本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">ホープスコンサルティング株式会社</p>
                  <p className="text-gray-600">
                    〒150-0002<br />
                    東京都渋谷区渋谷2丁目2番4号青山アルコープ402号室<br />
                    Email: info.hopesconsul@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;