/// <reference types="cypress" />

describe('Teste Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(2).click()
    });

    it('Deve adicionar um produto no carrinho', () => {

        var quantidade = 3

        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar um produto aos favoritos', () => {
        cy.get('[class="product-block grid"]').eq(7).click()
        cy.get('.yith-wcwl-add-button').click()

        cy.get('.yith-wcwl-wishlistaddedbrowse').should('contain', 'Browse wishlist')
    });

});