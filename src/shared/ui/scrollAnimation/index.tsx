'use client'

import { ReactElement, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import { AnimationTypes } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    children: ReactElement
    type?: AnimationTypes
    delay?: number | string
}

export const ScrollAnimation = ({ children, type = AnimationTypes.toTop, delay = 0 }: Props) => {
    const [visible, setIsVisible] = useState(false)
    const animationRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const currentElement = animationRef.current as HTMLDivElement
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && animationRef.current) {
                    setIsVisible(true)
                    observer.unobserve(currentElement)
                }
            },
            { threshold: 0.15 }
        )

        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => observer.unobserve(currentElement)
    }, [])

    return (
        <div
            className={clsx(styles.block, styles[type], visible && styles.animate)}
            style={{ transitionDelay: `${delay}s` }}
            ref={animationRef}
        >
            {children}
        </div>
    )
}
