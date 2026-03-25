import { createApp } from 'vue'
import { RouterLink } from 'vue-router'
import App from './app.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'

const app = createApp(App)

app.component('NuxtLink', RouterLink)
app.use(router)
app.mount('#app')
