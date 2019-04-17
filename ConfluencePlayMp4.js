/**
 * 判断加入的时机
 * 查找是否有对应的附件
 * 直接播放
 */
function detectConluence() {
  let dom = document.querySelector(".confluence-embedded-file");
  return dom != null;
}


/**
 * 替换视频文件
 */
function replaceMp4() {
  let domSrcList = document.querySelectorAll(".confluence-embedded-file");

  domSrcList.forEach(domSrc=>{
    let link = domSrc.href;
    let height = domSrc.clientHeight;
    let mimeType = domSrc.dataset.mimeType;

    let domNew = `<video preload="none" controls="" style="height: ${height}px;"><source src="${link}" type="${mimeType}"> </video>`
    if (mimeType.indexOf("video/") > -1) {
      domSrc.innerHTML = domNew;
    }
  })

}


function main() {
  if (detectConluence()) {
    replaceMp4();
  }
}

main();

