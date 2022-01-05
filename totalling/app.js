'use strict';
// FileSystem、ファイルを使うためのモジュール
const fs = require('fs');
// ファイルを一行ずつ読み込むためのモジュール
const readline = require('readline');
// ファイルを読み込むストリームを作成
const rs = fs.createReadStream('./popu-pref.csv');
// readlineのオブジェクトのinputとして設定
const rl = readline.createInterface({ input: rs, output: {} });
// 集計されたデータを格納する連想配列
const prefectureDataMap = new Map(); // key: 都道府県 value: 集計データのオブジェクト
// lineイベントが発生したら無名関数を呼び出す
// lineStringに読み込んだ一行の文字列が入る
rl.on('line', lineString => {
  // 文字列をカンマで分割して配列に入れる
  const columns = lineString.split(',');
  const year = parseInt(columns[0]);
  const prefecture = columns[1];
  const popu = columns[3];
  if (year === 2010 || year === 2015) {
    let value = prefectureDataMap.get(prefecture);
    if (!value) {
      value = {
        popu10: 0,
        popu15: 0,
        change: null
      };
    }
    if (year === 2010) {
      value.popu10 = popu;
    }
    if (year === 2015) {
      value.popu15 = popu;
    }
    prefectureDataMap.set(prefecture, value);
  }
});

rl.on('close', () => {
  for (const [key, value] of prefectureDataMap) {
    value.change = value.popu15 / value.popu10;
  }
  const rankingArray = Array.from(prefectureDataMap).sort((pair1, pair2) => {
    return pair2[1].change - pair1[1].change;
  });
  console.log(rankingArray);
});