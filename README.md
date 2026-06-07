# ✈️ Jornada Milhas - Automação E2E com Playwright

O **Jornada Milhas** é uma StartUP fictícia. Trata-se de uma aplicação web onde os usuários podem buscar passagens de avião e filtrar os resultados por preços, conexões e companhias aéreas. O sistema também conta com fluxos completos de cadastro, login e edição de perfil.

<img src="screenshot.png" alt="Imagem do Jornada Milhas" width="50%">

Este repositório contém o código-fonte da aplicação front-end e o projeto de automação de testes **End-to-End (E2E)** construído para ela. O objetivo desta automação é garantir a confiabilidade, resiliência e acessibilidade das jornadas de usuário.

## ✔️ Técnicas e Tecnologias Utilizadas

- **Front-end:** `Angular`
- **Framework de Teste:** `Playwright`
- **Linguagem dos Testes:** `TypeScript`

## 🔨 Arquitetura e Design de Testes

Para elevar a qualidade do sistema, a automação E2E foi desenhada utilizando práticas avançadas de engenharia de software:

- **Padrão de Projeto:** Page Object Model (POM) para isolar a estrutura das páginas da lógica dos testes.
- **Fixtures Customizadas:** Injeção de dependências nos testes para eliminar repetição de código (DRY) e facilitar a manutenção.
- **Locators Resilientes:** Priorização de atributos estruturais (`data-testid`) definidos pela equipe e regras de acessibilidade (`getByRole`, `getByLabel`).
- **Locator Chaining:** Encadeamento de seletores para interação precisa com componentes web complexos e modais genéricos.

## 📂 Estrutura da Automação

A arquitetura de testes está centralizada na pasta `e2e/`:

```text
📦 e2e
 ┣ 📂 page-objects               # Classes de mapeamento de elementos e ações (POM)
 ┃ ┣ 📜 PaginaLogin.ts           # Page Object da tela de autenticação
 ┃ ┗ 📜 PaginaPrincipal.ts       # Page Object da tela de busca e modais
 ┣ 📜 fazerLogin.spec.ts         # Cenários de teste de autenticação (usando Fixtures)
 ┗ 📜 jornadaBuscaPassagem.spec.ts # Cenários de busca de voos e adição de passageiros