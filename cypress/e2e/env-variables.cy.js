describe('Variaveis de ambiente', () => {

it('Imprimir variaveis de ambiante', () =>{
    cy.log(Cypress.env('user'))
    cy.log(Cypress.env('host'))
    cy.log(Cypress.env('api_server'))
    })
})
