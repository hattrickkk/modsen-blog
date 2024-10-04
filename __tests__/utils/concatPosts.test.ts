import { expect } from '@jest/globals'

import { concatPosts } from '@/entities'
import { Category } from '@/shared'

const basedPost = {
    created: 'Sun Sep 22 2024 20:11:56 GMT+0300 (Москва, стандартное время)',
    title: 'Design tips for designers that cover everything you need',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    authorId: '2',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    category: Category.STARTUP,
    tags: ['experience', 'screen'],
    id: '1',
}

const post2 = {
    ...basedPost,
    id: '2',
}

const post3 = {
    ...basedPost,
    id: '3',
}

describe('concatPosts', () => {
    it('should return unique posts by id', () => {
        expect(concatPosts([basedPost, post2, basedPost])).toEqual([basedPost, post2])
    })

    it('should return the original posts array', () => {
        expect(concatPosts([basedPost, post2, post3])).toEqual([basedPost, post2, post3])
    })

    it('should return empty array if init posts array is empty too', () => {
        expect(concatPosts([])).toEqual([])
    })

    it('should return one uniqie post in array if all init array posts have the same id', () => {
        expect(concatPosts(Array(3).fill(basedPost))).toEqual([basedPost])
    })
})
