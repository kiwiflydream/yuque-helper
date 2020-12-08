<template>
  <div v-show="isShow" @click="cardHandler" class="card">
    <el-row>
      <el-col :span="4"><i :class="icon"></i></el-col>
      <el-col :span="20"
        ><span style="float: left">{{ title }}</span></el-col
      >
    </el-row>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  props: {
    //   是否显示
    isShow: {
      type: Boolean,
      default: true,
    },
    // 标题
    title: {
      type: String,
      default: '',
    },
    // 处理类型
    handlerType: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'el-icon-sugar',
    },
  },
  methods: {
    // 卡片处理方法
    cardHandler() {
      this.$emit('handler', this.handlerType);
    },
  },
};
</script>

<style scoped>
.card:hover {
  background-color: #f5f7fd;
}

.card {
  border-radius: 5px;
  background-color: #ffffff;
  margin: auto;
  margin-top: 6px;
  line-height: 30px;
  height: 30px;
  width: 180px;
  text-align: center;
  font-size: 14px;
}
</style>