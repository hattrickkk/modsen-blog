import { commonStyles } from '@/shared'

import { AboutUsHeader, OurMission, Overview } from './ui'

import styles from './styles.module.scss'

export const OurVisison = () => {
    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <AboutUsHeader />
                <Overview />
                <OurMission />
            </div>
        </section>
    )
}
