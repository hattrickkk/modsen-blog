'use client'

import { useFetchAuthorById, useFetchPostsByIdsArr } from '@/entities'
import { Loader } from '@/shared'
import { AuthorInfo, AuthorPosts } from '@/widgets'

import styles from './styles.module.scss'
type Props = {
    params: { id: string }
}

export const AuthorPage = ({ params: { id } }: Props) => {
    const author = useFetchAuthorById(id)
    const posts = useFetchPostsByIdsArr(author.posts)

    if (!author.name)
        return (
            <div className={styles.wrapper}>
                <Loader />
            </div>
        )

    return (
        <>
            <AuthorInfo author={author} />
            <AuthorPosts allPosts={posts} />
        </>
    )
}
