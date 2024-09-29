import { ContactForm } from '@/features'
import { commonStyles } from '@/shared'
import { WorldMap } from '@/widgets'

import { ContactInfo } from './ui/contactInfo'

import styles from './styles.module.scss'

export const Contact = () => {
    return (
        <div className={styles.wrapper}>
            <div className={commonStyles.container}>
                <ContactInfo />
                <ContactForm />
            </div>
            <WorldMap />
        </div>
    )
}
