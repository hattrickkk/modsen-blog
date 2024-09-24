'use client'

import { useFetchAuthorById, useFetchPostsByIdsArr } from '@/entities'
import { AuthorInfo, AuthorPosts } from '@/widgets'

type Props = {
    params: { id: string }
}

export const AuthorPage = ({ params: { id } }: Props) => {
    const author = useFetchAuthorById(id)
    const posts = useFetchPostsByIdsArr(author.posts)

    return (
        <>
            <AuthorInfo author={author} />
            <AuthorPosts allPosts={posts} />
        </>
    )
}
