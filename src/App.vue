<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import HelloWorld from 'com/HelloWorld.vue'
// import DefineExpose from 'com/DefineExpose.vue'

const child = ref<{
	count: number
	handle: () => void
} | null>(null)

onMounted(() => {
	console.log('count', child.value?.count)
	console.log('handle', child.value?.handle)
})
</script>

<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png" />2222
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite">
    <template v-slot="user">
      {{user}}
    </template>
  </HelloWorld> -->
	<!-- <DefineExpose ref="child" />
  <el-button>I am ElButton</el-button> -->
	<router-view />
</template>

<style>
#nprogress .bar {
	background: red !important;
}
</style>
