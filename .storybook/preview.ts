import type { Preview } from '@storybook/react'

import nextIntl from './.next-intl'

const preview: Preview = {
    parameters: {
        initialGlobals: {
            locale: 'en',
            locales: {
                en: 'English',
                ru: 'Русский',
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        nextIntl,
    },
}

export default preview
