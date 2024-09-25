import { commonStyles, HeroInfo } from '@/shared'

import styles from './styles.module.scss'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={commonStyles.container}>
                <HeroInfo />
            </div>
        </section>
    )
}
