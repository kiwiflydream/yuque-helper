var $ = require("jquery");
const {
  bishengFormat
} = require("bisheng-formatter-core");


const config = {
  mainFeature: {
    /* 
      决定是否格式化全角 markdown 链接
        before: [title]（link）
        after: [title](link)
    */
    markdownLinksInFullWidth: true,

    /* 
      决定是否在粗体两侧添加空格
        before: 这里是**粗体**文本
        after: 这里是 **粗体** 文本
    */
    boldTextBlock: true,

    /* 决定是否清空连续的空行 */
    blankLines: true,

    /*  
      决定是否格式化连续的标点符号: 一般是多个句号组成的省略号 (。。。。。) 以及多个感叹号或问号。
        before: 这里是一段中文带着很多很多的感叹号和问号！！！！!!!!！！！？？????????？？？？
        after: 这里是一段中文带着很多很多的感叹号和问号!!!???
     */
    duplicatedPunctuations: true,

    /* 
      决定是否格式化全角符号/数字/英文字符
        before: 这里是一段中文，带着中文符号。这里是一段ChineseText！带着Chinese Punctuations？
        after: 这里是一段中文, 带着中文符号. 这里是一段 ChineseText! 带着 Chinese Punctuations?
    */
    fullWidthCharsAndFollowingSpaces: true,

    /* 
      决定是否格式化半角符号/数字/英文字符
        before: 这一幕被一楼 DHBM 系统监控到,30 秒内关闭了系统.
        after: 这一幕被一楼 DHBM 系统监控到, 30 秒内关闭了系统.
     */
    halfWidthCharsAndFollowingSpaces: true,

    /* 决定是否在中文和英文之间添加空格 */
    addSpacesBetweenChineseCharAndAlphabeticalChar: true
  },

  /* 
    如果 duplicatedPunctuations = true, 决定替换成多少个连续的符号
    如果设置为 6 
      before: 这里是一段中文带着很多很多的感叹号和问号！！！!!!!!!!！！！！！！！！
      after: 这里是一段中文带着很多很多的感叹号和问号!!!!!!
   */
  ellipsisCount: 3,

  /* 
    决定是否使用常用标点替换全角引号
    true: 使用 (""'') 替换 (“”‘’)
    false: 使用 (『』「」) 替换 (“”‘’)
  */
  useSimpleQuotation: false
}

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.href.includes('yuque')) {
    chrome.storage.local.get('yuqueOption', (res) => {
      let option = res.yuqueOption;
      if (option.fonts) {
        // 当前页面设置字体
        $("*").css("font-family", option.fonts);
        // 文章内容是异步加载的，延迟再设置一次，但是网速过慢还是有问题，待优化
        setTimeout(() => {
          $("*").css("font-family", option.fonts);
        }, 500);

        setTimeout(() => {
          $("*").css("font-family", option.fonts);
        }, 1000);

        setTimeout(() => {
          $("*").css("font-family", option.fonts);
        }, 3000);
      }
    })
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.cmd);
  switch (request.cmd) {
    case 'toc':
      let headMk = '';
      // $(".yuque-doc-content :header").each(function () {
      //     let tagName = $(this)[0].tagName;
      //     let title = $(this).text();
      //     let id = $(this).attr('id');
      //     let head = ' '.repeat(tagName[1]) + '-';
      //     if (!/^\s*$/.test(title)) {
      //         headMk += `${head} (${title})[${id}]` + '<br/>';
      //     }
      // });        
      $(".lake-content-editor-core :header").each(function () {
        let tagName = $(this)[0].tagName;
        let title = $(this).text();
        let id = $(this).attr('id');
        let head = '&nbsp;&nbsp;'.repeat(tagName[1] - 1);
        if (!/^\s*$/.test(title)) {
          headMk += `<a href="${window.location.href.slice(0, -5)}#${id}">${head}${title}</a>` + '<br/>';
        }
      });
      $(".lake-content-editor-core").prepend(headMk + '<br/>');
      break;
    // 添加图片
    case 'append_img':
      $(".lake-content-editor-core").append(`<img src="${request.value}">`);
      break;
    case 'prepend_img':
      $(".lake-content-editor-core").prepend(`<img src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture&a=${Math.random()}">`);
      break;
    // 缩进    
    case 'prepend_blank':
      $(".lake-content-editor-core p:not(:has(span))").each(function () {
        let content = $(this).text();
        if (!/^\s*$/.test(content)) {
          $(this).text('  ' + content.trim());
        }
      });
      break;
    // 格式化文本    
    case 'format_content':
      $(".lake-content-editor-core p:not(:has(span))").each(function () {
        let content = $(this).text();
        if (!/^\s*$/.test(content)) {
          $(this).text(bishengFormat(content, config));
        }
      });
      break;
    // 获得书籍   
    case 'get_books':
      let urls = '';
      $(".ant-tree-list-holder-inner a").each(function () {
        let aTag = $(this);
        let href = aTag.attr('href');
        let title = aTag.attr('title');
        if (title) {
          urls += `[${title}](https://${window.location.host}${href})` + '<br/>';
        }
      });
      sendResponse(urls)
      break;
    default:
      break;
  }
});