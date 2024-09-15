import { Category } from '@/shared'

export interface Post {
    id: string
    author: string
    title: string
    text: string
    created: Date
    category: Category
    image?: string
}
