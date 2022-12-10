import { app } from './initApp'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { TYPE } from 'vue-toastification'
import { saveData } from './fireStore'
import type { Ref } from 'vue'
import type { User } from 'firebase/auth'
const moment = newMoment() // init dayJS

// init:Firebase:message
const messaging = getMessaging(app)
const dbCollection = 'users/messaging/tokens' // save where
const toast = useToast() // toaster

const smashToken = async () => await getToken( messaging, { vapidKey: 'BAzyuaAmkBwEKjpIk5o7t_JNF9JBFBtQykGkRSSzx0SyoGH47-q0CHkGfGglnPjnSI8ri0jiospmdVcgVX2aWj8' })

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.

const msgCache : Ref = ref([])
onMessage(messaging, (payload) => {
  if(payload?.notification) {
    console.log(`msgCached=${msgCache.value.length}... +1:`, payload)
    if(payload?.notification) {
      const b = payload?.notification?.body ?? 'none'
      const nID = toast( b , { timeout: 12241, type: TYPE.SUCCESS })
      msgCache.value.push({ ... payload.notification, nID })
    }
  }
})

const saveToken = async(u:User) => {
  const token = await smashToken()
  const tokenData = {
    token,
    lastLoginAt: moment().format('X'),
    displayName: u?.displayName,
    photoURL: u?.photoURL,
    email: u?.email
  }
  const readyToSave = Object.values(tokenData).filter(v=>v).length == 5
  if( readyToSave ) { 
    saveData(dbCollection,tokenData.token,tokenData)
  } else { 
    console.log('tokenNOT saved', tokenData)
  }
}

// share
export { smashToken, saveToken, msgCache }