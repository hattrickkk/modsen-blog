import { FC, ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'

import * as messages from '../messages/en.json'

type Props = {
    children: ReactNode
}
export const AllProviders: FC<Props> = ({ children }) => {
    return (
        <NextIntlClientProvider locale={'en'} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
