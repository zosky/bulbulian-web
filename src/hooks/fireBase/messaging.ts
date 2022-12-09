import { app } from './initApp'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import type { Ref } from 'vue'
// more@ https://firebase.google.com/docs/web/setup#available-libraries

// init:Firebase:message
const messaging = getMessaging(app)
const smashToken = async () => await getToken( messaging, { vapidKey: 'BAzyuaAmkBwEKjpIk5o7t_JNF9JBFBtQykGkRSSzx0SyoGH47-q0CHkGfGglnPjnSI8ri0jiospmdVcgVX2aWj8' })
//DEBUG:showToken// .then(r=>{console.log('smashTokenRESP:',r)})

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.

const msgCache : Ref = ref([])
onMessage(messaging, (payload) => {
  if(payload?.notification) {
    console.log(`msgCached=${msgCache.value.length}... +1:`, payload)
    if(payload?.notification) 
      msgCache.value.push(payload.notification)}
})

// share
export { smashToken, msgCache }