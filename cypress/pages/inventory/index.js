import { elements } from "./elements"

class Inventory { //validar
    validarAcessoPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('Acesso a pagina de inventario')
    }
}

export default new Inventory()