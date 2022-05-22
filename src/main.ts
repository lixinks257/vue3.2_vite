import { createApp } from 'vue'
import App from './App.vue'
// 直接省略/index
import router from './router'
import { store } from './store'
// 全局使用动态图标icon
import * as ElIcons from '@element-plus/icons'
const app = createApp(App)
for (const name in ElIcons){
    app.component(name,(ElIcons as any)[name])
}
app.use(router).use(store).mount('#app')

// createApp(App).use(router).use(store).mount('#app')
