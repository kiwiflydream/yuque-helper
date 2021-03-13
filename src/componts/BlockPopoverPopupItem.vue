<template>
  <el-popover v-show="isShow" placement="top" width="160" trigger="click">
    <el-image
      :style="{ width: itemWidth + 'px', height: itemHeight + 'px' }"
      @click="handler(item.value)"
      :src="item.img"
      fit="fill"
      v-for="(item, index) in items"
      :key="index"
    ></el-image>
    <div slot="reference" class="card">
      <el-row>
        <el-col :span="4"><i :class="icon"></i></el-col>
        <el-col :span="20"
          ><span style="float: left">{{ title }}</span></el-col
        >
      </el-row>
    </div>
  </el-popover>
</template>

<script>
module.exports = {
  data: function() {
    return {};
  },
  props: {
    items: {
      type: Array,
      default: [],
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    //   是否显示
    isShow: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
      required: true,
    },
    itemWidth: {
      type: String,
      default: '40',
      required: false,
    },
    itemHeight: {
      type: String,
      default: '40',
      required: false,
    },
  },
  methods: {
    // 卡片处理方法
    handler(value) {
      this.$emit('handler', value);
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
