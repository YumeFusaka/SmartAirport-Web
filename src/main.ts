import { createApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/src/index.scss'
import { lazyPlugin } from '@/directives'
import 'echarts'

const app = createApp(App)

app.use(lazyPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
