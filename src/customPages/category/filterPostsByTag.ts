import { concatPosts, Post } from '@/entities'

export const filterPostsByTag = (selectedTags: string[], postsArray: Post[]) => {
    const result: Post[] = []
    selectedTags.forEach(selectedTag => {
        result.push(
            ...postsArray.filter(post => {
                if (post.tags.includes(selectedTag)) return post
            })
        )
    })
    return concatPosts(result)
}
