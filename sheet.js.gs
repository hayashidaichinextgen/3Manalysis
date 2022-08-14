const Input_Data = function (data) {
  let sht = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

  let data_array = objToArray(data);
  console.log(data_array)

  let startRow = SheetLocale[1].row
  let startCol = SheetLocale[1].col
  let endRow   = data_array.length
  let endcol   = data_array[0].length

  sht.getRange(startRow, startCol, endRow, endcol).setValues(data_array)
}

function objToArray(objs) {
  // 結果
  let result = [];

  // 表題データ
  let displayCol = []
  let tmp = []
  for (let i in SheetLocale) {
    let disCol = SheetLocale[i]
    if (disCol.isdisplay){
      displayCol.push(disCol.value)
      tmp.push(disCol.name)
    }
  }
  result.push(tmp)

  // データを格納
  for (let onum in objs) {
    let obj = objs[onum]
    // 格納用一時データ
    let tmp = []
    for (let i in displayCol) {
      let value = displayCol[i]
      tmp.push(obj[value])
    }
    result.push(tmp)
  }

  return result
}