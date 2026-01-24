import Login from '../pages/login'
import Inventory from '../pages/inventory';

describe('Login', () => {
    beforeEach(() =>{
        //Arrange
        Login.visitarPagina();
    })

    it('Realizar login com sucesso', () => {
        //Act
        Login.preencherCredenciaisValidas();
        //Assert
        Inventory.validarAcessoPagina(); //metodo 
       
    })

    it('Realizando login informando credenciais erradas', () => {
        //Act
        Login.preencherCredenciaisInvalidas();
     
        //Assert
        Login.validarErroCredenciaisErradas();
    })
})


 