describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://reforcodev.com')
    cy.contains('Cadastre-se grátis').click()
    cy.contains('Ainda não possui conta?').click()
    cy.get('#name').type('Gleidson Rocha');
    cy.get('#email').type('teste2@email.com');
    cy.get('#password').type('123456');
    cy.contains('Entrar').click()
  })
})