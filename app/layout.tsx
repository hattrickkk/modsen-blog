import { ReactNode } from 'react'

import { inter } from '@/shared'
import { Footer, Header } from '@/widgets'

import './styles/nullStyle.scss'
import styles from './styles/global.module.scss'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className={styles.wrapper}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
export default RootLayout
