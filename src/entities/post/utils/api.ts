import { FetchParams } from '@/shared'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchPosts = async ({ page, limit, query, param }: FetchParams) => {
    const response = await fetch(
        `${API_URL}/posts?page=${page}&limit=${limit}${query && param && `&${param}=${query}`}`
    )
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return await response.json()
}

export const getPostsCount = async () => {
    const response = await fetch(`${API_URL}/posts`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return (await response.json()).length
}

export const getPostsByCategory = async (category: string) => {
    const response = await fetch(`${API_URL}/posts?category=${category}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return await response.json()
}

export const getPostsById = async (id: string) => {
    const response = await fetch(`${API_URL}/posts/${id}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return await response.json()
}

export const getPostsArrByIds = async (arr: number[]) => {
    const promises = arr.map(el => getPostsById(el.toString()))
    return await Promise.all(promises)
}
