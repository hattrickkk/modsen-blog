'use client'
import { useTranslations } from 'next-intl'

import { AnimationTypes, CATEGORY_ITEMS, CategoryCard, commonStyles, ScrollAnimation, Title } from '@/shared'

import styles from './styles.module.scss'

export const CategorySection = () => {
    const t = useTranslations('categories')
    return (
        <section className={styles.categories}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <Title value={t('title')} />
                </ScrollAnimation>
                <div className={styles.wrapper}>
                    {CATEGORY_ITEMS.map((item, i) => (
                        <ScrollAnimation type={AnimationTypes.toRight} delay={`0.${i}`} key={item.path}>
                            <CategoryCard {...item} title={t(item.title)} />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
