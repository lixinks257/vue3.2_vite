<script setup lang="ts">
/* <script setup>编译语法糖，在vue文件内使用，极大提升工作效率 */
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
// 引入
const store = useStore()
let test = computed(() => {
  return store.state.count
})
const increment = () => {
  // 使用
  store.commit('increment')
  console.log('test', test)
}
/* 类型标注声明props */
// defineProps<{ msg: string }>()

defineProps({
  msg: {
    type: String,
  },
})

const count = ref(0)
</script>

<template>
  <!-- <h1>{{ props.msg }}</h1> -->
  <!-- 可以省略props -->
  <h1>{{ msg }}++++++</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <button type="button" @click="increment">test is: {{ test }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
