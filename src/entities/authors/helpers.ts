import { AUTHORS, getRandomDelay } from '@/shared'

import { Author } from './model'

export const fetchAuthors = (): Promise<Author[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(AUTHORS)
        }, getRandomDelay())
    })
}
