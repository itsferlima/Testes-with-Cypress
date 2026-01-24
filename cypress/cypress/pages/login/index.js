import { elements as el } from "./elements" //exportar o objeto

class login {
    visitarPagina(){
        cy.visit('https://www.saucedemo.com/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.usarname).type('standard_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()
    }
    preencherCredenciaisInvalidas(){
        cy.get(el.usarname).type('new-user')
        cy.get(el.password).type('secret_password')
        cy.get(el.loginButton).click()
    }

    validarErroCredenciaisErradas(){
        cy.get(el.erroMessage).should('contain.text', 'Username and password do not match any user in this service')
        cy.url().should('eq','https://www.saucedemo.com/' )
        cy.screenshot('erro credenciais erradas')
    }
}

export default new login()