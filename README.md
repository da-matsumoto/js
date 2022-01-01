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