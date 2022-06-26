<!--  -->
<template>
  <div>
    <div id="main" ref="main" style="width: 35%; height: 300px;"></div>
    <!--  测试权限按钮 -->
    <el-button v-btn="'system:goods:goodsInfo:add'">{{$t('menus.wIndex')}}</el-button>
    <el-button v-btn="'system:goods:goodsInfo:update'">更新按钮</el-button>
    <el-button v-btn="'system:goods:goodsInfo:update'">删除按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

onMounted(() => {
  init()
})
const main = ref()
const init = () => {
  // let mychart = echarts.init(document.getElementById('main'))
  /* ref虚拟dom */
  let mychart = echarts.init(main.value)
  var option = {
    title: {
      text: '产品销量排行',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  }
  // 给予数据源
  mychart.setOption(option)
}
</script>
<style lang="scss" scoped></style>
