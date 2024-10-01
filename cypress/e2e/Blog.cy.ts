const POSTS_PER_PAGE = 5

describe('Blog testing', () => {
    beforeEach(() => {
        cy.visit('/en/blog')
    })

    it('pagination works correctly', () => {
        cy.contains('Read More >')
        cy.getByDataCy('post-card').then(postCards => {
            if (postCards.length === POSTS_PER_PAGE) {
                cy.contains('Prev')
                cy.contains('Next').click()
                for (let i = 0; i < postCards.length; i++) {
                    cy.contains(postCards.eq(i).find('h2').text()).should('not.exist')
                }
            } else {
                cy.contains('Prev').should('not.exist')
                cy.contains('Next').should('not.exist')
            }
        })
    })

    it('navigate to single post page from post', () => {
        cy.contains('Read More >')
        cy.getByDataCy('post-card').then(postCards => {
            if (postCards.length >= 1) {
                const postTitle = postCards.eq(0).find('h2').text()
                cy.contains(postTitle).click()
                cy.contains(postTitle).should('exist')
                cy.url().should('include', '/post')
            }
        })
    })
})
