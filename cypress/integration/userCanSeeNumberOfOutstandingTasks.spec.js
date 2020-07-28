describe('It allows users to see number of outstanding tasks', () => {
  it('Number of outstanding tasks displayed', () => {
    cy.visit('/');
    cy.get('input').type('Washing tonight');
    cy.contains('Add Task').click(); 
    cy.contains('1 task(s) outstanding').should('be.visible')
    cy.get('[type="checkbox"]').check()
    cy.contains('0 task(s) outstanding').should('be.visible')
    })
  })