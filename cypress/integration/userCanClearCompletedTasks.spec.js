describe('It allows users to clear completed tasks', () => {
  it('Allows clearing completed tasks', () => {
    cy.visit('/');
    cy.get('input').type('Buy milk');
    cy.contains('Add Task').click();
    cy.get('[type="checkbox"]').check()  
    cy.contains('Clear Completed Tasks').click()
    cy.contains('Buy milk').should('not.be.visible')
    })
  })