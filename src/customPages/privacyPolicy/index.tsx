import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { AnimationTypes, commonStyles, ScrollAnimation, sen } from '@/shared'

import { INFO } from './info'

import styles from './styles.module.scss'

export const PrivacyPolicy = () => {
    const t = useTranslations('privacyPolicy')
    return (
        <>
            <header className={styles.header}>
                <div className={commonStyles.container}>
                    <ScrollAnimation>
                        <>
                            <h1 className={clsx(sen.className, styles.title)}>{t('privacyPolicy')}</h1>
                            <p className={styles.text}>{t('lastUpdated')}</p>
                        </>
                    </ScrollAnimation>
                </div>
            </header>
            <section className={styles.section}>
                <div className={commonStyles.container}>
                    <ScrollAnimation type={AnimationTypes.toRight}>
                        <h2 className={clsx(sen.className, styles.title)}>{t('title')}</h2>
                    </ScrollAnimation>
                    <ScrollAnimation type={AnimationTypes.toRight} delay={0.1}>
                        <p>{INFO}</p>
                    </ScrollAnimation>

                    <ScrollAnimation type={AnimationTypes.toRight} delay={0.2}>
                        <h3 className={clsx(sen.className, styles.subtitle)}>{t('subtitle')}</h3>
                    </ScrollAnimation>
                    <ScrollAnimation type={AnimationTypes.toRight} delay={0.3}>
                        <p>{INFO}</p>
                    </ScrollAnimation>
                    <ScrollAnimation type={AnimationTypes.toRight} delay={0.3}>
                        <p>{INFO}</p>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    )
}
