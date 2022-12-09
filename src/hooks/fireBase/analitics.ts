import { app } from './initApp'
import { getAnalytics, logEvent } from 'firebase/analytics'

// init:Firebase:analitics
const analytics = getAnalytics(app)
const smashEvent = async (msg:string) => await logEvent(analytics, msg)

export { smashEvent }