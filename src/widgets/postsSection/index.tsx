import { FeaturedPostDisplay } from '@/features'
import { AnimationTypes, commonStyles, POST, Title } from '@/shared'
import { ScrollAnimation } from '@/shared'

import { AllPosts } from '../allPosts'

import styles from './styles.module.scss'

export const PostsSection = () => {
    return (
        <div className={commonStyles.container}>
            <section className={styles.posts}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <>
                        <Title value='Featured Post' className={styles.title} />
                        <FeaturedPostDisplay post={POST} />
                    </>
                </ScrollAnimation>
                <AllPosts />
            </section>
        </div>
    )
}
