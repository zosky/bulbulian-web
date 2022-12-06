import { createApp } from 'vue'
import './assets/tailwind.css'
import './assets/gitHubMD.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'
// fireBase
import { smashEvent } from './components/fireBase/analitics'
import { doAuth, localUser } from './components/fireBase/auth'
import { saveData, getData, qData, rDoc, rmData } from './components/fireBase/fireStore'
import { smashToken } from './components/fireBase/messaging'
// custom components
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
app.provide('$getData',getData)
app.provide('$rDoc',rDoc)
app.provide('$qData',qData)
app.provide('$saveData',saveData)
app.provide('$rmData',rmData)
app.provide('$doAuth',doAuth)
app.provide('$localUser',localUser.value)
// if(import.meta.env.MODE == 'development'){
//   // DEV ONLY - add data
//   app.provide('$saveData',saveData)
// }
app.mount(document.body)
