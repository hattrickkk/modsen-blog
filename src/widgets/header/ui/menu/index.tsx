'use client'

import { memo, useRef } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { Button, ButtonViews, isLinkActive, MENU_ITEMS, useOpenState, useOutsideClick } from '@/shared'

import { LanguageDropdown } from '../languageDropdown'
import { VideoModal } from '../videoModal'

import styles from './styles.module.scss'

export const Menu = memo(() => {
    const [isHeaderOpen, closeHeader, openHeader] = useOpenState()
    const [isFrameOpen, closeFrame, openFrame] = useOpenState()

    const menuRef = useRef<HTMLDivElement>(null)
    useOutsideClick(menuRef, closeHeader, styles.burgerButton)
    const t = useTranslations()
    const locale = useLocale()
    const pathname = usePathname()

    return (
        <>
            <div className={clsx(styles.wrapper, isHeaderOpen && styles.open)} ref={menuRef}>
                <ul className={styles.menu}>
                    {MENU_ITEMS.map(({ path, name }) => (
                        <li key={path} className={styles.item}>
                            <Link
                                href={`/${locale}${path}`}
                                onClick={closeHeader}
                                className={clsx(isLinkActive({ pathname, itemPath: path, locale }) && styles.active)}
                            >
                                {t(`menuItems.${name}`)}
                            </Link>
                        </li>
                    ))}
                    <LanguageDropdown />
                </ul>
                <Button onClick={openFrame} view={ButtonViews.SECONDARY}>
                    {t('header.video')}
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
})
