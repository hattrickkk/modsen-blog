type Params = {
    itemsPerPage: number
    totalCount: number
}

import { uniqBy } from 'lodash'

import { Post } from '../model'

export const getPagesCount = ({ itemsPerPage, totalCount }: Params) => {
    return Math.ceil(totalCount / itemsPerPage)
}

export const concatPosts = (posts: Post[]) => uniqBy(posts, 'id')
