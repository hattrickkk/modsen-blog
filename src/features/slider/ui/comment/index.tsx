import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import { Testimonial } from '@/entities'
import { sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    comment: Testimonial
}

export const Comment = ({ comment: { image, name, location, text } }: Props) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={clsx(styles.text, sen.className)}>{text}</h3>
            <div className={styles.profile}>
                <div className={styles.imageWrapper}>
                    <Image src={image} alt={`${name} photo`} width={48} height={48} />
                </div>
                <div className={styles.info}>
                    <p className={clsx(styles.name, sen.className)}>{name}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}
