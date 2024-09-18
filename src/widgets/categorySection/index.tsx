import { AnimationTypes, CategoryCard, commonStyles, ScrollAnimation, Title } from '@/shared'

import { CATEGORY_ITEMS } from './constants/categoryItems'

import styles from './styles.module.scss'

export const CategorySection = () => {
    return (
        <section className={styles.categories}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <Title value='Choose A Catagory' />
                </ScrollAnimation>
                <div className={styles.wrapper}>
                    {CATEGORY_ITEMS.map((item, i) => (
                        <ScrollAnimation type={AnimationTypes.toRight} delay={`0.${i}`}>
                            <CategoryCard {...item} key={item.path} />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
