describe('Carrinho', () =>{
    beforeEach(() =>{
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('Adicionar produto no carrinho com sucesso', () =>{
        //Act
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.screenshot('produto')

        //Assert instrutions
        cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1')

        cy.get('#shopping_cart_container').click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.screenshot('produto adicionado com sucesso')                
    })
    
    it('Add produto e remover do carrinho', () =>{
        //Act
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge')
        .should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
        .click()
        cy.get('.shopping_cart_badge')
        .should('be.visible')

        //Assert
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.screenshot('produto removido')
    })
})