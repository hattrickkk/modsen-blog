import { NavigateButton } from '@/features'
import { commonStyles, paths, ScrollAnimation, Title } from '@/shared'

import styles from './styles.module.scss'

export const TeamSection = () => {
    return (
        <ScrollAnimation>
            <section className={styles.section}>
                <div className={commonStyles.container}>
                    <div className={styles.wrapper}>
                        <Title value='Join our team to be a part of our story' className={styles.title} />
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <NavigateButton pathName={paths.CONTACT_US} value='Join Now' />
                    </div>
                </div>
            </section>
        </ScrollAnimation>
    )
}
