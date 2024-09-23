'use client'
import { useEffect, useState } from 'react'

import { getPostsById, Post } from '@/entities'
import { SinglePost } from '@/features'
import { Loader } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    params: { id: string }
}
export const PostPage = ({ params: { id } }: Props) => {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState<Post>({} as Post)

    useEffect(() => {
        setLoading(true)
        getPostsById(id)
            .then(data => setPost(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [id])

    if (loading)
        return (
            <div className={styles.wrapper}>
                <Loader />
            </div>
        )

    return <SinglePost post={post} />
}
