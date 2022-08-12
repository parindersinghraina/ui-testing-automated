// Given a user visits https://example.cypress.io
// When they click the link labeled type
// And they type "fake@email.com" into the .action-email input
// Then the URL should include /commands/actions
// And the .action-email input has "fake@email.com" as its value

describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

