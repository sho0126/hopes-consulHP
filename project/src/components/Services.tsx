import React from 'react';
import { Users, Lightbulb } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
            AIが実現する、人にしかできない仕事に集中できる未来へ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center shadow-sm">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-3 sm:mb-4">
                  作業からの解放。本質的な業務への集中
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                  日々の雑務から解放され、人にしかできない業務に集中。事業の未来を考える時間を十分に確保できる体制を構築します
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center shadow-sm">
                <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-3 sm:mb-4">
                  ノウハウの形式知化
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                  長年の経験で培われたノウハウが形式知化され、若手社員が即戦力として活躍する
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-sm">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-6 sm:mb-8">実現可能な成果</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-100">
                <span className="text-sm sm:text-base text-gray-700 font-light">業務時間削減</span>
                <span className="text-xl sm:text-2xl font-light text-gray-900">20%以上</span>
              </div>
              <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-100">
                <span className="text-sm sm:text-base text-gray-700 font-light">ミス発生率低下</span>
                <span className="text-xl sm:text-2xl font-light text-gray-900">80%以上</span>
              </div>
              <div className="flex items-center justify-between py-3 sm:py-4">
                <span className="text-sm sm:text-base text-gray-700 font-light">生産性向上</span>
                <span className="text-xl sm:text-2xl font-light text-gray-900">30%以上</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;