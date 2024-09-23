import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { inter } from '@/shared'
import { Footer, Header } from '@/widgets'

import './styles/nullStyle.scss'
import styles from './styles/global.module.scss'

const RootLayout = async ({
    children,
    params: { locale },
}: {
    children: ReactNode
    params: { locale: 'en' | 'ru' }
}) => {
    const messages = await getMessages()
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <div className={styles.wrapper}>
                        <Header />
                        <main className={styles.main}>{children}</main>
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
export default RootLayout
