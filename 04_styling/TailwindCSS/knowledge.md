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

````bash

```bash
$ vim .eslintrc.js
````

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["import", "jsx-a11y", "react", "react-hooks", "@typescript-eslint"],
  root: true,
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "_",
        ignoreRestSiblings: false,
        varsIgnorePattern: "_",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "enforce",
        custom: "enforce",
        explicitSpread: "ignore",
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
```

4. tsconfig.eslint.json の作成
   Q：tsconfig.eslint.json とは？
   A：ESLint で TypeScript のコードを解析するために必要な設定ファイル

````bash

```bash
$ vim tsconfig.eslint.json
````

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules", "dist"]
}
```

5. .eslintignore の作成
   Q：.eslintignore とは？
   A：ESLint で解析しないファイルを指定するための設定ファイル

````bash

```bash
$ vim .eslintignore
````

```bash
build/
public/
**/coverage/
**/node_modules/
**/*.min.js
*.config.js
.*lintrc.js
```

### Prettier の導入

1. Prettier のインストール

```bash
$ npm install -D prettier eslint-config-prettier
```

2. .prettierrc の作成

```bash
$ vim .prettierrc
```

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "auto"
}
```

### VSCode の設定

1. VSCode の設定ファイルの作成

```bash
$ vim .vscode/settings.json
```

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

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. TailwindCSS の設定ファイルの編集

```bash
$ vim postcss.config.js
```

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

5. TailwindCSS の設定ファイルの編集

```bash
$ vim src/index.css
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. TailwindCSS の設定ファイルの編集

```bash
$ vim src/main.tsx
```

```tsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
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

10. TailwindCSS の設定ファイルの編集

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
