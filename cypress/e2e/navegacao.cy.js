describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://reforcodev.com')
    cy.contains('Fazer Login').click()
    cy.get('#email').type('teste@email.com')
    cy.get('#password').type('123456')
    cy.contains('Entrar').click()
    // cy.contains('Acessar').click()
    cy.get('a').should('have.attr', 'href').should('have.value', '/platform/links').click()
  })
})