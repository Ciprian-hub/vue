import { createApp } from '@vue/runtime-dom'
import store from "./store"
import router from "./router"
import './index.css'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
