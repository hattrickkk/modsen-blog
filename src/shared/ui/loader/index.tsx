import styles from './style.module.scss'

export const Loader = () => {
    return (
        <div className={styles.wrapper} data-cy='loader'>
            <div className={styles.box}>
                <div className={styles.loader}></div>
            </div>
        </div>
    )
}
