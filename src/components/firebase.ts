import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { getMessaging, getToken } from 'firebase/messaging'
import { getFirestore, collection, doc, setDoc, getDocs } from 'firebase/firestore'
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

// init:Firebase
const app = initializeApp(firebaseConfig)
// init:Firebase:message
const messaging = getMessaging(app)
const smashToken = async () => await getToken(messaging, { vapidKey: 'BAzyuaAmkBwEKjpIk5o7t_JNF9JBFBtQykGkRSSzx0SyoGH47-q0CHkGfGglnPjnSI8ri0jiospmdVcgVX2aWj8' })
// init:Firebase:analitics
const analytics = getAnalytics(app)
const smashEvent = async (msg:string) => await logEvent(analytics, msg)
// init:fireBase:db
const db = getFirestore(app)
const saveData = async (dbCollection:string,docName:string,data:object) => {
  console.log('saving', dbCollection, data)
  try {
    await setDoc(doc(db, dbCollection, docName), data)
    console.log('done')
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
const getData = async (dbCollection:string) =>{
  const querySnapshot = await getDocs(collection(db, dbCollection))
  const docs: object[] = []
  querySnapshot.forEach((doc) => { docs.push(doc.data()) })
  return docs
}
// share
export { smashEvent, smashToken, saveData, getData }