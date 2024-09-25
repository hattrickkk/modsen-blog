import Image from 'next/image'

import { AnimationTypes, commonStyles, HeroInfo, ScrollAnimation } from '@/shared'

import heroImage from './hero.png'

import styles from './styles.module.scss'

export const BlogHero = () => {
    return (
        <section className={styles.hero}>
            <div className={commonStyles.container}>
                <div className={styles.wrapper}>
                    <HeroInfo inBlog />
                    <ScrollAnimation type={AnimationTypes.toLeft}>
                        <div className={styles.imageWrapper}>
                            <Image src={heroImage} alt='post-photo' width={515} height={360} />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}
