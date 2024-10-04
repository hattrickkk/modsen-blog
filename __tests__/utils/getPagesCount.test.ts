import { expect } from '@jest/globals'

import { getPagesCount } from '@/entities'

describe('getPagesCount', () => {
    it('should return the correct number of pages', () => {
        expect(getPagesCount({ itemsPerPage: 5, totalCount: 10 })).toBe(2)
    })

    it('shoud return 1 for totalCount is equal to itemsPerPage', () => {
        expect(getPagesCount({ itemsPerPage: 5, totalCount: 5 })).toBe(1)
    })

    it('should return the correct number of pages for half page case', () => {
        expect(getPagesCount({ itemsPerPage: 5, totalCount: 7 })).toBe(2)
    })
})
