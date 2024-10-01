export type { Post } from './post/model'
export { fetchPosts, getPostsCount, getPostsById, getPostsArrByIds } from './post/utils/api'
export {
    useFormateDate,
    useFormateDateForSinglePost,
    useFetchPosts,
    useFetchPostById,
    useFetchPostsByIdsArr,
    useFetchPostsByCategory,
} from './post/utils/hooks'
export { getPagesCount, concatPosts } from './post/utils/helpers'
export type { Author } from './authors/model'
export type { Testimonial } from './testimonials/model'
export { fetchAuthors, getAuthorById } from './authors/utils/api'
export { useFetchAuthorById, useFetchAuthors } from './authors/utils/hooks'
