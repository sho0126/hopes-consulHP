import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'メール',
      content: 'info@hopes-consulting.co.jp',
      description: '24時間受付、1営業日以内に返信'
    },
    {
      icon: Phone,
      title: '電話',
      content: '03-1234-5678',
      description: '平日 9:00-18:00'
    },
    {
      icon: MapPin,
      title: '所在地',
      content: '東京都渋谷区○○○○',
      description: 'JR渋谷駅より徒歩5分'
    },
    {
      icon: Clock,
      title: '営業時間',
      content: '平日 9:00-18:00',
      description: '土日祝日は休業'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Contact
            </h1>
            
            <p className="text-xl md:text-2xl mb-16 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              お気軽にお問い合わせください。
              <br />
              専門スタッフが丁寧にご対応いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4">{info.title}</h3>
                <p className="text-lg font-medium text-gray-900 mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm font-light">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              お問い合わせフォーム
            </h2>
            <p className="text-xl text-gray-600 font-light">
              以下のフォームにご記入いただき、送信してください
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-3">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="山田 太郎"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-3">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="株式会社○○○"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-3">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="example@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-3">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="03-1234-5678"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-3">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">選択してください</option>
                <option value="consultation">無料相談</option>
                <option value="ai-support">AI導入支援について</option>
                <option value="dx-strategy">DX戦略策定について</option>
                <option value="development">受託開発について</option>
                <option value="subsidy">補助金活用支援について</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-3">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-12 py-4 text-lg font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg inline-flex items-center"
              >
                送信する
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            よくあるご質問
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            お問い合わせの前に、よくあるご質問もご確認ください
          </p>
          <button className="bg-white text-gray-700 px-8 py-3 text-lg font-medium tracking-wide hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-200">
            FAQを見る
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;