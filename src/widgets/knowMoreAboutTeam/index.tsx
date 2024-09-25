import clsx from 'clsx'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { AnimationTypes, commonStyles, ScrollAnimation, sen } from '@/shared'

import image1 from './hands.png'
import image2 from './three-persons.png'

import styles from './styles.module.scss'

export const KnowMoreAboutTeam = () => {
    const t = useTranslations('knowAboutTeam')
    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div className={clsx(styles.first, styles.wrapper)}>
                        <div className={styles.info}>
                            <h2 className={clsx(styles.title, sen.className)}>{t('title1')}</h2>
                            <h3 className={clsx(styles.subtitle, sen.className)}>{t('subtitle1')}</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                            </p>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.rectangle} />
                            <div className={styles.imageWrapper}>
                                <Image src={image1} alt='know-more-about-team-photo' width={625} height={480} />
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation type={AnimationTypes.toLeft}>
                    <div className={styles.wrapper}>
                        <div className={styles.column}>
                            <div className={styles.circle} />
                            <div className={styles.imageWrapper}>
                                <Image src={image2} alt='know-more-about-team-photo' width={625} height={480} />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h2 className={clsx(styles.title, sen.className)}>{t('title2')}</h2>
                            <h3 className={clsx(styles.subtitle, sen.className)}>{t('subtitle2')}</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
