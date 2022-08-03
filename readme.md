# 3M 議題分析

## 目的
3Mのパワーポイントを解析し、スライドの文字数とページ数から傾向分析する

## 設計
ディレクトリURLを指定して、その中にあるスライドを取得する
その後、各スライドから情報を取得する
- ページ数
- 文字数
  - アクティブページ
  - ディスアクティブページ
  
取得した内容をスプレッドシートに反映し、グラフを描画する
