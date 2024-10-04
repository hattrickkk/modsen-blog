'use client'

import { Dispatch, memo, SetStateAction, useCallback, useRef } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { useOpenState, useOutsideClick } from '@/shared'

import { QUERY_ITEMS } from '../../constants/queryItems'

import styles from './styles.module.scss'

type Props = {
    setQuery: Dispatch<SetStateAction<string>>
    query: string
}

export const QueryDropdown = memo(({ query, setQuery }: Props) => {
    const [isMenuOpen, closeMenu, openMenu] = useOpenState()

    const handleDropdownClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            isMenuOpen ? closeMenu() : openMenu()
        },
        [closeMenu, isMenuOpen, openMenu]
    )

    const handleDropdownItemClick = useCallback(
        (itemValue: string) => () => {
            setQuery(itemValue)
            closeMenu()
        },
        [closeMenu, setQuery]
    )

    const t = useTranslations('contact.queries')
    const dropdownRef = useRef<HTMLDivElement>(null)
    useOutsideClick(dropdownRef, closeMenu)

    return (
        <div className={clsx(styles.dropdown, isMenuOpen && styles.open)} ref={dropdownRef} data-cy='query-dropdown'>
            <button onClick={handleDropdownClick}>{t(query)}</button>
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
})
