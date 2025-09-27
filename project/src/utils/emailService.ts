interface EmailData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// EmailJS を使用したメール送信（無料プラン対応）
export const sendEmailViaEmailJS = async (formData: EmailData): Promise<boolean> => {
  // EmailJS の設定
  // 1. https://www.emailjs.com/ でアカウント作成
  // 2. Email Service を追加 (Gmail推奨)
  // 3. Email Template を作成
  // 4. 以下のIDを環境変数に設定

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  // EmailJS SDK を使用する場合
  try {
    const templateParams = {
      to_email: 'info.hopesconsul@gmail.com',
      from_name: formData.name,
      from_company: formData.company,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    // EmailJS SDK を使用しない場合のFetch API実装
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: templateParams,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
};

// Web3Forms を使用したメール送信（より簡単な代替案）
export const sendEmailViaWeb3Forms = async (formData: EmailData): Promise<boolean> => {
  // Web3Forms の設定
  // 1. https://web3forms.com/ でアクセスキーを取得
  // 2. メール送信先をinfo.hopesconsul@gmail.comに設定
  // 3. 以下のアクセスキーを環境変数に設定

  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `【お問い合わせ】${formData.subject}`,
        from_name: formData.name,
        email: formData.email,
        message: `
お名前: ${formData.name}
会社名: ${formData.company}
メールアドレス: ${formData.email}
電話番号: ${formData.phone}
お問い合わせ種別: ${formData.subject}

お問い合わせ内容:
${formData.message}
        `,
      }),
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
};

// Formspree を使用したメール送信（もう一つの代替案）
export const sendEmailViaFormspree = async (formData: EmailData): Promise<boolean> => {
  // Formspree の設定
  // 1. https://formspree.io/ でフォームを作成
  // 2. メール送信先をinfo.hopesconsul@gmail.comに設定
  // 3. フォームのエンドポイントIDを取得

  const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID';

  try {
    const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
        _subject: `【お問い合わせ】${formData.subject}`,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
};

// メインのメール送信関数
export const sendEmail = async (formData: EmailData): Promise<{ success: boolean; message: string }> => {
  // 環境変数でサービスを選択
  const emailService = import.meta.env.VITE_EMAIL_SERVICE || 'web3forms';

  let success = false;
  let message = '';

  try {
    switch (emailService) {
      case 'emailjs':
        success = await sendEmailViaEmailJS(formData);
        break;
      case 'formspree':
        success = await sendEmailViaFormspree(formData);
        break;
      case 'web3forms':
      default:
        success = await sendEmailViaWeb3Forms(formData);
        break;
    }

    if (success) {
      message = 'お問い合わせを送信しました。1営業日以内にご連絡いたします。';
    } else {
      message = 'メールの送信に失敗しました。お手数ですが、直接メールにてお問い合わせください。';
    }
  } catch (error) {
    console.error('Email error:', error);
    message = 'エラーが発生しました。お手数ですが、直接メールにてお問い合わせください。';
  }

  return { success, message };
};