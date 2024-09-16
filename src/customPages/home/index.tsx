import { AboutUs, AuthorsSection, CategorySection, Hero, OurStory, PostsSection } from '@/widgets'

export const Home = () => {
    return (
        <>
            <Hero />
            <PostsSection />
            <AboutUs />
            <CategorySection />
            <OurStory />
            <AuthorsSection />
        </>
    )
}
