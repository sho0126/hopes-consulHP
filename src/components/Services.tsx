import React from 'react';
import { Users, Lightbulb } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            AIが実現する、人にしかできない仕事に集中できる未来へ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Users className="h-8 w-8 text-gray-700" />
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  創造性を発揮できる環境
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  日々の雑務から解放され、社員が創造性を発揮し、事業の未来を考える時間を十分に確保できる
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Lightbulb className="h-8 w-8 text-gray-700" />
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  ノウハウの形式知化
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  長年の経験で培われたノウハウが形式知化され、若手社員が即戦力として活躍する
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <div className="mb-8">
              <h3 className="text-3xl font-light text-gray-900 mb-8">実現可能な成果</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-700 font-light">業務時間削減</span>
                <span className="text-2xl font-light text-gray-900">20%以上</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-700 font-light">ミス発生率低下</span>
                <span className="text-2xl font-light text-gray-900">80%以上</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-gray-700 font-light">生産性向上</span>
                <span className="text-2xl font-light text-gray-900">30%以上</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;