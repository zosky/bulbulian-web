import { createApp } from 'vue'
import './assets/tailwind.css'
import './assets/gitHubMD.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'
import { smashToken, smashEvent } from './components/firebase'
import PersonBubble from './components/PersonBubble.vue'
import Bulbulian from './components/svg/Bulbulian.vue'

const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
})

app.use(router)
app.use(head)
app.component('PersonBubble',PersonBubble)
app.component('Bulbulian',Bulbulian)
app.provide('$smashEvent',smashEvent)
app.provide('$smashToken',smashToken)
app.mount(document.body)
