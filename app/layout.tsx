import { ReactNode } from 'react'

const AppLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}

export default AppLayout
