import { createApp } from 'vue'
import './assets/tailwind.css'
import './assets/gitHubMD.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
})

app.use(router)
app.use(head)
app.use(Toast, toastOptions) // from ./hooks/toaster.ts
app.provide('$smashEvent',smashEvent)
app.provide('$smashToken',smashToken)
app.provide('$saveToken',saveToken)
app.provide('$getData',getData)
app.provide('$rDoc',rDoc)
app.provide('$qData',qData)
app.provide('$fData',fData)
app.provide('$saveData',saveData)
app.provide('$rmData',rmData)
app.provide('$doAuth',doAuth)
app.provide('$localUser',localUser.value)
app.provide('$msgCache', msgCache)
app.mount(document.body)
