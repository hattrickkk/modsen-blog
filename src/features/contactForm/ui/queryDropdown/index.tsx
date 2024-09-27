'use client'

import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { useOpenState } from '@/shared'

import { QUERY_ITEMS } from './queryItems'

import styles from './styles.module.scss'

export const QueryDropdown = () => {
    const [isMenuOpen, closeMenu, openMenu] = useOpenState()
    const [value, setValue] = useState(QUERY_ITEMS[0])

    const handleDropdownClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            isMenuOpen ? closeMenu() : openMenu()
        },
        [closeMenu, isMenuOpen, openMenu]
    )

    const handleDropdownItemClick = useCallback(
        (itemValue: string) => () => {
            setValue(itemValue)
            closeMenu()
        },
        [closeMenu]
    )

    const t = useTranslations('contact.queries')

    return (
        <div className={clsx(styles.dropdown, isMenuOpen && styles.open)}>
            <button onClick={handleDropdownClick}>{t(value)}</button>
            <div className={clsx(styles.menuWrapper, isMenuOpen && styles.open)}>
                <ul className={styles.menu}>
                    {QUERY_ITEMS.map(item => (
                        <li key={item} className={styles.item} onClick={handleDropdownItemClick(item)}>
                            {t(item)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
