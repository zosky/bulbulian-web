<script setup>
// heavily inspired by (/lifted from)
// PROPS: https://web.dev/codelab-make-installable/
import { Download } from 'mdue'
const isHidden = ref(false)

onMounted(()=>{
  /* Only register a service worker if it's supported */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
  }
  window.addEventListener('beforeinstallprompt', (event) => {
    console.log('👍', 'beforeinstallprompt', event)
    event.preventDefault() // Prevent the mini-infobar from appearing on mobile.
    window.deferredPrompt = event // Stash the event so it can be triggered later.
    isHidden.value = false // Remove the 'hidden' class from the install button container.
  })
  window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event)
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null
  })  
})
const installGoTime = async () => {
  console.log('👍', 'butInstall-clicked')
  const promptEvent = window.deferredPrompt
  if (!promptEvent) return // The deferred prompt isn't available.
  promptEvent.prompt() // (else) Show the install prompt.
  const result = await promptEvent.userChoice // Log the result
  console.log('👍', 'userChoice', result)
  window.deferredPrompt = null // Reset the deferred prompt variable, since prompt() can only be called once.
  isHidden.value = true // Hide the install button.
}
</script>

<template>
  <div v-if="!isHidden" class="wrapAll">
    <button :class="isHidden?'hidden':'flex'" @click="installGoTime()">
      <Download class="i" /> 
      <div class="wrap">
        <div class="ins">install</div>
        <Bulbulian class="b" />
        <div class="com">.com</div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.wrapAll { @apply absolute bottom-3 right-5 xl:right-6 w-min }
button { @apply 
  self-center justify-between flex-row-reverse 
  mx-3 px-4 pb-1 pt-2 w-full 
  rounded-xl animate-pulse ring-1 
  bg-blue-400 bg-opacity-50 
  ring-blue-600 
  dark:text-yellow-500 
  dark:bg-purple-500 dark:bg-opacity-60 
  dark:ring-pink-700 my-auto 
  transition-all
  hover:scale-125 origin-bottom-right
  hover:bg-blue-600 
  hover:text-blue-100
  hover:dark:bg-pink-800 
  hover:dark:text-yellow-400
}
.i { @apply text-6xl scale-125 
  -mr-2 -ml-6 mt-0.5 -mb-2 
  text-red-600 
  dark:text-yellow-600 
}
.wrap { @apply flex flex-col justify-start self-end }
.ins { @apply text-left -mb-1 }
.b { @apply items-start text-3xl }
.com { @apply text-right px-1 text-sm -mt-2 }
</style>