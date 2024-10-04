import { redirect } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { Locale } from '@/shared'

import routing from './routing'

export default getRequestConfig(async ({ locale }) => {
    if (!routing.locales.includes(locale as Locale)) {
        redirect('/en')
    }
    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    }
})
