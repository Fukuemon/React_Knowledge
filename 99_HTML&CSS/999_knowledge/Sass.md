# Sass とは ~概要~

Sass ファイルに記述し、CSS ファイルにコンパイルすることでスタイルを当てていく

## Sass の特徴

### CSS で変数を使うことが出来る

メリット：同じスタイル(カラーコード)などを使い回しやすい

---

### 入れ子構造が出来る

メリット：HTML などと同じようにネストで CSS のを当てていける(可読性の向上)

- 従来
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5256b2e6-5cc9-42f5-923b-303d6ef88277/Untitled.png)
- SCSS
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ae7dcdb-77fc-4da5-8a6f-27dd9b9fc369/Untitled.png)

同じ階層で記述することで

---

### hover 時の記述を&(アンバサンドで記述できる)

メリット：hover 時のアクションを対象の css の中で記述することができる

また、カレントの css を対象とすることができる

- 従来：タグの後に:hover で書いていた(別の箇所で)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21799f31-ecc5-4a7d-9727-7facb2dc68cd/Untitled.png)
- SCSS

  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7215509b-2b76-4ad4-9393-25f5f8ff738e/Untitled.png)

- 変換後
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/191eb059-483f-4066-9c4b-61d37d3659a6/Untitled.png)

---

### ミックスイン(関数化)が利用可能

@mixin 関数名(引数) {

スタイルプロパティ

}

メリット：定義した CSS のスタイルを使い回すことができる。可読性・カスタマイズ性の向上

引数とした部分はそれぞれ使う場面によってカスタマイズすることができる

---

### ファイルを分割することができる

ファイル別で import することができる

メリット：可読性の向上
