import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-light bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent tracking-wide mb-6 block">
              HOPES CONSULTING
            </Link>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              AIとビジネスの架け橋となり、企業の真の成長を支援するコンサルティング会社です。
              中小企業診断士とAIエンジニアが最適な効率化を設計し、持続可能な成長を実現します。
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@hopes-consulting.co.jp</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-3" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3" />
                <span>東京都渋谷区○○○○</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-6">サービス</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                  AI導入支援
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                  効率化戦略策定
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                  受託開発
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                  補助金活用支援
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-6">会社情報</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                  会社概要
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                  ニュース
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                  プロダクト
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-light">
              © 2024 Hopes Consulting Co., Ltd. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-700 text-sm font-light transition-colors">
                プライバシーポリシー
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-700 text-sm font-light transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;