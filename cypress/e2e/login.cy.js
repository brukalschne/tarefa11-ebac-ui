/// <reference types="cypress" />

context('Teste de Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('a > .hidden-xs').should('contain', 'Welcome')
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Logout')
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Deve exibir uma mensagem de erro ao informar usuário inválido', () => {
        cy.get('#username').type('bruna@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir uma mensagem de erro ao informar senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });

});