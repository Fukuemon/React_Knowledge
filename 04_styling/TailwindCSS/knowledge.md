# 環境構築

### Vite を用いた React・TailwindCSS(TS) 環境構築

- Vite：開発環境を構築するためのツール
- Vite を用いることで、開発環境を構築するための設定ファイルを自動で生成してくれる

### resources

[Vite 公式ドキュメント](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
[Vite で React + TypeScript + TailwindCSS の環境構築をする](https://zenn.dev/sikkim/articles/93bf99d8588e68)

### 手順

### プロジェクト作成

1. プロジェクトの作成

```bash
$ npm create vite@latest
```

- ? Project name: <project-name>(プロジェクト名)
- ? Select a framework: react(React を選択する)
- ? Select a variant: react-ts(React + TypeScript を選択する)

2. プロジェクトのディレクトリに移動

```bash
$ cd <project-name>
```

3. プロジェクトの起動

```bash
$ npm install
$ npm run dev
```

### ESLint の導入

1. ESLint のインストール

```bash
$ npm install -D eslint
```

2. ESLint の設定ファイルの作成

```bash
$ npm init @eslint/config
```

- ? How would you like to use ESLint?：To check syntax, find problems, and enforce code style(三つの選択肢から選ぶ)
- ? What type of modules does your project use?：JavaScript modules(import/export)(三つの選択肢から選ぶ)
- ? Which framework does your project use?：React(三つの選択肢から選ぶ)
- ? Does your project use TypeScript?：Yes(三つの選択肢から選ぶ)
- ? Where does your code run?：Browser(三つの選択肢から選ぶ)
- ? How would you like to define a style for your project?：Use a popular style guide(三つの選択肢から選ぶ)
- ? Which style guide do you want to follow?：Airbnb:
- ? What format do you want your config file to be in?：JavaScript(三つの選択肢から選ぶ)

3. ESLint の設定ファイルの編集

```bash
$ vim .eslintrc.js
```

:::details 記述内容

```js
module.exports = {
  // module.exports： Node.js で使われる CommonJS のモジュールシステムの構文
  env: {
    // env は ESLint が対象とする環境を指定するオプション
    browser: true, // ブラウザのグローバル変数を有効にする
    es2021: true, // ES2021 の構文を有効にする
  },
  extends: [
    // extends： ESLint で利用するルールを指定するオプション
    "standard-with-typescript", // 標準のルールを TypeScript に対応させたルールを利用する
    "plugin:react/recommended", // React に関するルールを利用する
    "airbnb/hooks", // Airbnb のルールを利用する
    "plugin:import/errors", // import に関するルールを利用する
    "plugin:import/warnings", /// import に関するルールを利用する
    "plugin:import/typescript", // import に関するルールを利用する
    "plugin:@typescript-eslint/recommended", // TypeScript に関するルールを利用する
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // TypeScript に関するルールを利用する
  ],
  parser: "@typescript-eslint/parser", // parser：　ESLint で利用するパーサーを指定するオプション
  parserOptions: {
    // parserOptions は ESLint で利用するパーサーの設定を指定するオプション
    ecmaFeatures: {
      // ecmaFeatures は ECMAScript のバージョンごとの構文を有効にするオプション
      jsx: true, // JSX を有効にする
    },
    ecmaVersion: "latest", // ECMAScript のバージョンを指定する
    project: "./tsconfig.eslint.json", // project は TypeScript の設定ファイルを指定するオプション
    sourceType: "module", // sourceType は ECMAScript のモジュールを利用するかどうかを指定するオプション
    tsconfigRootDir: __dirname, // tsconfigRootDir は tsconfig.json のルートディレクトリを指定するオプション
  },
  plugins: ["import", "jsx-a11y", "react", "react-hooks", "@typescript-eslint"], // plugins：　ESLint で利用するプラグインを指定するオプション
  root: true, // root は ESLint の設定ファイルをルートディレクトリから探すかどうかを指定するオプション
  rules: {
    // rules　 ESLint で利用するルールを指定するオプション
    "no-use-before-define": "off", // no-use-before-define は 未定義の変数を使用することを禁止するルール
    "@typescript-eslint/no-use-before-define": ["error"], // @typescript-eslint/no-use-before-define は 未定義の変数を使用することを禁止するルール
    "lines-between-class-members": [
      // lines-between-class-members は クラスメンバーの間に空行を入れるかどうかを指定するルール
      "error", //
      "always",
      {
        exceptAfterSingleLine: true, // 1行の場合は空行を入れない
      },
    ],
    "no-void": [
      // no-void は void 演算子を禁止するルール
      "error",
      {
        allowAsStatement: true, // void 演算子を文として使用することを許可する
      },
    ],
    "padding-line-between-statements": [
      // padding-line-between-statements は 文の間に空行を入れるかどうかを指定するルール
      "error",
      {
        blankLine: "always", // 常に空行を入れる
        prev: "*", // すべての文の前に空行を入れる
        next: "return", // return 文の前に空行を入れる
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      // @typescript-eslint/no-unused-vars は 未使用の変数を禁止するルール
      "error",
      {
        vars: "all", // すべての変数を対象にする
        args: "after-used", // 使用後の引数のみを対象にする
        argsIgnorePattern: "_", // _ で始まる引数を無視する
        ignoreRestSiblings: false, // 分割代入の残りの要素を無視しない
        varsIgnorePattern: "_", // _ で始まる変数を無視する
      },
    ],
    "import/extensions": [
      // import/extensions は import 文で拡張子を省略するかどうかを指定するルール
      "error", // エラーとする
      "ignorePackages", // パッケージは対象外とする
      {
        js: "never", // js ファイルは拡張子を省略しない
        jsx: "never", // jsx ファイルは拡張子を省略しない
        ts: "never", // ts ファイルは拡張子を省略しない
        tsx: "never", // tsx ファイルは拡張子を省略しない
      },
      {
        // import 文で拡張子を省略した場合の処理を指定する
        js: "never", // js ファイルは拡張子を省略しない
        jsx: "never", // jsx ファイルは拡張子を省略しない
        ts: "never", // ts ファイルは拡張子を省略しない
        tsx: "never", // tsx ファイルは拡張子を省略しない
      },
    ],
    "react/jsx-filename-extension": [
      // react/jsx-filename-extension は JSX を含むファイルの拡張子を指定するルール
      "error", // エラーとする
      {
        // 拡張子を指定する
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": [
      // react/jsx-props-no-spreading： props を展開することを禁止するルール
      "error",
      {
        html: "enforce", // HTML 要素に対しては強制する
        custom: "enforce", // コンポーネントに対しては強制する
        explicitSpread: "ignore", // 明示的な展開は無視する
      },
    ],
    "react/react-in-jsx-scope": "off", // react/react-in-jsx-scope は JSX を使用する際に React をインポートすることを強制するルール
  },
  overrides: [
    // overrides：特定のファイルに対してのみルールを適用するオプション
    {
      files: ["*.tsx"], // 拡張子が tsx のファイルに対してのみルールを適用する
      rules: {
        "react/prop-types": "off", // react/prop-types は props の型を指定するルール
      },
    },
  ],
  settings: {
    // settings：ESLint で利用する特定のプラグインや解析ツールの設定をするオプション
    "import/resolver": {
      // import/resolver は import 文の解決方法を指定するオプション
      node: {
        paths: ["src"],
      },
    },
  },
};
```

:::

4. tsconfig.eslint.json の作成
   Q：tsconfig.eslint.json とは？
   A：ESLint で TypeScript のコードを解析するために必要な設定ファイル

```bash
$ vim tsconfig.eslint.json
```

::: details 記述内容

```json
{
  "extends": "./tsconfig.json", // tsconfig.json を継承
  "include": ["src/**/*.ts", "src/**/*.tsx"], // 解析対象のファイル
  "exclude": ["node_modules", "dist"] // 解析対象外のファイル
}
```

:::

5. .eslintignore の作成
   Q：.eslintignore とは？
   A：ESLint で解析しないファイルを指定するための設定ファイル

```bash
$ vim .eslintignore
```

::: details 記述内容

```bash
build/ # ビルドファイル
public/ # 静的ファイル
**/coverage/ # テストカバレッジ
**/node_modules/ # パッケージ管理
**/*.min.js # 圧縮ファイル
*.config.js # 設定ファイル
.*lintrc.js  # 設定ファイル
```

:::

### Prettier の導入

1. Prettier のインストール

```bash
$ npm install -D prettier eslint-config-prettier
```

2. .prettierrc の作成

```bash
$ vim .prettierrc
```

::: details 記述内容

```json
{
  "singleQuote": true, // シングルクォートに統一
  "trailingComma": "all", // 末尾のカンマを残す
  "endOfLine": "auto" // 改行コードを自動で設定
}
```

### VSCode の設定

1. VSCode の設定ファイルの作成

```bash
$ vim .vscode/settings.json
```

::: details 記述内容

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.packageManager": "npm",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[graphql]": {
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true
  }
}
```

:::

### TailwindCSS の導入

1. TailwindCSS のインストール

```bash
$ npm install -D tailwindcss@latest postcss autoprefixer
```

2. TailwindCSS の設定ファイルの作成

```bash
$ npx tailwindcss init -p
```

3. TailwindCSS の設定ファイルの編集

```bash
$ vim tailwind.config.js
```

::: details 記述内容

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

:::

4. TailwindCSS の設定ファイルの編集

記述内容

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

5. index.css の設定ファイルの編集

```bash
$ vim src/style/index.css
```

記述内容

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. main.tsx の編集

::: details 記述内容

```tsx
import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-gray-100">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
```

:::

10. App.tsx の編集

```bash
$ vim src/App.tsx
```

```tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg w-80 p-6">
        <h1 className="text-3xl font-bold text-center">Hello World</h1>
      </div>
    </div>
  );
};

export default App;
```
