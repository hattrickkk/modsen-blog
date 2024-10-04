import { Author } from '@/entities'
import { AuthorCard } from '@/features'
import { AnimationTypes, ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    authors: Author[]
}

export const AuthorsContainer = ({ authors }: Props) => {
    return (
        <div className={styles.wrapper}>
            {authors.map((item, i) => (
                <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`} key={i}>
                    <AuthorCard author={item} />
                </ScrollAnimation>
            ))}
        </div>
    )
}
