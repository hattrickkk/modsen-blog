'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { NavigateButton } from '@/features'
import { commonStyles, sen } from '@/shared'
import { ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

export const Hero = () => {
    const t = useTranslations()
    const locale = useLocale()
    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                <div className={commonStyles.container}>
                    <ScrollAnimation>
                        <h4 className={styles.subtitle}>
                            {t('hero.subtitle')} <span>{t('categories.startup')}</span>
                        </h4>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.1}>
                        <h1 className={clsx(styles.title, sen.className)}>{t('hero.title')}</h1>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <p className={styles.copyright}>
                            {t('hero.copyright')} <Link href={'/'}>James West</Link> | {t('months.may')} 23, 2022
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.3}>
                        <p className={styles.text}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.4}>
                        <NavigateButton pathName={`/${locale}/post/${1}`} />
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}
