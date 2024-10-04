const AUTHOR_ID = 6
const SOCIAL_ITEMS_COUNT = 4

describe('Author page testing', () => {
    beforeEach(() => {
        cy.visit(`/en/author/${AUTHOR_ID}`)
    })

    it('author page renders correctly', () => {
        cy.contains('Hey there, I’m Nicholas Ryan and welcome to my Blog')
        cy.getByDataCy('social-item').should('have.length', SOCIAL_ITEMS_COUNT)
        if (!cy.contains('This author has not created any posts yet')) {
            cy.getByDataCy('post-card').should('have.length.at.least', 1)
        }
    })
})
