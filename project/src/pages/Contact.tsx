import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Web3Forms APIキー
    const WEB3FORMS_ACCESS_KEY = '6ba5fb36-1855-4c12-a11b-fe9e8802f9ec';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `【お問い合わせ】${formData.subject}`,
          from_name: formData.name,
          email: formData.email,
          message: `
お名前: ${formData.name}
会社名: ${formData.company || '未記入'}
メールアドレス: ${formData.email}
電話番号: ${formData.phone || '未記入'}
お問い合わせ種別: ${formData.subject}

お問い合わせ内容:
${formData.message}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('お問い合わせを送信しました。1営業日以内にご連絡いたします。');
        // フォームをリセット
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage('送信に失敗しました。お手数ですが、直接メールにてお問い合わせください。');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('エラーが発生しました。お手数ですが、直接メールにてお問い合わせください。');
    } finally {
      setIsSubmitting(false);
      // 5秒後にメッセージを非表示
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'メール',
      content: 'info.hopesconsul@gmail.com',
      description: '24時間受付、1営業日以内に返信'
    },
    {
      icon: Phone,
      title: '電話',
      content: 'お問い合わせフォームより',
      description: 'メールでのお問い合わせを推奨'
    },
    {
      icon: MapPin,
      title: '所在地',
      content: '東京都渋谷区渋谷2-2-4',
      description: '青山アルコープ402号室'
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
      {/* Hero Section with Banner */}
      <section className="relative bg-white">
        {/* Banner Image */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/contact-banner.png')`,
            }}
          >
            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="mb-6">
                <span className="text-base font-semibold text-white tracking-widest uppercase drop-shadow-lg">GET IN TOUCH</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-medium mb-8 text-white drop-shadow-2xl">
                Contact
              </h1>

              <p className="text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-lg">
                お気軽にお問い合わせください。
                <br />
                専門スタッフが丁寧にご対応いたします。
              </p>
            </div>
          </div>

          {/* Gradient Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
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
                <option value="効率化-strategy">効率化戦略策定について</option>
                <option value="development">受託開発について</option>
                <option value="shigyo-効率化">士業効率化+について</option>
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

            {/* Status Message */}
            {submitStatus !== 'idle' && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <p>{statusMessage}</p>
              </div>
            )}


            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-12 py-4 text-lg font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg inline-flex items-center ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    送信中...
                    <div className="ml-2 animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  </>
                ) : (
                  <>
                    送信する
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
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