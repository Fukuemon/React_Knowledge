// Dom操作のサンプル

/* 1. querySelector
querySelectorは、CSSセレクターを使って、HTML要素を取得するためのメソッド
(使い方)
document.querySelector("CSSセレクター")
例)
/* <h1 id=​"main-title">​JavaScript​</h1>​ */
document.querySelector("#main-title");
{
  /* <h1 id=​"main-title">​JavaScript​</h1>​ */
}

/* 2. querySelectorAll
querySelectorAllは、CSSセレクターを使って、HTML要素を取得するためのメソッド
(使い方)
document.querySelectorAll("CSSセレクター")
例)
/* <ul class=​"list">​
<li class=​"list-item">​JavaScript​</li>​
<li class=​"list-item">​HTML​</li>​
<li class=​"list-item">​CSS​</li>​
​</ul>​ */
document.querySelectorAll(".list-item");
{
  /* NodeList(3) [li.list-item, li.list-item, li.list-item] */
}

/* 3. DOMの変更 
DOMの変更は、documentオブジェクトのプロパティやメソッドを使って行う
(例) */
// - html要素の取得
document.querySelector("CSSセレクター");
// - html要素の編集
document.querySelector("CSSセレクター").textContent = "編集後のテキスト";
// - html要素の追加
document
  .querySelector("CSSセレクター")
  .insertAdjacentHTML("beforeend", "追加するHTML");
// - html要素の削除
document.querySelector("CSSセレクター").remove();
// - html要素の属性の取得
document.querySelector("CSSセレクター").getAttribute("属性名");
// - html要素の属性の編集
document.querySelector("CSSセレクター").setAttribute("属性名", "属性の値");
// - html要素の属性の削除
document.querySelector("CSSセレクター").removeAttribute("属性名");
// - html要素のクラスの追加
document.querySelector("CSSセレクター").classList.add("クラス名");
// - html要素のクラスの削除
document.querySelector("CSSセレクター").classList.remove("クラス名");
// - html要素のクラスの切り替え
document.querySelector("CSSセレクター").classList.toggle("クラス名");
// - html要素のクラスの有無の確認
document.querySelector("CSSセレクター").classList.contains("クラス名");
