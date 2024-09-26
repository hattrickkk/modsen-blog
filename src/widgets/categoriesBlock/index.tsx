'use client'

import { memo } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { AnimationTypes, CATEGORY_ITEMS, paths, ScrollAnimation, sen, Title } from '@/shared'

import styles from './styles.module.scss'

export const CategoriesBlock = memo(() => {
    const t = useTranslations('categories')
    const locale = useLocale()
    const pathname = usePathname()
    return (
        <div className={styles.wrapper}>
            <ScrollAnimation type={AnimationTypes.toLeft}>
                <Title value={t('categories')} className={styles.title} />
            </ScrollAnimation>
            <div className={styles.categoriesWrapper}>
                {CATEGORY_ITEMS.map(({ Icon, title }, i) => (
                    <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i + 1}`} key={title}>
                        <Link
                            href={`/${locale}/${paths.CATEGORY}/${title}`}
                            className={clsx(styles.item, pathname.includes(title) && styles.active)}
                        >
                            <div className={styles.iconWrapper}>{Icon}</div>
                            <span className={clsx(styles.name, sen.className)}>{t(title)}</span>
                        </Link>
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    )
})
