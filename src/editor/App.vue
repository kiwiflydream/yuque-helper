<template>
  <div>
    <div>
      <el-row :gutter="5">
        <el-col :span="12">
          <el-input v-model="title" placeholder="文章标题" clearable :style="{ width: '100%' }">
            <template slot="prepend">标题</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="saveContent">保存</el-button>
          <el-button type="danger" @click="closeWindow">关闭</el-button>
        </el-col>
      </el-row>
    </div>
    <br />
    <div class="markdown">
      <Markdown v-model="source" :toolbars="{ uploadImage: false, save: true }" @on-save="handleOnSave" :height="800" />
    </div>
  </div>
</template>

<script>
import Markdown from 'vue-meditor';
import axios from 'axios';
import { getUser, createDoc } from '../common/yuque-sdk';

export default {
  components: {
    Markdown,
  },
  data() {
    return {
      source: '',
      title: '',
    };
  },
  methods: {
    handleOnSave({ value, theme }) {
      this.saveContent();
    },
    closeWindow() {
      window.close();
    },
    saveContent() {
      chrome.storage.sync.get({ yuqueOption: {} }, res => {
        let config = res.yuqueOption;
        if (!config || !config.yuqueToken || !config.yuqueRepo || !config.yuqueUsername) {
          chrome.notifications.create(null, {
            type: 'basic',
            iconUrl: '/icons/icon_48.png',
            title: '保存失败',
            message: '请先配置 yuque 信息',
          });
        } else {
          let result = createDoc({
            title: this.title,
            content: this.source,
            token: config.yuqueToken,
            repo: config.yuqueRepo,
          });
          result
            .then(res => {
              let url = 'https://www.yuque.com' + res.config.url.replace('docs', '').replace('/repos', '') + res.data.data.slug;
              this.$notify({
                title: '收藏成功',
                dangerouslyUseHTMLString: true,
                message: '<a href="' + url + '">👉 点击查看 </url>',
              });
            })
            .catch((err, data) => {
              this.$notify({
                title: '收藏失败',
                dangerouslyUseHTMLString: true,
                message: '原因：' + err.response.data.message,
              });
            });
        }
      });
    },
  },
  created() {
    chrome.storage.local.get({ tempContent: '', tempTitle: '' }, res => {
      if (res.tempContent) {
        this.source = res.tempContent;
      }
      if (res.tempTitle) {
        this.title = res.tempTitle;
      }
    });
  },
};
</script>

<style scoped></style>
