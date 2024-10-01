import { Category } from '../constants/categories'

export const POST = {
    id: '1',
    title: 'Design tips for designers that cover everything you need',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    created: 'Sun Sep 29 2024 23:25:18 GMT+0300 (Москва, стандартное время)',
    authorId: '1',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    category: Category.BUSINESS,
    tags: ['businnes', 'life'],
}

export const POSTS = [
    POST,
    {
        created: 'Sun Sep 22 2024 20:11:56 GMT+0300 (Москва, стандартное время)',
        title: 'Design tips for designers that cover everything you need',
        image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        authorId: '2',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        category: Category.STARTUP,
        tags: ['experience', 'screen'],
        id: '2',
    },
    {
        created: 'Sun Sep 22 2024 20:11:56 GMT+0300 (Москва, стандартное время)',
        title: 'How to build rapport with your web design clients',
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        authorId: '3',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        category: Category.BUSINESS,
        tags: ['experience', 'screen', 'technology', 'marketing'],
        id: '3',
    },
    {
        created: 'Sun Sep 22 2024 20:11:56 GMT+0300 (Москва, стандартное время)',
        title: 'Logo design trends to avoid in 2022',
        image: 'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        authorId: '4',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        category: Category.ECOMONY,
        tags: ['marketing', 'life'],
        id: '4',
    },
]
