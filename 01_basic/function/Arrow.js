//普通の関数定義
function fn(number) {
  return number * 2;
}
console.log(fn(2));

//アロー関数
const fnArrow = (number) => {
  return number * 2;
};
console.log(fnArrow(2));

/**省略形
 * 引数が一つの場合は丸括弧がいらない
 * 処理が1行の場合、波括弧とreturnが必要ない
 */

const fnArrow2 = (number) => number * 2;
console.log(fnArrow(2));

/*objectの場合*/
//丸括弧で囲ってあげる
const fnArrowObj = (number) => ({ result: number * 2 });

/**objectを返す関数の使用用途
 * 状態を保持して返す必要がある状況
 * 計算結果などを含む新しいオブジェクトを生成する場合
 */

/**objectを返す関数の例
 * 名前と年齢を受け取り、それらの値を元にユーザーのオブジェクトを作成する関数
 * オブジェクトにすることで、プロパティからアクセスすることができる
 */
const makeUser = (name, age) => ({ name: name, age: age });

let user = makeUser("John", 30);
console.log(user.name); // name: John
console.log(user.age); // age: 30
