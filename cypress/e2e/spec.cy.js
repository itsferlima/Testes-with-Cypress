describe('Testes de Login', () => {
  it('Login com sucesso', () => {
    //Arrange
    cy.visit('https://front.serverest.dev/login')
    //Act
    cy.get('[data-testid="email"]').type('')
    cy.get('[data-testid="senha"]').type('123Sublin')
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="pesquisar"]').type('Intelligent Granite Knife')
    cy.get('[data-testid="botaoPesquisar"]').click()
  })

  it.only('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('')
    cy.get('[data-testid="senha"]').type('123Sublin')
    cy.get('[data-testid="entrar"]').click()

  })
})