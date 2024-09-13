import { MONTHS } from '@/shared'

export const formateDate = (date: Date) => {
    const month = MONTHS[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
}
