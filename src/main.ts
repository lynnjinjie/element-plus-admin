import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router'
import '~/styles/index.css'
import 'uno.css'
const app = createApp(App)
// 安装模块
Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install(app))
app.use(router).mount('#app')
