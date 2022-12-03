import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken } from 'firebase/messaging'
// more@ https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyCC_Lmi6FvfVvycQkoaxI7nkIgIzjX48ek',
  authDomain: 'bulbulianweb.firebaseapp.com',
  projectId: 'bulbulianweb',
  storageBucket: 'bulbulianweb.appspot.com',
  messagingSenderId: '291632338531',
  appId: '1:291632338531:web:971e6592803fe540670a56',
  measurementId: 'G-7QVLHLJLP5'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const messaging = getMessaging(app)
const fcmT = getToken(messaging, { vapidKey: 'BAzyuaAmkBwEKjpIk5o7t_JNF9JBFBtQykGkRSSzx0SyoGH47-q0CHkGfGglnPjnSI8ri0jiospmdVcgVX2aWj8' })

// share
export { analytics, messaging, fcmT }