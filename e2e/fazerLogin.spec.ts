import { test } from './page-objects/PaginaLogin';

test.describe("Página de Login", () => {
    test("Deve conseguir fazer login com email e senha válidos", async ({ paginaLogin }) => {

        await paginaLogin.preencherCredenciais('teste@teste.com.br', '123456');
        await paginaLogin.clicarAcessarConta();
        await paginaLogin.loginFeitoComSucesso();
    });

    test("Não deve conseguir fazer login email invalido", async ({ paginaLogin }) => {

        await paginaLogin.preencherCredenciais('teste@teste.com', '123456');
        await paginaLogin.clicarAcessarConta();
        await paginaLogin.estaMostrandoMensagemDeErro('Você não está autorizado a acessar este recurso');
    });

    test("Email inserido incorreto", async ({paginaLogin}) =>{

        await paginaLogin.preencherCredenciais('teste.com', '1');
        await paginaLogin.estaMostrandoMensagemDeErro('E-mail inválido');
    })

    test("Formulario em branco", async ({paginaLogin}) =>{

        await paginaLogin.preencherCredenciais('', '');
        await paginaLogin.estaMostrandoMensagemDeErro('E-mail é obrigatório');
        await paginaLogin.estaMostrandoMensagemDeErro('Senha é obrigatória');
    })
});