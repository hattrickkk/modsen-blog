import { Slider } from '@/features'
import { commonStyles, Title } from '@/shared'

import styles from './styles.module.scss'

export const Testimonials = () => {
    return (
        <div className={commonStyles.container}>
            <div className={styles.section}>
                <div className={styles.info}>
                    <h4 className={styles.subtitle}>TESTIMONIALs </h4>
                    <Title value='What people say about our blog' className={styles.title} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <Slider />
            </div>
        </div>
    )
}
