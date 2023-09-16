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
