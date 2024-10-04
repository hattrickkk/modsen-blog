import Link from 'next/link'

import { Menu } from './ui/menu'

import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={'/'} className={styles.logo}>
                    Modsen Client Blog
                </Link>
                <Menu />
            </div>
        </header>
    )
}
