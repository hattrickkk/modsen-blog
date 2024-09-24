import { API_URL, FetchParams } from '@/shared'

export const fetchPosts = async ({ page, limit }: FetchParams) => {
    const response = await fetch(`${API_URL}/posts?page=${page}&limit=${limit}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return response.json()
}

export const getPostsCount = async () => {
    const response = await fetch(`${API_URL}/posts`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    const totalCount = (await response.json()).length
    return totalCount
}

export const getPostsById = async (id: string) => {
    const response = await fetch(`${API_URL}/posts/${id}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return response.json()
}
