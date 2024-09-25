import { BlogHero, BlogSection, CategorySection, TeamSection } from '@/widgets'

import styles from './styles.module.scss'
export const Blog = () => {
    return (
        <div className={styles.wrapper}>
            <BlogHero />
            <BlogSection />
            <CategorySection />
            <TeamSection />
        </div>
    )
}
