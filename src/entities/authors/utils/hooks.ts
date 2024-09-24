import { useEffect, useState } from 'react'

import { FetchParams } from '@/shared'

import { Author } from '../model'
import { fetchAuthors, getAuthorById } from './api'

export const useFetchAuthorById = (authorId: string) => {
    const [author, setAuthor] = useState<Author>({} as Author)
    useEffect(() => {
        getAuthorById(authorId)
            .then(data => setAuthor(data))
            .catch(err => console.error(err))
    }, [authorId])
    return author
}

export const useFetchAuthors = (params: FetchParams) => {
    const [authors, setAuthors] = useState<Author[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchAuthors(params)
            .then(res => setAuthors(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [params])
    return { authors, loading }
}
