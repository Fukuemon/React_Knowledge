# Sass とは ~概要~

Sass ファイルに記述し、CSS ファイルにコンパイルすることでスタイルを当てていく

## Sass の特徴

### CSS で変数を使うことが出来る

メリット：同じスタイル(カラーコード)などを使い回しやすい

---

### 入れ子構造が出来る

メリット：HTML などと同じようにネストで CSS を当てていける(可読性の向上)

- 従来(生の CSS)
  ```css
  #container {
    text-align: center;
  }
  #container .btn {
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    padding: 14px 28px;
    margin: 10px 0;
    font-weight: 600;
    cursor: pointer;
  }
  ```
- SCSS
  ```scss
  #container {
    text-align: center;
    .btn {
      background-color: #fff;
      color: #000;
      border: 2px solid #000;
      padding: 14px 28px;
      margin: 10px 0;
      font-weight: 600;
      cursor: pointer;
    }
  }
  ```

同じ階層で記述することでどの親セレクタに属しているのかがわかりやすくなる

---

### Trantion プロパティを＆で繋げることができる

例：hover 時の記述を&(アンバサンド)で記述できる

メリット：hover 時のアクションを対象の css の中で記述することができる

また、カレントの css を対象とすることができる

- 従来：タグの後に:hover で書いていた(別の箇所で)

```css
.btn {
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  padding: 14px 28px;
  margin: 10px 0;
  font-weight: 600;
  cursor: pointer;
}
.btn:hover {
  background-color: #000;
  color: #fff;
}
```

- SCSS

```scss
.btn {
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  padding: 14px 28px;
  margin: 10px 0;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}
```

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

# 実践

```scss
// 変数
$cwhite: #fff;
$cblack: #000;

#container {
  text-align: center;
}

.btn {
  background-color: $cwhite;
  color: $cblack;
  border: 2px solid $cblack;
  padding: 14px 28px;
  margin: 10px 0;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: $cblack;
    color: $cwhite;
  }
}
```
