import { AUTHORS_PER_PAGE_ABOUT } from '@/shared'
import { AuthorsSection, KnowMoreAboutTeam, OurVisison, TeamSection } from '@/widgets'

import styles from './styles.module.scss'

export const About = () => {
    return (
        <div className={styles.wrapper}>
            <OurVisison />
            <KnowMoreAboutTeam />
            <AuthorsSection authorsCount={AUTHORS_PER_PAGE_ABOUT} />
            <TeamSection />
        </div>
    )
}
