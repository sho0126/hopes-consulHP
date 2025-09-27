import React from 'react';

const Terms = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            利用規約
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
                <p className="text-gray-600 leading-relaxed">
                  本利用規約（以下、「本規約」といいます。）は、ホープスコンサルティング株式会社（以下、「当社」といいます。）が
                  提供するウェブサイトおよびサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
                  ご利用のお客様（以下、「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第1条（適用）</h2>
                <p className="text-gray-600 leading-relaxed">
                  本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                  当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。
                  これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第2条（利用登録）</h2>
                <p className="text-gray-600 leading-relaxed">
                  登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
                  当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                  <li>本規約に違反したことがある者からの申請である場合</li>
                  <li>その他、当社が利用登録を相当でないと判断した場合</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第3条（禁止事項）</h2>
                <p className="text-gray-600 leading-relaxed">
                  ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社、本サービスの他のユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当社のサービスの運営を妨害するおそれのある行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>他のユーザーに成りすます行為</li>
                  <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>当社、本サービスの他のユーザーまたはその他の第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第4条（本サービスの提供の停止等）</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第5条（著作権）</h2>
                <p className="text-gray-600 leading-relaxed">
                  本サービスに関する著作権、特許権、商標権、その他一切の知的財産権は、当社または当社にライセンスを許諾している者に帰属します。
                  本規約に基づく本サービスの利用許諾は、本サービスに関する当社または当社にライセンスを許諾している者の知的財産権の使用許諾を意味するものではありません。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第6条（保証の否認および免責事項）</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                </p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第7条（サービス内容の変更等）</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第8条（利用規約の変更）</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>本規約の変更がユーザーの一般の利益に適合するとき</li>
                  <li>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第9条（個人情報の取扱い）</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">第10条（準拠法・裁判管轄）</h2>
                <p className="text-gray-600 leading-relaxed">
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-gray-900">お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed">
                  本利用規約に関するお問い合わせは、以下の連絡先までお願いいたします。
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

export default Terms;