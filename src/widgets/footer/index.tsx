import React from 'react'
import Link from 'next/link'

import { Subscribe } from '@/features'
import { commonStyles, SOCIAL_LINKS, SOCIALS } from '@/shared'

import { FOOTER_LINKS } from './constants/footerLinks'

import styles from './styles.module.scss'

export const Footer = () => {
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
                                <Link href={path}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Subscribe />
                <div className={styles.row}>
                    <p className={styles.text}>
                        Finstreet 118 2561 Fintown <br /> Hello@finsweet.com 020 7993 2905
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
