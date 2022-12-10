import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

// new moment
const newMoment = () => dayjs
export { newMoment }