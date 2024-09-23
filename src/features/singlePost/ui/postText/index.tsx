import clsx from 'clsx'

import { sen } from '@/shared'

import { POST_INFO } from '../../mocks/postinfo'

import styles from './styles.module.scss'

export const PostText = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <h3 className={clsx(sen.className, styles.title)}>{POST_INFO.title}</h3>
                <p className={styles.text}>{POST_INFO.text}</p>
            </div>
            <div className={styles.block}>
                <h3 className={clsx(sen.className, styles.title)}>{POST_INFO.title}</h3>
                <p className={styles.text}>{POST_INFO.text}</p>
                <p className={styles.text}>{POST_INFO.text}</p>
                <ul className={styles.menu}>
                    {POST_INFO.menu.map(item => (
                        <li key={item} className={styles.item}>
                            {item}
                        </li>
                    ))}
                </ul>
                <p className={styles.text}>{POST_INFO.text}</p>
            </div>
            <div className={styles.block}>
                <h3 className={clsx(sen.className, styles.title)}>{POST_INFO.title}</h3>
                <p className={styles.text}>{POST_INFO.text}</p>
            </div>
        </div>
    )
}
