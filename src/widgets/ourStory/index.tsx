import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import { NavigateButton } from '@/features'
import { commonStyles, paths, sen } from '@/shared'

import back from './back.png'

import styles from './styles.module.scss'

export const OurStory = () => {
    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <div className={styles.inner}>
                    <div className={styles.imageWrapper}>
                        <Image src={back} alt='background' />
                    </div>
                    <div className={styles.block}>
                        <h4 className={styles.subtitle}>Why we started </h4>
                        <h3 className={clsx(styles.title, sen.className)}>
                            It started out as a simple idea and evolved into our passion
                        </h3>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip.
                        </p>
                        <NavigateButton pathName={paths.ABOUT} value='Discover our story >' />
                    </div>
                </div>
            </div>
        </section>
    )
}
