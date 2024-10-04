import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next/types'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { inter, Locale } from '@/shared'
import { Footer, Header } from '@/widgets'

import '../styles/nullStyle.scss'
import styles from '../styles/global.module.scss'

type Props = {
    children: ReactNode
    params: { locale: Locale }
}

export const metadata: Metadata = {
    title: 'Modsen Client Blog',
    description: 'Blog Application for Modsen Clients',
}

const RootLayout = async ({ children, params: { locale } }: Props) => {
    const messages = await getMessages({ locale })

    return (
        <NextIntlClientProvider messages={messages}>
            <html lang={locale}>
                <body className={inter.className}>
                    <div className={styles.wrapper}>
                        <Toaster />
                        <Header />
                        <main className={styles.main}>{children}</main>
                        <Footer />
                    </div>
                </body>
            </html>
        </NextIntlClientProvider>
    )
}
export default RootLayout
