import React from 'react'

import { commonStyles, Title } from '@/shared'
import { CategoryCard } from '@/shared/ui/categoryCard'

import { CATEGORY_ITEMS } from './constants/categoryItems'

import styles from './styles.module.scss'

export const CategorySection = () => {
    return (
        <section className={styles.categories}>
            <div className={commonStyles.container}>
                <Title value='Choose A Catagory' />
                <div className={styles.wrapper}>
                    {CATEGORY_ITEMS.map(item => (
                        <CategoryCard {...item} key={item.path} />
                    ))}
                </div>
            </div>
        </section>
    )
}
