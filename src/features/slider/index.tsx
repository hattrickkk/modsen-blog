'use client'
import React, { memo, useCallback, useState } from 'react'

import { TESTIMONIALS } from '@/shared'

import { Comment } from './ui/comment'
import { NextArrow } from './ui/nextArrow'
import { PrevArrow } from './ui/prevArrow'

import styles from './styles.module.scss'

export const Slider = memo(() => {
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = useCallback(() => setOffset(prev => prev + 100), [])

    const handleRightArrowClick = useCallback(() => setOffset(prev => prev - 100), [])

    const maxOffset = -(TESTIMONIALS.length - 1) * 100

    return (
        <div className={styles.slider}>
            <div className={styles.arrows}>
                {offset < 0 && <PrevArrow onClick={handleLeftArrowClick} />}
                {offset > maxOffset && <NextArrow onClick={handleRightArrowClick} />}
            </div>
            <div className={styles.window}>
                <div className={styles.commentsWrapper} style={{ transform: `translateX(${offset}%)` }}>
                    {TESTIMONIALS.map(item => (
                        <Comment comment={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    )
})
