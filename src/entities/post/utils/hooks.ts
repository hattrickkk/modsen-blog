import { useTranslations } from 'next-intl'

import { MONTHS } from '@/shared'

export const useFormateDate = (d: string) => {
    const date = new Date(d)
    const t = useTranslations('months')
    const month = MONTHS[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${t(month)} ${day}, ${year}`
}

export const useFormateDateForSinglePost = (d: string) => {
    const date = new Date(d)
    const t = useTranslations()
    const month = MONTHS[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${day}${t('singlePost.ending')} ${t(`months.${month}`)} ${year}`
}
