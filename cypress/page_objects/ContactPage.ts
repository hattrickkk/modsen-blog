export class ContactPage {
    visit() {
        cy.visit('/en/contact-us')
    }

    getButtonByText(text: string) {
        return cy.get('button').contains(text)
    }

    getInput(placeholder: string) {
        return cy.get(`input[placeholder="${placeholder}"]`)
    }

    get textarea() {
        return cy.get(`textarea[placeholder="Message"]`)
    }

    type(placeholder: string, str: string) {
        return this.getInput(placeholder).type(str)
    }

    typeInTextarea(str: string) {
        this.textarea.type(str)
    }

    get sendButton() {
        return cy.contains('Send Message')
    }
}
