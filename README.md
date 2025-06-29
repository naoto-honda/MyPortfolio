# MyPortfolio - 個人ポートフォリオサイト

## 📋 プロジェクト概要

このプロジェクトは、React、TypeScript、Tailwind CSS を使用して構築されたモダンな個人ポートフォリオサイトです。レスポンシブデザインとアニメーションを実装し、ユーザー体験を重視した設計を行っています。

## ✨ 主な機能

- **レスポンシブデザイン**: デスクトップ、タブレット、モバイルに対応
- **スムーズなナビゲーション**: React Router を使用した SPA 構成
- **モダンな UI/UX**: Tailwind CSS による美しいデザイン
- **アニメーション効果**: スムーズなトランジションとホバーエフェクト
- **SEO 対応**: メタタグとセマンティック HTML の実装

## 🛠️ 技術スタック

### フロントエンド

- **React 19.1.0** - UI ライブラリ
- **TypeScript 5.8.3** - 型安全性
- **React Router DOM 7.6.0** - ルーティング
- **Tailwind CSS 3.4.17** - スタイリング

### 開発ツール

- **Vite 6.3.5** - ビルドツール
- **ESLint 9.25.0** - コード品質管理
- **PostCSS 8.5.3** - CSS 処理
- **Autoprefixer 10.4.21** - CSS ベンダープレフィックス

## 📁 プロジェクト構造

```
MyPortfolio/
├── public/
│   ├── img/                    # 画像ファイル
│   │   ├── blog-image.jpg
│   │   └── myself.jpg
│   └── index.html
├── src/
│   ├── components/             # 共通コンポーネント
│   │   ├── Header.tsx         # ヘッダーコンポーネント
│   │   ├── Footer.tsx         # フッターコンポーネント
│   │   └── H2.tsx             # 見出しコンポーネント
│   ├── pages/                 # ページコンポーネント
│   │   ├── Home.tsx           # ホームページ
│   │   ├── About.tsx          # 自己紹介ページ
│   │   ├── Skills.tsx         # スキルページ
│   │   ├── Works.tsx          # 作品ページ
│   │   └── Contact.tsx        # お問い合わせページ
│   ├── assets/                # 静的アセット
│   ├── App.tsx                # メインアプリケーション
│   ├── main.tsx               # エントリーポイント
│   └── index.css              # グローバルスタイル
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 セットアップと実行

### 前提条件

- Node.js (v18 以上)
- npm または yarn

### インストール

1. リポジトリをクローン

```bash
git clone https://github.com/yourusername/MyPortfolio.git
cd MyPortfolio
```

2. 依存関係をインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動し、通常は `http://localhost:5173` でアクセスできます。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

### リント

```bash
npm run lint
```

## 📄 ページ構成

### 1. ホームページ (`/`)

- 自己紹介の概要
- スキルハイライト
- 最新プロジェクトの紹介
- お問い合わせへの誘導

### 2. 自己紹介ページ (`/about`)

- 詳細な自己紹介
- 経歴と経験
- 趣味や興味
- 将来の目標

### 3. スキルページ (`/skills`)

- 技術スキルの詳細
- 経験年数と習熟度
- 学習中の技術
- スキルカテゴリ別の分類

### 4. 作品ページ (`/works`)

- プロジェクト一覧
- 各プロジェクトの詳細説明
- 使用技術の表示
- GitHub リンクとデモリンク

### 5. お問い合わせページ (`/contact`)

- お問い合わせフォーム
- 連絡先情報
- SNS リンク
- レスポンス時間の案内

## 🎨 デザイン特徴

- **モダンなデザイン**: クリーンでプロフェッショナルな見た目
- **カラーパレット**: 青を基調とした信頼感のある配色
- **タイポグラフィ**: 読みやすさを重視したフォント選択
- **アニメーション**: 適度なアニメーションでユーザー体験を向上
- **アクセシビリティ**: キーボードナビゲーションとスクリーンリーダー対応

## 📱 レスポンシブ対応

- **デスクトップ**: 1200px 以上
- **タブレット**: 768px - 1199px
- **モバイル**: 767px 以下

各ブレークポイントで最適化されたレイアウトを提供します。

## 🔧 カスタマイズ

### 色の変更

`tailwind.config.js` でカラーパレットをカスタマイズできます：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1F2937',
        // カスタムカラーを追加
      },
    },
  },
};
```

### コンテンツの更新

各ページのコンテンツは対応する TSX ファイルで編集できます：

- `src/pages/About.tsx` - 自己紹介情報
- `src/pages/Skills.tsx` - スキル情報
- `src/pages/Works.tsx` - プロジェクト情報

## 📦 デプロイ

### Vercel（推奨）

1. Vercel アカウントにログイン
2. GitHub リポジトリを接続
3. 自動デプロイが設定されます

### Netlify

1. Netlify アカウントにログイン
2. GitHub リポジトリを接続
3. ビルドコマンド: `npm run build`
4. 公開ディレクトリ: `dist`

## 🤝 貢献

プルリクエストやイシューの報告を歓迎します。大きな変更を行う場合は、まずイシューで議論してください。

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 📞 お問い合わせ

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com
- **LinkedIn**: [Your Name](https://linkedin.com/in/yourprofile)

---

**注意**: この README の連絡先情報は実際の情報に更新してください。
