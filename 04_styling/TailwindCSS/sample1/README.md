# ディレクトリ構成

featuresを用いて機能別でディレクトリを分ける

### ver.1

componentsの中にはatoms, block, modulesを作成する
粒度ごとにディレクトリを分けて、小さいものを組み立てていく(再利用性の向上)
componentsで作成したパーツを元にpagesで各ページを作成する

```bash

├── assets // 画像などの静的ファイル
├── features // 機能別にディレクトリを作成
│ ├── components // 全てのコンポーネントを管理
│ │ ├── atoms // 原子的なコンポーネント
│ │ ├── block // ブロック要素(アトムの組み合わせ)
│ │ └── modules // モジュール要素(機能を持ったブロック要素)
│ └── pages // ページ別にディレクトリを作成
└── style
```

### ver.2

```bash
├── assets
├── features
│   ├── components // 各ページで共通で使用するのコンポーネント
│   │   ├── elements // ボタンなどの要素(粒度小)
│   │   └── layouts //Headerなどのレイアウト(粒度大)
│   └── sample
│       ├── components // 各ページで使用するコンポーネント
│       ├── api // API通信を行うコンポーネント
│       ├── stores // 状態管理を行うコンポーネント
│       └── hooks // カスタムフックを作成する


└── style
```
