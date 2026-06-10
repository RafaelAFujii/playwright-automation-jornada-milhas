import test from "@playwright/test";
import PaginaPrincipal from "./page-objects/PaginaPrincipal";

test.describe('Buscar Passagem', () => {
    test('Deve buscar passagem de somente ida', async ({ page }) => {
        const paginaPrincipal = new PaginaPrincipal(page);

        await paginaPrincipal.visitar();
        await paginaPrincipal.definirSomenteIda();

        await paginaPrincipal.abrirModalPassageiros();
        await paginaPrincipal.definirPassageirosAdultos(3);
        await paginaPrincipal.definirPassageirosCriancas(2);
        await paginaPrincipal.definirPassageirosBebes(1);
        await paginaPrincipal.fecharModalPassageiros();

        await paginaPrincipal.definirOrigemEDestino('minas gerais', 'rio de janeiro');
        await paginaPrincipal.definirDataIda(new Date());
        await paginaPrincipal.buscarPassagens();

        const dataIda = new Date();

        await paginaPrincipal.definirDataIda(dataIda);
        await paginaPrincipal.buscarPassagens();

        await paginaPrincipal.estaMostandoPassagem('Somente ida', 'Minas Gerais', 'Rio de Janeiro', dataIda);
    });
});