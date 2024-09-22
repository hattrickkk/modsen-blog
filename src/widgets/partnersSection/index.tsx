'use client'

import { useTranslations } from 'next-intl'

import { AnimationTypes, commonStyles, ScrollAnimation, sen } from '@/shared'

import { PARTNERS } from './constants/partners'

import styles from './styles.module.scss'

export const PartnersSection = () => {
    const t = useTranslations('partners')
    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <div className={styles.wrapper}>
                    <ScrollAnimation type={AnimationTypes.toRight} delay={'0.1'}>
                        <div className={styles.block}>
                            {t('subtitle')} <span className={sen.className}>{t('title')}</span>
                        </div>
                    </ScrollAnimation>
                    {PARTNERS.map(({ id, Icon }, i) => (
                        <ScrollAnimation type={AnimationTypes.toRight} delay={`0.${i + 1}`} key={id}>
                            <Icon />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
