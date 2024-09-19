import { useTranslations } from 'next-intl'

import { FeaturedPostDisplay } from '@/features'
import { AnimationTypes, commonStyles, POST, Title } from '@/shared'
import { ScrollAnimation } from '@/shared'

import { AllPosts } from '../allPosts'

import styles from './styles.module.scss'

export const PostsSection = () => {
    const t = useTranslations('posts')
    return (
        <div className={commonStyles.container}>
            <section className={styles.posts}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div>
                        <Title value={t('featuredPost')} className={styles.title} />
                        <FeaturedPostDisplay post={POST} />
                    </div>
                </ScrollAnimation>
                <AllPosts />
            </section>
        </div>
    )
}
