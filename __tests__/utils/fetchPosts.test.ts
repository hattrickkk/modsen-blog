import { expect } from '@jest/globals'

import { fetchPosts } from '@/entities'
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

const post2 = { ...basedPost, id: '2', category: Category.BUSINESS }
const post3 = { ...basedPost, id: '3', category: Category.BUSINESS }

const mockResponseData = [basedPost]

const basedParams = { page: 1, limit: 1, query: '', param: '' }

describe('fetchPosts', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should fetch posts successfully', async () => {
        ;(global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponseData,
        })
        const result = await fetchPosts(basedParams)

        expect(fetch).toHaveBeenCalledWith(`${API_URL}/posts?page=${basedParams.page}&limit=${basedParams.limit}`)
        expect(result).toEqual(mockResponseData)
    })

    it('should fetch posts with query and param', async () => {
        ;(global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => [post2, post3],
        })

        const params = { ...basedParams, query: Category.BUSINESS, param: 'category' }
        const result = await fetchPosts(params)

        expect(fetch).toHaveBeenCalledWith(
            `${API_URL}/posts?page=${basedParams.page}&limit=${basedParams.limit}&category=${Category.BUSINESS}`
        )
        expect(result).toEqual([post2, post3])
    })

    it('should throw an error if response is not ok', async () => {
        ;(global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
        })

        await expect(fetchPosts(basedParams)).rejects.toThrow('Response data error')
        expect(fetch).toHaveBeenCalledWith(`${API_URL}/posts?page=${basedParams.page}&limit=${basedParams.limit}`)
    })
})
