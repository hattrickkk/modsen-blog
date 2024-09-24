import { Post } from '@/entities'
import { AnimationTypes, ScrollAnimation } from '@/shared'

import { PostCard } from '../postCard'

type Props = {
    posts: Post[]
    inColumn?: boolean
}
export const PostsContainer = ({ posts, inColumn = false }: Props) => {
    return (
        <>
            {posts.map((post, i) => (
                <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`} key={post.id}>
                    <PostCard post={post} inColumn={inColumn} />
                </ScrollAnimation>
            ))}
        </>
    )
}
