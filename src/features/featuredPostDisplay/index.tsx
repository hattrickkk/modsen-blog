import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { formateDate, type Post } from '@/entities'
import { sen } from '@/shared'

import { NavigateButton } from '../navigateButton'
import postImage from './white-concrete-building-1838640.png'

import styles from './styles.module.scss'

type Props = {
    post: Post
}

export const FeaturedPostDisplay = ({ post: { id, text, title, created, author, image } }: Props) => {
    return (
        <div className={styles.post}>
            <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <Image src={image ?? postImage} alt='post-photo' />
                </div>
                <p className={styles.copyright}>
                    By <Link href={'/'}>{author}</Link> | {formateDate(created)}
                </p>
                <h2 className={clsx(styles.title, sen.className)}>{title}</h2>
                <p className={styles.text}>{text}</p>
                <NavigateButton pathName={`post/${id}`} />
            </div>
        </div>
    )
}
