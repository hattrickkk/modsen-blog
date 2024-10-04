import clsx from 'clsx'

import { AnimationTypes, ScrollAnimation, sen } from '@/shared'

import { POST_INFO } from '../../mocks/postinfo'

import styles from './styles.module.scss'

export const PostText = () => {
    return (
        <div className={styles.wrapper}>
            <ScrollAnimation type={AnimationTypes.toRight}>
                <div className={styles.block}>
                    <h3 className={clsx(sen.className, styles.title)}>{POST_INFO.title}</h3>
                    <p className={styles.text}>{POST_INFO.text}</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation type={AnimationTypes.toLeft} delay={0.1}>
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
            </ScrollAnimation>
            <ScrollAnimation type={AnimationTypes.toRight} delay={0.2}>
                <div className={styles.block}>
                    <h3 className={clsx(sen.className, styles.title)}>{POST_INFO.title}</h3>
                    <p className={styles.text}>{POST_INFO.text}</p>
                </div>
            </ScrollAnimation>
        </div>
    )
}
