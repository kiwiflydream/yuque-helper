<template>
  <div class="content">
    <popup-item
      :title="item.title"
      :isShow="item.isShow"
      :handlerType="item.handlerType"
      :icon="item.icon"
      @handler="cardHandler"
      v-for="item in popupItems"
      :key="item.handlerType"
    ></popup-item>
    <popover-popup-item @append_img="appendImg"></popover-popup-item>
  </div>
</template>

<script>
import PopoverPopupItem from '../componts/PopoverPopupItem.vue';
import PopupItem from '../componts/PopupItem.vue';

export default {
  components: { PopupItem, PopoverPopupItem },
  data() {
    return {
      popupItems: [
        {
          title: 'Markdown 视图',
          handlerType: 'markdown',
          isShow: true,
          icon: 'el-icon-sugar',
        },
        {
          title: 'Html 视图',
          handlerType: 'html',
          isShow: true,
          icon: 'el-icon-dessert',
        },
        {
          title: '复制 Url',
          handlerType: 'copyUrl',
          isShow: true,
          icon: 'el-icon-food',
        },
        {
          title: '生成 TOC',
          handlerType: 'toc',
          icon: 'el-icon-cherry',
        },
        {
          title: '插入 Bing 图片',
          handlerType: 'prepend_img',
          icon: 'el-icon-apple',
        },
        {
          title: '首行缩进',
          handlerType: 'prepend_blank',
          icon: 'el-icon-pear',
        },
        {
          title: '文本格式化',
          handlerType: 'format_content',
          icon: 'el-icon-watermelon',
        },
        {
          title: '获得目录列表',
          handlerType: 'get_books',
          icon: 'el-icon-orange',
        },
      ],
    };
  },
  methods: {
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
        default:
          break;
      }
    },
    // 以 markdown 打开
    openMarkdown() {
      this.getCurrentTab((tab) => {
        window.open(tab.url + '/markdown?plain=true&linebreak=false&anchor=false', '_blank');
      });
    },
    // 以 html 打开
    openHtml() {
      this.getCurrentTab((tab) => {
        window.open(tab.url + '/html', '_blank');
      });
    },
    // 添加表情
    appendImg(imgUrl) {
      this.sendMessageToContentScript({ cmd: 'append_img', value: imgUrl }, function (response) {
        console.log('来自content的回复：' + response);
      });
    },
    isArticleUrl() {
      this.getCurrentTab((tab) => {
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
    // 获得书籍目标
    getBooks() {
      this.sendMessageToContentScript({ cmd: 'get_books', value: '' }, (response) => {
        this.copy(response);
        if (response){
          this.notify('复制成功', '图书目录');
        }else{
          this.notify('复制失败', '请在目录面使用此功能');
        }
      });
    },
    copyUrl() {
      this.getCurrentTab((tab) => {
        let urlByMarkdown = '[' + tab.title + '](' + tab.url + ')';
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
        function (tabs) {
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
      this.sendMessageToContentScript(request, function (response) {});
    },
    // 发送消息给 content script
    sendMessageToContentScript(message, callback) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
          if (callback) callback(response);
        });
      });
    },
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
</style>