'use client'

import { useFetchPostById } from '@/entities/post/utils/hooks'
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
            <ReadNext />
            <TeamSection />
        </>
    )
}
