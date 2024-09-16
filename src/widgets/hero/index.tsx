import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import { commonStyles, sen } from '@/shared'

import { HeroButton } from './ui'

import styles from './styles.module.scss'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                <div className={commonStyles.container}>
                    <h4 className={styles.subtitle}>
                        Posted on <span>startup</span>
                    </h4>
                    <h1 className={clsx(styles.title, sen.className)}>
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    <p className={styles.copyright}>
                        By <Link href={'/'}>James West</Link> | May 23, 2022
                    </p>
                    <p className={styles.text}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <HeroButton />
                </div>
            </div>
        </section>
    )
}
