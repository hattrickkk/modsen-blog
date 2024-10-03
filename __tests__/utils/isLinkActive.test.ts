import { expect } from '@jest/globals'

import { isLinkActive } from '@/shared'

const defaultParams = {
    pathname: '/en/about',
    itemPath: '/about',
    locale: 'en',
}
describe('isLinkActive', () => {
    it('should return true when pathname matches the itemPath with locale', () => {
        expect(isLinkActive(defaultParams)).toBe(true)
    })

    it('should return false when the locales are not the same', () => {
        const params = {
            locale: 'ru',
        }
        expect(isLinkActive({ ...defaultParams, ...params })).toBe(false)
    })

    it('should return false when pathname does not match the itemPath', () => {
        const params = {
            pathname: '/en/contact',
        }
        expect(isLinkActive({ ...defaultParams, ...params })).toBe(false)
    })

    it('should return false when itemPath is the root, but pathname is not the root', () => {
        const params = {
            itemPath: '/',
        }
        expect(isLinkActive({ ...defaultParams, ...params })).toBe(false)
    })
})
