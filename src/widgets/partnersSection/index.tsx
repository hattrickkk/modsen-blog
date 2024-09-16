import { commonStyles, sen } from '@/shared'

import { PARTNERS } from './constants/partners'

import styles from './styles.module.scss'

export const PartnersSection = () => {
    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        We are <span className={sen.className}>Featured in</span>
                    </div>
                    {PARTNERS.map(({ id, Icon }) => (
                        <Icon key={id} />
                    ))}
                </div>
            </div>
        </section>
    )
}
