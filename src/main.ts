import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import './shared/style.scss'

// createApp(App).mount('#app')

import { createWebHashHistory,createRouter } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path:'/',component:Home }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')


