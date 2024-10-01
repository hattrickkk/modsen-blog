export class HomePage {
    visitHome(locale: string) {
        cy.visit(`/${locale}`)
    }
    visitBlog(locale: string) {
        cy.visit(`/${locale}/blog`)
    }
    visitAbout(locale: string) {
        cy.visit(`/${locale}/about`)
    }
    visitContact(locale: string) {
        cy.visit(`/${locale}/contact-us`)
    }

    visitPrivacyPolicy(locale: string) {
        cy.visit(`/${locale}/privacy-policy`)
    }

    get languageDropdown() {
        return cy.getByDataCy('language-dropdown')
    }

    get videoButton() {
        return cy.contains('Video About Us')
    }
}
