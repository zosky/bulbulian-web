import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'
import { messaging } from '/src/firebase'
import PersonBubble from '/src/components/PersonBubble.vue'
import Bulbulian from '/src/components/svg/Bulbulian.vue'

const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
})

app.use(router)
app.use(head)
app.component('PersonBubble',PersonBubble)
app.component('Bulbulian',Bulbulian)
app.config.globalProperties.$messaging = messaging
app.mount(document.body)
