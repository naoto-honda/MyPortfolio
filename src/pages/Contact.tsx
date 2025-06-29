import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import H2 from '../components/H2';
import Header from '../components/Header';

// フォームデータの型
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  // ページがマウントされた際にスクロールトップ
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // フォームデータの状態に型を指定
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // エラーメッセージの型（stringまたはnull）
  const [error, setError] = useState<string | null>(null);

  // 入力フィールドの変更時の型指定
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // フォームの送信時の型指定
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      setError('すべてのフィールドを入力してください');
      return;
    }
    setError(null);
    // フォーム送信処理（API送信など）をここに追加
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'メール',
      content: 'naotobaske0429@gmail.com',
      color: 'bg-blue-500',
    },
    {
      icon: '📱',
      title: '電話',
      content: '090-9234-0824',
      color: 'bg-green-500',
    },
    {
      icon: '📍',
      title: '所在地',
      content: '神奈川県',
      color: 'bg-purple-500',
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto mt-32 md:mt-24 text-gray-800 px-5">
        <H2>Contact</H2>

        {/* お問い合わせ概要 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-8 h-1 bg-blue-500 mr-4"></div>
            お問い合わせ
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            新しいプロジェクトのご相談、技術的な質問、お仕事のご依頼など、
            お気軽にお問い合わせください。できる限り早くご返信いたします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                >
                  <span className="text-xl">{info.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {info.title}
                </h4>
                <p className="text-gray-600 text-sm">{info.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* お問い合わせフォーム */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-8 h-1 bg-green-500 mr-4"></div>
              お問い合わせフォーム
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700 mb-3"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="山田 太郎"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700 mb-3"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700 mb-3"
                >
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="お問い合わせ内容を詳しくお聞かせください..."
                  rows={6}
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-center">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 text-lg"
              >
                送信する
              </button>
            </form>
          </div>
        </div>

        {/* よくある質問 */}
        <div className="mt-16 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-8 h-1 bg-purple-500 mr-4"></div>
              よくある質問
            </h3>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Q. どのようなプロジェクトに対応可能ですか？
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  フロントエンド開発を中心に、React、TypeScript、Next.jsを使用したWebアプリケーション開発に対応しています。
                  レスポンシブデザイン、パフォーマンス最適化、アクセシビリティ対応も行っています。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Q. 開発期間はどのくらいかかりますか？
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  プロジェクトの規模や要件によって異なりますが、小規模なWebサイトであれば1-2週間、
                  中規模のWebアプリケーションであれば1-2ヶ月程度を目安としています。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Q. リモートでの開発は可能ですか？
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  はい、リモートでの開発に対応しています。オンライン会議ツールを使用した
                  コミュニケーションや、GitHubでの進捗管理を行っています。
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Q. 保守・運用サポートは提供していますか？
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  開発後の保守・運用サポートも提供可能です。バグ修正、機能追加、
                  パフォーマンス改善など、継続的なサポートを行っています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
