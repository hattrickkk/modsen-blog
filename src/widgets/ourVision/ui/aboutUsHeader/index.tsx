import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { AnimationTypes, ScrollAnimation, sen } from '@/shared'

import styles from './styles.module.scss'

export const AboutUsHeader = () => {
    const t = useTranslations('about')
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <ScrollAnimation type={AnimationTypes.toRight}>
                        <>
                            <h4 className={styles.subtitle}>{t('aboutUs')}</h4>
                            <h1 className={clsx(styles.title, sen.className)}>{t('title')}</h1>
                        </>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation type={AnimationTypes.toLeft}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </ScrollAnimation>
            </div>
        </header>
    )
}
