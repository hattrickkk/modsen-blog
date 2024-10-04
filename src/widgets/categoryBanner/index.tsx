import clsx from 'clsx'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { Category, commonStyles, NEXT_ARROW, paths, ScrollAnimation, sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    category: Category
}

export const CategoryBanner = ({ category }: Props) => {
    const t = useTranslations()
    const locale = useLocale()
    return (
        <section className={styles.banner}>
            <div className={commonStyles.container}>
                <ScrollAnimation>
                    <h1 className={clsx(sen.className, styles.title)}>{t(`categories.${category}`)}</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={0.1}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore.
                    </p>
                </ScrollAnimation>
                <ScrollAnimation delay={0.3}>
                    <h4 className={styles.subtitle}>
                        <Link href={`/${locale}${paths.BLOG}`}> {t('menuItems.blog')}</Link> {NEXT_ARROW}{' '}
                        {t(`categories.${category}`)}
                    </h4>
                </ScrollAnimation>
            </div>
        </section>
    )
}
