'use client'

import { useFetchPostById } from '@/entities'
import { SinglePost } from '@/features'
import { Loader } from '@/shared'
import { ReadNext, TeamSection } from '@/widgets'

import styles from './styles.module.scss'

type Props = {
    params: { id: string }
}
export const PostPage = ({ params: { id } }: Props) => {
    const { post, loading } = useFetchPostById(id)

    if (loading)
        return (
            <div className={styles.wrapper}>
                <Loader />
            </div>
        )

    return (
        <>
            <SinglePost post={post} />
            <ReadNext category={post.category} />
            <TeamSection />
        </>
    )
}
