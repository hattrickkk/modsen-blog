export const fetchAuthors = async (start: number, count: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authors?_start=${start}&_end=${start + count}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return response.json()
}

export const getAuthorById = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authors/${id}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return response.json()
}
