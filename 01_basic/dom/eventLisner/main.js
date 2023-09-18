const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

// イベントリスナーの登録(クリックされたらhello関数を実行)
const hello = () => {
  alert("こんにちは");
};

const changeColor = () => {
  h1.style.color = "red";
};

const changeBgColor = () => {
  h1.style.backgroundColor = "blue";
};

/* addEventListener：　イベントリスナーの登録 :
イベントリスナーを登録するためのメソッド */
//
// btn.addEventListener("click", () => {
//   console.log("クリックされました");
// });

// イベントリスナーの登録(クリックされたら以下の関数を実行)
btn.addEventListener("click", hello);
btn.addEventListener("click", changeColor);
btn.addEventListener("click", changeBgColor);

/* removeEventListener：　イベントリスナーの削除
イベントリスナーを削除するためのメソッド */
// btn.removeEventListener("click", hello);
