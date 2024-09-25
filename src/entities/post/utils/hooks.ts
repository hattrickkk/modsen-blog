import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { fetchPosts, getPostsById, getPostsCount, Post } from '@/entities'
import { FetchParams, MONTHS } from '@/shared'

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

export const useFetchPosts = ({ page, limit }: FetchParams) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [postsCount, setPostsCount] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetchPosts({ page, limit })
            .then(res => setPosts(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [page, limit])

    useEffect(() => {
        getPostsCount()
            .then(res => setPostsCount(res))
            .catch(err => console.error(err))
    }, [])
    return { posts, postsCount, loading }
}

export const useFetchPostById = (id: string) => {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState<Post>({} as Post)
    useEffect(() => {
        setLoading(true)
        getPostsById(id)
            .then(data => setPost(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [id])
    return { post, loading }
}
