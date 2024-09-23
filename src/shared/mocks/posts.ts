import { Category } from '../constants/categories'

export const POST = {
    created: new Date(),
    id: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    authorId: 1,
    category: Category.BUSINESS,
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}

export const POSTS_ARR = Array(4)
    .fill(POST)
    .map((post, i) => {
        return {
            ...post,
            id: i + 1,
        }
    })
