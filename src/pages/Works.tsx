import { useEffect } from 'react';
import Footer from '../components/Footer';
import H2 from '../components/H2';
import Header from '../components/Header';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  category: 'personal' | 'work' | 'learning';
}

const Works = () => {
  // ページがマウントされた際にスクロールトップ
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'ポートフォリオサイト',
      description:
        'React、TypeScript、Tailwind CSSを使用したモダンなポートフォリオサイト。レスポンシブデザインとアニメーションを実装し、ユーザー体験を重視した設計を行いました。',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: '/img/portfolio.jpg',
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.com',
      category: 'personal',
    },
    {
      id: 2,
      title: 'ブログシステム',
      description:
        'Markdown対応のブログシステム。Next.js、MDX、Tailwind CSSを使用し、SEO対策とパフォーマンス最適化を行いました。',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'SEO'],
      image: '/img/blog-image.jpg',
      github: 'https://github.com/naoto-honda/blog-site',
      demo: 'https://blog-site-two-rosy.vercel.app/',
      category: 'personal',
    },
    {
      id: 3,
      title: 'タスク管理アプリ',
      description:
        'ドラッグ&ドロップ機能付きのタスク管理アプリケーション。React DnD、LocalStorageを使用し、オフラインでも動作する設計にしました。',
      technologies: ['React', 'React DnD', 'LocalStorage', 'CSS'],
      image: '/img/task-manager.jpg',
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.com',
      category: 'personal',
    },
    // {
    //   id: 4,
    //   title: 'ECサイト管理画面',
    //   description:
    //     '商品管理、在庫管理、注文管理機能を持つECサイトの管理画面。React、Node.js、MySQLを使用したフルスタック開発を行いました。',
    //   technologies: ['React', 'Node.js', 'Express', 'MySQL', 'TypeScript'],
    //   image: '/img/ecommerce.jpg',
    //   category: 'work',
    // },
    // {
    //   id: 5,
    //   title: 'SNSアプリケーション',
    //   description:
    //     'ユーザー認証、投稿機能、いいね機能を持つSNSアプリケーション。Next.js、Prisma、PostgreSQLを使用し、リアルタイム機能も実装しました。',
    //   technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
    //   image: '/img/sns.jpg',
    //   github: 'https://github.com/yourusername/sns-app',
    //   category: 'learning',
    // },
    // {
    //   id: 6,
    //   title: '天気予報アプリ',
    //   description:
    //     'OpenWeatherMap APIを使用した天気予報アプリケーション。位置情報取得、5日間予報、アニメーション効果を実装しました。',
    //   technologies: ['React', 'API', 'Geolocation', 'CSS Animations'],
    //   image: '/img/weather.jpg',
    //   github: 'https://github.com/yourusername/weather-app',
    //   category: 'learning',
    // },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'personal':
        return 'bg-blue-500';
      case 'work':
        return 'bg-green-500';
      case 'learning':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'personal':
        return '個人プロジェクト';
      case 'work':
        return '業務プロジェクト';
      case 'learning':
        return '学習プロジェクト';
      default:
        return 'その他';
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-32 md:mt-24 text-gray-800 px-5">
        <H2>Works</H2>

        {/* プロジェクト概要 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-8 h-1 bg-blue-500 mr-4"></div>
            プロジェクト一覧
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            これまでに取り組んだプロジェクトの一部をご紹介します。個人プロジェクト、業務プロジェクト、学習プロジェクトと
            様々な経験を通じて、フロントエンド開発のスキルを向上させてきました。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">個人プロジェクト</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">1</div>
              <div className="text-sm text-gray-600">業務プロジェクト</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">2</div>
              <div className="text-sm text-gray-600">学習プロジェクト</div>
            </div>
          </div>
        </div>

        {/* プロジェクト一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* プロジェクト画像 */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(
                    project.category
                  )}`}
                >
                  {getCategoryLabel(project.category)}
                </div>
              </div>

              {/* プロジェクト情報 */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* 使用技術 */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    使用技術
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* リンクボタン */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300 text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-500 text-white text-center py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm"
                    >
                      デモ
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 今後の展望 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-8 h-1 bg-green-500 mr-4"></div>
            今後の展望
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                技術的な目標
              </h4>
              <ul className="text-gray-600 space-y-2">
                <li>• マイクロフロントエンドアーキテクチャの習得</li>
                <li>• パフォーマンス最適化技術の向上</li>
                <li>• アクセシビリティ対応の強化</li>
                <li>• テスト駆動開発の実践</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                キャリア目標
              </h4>
              <ul className="text-gray-600 space-y-2">
                <li>• チームリーダーとしての経験を積む</li>
                <li>• 技術的な意思決定への参加</li>
                <li>• 後輩エンジニアの育成</li>
                <li>• オープンソースへの貢献</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
