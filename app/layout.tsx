import { ReactNode } from 'react'

import './nullStyle.scss'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang='en'>
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}
export default RootLayout
