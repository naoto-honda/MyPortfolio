import { ChangeEvent, FormEvent, useState } from 'react';
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

  return (
    <>
      <Header />
      <div className="container mx-auto mt-24 text-gray-800">
        <H2>Contact</H2>
        <div className="max-w-lg mx-auto mt-8 p-8 border-2 border-gray-300 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-blue transition"
                placeholder="お名前を入力してください"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-blue transition"
                placeholder="メールアドレスを入力してください"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-blue transition"
                placeholder="メッセージを入力してください"
                rows={4}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-custom-blue text-white p-3 rounded-lg mt-4 hover:bg-custom-blue-dark focus:outline-none focus:ring-2 focus:ring-custom-blue transition"
            >
              送信
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
