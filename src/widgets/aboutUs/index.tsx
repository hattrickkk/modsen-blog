'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { AnimationTypes, commonStyles, paths, ScrollAnimation, sen, Title } from '@/shared'

import styles from './styles.module.scss'

export const AboutUs = () => {
    const t = useTranslations()
    return (
        <ScrollAnimation type={AnimationTypes.toLeft}>
            <section className={styles.section}>
                <div className={commonStyles.container}>
                    <div className={styles.decor}>
                        <div className={styles.transparent} />
                        <div className={styles.yellow} />
                        <div className={styles.purple} />
                    </div>
                    <div className={styles.inner}>
                        <div className={styles.column}>
                            <h4 className={styles.subtitle}>{t('about.aboutUs')} </h4>
                            <Title value={t('about.title')} className={styles.mainTitle} />
                            <p>
                                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                            <Link href={paths.ABOUT} className={clsx(styles.link, sen.className)}>
                                {t('button.title')}
                            </Link>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.subtitle}>{t('about.ourMission')} </h4>
                            <h3 className={clsx(styles.title, sen.className)}>{t('about.subtitle')}</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAnimation>
    )
}
