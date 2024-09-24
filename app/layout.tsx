import { ReactNode } from 'react'

import { Locale } from '@/shared'

type Props = {
    children: ReactNode
    params: { locale: Locale }
}

const AppLayout = async ({ children, params: { locale } }: Props) => {
    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    )
}

export default AppLayout
