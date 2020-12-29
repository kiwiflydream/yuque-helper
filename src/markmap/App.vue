<template>
  <div class="markmap">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '无数据',
    };
  },
  created() {
    chrome.storage.local.get({temp: '获取数据失败'}, (res) => {
      if (res.temp) {
          this.message = res.temp;
      }
    });
  },
};
</script>



