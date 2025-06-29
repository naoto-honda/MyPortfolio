import { useEffect } from 'react';
import Footer from '../components/Footer';
import H2 from '../components/H2';
import Header from '../components/Header';

interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  color: string;
}

interface SkillCardProps {
  skill: Skill;
}

const Skills = () => {
  // ページがマウントされた際にスクロールトップ
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const frontendSkills: Skill[] = [
    {
      name: 'HTML',
      icon: 'H',
      color: 'bg-blue-500',
      description:
        'セマンティックなHTML構造の作成、アクセシビリティを考慮したマークアップ、SEO対策を意識したコーディングができます。',
    },
    {
      name: 'CSS',
      icon: 'C',
      color: 'bg-blue-600',
      description:
        'Flexbox、Grid、アニメーションを活用したレスポンシブデザインの実装、Tailwind CSSでの効率的なスタイリングが得意です。',
    },
    {
      name: 'JavaScript',
      icon: 'JS',
      color: 'bg-yellow-500',
      description:
        'ES6+の機能を活用したモダンなJavaScript開発、非同期処理、DOM操作、イベントハンドリングを実装できます。',
    },
    {
      name: 'React',
      icon: 'R',
      color: 'bg-cyan-500',
      description:
        'Hooks、Context API、カスタムフックを活用したコンポーネント設計、状態管理、パフォーマンス最適化を実装できます。',
    },
    {
      name: 'TypeScript',
      icon: 'TS',
      color: 'bg-blue-700',
      description:
        '型安全性を重視した開発、インターフェース設計、ジェネリクス、ユニオン型を活用した堅牢なコードを書けます。',
    },
    {
      name: 'Next.js',
      icon: 'N',
      color: 'bg-black',
      description:
        'SSR、SSG、App Routerを活用したパフォーマンス最適化、SEO対応、API Routesでのバックエンド機能実装ができます。',
    },
  ];

  const backendSkills: Skill[] = [
    {
      name: 'Node.js',
      icon: 'N',
      color: 'bg-green-600',
      description:
        'Express.jsを使用したRESTful API開発、ミドルウェアの実装、データベース連携、認証機能の実装ができます。',
    },
    {
      name: 'データベース',
      icon: 'DB',
      color: 'bg-blue-800',
      description:
        'MySQL、PostgreSQLでのテーブル設計、クエリ最適化、ORM（Prisma、Sequelize）を使用したデータベース操作ができます。',
    },
  ];

  const otherSkills: Skill[] = [
    {
      name: 'Git/GitHub',
      icon: 'G',
      color: 'bg-gray-800',
      description:
        'ブランチ戦略、プルリクエスト、コードレビュー、CI/CDパイプラインの構築、チーム開発での効率的なバージョン管理ができます。',
    },
    {
      name: 'テスト',
      icon: 'T',
      color: 'bg-red-500',
      description:
        'Jest、React Testing Libraryを使用したユニットテスト、E2Eテスト（Playwright）、テスト駆動開発（TDD）の実践ができます。',
    },
    {
      name: 'デプロイ',
      icon: 'D',
      color: 'bg-purple-600',
      description:
        'Vercel、Netlifyでのフロントエンドデプロイ、AWS、Herokuでのフルスタックアプリケーションのデプロイと運用ができます。',
    },
  ];

  const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mr-4`}
        >
          <span className="text-white font-bold text-lg">{skill.icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{skill.description}</p>
    </div>
  );

  const SkillCategory: React.FC<SkillCategoryProps> = ({
    title,
    skills,
    color,
  }) => (
    <div className="mb-12">
      <h3 className={`text-2xl font-bold mb-6 text-${color} flex items-center`}>
        <div className={`w-8 h-1 bg-${color} mr-4`}></div>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill: Skill, index: number) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="container mx-auto mt-32 md:mt-24 text-gray-800 px-5">
        <H2>Skills</H2>
        <div className="mt-12">
          <SkillCategory
            title="Frontend"
            skills={frontendSkills}
            color="blue-600"
          />
          <SkillCategory
            title="Backend"
            skills={backendSkills}
            color="green-600"
          />
          <SkillCategory title="Others" skills={otherSkills} color="gray-600" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
