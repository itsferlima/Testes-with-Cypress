class Cart{
    validarProdutoNoCarrinho(name){
       cy.contains(name).should('be.visible') 
       cy.screenshot('produto adicionado com sucesso')                
    }
}

export default new Cart() 