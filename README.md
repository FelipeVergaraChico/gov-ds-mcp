# GovBR DS MCP

Servidor **Model Context Protocol (MCP)** open source para o **Design System do Governo Federal Brasileiro (GovBR-DS)**.

O `govbr-ds-mcp` fornece a agentes de IA acesso estruturado à documentação do GovBR-DS, seus componentes, orientações de acessibilidade, busca, Resources e workflows reutilizáveis para desenvolvimento.

O objetivo é permitir que ferramentas como Codex, Claude Code, Kiro e outros clientes compatíveis com MCP compreendam e utilizem o GovBR Design System com base em sua documentação oficial sincronizada, em vez de depender apenas do conhecimento prévio do modelo.

> Este é um projeto comunitário e independente. Não é um projeto oficial do Governo Federal Brasileiro nem da equipe responsável pelo GovBR-DS.

---

## Por que este projeto?

Agentes de IA conseguem gerar código de frontend rapidamente, mas nem sempre sabem:

* qual componente GovBR-DS deve ser utilizado;
* como determinado componente deve se comportar;
* quais recomendações de acessibilidade se aplicam;
* quais padrões de uso são recomendados;
* onde uma informação específica está localizada na documentação do GovBR-DS.

O `govbr-ds-mcp` busca resolver esse problema disponibilizando a documentação do GovBR-DS por meio do Model Context Protocol.

```text
Agente de IA
    │
    ▼
govbr-ds-mcp
    │
    ├── Tools
    ├── Resources
    ├── Prompts
    └── Busca
          │
          ▼
   Dados estruturados locais
          ▲
          │
   Sincronização da documentação
          ▲
          │
 Repositório oficial GovBR-DS
```

O servidor MCP não utiliza um LLM internamente e não realiza requisições externas durante sua execução normal.

---

## Funcionalidades

### Sincronização da documentação

A documentação é obtida do repositório oficial do GovBR-DS e transformada em dados estruturados locais.

```text
GitLab GovBR-DS
      │
      ▼
   GitLab API
      │
      ▼
 Parser Markdown
      │
      ▼
Componentes estruturados
      │
      ▼
components.generated.ts
```

Os dados gerados são armazenados localmente, permitindo que o servidor MCP funcione sem acesso à internet depois da sincronização.

Atualmente, o projeto sincroniza **36 componentes documentados** do GovBR-DS.

---

## Tools MCP

### `list_components`

Lista os componentes GovBR-DS disponíveis no índice local da documentação.

Exemplo:

```json
{}
```

Resposta:

```json
[
  {
    "name": "Button",
    "slug": "button",
    "description": "..."
  },
  {
    "name": "Input",
    "slug": "input",
    "description": "..."
  }
]
```

---

### `get_component`

Retorna a documentação estruturada completa de um componente específico do GovBR-DS.

Exemplo:

```json
{
  "name": "button"
}
```

A busca não diferencia letras maiúsculas e minúsculas.

As chamadas abaixo são equivalentes:

```text
button
Button
BUTTON
```

---

### `search_docs`

Pesquisa dentro da documentação GovBR-DS sincronizada localmente.

Exemplo:

```json
{
  "query": "como usar um botão",
  "limit": 5
}
```

O mecanismo de busca possui suporte a:

* busca case-insensitive;
* busca sem diferenciação de acentos;
* remoção de stopwords em português;
* aliases de componentes;
* canonicalização de variações morfológicas;
* priorização do componente identificado;
* ranking por relevância de seções;
* geração de snippets relevantes;
* filtro por componente.

Exemplo:

```json
{
  "query": "acessibilidade aria",
  "component": "button",
  "limit": 5
}
```

A busca acontece inteiramente em memória.

Não são utilizados:

* embeddings;
* banco vetorial;
* Elasticsearch;
* LLM;
* serviços externos de busca.

---

## Resources MCP

A documentação do GovBR-DS também é disponibilizada através de MCP Resources.

### Catálogo de componentes

```text
govbr-ds://catalog
```

Disponibiliza um índice de todos os componentes sincronizados.

---

### Documentação de componente

```text
govbr-ds://components/{slug}
```

Exemplo:

```text
govbr-ds://components/button
```

Retorna a documentação completa do componente em Markdown.

---

### Documentação de acessibilidade

```text
govbr-ds://components/{slug}/accessibility
```

Exemplo:

```text
govbr-ds://components/button/accessibility
```

Retorna as orientações de acessibilidade disponíveis para o componente.

Nem todos os componentes do GovBR-DS possuem documentação específica de acessibilidade.

Os Resources são gerados inteiramente a partir dos dados sincronizados localmente.

---

## Prompts MCP

O servidor disponibiliza Prompts reutilizáveis para workflows comuns de desenvolvimento com GovBR-DS.

### `implement_govbr_component`

Fornece a documentação oficial sincronizada de um componente e instruções para auxiliar sua implementação.

Exemplo:

```json
{
  "component": "button",
  "requirements": "Preciso de uma ação principal para confirmar o formulário."
}
```

O Prompt fornece ao modelo a documentação relevante do componente para que a implementação seja fundamentada no GovBR-DS.

---

### `review_govbr_component`

Fornece a documentação do componente juntamente com um trecho de código que deve ser revisado.

Exemplo:

```json
{
  "component": "button",
  "code": "<button class=\"br-button\">Enviar</button>"
}
```

A revisão pode então comparar a implementação fornecida com as orientações disponíveis na documentação sincronizada.

---

### `check_govbr_accessibility`

Fornece as orientações de acessibilidade de um componente para auxiliar na revisão de uma implementação.

Exemplo:

```json
{
  "component": "button",
  "code": "<button class=\"br-button circle\"><i class=\"fas fa-plus\"></i></button>"
}
```

O servidor MCP não executa nem interpreta o código recebido.

O código é tratado somente como texto e disponibilizado como contexto para o modelo conectado.

---

## Arquitetura

```text
src/
├── data/
│   ├── components.ts
│   └── components.generated.ts
│
├── ingestion/
│   ├── gitlab-client.ts
│   ├── component-parser.ts
│   └── component-sync.ts
│
├── services/
│   ├── component.service.ts
│   └── search.service.ts
│
├── tools/
│   ├── list-components.ts
│   ├── get-component.ts
│   └── search-docs.ts
│
├── resources/
│   ├── register-resources.ts
│   ├── component.resource.ts
│   └── accessibility.resource.ts
│
├── prompts/
│   ├── register-prompts.ts
│   ├── implement-component.prompt.ts
│   ├── review-component.prompt.ts
│   └── accessibility-review.prompt.ts
│
├── formatters/
│   └── component-markdown.ts
│
├── types/
│
└── index.ts

scripts/
└── sync-components.ts
```

O fluxo principal da aplicação é:

```text
                    Cliente MCP
                        │
                        ▼
                  govbr-ds-mcp
                        │
          ┌─────────────┼─────────────┐
          │             │             │
        Tools       Resources       Prompts
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                 Services locais
                        │
                        ▼
              Dados sincronizados
                        ▲
                        │
               sync:components
                        ▲
                        │
               GovBR-DS oficial
```

---

## Requisitos

* Node.js 22+
* npm

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/FelipeVergaraChico/govbr-ds-mcp.git
cd govbr-ds-mcp
```

Instale as dependências:

```bash
npm install
```

---

## Executando o servidor MCP

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor utiliza o transporte MCP `stdio`.

Como o `stdout` é reservado para a comunicação do protocolo MCP, logs da aplicação devem ser enviados para `stderr`.

Evite:

```ts
console.log("Servidor iniciado");
```

Prefira:

```ts
console.error("Servidor iniciado");
```

---

## MCP Inspector

O projeto pode ser testado utilizando o MCP Inspector.

Execute:

```bash
npm run inspect
```

No Inspector é possível testar as funcionalidades disponíveis.

### Tools

```text
list_components
get_component
search_docs
```

### Resources

```text
govbr-ds://catalog
govbr-ds://components/{slug}
govbr-ds://components/{slug}/accessibility
```

### Prompts

```text
implement_govbr_component
review_govbr_component
check_govbr_accessibility
```

---

## Sincronizando a documentação do GovBR-DS

Para atualizar o índice local:

```bash
npm run sync:components
```

O processo de sincronização:

1. acessa o repositório público do GovBR-DS através da API do GitLab;
2. identifica os componentes documentados;
3. baixa os arquivos Markdown de cada componente;
4. baixa a documentação de acessibilidade quando disponível;
5. interpreta os arquivos Markdown;
6. normaliza os dados;
7. gera o dataset local utilizado pelo MCP.

Os dados gerados são armazenados em:

```text
src/data/components.generated.ts
```

O arquivo é gerado automaticamente e não deve ser editado manualmente.

Durante a execução normal, o servidor MCP **não consulta o GitLab**.

Isso permite utilizar as Tools, Resources, Prompts e busca mesmo sem conexão com a internet.

---

## Executando os testes

Execute:

```bash
npm test
```

A suíte de testes cobre áreas como:

* parsing de Markdown;
* busca de componentes;
* busca case-insensitive;
* normalização de acentos;
* aliases;
* canonicalização;
* ranking da busca;
* geração de snippets;
* MCP Tools;
* MCP Resources;
* MCP Prompts;
* formatação da documentação;
* tratamento de componentes inexistentes.

Os testes unitários não dependem da disponibilidade do GitLab.

---

## Desenvolvimento

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
npm run dev
```

Execute os testes:

```bash
npm test
```

Atualize a documentação local:

```bash
npm run sync:components
```

Abra o MCP Inspector:

```bash
npm run inspect
```

---

## Fonte dos dados

A documentação utilizada por este projeto é obtida do repositório oficial do GovBR Design System:

[GovBR-DS](https://gitlab.com/govbr-ds/govbr-ds)

O processo atual de ingestão utiliza principalmente:

```text
ds/componentes/
```

A documentação dos componentes normalmente possui uma estrutura semelhante a:

```text
ds/componentes/button/
├── button.md
├── button-access.md
└── imagens/
```

O arquivo principal geralmente contém informações como:

* descrição;
* uso;
* anatomia;
* tipos;
* comportamento;
* especificações.

Quando disponível, o arquivo `*-access.md` contém as orientações específicas de acessibilidade.

Nem todos os componentes possuem exatamente o mesmo conjunto de arquivos.

O processo de sincronização foi desenvolvido para lidar com essas diferenças sem interromper a geração do dataset.

---

## Princípios do projeto

### Documentação oficial primeiro

Sempre que possível, as informações fornecidas pelo MCP devem estar fundamentadas na documentação oficial sincronizada do GovBR-DS.

O objetivo é reduzir situações em que um agente de IA inventa uma regra ou comportamento que não existe no Design System.

---

### Independente de LLM

O servidor MCP não depende de:

* OpenAI;
* Anthropic;
* Google;
* modelos locais;
* qualquer outro fornecedor de IA.

O modelo é responsabilidade do cliente MCP conectado.

---

### Runtime local

Requisições externas são utilizadas durante a sincronização da documentação, e não durante consultas normais ao MCP.

```text
npm run sync:components
        │
        └── Internet necessária

npm run dev
        │
        └── Documentação local
```

---

### Busca simples antes de infraestrutura complexa

A busca atual utiliza ranking textual determinístico.

O projeto não depende de:

* embeddings;
* banco vetorial;
* infraestrutura de RAG;
* serviço externo de pesquisa.

Para a quantidade atual de documentação, uma busca local bem estruturada mantém o projeto mais simples, previsível e leve.

---

### Respostas pequenas

A Tool `search_docs` retorna snippets relevantes em vez de enviar documentos inteiros para o modelo.

Isso ajuda a reduzir:

* quantidade de contexto;
* consumo de tokens;
* informações irrelevantes;
* respostas excessivamente grandes.

Quando o documento completo for necessário, o agente pode utilizar `get_component` ou os MCP Resources.

---

## Roadmap

### Concluído

* [x] servidor MCP com transporte `stdio`
* [x] listagem de componentes
* [x] consulta individual de componentes
* [x] sincronização da documentação GovBR-DS
* [x] parser estruturado de Markdown
* [x] geração automática do dataset local
* [x] busca local na documentação
* [x] ranking de relevância
* [x] normalização de consultas em português
* [x] MCP Resources
* [x] Resources de acessibilidade
* [x] catálogo de componentes
* [x] MCP Prompts
* [x] autocomplete de componentes nos Prompts

### Planejado

* [ ] exemplos oficiais de implementação HTML e CSS
* [ ] integração com `@govbr-ds/core`
* [ ] documentação dos GovBR Web Components
* [ ] documentação dos GovBR React Components
* [ ] exemplos de implementação por componente
* [ ] validação de código GovBR-DS
* [ ] helpers para validação de acessibilidade
* [ ] publicação no npm
* [ ] publicação no MCP Registry
* [ ] transporte HTTP

---

## Projeto relacionado

Este MCP foi desenvolvido para complementar a skill [`govbr-design-system`](https://github.com/FelipeVergaraChico/govbr-design-system).

Os dois projetos possuem responsabilidades diferentes:

```text
govbr-design-system
        │
        └── Instruções, regras e boas práticas
            para orientar agentes de IA

govbr-ds-mcp
        │
        └── Documentação, busca, Resources,
            Tools e Prompts
```

Eles podem ser utilizados juntos por agentes compatíveis.

Conceitualmente:

```text
                    Agente de IA
                         │
             ┌───────────┴───────────┐
             │                       │
           Skill                    MCP
             │                       │
     Como se comportar       O que a documentação diz
     Boas práticas           Componentes
     Regras de uso           Acessibilidade
     Orientações             Busca
                             Resources
```

---

## Como contribuir

Contribuições são bem-vindas.

Algumas áreas interessantes para contribuição:

* melhoria do parser de documentação;
* melhoria da relevância da busca;
* criação de novos testes;
* suporte a novas fontes oficiais do GovBR-DS;
* melhoria da compatibilidade com clientes MCP;
* suporte às bibliotecas oficiais;
* identificação de componentes não documentados;
* correção de dados interpretados incorretamente.

Antes de enviar um Pull Request:

```bash
npm test
```

Também confirme que o projeto continua passando pelo typecheck/build utilizado no repositório.

---

## Aviso

O `govbr-ds-mcp` é um projeto open source independente.

Ele **não é mantido, endossado ou oficialmente suportado pelo Governo Federal Brasileiro ou pela equipe responsável pelo GovBR Design System**.

A documentação e os recursos do GovBR-DS utilizados pelo projeto continuam sujeitos às licenças e termos de seus respectivos projetos originais.

---

## Licença

Consulte o arquivo [`LICENSE`](./LICENSE) para informações sobre a licença deste projeto.
