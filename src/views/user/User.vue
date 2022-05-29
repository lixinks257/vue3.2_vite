<!--  -->
<template>
  <el-button @click="add">User</el-button>
</template>

<script setup lang="ts">
/* 引入全局el-element时，需要引入样式,否则样式会错乱 */
// import 'element-plus/es/components/message-box/style/css'
import { ComponentInternalInstance, getCurrentInstance } from 'vue' // 添加断言
const { proxy } = getCurrentInstance() as ComponentInternalInstance
const add = () => {
  // 使用全局变量
  proxy?.$Alert('XXXXX')
}
</script>
<style lang="scss" scoped></style>
