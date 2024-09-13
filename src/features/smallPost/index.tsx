'use client'

import React, { useCallback } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { formateDate, type IPost } from '@/entities'
import { sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    post: IPost
}

export const SmallPost = ({ post: { title, created, author, id } }: Props) => {
    const router = useRouter()
    const handlePostClick = useCallback(() => {
        router.push(`post/${id}`)
    }, [id, router])

    return (
        <div className={styles.post} onClick={handlePostClick}>
            <div className={styles.wrapper}>
                <p className={styles.copyright}>
                    By <Link href={'/'}>{author}</Link> | {formateDate(created)}
                </p>
                <h3 className={clsx(styles.title, sen.className)}>{title}</h3>
            </div>
        </div>
    )
}
