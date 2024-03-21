describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://reforcodev.com')
    cy.contains('Adquira')
    cy.contains('Fazer Login').click()
    cy.get('#email').type('teste@email.com')
    cy.get('#password').type('123456')
    cy.contains('Entrar').click()
  })
})