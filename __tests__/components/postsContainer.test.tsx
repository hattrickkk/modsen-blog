import { expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import { PostsContainer } from '@/features'
import { Category } from '@/shared'

import { AllProviders } from '../test-utils'

import '@testing-library/jest-dom'
import 'node-fetch'

jest.mock('node-fetch', () => jest.fn())

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

const POSTS = [basedPost, { ...basedPost, id: '2', title: 'title2' }, { ...basedPost, id: '3', title: 'title3' }]

describe('Post container', () => {
    test('Posts container renders correctly with posts', () => {
        render(<PostsContainer posts={POSTS}></PostsContainer>, { wrapper: AllProviders })
        POSTS.forEach(({ title }) => {
            expect(screen.getByText(title)).toBeInTheDocument()
        })
        expect(screen.getAllByTestId('post-card')).toHaveLength(POSTS.length)
    })

    test('Posts container renders correctly without posts', () => {
        render(<PostsContainer posts={[]}></PostsContainer>, { wrapper: AllProviders })
        expect(screen.queryAllByTestId('post-card').length).toBe(0)
    })
})
