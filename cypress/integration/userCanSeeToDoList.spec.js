describe('To do list', () => {
it('Allows users to add task to do list', () => {
  cy.visit('/');
  cy.get('input').type('Wash the car');
  cy.contains('Add Task').click();
  cy.contains('Wash the car').should('be.visible')
  })
})