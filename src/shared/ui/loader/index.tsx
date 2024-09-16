import { memo } from 'react'

import styles from './style.module.scss'

export const Loader = memo(() => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.loader}></div>
            </div>
        </div>
    )
})
