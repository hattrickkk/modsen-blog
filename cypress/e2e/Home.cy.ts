import { HomePage } from '../page_objects/HomePage'

const DEFAULT_LOCALE = 'en'

describe('Home page testing', () => {
    const homePage = new HomePage()

    beforeEach(() => {
        homePage.visitHome(DEFAULT_LOCALE)
    })

    it('all sections on homePage renders correctly', () => {
        cy.contains(/Posted on/)
        cy.contains('Featured Post')
        cy.contains('View All')
        cy.contains('Our Misson')
        cy.contains('Choose A Category')
        cy.contains('Why we started')
        cy.contains('List of Authors')
        cy.contains('Featured in')
        cy.contains('testimonials')
    })

    it('following header links works correctly', () => {
        homePage.visitBlog(DEFAULT_LOCALE)
        cy.url().should('include', '/blog')
        homePage.visitAbout(DEFAULT_LOCALE)
        cy.url().should('include', '/about')
        homePage.visitContact(DEFAULT_LOCALE)
        cy.url().should('include', '/contact-us')
        cy.contains('Let’s Start a Conversation')
        cy.contains('Send Message')
    })

    it('language changing works correctly', () => {
        homePage.languageDropdown.click()
        cy.contains('English')
        cy.contains('Russian').click()
        cy.url().should('include', '/ru')
        cy.contains('Главная')
        cy.contains('Блог')
        cy.contains('Контакты')
        cy.contains('Видео о нас')
    })

    it('video plays and modal closes correctly', () => {
        homePage.videoButton.click()
        cy.getByDataCy('loader').should('exist')
        cy.wait(3000)
        cy.getByDataCy('video-close').click()
        cy.getByDataCy('loader').should('not.exist')
    })

    it('should navigate to a post in a banner', () => {
        cy.contains('Read More >').first().click()
        cy.contains('Design tips for designers that cover everything you need')
    })

    it('should navigate to a post page', () => {
        cy.contains('View All').click()
        cy.contains('All Posts')
    })

    it('should navigate to a category page', () => {
        cy.contains('Business').click()
        cy.contains('Search')
        cy.url().should('include', '/business')
    })

    it('should navigate to an author page', () => {
        const authors = cy.getByDataCy('author-card')
        authors.should('have.length', 4)
        authors.first().click()
        cy.contains('Hey there, I’m Floyd Miles and welcome to my Blog')
    })

    it('should navigate to a contact page', () => {
        cy.contains('Join now').click()
        cy.url().should('include', '/contact-us')
    })

    it('should navigate to a aboutPage', () => {
        cy.contains('Read More >').last().click()
        cy.contains('our vision')
        homePage.visitHome(DEFAULT_LOCALE)
        cy.contains('Discover our story').click()
    })

    it('following footer links works correctly', () => {
        homePage.visitBlog(DEFAULT_LOCALE)
        cy.url().should('include', '/blog')
        homePage.visitAbout(DEFAULT_LOCALE)
        cy.url().should('include', '/about')
        homePage.visitContact(DEFAULT_LOCALE)
        cy.url().should('include', '/contact-us')
        homePage.visitPrivacyPolicy(DEFAULT_LOCALE)
        cy.url().should('include', '/privacy-policy')
    })

    it('should send email address', () => {
        const input = cy.get('input[placeholder="Enter Your Email"]')
        const subscribe = cy.contains('Subscribe')
        input.type('invalid email')
        subscribe.click()
        cy.contains('Invalid email address')
        input.clear()
        input.type('test@test.com')
        cy.contains('Subscribe').click()
        cy.contains('Invalid email address').should('not.exist')
    })
})
