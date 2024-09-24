'use client'

import { useCallback, useRef } from 'react'
import clsx from 'clsx'
import routing from 'i18n/routing'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { useOpenState, useOutsideClick } from '@/shared'

import languageIcon from './language.svg'

import styles from './styles.module.scss'

export const LanguageDropdown = () => {
    const locale = useLocale()
    const [isMenuOpen, closeMenu, openMenu] = useOpenState()

    const dropdownRef = useRef<HTMLDivElement>(null)
    useOutsideClick(dropdownRef, closeMenu)
    const pathname = usePathname()
    const router = useRouter()
    const t = useTranslations('language')

    const handleMenuItemCLick = useCallback(
        (localeName: string) => () => {
            router.push(`/${localeName}/${pathname.replace(new RegExp(locale), '')}`)
        },
        [locale, pathname, router]
    )
    return (
        <div className={styles.dropdown}>
            <div className={styles.imageWrapper} onClick={isMenuOpen ? closeMenu : openMenu} ref={dropdownRef}>
                <Image src={languageIcon} alt='language-icon' />
            </div>
            <div className={clsx(styles.menuWrapper, isMenuOpen && styles.open)}>
                <ul className={styles.menu}>
                    {routing.locales.map(item => (
                        <li
                            className={clsx(styles.item, locale === item && styles.active)}
                            key={item}
                            onClick={handleMenuItemCLick(item)}
                        >
                            {t(item)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
