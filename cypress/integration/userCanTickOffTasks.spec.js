describe('It allows users to update mark off completed tasks', () => {
  it('Allows ticking off task when complete', () => {
    cy.visit('/');
    cy.get('input').type('Washing tonight');
    cy.contains('Add Task').click();
    cy.contains('Washing tonight').should('be.visible')
    cy.get('[type="checkbox"]').check()  
    })
  })