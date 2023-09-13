import { createApp } from '../node_modules/vue'
import store from "./store"
import router from "./router"
import './index.css'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
