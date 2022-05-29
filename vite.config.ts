import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
/* 按需引入element-plus */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // 配置服务端口
  server: {
    port: 3001,
    /* 配置代理 */
    proxy: {
      '/api': {
        target: 'http://106.52.235.252:8101/',
        changeOrigin: true, // 允许跨域
        // 将作为识别用途的/api字符串从请求路径中去掉
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      /* 别名配置 */
      '@': path.resolve(__dirname, 'src'),
      com: path.resolve(__dirname, 'src/components'),
    },
  },
  plugins: [
    /* 按需引入element-plus */
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
  ],
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        //引入varibles.scss全局预定义变量
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
})
