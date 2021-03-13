var $ = require('jquery');
const { bishengFormat } = require('bisheng-formatter-core');

const { removeAllBlank, getSaleConfig, insertContent } = require('../common/utils.js');
import { defaultYuqeuOption } from '../common/config.js';
var { Readability } = require('@mozilla/readability');
var TurndownService = require('turndown').default;
var turndownPluginGfm = require('turndown-plugin-gfm');

/**
 * 格式化文档
 */
function formatText() {
  chrome.storage.sync.get({ yuqueOption: defaultYuqeuOption }, res => {
    let option = res.yuqueOption;
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
        duplicatedPunctuations: option.duplicatedPunctuations,
        /* 
          决定是否格式化全角符号/数字/英文字符
            before: 这里是一段中文，带着中文符号。这里是一段ChineseText！带着Chinese Punctuations？
            after: 这里是一段中文, 带着中文符号. 这里是一段 ChineseText! 带着 Chinese Punctuations?
        */
        fullWidthCharsAndFollowingSpaces: option.fullWidthCharsAndFollowingSpaces,
        /* 
          决定是否格式化半角符号/数字/英文字符
            before: 这一幕被一楼 DHBM 系统监控到,30 秒内关闭了系统.
            after: 这一幕被一楼 DHBM 系统监控到, 30 秒内关闭了系统.
         */
        halfWidthCharsAndFollowingSpaces: option.halfWidthCharsAndFollowingSpaces,
        /* 决定是否在中文和英文之间添加空格 */
        addSpacesBetweenChineseCharAndAlphabeticalChar: option.addSpacesBetweenChineseCharAndAlphabeticalChar,
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
      useSimpleQuotation: option.useSimpleQuotation,
    };
    $('.lake-content-editor-core p:not(:has(span))').each(function() {
      let content = $(this).html();
      if (!/^\s*$/.test(content)) {
        $(this).html(bishengFormat(content, config));
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  let currentTabUrl = window.location.href;
  if (currentTabUrl.includes('yuque')) {
    // 字体替换
    chrome.storage.sync.get({ yuqueOption: defaultYuqeuOption }, res => {
      let option = res.yuqueOption;
      if (option.fonts) {
        // 当前页面设置字体
        $('*').css('font-family', option.fonts);
        // 文章内容是异步加载的，延迟再设置一次，但是网速过慢还是有问题，待优化
        setTimeout(() => {
          $('*').css('font-family', option.fonts);
        }, 500);

        setTimeout(() => {
          $('*').css('font-family', option.fonts);
        }, 1000);

        setTimeout(() => {
          $('*').css('font-family', option.fonts);
        }, 3000);
      }
    });

    chrome.storage.sync.get({ yuqueOption: defaultYuqeuOption }, res => {
      let option = res.yuqueOption;

      // 删除发现上的小红点
      if (getSaleConfig(option, 'closeRedDot')) {
        setTimeout(() => {
          $('a[href="/explore/events"] > span > sup').remove();
        }, 50);
        setTimeout(() => {
          $('a[href="/explore/events"] > span > sup').remove();
        }, 100);
        setTimeout(() => {
          $('a[href="/explore/events"] > span > sup').remove();
        }, 500);
        setTimeout(() => {
          $('a[href="/explore/events"] > span > sup').remove();
        }, 1000);
      }

      // 统计编辑面文字数
      if (currentTabUrl.endsWith('edit')) {
        if (getSaleConfig(option, 'wordCount')) {
          setInterval(() => {
            let spanCount = $('.lark-editor-save-tip').children('span').length;
            let totlaCount = removeAllBlank($('.lake-content-editor-core').text()).length;
            let totalWordCount = getWordCount(totlaCount, '.lake-content-editor-core');
            if (spanCount <= 1) {
              $('.lark-editor-save-tip').append(`<span>&nbsp;(${option.countPrefix} ${(totalWordCount * option.countCoefficient).toFixed(1) / 1} ${option.countSuffix})</span>`);
            } else {
              $('.lark-editor-save-tip')
                .children('span')
                .last()
                .text(` (${option.countPrefix} ${(totalWordCount * option.countCoefficient).toFixed(1) / 1} ${option.countSuffix})`);
            }
          }, 500);
        }
      } else {
        if (getSaleConfig(option, 'readEvaluate')) {
          // 统计阅读时间
          // 这里不能使用，setTimeout，因为通过目录点击，不会重新加载页面
          setInterval(() => {
            let spanCount = $('#header > div > div.header-crumb > span').children('span').length;
            let wordCount = getWordCount(removeAllBlank($('#content').text()).length, '#content');
            if (spanCount <= 1) {
              $('#header > div > div.header-crumb > span')
                .last()
                .append(`<span>&nbsp;(需阅读 ${Math.ceil(wordCount / option.readWordCount)} 分钟)</span>`);
            } else {
              $('#header > div > div.header-crumb > span')
                .children('span')
                .last()
                .text(` (需阅读 ${Math.ceil(wordCount / option.readWordCount)} 分钟)`);
            }
          }, 1000);
        }
      }
    });
  }
});

/**
 * 级别修改
 */
function headerLevelUpdate(isDown) {
  var step = 1;
  var maxLevel = 6;
  if (isDown) {
    step = -1;
    maxLevel = 1;
  }
  $('.lake-content-editor-core :header').each(function() {
    let tagName = $(this)[0].tagName;
    let tagNumber = parseInt(tagName[1]);
    var newTag = 'h' + tagNumber;
    if ((isDown && tagNumber > maxLevel) || (!isDown && tagNumber < maxLevel)) {
      newTag = 'h' + (tagNumber + step);
    }
    console.log(`<${newTag}>${this.innerHTML}</${newTag}>`);
    $(this).replaceWith(`<${newTag}>${this.innerHTML}</${newTag}>`);
  });
}

/**
 * 获得单词总数
 */
function getWordCount(totalWordCount, rootSel) {
  let root = $(`${rootSel}`);
  // 图片描述
  let imageMaskWord = removeAllBlank(root.find('.lake-image-mask').text()).length;
  // 文档描述
  let docCardWord = removeAllBlank(root.find('.lake-doc-card-view').text()).length;
  // 按钮描述
  let dropdownWord = removeAllBlank(root.find('.dropdown-container').text()).length;
  // 行内卡片
  let cardInlineWord = removeAllBlank(root.find('.le-card-yuque-inline').text()).length;
  // 卡片选择
  let cardselectWord = removeAllBlank(root.find('.lake-cardselect-list').text()).length;
  // 数学公式
  let mathWord = removeAllBlank(root.find('.lake-math-container').text()).length;
  let mathToolWord = removeAllBlank(root.find('.lake-math-editor-toolbar').text()).length;
  // 所有卡片
  let cardWord = removeAllBlank(root.find('div[data-card-element="center"]').text()).length;

  // 无效字符
  let invalidWordCount =
    Math.max(imageMaskWord, 0) +
    Math.max(docCardWord, 0) +
    Math.max(dropdownWord, 0) +
    Math.max(cardselectWord, 0) +
    Math.max(mathWord, 0) +
    Math.max(mathToolWord, 0) +
    Math.max(cardWord, 0) +
    Math.max(cardInlineWord, 0);

  const totalCount = totalWordCount - invalidWordCount;
  return totalCount < 0 ? 0 : totalCount;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.cmd) {
    case 'toc':
      let headMk = '';
      $('.lake-content-editor-core :header').each(function() {
        let tagName = $(this)[0].tagName;
        let title = $(this).text();
        let id = $(this).attr('id');
        let head = '&nbsp;&nbsp;'.repeat(tagName[1] - 1);
        if (!/^\s*$/.test(title)) {
          headMk += `<a href="${window.location.href.slice(0, -5)}#${id}">${head}${title}</a>` + '<br/>';
        }
      });
      $('.lake-content-editor-core').prepend(headMk + '<br/>');
      break;
    // 添加图片
    case 'append_img':
      $('.lake-content-editor-core').append(`<img src="${request.value}">`);
      break;
    case 'append_color_block':
      insertContent(`<blockquote class="lake-alert lake-alert-${request.value}"><p><br/></p></blockquote>`);
      break;
    case 'append_color_header':
      insertContent(`<p><span style="background-color: ${request.value};"> </span> </p>`);
      break;
    case 'prepend_img':
      $('.lake-content-editor-core').prepend(`<img src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture&a=${Math.random()}">`);
      break;
    // 缩进
    case 'prepend_blank':
      $('.lake-content-editor-core p:not(:has(span))').each(function() {
        let content = $(this).text();
        if (!/^\s*$/.test(content)) {
          $(this).text('  ' + content.trim());
        }
      });
      break;
    // 格式化文本
    case 'format_content':
      formatText();
      break;
    // 获得书籍
    case 'get_books':
      let urls = '';
      $('.ant-tree-list-holder-inner a').each(function() {
        let aTag = $(this);
        let href = aTag.attr('href');
        let title = aTag.attr('title');
        if (title) {
          urls += `[${title}](https://${window.location.host}${href})` + '<br/>';
        } else {
          title = aTag.text();
          if (title) {
            urls += `[${title}](https://${window.location.host}${href})` + '<br/>';
          }
        }
      });
      sendResponse(urls);
      break;
    // 获得 markmap 文本
    case 'get_markmap':
      let markdownText = $('pre').text();
      sendResponse(markdownText);
      break;
    // 剪藏
    case 'clipper':
      // 正文提取
      var documentClone = document.cloneNode(true);
      // 排除
      // 不知道原理，直接 remove 无效，好像只支持通过 getElementById 才能删除
      let array = documentClone.getElementsByClassName('lake-image-mask-point');
      for (let index = 0; index < array.length; index++) {
        array[index].innerText = '';
      }
      var article = new Readability(documentClone).parse();
      // html -> markdown
      var turndownService = new TurndownService({ codeBlockStyle: 'fenced', preformattedCode: true });
      turndownService.addRule('code', {
        filter: ['code'],
        replacement: function(content) {
          return '```' + content + '```';
        },
      });
      var gfm = turndownPluginGfm.gfm;
      var tables = turndownPluginGfm.tables;
      turndownService.use(gfm);
      turndownService.use(tables);
      let content = article.content;
      var markdown = turndownService.turndown(content);
      console.log(article.title);
      console.log(markdown);
      sendResponse({ content: markdown, title: article.title });
      break;
    case 'generator_header':
      let headerArr = new Array(0, 0, 0, 0, 0, 0);
      $('.lake-content-editor-core :header').each(function() {
        let tagName = $(this)[0].tagName;
        let tagNumber = tagName[1];
        let title = $(this).text();
        if (title) {
          let titleArr = title.split(' ');
          if (titleArr.length == 2) {
            title = titleArr[1];
          }
        }
        let curIndex = tagNumber - 1;
        headerArr[curIndex] = headerArr[curIndex] + 1;
        for (let index = tagNumber; index < headerArr.length; index++) {
          headerArr[index] = 0;
        }
        let header =
          headerArr
            .join('.')
            .split('.0')
            .join('')
            .split('0.')
            .join('') + ' ';
        $(this).text(header + title);
      });
      break;
    // 标题降级
    case 'lower_header':
      headerLevelUpdate(false);
      break;
    // 标题升级
    case 'up_header':
      headerLevelUpdate(true);
      break;
    default:
      break;
  }
});
