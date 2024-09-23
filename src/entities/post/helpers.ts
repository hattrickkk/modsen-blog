import { useTranslations } from 'next-intl'

import { MONTHS } from '@/shared'

export const useFormateDate = (d: string) => {
    const date = new Date(d)
    const t = useTranslations('months')
    const month = MONTHS[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${t(month)} ${day}, ${year}`
}

export const useFormateDateForSinglePost = (d: string) => {
    const date = new Date(d)
    const t = useTranslations()
    const month = MONTHS[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${day}${t('singlePost.ending')} ${t(`months.${month}`)} ${year}`
}

export const fetchPosts = async (start: number, count: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_start=${start}&_end=${start + count}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return response.json()
}

export const getPostsCount = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    const totalCount = (await response.json()).length
    return totalCount
}

export const getPostsById = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    if (!response.ok) {
        throw new Error('Response data error')
    }
    return response.json()
}
