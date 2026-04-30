<div align="center">

# Formulário de Convite

</div>

<div align="center">

[![Acessar Deploy](https://img.shields.io/badge/Acessar%20Deploy-Github%20Pages-blue?style=for-the-badge)](https://victormartinsd.github.io/formulario-de-convite/)
[![Figma Design](https://img.shields.io/badge/Figma%20Design-811?style=for-the-badge&logo=figma&logoColor=white&color=FC4A1A)](https://www.figma.com/design/cq9L603wHqvq64HGCQXqUQ/Formul%C3%A1rio-de-convite--Community-?node-id=3-376&p=f&t=k7V1bKqVDnmjKkKJ-0)
[![📘 Notas de Estudo](https://img.shields.io/badge/%F0%9F%93%98%20Notas%20de%20Estudo-Documenta%C3%A7%C3%A3o-0ea5e9?style=for-the-badge)](./docs/notas-de-estudo.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

</div>

## Sumário | Summary

<div align="center">

| Português                                       | English                                      |
| ----------------------------------------------- | -------------------------------------------- |
| [Sobre o Projeto](#sobre-o-projeto)             | [About the Project](#en-about-the-project)   |
| [Preview](#preview)                             | [Preview](#en-preview)                       |
| [Visão de Produto](#visao-de-produto)           | [Product Vision](#en-product-vision)         |
| [Casos de Uso](#casos-de-uso)                   | [Use Cases](#en-use-cases)                   |
| [Funcionalidades](#funcionalidades)             | [Features](#en-features)                     |
| [Tecnologias](#tecnologias)                     | [Technologies](#en-technologies)             |
| [Arquitetura](#arquitetura)                     | [Architecture](#en-architecture)             |
| [Como rodar localmente](#como-rodar-localmente) | [How to run locally](#en-how-to-run-locally) |
| [Limitações conhecidas](#limitacoes-conhecidas) | [Known limitations](#en-known-limitations)   |
| [Aprendizado](#aprendizado)                     | [Learning](#en-learning)                     |

</div>

<a name="sobre-o-projeto"></a>

## 📌 Sobre o Projeto

Este projeto é um formulário de convite digital para eventos, com captura de dados essenciais, personalização visual e validações de entrada no próprio navegador. A proposta é reduzir erro de preenchimento e organizar a experiência de criação em um fluxo único e objetivo.

A implementação é estática e usa HTML, CSS e JavaScript puro, com páginas legais separadas e documentação de produto em `/docs`. Não há backend, API externa, hooks, serviços ou camada de componentes de framework neste repositório.

<a name="preview"></a>

## 🖼️ Preview

<div align="center">
  <img width="1256" alt="Preview do projeto Formulário de Convite" src="https://github.com/user-attachments/assets/8d267b41-6909-4a4e-b546-64b527a16a6f" />
</div>

<a name="visao-de-produto"></a>

## 🎯 Visão de Produto

O produto resolve a criação de convites digitais personalizados com campos essenciais do evento, opções de tema e cor e validações que evitam dados incompletos. Ele entrega uma experiência guiada para que o usuário monte um convite funcional com menos retrabalho e mais clareza sobre o que ainda falta preencher.

O público-alvo é formado por pessoas que precisam montar convites para aniversários, formaturas, casamentos e outras celebrações sem depender de ferramentas mais complexas. Para detalhes sobre regras de negócio e requisitos, acesse a [Especificação do Produto](./docs/PRODUCT_SPEC.md).

<a name="casos-de-uso"></a>

## 📌 Casos de Uso

- Criar um convite para aniversário com tema, cor e imagem de capa.
- Montar um convite para casamento, formatura ou chá temático.
- Validar dados de contato antes do envio.
- Registrar o aceite dos termos e da política de privacidade.
- Limpar o formulário e recomeçar o preenchimento com confirmação.

<a name="funcionalidades"></a>

## ✨ Funcionalidades

- Preenchimento guiado dos dados do evento.
- Validação de campos obrigatórios e formatos de entrada.
- Seleção de tema, cor principal e estilo claro ou escuro.
- Upload de imagem de capa com restrição para arquivos de imagem.
- Máscara de telefone no padrão brasileiro.
- Persistência do preenchimento e do tema no navegador.
- Limpeza do formulário com confirmação antes da ação.
- Acesso às páginas de termos e privacidade.

<a name="tecnologias"></a>

## 🛠️ Tecnologias e Ferramentas (Análise Técnica)

### Núcleo

| Tecnologia | Versão | Função                                                                                                     |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| HTML5      | Nativo | Estrutura semântica do formulário principal, das páginas legais e dos metadados do documento.              |
| JavaScript | Nativo | Controla tema, validações, seleção de arquivo, máscara de telefone, persistência local e modal de limpeza. |

### Estilos

| Tecnologia | Versão | Função                                                             |
| ---------- | ------ | ------------------------------------------------------------------ |
| CSS3       | Nativo | Organiza reset, base global, layout, componentes e páginas legais. |
| Flexbox    | Nativo | Distribui grupos de campos e cartões de seleção.                   |
| Grid       | Nativo | Apoia a composição das áreas visuais de temas e personalização.    |
| SVG Sprite | Nativo | Centraliza ícones e reduz repetição de ativos.                     |

### Infraestrutura / API

| Tecnologia   | Versão  | Função                                                                           |
| ------------ | ------- | -------------------------------------------------------------------------------- |
| localStorage | Web API | Mantém dados preenchidos e o estado do tema entre interações no mesmo navegador. |
| GitHub Pages | Serviço | Hospeda a versão publicada do projeto.                                           |

### Ferramentas

| Tecnologia  | Versão          | Função                                                        |
| ----------- | --------------- | ------------------------------------------------------------- |
| npm         | Gerenciador npm | Gerencia dependências e scripts do repositório.               |
| Prettier    | latest          | Padroniza a formatação dos arquivos.                          |
| Husky       | 9.1.7           | Executa automações ligadas ao fluxo de commit.                |
| lint-staged | 16.2.7          | Aplica formatação apenas nos arquivos preparados para commit. |

<a name="arquitetura"></a>

## 🏗️ Arquitetura

### Estrutura do Projeto

```text
formulario-de-convite/
├── .editorconfig             # Padrões de edição compartilhados
├── .gitignore                # Arquivos e pastas ignorados pelo Git
├── .husky/
│   └── pre-commit            # Execução de lint-staged antes do commit
├── .prettierignore           # Arquivos ignorados pelo Prettier
├── .prettierrc               # Regras de formatação do Prettier
├── LICENSE                   # Licença MIT do projeto
├── README.md                 # Documentação principal
├── index.html                # Entrada da aplicação com metadados e formulário
├── package-lock.json         # Lock file para instalação determinística
├── package.json              # Dependências e scripts npm
├── assets/
│   ├── img/
│   │   ├── background.png    # Arte de fundo da interface
│   │   ├── favicon.png       # Ícone da aba do navegador
│   │   ├── icons.svg         # Sprite de ícones reutilizáveis
│   │   ├── Logo.png          # Logotipo do projeto
│   │   ├── preview.png       # Imagem de preview do produto
│   │   └── tema/
│   │       ├── baby-shower.png
│   │       ├── birthday.png
│   │       ├── bridal-shower.png
│   │       ├── carnival.png
│   │       ├── children.png
│   │       ├── christmas.png
│   │       ├── easter.png
│   │       ├── graduation.png
│   │       ├── halloween.png
│   │       ├── marriage.png
│   │       ├── other.png
│   │       └── saint-john.png
│   ├── js/
│   │   └── index.js          # Comportamento interativo do formulário
│   └── styles/
│       ├── about.css         # Estilos da área institucional
│       ├── components.css    # Componentes visuais da interface
│       ├── global.css        # Variáveis e estilos globais
│       ├── index.css         # Arquivo de composição dos estilos
│       ├── layout.css        # Estrutura e composição da página
│       ├── legal.css         # Estilos das páginas legais
│       └── reset.css         # Reset visual base
├── compliance/
│   ├── privacy.html          # Página de Política de Privacidade
│   └── terms.html            # Página de Termos e Condições
└── docs/
    ├── PRODUCT_SPEC.md       # Especificação de produto
    └── notas-de-estudo.md    # Notas técnicas e de aprendizado
```

O projeto segue uma arquitetura estática de front-end, sem framework, com responsabilidades separadas por diretório. O HTML concentra a interface principal, o CSS é dividido por contexto visual e o JavaScript reúne o comportamento interativo.

O arquivo `package.json` concentra os scripts `format` e `prepare`, enquanto o `pre-commit` da pasta `.husky/` executa `lint-staged` antes de cada commit. O projeto também usa `prettierignore` e `editorconfig` para padronizar a formatação local.

- `index.html` concentra o formulário principal, a navegação para os documentos legais e o modal de limpeza.
- `compliance/` contém as páginas de Termos e Condições e Política de Privacidade.
- `assets/styles/` organiza a camada visual em arquivos de entrada e estilos por responsabilidade.
- `assets/js/index.js` centraliza a experiência interativa, incluindo persistência local, alternância de tema, máscara de telefone, upload de imagem e confirmação de limpeza.
- `assets/img/` reúne imagens, temas e ícones em sprite SVG.
- `docs/` armazena a especificação de produto e as notas de estudo.

`node_modules/` é criado localmente após a instalação das dependências, mas não faz parte do versionamento.

Não há backend, autenticação, integração com API externa, hooks, serviços ou testes automatizados no estado atual.

<a name="como-rodar-localmente"></a>

## 🚀 Como rodar o projeto localmente

O repositório usa `npm`, pois existe `package-lock.json` e não há lockfiles de outros gerenciadores.

1. Clone o repositório:

```bash
git clone https://github.com/VictorMartinsD/formulario-de-convite.git
```

2. Entre no diretório do projeto:

```bash
cd formulario-de-convite
```

3. Instale as dependências:

```bash
npm install
```

4. Abra o arquivo principal no navegador ou sirva a pasta com um servidor estático local.

O projeto não expõe um script `dev` próprio; a visualização local acontece diretamente pelo `index.html`.

<a name="limitacoes-conhecidas"></a>

## ⚠️ Limitações Conhecidas

- Não possui persistência em conta de usuário.
- Não possui histórico de convites gerados.
- Não possui backend próprio.
- Não possui integração com API externa.
- Não possui autenticação.
- Não possui testes automatizados.

<a name="aprendizado"></a>

## 📚 Aprendizado

O projeto reforça o uso de HTML semântico, CSS modular e JavaScript direto no DOM para construir uma experiência guiada em uma aplicação estática. Também consolida práticas de organização visual, responsividade e controle de estado no navegador.

Outro aprendizado importante foi lidar com validação de formulário, máscara de telefone, upload de imagem e confirmação de ações destrutivas sem adicionar complexidade desnecessária. As anotações detalhadas estão em [docs/notas-de-estudo.md](./docs/notas-de-estudo.md).

> [!NOTE]
> Estas notas são um resumo técnico do projeto.
> O processo detalhado com todos os desafios resolvidos está documentado nos meus arquivos pessoais de estudo.
> [Veja as anotações completas deste projeto aqui](./docs/notas-de-estudo.md)

---

Documento técnico elaborado por [Victor Martins](https://github.com/VictorMartinsD).
Front-End Developer focado em aplicações web modernas e performance.

---

## ENGLISH VERSION

<div align="center">

# Invitation Form

</div>

<div align="center">

[![Access Deploy](https://img.shields.io/badge/Access%20Deploy-Github%20Pages-blue?style=for-the-badge)](https://victormartinsd.github.io/formulario-de-convite/)
[![Figma Design](https://img.shields.io/badge/Figma%20Design-811?style=for-the-badge&logo=figma&logoColor=white&color=FC4A1A)](https://www.figma.com/design/cq9L603wHqvq64HGCQXqUQ/Formul%C3%A1rio-de-convite--Community-?node-id=3-376&p=f&t=k7V1bKqVDnmjKkKJ-0)
[![📘 Study Notes](https://img.shields.io/badge/%F0%9F%93%98%20Study%20Notes-Documentation-0ea5e9?style=for-the-badge)](./docs/notas-de-estudo.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

</div>

<a name="en-about-the-project"></a>

## 📌 About the Project

This project is a digital invitation form for events, with essential data collection, visual customization, and input validations in the browser. The goal is to reduce entry errors and keep the creation flow organized in a single, direct experience.

The implementation is static and uses plain HTML, CSS, and JavaScript, with separate legal pages and product documentation under `/docs`. There is no backend, external API, hooks, services, or framework component layer in this repository.

<a name="en-preview"></a>

## 🖼️ Preview

See the preview in the section above: [Preview](#preview).

<a name="en-product-vision"></a>

## 🎯 Product Vision

The product solves personalized digital invitation creation with essential event fields, theme and color options, and validations that prevent incomplete data. It provides a guided experience so the user can build a functional invitation with less rework and clearer feedback on what still needs attention.

The target audience includes people who need invitations for birthdays, graduations, weddings, and other celebrations without relying on more complex tools. For details on business rules and requirements, access the [Product Specification](./docs/PRODUCT_SPEC.md).

<a name="en-use-cases"></a>

## 📌 Use Cases

- Create a birthday invitation with a theme, color, and cover image.
- Build an invitation for a wedding, graduation, or themed shower.
- Validate contact data before submission.
- Record acceptance of the terms and privacy policy.
- Clear the form and restart the flow with confirmation.

<a name="en-features"></a>

## ✨ Features

- Guided entry of event data.
- Validation of required fields and input formats.
- Selection of theme, main color, and light or dark style.
- Cover image upload restricted to image files.
- Brazilian phone mask.
- Persistence of filled data and theme in the browser.
- Form clearing with confirmation before the action.
- Access to legal pages for terms and privacy.

<a name="en-technologies"></a>

## 🛠️ Technologies and Tools (Technical Analysis)

### Core

| Technology | Version | Function                                                                                                      |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| HTML5      | Native  | Semantic structure for the main form, legal pages, and document metadata.                                     |
| JavaScript | Native  | Controls theme switching, validations, file selection, phone masking, local persistence, and the clear modal. |

### Styling

| Technology | Version | Function                                                           |
| ---------- | ------- | ------------------------------------------------------------------ |
| CSS3       | Native  | Organizes reset, global base, layout, components, and legal pages. |
| Flexbox    | Native  | Distributes field groups and selection cards.                      |
| Grid       | Native  | Supports the composition of theme and customization areas.         |
| SVG Sprite | Native  | Centralizes icons and reduces asset repetition.                    |

### Infrastructure / API

| Technology   | Version | Function                                                                   |
| ------------ | ------- | -------------------------------------------------------------------------- |
| localStorage | Web API | Keeps filled data and theme state across interactions in the same browser. |
| GitHub Pages | Service | Hosts the published version of the project.                                |

### Tooling

| Technology  | Version             | Function                                     |
| ----------- | ------------------- | -------------------------------------------- |
| npm         | npm package manager | Manages repository dependencies and scripts. |
| Prettier    | latest              | Standardizes file formatting.                |
| Husky       | 9.1.7               | Runs automation tied to the commit flow.     |
| lint-staged | 16.2.7              | Applies formatting only to staged files.     |

<a name="en-architecture"></a>

## 🏗️ Architecture

### Project Structure

```text
formulario-de-convite/
├── .editorconfig             # Shared editing rules
├── .gitignore                # Files and folders ignored by Git
├── .husky/
│   └── pre-commit            # Runs lint-staged before commit
├── .prettierignore           # Files ignored by Prettier
├── .prettierrc               # Prettier formatting rules
├── LICENSE                   # Project MIT license
├── README.md                 # Main documentation
├── index.html                # Application entry with metadata and form
├── package-lock.json         # Deterministic install lock file
├── package.json              # npm dependencies and scripts
├── assets/
│   ├── img/
│   │   ├── background.png    # Interface background art
│   │   ├── favicon.png       # Browser tab icon
│   │   ├── icons.svg         # Reusable icon sprite
│   │   ├── Logo.png          # Project logo
│   │   ├── preview.png       # Product preview image
│   │   └── tema/
│   │       ├── baby-shower.png
│   │       ├── birthday.png
│   │       ├── bridal-shower.png
│   │       ├── carnival.png
│   │       ├── children.png
│   │       ├── christmas.png
│   │       ├── easter.png
│   │       ├── graduation.png
│   │       ├── halloween.png
│   │       ├── marriage.png
│   │       ├── other.png
│   │       └── saint-john.png
│   ├── js/
│   │   └── index.js          # Interactive form behavior
│   └── styles/
│       ├── about.css         # Institutional area styles
│       ├── components.css    # UI components
│       ├── global.css        # Global variables and styles
│       ├── index.css         # Style composition entry point
│       ├── layout.css        # Page structure and composition
│       ├── legal.css         # Legal pages styles
│       └── reset.css         # Base visual reset
├── compliance/
│   ├── privacy.html          # Privacy Policy page
│   └── terms.html            # Terms and Conditions page
└── docs/
    ├── PRODUCT_SPEC.md       # Product specification
    └── notas-de-estudo.md    # Technical and learning notes
```

The project follows a static front-end architecture without a framework, with responsibilities separated by directory. HTML holds the main interface, CSS is divided by visual context, and JavaScript gathers the interactive behavior.

The `package.json` file centralizes the `format` and `prepare` scripts, while `.husky/pre-commit` runs `lint-staged` before each commit. The project also uses `.prettierignore` and `.editorconfig` to keep formatting consistent locally.

- `index.html` contains the main form, links to the legal documents, and the clear-confirmation modal.
- `compliance/` contains the Terms and Conditions and Privacy Policy pages.
- `assets/styles/` organizes the visual layer into entry and responsibility-based stylesheets.
- `assets/js/index.js` centralizes the interactive experience, including local persistence, theme toggling, phone masking, image upload handling, and clear confirmation.
- `assets/img/` stores images, themes, and SVG sprite icons.
- `docs/` stores the product specification and study notes.

`node_modules/` is created locally after dependency installation, but it is not part of version control.

There is no backend, authentication, external API integration, hooks, services, or automated test suite in the current state.

<a name="en-how-to-run-locally"></a>

## 🚀 How to run locally

The repository uses `npm` because a `package-lock.json` file is present and there are no lockfiles from other package managers.

1. Clone the repository:

```bash
git clone https://github.com/VictorMartinsD/formulario-de-convite.git
```

2. Enter the project directory:

```bash
cd formulario-de-convite
```

3. Install the dependencies:

```bash
npm install
```

4. Open the main file in the browser or serve the folder with any local static server.

The project does not expose its own `dev` script; local viewing happens directly through `index.html`.

<a name="en-known-limitations"></a>

## ⚠️ Known Limitations

- No user account persistence.
- No invitation history.
- No dedicated backend.
- No external API integration.
- No authentication.
- No automated tests.

<a name="en-learning"></a>

## 📚 Learning

The project reinforces semantic HTML, modular CSS, and direct DOM scripting to build a guided experience in a static application. It also consolidates visual organization, responsiveness, and browser state control.

Another important lesson was handling form validation, phone masking, image upload, and destructive-action confirmation without adding unnecessary complexity. The detailed notes are available in [docs/notas-de-estudo.md](./docs/notas-de-estudo.md).

> [!NOTE]
> These notes are a technical summary of the project.
> The detailed process with all resolved challenges is documented in my personal study files.
> [See the full notes for this project here](./docs/notas-de-estudo.md)

---

Developed by [Victor Martins](https://github.com/VictorMartinsD).
Front-End Developer focused on modern web applications and performance.
