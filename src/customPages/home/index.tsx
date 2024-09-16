import {
    AboutUs,
    AuthorsSection,
    CategorySection,
    Hero,
    OurStory,
    PartnersSection,
    PostsSection,
    TeamSection,
} from '@/widgets'

export const Home = () => {
    return (
        <>
            <Hero />
            <PostsSection />
            <AboutUs />
            <CategorySection />
            <OurStory />
            <AuthorsSection />
            <PartnersSection />
            <TeamSection />
        </>
    )
}
