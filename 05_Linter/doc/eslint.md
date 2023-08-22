# 1.プロジェクト作成

```bash
yarn create vite eslint --template react-ts
```

# 2.ESLint の導入

```bash
yarn add -D eslint
```

ESLint 本体に加えて、公式が提供している TypeScript 対応プロジェクト「TypeScripts ESLint」をインストールする
「typescript-eslint-parser ・ eslint-plugin-typescript」 というパッケージもあるが、すでに非推奨となっているので、インストールしないように注意する

## ESLint 本体を除くエコシステムのパッケージ達

- パーサ(Parser)
  ソースコードを特定の言語仕様に沿って解析してくれるライブラリ。
  ESLint には JavaScript のパーサが組み込まれているが、標準では TypeScript には対応していないため TypeScript のパーサを導入する必要がある
- プラグイン(Plugin)
  ESLint の組み込みルール以外に独自のルールを追加するもの。
  それらを適用した推奨の共有設定とパッケージングして提供されることが多い
- 共有設定(Shareable Config)
  複数ルールの適用をまとめて設定するもの。ESLint パッケージに同梱される eslint:recommended19 や Airbnb 社が提供する eslint-config-airbnb20 が有名

#### 「TypeScript ESLint」 においてのパーサとプラグイン

パーサ：@typescript-eslint/parser
プラグイン：@typescript-eslint/eslint-plugin

# 3.ESLint の設定ファイルを作成

```bash
yarn eslint --init
```

```bash
?質問：日本語
? How would you like to use ESLint? … # ESLint をどのように使用しますか？
  To check syntax only # 構文のみをチェックする
  To check syntax and find problems： # 構文をチェックして問題を見つける
❯ To check syntax, find problems, and enforce code style #構文をチェックし、問題を見つけ、コードスタイルを強制する

? What type of modules does your project use? … # プロジェクトで使用するモジュールのタイプは何ですか？
❯ JavaScript modules (import/export) # JavaScript モジュール（import/export）
  CommonJS (require/exports) # CommonJS（require/exports）
  None of these # これらのいずれでもない

? Which framework does your project use? … # プロジェクトで使用するフレームワークはどれですか？
❯ React
  Vue.js
  None of these

? Does your project use TypeScript? > No / Yes # プロジェクトで TypeScript を使用しますか？

? Where does your code run? … # コードはどこで実行されますか？
❯ Browser # ブラウザ
  Node # Node

? How would you like to define a style for your project? … # プロジェクトのスタイルをどのように定義しますか？
❯ Use a popular style guide # 人気のあるスタイルガイドを使用する
  Answer questions about your style # スタイルに関する質問に答える

? Which style guide do you want to follow? … # どのスタイルガイドに従いますか？
❯ Standard: https://github.com/standard/eslint-config-standard-with-typescript
  XO: https://github.com/xojs/eslint-config-xo-typescript

? What format do you want your config file to be in? … # 構成ファイルの形式は何ですか？
  JavaScript
  YAML
❯ JSON

? Would you like to install them now? › No / Yes # 今すぐインストールしますか？

? Which package manager do you want to use? … # どのパッケージマネージャーを使用しますか？
  npm
❯ yarn
  pnpm
```

### スタイルガイドとは

コーディング規約のこと
Standard ：JavaScript のコーディング規約を定めたもの
npm や Github、Vercel といった多くの企業が参加している

(後で、フォーマッタを導入した時に設定を上書きする)

これにより、ESLint の設定ファイルである.eslintrc.json が作成される

# 4.ESLint の設定ファイルを編集

```bash
$ vim .eslintrc.json
```

初期

```bash
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
```

#### それぞれのプロパティの意味

- env
  プログラムの実行環境を ESLint に教える。その環境で使用可能なグローバル変数などがプリセットされている
- extends
  既存の設定を流用する。後述のプラグイン、ルール、パーサの設定値などがすべて継承される。
  ESLint パッケージに標準で含まれているものか、別途インストールしたプラグインや共有設定パッケージのものが指定できる。
  ここに記述した共有設定間でルール設定が重複している場合、リストの後ろに記述されたほうの値で上書きされる
- overrides
  特定のファイルにのみ任意のルールを適用する
- parserOptions
  パーサの各種実行オプションを設定する
- plugins
  任意の（パッケージとしてインストール済みの）プラグインを有効化
- rules
  適用する個々のルールと、エラーレベルや例外などその設定値を記述
- settings
  各プラグインの追加の設定を記述
- settings
  各プラグインの追加の設定を記述

### 編集する
