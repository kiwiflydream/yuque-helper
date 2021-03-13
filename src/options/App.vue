<template>
  <div id="app">
    <el-form ref="elForm" :model="yuqueOption" :rules="rules" size="mini" label-width="110px">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="16" :md="14" :lg="12" :xl="8">
          <el-form-item label="字体名称" prop="fonts">
            <el-input v-model="yuqueOption.fonts" placeholder="请输入字体名称，可同时设置多个，例如：Fira Code,Microsoft YaHei" clearable :style="{ width: '100%' }"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="16" :md="14" :lg="12" :xl="8">
          <el-form-item label="字数统计前缀" prop="countPrefix">
            <el-input v-model="yuqueOption.countPrefix" placeholder="请输入字数统计的前缀"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="16" :md="14" :lg="12" :xl="8">
          <el-form-item label="字数统计后缀" prop="countSuffix">
            <el-input v-model="yuqueOption.countSuffix" placeholder="请输入字数统计的后缀"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="16" :md="14" :lg="12" :xl="8">
          <el-form-item label="字数统计系数" prop="countCoefficient">
            <el-input v-model="yuqueOption.countCoefficient" placeholder="默认为 1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="16" :md="14" :lg="12" :xl="8">
          <el-form-item label="阅读速度" prop="readWordCount">
            <el-input v-model="yuqueOption.readWordCount" placeholder="默认为每分钟 300">
              <template slot="append">/ 分钟</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="16" :md="14" :lg="12" :xl="8">
          <el-form-item label="yuque token" prop="yuqueToken">
            <el-input v-model="yuqueOption.yuqueToken" placeholder="yuque 应用 token"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="16" :md="14" :lg="12" :xl="8">
          <el-form-item label="yuque 用户名" prop="yuqueUsername">
            <el-input v-model="yuqueOption.yuqueUsername" placeholder="yuque 主页的用户名"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="16" :md="14" :lg="12" :xl="8">
          <el-form-item label="保存知识库" prop="yuqueRepo">
            <el-input v-model="yuqueOption.yuqueRepo" placeholder="保存到的知识库"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item label="阅读评估" prop="readEvaluate">
            <el-switch v-model="yuqueOption.readEvaluate" active-text="开启" inactive-text="关闭"> </el-switch>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item label="字数统计" prop="wordCount">
            <el-switch v-model="yuqueOption.wordCount" active-text="开启" inactive-text="关闭"> </el-switch>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item label="关闭提示小红点" prop="closeRedDot">
            <el-switch v-model="yuqueOption.closeRedDot" active-text="开启" inactive-text="关闭"> </el-switch>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item label="全角字符格式化" prop="fullWidthCharsAndFollowingSpaces">
            <el-switch v-model="yuqueOption.fullWidthCharsAndFollowingSpaces" active-text="开启" inactive-text="关闭"> </el-switch>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item label="半角字符格式化" prop="halfWidthCharsAndFollowingSpaces">
            <el-switch v-model="yuqueOption.halfWidthCharsAndFollowingSpaces" active-text="开启" inactive-text="关闭"> </el-switch>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item label="全角引号替换" prop="useSimpleQuotation">
            <el-switch v-model="yuqueOption.useSimpleQuotation" active-text="开启" inactive-text="关闭"> </el-switch>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item label="中英文添加空格" prop="addSpacesBetweenChineseCharAndAlphabeticalChar">
            <el-switch v-model="yuqueOption.addSpacesBetweenChineseCharAndAlphabeticalChar" active-text="开启" inactive-text="关闭"> </el-switch>
          </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item label="连续符号格式化" prop="duplicatedPunctuations">
            <el-switch v-model="yuqueOption.duplicatedPunctuations" active-text="开启" inactive-text="关闭"> </el-switch>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col ::xs="12" :sm="8" :md="7" :lg="6" :xl="4">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">保存</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { defaultYuqeuOption } from '../common/config.js';

export default {
  components: {},
  props: [],
  data() {
    return {
      yuqueOption: {},
      rules: {
        readWordCount: [
          {
            required: false,
            pattern: /^(\d+)$/,
            message: '必须为整数',
            trigger: 'blur',
          },
        ],
        countCoefficient: [
          {
            required: false,
            pattern: /(^[0-9,.]+$)/,
            message: '必须为数字(可为小数)',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  created() {
    this.yuqueOption = defaultYuqeuOption;
    chrome.storage.sync.get({ yuqueOption: this.yuqueOption }, res => {
      this.yuqueOption = res.yuqueOption;
    });
  },
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
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
      chrome.storage.sync.set({ yuqueOption: this.yuqueOption }, () => {});
      this.$notify({
        title: '成功',
        message: '配置变更成功',
        type: 'success',
      });
    },
  },
};
</script>
<style>
#app {
  margin-top: 5%;
}
</style>
