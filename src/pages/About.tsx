import { useEffect } from 'react';
import Footer from '../components/Footer';
import H2 from '../components/H2';
import Header from '../components/Header';

const About = () => {
  // ページがマウントされた際にスクロールトップ
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    {
      year: '2019年',
      title: '立教大学 経済学部経済学科に入学',
      description: '経済学の基礎を学びながら、プログラミングへの興味が芽生える',
    },
    {
      year: '2020年',
      title: 'Web制作の学習開始',
      description:
        '学生時代に個人学習でWeb制作を始め、HTML、CSS、JavaScriptを独学',
    },
    {
      year: '2023年3月',
      title: '立教大学 経済学部経済学科を卒業',
      description: '経済学の知識とプログラミングスキルを両立',
    },
    {
      year: '2023年4月',
      title: '株式会社USENにエンジニアとして入社',
      description: 'エンジニアとしてのキャリアをスタート',
    },
    {
      year: '2024年4月',
      title: '株式会社ARPEGGIOにフロントエンジニアとして入社',
      description: 'フロントエンド開発に特化した環境でスキルを向上',
    },
    {
      year: '2024年8月',
      title: 'フロントエンジニアとして初出向',
      description: '実務経験を積みながら、より高度な技術に挑戦',
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto mt-32 md:mt-24 text-gray-800 px-5">
        <H2>About</H2>

        {/* プロフィールセクション */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <div className="relative">
                <img
                  src="/img/myself.jpg"
                  alt="自分の写真"
                  className="w-64 h-64 object-cover rounded-full shadow-lg mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Naoto Honda
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                経済学部出身のフロントエンドエンジニアです。学生時代からWeb制作に興味を持ち、
                独学でプログラミングを学びました。現在はReact、TypeScriptを中心とした
                モダンなフロントエンド開発に取り組んでいます。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600">年経験</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">プロジェクト</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">2</div>
                  <div className="text-sm text-gray-600">企業経験</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">継続学習</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 経歴タイムライン */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <div className="w-8 h-1 bg-blue-500 mr-4"></div>
            経歴
          </h3>
          <div className="relative">
            {/* タイムラインの縦線 */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative mb-8">
                {/* タイムラインの丸 */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-12 md:ml-16">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <span className="text-lg font-bold text-blue-600">
                        {item.year}
                      </span>
                      <div className="w-full md:w-1/2 h-0.5 bg-blue-200 md:ml-4"></div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 価値観・目標セクション */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">目標</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              ユーザー体験を最優先に考え、美しく使いやすいWebアプリケーションを創造すること。
              技術の進歩に常に追いつき、チーム開発で価値のある貢献をすること。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">価値観</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              継続的な学習と自己成長を大切にし、新しい技術やベストプラクティスを積極的に取り入れること。
              チームワークを重視し、知識共有と相互成長を促進すること。
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
