<template>
  <div>
    <div class="content" v-if="!isSearchImg">
      <popup-item
        :title="item.title"
        :isShow="item.isShow"
        :handlerType="item.handlerType"
        :icon="item.icon"
        @handler="cardHandler"
        v-for="item in popupItems"
        :key="item.handlerType"
      ></popup-item>

      <block-popover-popup-item
        :isShow="colorPopup"
        @handler="appendColorBlock"
        :items="colorBlockItems"
        title="插入提示框"
        icon="el-icon-potato-strips"
        itemWidth="80"
        itemHeight="45"
      ></block-popover-popup-item>

      <block-popover-popup-item
        :isShow="colorHeaderPopup"
        @handler="appendColorHeader"
        :items="colorHeaderItems"
        title="插入彩色标题头"
        icon="el-icon-ice-cream-round"
        itemWidth="80"
        itemHeight="45"
      ></block-popover-popup-item>

      <block-popover-popup-item :isShow="moodPopup" @handler="appendImg" :items="imgItems" title="插入表情" icon="el-icon-grape"></block-popover-popup-item>
    </div>
    <div id="imgContent" v-else>
      <el-row>
        <el-col :span="24">
          <el-input placeholder="请输入图片关键字" v-model="queryImg" @change="queryImgs">
            <el-button slot="append" icon="el-icon-search" @click="queryImgs"></el-button>
          </el-input>
        </el-col>
      </el-row>

      <img src="/icons/empty.png" v-if="this.imgs.length == 0" />
      <el-row v-eles>
        <el-col :span="24" v-for="(row, index) in imgs" :key="index">
          <el-row :gutter="10" style="margin-top: 10px">
            <el-col :span="8" v-for="(col, index) in row" :key="index">
              <el-image :src="col" @click="() => appendImgCursor(col.replace(/\?.*/, ''))"></el-image>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BlockPopoverPopupItem from '../componts/BlockPopoverPopupItem.vue';
import PopupItem from '../componts/PopupItem.vue';
import { mood, colorBlockItems, colorHeaderItems, popupItems, defaultYuqeuOption } from '../common/config.js';
import { createDoc, readDoc, findDocs } from '../common/yuque-sdk';
import { randomNum } from '../common/utils';
import { createClient } from 'pexels';
import chunk from 'lodash/chunk';

var dayjs = require('dayjs');

export default {
  components: { PopupItem, BlockPopoverPopupItem },
  data() {
    return {
      isSearchImg: false,
      queryImg: '',
      colorPopup: true,
      colorHeaderPopup: true,
      moodPopup: true,
      popupItems,
      imgItems: mood,
      colorBlockItems: colorBlockItems,
      colorHeaderItems: colorHeaderItems,
      imgs: [],
    };
  },
  methods: {
    // 图片查询
    queryImgs() {
      const client = createClient('563492ad6f91700001000001eca94caacb6e46de863cb2e3d89bdf4b');
      const query = this.queryImg;
      client.photos.search({ query, per_page: 21 }).then(photos => {
        if (photos) {
          this.imgs = chunk(
            photos.photos.map(photo => photo.src.portrait),
            3
          );
        }
      });
    },
    // 卡片处理
    cardHandler(handlerType) {
      switch (handlerType) {
        case 'markdown':
          this.openMarkdown();
          break;
        case 'html':
          this.openHtml();
          break;
        case 'copyUrl':
          this.copyUrl();
          break;
        case 'toc':
          this.sendSimpleMessageToContentScript({ cmd: 'toc', value: '' });
          break;
        case 'prepend_img':
          this.sendSimpleMessageToContentScript({ cmd: 'prepend_img', value: '' });
          break;
        case 'prepend_blank':
          this.sendSimpleMessageToContentScript({ cmd: 'prepend_blank', value: '' });
          break;
        case 'format_content':
          this.sendSimpleMessageToContentScript({ cmd: 'format_content', value: '' });
          break;
        case 'get_books':
          this.getBooks();
          break;
        case 'markmap':
          this.openMarkmap();
          break;
        case 'setting':
          this.openUrl('/options/options.html');
          break;
        case 'help':
          this.openUrl('https://www.yuque.com/yag8nv');
          break;
        case 'generator_header':
          this.sendSimpleMessageToContentScript({ cmd: 'generator_header', value: '' });
          break;
        case 'clipper':
          this.openEditor();
          break;
        case 'diary':
          this.openDiary();
          break;
        case 'randomWalk':
          this.randomWalk();
          break;
        case 'lower_header':
          this.sendSimpleMessageToContentScript({ cmd: 'lower_header', value: '' });
          break;
        case 'up_header':
          this.sendSimpleMessageToContentScript({ cmd: 'up_header', value: '' });
          break;
        case 'queryImg':
          this.isSearchImg = true;
          break;
        default:
          break;
      }
    },
    // 以 markdown 打开
    openMarkdown() {
      this.getCurrentTab(tab => {
        window.open(this.urlFormat(tab.url) + '/markdown?plain=true&linebreak=false&anchor=false', '_blank');
      });
    },
    // 添加图片
    appendImgCursor(imgUrl) {
      this.appendContendCursor(`<img src="${imgUrl}"/>`);
    },
    // 光标处添加内容
    appendContendCursor(content) {
      this.sendMessageToContentScript({ cmd: 'append_content_in_cursor', value: content }, function(response) {});
    },
    // 以 html 打开
    openHtml() {
      this.getCurrentTab(tab => {
        window.open(this.urlFormat(tab.url) + '/html', '_blank');
      });
    },
    // 格式化 url，如果是语雀的链接就去除 /edit
    urlFormat(url) {
      if (url.includes('yuque')) {
        return url.replace('/edit', '');
      } else {
        return url;
      }
    },
    // 添加表情
    appendImg(imgUrl) {
      this.sendMessageToContentScript({ cmd: 'append_img', value: imgUrl }, function(response) {
        console.log('来自content的回复：' + response);
      });
    },
    // 打开 markmap 目录
    openMarkmap() {
      this.getCurrentTab(tab => {
        if (!tab.url.includes('markdown')) {
          this.sendMessageToContentScript({ cmd: 'clipper' }, function(response) {
            chrome.storage.local.set({ temp: response.content }, () => {
              window.open('/markmap/markmap.html', '_blank');
            });
          });
        } else {
          this.sendMessageToContentScript({ cmd: 'get_markmap' }, function(response) {
            console.log(response);
            chrome.storage.local.set({ temp: response }, () => {
              window.open('/markmap/markmap.html', '_blank');
            });
          });
        }
      });
    },
    // 打开编辑框
    openEditor() {
      this.sendMessageToContentScript({ cmd: 'clipper' }, function(response) {
        chrome.storage.local.set({ tempContent: response.content, tempTitle: response.title }, () => {
          window.open('/editor/editor.html', '_blank');
        });
      });
    },
    // 打开页面
    openUrl(url) {
      window.open(url, '_blank');
    },
    // 添加提示框
    appendColorBlock(imgUrl) {
      this.sendMessageToContentScript({ cmd: 'append_color_block', value: imgUrl }, function(response) {
        console.log('来自content的回复：' + response);
      });
    },
    appendColorHeader(imgUrl) {
      this.sendMessageToContentScript({ cmd: 'append_color_header', value: imgUrl }, function(response) {
        console.log('来自content的回复：' + response);
      });
    },
    isArticleUrl() {
      this.getCurrentTab(tab => {
        currentTabIsArticleUrl = /https:\/\/.*\.yuque\.com\/.+\/.+\/.+/.test(tab.url);
      });
    },
    copy(text) {
      let transfer = document.createElement('input');
      document.body.appendChild(transfer);
      transfer.value = text; // 这里表示想要复制的内容
      transfer.focus();
      transfer.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
      }
      transfer.blur();
      console.log('复制成功');
      document.body.removeChild(transfer);
    },
    // 随机漫步
    randomWalk() {
      chrome.storage.sync.get({ yuqueOption: {} }, res => {
        let config = res.yuqueOption;
        if (!config || !config.yuqueToken || !config.yuqueRepo || !config.yuqueUsername) {
          chrome.notifications.create(null, {
            type: 'basic',
            iconUrl: '/icons/icon_48.png',
            title: '打开失败',
            message: '请先配置 yuque 信息',
          });
        } else {
          findDocs({
            token: config.yuqueToken,
            repo: config.yuqueRepo,
          })
            .then(res => {
              var list = res.data.data;
              this.openUrl(`https://www.yuque.com/${config.yuqueRepo}/${list[randomNum(0, list.length)].slug}`);
            })
            .catch(res => {
              chrome.notifications.create(null, {
                type: 'basic',
                iconUrl: '/icons/icon_48.png',
                title: '漫步失败',
                message: '原因：' + err.response.data.message,
              });
            });
        }
      });
    },
    // 获得书籍目标
    getBooks() {
      this.sendMessageToContentScript({ cmd: 'get_books', value: '' }, response => {
        this.copy(response);
        if (response) {
          this.notify('复制成功', '图书目录');
        } else {
          this.notify('复制失败', '请在目录面使用此功能');
        }
      });
    },
    openDiary() {
      chrome.storage.sync.get({ yuqueOption: {} }, res => {
        let config = res.yuqueOption;
        if (!config || !config.yuqueToken || !config.yuqueRepo || !config.yuqueUsername) {
          chrome.notifications.create(null, {
            type: 'basic',
            iconUrl: '/icons/icon_48.png',
            title: '打开失败',
            message: '请先配置 yuque 信息',
          });
        } else {
          let today = dayjs().format('YYYYMMDD');
          // 获得当天的文章
          readDoc({
            slug: today,
            token: config.yuqueToken,
            repo: config.yuqueRepo,
          })
            .then(res => {
              this.openUrl(`https://www.yuque.com/${config.yuqueRepo}/${today}/edit`);
            })
            .catch(res => {
              createDoc({
                title: dayjs().format('YYYY-MM-DD'),
                content: '',
                slug: today,
                token: config.yuqueToken,
                repo: config.yuqueRepo,
              })
                .then(res => {
                  this.openUrl(`https://www.yuque.com/${config.yuqueRepo}/${today}/edit`);
                })
                .catch(err => {
                  chrome.notifications.create(null, {
                    type: 'basic',
                    iconUrl: '/icons/icon_48.png',
                    title: '日记生成失败',
                    message: '原因：' + err.response.data.message,
                  });
                });
            });
        }
      });
    },
    copyUrl() {
      this.getCurrentTab(tab => {
        let urlByMarkdown = '[' + tab.title + '](' + this.urlFormat(tab.url) + ')';
        this.copy(urlByMarkdown);
        // 通知
        this.notify('复制成功', '复制内容： ' + urlByMarkdown);
      });
    },
    getCurrentTab(callback) {
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        function(tabs) {
          if (callback) callback(tabs.length ? tabs[0] : null);
        }
      );
    },
    // 通知
    notify(title, message) {
      chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: '/icons/icon_48.png',
        title: title,
        message: message,
      });
    },
    // 发送简单消息给 content script
    sendSimpleMessageToContentScript(request) {
      this.sendMessageToContentScript(request, function(response) {});
    },
    // 发送消息给 content script
    sendMessageToContentScript(message, callback) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
          if (callback) callback(response);
        });
      });
    },
  },
  created() {
    this.yuqueOption = defaultYuqeuOption;
    chrome.storage.sync.get({ yuqueOption: this.yuqueOption }, res => {
      this.yuqueOption = res.yuqueOption;
      popupItems.map(it => {
        it.isShow = this.yuqueOption[it.handlerType];
        return it;
      });
      this.popupItems = popupItems;
      this.colorPopup = this.yuqueOption['colorPopup'];
      this.colorHeaderPopup = this.yuqueOption['colorHeaderPopup'];
      this.moodPopup = this.yuqueOption['moodPopup'];
    });
  },
};
</script>

<style scoped>
.content {
  padding: 6px 1px 6px 1px;
  width: 200px;
  background-color: #f3f4f7;
  border-radius: 5px;
}
#imgContent {
  width: 480px;
  height: 380px;
}
</style>
