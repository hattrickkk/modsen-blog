/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    interface Chainable {
        getByDataCy(dataCyValue: string): Chainable<JQuery<HTMLElement>>
    }
}

Cypress.Commands.add('getByDataCy', dataCyValue => {
    return cy.get(`[data-cy="${dataCyValue}"]`)
})
