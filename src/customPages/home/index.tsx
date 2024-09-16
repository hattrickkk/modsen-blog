import { AboutUs, AuthorsSection, CategorySection, Hero, OurStory, PartnersSection, PostsSection } from '@/widgets'

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
        </>
    )
}
