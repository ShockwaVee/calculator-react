describe('calculator', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should calculate the right result by typing', () => {
        cy.get('[data-test=bottomRow]').type('2+2');
        cy.get('[data-test="button-="]').click();
        cy.get('[data-test=bottomRow]').should('have.value', '4');
    })

    it('should calculate the right result by clicking', () => {
        cy.get('[data-test="button-2"]').click();
        cy.get('[data-test="button-+"]').click();
        cy.get('[data-test="button-2"]').click();
        cy.get('[data-test="button-4"]').click();
        cy.get('[data-test="button-="]').click();
        cy.get('[data-test=bottomRow]').should('have.value', '26');
    })
})
