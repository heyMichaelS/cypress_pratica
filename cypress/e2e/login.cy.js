///<reference types="cypress" />


import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'
describe('Login do usuário', () => {

    beforeEach('Acessar login do usuário ', () => {
        commum_page.acessarLoginUsuario()
    })

    it('Campo E-mail vazio ', () => {
        login_page.clicarLogin()
        login_page.validarMensagemLoginError('E-mail inválido.')
    })

    it('Campo E-mail inválido ', () => {
        const name = faker.name.fullName()
        login_page.preencheEmail(name)
        login_page.clicarLogin()
        login_page.validarMensagemLoginError('E-mail inválido.')


    })


    it('Campo senha vazio ', () => {
        const email = faker.internet.email()
        login_page.preencheEmail(email)
        login_page.clicarLogin()
        login_page.validarMensagemLoginError('Senha inválida.')
    })

    it('Campo senha inválido ', () => {
        const email = faker.internet.email()
        login_page.preencheEmail(email)
        login_page.preencheSenha('12345')
        login_page.clicarLogin()
        login_page.validarMensagemLoginError('Senha inválida.')
    })

    it('Login  com sucesso', async () => {
        const email = await faker.internet.email()
        const password = faker.internet.password()
        login_page.preencheEmail(email)
        login_page.preencheSenha(password)
        login_page.checkvalid()
        login_page.clicarLogin()
        login_page.validarMensagemSucess(email)
        login_page.confirmOk()
    })

})