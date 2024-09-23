import { redirect } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import routing from './routing'

type Locale = 'en' | 'ru'

export default getRequestConfig(async ({ locale }) => {
    if (!routing.locales.includes(locale as Locale)) {
        redirect('/en')
    }
    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    }
})
