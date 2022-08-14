const Result_Of_Slide = function (folderpath) {
  // フォルダーIDを取り出し、スライドIDを取得
  let files = get_files_info_from_folder(folderpath);

  let result = [];

  // スライドIDからスライドを取得し解析
  for (let f in files) {
    let presentation = new SlideAnalysis(files[f])

    let slides = presentation._GetSlides()

    for (let s in slides) {
      let slide = slides[s]
      let slideCharNum = presentation._CountChars(slide)
      presentation._IsSkipped(slide, slideCharNum)
    }
    result.push(presentation)
  }

  return result
}

// 該当フォルダーの取得し、スライドIDを取得
let get_files_info_from_folder = function (path) {

  let folderId = path.split('/')[5]

  let files = DriveApp.getFolderById(folderId).getFiles()

  let data = [];

  // 各ファイルごとに出力
  while (files.hasNext()) {
    let obj = {}
    let f = files.next()

    obj.name = f.getName()
    obj.id   = f.getId()

    data.push(obj)
  }
  return data
}

class SlideAnalysis {
  constructor (file) {
    this.name = file.name;
    this.id   = file.id
    this.a_pages   = 0;
    this.d_pages   = 0;
    this.a_charNum = 0;
    this.d_charNum = 0
  }

  _GetSlides () {
    let slides =  SlidesApp.openById(this.id).getSlides()

    // ページの取得
    this.a_pages   = slides.length
    this.d_pages = slides.length

    return slides
  }

  _CountChars (slideObj) {
    let shapes = slideObj.getShapes();

    let countText = 0;
    for (let s in shapes) {
      countText += shapes[s].getText().asString().replace(/\n/g, '').length;
    }
    this.a_charNum  += countText
    this.d_charNum += countText
    return countText

  }

  _IsSkipped (slideObj, charNum) {
    let isSkipped = slideObj.isSkipped()
    if (isSkipped) {
      this.d_pages  -= 1;
      this.d_charNum -= Number(charNum);
    }
  }



}
