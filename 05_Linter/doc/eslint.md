# 1.プロジェクト作成

```bash
yarn create vite eslint --template react-ts
```

# 2.ESLint の導入

## 1. ESLint 本体をインストール

```bash
yarn add -D eslint
```

ESLint 本体に加えて、公式が提供している TypeScript 対応プロジェクト「TypeScripts ESLint」をインストールする
「typescript-eslint-parser ・ eslint-plugin-typescript」 というパッケージもあるが、すでに非推奨となっているので、インストールしないように注意する

#### ESLint 本体を除くエコシステムのパッケージ達

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

## 2.ESLint の設定ファイルを作成

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

#### スタイルガイドとは

コーディング規約のこと
Standard ：JavaScript のコーディング規約を定めたもの
npm や Github、Vercel といった多くの企業が参加している

(後で、フォーマッタを導入した時に設定を上書きする)

これにより、ESLint の設定ファイルである.eslintrc.json が作成される

## 3.ESLint の設定ファイルを編集

### 初期状態の.eslintrc.json

```bash
$ cat .eslintrc.json
```

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

```bash
$vim .eslintrc.json
```

```json
{
  "env": {
    //環境ごとのグローバル変数を有効にする
    "browser": true, //ブラウザのグローバル変数を有効にする
    "es2022": true //ES2022の構文を有効にする
  },
  "extends": [
    //継承する設定 (後述の方が適応される)
    "eslint:recommended", //ESLintの推奨ルール
    "plugin:@typescript-eslint/recommended", //TypeScriptの推奨ルール
    "plugin:@typescript-eslint/recommended-requiring-type-checking", //TypeScriptの推奨ルール（型チェック有効時）
    "standard-with-typescript", //StandardJSのルール
    "plugin:react/recommended" //Reactの推奨ルール
  ],
  "overrides": [],
  "parserOptions": {
    //パーサーの設定
    "ecmaVersion": "latest", //ECMAScriptのバージョン
    "tsconfigRootDir": ".", //TypeScriptの設定ファイルのルートディレクトリ
    "project": ["./tsconfig.json"], //TypeScriptの設定ファイルのパス
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "react"],
  "rules": {},
  "settings": {
    //各種モジュールの設定
    "react": {
      "version": "detect" //Reactのバージョンを自動検出
    }
  }
}
```

extends
eslint:recommended # ESLint の推奨ルール
plugin:@typescript-eslint/recommended # TypeScript の推奨ルール
standard-with-typescript にない有用なルールがいくつかある

plugin:@typescript-eslint/recommended-requiring-type-checking # TypeScript の推奨ルール（型チェック有効時）
リソースを食うため、必要に応じて無効にする

##### これで必要最低限の設定は完了！

# ESLint のカスタマイズ

追加の共有設定やプラグインをインストールし、設定書き加える

### 1.インストール

```bash
$ yarn add -D eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

- eslint-plugin-jsx-a11y
  JSX のアクセシビリティをチェックする
- eslint-plugin-react-hooks
  React Hooks のルールをチェックする

### 2.設定ファイルを編集

```bash
$vim .eslintrc.json
```

```json
{
  "env": {
    //環境ごとのグローバル変数を有効にする
    "browser": true, //ブラウザのグローバル変数を有効にする
    "es2022": true //ES2022 の構文を有効にする
  },
  "extends": [
    //継承する設定 (後述の方が適応される)
    "eslint:recommended", //ESLint の推奨ルール
    "plugin:@typescript-eslint/recommended", //TypeScript の推奨ルール
    "plugin:@typescript-eslint/recommended-requiring-type-checking", //TypeScript の推奨ルール（型チェック有効時）
    "standard-with-typescript", //StandardJS のルール
    "plugin:jsx-a11y/recommended", //JSX のアクセシビリティの推奨ルール
    "plugin:react/recommended", //React の推奨ルール
    "plugin:react/jsx-runtime", //React の推奨ルール
    "plugin:react-hooks/recommended" //React Hooks の推奨ルール
  ],
  "overrides": [],
  "parserOptions": {
    //パーサーの設定
    "ecmaVersion": "latest", //ECMAScript のバージョン
    "tsconfigRootDir": ".", //TypeScript の設定ファイルのルートディレクトリ
    "project": ["./tsconfig.json"], //TypeScript の設定ファイルのパス
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "jsx-a11y", "react", "react-hooks"],
  "rules": {},
  "settings": {
    //各種モジュールの設定
    "react": {
      "version": "detect" //React のバージョンを自動検出
    }
  }
}
```

### 3.ルールを追加する

上記で導入したパッケージやプラグインを元に、ルールを追加する
rules では、各ルールの適用の可否や、エラーレベル、例外などの設定を記述する
一部のファイルのみ設定したい場合は、overrides を使う

```bash
$vim eslintrc.json
```

rules[] に以下を追加

```json
...
  "rules": {
    "padding-line-between-statements": [ //文の間の空行を指定する
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "@typescript-eslint/consistent-type-definitions": "off", //型定義の一貫性を指定する
    "@typescript-eslint/explicit-function-return-type": "off", //関数の戻り値の型を指定する
    "@typescript-eslint/explicit-module-boundary-types": ["error"], //モジュールの境界の型を指定する
    "@typescript-eslint/no-misused-promises": [ //誤ったPromiseの使用を指定する
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "@typescript-eslint/no-unused-vars": [ //未使用の変数を指定する
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/triple-slash-reference": [ //トリプルスラッシュディレクティブを指定する
      "error",
      {
        "types": "always"
      }
    ],
    "import/extensions": [ //拡張子を指定する
      "error",
      {
        "ignorePackages": true,
        "pattern": {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
      }
    ],
    "import/order": [ //モジュールの順序を指定する
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "object",
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "{react,react-dom/**}",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "{[A-Z]*,**/[A-Z]*}",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "./**.module.css",
            "group": "index",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
    "react/display-name": "off"
  },
  "overrides": [
    {
      "files": ["*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ],
...
```

- padding-line-between-statements
  任意の構文の間に区切りの空行を入れるかどうかを定義するルール。
  ここでは return 文の前に常に空行を入れるよう設定している

“
],
"import/order": [
"error",
{
"groups": [
"builtin", "external", "internal", "parent", "sibling", "object", "index"
],
"pathGroups": [
{
"pattern": "{react,react-dom/**}",
"group": "builtin",
"position": "before"
},
{
"pattern": "{[A-Z]\*,**/[A-Z]_}",
"group": "internal",
"position": "after"
},
{
"pattern": "./\*\*.module.css",
"group": "index",
"position": "after"
}
],
"pathGroupsExcludedImportTypes": ["builtin"],
"alphabetize": {
"order": "asc"
}
}
],
"react/display-name": "off"
},
"overrides": [
{
"files": ["_.tsx"],
"rules": {
"react/prop-types": "off"
}
}
],

- padding-line-between-statements
  任意の構文の間に区切りの空行を入れるかどうかを定義するルール。
  ここでは return 文の前に常に空行を入れるよう設定している
- @typescript-eslint/consistent-type-definitions
  オブジェクトの型定義に interface か type のどちらかを強制するルール
  ここでは、interface と type を混在させてもエラーにならないよう設定している
- @typescript-eslint/explicit-function-return-type
  関数の戻り値の型を指定するルール
  ここでは、関数の戻り値の型を指定しなくてもエラーにならないよう設定している
- @typescript-eslint/explicit-module-boundary-types
  モジュールの境界の型を指定するルール
  ここでは、モジュールの境界の型を指定しなくてもエラーにならないよう設定している
- @typescript-eslint/no-misused-promises
  誤った Promise の使用を指定するルール
  ここでは、Promise の戻り値が void であってもエラーにならないよう設定している
- @typescript-eslint/no-unused-vars
  未使用の変数を指定するルール
  ここでは、変数名が \_ で始まる場合はエラーにならないよう設定している
- @typescript-eslint/strict-boolean-expressions
  条件式の型を指定するルール
  ここでは、条件式の型が true または false であってもエラーにならないよう設定している
- @typescript-eslint/triple-slash-reference
  トリプルスラッシュディレクティブを指定するルール
  ここでは、トリプルスラッシュディレクティブの types が指定されていない場合はエラーになるよう設定している
- import/extensions
  拡張子を指定するルール
  ここでは、拡張子が .js, .jsx, .ts, .tsx の場合は拡張子を省略するよう設定している
- import/order
  モジュールインポートの順番をカスタマイズできるルール。
  ここでは react および react-dom モジュールを最初に、非相対パスで記述した内部モジュールのコンポーネントを相対パスモジュールの直前に、CSS Modules36 ファイルのインポートを最後になるよう設定
- react/display-name
  React コンポーネントの displayName を指定するルール
  ここでは、displayName を指定しなくてもエラーにならないよう設定している
- react/prop-types
  React コンポーネントの props の型を指定するルール
  ここでは、props の型を指定しなくてもエラーにならないよう設定している

ESLint のルールについては、開発チームのコーディング規約に合わせて決めていく
