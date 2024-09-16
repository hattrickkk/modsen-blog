import { Category } from '../constants/categories'

export const POST = {
    created: new Date(),
    id: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    author: 'John Doe',
    category: Category.BUSINESS,
}

export const POSTS_ARR = Array(4)
    .fill(POST)
    .map((post, i) => {
        return {
            ...post,
            id: i + 1,
        }
    })
