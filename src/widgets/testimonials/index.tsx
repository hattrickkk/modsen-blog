'use client'
import { useTranslations } from 'next-intl'

import { Slider } from '@/features'
import { AnimationTypes, commonStyles, ScrollAnimation, Title } from '@/shared'

import styles from './styles.module.scss'

export const Testimonials = () => {
    const t = useTranslations('testimonials')
    return (
        <div className={commonStyles.container}>
            <div className={styles.section}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div className={styles.info}>
                        <h4 className={styles.subtitle}>{t('subtitle')}</h4>
                        <Title value={t('title')} className={styles.title} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </ScrollAnimation>
                <Slider />
            </div>
        </div>
    )
}
