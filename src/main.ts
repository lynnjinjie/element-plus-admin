import { createApp } from 'vue'
// import type { App as ModuleApp } from 'vue'
import App from './App.vue'
import { type Install } from './types/install'
import router from '~/router'
import '~/styles/index.css'
import 'uno.css'
const app = createApp(App)
// 安装模块
Object.values(import.meta.glob<{ install: Install }>('./modules/*.ts', { eager: true })).forEach(i => i.install(app))
app.use(router).mount('#app')
