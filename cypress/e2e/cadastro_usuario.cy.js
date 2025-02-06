///<reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuários', () => {

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })
    it('Campo Nome vazio ', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })
    it('Campo E-mail vazio ', () => {
        const name = faker.name.fullName()
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })
    it('Campo E-mail inválido ', () => {
        const name = faker.name.fullName()
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(name)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio ', () => {
        const name = faker.name.fullName()
        const email = faker.internet.email()
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(email)
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Campo senha inválido ', () => {
        const name = faker.name.fullName()
        const email = faker.internet.email()
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(email)
        cadastro_usuario_page.preencheSenha('12345')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () => {
        const name = await faker.name.fullName()
        const email = faker.internet.email()
    
        cadastro_usuario_page.preencheNome(name)
        cadastro_usuario_page.preencheEmail(email)
        cadastro_usuario_page.preencheSenha('123456')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucess(name)
        cadastro_usuario_page.confirmOk()

    })


})