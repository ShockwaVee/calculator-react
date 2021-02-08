describe('calculator', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.intercept('https://api.mathjs.org/v4/**').as('calculate');
    })

    it('should calculate the right result by typing', () => {
        cy.get('[data-test=inputRow]').type('2+2');
        cy.get('[data-test="button-="]').click();
        cy.wait('@calculate');
        cy.get('[data-test=inputRow]').should('have.value', '4');
    })

    it('should calculate the right result by clicking', () => {
        cy.get('[data-test="button-2"]').click();
        cy.get('[data-test="button-+"]').click();
        cy.get('[data-test="button-2"]').click();
        cy.get('[data-test="button-4"]').click();
        cy.get('[data-test="button-="]').click();
        cy.wait('@calculate');
        cy.get('[data-test=inputRow]').should('have.value', '26');
    })
})
