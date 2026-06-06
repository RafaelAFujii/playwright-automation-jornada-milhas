import test, { expect } from "@playwright/test";

test.describe("Visitar a página inicial", () => {
    test("Deve ser possível acessar a página inicial", async ({ page }) => {
        await page.goto("/"); // Ação de acessar a página
        await expect(page).toHaveTitle("Jornada Milhas"); //Verificar o título da página

        const tituloPassagens = page.getByTestId('titulo-passagens'); 
        const tituloPromocoes = page.getByTestId('titulo-promocoes');
        const tituloDepoimentos = page.getByTestId('titulo-depoimentos');

        await expect(tituloPassagens).toBeVisible(); // Selecionar o título "Passagens" usando o atributo data-testid
        await expect(tituloPromocoes).toBeVisible(); // Selecionar o título "Promoções" usando o atributo data-testid
        await expect(tituloDepoimentos).toBeVisible(); // Selecionar o título "Depoimentos" usando o atributo data-testid
    });
});