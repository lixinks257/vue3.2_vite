import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
/* 按需引入element-plus */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'

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
    // extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.css'],
    alias: {
      /* 别名配置 */
      '@': path.resolve(__dirname, 'src'),
      com: path.resolve(__dirname, 'src/components'),
    },
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    /* 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可
以完全禁用此项。 */
    assetsInlineLimit: 2048,
    //css代码拆分
    cssCodeSplit: true,
    /* Terser 相对较慢，但大多数情况下构建后的文件体积更小。ESbuild 最小化混淆更快但构建后
的文件相对更大。 */
    /* 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild，它比
terser 快 20-40 倍，压缩率只差 1%-2%。  */
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境去除console
        drop_console: true,
      },
    },
  },
  plugins: [
    /* 按需引入element-plus */
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
      imports: ['vue']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue({
      // refTransform: true,
    }),
    // giz压缩
    viteCompression(),
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
