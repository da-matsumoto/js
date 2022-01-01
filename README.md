# JS
## Promise
JavaScriptは非同期言語
ひとつ前の実行に時間がかかった場合に実行を待たずに次の処理が行われる
### Promiseは約束
処理を待機
結果に応じて次の処理をすることを約束
### Promiseの3つの状態
- PromiseStatus
  - pending
    - 未解決
    - 処理が終わるのを待っている状態
  - resolved
    - 解決済み
    - 処理が終わり、無事成功した状態
    - thenに書かれた処理が実行される
  - rejected
    - 拒否
    - 処理が失敗に終わってしまった状態
    - catchに書かれた処理が実行される
### Promiseの書き方
```js
const promise = new Promise((resolve, reject) => {});
```
Promiseの引数には関数を渡す
第一引数はresolve、第二引数はreject
#### resolve関数に引数
```js
const promise = new Promise((resolve) => {
  resolve('resolveしたよ');
}).then((val) => {
  console.log(val);
});
```
resolveに渡した文字列を次に呼ばれるメソッドの第一引数に渡すことができる

### reject
```js
const promise = new Promise((resolve, reject) => {
  reject();
})
  .then(() => {
    console.log("resolveしたよ");
  })
  .catch(() => {
    console.log("rejectしたよ");
  });
```
thenの処理は実行されずにcatchの処理が実行される
catchにて実行される関数がreturnした場合resolveする
