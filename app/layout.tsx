import { ReactNode } from 'react'

import { inter } from '@/shared'

const AppLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
export default AppLayout
