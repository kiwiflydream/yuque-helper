<template>
  <div class="markdown">
    <Markdown v-model="source" />
  </div>
</template>

<script>
import Markdown from 'vue-meditor';

export default {
  components: {
    Markdown,
  },
  data() {
    return {
      source: '',
    };
  },
  created() {
    chrome.storage.local.get({ tempContent: '', tempTitle: '' }, res => {
      if (res.tempContent) {
        this.source = res.tempContent;
      }
    });
  },
};
</script>

<style scoped></style>
