import { ContactPage } from '../page_objects/ContactPage'

describe('Contact page testing', () => {
    const contactPage = new ContactPage()

    beforeEach(() => {
        contactPage.visit()
    })

    it('contact page renders correctly', () => {
        cy.contains('Let’s Start a Conversation')
        contactPage.getInput('Full Name').should('exist')
        contactPage.getInput('Your Email').should('exist')
        contactPage.textarea.should('exist')
        cy.getByDataCy('query-dropdown').should('exist')
    })

    it('type incorrect data', () => {
        contactPage.sendButton.should('have.css', 'pointer-events', 'none')
        contactPage.type('Full Name', 'n')
        contactPage.type('Your Email', 'invalid email')
        contactPage.textarea.focus()
        cy.getByDataCy('query-dropdown').click()
        cy.contains('Fill more than 2 characters')
        cy.contains('Invalid email address')
        cy.contains('Fill the field')
    })

    it('type correct data', () => {
        cy.intercept('POST', '**/email/send', {
            statusCode: 200,
        }).as('messageSend')
        contactPage.sendButton.should('have.css', 'pointer-events', 'none')
        contactPage.type('Full Name', 'some name')
        contactPage.type('Your Email', 'test@test.com')
        contactPage.typeInTextarea('Message')
        cy.getByDataCy('query-dropdown').click()
        cy.contains('Personal growth').click()
        contactPage.sendButton.click()
        cy.wait('@messageSend').its('response.statusCode').should('eq', 200)
        cy.contains('Thanks for lettering to us!')
        contactPage.getInput('Full Name').should('have.value', '')
        contactPage.getInput('Your Email').should('have.value', '')
        contactPage.textarea.should('have.value', '')
    })
})
