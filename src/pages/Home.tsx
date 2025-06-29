import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  const skills = [
    { name: 'React', percentage: 85, color: 'bg-blue-500' },
    { name: 'TypeScript', percentage: 80, color: 'bg-blue-600' },
    { name: 'Next.js', percentage: 75, color: 'bg-black' },
    { name: 'Tailwind CSS', percentage: 90, color: 'bg-cyan-500' },
    { name: 'Node.js', percentage: 70, color: 'bg-green-600' },
    { name: 'Git/GitHub', percentage: 85, color: 'bg-gray-800' },
  ];

  const highlights = [
    {
      icon: '💻',
      title: 'フロントエンド開発',
      description:
        'React、TypeScript、Next.jsを活用したモダンなWebアプリケーション開発',
      color: 'bg-blue-500',
    },
    {
      icon: '🎨',
      title: 'UI/UXデザイン',
      description: 'ユーザー体験を重視した直感的で美しいインターフェースの設計',
      color: 'bg-purple-500',
    },
    {
      icon: '🚀',
      title: 'パフォーマンス最適化',
      description: '高速でレスポンシブなアプリケーションの構築と最適化',
      color: 'bg-green-500',
    },
    {
      icon: '🤝',
      title: 'チーム開発',
      description: 'アジャイル開発、コードレビュー、技術共有を通じた協働',
      color: 'bg-orange-500',
    },
  ];

  return (
    <>
      <Header />

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 mt-6">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  👋 フロントエンドエンジニア
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Naoto Honda
                  <br />
                  <span className="text-blue-600">Web Developer</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  ユーザー体験を最優先に考え、モダンな技術スタックを活用して
                  美しく使いやすいWebアプリケーションを創造します。
                  継続的な学習とチーム開発を通じて、常に成長し続けるエンジニアです。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    お問い合わせ
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/works"
                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    作品を見る
                  </Link>
                </div>
              </div>

              {/* 統計 */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600">年経験</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">プロジェクト</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">継続学習</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/img/myself.jpg"
                  alt="Naoto Honda"
                  className="w-80 h-80 object-cover rounded-full shadow-2xl mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 専門分野セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              専門分野
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              フロントエンド開発を中心に、ユーザー体験の向上と技術的な課題解決に取り組んでいます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                技術スキル
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                React、TypeScript、Next.jsを中心としたモダンなフロントエンド技術スタックを習得しています。
                継続的な学習を通じて、最新の技術トレンドにも対応しています。
              </p>
              <Link
                to="/skills"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                スキル詳細を見る
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="w-full">
              <div className="bg-white rounded-xl shadow-lg p-8">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新プロジェクトセクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              最新プロジェクト
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最近取り組んだプロジェクトの一部をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ポートフォリオサイト
                </h3>
                <p className="text-gray-600 mb-4">
                  React、TypeScript、Tailwind
                  CSSを使用したモダンなポートフォリオサイト
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    Tailwind
                  </span>
                </div>
                <Link
                  to="/works"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ブログシステム
                </h3>
                <p className="text-gray-600 mb-4">
                  Next.js、MDXを使用したMarkdown対応のブログシステム
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    MDX
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    SEO
                  </span>
                </div>
                <Link
                  to="/works"
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-4xl">✅</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  タスク管理アプリ
                </h3>
                <p className="text-gray-600 mb-4">
                  ドラッグ&ドロップ機能付きのタスク管理アプリケーション
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    DnD
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    LocalStorage
                  </span>
                </div>
                <Link
                  to="/works"
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/works"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              すべてのプロジェクトを見る
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            一緒に素晴らしいプロダクトを作りませんか？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            お気軽にお問い合わせください。新しいプロジェクトや技術的な相談など、
            どんなことでもお聞かせください。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            お問い合わせ
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
