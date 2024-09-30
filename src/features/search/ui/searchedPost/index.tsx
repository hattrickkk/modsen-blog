import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import { Post } from '@/entities'
import { sen } from '@/shared'

import styles from './styles.module.scss'
type Props = {
    post: Post
}

export const SearchedPost = ({ post: { image, title, id } }: Props) => {
    const locale = useLocale()
    return (
        <Link href={`/${locale}/post/${id}`} className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <Image src={image} alt='post-photo' width={100} height={50} />
            </div>
            <p className={clsx(styles.title, sen.className)}>{title}</p>
        </Link>
    )
}
