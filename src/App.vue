<template>
  <div class="container">
    <t-card :shadow="true" class="card" title="随机密码生成器">
      <t-form style="width: 500px;" :data="formData" @submit="onSubmit" :label-width="0">
        <t-form-item label="密码位数" name="length">
          <t-input
            label="密码位数"
            type="number"
            v-model="formData.length"
            placeholder="输入密码位数"
            min="1"
            max="20"
            clearable
          />
        </t-form-item>
        <t-form-item name="estring">
          <t-input
            label="额外字符"
            v-model="formData.estring"
            placeholder="将随机出现在生成的密码里"
            clearable
          />
        </t-form-item>
        <t-form-item name="selected">
          <t-space>
            <t-checkbox v-model="formData.upperCase">大写字母</t-checkbox>
            <t-checkbox v-model="formData.symbols">特殊符号</t-checkbox>
            <t-checkbox v-model="formData.digits">阿拉伯数字</t-checkbox>
          </t-space>
        </t-form-item>
        <t-form-item name="result">
          <div>生成结果： {{ resultPwd }}</div>
        </t-form-item>

        <t-form-item>
          <t-button theme="primary" type="submit" block>生成</t-button>
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

// 定义结果
const resultPwd = ref("");

// 表单数据初始化
const formData = reactive({
  length: 10,
  estring: "",
  upperCase: false,
  digits: true,
  symbols: false,
});

// 生成随机的函数
const generateRandomString = (
  length: number,
  upperCase: boolean,
  digits: boolean,
  symbols: boolean,
  estring: string
): string => {
  // 如果一些选项可用就将特定内容加入
  let chars = `abcdefghijklmnopqrstuvwxyz${
    upperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
  }${digits ? "0123456789" : ""}${symbols ? "~!@#$%^&*()" : ""}${estring}`;
  let result = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    result += chars.charAt(index);
  }
  return result;
};

// 提交函数
const onSubmit = () => {
  resultPwd.value = generateRandomString(
    formData.length,
    formData.upperCase,
    formData.digits,
    formData.symbols,
    formData.estring
  );
};
</script>

<style scoped>
.container {
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
