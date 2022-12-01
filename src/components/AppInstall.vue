<script setup>
onMounted(()=>{
  /* Only register a service worker if it's supported */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    msg.value = ['👍', 'beforeinstallprompt', event]
    event.preventDefault() // Prevent the mini-infobar from appearing on mobile.
    window.deferredPrompt = event // Stash the event so it can be triggered later.
    isHidden.value = false // Remove the 'hidden' class from the install button container.
  })

  window.addEventListener('appinstalled', (event) => {
    msg.value = ['👍', 'appinstalled', event]
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null
  })  

})
const isHidden = ref(true)
const msg = ref(null)
const installGoTime = async () => {
  msg.value = ['👍', 'butInstall-clicked']
  const promptEvent = window.deferredPrompt
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return
  }
  // Show the install prompt.
  promptEvent.prompt()
  // Log the result
  const result = await promptEvent.userChoice
  msg.value = ['👍', 'userChoice', result]
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null
  // Hide the install button.
  // divInstall.classList.toggle('hidden', true);
  isHidden.value = true
}

</script>

<template>
  <button :class="{hidden:isHidden}" @click="installGoTime()">
    install app
  </button>
  <pre>{{msg}}</pre>
</template>