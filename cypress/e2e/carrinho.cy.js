import Login from '../pages/login'
import Inventory from '../pages/inventory';
import Header from '../pages/header';
import Cart from '../pages/cart';

describe('Carrinho', () =>{
         beforeEach(() =>{
                //Arrange
                Login.visitarPagina();
                Login.preencherCredenciaisValidas();
    })

    it('Adicionar produto no carrinho com sucesso', () =>{
        //Act
        const qtdItensAdicionados = 1
        Inventory.adicionarProduto('Sauce Labs Backpack')

        //Assert instrutions 
        Header.validarCarrinhoComItem(qtdItensAdicionados)
        Header.navegarParaCarrinho()
        Cart.validarProdutoNoCarrinho('Sauce Labs Backpack')
        
    })

    it('Add produto e remover do carrinho', () =>{
        //Act
         Inventory.adicionarProduto('Sauce Labs Backpack')
         Inventory.removerProduto('Sauce Labs Backpack')
         Header.validarCarrinhoNaoPossuiIem()

        //Assert
       
    })
})