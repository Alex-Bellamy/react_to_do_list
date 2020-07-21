describe('To do list', () => {
it('Allows users to see a to do list', () => {
    cy.visit('/');
    cy.get('input#typetodo').type('Wash the Car');
    cy.get('button#Add').click();
    cy.get('p#message').should('contain', 'Wash the Car')
    })
})