import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { sen } from '@/shared'

import styles from './styles.module.scss'

export const ContactInfo = () => {
    const t = useTranslations('contact')
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h2 className={styles.subtitle}>{t('contactUs')}</h2>
                <h1 className={clsx(sen.className, styles.title)}>{t('title')}</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim.
                </p>
            </header>
            <div className={styles.block}>
                <div className={styles.column}>
                    <h4 className={styles.subtitle}>{t('workingHours')}</h4>
                    <h3 className={clsx(styles.title, sen.className)}>{t('mondayToFriday')}</h3>
                    <h3 className={clsx(styles.title, sen.className)}>9:00 AM to 8:00 PM </h3>
                    <p className={styles.text}>{t('available')}</p>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.subtitle}>{t('contactUs')}</h4>
                    <h3 className={clsx(styles.title, sen.className)}>020 7993 2905</h3>
                    <p className={styles.text}>hello@finsweet.com</p>
                </div>
            </div>
        </div>
    )
}
