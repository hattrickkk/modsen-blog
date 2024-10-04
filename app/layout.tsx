import { ReactNode } from 'react'

import { Locale } from '@/shared'

import ErrorBoundary from './global-error'

type Props = {
    children: ReactNode
    params: { locale: Locale }
}

const AppLayout = async ({ children, params: { locale } }: Props) => {
    return (
        <html lang={locale}>
            <body>
                <ErrorBoundary>{children}</ErrorBoundary>
            </body>
        </html>
    )
}

export default AppLayout
