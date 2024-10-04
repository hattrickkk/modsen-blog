import { FetchParams } from '@/shared'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchAuthors = async ({ page, limit }: FetchParams) => {
    const response = await fetch(`${API_URL}/authors?page=${page}&limit=${limit}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return await response.json()
}

export const getAuthorById = async (id: string) => {
    const response = await fetch(`${API_URL}/authors/${id}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return await response.json()
}
