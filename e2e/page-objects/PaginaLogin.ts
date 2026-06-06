import { Locator,expect, Page } from "@playwright/test";

export class PaginaLogin {

    private readonly page: Page;
    private readonly botaoLogin;
    private readonly inputEmail: import("playwright-core").Locator;
    private readonly inputSenha: import("playwright-core").Locator;
    private readonly botaoAcessarConta: import("playwright-core").Locator;

    constructor(page: Page) {
        this.page = page;
        this.botaoLogin = page.getByTestId('botao-login');
        this.inputEmail = page.getByTestId('input-email');
        this.inputSenha = page.getByTestId('input-senha');
        this.botaoAcessarConta = page.getByTestId('botao-acessar-conta');
    }
    async visitar() {
        await this.page.goto("/");
        await this.botaoLogin.click();
        await expect(this.page).toHaveURL('/auth/login');
    }

    async preencherCredenciais(email: string, senha: string) {
        await this.inputEmail.fill(email);
        await this.inputSenha.fill(senha);
        await this.inputSenha.blur(); // Para acionar a validação do campo de senha, se houver
    }

    async clicarAcessarConta() {
        await this.botaoAcessarConta.click();
    }

    async loginFeitoComSucesso() {
        await expect(this.page).toHaveURL('/home'); // Verificar se redirecionou para a página inicial
    }
    async estaMostrandoMensagemDeErro(mensagem: string) {
        const elementoErro = this.page.getByText(mensagem);
        await expect(elementoErro).toBeVisible(); // Verificar se a mensagem de erro está visível
    }
}