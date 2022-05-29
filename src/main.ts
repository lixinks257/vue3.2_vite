import { createApp } from 'vue'
import App from './App.vue'
// 直接省略/index
import router from './router'
// injection key 传入 useStore 方法可以获取类型化的 store。
import { store, key } from './store'
// import { store } from './store'
// 全局使用动态图标icon
import * as ElIcons from '@element-plus/icons'
import * as ElementUI from 'element-plus'

const app = createApp(App)
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name])
}
app.use(router).use(store, key).mount('#app')

// 声明全局变量属性
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $Confirm: (a: string) => Promise<void>
    $Alert: any
    $Notify: any
  }
}
// 声明全局变量
app.config.globalProperties.$Confirm = ElementUI.ElMessageBox.confirm
app.config.globalProperties.$Alert = ElementUI.ElMessageBox.alert
app.config.globalProperties.$Notify = ElementUI.ElNotification
