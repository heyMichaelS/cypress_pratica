///<reference types="cypress" />

export default {
    clicarLogin() {
        cy.get('#btnLogin')
            .click()
    },

    validarMensagemLoginError(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    preencheEmail(email) {
        cy.get('#user')
            .type(email)
    },

    preencheSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucess(nome) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container', { timeout: 3000 })
            .should('be.visible')
            .should('have.text', `Olá, ${nome}`)

    },

    checkvalid() {
        cy.get('#materialUnchecked')
            .check()
    },

        confirmOk() {
        cy.get('.swal2-confirm', { timeout: 6000 })
            .should('be.visible')
            .click()
    }





}