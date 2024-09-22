import { useTranslations } from 'next-intl'

import { MONTHS } from '@/shared'

export const useFormateDate = (date: Date) => {
    const t = useTranslations('months')
    const month = MONTHS[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${t(month)} ${day}, ${year}`
}
