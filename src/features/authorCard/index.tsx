'use client'

import { memo, useCallback } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Author } from '@/entities'
import { sen, SOCIALS } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    author: Author
}

export const AuthorCard = memo(({ author: { image, name, description, socials, id } }: Props) => {
    const router = useRouter()

    const handleCardClick = useCallback(
        (id: number) => () => {
            router.push(`/author/${id}`)
        },
        [router]
    )

    return (
        <div className={styles.card} onClick={handleCardClick(id)}>
            <div className={styles.imageWrapper}>
                <Image src={image} alt='user-profile-photo' width={130} height={130} />
            </div>
            <h5 className={clsx(styles.title, sen.className)}>{name}</h5>
            <p className={styles.text}>{description}</p>
            <div className={styles.socials}>
                {SOCIALS.map(({ Icon }, i) => (
                    <a href={socials[i]} key={i}>
                        <Icon />
                    </a>
                ))}
            </div>
        </div>
    )
})
