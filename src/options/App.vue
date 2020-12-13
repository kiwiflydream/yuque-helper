<template>
  <div>
    <el-row>
      <el-form ref="elForm" :model="yuqueOption" :rules="rules" size="mini" label-width="100px">
        <el-col :span="9">
          <el-form-item label="字体名称" prop="fonts">
            <el-input v-model="yuqueOption.fonts" placeholder="请输入字体名称，可同时设置多个，例如：Fira Code,Microsoft YaHei" clearable :style="{ width: '100%' }"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">保存</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      yuqueOption: {
        fonts: undefined,
      },
      rules: {
        fonts: [],
      },
    };
  },
  created() {
    chrome.storage.local.get('yuqueOption', (res) => {
      let optionByStorage = res.yuqueOption;
      let optionByLocal = this.yuqueOption;
      if (optionByStorage) {
        for (let k in optionByStorage) {
          if (optionByStorage[k]) {
            optionByLocal[k] = optionByStorage[k];
          }
        }
      }
    });
  },
  methods: {
    submitForm() {
      this.$refs['elForm'].validate((valid) => {
        if (!valid) return;
        this.saveOption();
      });
    },
    resetForm() {
      this.$refs['elForm'].resetFields();
      this.saveOption();
    },
    // 保存配置
    saveOption() {
      // 持久化
      chrome.storage.local.get('yuqueOption', (res) => {
        res.yuqueOption = this.yuqueOption;
        chrome.storage.local.set(res);
      });
    },
  },
};
</script>
<style>
</style>
