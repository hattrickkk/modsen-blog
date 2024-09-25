import clsx from 'clsx'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { AnimationTypes, ourStoryBackImage, ScrollAnimation, sen } from '@/shared'

import { INDICATORS } from './indicators'

import styles from './styles.module.scss'

export const Overview = () => {
    const t = useTranslations('ourVision.overview')
    return (
        <div className={styles.wrapper}>
            <ScrollAnimation type={AnimationTypes.toRight} delay={0.1}>
                <div className={styles.imageWrapper}>
                    <Image src={ourStoryBackImage} alt='know-more-about-team-photo' width={1280} height={445} />
                </div>
            </ScrollAnimation>

            <div className={styles.block}>
                <ScrollAnimation type={AnimationTypes.toLeft} delay={0.1}>
                    <>
                        <ul className={styles.indicators}>
                            {INDICATORS.map(({ value, name }) => (
                                <li className={styles.item}>
                                    <span className={clsx(styles.value, sen.className)}>{value}</span>
                                    <span className={styles.name}>{t(name)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.decor}>
                            <div className={styles.purple} />
                            <div className={styles.yellow} />
                            <div className={styles.transparent} />
                        </div>
                    </>
                </ScrollAnimation>
            </div>
        </div>
    )
}
