'use client'

import React, { useRef } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import { Button, useOpenState, useOutsideClick } from '@/shared'

import { HEADER_LINKS } from '../../constants/headerLinks'
import { VideoModal } from '../videoModal'

import styles from './styles.module.scss'

export const Menu = () => {
    const [isHeaderOpen, closeHeader, openHeader] = useOpenState()
    const [isFrameOpen, closeFrame, openFrame] = useOpenState()

    const menuRef = useRef<HTMLDivElement>(null)
    useOutsideClick(menuRef, closeHeader, styles.burgerButton)

    return (
        <>
            <div className={clsx(styles.wrapper, isHeaderOpen && styles.open)} ref={menuRef}>
                <ul className={styles.menu}>
                    {HEADER_LINKS.map(({ path, name }) => (
                        <li key={path} className={styles.item}>
                            <Link href={path}>{name}</Link>
                        </li>
                    ))}
                </ul>
                <Button onClick={openFrame} secondary>
                    Video about us
                </Button>
            </div>
            <button
                className={clsx(styles.burgerButton, isHeaderOpen && styles.active)}
                onClick={isHeaderOpen ? closeHeader : openHeader}
            >
                <span />
            </button>
            <VideoModal isFrameOpen={isFrameOpen} closeFrame={closeFrame} />
        </>
    )
}
