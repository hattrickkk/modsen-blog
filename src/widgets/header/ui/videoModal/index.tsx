'use client'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'

import { Loader, useOutsideClick } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    isFrameOpen: boolean
    closeFrame: VoidFunction
}

export const VideoModal = memo(({ isFrameOpen, closeFrame }: Props) => {
    const [mounted, setMounted] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const frameRef = useRef<HTMLIFrameElement>(null)
    useOutsideClick(frameRef, closeFrame)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!isFrameOpen) setIsLoading(true)
    }, [isFrameOpen])

    const handleLoad = useCallback(() => setIsLoading(false), [])

    if (!mounted) return null

    return createPortal(
        <div className={clsx(styles.wrapper, isFrameOpen && styles.open)}>
            <button onClick={closeFrame} className={styles.closeButton}>
                <span data-cy='video-close' />
            </button>

            {isLoading && isFrameOpen && <Loader />}

            {isFrameOpen && (
                <iframe
                    ref={frameRef}
                    width='50%'
                    height='50%'
                    src='https://www.youtube.com/embed/VXDTjM67d30?autoplay=1&si=eSJJ40NTcQYm88VJ'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                    onLoad={handleLoad}
                />
            )}
        </div>,
        document.body
    )
})
