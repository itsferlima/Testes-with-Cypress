describe('Testes de Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('https://front.serverest.dev/login')
  })
  it('Login com sucesso', () => {
    //Act
    cy.get('[data-testid="email"]').type('itsferlima@gmail.com')
    cy.get('[data-testid="senha"]').type('123Sublin')
    cy.get('[data-testid="entrar"]').click()
    
    //Assert
    cy.get('[data-testid="pesquisar"]').type('Intelligent Granite Knife')
    cy.get('[data-testid="botaoPesquisar"]').click()
  })
})