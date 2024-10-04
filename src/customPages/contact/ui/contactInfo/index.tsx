import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { AnimationTypes, ScrollAnimation, sen } from '@/shared'

import styles from './styles.module.scss'

export const ContactInfo = () => {
    const t = useTranslations('contact')
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <ScrollAnimation>
                    <h2 className={styles.subtitle}>{t('contactUs')}</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={0.1}>
                    <h1 className={clsx(sen.className, styles.title)}>{t('title')}</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={0.2}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim.
                    </p>
                </ScrollAnimation>
            </header>
            <div className={styles.block}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div className={styles.column}>
                        <h4 className={styles.subtitle}>{t('workingHours')}</h4>
                        <h3 className={clsx(styles.title, sen.className)}>{t('mondayToFriday')}</h3>
                        <h3 className={clsx(styles.title, sen.className)}>9:00 AM to 8:00 PM </h3>
                        <p className={styles.text}>{t('available')}</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation type={AnimationTypes.toLeft}>
                    <div className={styles.column}>
                        <h4 className={styles.subtitle}>{t('contactUs')}</h4>
                        <h3 className={clsx(styles.title, sen.className)}>020 7993 2905</h3>
                        <p className={styles.text}>hello@finsweet.com</p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}
