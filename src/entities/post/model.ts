import { Category } from '@/shared'

export interface IPost {
    id: string
    author: string
    title: string
    text: string
    created: Date
    category: Category
    image?: string
}
