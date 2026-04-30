<div align="center">

# Product Specification - Formulário de Convite

## Sumário | Summary

| Português                                         | English                                        |
| ------------------------------------------------- | ---------------------------------------------- |
| [Visão Geral do Produto](#visao-geral-do-produto) | [Product Overview](#en-product-overview)       |
| [Problema](#problema)                             | [Problem](#en-problem)                         |
| [Objetivo do Produto](#objetivo-do-produto)       | [Product Objective](#en-product-objective)     |
| [Usuário-Alvo](#usuario-alvo)                     | [Target User](#en-target-user)                 |
| [Funcionalidades](#funcionalidades)               | [Features](#en-features)                       |
| [Regras de Negócio](#regras-de-negocio)           | [Business Rules](#en-business-rules)           |
| [Fluxo do Usuário](#fluxo-do-usuario)             | [User Flow](#en-user-flow)                     |
| [MVP](#mvp)                                       | [MVP](#en-mvp)                                 |
| [Decisões de Produto](#decisoes-de-produto)       | [Product Decisions](#en-product-decisions)     |
| [Limitações Atuais](#limitacoes-atuais)           | [Current Limitations](#en-current-limitations) |
| [Próximos Passos](#proximos-passos)               | [Next Steps](#en-next-steps)                   |
| [Métricas de Sucesso](#metricas-de-sucesso)       | [Success Metrics](#en-success-metrics)         |

</div>

<a id="visao-geral-do-produto"></a>

## 1 — Visão Geral do Produto

O produto resolve a necessidade de criar convites digitais personalizados de forma guiada, com informações essenciais do evento, identidade visual configurável e validações que reduzem erros de preenchimento. O usuário consegue montar um convite completo sem depender de ferramentas dispersas para tema, cor, contato e consentimento.

O objetivo do produto é transformar a criação de convites em um processo simples, organizado e consistente. O valor entregue está na redução de esforço para montar um convite com aparência profissional, na clareza sobre os dados obrigatórios e na segurança de saber quando o conteúdo está pronto para ser enviado.

<a id="problema"></a>

## 2 — Problema

Antes deste produto, a criação de convites dependia de processos pouco estruturados, com maior chance de esquecer informações, misturar estilos visuais e cometer erros em dados importantes do evento. Também havia fricção para reunir, revisar e organizar os dados de contato e de personalização em um único lugar.

O problema precisava ser resolvido porque a montagem de um convite exige precisão, rapidez e apresentação coerente. Quando essas etapas não são guiadas, o usuário perde tempo corrigindo falhas, repete tarefas e entrega uma experiência menos confiável para quem vai receber o convite.

<a id="objetivo-do-produto"></a>

## 3 — Objetivo do Produto

Depois de usar o produto, o usuário consegue reunir os dados do evento, definir o visual do convite e registrar as informações de contato em um fluxo único. A tarefa de criar um convite deixa de ser manual e fragmentada e passa a ser conduzida por etapas claras.

O resultado esperado é um convite digital mais completo, com dados consistentes, personalização visual e menor risco de envio com campos incompletos ou formatos inadequados.

<a id="usuario-alvo"></a>

## 4 — Usuário-Alvo

O produto atende usuários que precisam criar convites digitais com rapidez e sem complexidade excessiva. O perfil principal inclui pessoas sem conhecimento técnico avançado, organizadores de eventos pessoais, estudantes, profissionais e usuários finais que desejam um convite claro e visualmente bem definido.

O contexto de uso é a preparação de eventos como aniversários, formaturas, casamentos, chás e celebrações sazonais. A necessidade principal é centralizar informações do evento e personalizar a apresentação sem depender de processos manuais demorados.

<a id="funcionalidades"></a>

## 5 — Funcionalidades

- O usuário informa os dados do evento e o sistema orienta o preenchimento com campos obrigatórios e mensagens de retorno quando algo está incompleto.
- O usuário escolhe o tipo de evento e o sistema organiza a experiência visual de acordo com a opção selecionada.
- O usuário seleciona um tema e uma cor principal e o sistema oferece variações de identidade visual para o convite.
- O usuário ativa o modo claro ou escuro e o sistema ajusta a leitura conforme a preferência de visualização.
- O usuário envia uma imagem de capa e o sistema aceita apenas arquivos compatíveis com imagem, exibindo o nome do arquivo selecionado.
- O usuário preenche dados de contato e o sistema valida se as informações estão em formato adequado para uso.
- O usuário aceita os termos e a política de privacidade e o sistema exige esse consentimento antes da conclusão do envio.
- O usuário pode limpar o formulário e o sistema exige confirmação para evitar perda acidental de dados.
- O usuário pode consultar os documentos legais e o sistema mantém acesso às regras de uso e privacidade.

<a id="regras-de-negocio"></a>

## 6 — Regras de Negócio

- O sistema não permite envio com campos obrigatórios vazios.
- O título do evento deve ter no mínimo três caracteres.
- A data e a hora de início e de fim são obrigatórias.
- O tipo de evento deve estar sempre definido, com uma opção padrão já selecionada.
- O local do evento deve ter no mínimo cinco caracteres.
- A descrição do evento deve ter conteúdo suficiente para representar o convite, com mínimo definido.
- O nome do contato deve incluir pelo menos nome e sobrenome.
- O e-mail deve ter formato válido.
- O telefone deve seguir o padrão brasileiro esperado pelo produto.
- A foto de capa deve ser uma imagem; arquivos fora desse padrão são rejeitados.
- O aceite dos termos é obrigatório para concluir o processo.
- A limpeza total do formulário depende de confirmação explícita do usuário.
- O sistema preserva o progresso do preenchimento no mesmo ambiente de uso até que o usuário finalize ou limpe os dados.
- O convite começa com escolhas padrão de tipo, tema e cor principal para reduzir esforço inicial.

<a id="fluxo-do-usuario"></a>

## 7 — Fluxo do Usuário

1 — O usuário acessa a página e encontra o formulário de criação do convite.
2 — O usuário preenche as informações do evento, como título, datas, tipo, local e descrição.
3 — O usuário define o visual do convite escolhendo cor, tema e estilo da interface.
4 — O usuário envia uma imagem de capa, se desejar personalizar a apresentação.
5 — O usuário informa nome, e-mail e telefone de contato.
6 — O usuário aceita os termos e a política de privacidade para seguir com o envio.
7 — O sistema indica inconsistências quando algum campo obrigatório está inválido ou incompleto.
8 — O usuário pode limpar o formulário, mas apenas após confirmar a ação.
9 — O usuário finaliza o processo ao enviar o convite.

<a id="mvp"></a>

## 8 — MVP (Minimum Viable Product)

O núcleo indispensável do produto é permitir a criação de um convite digital personalizado com os dados essenciais do evento e com opções mínimas de identidade visual.

Sem o preenchimento guiado dos dados do evento e sem a personalização básica de tema e cor, o produto deixa de cumprir sua função principal.

<a id="decisoes-de-produto"></a>

## 9 — Decisões de Produto

O agrupamento dos campos por contexto reduz a complexidade percebida e ajuda o usuário a entender a tarefa em etapas menores.

A validação imediata dos campos reduz retrabalho e evita que informações incompletas avancem no fluxo.

A máscara do telefone e a restrição para imagem na foto de capa diminuem erros comuns e tornam a entrada de dados mais previsível.

As opções visuais em cartões de tema e paleta de cores simplificam a escolha e deixam explícito o resultado esperado.

O modo claro e escuro melhora o conforto de leitura em diferentes condições de uso.

A confirmação antes de limpar o formulário protege contra perda acidental de conteúdo.

O acesso aos termos e à política de privacidade reforça transparência e deixa claro o contexto de uso do sistema.

<a id="limitacoes-atuais"></a>

## 10 — Limitações Atuais

- O produto não apresenta persistência em conta de usuário.
- O produto não oferece histórico de convites criados.
- O produto não mostra um fluxo visível de pré-visualização final do convite.
- O produto não expõe uma etapa clara de compartilhamento ou exportação do convite final.
- O produto não oferece colaboração entre múltiplos usuários.
- O produto depende do ambiente atual do navegador para preservar o progresso do preenchimento.

<a id="proximos-passos"></a>

## 11 — Próximos Passos

- Adicionar pré-visualização do convite antes do envio.
- Permitir salvar rascunhos em diferentes dispositivos.
- Criar histórico de convites gerados.
- Disponibilizar compartilhamento ou exportação do convite final.
- Ampliar as opções de personalização visual.
- Melhorar a experiência de revisão dos dados antes da conclusão.

<a id="metricas-de-sucesso"></a>

## 12 — Métricas de Sucesso

- O usuário conclui a criação do convite sem precisar recomeçar o preenchimento.
- O usuário identifica rapidamente quais campos ainda precisam de ajuste.
- O número de correções após mensagens de validação diminui.
- O tempo necessário para montar um convite completo fica menor.
- O usuário chega ao envio final com menos fricção na escolha de tema, cor e dados de contato.
- A limpeza acidental de dados permanece rara por causa da confirmação antes da ação.

---

Documento de produto elaborado por [Victor Martins](https://github.com/VictorMartinsD).

Este documento descreve a visão funcional e estratégica do sistema.

---

<a id="en-product-overview"></a>

# Product Specification - Invitation form

## 1 — Product Overview

The product solves the need to create personalized digital invitations through a guided flow, with essential event information, configurable visual identity, and validations that reduce input errors. The user can build a complete invitation without relying on separate tools for theme, color, contact details, and consent.

The product objective is to turn invitation creation into a simple, organized, and consistent process. The value delivered is less effort to assemble an invitation with a professional appearance, clearer guidance on required data, and more confidence that the content is ready to be submitted.

<a id="en-problem"></a>

## 2 — Problem

Before this product, invitation creation depended on unstructured processes, with a higher risk of missing information, mixing visual styles, and making mistakes in important event data. It was also harder to gather, review, and organize contact and customization details in one place.

This problem needed to be solved because invitation creation requires precision, speed, and a coherent presentation. When these steps are not guided, the user spends more time fixing issues, repeats tasks, and delivers a less reliable experience to the invitation recipient.

<a id="en-product-objective"></a>

## 3 — Product Objective

After using the product, the user can gather event details, define the invitation style, and record contact information in a single flow. The task of creating an invitation stops being manual and fragmented and becomes guided by clear steps.

The expected result is a more complete digital invitation, with consistent data, visual customization, and a lower risk of sending incomplete fields or invalid formats.

<a id="en-target-user"></a>

## 4 — Target User

The product serves users who need to create digital invitations quickly and without unnecessary complexity. The primary profile includes people without advanced technical knowledge, personal event organizers, students, professionals, and end users who want a clear and well-defined invitation.

The usage context is event preparation for birthdays, graduations, weddings, showers, and seasonal celebrations. The main need is to centralize event information and personalize the presentation without relying on time-consuming manual processes.

<a id="en-features"></a>

## 5 — Features

- The user enters event details and the system guides the process with required fields and feedback when something is incomplete.
- The user chooses the event type and the system organizes the visual experience according to the selected option.
- The user selects a theme and a main color, and the system offers visual identity variations for the invitation.
- The user switches between light and dark style, and the system adapts readability to the preferred viewing mode.
- The user uploads a cover image, and the system accepts only image files while showing the selected file name.
- The user fills in contact data, and the system validates whether the information is in an appropriate format.
- The user accepts the terms and privacy policy, and the system requires that consent before completion.
- The user can clear the form, and the system requires confirmation to prevent accidental data loss.
- The user can access the legal documents, and the system keeps the usage and privacy rules available.

<a id="en-business-rules"></a>

## 6 — Business Rules

- The system does not allow submission when required fields are empty.
- The event title must contain at least three characters.
- The start and end date and time are required.
- The event type must always be defined, with one default option already selected.
- The event location must contain at least five characters.
- The event description must contain enough content to represent the invitation, with a defined minimum.
- The contact name must include at least a first name and a last name.
- The email address must be valid.
- The phone number must follow the Brazilian format expected by the product.
- The cover photo must be an image; files outside that pattern are rejected.
- Accepting the terms is mandatory to complete the process.
- Clearing the entire form depends on explicit user confirmation.
- The system preserves progress in the current browsing environment until the user submits or clears the data.
- The invitation starts with default type, theme, and main color choices to reduce initial effort.

<a id="en-user-flow"></a>

## 7 — User Flow

1 — The user opens the page and finds the invitation creation form.
2 — The user fills in event information such as title, dates, type, location, and description.
3 — The user defines the invitation look by choosing color, theme, and interface style.
4 — The user uploads a cover image, if desired, to personalize the presentation.
5 — The user enters contact name, email, and phone number.
6 — The user accepts the terms and privacy policy to continue.
7 — The system points out inconsistencies when any required field is invalid or incomplete.
8 — The user can clear the form, but only after confirming the action.
9 — The user completes the process by submitting the invitation.

<a id="en-mvp"></a>

## 8 — MVP (Minimum Viable Product)

The essential core of the product is enabling the creation of a personalized digital invitation with the event’s key data and a minimal set of visual customization options.

Without guided event data entry and basic theme and color customization, the product no longer fulfills its main purpose.

<a id="en-product-decisions"></a>

## 9 — Product Decisions

Grouping fields by context reduces perceived complexity and helps the user understand the task in smaller steps.

Immediate field validation reduces rework and prevents incomplete information from advancing through the flow.

The phone mask and the image-only restriction for the cover photo reduce common mistakes and make data entry more predictable.

Theme cards and a color palette simplify choice making and make the expected result explicit.

Light and dark mode improve reading comfort under different usage conditions.

The confirmation before clearing the form protects against accidental content loss.

Access to the terms and privacy policy reinforces transparency and clarifies the system’s usage context.

<a id="en-current-limitations"></a>

## 10 — Current Limitations

- The product does not provide user accounts or login.
- The product does not offer a history of created invitations.
- The product does not show a visible final preview flow for the invitation.
- The product does not expose a clear sharing or export step for the final invitation.
- The product does not support collaboration between multiple users.
- The product depends on the current browser environment to preserve draft progress.

<a id="en-next-steps"></a>

## 11 — Next Steps

- Add an invitation preview before submission.
- Allow drafts to be saved across devices.
- Create a history of generated invitations.
- Provide sharing or export of the final invitation.
- Expand the visual customization options.
- Improve the review experience before completion.

<a id="en-success-metrics"></a>

## 12 — Success Metrics

- The user completes invitation creation without needing to restart the flow.
- The user quickly identifies which fields still need adjustment.
- The number of corrections after validation messages decreases.
- The time needed to build a complete invitation becomes shorter.
- The user reaches the final submission with less friction in choosing theme, color, and contact data.
- Accidental data clearing stays rare because the action requires confirmation.

---

Product document prepared by [Victor Martins](https://github.com/VictorMartinsD).

This document describes the functional and strategic vision of the system.
