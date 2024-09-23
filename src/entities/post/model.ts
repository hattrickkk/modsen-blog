import { Category } from '@/shared'

export interface Post {
    id: string
    authorId: string
    author: string
    title: string
    text: string
    created: string
    category: Category
    image: string
}
