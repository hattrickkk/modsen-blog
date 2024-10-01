'use client'

import { memo, useCallback } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import { Author } from '@/entities'
import { sen, SOCIALS } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    author: Author
}

export const AuthorCard = memo(({ author: { image, name, socials, id } }: Props) => {
    const router = useRouter()
    const locale = useLocale()

    const handleCardClick = useCallback(
        (id: number) => () => {
            router.push(`/${locale}/author/${id}`)
        },
        [router, locale]
    )

    const handleSocialClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation(), [])

    return (
        <div className={styles.card} onClick={handleCardClick(id)} data-cy='author-card'>
            <div className={styles.imageWrapper}>
                <Image src={image} alt='user-profile-photo' width={130} height={130} />
            </div>
            <h5 className={clsx(styles.title, sen.className)}>{name}</h5>
            <p className={styles.text}>Content Writer @Company</p>
            <div className={styles.socials}>
                {SOCIALS.map(({ Icon }, i) => (
                    <a href={socials[i]} key={i} onClick={handleSocialClick}>
                        <Icon />
                    </a>
                ))}
            </div>
        </div>
    )
})
