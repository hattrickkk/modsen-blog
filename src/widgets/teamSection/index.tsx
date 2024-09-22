'use client'
import { useTranslations } from 'next-intl'

import { NavigateButton } from '@/features'
import { commonStyles, paths, ScrollAnimation, Title } from '@/shared'

import styles from './styles.module.scss'

export const TeamSection = () => {
    const t = useTranslations('team')
    return (
        <ScrollAnimation>
            <section className={styles.section}>
                <div className={commonStyles.container}>
                    <div className={styles.wrapper}>
                        <Title value={t('title')} className={styles.title} />
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <NavigateButton pathName={paths.CONTACT_US} value={t('button')} />
                    </div>
                </div>
            </section>
        </ScrollAnimation>
    )
}
