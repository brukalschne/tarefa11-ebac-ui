/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Teste Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso e validar a alteração da senha', () => {
        let nome = faker.person.firstName()
        let sobrenome = faker.person.lastName()
        let email = faker.internet.email(nome)
        let senhaAtual = faker.internet.password()
        let senhaNova = faker.internet.password()
        
        //Preencher informações de e-mail e senha
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senhaAtual)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        //Preencher informações nos detalhes da conta
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('#password_current').type(senhaAtual)
        cy.get('#password_1').type(senhaNova)
        cy.get('#password_2').type(senhaNova)
        cy.get('.woocommerce-Button').click()

        //Fazer logout
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()

        //Acessar a página de login novamente e fazer login
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(email)
        cy.get('#password').type(senhaNova)
        cy.get('.woocommerce-form > .button').click()

        //Validar se fez o login
        cy.get('.page-title').should('contain', 'Minha conta')
    });

});