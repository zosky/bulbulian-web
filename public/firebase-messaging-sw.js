importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyCC_Lmi6FvfVvycQkoaxI7nkIgIzjX48ek',
  authDomain: 'bulbulianweb.firebaseapp.com',
  projectId: 'bulbulianweb',
  storageBucket: 'bulbulianweb.appspot.com',
  messagingSenderId: '291632338531',
  appId: '1:291632338531:web:971e6592803fe540670a56',
}

const app = firebase.initializeApp(firebaseConfig)