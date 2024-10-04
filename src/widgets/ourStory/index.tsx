'use client'

import { memo } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

import { NavigateButton } from '@/features'
import { AnimationTypes, commonStyles, ourStoryBackImage, paths, ScrollAnimation, sen } from '@/shared'

import styles from './styles.module.scss'

export const OurStory = memo(() => {
    const t = useTranslations('ourStory')
    const locale = useLocale()
    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <div className={styles.inner}>
                    <ScrollAnimation type={AnimationTypes.toRight}>
                        <div className={styles.imageWrapper}>
                            <Image src={ourStoryBackImage} alt='background' />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation type={AnimationTypes.toLeft} delay={0.1}>
                        <div className={styles.block}>
                            <h4 className={styles.subtitle}>{t('subtitle')}</h4>
                            <h3 className={clsx(styles.title, sen.className)}>{t('title')}</h3>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip.
                            </p>
                            <NavigateButton pathName={`/${locale}/${paths.ABOUT}`} value={t('button')} />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
})
