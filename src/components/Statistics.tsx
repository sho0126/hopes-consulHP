import React from 'react';

const Statistics = () => {
  const stats = [
    {
      number: '100+',
      label: '支援企業数',
      description: '様々な業界の企業様をサポート'
    },
    {
      number: '20%',
      label: '平均業務削減率',
      description: '一人当たりの業務時間を大幅削減'
    },
    {
      number: '1.2億円',
      label: '補助金取得実績',
      description: '累計取得額の実績'
    },
    {
      number: '95%',
      label: '顧客満足度',
      description: 'お客様からの高い評価'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            実績
          </h2>
          <p className="text-xl text-gray-600 font-light">
            数字で見る私たちの成果
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 font-light text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;