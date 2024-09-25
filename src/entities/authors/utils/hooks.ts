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

export const useFetchAuthors = ({ limit, page }: FetchParams) => {
    const [authors, setAuthors] = useState<Author[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetchAuthors({ limit, page })
            .then(res => setAuthors(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [limit, page])
    return { authors, loading }
}
