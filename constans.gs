// 取得対象データ
const FolderPath = "https://drive.google.com/drive/folders/1tBZHn9sL-rqb2fD8VPlZyE5b_ZggRQjw"

// 表題の表示・非表示を指定可能
const isShowTitle = true

// シートロケール
// データ列として使うかを指定可能
const SheetLocale = [
  {
    name: "スライド名",
    value: "name",
    row: 1, // 固定
    col: 1, // 固定
    isdisplay: true 
  },
  {
    name: "スライドID",
    value: "id",
    row: null,
    col: null,
    isdisplay: false
  },
  {
    name: "総スライド数",
    value: "a_pages",
    row: 1,
    col: 2,
    isdisplay: true
  },
  {
    name: "発表スライド数",
    value: "d_pages",
    row: 1,
    col: 3,
    isdisplay: true
  },
  {
    name: "総文字数",
    value: "a_charNum",
    row: 1,
    col: 4,
    isdisplay: true
  },
  {
    name: "表示文字数",
    value: "d_charNum",
    row: 1,
    col: 5,
    isdisplay: true
  },
]