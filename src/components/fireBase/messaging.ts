import { app } from './initApp'
import { getMessaging, getToken } from 'firebase/messaging'
// more@ https://firebase.google.com/docs/web/setup#available-libraries

// init:Firebase:message
const messaging = getMessaging(app)
const smashToken = async () => await getToken( messaging, { vapidKey: 'BAzyuaAmkBwEKjpIk5o7t_JNF9JBFBtQykGkRSSzx0SyoGH47-q0CHkGfGglnPjnSI8ri0jiospmdVcgVX2aWj8' })

// share
export { smashToken }