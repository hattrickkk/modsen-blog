import { Sen } from 'next/font/google'
import { Inter } from 'next/font/google'

export const sen = Sen({ weight: ['700'], style: ['normal'], subsets: ['latin'], display: 'swap' })

export const inter = Inter({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})
