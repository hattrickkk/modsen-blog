'uswe client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Subscribe } from '@/features'
import { commonStyles, SOCIAL_LINKS, SOCIALS } from '@/shared'

import { FOOTER_LINKS } from './constants/footerLinks'

import styles from './styles.module.scss'

export const Footer = () => {
    const t = useTranslations()
    return (
        <footer className={styles.footer}>
            <div className={commonStyles.container}>
                <div className={styles.row}>
                    <Link href={'/'} className={styles.logo}>
                        Modsen Client Blog
                    </Link>
                    <ul className={styles.menu}>
                        {FOOTER_LINKS.map(({ path, name }) => (
                            <li key={path} className={styles.item}>
                                <Link href={path}>{t(`menuItems.${name}`)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Subscribe />
                <div className={styles.row}>
                    <p className={styles.text}>
                        {t('footer.address')} <br /> Hello@finsweet.com 020 7993 2905
                    </p>
                    <div className={styles.socials}>
                        {SOCIALS.map(({ Icon }, i) => (
                            <a href={SOCIAL_LINKS[i]} key={i}>
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
