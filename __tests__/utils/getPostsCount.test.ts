import { expect } from '@jest/globals'

import { getPostsCount } from '@/entities'
import { API_URL, Category } from '@/shared'

global.fetch = jest.fn() as jest.Mock

const basedPost = {
    created: 'Sun Sep 22 2024 20:11:56 GMT+0300 (Москва, стандартное время)',
    title: 'title1',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    authorId: '2',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    category: Category.STARTUP,
    tags: ['experience', 'screen'],
    id: '1',
}

const mockResponseData = [basedPost]

describe('getPostsCount', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should return the correct number of posts', async () => {
        ;(global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponseData,
        })

        const count = await getPostsCount()
        expect(fetch).toHaveBeenCalledWith(`${API_URL}/posts`)
        expect(count).toBe(1)
    })

    it('should throw an error if response is not ok', async () => {
        ;(global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
        })

        await expect(getPostsCount()).rejects.toThrow('Response data error')
        expect(fetch).toHaveBeenCalledWith(`${API_URL}/posts`)
    })
})
