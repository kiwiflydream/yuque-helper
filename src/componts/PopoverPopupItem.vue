<template>
  <el-popover placement="top" width="160" trigger="click">
    <el-image style="width: 40px; height: 40px" @click="appendImg(item.url)" :src="item.url" fit="fill" v-for="(item, index) in imgItems" :key="index"></el-image>
    <div slot="reference" class="card">
      <el-row>
        <el-col :span="4"><i class="el-icon-grape"></i></el-col>
        <el-col :span="20"><span style="float: left">插入表情</span></el-col>
      </el-row>
    </div>
  </el-popover>
</template>

<script>
module.exports = {
  data: function () {
    return {
      imgItems: [
        { title: '666', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517148299-3fa0b903-d927-4ed5-89c0-bb663bf8b178.png' },
        { title: '爱了', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517149052-1ee79588-b78a-4140-8838-fac92eb00c69.png' },
        { title: '差评', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517149778-75765f7a-ab62-43e6-9d52-a231f5b46500.png' },
        { title: '很无奈啊', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517150546-25750d77-e49e-4ede-b42b-dc6ed3eee3fe.png' },
        { title: '加油_必胜', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517151334-834d0318-508b-49bd-946d-f555c2a94d33.png' },
        { title: '加油_打call', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517152322-34499eb2-59a3-40b1-8a76-d6554491ef15.png' },
        { title: '加油_撒花', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517153132-a0092e67-7c33-4849-adc7-7e97fd20f20b.png' },
        { title: '惊讶_卧槽', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517153912-1ec132ff-3a71-44a6-bae5-e56996399256.png' },
        { title: '开心', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517154773-582e2c16-9923-4c4f-b628-267fafd35065.png' },
        { title: '哭了', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517155467-eb397d0e-13ff-4292-abf9-937452ef84c9.png' },
        { title: '忙死了', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517156286-6a6d13d4-fc9e-412b-bbf3-8ec34386cf6c.png' },
        { title: '思考中', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517157093-f5aebbea-ad42-4754-890a-6dcc3e17133a.png' },
        { title: '委屈_快哭了', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517157847-1826f575-d6b9-42c4-895c-26a28bdb479d.png' },
        { title: '我佛了', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517158558-c508a781-093f-44cf-a2b9-25cc6a8137d6.png' },
        { title: '笑哭了', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517159493-be3ff8ad-72ff-4609-b80b-d3db1af748e3.png' },
        { title: '赞', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517162056-b5961f38-ca49-4b46-b562-fd59d52bb002.png' },
        { title: '赞哦', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517162704-5d109b91-c4e0-4b70-8cdb-ccb71d75aa07.png' },
        { title: '震惊了', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517163548-e9b6bacb-00ef-4d55-8df4-2400033e50c7.png' },
        { title: '做鬼脸', url: 'https://cdn.nlark.com/yuque/0/2020/png/1399816/1598517164348-1eef832a-179f-43d9-93a5-c09d681f9373.png' },
      ],
    };
  },
  methods: {
    // 卡片处理方法
    appendImg(imgUrl) {
      this.$emit('append_img', imgUrl);
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