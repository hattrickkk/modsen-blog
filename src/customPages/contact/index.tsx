import { commonStyles } from '@/shared'

import { ContactInfo } from './ui/contactInfo'

import styles from './styles.module.scss'
export const Contact = () => {
    return (
        <div className={styles.wrapper}>
            <div className={commonStyles.container}>
                <ContactInfo />
            </div>
        </div>
    )
}
