import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'iconify-icon'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
