import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router' // 引入路由

// 挂载路由到Vue实例
createApp(App).use(router).mount('#app')