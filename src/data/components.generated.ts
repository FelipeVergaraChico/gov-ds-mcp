import type { GovBrComponent } from "../types/component.js";

// AUTO-GENERATED FILE.
// Do not edit manually.
// Run `npm run sync:components` to regenerate.
export const generatedComponents: readonly GovBrComponent[] = [
  {
    "name": "Accordion",
    "slug": "accordion",
    "description": "O accordion serve para que o usuário visualize mais informações sobre um conteúdo, já que permite que o item inicialmente exibido na tela em forma de sentença, seja expandindo mostrando o detalhamento daquele item.",
    "documentationUrl": "https://www.gov.br/ds/components/accordion",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "Seu uso é indicado em conteúdos extensos, especialmente em interfaces de dispositivos móveis, a fim de diminuir a densidade de informações para o usuário.\n\nRecomenda=se evitar o uso de acordeões dentro de outros, pois esse tipo vai contra as melhores práticas de UX. O acordeão do Design System permite que várias seções sejam expandidas simultaneamente. Um ícone de sinal de angle-down ” é utilizado para indicar a ação “expandir e de “angle-up“ para recolher, embora toda a área de um item da lista seja clicável.\n\nO Acordeão do Design System permite que várias seções sejam expandidas simultaneamente. Um ícone de sinal de angle-down ” é utilizado para indicar a ação “expandir e de “angle-up“ para recolher, embora toda a área de um item da lista seja clicável."
      },
      {
        "title": "Tipos de Accordion",
        "level": 2,
        "content": "1 | Accordion Positivo\nO accordion positivo pode ser aplicado em sistemas e também no Portal Único. Ele se apresenta sobre background claro e se apresenta da seguinte forma:\n\n![Accordion Positivo](imagens/acordeao-positivo.png)\n\n1 | Accordion Negativo\nEle se apresenta sobre background escuro e se apresenta da seguinte forma:\n\n![Accordion Negativo](imagens/acordeao-negativo.png)"
      },
      {
        "title": "Estados do Accordion",
        "level": 2,
        "content": "Os estados dos accordion servem para dar feedback ao usuário sobre a intereção do usuário ao expandir, recolher, ou passar o mouse por cima de um item da lista.\n\nOs estados servem para dar feedback ao usuário sobre a interação do usuário ao expandir, recolher, ou passar o mouse por cima de um item da lista.\n\nO estado inicial do Accordion, como ele é exibido na interface. Acompanhado do ícone de expandir (angle-down) que indica ao usuário que há itens a serem clicados.\n\n**B | Ativo**\nAcontece quando o item está ativo/aberto/expandido. Nessa situação o texto fica semibold e assume cor Primary Darken 01. O ícone \"angle-down” é substituído pelo de “angle-up“ indicando ao usuário, que o clique nos elementos do item expandido terá a ação de esconder o conteúdo.\n\n**C | Hover**\nQuando o cursor do mouse está sobre o item a ser expandido ou recolhido. Nesse caso, o item recebe tratamento gráfico de hover, (um background azul claro aparece embaixo do item) sinalizando ao usuário a interação."
      },
      {
        "title": "Positivo",
        "level": 3,
        "content": "![Accordion Estados Positivo](imagens/acordeao-positivo-estados.png)"
      },
      {
        "title": "Negativo",
        "level": 3,
        "content": "Sobre background negativo o hover deve seguir o padrão gráfico sobre fundo escuro.\n\n![Accordion Estados Negativo](imagens/acordeao-negativo-estados.png)"
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tom de Voz do Accordion",
        "level": 3,
        "content": "O tom de voz do accordion é, essencialmente, como ele vai comunicar qual assunto se trata, deixando claro para o usuário que assunto ele vai encontrar em cada detalhamento dos itens.\n\nRecomenda-se, sempre que possível, a utilização de uma sentença, clara e sucinta, um resumo que determine de forma objetiva qual conteúdo será exibido. Evitar uso de siglas ou expressões que não são reconhecidas ao público em geral. **Não exceder uma linha de texto.** O detalhe de cada item deve aparecer quando o item for expandido."
      },
      {
        "title": "Formatação do Texto",
        "level": 3,
        "content": "Os textos dos itens foram formatados em letras minúsculas com a primeira letra maiúscula no estilo medium. Ao ser clicado o item passa a se apresentar no estilo semibold para informar ao usuário que aquele item está ativo."
      },
      {
        "title": "Alinhamento",
        "level": 3,
        "content": "Os itens aparecem separados por uma linha de contorno cinza e os ícones de retrair e expandir aparecem alinhados entre si à esquerda, antes do texto."
      },
      {
        "title": "1 | Accordion Positivo",
        "level": 4,
        "content": "![Accordion Positivo](imagens/acordeao-positivo-alinhamento.png)"
      },
      {
        "title": "2 | Accordion Negativo",
        "level": 4,
        "content": "![Accordion Positivo](imagens/acordeao-negativo-alinhamento.png)"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "Seguem as métricas definidas para os espaçamentos dos acordeões. Todas as medidas foram definidas com valores múltiplos de 4px.\n\n![Accordion Positivo](imagens/acordeao-negativo-espacamento.png)"
      },
      {
        "title": "Tipografia e Cor",
        "level": 3,
        "content": ""
      },
      {
        "title": "1 | Positivo",
        "level": 4,
        "content": "A cor da fonte deve seguir a cor do estado ativo, pois é importante criar essa uniformidade com os outros componentes ativos da interface.\n\n![Accordion Positivo](imagens/acordeao-positivo-alinhamento.png)"
      },
      {
        "title": "2 | Negativo",
        "level": 4,
        "content": "Por questões de acessibilidae, no accordion negativo a cor da fonte passa a ser Secondary 01 (branca), mas os estilos seguem o mesmo padrão adotado no positivo.\n\n![Accordion Positivo](imagens/acordeao-negativo-alinhamento.png)"
      }
    ],
    "accessibility": [],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/accordion/accordion.md"
    }
  },
  {
    "name": "Avatar",
    "slug": "avatar",
    "description": "Componente utilizado para representar graficamente um usuário em ambientes virtuais. Pode apresentar-se como ilustração vetorial (**avatar icônico**), texto (**avatar letra**) e fotografia (**avatar fotográfico**).",
    "documentationUrl": "https://www.gov.br/ds/components/avatar",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplos de avatares.](imagens/avatar-diretriz.png)\n*Exemplo de avatares.*\n\nUse avatar quando houver necessidade de representar visualmente um usuário no ambiente virtual, como acontece quando o usuário realiza *login*.\nPode ser utilizado também em qualquer situação em que seja necessário representar graficamente o usuário como em *chats* ou mensagens específicas."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome                     |                    Referência                    | Uso         |\n| --- | ------------------------ | :----------------------------------------------: | ----------- |\n| 1   | Superfície circular      | [Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n| 2   | Representação do usuário |                       ---                        | Obrigatório |\n\n![Anatomia do avatar.](imagens/avatar-anatomia.png)\n*Anatomia do avatar.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Superfície circular (Obrigatório)",
        "level": 3,
        "content": "A representação do usuário deve estar contida em uma superfície circular. A dimensão da superfície pode variar em uma escala de três dimensões que será melhor detalhado adiante.\n\n![Exemplos de dimensões do avatar.](imagens/superficie.png)\n*Variações da dimensão da superfície do avatar.*\n\nA superfície, nos casos dos avatares icônico e letra, podem assumir quaisquer cores da paleta cromática do Design System sendo sugerida a utilização das cores de apoio. Tenha em mente a garantia do contraste entre ícone/letra e superfície."
      },
      {
        "title": "2. Representação do usuário (Obrigatório)",
        "level": 3,
        "content": "A representação do usuário é como o usuário deseja ser reconhecido digitalmente. Há três maneiras de fazer isso:\n\n- Por um ícone do sistema;\n- Por uma foto escolhida pelo usuário;\n- Por um texto com a inicial do usuário."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Avatar Icônico",
        "level": 3,
        "content": "Este tipo de avatar pode ser usado quando o usuário não fez *upload* de imagem ou é logado pela primeira vez.\n\n![Exemplo de avatar icônico.](imagens/avatar-iconico.png)\n*Exemplo de avatar icônico.*\n\nA qualquer momento o usuário poderá alterar este avatar por qualquer um dos demais tipos."
      },
      {
        "title": "2. Avatar Fotográfico",
        "level": 3,
        "content": "O avatar fotográfico exibe uma foto escolhida pelo usuário para representá-lo digitalmente.\n\n![Exemplos de avatar fotográfico.](imagens/avatar-fotografico.png)\n*Exemplos de avatares fotográficos.*\n\nA qualquer momento o usuário poderá alterar este avatar por qualquer um dos demais tipos."
      },
      {
        "title": "3. Avatar Letra",
        "level": 3,
        "content": "O avatar letra mostra a inicial do usuário para representá-lo digitalmente.\n\n![Exemplos de avatar letra.](imagens/avatar-letra.png)\n*Exemplos de avatares letra.*\n\nA qualquer momento o usuário poderá alterar este avatar por qualquer um dos demais tipos."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Densidades",
        "level": 3,
        "content": "Existem três densidades de avatar:\n\n- **Densidade alta**: facilmente incorporado em uma lista de contatos e cenários repetitivos semelhantes;\n\n- **Densidade média**: apropriado para menus personalizados e visualizações;\n\n- **Densidade baixa**: adequado para páginas de perfil.\n\n![Exemplos de densidades do avatar.](imagens/avatar-scale.png)\n*Exemplos de densidades do avatar.*\n\n**Atenção:** Apesar das sugestões de uso citados acima, o designer ou desenvolvedor deve contar com bom senso ao optar pela dimensão que melhor se adapta ao *layout* planejado."
      },
      {
        "title": "2. Acionador Dropdown",
        "level": 3,
        "content": "Em algumas situações o *Avatar* pode ser utilizado como acionador *Dropdown*, geralmente quando há a necessidade de exibir algum detalhamento ou informação adicional a respeito do usuário representado neste. O usuário pode interagir sobre o *Avatar* com um `clique` ou `mouseover`, exibindo um elemento *Dropdown*. Observe o exemplo abaixo.\n\n![Avatar como Acionador Dropdown](imagens/avatar-trigger-01.png)\n*Avatar como Acionador Dropdown*\n\n**Importante!** Nesta situação, é opcional o uso de um identificador, reforçando a ideia que este elemento é um acionador *Dropdown*. Este identificador é posicionado à direita e centralizado verticalmente no *Avatar*. Consulte mais detalhes em *Padrões > Dropdown*.\n\n![Avatar com Identificador - Opcional](imagens/avatar-trigger-02.png)\n*Avatar com Identificador - Opcional*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- Dê a liberdade para o usuário escolher o avatar que melhor o representa e facilite o fluxo para a troca de imagem.\n\n- Quando não houver a foto pessoal o usuário poderá optar entre uma imagem neutra de um ícone de usuário ou a sua inicial.\n\n- Uma boa ideia é associar o avatar ao uso de *tooltip* para mostrar o nome completo e/ou outras informações do perfil que sejam relevantes."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Dimensão",
        "level": 3,
        "content": "| Name              | Property     | Token/Value |\n| ----------------- | ------------ | ----------- |\n| Superfície small  | width/height | `40px`      |\n| Superfície medium | width/height | `100px`     |\n| Superfície Large  | width/height | `160px`     |"
      },
      {
        "title": "Tipografia",
        "level": 2,
        "content": "| Name           | Property    |        Token/Value        |\n| -------------- | ----------- | :-----------------------: |\n| Letra          | family      |   `–-font-family-base`    |\n| Letra          | font-weight |   `--font-weight-bold`    |\n| Letra (small)  | size        | `--font-size-scale-up-03` |\n| Letra (medium) | size        | `--font-size-scale-up-07` |\n| Letra (large)  | size        | `--font-size-scale-up-11` |"
      },
      {
        "title": "Iconografia",
        "level": 2,
        "content": "| Name                             |               Ícone               |       Size       | Class (Font Awesome) |\n| -------------------------------- | :-------------------------------: | :--------------: | :------------------: |\n| Ícone (small)                    |    <i class=\"fas fa-user\"></i>    | `--icon-size-2x` |      `fa-user`       |\n| Ícone (medium)                   |    <i class=\"fas fa-user\"></i>    | `--icon-size-5x` |      `fa-user`       |\n| Ícone (large)                    |    <i class=\"fas fa-user\"></i>    | `--icon-size-8x` |      `fa-user`       |\n| Identificador Dropdown (Fechado) | <i class=\"fas fa-caret-down\"></i> | `--icon-size-2x` |   `fa-caret-down`    |\n| Identificador Dropdown (Aberto)  |  <i class=\"fas fa-caret-up\"></i>  | `--icon-size-2x` |    `fa-caret-up`     |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- É recomendado acessar o *avatar* via navegação por teclado, através da tecla `Tab`;\n\n- Quando o *avatar* for um elemento interativo, recomenda-se usar as teclas `Space` ou `Enter` para acioná-lo."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Verifique se o uso das cores em `cor de superfície` e `cor de leitura` no avatar do tipo letra correspondem às recomendadas no Fundamento Visual Cor, garantindo um contraste adequado para a leitura de usuários com deficiência visual ou daltonismo;\n\n- Utilize **tooltip** para indicar o nome completo e/ou outras informações do perfil que sejam relevantes para o usuário;\n\n- Use tamanhos de avatar adequados para torná-lo legível e distinguível em diferentes tamanhos de tela. É importante que o avatar seja grande o suficiente para ser facilmente identificado, mas não tão grande que obscureça outros elementos na tela.\n\n- Em dispositivos mobile, certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de `44px`;\n\n- Para o avatar tipo foto, permita que o usuário utilize as principais extensões de arquivo de imagem (jpg, gif, png) e limite o tamanho máximo da imagem (sugestão 1MB) para evitar que sobrecarregue o sistema."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Forneça um texto alternativo descritivo que descreva a imagem do avatar adicionando o atributo `alt`. Isso é útil para usuários que usam tecnologias assistivas, como leitores de tela;\n\n- Para o avatar do tipo icônico, recomenda-se usar o `aria-hidden = \"true\"` no ícone. Também é recomendado usar `aria-label = \"nome do usuário\"`, caso não seja possível usar essa informação em um *tooltip*;\n\n- Mantenha **sempre** habilitado o estado foco na configuração do navegador, para os elementos focados exibirem os recursos visuais próprios do estado."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Guia WCAG](https://guia-wcag.com/)\n- [Mayflower Design System](https://mayflower.digital.mass.gov/core/index.html?path=/docs/elements-buttons--button-primary)\n- [Carbon Design System](https://carbondesignsystem.com/components/button/accessibility)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/avatar/avatar.md",
      "accessibilityPath": "ds/componentes/avatar/avatar-access.md"
    }
  },
  {
    "name": "Breadcrumb",
    "slug": "breadcrumb",
    "description": "*Breadcrumb*, *Breadcrumb Navigation* ou *Breadcrumb Trail* (literalmente, navegação por migalhas de pão ou trilha de migalhas de pão, em alusão à história de João e Maria) é um sistema de navegação estrutural usado para proporcionar ao usuário um meio de localização dentro da estrutura de navegação do site ou sistema.",
    "documentationUrl": "https://www.gov.br/ds/components/breadcrumb",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente breadcrumb](imagens/diretriz.png)\n*Exemplo do componente breadcrumb.*\n\nUse *breadcrumb* para melhorar o SEO e para facilitar a identificação de onde o usuário se encontra na estrutura de navegação de um *website*. Esta funcionalidade não é recomendada para *websites* que não possuem um agrupamento ou hierarquia de usabilidade."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome                   |                     Referência                     | Uso         |\n| --- | ---------------------- | :------------------------------------------------: | ----------- |\n| 1   | Botão                  |    [Button](/ds/components/button?tab=designer)    | Obrigatório |\n| 2   | Separador              | [Iconografia](/ds/fundamentos-visuais/iconografia) | Obrigatório |\n| 3   | Link                   |     [Estados](/ds/fundamentos-visuais/estados)     | Obrigatório |\n| 4   | Título da página atual |  [Tipografia](/ds/fundamentos-visuais/tipografia)  | Obrigatório |\n\n![Anatomia do breadcrumb](imagens/anatomy.png)\n*Anatomia do componente breadcrumb.*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Padrão",
        "level": 3,
        "content": "O componente *breadcrumb* na forma padrão funciona de maneira única, listando a hierarquia de *links* da tela inicial à tela atual. Cada item do *breadcrumb* é um *link*, exceto o último, que define a tela atual em que o usuário se encontra. Ao clicar-se em qualquer *link* do *breadcrumb*, o usuário é direcionado à página correspondente. O botão terciário Home direciona sempre para a tela inicial.\n\n![Exemplo de breadcrumb padrão.](imagens/diretriz.png)\n*Exemplo do componente breadcrumb na sua forma padrão.*"
      },
      {
        "title": "2. Especial",
        "level": 3,
        "content": "Nos casos das resoluções de 4 colunas (dispositivos móveis), deve-se necessariamente optar pela forma **especial** de *breadcrumb*. Nesse formato o *breadcrumb* é apresentado sempre com todos os *links* deslocados para o menu, exceto a Página Atual.\n\n![Exemplo de breadcrumb no formato especial para uso em resolução de quatro colunas.](imagens/especial.png)\n*Exemplo do componente breadcrumb especial para resoluções de quatro colunas.*\n\nTambém é permitido utilizar o *breadcrumb* especial no lugar do padrão. Esta decisão deve ser tomada de acordo com o planejamento de arquitetura do produto mas, uma vez tomada a decisão, jamais poderá reverte-la em um mesmo produto."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": "A seguir, as recomendações de uso em cada tipo de *grid* que podem ser utilizados na maioria dos casos:\n\n1. **Grid de 12 colunas:** prefira o **tipo padrão**;\n2. **Grid de 8 colunas:** prefira o **tipo padrão** em conjunto com o comportamento de **truncamento** ou o tipo especial;\n3. **Grid de 4 colunas:** prefira o **tipo especial**;\n\n![Exemplos de comportamentos dos breadcrumbs de acordo com as grids.](imagens/responsividade.png)\n*Exemplos de comportamento do breadcrumb de acordo com tipo de grid.*\n\n**Atenção:** com a diminuição da resolução da tela o espaço disponível para o *breadcrumb*, em certos casos, pode ser insuficiente. A seguir é detalhado como proceder com a falta de espaço utilizando o recurso de truncamento nos textos."
      },
      {
        "title": "2. Truncamento",
        "level": 3,
        "content": "O *breadcrumb* pode ser truncado quando não há espaço suficiente para exibir todos os níveis da lista de localização atual ou como uma forma de gerenciar a relevância dos itens visíveis da localização atual em uma hierarquia profundamente aninhada. O truncamento de itens de *breadcrumb* começa quando não há espaço suficiente para exibir todos os itens ou se houver mais de cinco itens do *breadcrumb* a serem exibidos. Considere o botão terciário Home e o título como itens.\n\n![Exemplo do recurso de truncamento de breadcrumbs.](imagens/truncamento.png)\n*Exemplo do componente breadcrumb com recurso de truncamento.*\n\nNestes casos, os *links* intermediários são organizados em forma de **list dropdown** e são acionáveis pelo botão correspondente. Os itens são listados com a hierarquia ordenada de cima para baixo.\n\n![Exemplo do comportamento dos links truncados por meio de uma lista acionável pelo botão de pasta.](imagens/truncado.png)\n*Comportamento do componente breadcrumb com recurso de truncamento.*\n\n**Atenção:** **Não** faça truncamento dos seguintes itens: botão Home, última página ancestral e o Título da página atual.\n\n![Exemplos de como fazer e como não fazer o truncamento de links de breadcrumb](imagens/truncado-2.png)\n*Utilize o recurso de truncamento dos itens do breadcrumb conforme especificado.*\n\nEvite nomes de *links* muito grandes. Procure sempre que possível resumi-lo de modo que fique claro para o usuário o nome da tela a qual se refere.\n\nSe ainda assim o nome continuar grande, utilize o recurso de truncar parte do nome, conforme o exemplo abaixo:\n\n![Exemplo de truncamento do texto de links.](imagens/truncamento-link.png)\n*Não deixe os nomes dos links do breadcrumb demasiadamente grandes.*\n\n**Atenção:** utilize o componente *tooltip* para fornecer ao usuário o nome completo do *link* truncado.\n\nSinta-se livre para truncar os nomes da forma que melhor fizer sentido para o usuário.\n\nEste recurso pode ser usado também nos nomes dos *links* que estiverem dentro da *list dropdown*."
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- O Botão terciário Home deve estar sempre presente no *breadcrumb* (exceto no tipo especial) e direcionado para a tela inicial do *website* ou sistema.\n\n- O título do *breadcrumb* deve ser sempre a tela atual em que o usuário se encontra e deve estar em destaque (*semi bold*). Todos os demais elementos são interativos exceto os ícones separadores que possuem a função de separar os itens.\n\n- Posicione os *breadcrumb* no topo da página imediatamente abaixo do *header* e use de forma consistente em todas as telas do *website*.\n\n- *Breadcrumbs* geralmente são encontrados em *websites* que possuem uma grande quantidade de conteúdos organizados de forma hierárquica. Também é possível vê-los em aplicações *web* que têm mais de uma etapa, com uma função semelhante a de uma barra de progresso. No entanto, é um recurso opcional.\n\n- Não é aconselhável usar *breadcrumb* em *websites* que não têm agrupamento ou hierarquia lógica. Uma ótima maneira de determinar se um site se beneficiará com a navegação por *breadcrumb* é construir um mapa do *site* ou um diagrama representando sua arquitetura de navegação e analisar se o recurso melhora a capacidade do usuário de navegar dentro e entre as categorias.\n\n- *Breadcrumbs* devem ser considerados como um recurso extra e não deve substituir o menu principal do *website* ou aplicativo. É uma característica de conveniência, um regime secundário de navegação que permite aos usuários determinar onde se encontram e deve ser usado como uma forma alternativa ou um auxiliar de navegação.\n\n- *Breadcrumbs* podem trazer uma série de benefícios para os usuários, como:\n\n  - Dar a usuário um meio secundário de navegação em um *website*;\n  - Ao invés de usar o botão “Voltar” do navegador ou a navegação principal do site para voltar à página de nível superior, os usuários podem usar o *breadcrumb* para realizar a mesma ação com um menor número de cliques;\n  - Geralmente os *breadcrumbs* são em sentido horizontal e de estilo “*clean*” ocupando pouquíssimo espaço na página. A vantagem é que eles têm pouco ou nenhum impacto negativo em termos de sobrecarga de conteúdo;\n  - *Breadcrumbs* podem ser uma ótima maneira de atrair visitantes pela primeira vez para examinar um *website* depois de ter visto a página de destino. Por exemplo, digamos que um usuário chega a uma página através de uma pesquisa no *Google*, vendo um *breadcrumb*, este pode “seduzir” o visitante para as páginas de nível superior para visualizar os tópicos relacionados ao seu interesse. Isso reduz a Taxa de rejeição (*bounce rate*) do *website*."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name    | Size                        | Weight                 | Text-transform |\n| ------- | --------------------------- | ---------------------- | -------------- |\n| *Links* | `--font-size-scale-down-01` | `--font-weight-medium` | `uppercase`    |\n| Título  | `--font-size-scale-down-01` | `--font-weight-medium` | `uppercase`    |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name      |                ícone                 | Size             | Class (Font Awesome) |\n| --------- | :----------------------------------: | ---------------- | :------------------: |\n| Separador | <i class=\"fas fa-chevron-right\"></i> | `--icon-size-sm` |   fa-chevron-right   |"
      },
      {
        "title": "Botão Terciário",
        "level": 3,
        "content": "| Name         |                ícone                |       Size       | Class (Font Awesome) |\n| ------------ | :---------------------------------: | :--------------: | -------------------- |\n| Home         |     <i class=\"fas fa-home\"></i>     | `--icon-size-sm` | fa-home              |\n| Folder-plus  | <i class=\"fas fa-folder-plus\"></i>  | `--icon-size-sm` | folder-plus          |\n| Folder-minus | <i class=\"fas fa-folder-minus\"></i> | `--icon-size-sm` | folder-minus         |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name                     | Property   |      Color Token       |\n| ------------------------ | ---------- | :--------------------: |\n| *Links*                  | text color | `--blue-warm-vivid-70` |\n| Título                   | text color |      `--gray-80`       |\n| Botão Terciário Home     | icon       | `--blue-warm-vivid-70` |\n| Separador                | icon       |      `--gray-20`       |\n| Botão Terciário Expandir | icon       | `--blue-warm-vivid-70` |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name         | Property      | Type      |    Spacing Scale Token    |\n| ------------ | ------------- | --------- | :-----------------------: |\n| *breadcrumb* | `padding-top` | `Externo` | `--spacing-scale-default` |"
      },
      {
        "title": "Alinhamento",
        "level": 3,
        "content": "| Name  | Property           |  Spacing Horizontal Token   |\n| ----- | ------------------ | :-------------------------: |\n| right | spacing-horizontal | `--spacing-horizontal-left` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Os elementos interativos do *breadcrumb* devem ser acessados via navegação por teclado. Utilize a tecla `Tab` para avançar na navegação, a tecla `Shift + Tab` para retroceder na navegação e a tecla `Enter` para acionar os itens interativos;\n\n- A navegação por teclado deve percorrer todos os elementos interativos do *breadcrumb*, sejam links ou botões. O último elemento é o texto da página atual e não há navegação nele;\n\n- A navegação por teclado **não** deve percorrer os ícones decorativos `chevron-right`;\n\n- Quando houver truncamento do *breadcrumb*, com o uso do botão `folder-plus`, este deve seguir a ordem do fluxo de tabulação;\n\n- Deixe claro para o usuário que existe a opção de abrir o menu flutuante quando a navegação passar pelo botão `folder-plus`;\n\n- Quando o menu flutuante for acionado por meio da tecla `Enter`, o fluxo de navegação deve percorrer os itens do menu e retornar ao fluxo principal dos elementos do *breadcrumb*."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- O uso do *breadcrumb* atende a um princípio importante da acessibilidade que é a localização, portanto este deve estar visível e bem posicionado no topo da página de forma que possa ser facilmente utilizado por qualquer pessoa;\n\n- A página atual ou último elemento do *breadcrumb*, não deve ser considerado um link, portanto deve possuir a formatação visual correspondente a um texto comum;\n\n- Para textos muito longos utilize o recurso de truncamento, adicionando reticências ao final do texto e o auxílio de um *tooltip* para visualização do texto completo;\n\n- Também utilize o *tooltip* no caso de uso do botão `folder-plus`, responsável por abrir o menu flutuante;\n\n- Em dispositivos mobile, certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de 44px."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Recomenda-se implementar os elementos interativos do *breadcrumb* como itens de lista não ordenada - `<ul>` e `<li>` - para que os leitores de tela possam fornecer mais contexto;\n\n- Utilize o recurso de `aria-label` para identificar os botões `home` e `folder-plus` respectivamente como `Página Inicial` e `Abrir menu flutuante`."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Carbon Design System](https://carbondesignsystem.com/components/breadcrumb/accessibility)\n- [Guia WCAG](https://guia-wcag.com/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/breadcrumb/breadcrumb.md",
      "accessibilityPath": "ds/componentes/breadcrumb/breadcrumb-access.md"
    }
  },
  {
    "name": "Button",
    "slug": "button",
    "description": "Os botões são elementos interativos da interface, que permitem que os usuários acessem funcionalidades, executem ações ou naveguem pela interface.",
    "documentationUrl": "https://www.gov.br/ds/components/button",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo Botão](imagens/button-description.png)\n*Exemplo de botões disponíveis no Design System*\n\nUtilize botões quando for necessário realizar ações contendo as seguintes características:\n\n- Reconhecimento imediato de uma ação interativa.\n- Ações que precisam de ênfases diversificadas.\n- Promover maior destaque das ações.\n- Possibilidade de utilizar tanto elemento visuais como textuais de forma consistentes.\n- Uso de *feedbacks* visuais variados e objetivos.\n- Gerar uma ou mais opções de escolha.\n\n**Importante:** Os botões devem ser usados conforme a necessidade de interação do usuário com a interface. Sendo assim, ao se projetar uma interface deve-se planejar o posicionamento dos botões de forma estratégica, prevendo a eficiência na comunicação e levando o olhar do usuário ao local desejado. Também é necessário definir o grau de importância e hierarquia das ações através do uso correto dos tipos de botões."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome       |                          Referência                           | Uso         |\n| --- | ---------- | :-----------------------------------------------------------: | ----------- |\n| 1   | Ícone      | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 2   | Rótulo     |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Obrigatório |\n| 3   | Superfície |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n\n![Exemplo Anatomia](imagens/button-anatomy.png)\n*Anatomia completa do componente button*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Ícone (Opcional)",
        "level": 4,
        "content": "O ícone no botão do tipo padrão é um elemento opcional e deve ser usado quando houver uma necessidade de enfatizar visualmente a ideia da ação.\n\n![Exemplo tipo padrão com ícone.](imagens/button-behaviour-icons-1.png)\n*Uso do ícone no botão padrão*\n\nNos botões do tipo circular a utilização é obrigatória, visto que a mensagem da ação é transmitida apenas pelo ícone.\n\n![Exemplo tipo circular.](imagens/button-behaviour-icons-2.png)\n*Uso do ícone no botão circular*"
      },
      {
        "title": "2. Rótulo (Obrigatório)",
        "level": 4,
        "content": "O rótulo é um elemento obrigatório. A exceção ocorre na versão tipo circular uma vez que não existe rótulo.\n\n![Exemplo rótulo](imagens/button-description.png)\n*Diferente do botão padrão. O tipo circular não possui rótulo*"
      },
      {
        "title": "Tamanho dos Rótulos",
        "level": 4,
        "content": "Naturalmente as palavras usadas nos rótulos variam bastante de tamanho. O ideal é que seja utilizado apenas uma ou duas palavras no máximo. Deve-se evitar usar três ou mais palavras no rótulo. Nunca utilize quebra de linhas no rótulo_do botão.\n\n![Exemplo de tamanhos de rótulos.](imagens/button-label.png)\n*Boas práticas no uso de rótulos*\n\n**Importante:** o crescimento do botão deve acompanhar o tamanho do rótulo, porém as margens internas devem ser respeitadas."
      },
      {
        "title": "Tom e Voz nos Rótulos",
        "level": 5,
        "content": "O tom e voz utilizado no rótulo é, essencialmente, como ele vai comunicar a sua ação. Deve estar alinhado com o tom de voz da sua marca, além de orientar de forma clara qual ação esperada.\n\nQuando houver a necessidade da criação de um botão, é esperado que este informe qual a sua ação, reduzindo ao máximo falsas expectativas e dúvidas aos usuários.\n\nRecomenda-se, sempre que possível, a utilização de verbos de **ação no infinitivo**.\nEx.: “Entrar” , Cancelar”, “Cadastrar”, “Anexar”, etc."
      },
      {
        "title": "3. Superfície (Obrigatório)",
        "level": 4,
        "content": "A Superfície é um elemento obrigatório e tem aparência distinta dependendo do tipo utilizado.\n\nEm algumas situações, a superfície pode ter a opacidade de 0%, desta forma permite-se preservar a área de proteção do botão, assim como a área de *touch*.\n\n![Exemplo superfícies de botão](imagens/button-container.png)\n*Diferentes possibilidades de superfícies nos botões*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "Existem 2 tipos de botões no Design System: **Botão Padrão** e o **Botão Circular**."
      },
      {
        "title": "1. Botão Padrão",
        "level": 3,
        "content": "É o tipo mais comum de botão, onde a ação é comunicada ao usuário através do **rótulo do botão**. Neste tipo pode-se utilizar os ícones para dar maior clareza à ação transmitida ao usuário.\n\n![Exemplo de botão padrão.](imagens/button-types-01.png)\n*Exemplo de botão padrão*"
      },
      {
        "title": "2. Botão Circular",
        "level": 3,
        "content": "Podem servir para pequenas ações auxiliares dentro da interface até ações de maior importância. O objetivo pode ser bem diverso. Geralmente este tipo de botão é muito usado dentro de outros componentes ou em situações onde a representação do ícone é suficiente para transmitir a mensagem ao usuário.\n\n![Exemplo botão circular.](imagens/button-types-02.png)\n*Exemplo de botão circular*"
      },
      {
        "title": "Ênfases",
        "level": 2,
        "content": "Tendo em vista que existem níveis de importância e destaque que devem ser atribuídos aos elementos de interface e ações na tela, as ênfases utilizadas nos botões existem com a finalidade de proporcionar hierarquia visual a esses elementos e ações. Desta forma, os botões mudam de aparência conforme a ênfase utilizada.\n\nPara cada tipo de botão, existem 3 opções de ênfase. Por ser uma característica visual, a hierarquia da ênfase pode alterar de acordo com aplicação do componente sobre um fundo claro ou escuro.\n\n![Exemplo de ênfases nos botões](imagens/button-emphasis.png)\n*Exemplo de ênfases nos tipos padrão e circular*"
      },
      {
        "title": "1. Ênfase Primária",
        "level": 3,
        "content": "É utilizada em botões que possuem maior importância ou prioridade. Utilizados com maior frequência, devem ser aplicados em ações cruciais da tela, informando ao usuário sua importância.\n\nPor exemplo, em um formulário quando houver a ação \"salvar\" e \"cancelar\", espera-se que após preencher os campos, o usuário deseje salvar suas alterações, sendo assim, a cor do botão salvar deve se destacar da cor do botão cancelar (que é a ação menos esperada).\n\nUtilize de forma limitada. Somente em ações estratégicas, voltadas para o objetivo principal de uma tela.\n\n![Exemplo de ênfases nos botões primários em fundo claro e escuro.](imagens/button-emphasis-pri.png)\n*Exemplo de Ênfase Primária aplicada no fundo claro e escuro*"
      },
      {
        "title": "2. Ênfase Secundária",
        "level": 3,
        "content": "É utilizada nos botões com importância intermediária. É usada ​​para dar uma importância menor que os botões de ênfase primária. Aparecem muitas vezes ao lado dos botões de ênfase primária, porém as ações a que se destinam realizar são menos esperadas de serem acessadas pelo usuário do que as ações representadas pelos botões de ênfase primária.\n\nUtilize para ações que não sejam voltadas para o objetivo principal de uma página.\n\n![Exemplo de ênfases nos botões secundários em fundo claro e escuro.](imagens/button-emphasis-sec.png)\n*Exemplo de ênfase secundária aplicada no fundo claro e escuro*"
      },
      {
        "title": "3. Ênfase Terciária",
        "level": 3,
        "content": "É usada em botões de baixa importância.\n\nUtilize para ações de múltiplas escolha, opcionais e de suporte.\n\n![Exemplo de ênfases nos botões terciários em fundo claro e escuro.](imagens/button-emphasis-ter.png)\n*Exemplo de ênfase terciária aplicada no fundo claro e escuro*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Bloco",
        "level": 3,
        "content": "Os botões padrões podem utilizar o comportamento bloco para alterar sua largura, ocupando todo o espaço disponível na superfície (seja dentro de um outro componente ou de um determinado lugar da *grid*).\n\nNeste comportamento, o botão \"empurra\" qualquer outro elemento existente para outro espaço disponível.\n\n![Exemplo do comportamento bloco.](imagens/button-behaviour-bloco.png)\n*Exemplo 1: Sem o comportamento bloco;*\n*Exemplo 2: Com o comportamento Bloco*\n\nEm dispositivos por toque, seu uso é altamente recomendado por facilitar o acesso aos botões importantes da interface.\n\n**Atenção:**\n\n- Somente os botões tipo padrão possuem esse comportamento,\n- Pode ser utilizado em outros tipos de *grid*, porém, de forma cautelosa.\n- Pode ser utilizado em conjunto com qualquer tipo de densidade ou ênfase.\n- Pode existir, na mesma tela, botões sem ou com o comportamento bloco.\n\nAbaixo, exemplos de possibilidades de uso desse comportamento (mas não necessariamente boas práticas de uso).\n\n![Possibilidades do comportamento bloco](imagens/button-behaviour-responsive-grid-4-colunas.png)\n*Exemplo 1: botões usando toda a extensão da grid (uso recomendado para dispositivos por toque);*\n*Exemplo 2: botões organizados por colunas;*\n*Exemplo 3: comportamentos variados em uma mesma tela.*"
      },
      {
        "title": "2. Densidade",
        "level": 3,
        "content": "Para dar maior flexibilidade em composição de tela ou até mesmo refinar o \"peso\" visual dos botões na tela, é utilizado o recurso da densidade nos botões. O ajuste da densidade consiste em aumentar ou reduzir os espaçamentos internos do botão de forma a deixá-los mais compactos ou mais expandidos em seu formato.\n\nPara isto, o Design System utiliza três níveis de densidade:\n\n- **Densidade baixa:** O botão tem sua altura aumentada.\n- **Densidade padrão:** É a forma padrão do componente button.\n- **Densidade alta:** O botão tem sua altura reduzida.\n\n![Exemplo de densidades botão.](imagens/button-behaviour-density.png)\n*Exemplo de densidades aplicada ao botão*\n\n**Importante:** é importante observar que o rótulo do botão e o ícone permanecem sempre centralizados tanto na largura quanto na altura, e seus tamanhos inalterados. Também permanece inalterado o espaçamento entre o rótulo e o ícone.\n\nNos botões de tipo circular ocorre o incremento na altura e largura do botão de densidade baixa e redução na altura e largura do botão de densidade alta.\n\n![Exemplo densidade botão circular.](imagens/button-behaviour-density-1.png)\n*Exemplo de densidades aplicada ao botão circular*\n\nConsulte as informações dos valores dos espaçamentos e alturas na seção *Design Tokens*."
      },
      {
        "title": "3. Posicionamento",
        "level": 3,
        "content": "Tendo em vista a utilização das diferentes ênfases nos botões com o intuito de manter uma hierarquia visual na interface, é necessário posicioná-los de forma coerente em relação ao grau de importância de cada um dessas ênfases.\n\nDeve-se seguir o seguinte princípio: a **ênfase de maior relevância** deverá vir sempre à **direita**.\n\n![Exemplo Posicionamento de botão ênfase primária, secundária e terciária.](imagens/button-behaviour-position-1.png)\n*Por exemplo, quando três botões com ênfases diferentes forem utilizados juntos, o botão com ênfase primária será posicionado à direita e em sequência o de ênfase secundária e terciária*\n\n![Exemplo Posicionamento de botão com ênfase primária e secundária.](imagens/button-behaviour-position-2.png)\n*O mesmo ocorre quando houver apenas o botão de ênfase primária e o de ênfase secundária juntos*\n\n![Exemplo Posicionamento de botão ênfase secundária e terciária.](imagens/button-behaviour-position-3.png)\n*Quando estiverem juntos apenas o botão de ênfase secundária e o de ênfase terciária, o de ênfase secundária será posicionado à direita*\n\n![Exemplo Posicionamento 4](imagens/button-behaviour-position-4.png)\n*Com os botões de ênfase primária e terciária segue-se o mesmo princípio*\n\nQuando a disposição da tela permitir que os botões apareçam posicionados verticalmente, o botão mais relevante virá posicionado mais abaixo.\n\n![Exemplo posicionamento de botão com maior ênfase acima do de menor ênfase.](imagens/button-behaviour-position-5.png)\n*Exemplo de posicionamento em resoluções menores*"
      },
      {
        "title": "4. Comportamento Toggle",
        "level": 3,
        "content": "O comportamento *toggle* permite a alternância dos rótulos e/ou ícones internos ao botão, de forma a transmitir ações opostas ou vinculadas entre si.\n\nNeste comportamento, após o clique do usuário no botão, o rótulo ou ícone alterna para a ação oposta. Ao ser efetuado um novo clique no mesmo botão, o rótulo ou ícone alterna para ação inicial, e assim por diante.\n\n![Exemplo comportamento toggle no Botão.](imagens/button-behaviour-toggle.png)\n*Exemplos de uso do toggle*"
      },
      {
        "title": "5. Loading",
        "level": 3,
        "content": "É um comportamento opcional. O componente *loading* aparece apenas quando o botão se encontra no estado *progress*. Esta situação ocorre quando existe a necessidade de mostrar ao usuário o progresso da requisição dentro do próprio botão após a interação.\n\n![Exemplo botão com loading.](imagens/button-progress-1.png)\n*Uso do loading nos botões*\n\n![Exemplo botão com loading.](imagens/button-progress-2.png)\n*Neste estado todo o conteúdo do botão é substituído pelo componente loading*"
      },
      {
        "title": "6. Área de Proteção",
        "level": 3,
        "content": "Quando o botão estiver próximo a algum outro componente, mantenha um espaçamento mínimo para que a o botão seja notado na tela e que sua área de interação não se confunda com as de outros componentes.\n\n![Área de proteção no botão.](imagens/button-spacing.png)\n*Exemplos área de proteção no botão*\n\nUtilize algum espaçamento da escala de **layout**, listado no Fundamento Espaçamento, de forma consistente ao longo de sua interface."
      },
      {
        "title": "7. Estados",
        "level": 3,
        "content": "Os estados dos botões são úteis para dar *feedback* ao usuário sobre as ações que ocorrem quando houver uma interação com o botão. Abaixo listamos os estados do componente *button* e suas características em fundo claro e escuro:"
      },
      {
        "title": "Interativo",
        "level": 4,
        "content": "![Exemplo de estados interativos dos botões.](imagens/button-behavior-states-interactive.png)\n*O estado padrão do botão, como ele é exibido naturalmente na interface*"
      },
      {
        "title": "Hover",
        "level": 4,
        "content": "![Exemplo de estados hover dos botões.](imagens/button-behavior-states-hover.png)\n*O estado quando o cursor do mouse está sobre o botão, indica ao usuário que se trata de um elemento interativo*"
      },
      {
        "title": "Pressionado",
        "level": 4,
        "content": "![Exemplo de estados pressionado dos botões.](imagens/button-behavior-states-pressed.png)\n*Acontece quando se clica num botão ou se mantém o clique*"
      },
      {
        "title": "Desabilitado",
        "level": 4,
        "content": "![Exemplo de estados desabilitado dos botões.](imagens/button-behavior-states-disable.png)\n*Botões desabilitados indicam ao usuário que o botão está inacessível no momento*"
      },
      {
        "title": "Ativado",
        "level": 4,
        "content": "![Exemplo de estados ativado dos botões.](imagens/button-behavior-states-activated.png)\n*Este estado ocorre quando um botão, de um conjunto de opções, é ativado. Assim, o botão se mantém \"marcado\"*"
      },
      {
        "title": "Progresso",
        "level": 4,
        "content": "![Exemplo de estados de progresso dos botões.](imagens/button-behavior-states-progress.png)\n*O estado que indica que uma ação ainda está acontecendo. Muito utilizado quando a tela demora um pouco para exibir os dados. Importante para dar feedback ao usuário sobre o que está acontecendo*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name            | Size                      | Weight                    | Text-transform |\n| --------------- | ------------------------- | ------------------------- | :------------: |\n| Rótulo (Padrão) | `--font-size-scale-up-01` | `--font-weight-semi-bold` |     `none`     |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name             | Size               |\n| ---------------- | ------------------ |\n| Ícone (Padrão)   | `--icon-size-base` |\n| Ícone (Circular) | `--icon-size-base` |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name                                      |     Property     | Color Token            | Opacidade |\n| ----------------------------------------- | :--------------: | ---------------------- | :-------: |\n| Ícone, Rótulo (Primária)                  |    text color    | `--pure-0`             |     -     |\n| Ícone, Rótulo (Primária - Fundo Escuro)   |    text color    | `--blue-warm-vivid-90` |     -     |\n| Ícone, Rótulo (Secundária)                |    text color    | `--blue-warm-vivid-70` |     -     |\n| Ícone, Rótulo (Secundária - Fundo Escuro) |    text color    | `--blue-warm-vivid-20` |     -     |\n| Ícone, Rótulo (Terciária)                 |    text color    | `--blue-warm-vivid-70` |     -     |\n| Ícone, Rótulo (Terciária - Fundo Escuro)  |    text color    | `--blue-warm-vivid-20` |     -     |\n| Superfície (Primária)                     | background color | `--blue-warm-vivid-70` |     -     |\n| Superfície (Primária - Fundo Escuro)      | background color | `--blue-warm-vivid-20` |     -     |\n| Superfície (Secundária)                   | background color | `--pure-0`             |     -     |\n| Superfície (Secundária - Fundo Escuro)    | background color | `--blue-warm-vivid-90` |     -     |\n| Superfície (Terciária)                    |        -         | -                      |   `0%`    |\n| Superfície (Secundária)                   |   border color   | `--blue-warm-vivid-70` |     -     |\n| Superfície (Secundária- Fundo Escuro)     |   border color   | `--blue-warm-vivid-20` |     -     |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name                                     | Height |   Width    |\n| ---------------------------------------- | :----: | :--------: |\n| Superfície (Padrão - Densidade Baixa)    | `48px` | `variável` |\n| Superfície (Padrão - Densidade Padrão)   | `40px` | `variável` |\n| Superfície (Padrão - Densidade Alta)     | `32px` | `variável` |\n| Superfície (Circular - Densidade Baixa)  | `48px` |   `48px`   |\n| Superfície (Circular - Densidade Padrão) | `40px` |   `40px`   |\n| Superfície (Circular - Densidade Alta)   | `32px` |   `32px`   |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name       |          Property           |     Spacing Token      |\n| ---------- | :-------------------------: | :--------------------: |\n| Ícone      |        margin-right         | `--spacing-scale-base` |\n| Superfície | padding-right, padding-left |  `--spacing-scale-3x`  |"
      },
      {
        "title": "Arredondamento",
        "level": 3,
        "content": "| Name                | Property      | Value                    |\n| ------------------- | ------------- | ------------------------ |\n| Superfície (Padrão) | border-radius | `--surface-rounder-pill` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- É recomendado que os botões possam ser acessados via navegação por teclado através da tecla `Tab` e possam ser acionados por meio da tecla `Space` ou `Enter`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Verifique o uso das cores em `cor de superfície` e `cor de leitura` no botão se correspondem às recomendadas na diretriz de design, garantindo um contraste adequado para uma boa acessibilidade;\n\n- Quando utilizar botões com apenas ícones, certifique-se de exibir a informação do rótulo através do *tooltip* ao passar o mouse ou focar no botão;\n\n- Em dispositivos mobile utilize ícones fortemente semânticos, aqueles que tragam um entendimento imediato aos usuários. Como estes dispositivos não possuem o recurso de *tooltip* com uso do `hover`, o uso de ícones mais conhecidos pode amenizar esta limitação. Veja algumas recomendações de ícones no [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia);\n\n- Em dispositivos mobile, certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de `44px`."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Recomenda-se utilizar a tag `<button>` como marcação semântica para construção do componente, apesar de existirem alternativas como `<a>` ou `<input type=\"button\">`;\n\n- Mantenha **sempre** habilitado o estado foco na configuração do navegador, para os elementos focados exibirem os recursos visuais próprios do estado;\n\n- Caso seja utilizado um ícone decorativo, aquele que é usado como apoio ao lado do rótulo do botão, utilize `aria-hidden=true` e não utilize atributo `title`, evitando que os leitores de tela leiam duas vezes a mesma informação;\n\n- Ao utilizar botões com apenas ícones, certifique-se de usar os atributos `title` ou `aria-label`;\n\n- Caso sejam utilizados links `<a>` com formato de botão, recomenda-se configurá-los para aceitar a tecla `Space` como acionadora, visto que os links são ativados por padrão pela tecla `Enter`;\n\n- Para botões com ações de alternância, utilize `aria-pressed` alternando seu valor entre `true` e `false` ou alternância de rótulo com texto que seja significativo para o entendimento do usuário (por exemplo: Expandir / Retrair)."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Guia WCAG](https://guia-wcag.com/)\n- [Mayflower Design System](https://mayflower.digital.mass.gov/core/index.html?path=/docs/elements-buttons--button-primary)\n- [Carbon Design System](https://carbondesignsystem.com/components/button/accessibility)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/button/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/button/button.md",
      "accessibilityPath": "ds/componentes/button/button-access.md"
    }
  },
  {
    "name": "Card",
    "slug": "card",
    "description": "*Cards* são cartões (ou superfícies) que contêm conteúdo e ações diversas sobre um único assunto (ou tópico).",
    "documentationUrl": "https://www.gov.br/ds/components/card",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente card.](imagens/diretriz.png)\n*Exemplo do componente card.*\n\nOs *cards* devem ser fáceis de verificar informações relevantes e acionáveis. Elementos, como texto e mídias, devem ser colocados sobre eles de maneira a indicar claramente a hierarquia. Podem ser bastante simples (contendo apenas um componente) ou complexos (contendo vários componentes).\n\n![Exemplo Uso](imagens/uso.png)\n*Exemplo de card simples e card complexo.*"
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "Para construir um *card* é necessária uma superfície branca com sombra e uma área com no mínimo um conteúdo contido.\n\n| ID  | Nome       |                    Referência                    | Uso         |\n| --- | ---------- | :----------------------------------------------: | ----------- |\n| 1   | Superfície | [Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n| 2   | Área       |                       ---                        | Obrigatório |\n\n![Exemplo anatomia do componente card.](imagens/anatomy.png)\n*Anatomia do componente card.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Superfície (Obrigatório)",
        "level": 3,
        "content": "São formas indivisíveis que podem conter um ou mais elementos definidas que apresentam informações em detalhes sobre algo. Nele, você pode dispor suas informações como desejar, com links, imagens e outros elementos."
      },
      {
        "title": "2. Área (Obrigatório)",
        "level": 3,
        "content": "Podemos dividir a área da superfície do *card* em três áreas distintas (ou blocos) que podem conter determinados componentes:\n\n**1. Área de títulos:** exclusivo para títulos, subtítulos, ícones, avatares e *tags*.\n\n**2. Área de conteúdo:** qualquer componente é aceitável, exceto componentes relacionados à navegação, como: carrossel, paginação, abas e menu.\n\n**3. Área de ações:** exclusivo para botões e *links*.\n\n![Exemplo de áreas do componente card.](imagens/areas.png)\n*Exemplo de áreas do componente card.*\n\n**Atenção:** embora as áreas mencionadas sejam apresentadas em uma ordem lógica, é permitida a criação de *cards* em que as áreas sejam utilizadas em qualquer ordem ou até mesmo a não utilização das três áreas. Isso permite que os *cards* sejam componentes totalmente customizáveis e adaptáveis a diversos *layouts*."
      },
      {
        "title": "Layout e Estrutura",
        "level": 2,
        "content": "Como explicado anteriormente, o componente *card* pode ser simples ou complexo, de acordo com o número de componentes utilizados na sua composição. Por isso, é bastante flexível, no entanto alguns cuidados devem ser observados.\nA seguir, são apresentadas algumas regras para orientação na criação dos *cards*:"
      },
      {
        "title": "1. Blocos formatados",
        "level": 3,
        "content": "A fim de facilitar a criação dos *cards*, o *Design System* já disponibiliza blocos pré-formatados das três áreas que compõe um *card* (título, conteúdo e ação). Fica muito fácil juntar as partes e montar um *card* do zero sem se preocupar com regras de diagramação.\n\n![Exemplo regra construção.](imagens/regra-construcao.png)\n*Exemplo de construção de um card a partir de blocos isolados.*\n\n**Atenção 1:** o *Design System* oferece inicialmente um *kit* de cinco blocos formatados para cada uma das áreas do *card*. Conforme a necessidade, este kit poderá ser atualizado e expandido.\n\n**Atenção 2:** recomendamos a utilização dos blocos formatados pois é garantida que todas as regras de composição descritas neste guia estão sendo respeitadas. Caso os blocos formatados não atendam uma necessidade específica, um *card* pode ser construído do zero respeitando as regras e orientações deste *Design System*. Também é possível utilizar os blocos como base e alterar os elementos neles contidos.\n\n![Exemplo blocos formatados.](imagens/blocos-formatados.png)\n*Exemplos de possibilidades de formatação de blocos.*\n\n**Atenção:** os blocos formatados são transparentes. Eles foram acrescentados com fundo branco na ilustração acima meramente para facilitar a visualização."
      },
      {
        "title": "2. Margens",
        "level": 3,
        "content": "Os componentes dentro dos *cards* devem respeitar as margens definida nos *tokens* entre cada um dos lados da superfície. Na imagem abaixo podemos perceber que a área branca é a área em que os componentes estão contidos.\n\n![Exemplo de margens em um card.](imagens/margens.png)\n*Exemplo de margens em um card.*\n\n**Exceção 1:** alguns componentes podem \"sangrar\" (extrapolar) os limites do *card*, como por exemplo: mídias (fotografias, ilustrações, vídeos) e *tags*.\n\n**Exceção 2:** em *cards* com dimensões mais reduzidas os ícones ou botões terciários podem estar mais próximos das margens de acordo com a definição nos *tokens*.\n\nNeste exemplo, pode-se ver um ícone (vermelho) respeitando uma margem menor. Um componente genérico (azul), respeitando a margem padrão. E uma imagem (verde) \"sangrando\".\n\n![Exemplo de tipos de margens.](imagens/margens-2.png)\n*Exemplo do uso de tipos de margens em um card.*\n\nOs *cards* devem possuir ainda uma **área de respiro**, isto é, o espaço mínimo entre dois *cards* ou qualquer outro componente próximo.\n\n![Exemplo de área de respiro.](imagens/area-respiro.png)\n*Exemplo da aplicação da área de respiro.*"
      },
      {
        "title": "3 - Dimensões",
        "level": 3,
        "content": "As dimensões da **área de conteúdo** do *card* podem ter dois comportamentos distintos, conforme a necessidade do *layout*:\n\n- Flexível;\n- Fixa."
      },
      {
        "title": "Fixa",
        "level": 4,
        "content": "É definida pelo *design* e não importando a quantidade de conteúdo que a área possua. Se as dimensões forem maiores que a quantidade de conteúdo, haverá espaços vazios no *card*. Se as dimensões forem menores que a quantidade de conteúdo, haverá *content overflow*.\n\n![Exemplo altura fixa](imagens/altura-fixa.png)\n*Exemplos de cards com variadas quantidades de conteúdo e alturas das áreas de conteúdo fixas.*\n\n**Atenção:** esse caso é mais recomendado quando se quer padronizar o tamanho de vários *cards* que se relacionam entre si no *layout* evitando desnivelamento das dimensões."
      },
      {
        "title": "Flexível",
        "level": 4,
        "content": "É determinada pelo conteúdo contido no *card*. Quanto maior o conteúdo, maiores as dimensões da área de conteúdo do *card*.\n\n![Exemplo altura flexível](imagens/altura-flex.png)\n*Exemplos de cards variando a área de conteúdo resultando em cards com diferentes alturas.*\n\n**Atenção:** esse caso é mais recomendado quando não se tem o controle do conteúdo do *card* e a suas dimensões não influem no *layout*.\n\nJá a largura do *card* deve estar preferencialmente contida na *grid*.\n\n![Exemplo dimensões](imagens/larguras.png)\n*Exemplos de larguras possíveis para cards.*\n\n**Atenção 1:** a largura mínima permitida são três colunas. Não há largura máxima, porém, deve-se avaliar a real necessidade de um *card* excessivamente grande.\n\n**Atenção 2:** devida a largura de tela reduzida dos dispositivos móveis, um *card* deve estar localizado sempre abaixo de outro (nunca ao lado) respeitando a distância da área de respiro."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": "*Cards* podem possuir diversos comportamentos próprios. A seguir, listamos os mais usuais:"
      },
      {
        "title": "1. Conteúdos Ocultos",
        "level": 3,
        "content": ""
      },
      {
        "title": "Expandindo",
        "level": 4,
        "content": "Uma maneira de adicionar informações no *card* sem necessitar alterar suas dimensões é por meio do recurso de expansão. Ao clicar no botão terciário \"expandir\", uma superfície complementar do *card* é apresentada com mais informações relacionadas. É bastante útil quando for necessário apresentar informações complementares que não necessitem estar visíveis e podem ser acionadas com um simples clique.\n\n![Exemplo de uso do comportamento de expansão.](imagens/expandir.png)\n*Exemplo de uso do comportamento de expansão nos cards.*\n\nUm *card* em hipótese alguma deve possuir rolagens. O *card* é flexível o suficiente para se adequar à quantidade de conteúdo necessário.\n\n**Atenção:** use este recurso com moderação. Avalie se realmente é necessário. lembre-se sempre do **Princípio da Simplicidade** ao se projetar um *card*."
      },
      {
        "title": "Alternando",
        "level": 4,
        "content": "Os *cards* podem comportar algum tipo de conteúdo adicional no seu verso, geralmente um texto complementar.\nEsse recurso é útil quando é necessário destacar uma informação mais relevante e vincular informações complementares menos relevantes.\n\n![Exemplo do comportamento flip.](imagens/verso.png)\n*Exemplo de conteúdo oculto acionado por um clique no card.*\n\nÉ interessante utilizar recursos de movimento para alterar o conteúdo do *card* como um efeito de giro (*flip*) ou efeito de *fade in/fade out*. Considere utilizar um elemento identificador (ícone ou *button*, por exemplo) para reforçar a existência de conteúdos ocultos, caso contrário o mesmo poderá passar despercebido pelo usuário. Esta ação pode ser provocada pelo clique no elemento identificador ou no próprio *card*, dependendo do projeto e respeitando as regras de usabilidade e acessibilidade.\n\n**Atenção:** pode ser interessante utilizar uma cor de fundo diferente para o conteúdo oculto do *card* para facilitar o entendimento de que se trata de outra área de conteúdo acionada. Neste caso, esteja atento para o contraste entre fundo e conteúdo.\n\nPara mais detalhes dos tipos de movimento que podem ser utilizados, consulte o documento Fundamentos > Movimento."
      },
      {
        "title": "2. Estados",
        "level": 3,
        "content": "Os *cards* podem apresentar apenas os estados: **desabilitado**, **arrastando** e **hover**. Todos os componentes contidos devem herdar o mesmo comportamento do *card*.\n\n![Exemplo estados nos cards.](imagens/estados.png)\n*Exemplo do uso dos estados nos cards.*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "Quando se usa *cards* tudo parece limpo e arrumado, pois ele possui a finalidade de melhorar o engajamento, organizar bem o conteúdo e ajudar os usuários a entender rapidamente uma página.\n\nA seguir são enumerados alguns princípios que devem ser considerados na criação dos *cards*:\n\n1. **Simplicidade:**\n   Como o *card* pode conter vários elementos distintos, é necessário ter cuidado para que sejam sobre um único assunto. Isso permite que os usuários selecionem a parte do conteúdo que desejam consumir, compartilhar ou interagir.\n\n2. **Independente**\n   Um *card* pode ficar sozinho, sem depender dos elementos circundantes para o contexto. Não use *cards* dentro de *cards*.\n\n3. **Individual**\n   Um *card* não pode ser mesclado com outro *card* ou dividido em vários *cards*.\n\n4. **White Space:**\n   *Cards* são representados por conteúdo individual altamente coerente, divididos em pequenos blocos. Por isso é essencial dar um espaço para cada bloco do *card*, assim pode ser lido e entendido com maior facilidade. Acrescente também *white space* ao redor de cada bloco (área de respiro).\n\n5. **Limite de conteúdo:**\n   O *card* deve conter apenas informações essenciais e oferecer um caminho para mais detalhes, em vez de detalhes completos logo de cara. Evite ao máximo colocar muito conteúdo em um único *card*, ele pode ficar muito grande ou muito longo e, por sua vez, perdendo sua conexão original com a metáfora do “cartão”.\n\n6. **Crie hierarquia de conteúdo:**\n   A hierarquia dentro dos *cards* ajuda a direcionar a atenção dos usuários para as informações mais importantes. Coloque o título na parte superior do *card* e o conteúdo principal no centro. Elementos interativos como botões e ícones funcionam melhor na parte inferior do *card*."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name               | Property     | Token      |\n| ------------------ | ------------ | ---------- |\n| Superfície         | `background` | `--pure-0` |\n| Superfície (verso) | `background` | `--gray-2` |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "|    Name    | Token Shadow  |\n| :--------: | :-----------: |\n| Superfície | `--shadow-sm` |"
      },
      {
        "title": "Estado",
        "level": 3,
        "content": "| Property                 | Status       | Token                          |\n| ------------------------ | ------------ | ------------------------------ |\n| *container* (superfície) | `desativado` | `--status-disabled-background` |\n| *container* (superfície) | `arrastado`  | `--status-dragged-background`  |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name             | Property  | Value  |\n| ---------------- | --------- | ------ |\n| Conteúdo (geral) | `padding` | `16px` |\n| Ícones           | `padding` | `8px`  |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Ofereça aos usuários a opção de navegação por meio do teclado. Os usuários devem poder navegar usando a tecla `Tab` e `Shift + Tab` e acionar os controles interativos por meio das teclas `Space` ou `Enter`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Certifique-se de que o tamanho do *card* seja adequado ao seu conteúdo e ao tamanho de exibição da tela, pois isso pode afetar a legibilidade do conteúdo para algumas pessoas;\n\n- Deixe claro quais elementos contidos no *card* são interativos e se o próprio *card* é interativo;\n\n- Certifique-se de que o *card* (e todos elementos contidos no *card*) possam ser navegados facilmente usando apenas o teclado. Faça com que cada elemento contido no *card* receba foco em uma ordem lógica antes de passar para o *card* seguinte."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- É importante fornecer uma descrição alternativa com o atributo `alt` em imagens usadas no *card*, ou fornecendo uma descrição textual no conteúdo. Isto ajudará pessoas com deficiência visual que usam leitores de tela."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Guia-WCAG](https://guia-wcag.com/?)\n- [Material Design 3](https://m3.material.io/components/cards/accessibility)\n- [Carbon Design System](https://carbondesignsystem.com/components/button/accessibility)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/card/card.md",
      "accessibilityPath": "ds/componentes/card/card-access.md"
    }
  },
  {
    "name": "Carousel",
    "slug": "carousel",
    "description": "*Carousel* é um componente que permite que vários conteúdos ocupem um único espaço na tela e que o usuário navegue por eles de forma sequencial e controlada.",
    "documentationUrl": "https://www.gov.br/ds/components/carousel",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo carousel.](imagens/carousel.png)\n*Exemplo do componente carousel*\n\nUse o *carousel* quando houver uma sequência de itens para exibir e um espaço de tela reduzido, permitindo que o usuário se concentre em um ou alguns itens por vez."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *carousel* é composto por:\n\n| ID  | Nome                     |                       Referência                        | Uso         |\n| --- | ------------------------ | :-----------------------------------------------------: | ----------- |\n| 1   | Palco (área de conteúdo) |                           ---                           | Obrigatório |\n| 2   | Botões de navegação      | [Componente Button](/ds/components/button?tab=designer) | Obrigatório |\n| 3   | Botões de reprodução     | [Componente Button](/ds/components/button?tab=designer) | Opcional    |\n| 4   | Indicador de páginas     |   [Componente Step](/ds/components/step?tab=designer)   | Obrigatório |\n\n![Anatomia do componente carousel.](imagens/carousel-anatomy.png)\n*Anatomia do componente carousel*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Palco (Obrigatório)",
        "level": 3,
        "content": "Chamamos de **palco** toda a área que compreende o conteúdo apresentado pelo *carousel*. Os elementos do *carousel* podem estar externos à área do palco ou internos. Veja as imagens abaixo:\n\n![Palcos do carousel.](imagens/carousel-palco.png)\n*Exemplo de elementos externos e internos ao palco do carousel*\n\nÉ possível ainda a formatação de *carousels* híbridos, isto é, com elementos internos e externos ao palco. Confira a imagem a seguir:\n\n![Carousels híbridos.](imagens/carousel-palco-hibrid.png)\n*Carousel* híbrido 1: botões de navegação externos e indicador de páginas interno ao palco. *Carousel* híbrido 2: botões de navegação internos e indicador de páginas externo ao palco.\\*"
      },
      {
        "title": "Tipos de Conteúdo",
        "level": 4,
        "content": "O palco permite a exibição de qualquer tipo de conteúdo (imagens, textos, vídeos, componentes, etc.). Chamamos cada conteúdo exibido pelo *carousel* de *página*.\n\n![Áreas Carrossel](imagens/carousel-cards.png)\n*Exemplo de carousel com conteúdo de cards. Cada card representa um página*\n\n**Atenção:** mantenha a consistência visual e semântica entre as páginas apresentadas. Evite variações de dimensão e de tipo de conteúdo em uma mesmo *carousel*.\n\nO componente *carousel* é extremamente flexível ao conteúdo que apresenta e desta forma não existe um tamanho padrão. O *carousel* pode se adaptar totalmente a qualquer *layout*, porém, esteja atento ao comportamento do palco com os conteúdos apresentados em diferentes dispositivos e resoluções de telas para que não haja perda de informações relevantes, principalmente no caso de exibição de imagens e vídeos.\n\n**Atenção:** crie variações da mesma imagem adaptadas para cada resolução de tela. Desta forma, há maior controle da informação apresentada quando o *site* for visualizado em diferentes resoluções.\n\nPara exibição de imagens com textos é importante estar atento ao contraste e à legibilidade. Verifique questões como cor, tamanho do corpo do texto e contraste com a cor ou imagem de fundo.\n\n![Exemplo carousel com imagem no conteúdo.](imagens/carousel-contrast.png)\n*Considere utilizar uma superfície overlay entre a imagem de fundo e o texto para reforçar o contraste. Consulte o documento [Fundamentos > Movimento](/ds/fundamentos-visuais/movimento) para mais detalhes*"
      },
      {
        "title": "2. Botões de Navegação (Obrigatório)",
        "level": 3,
        "content": "Os botões de navegação (componentes *button* circular com ênfase terciária) permitem que o usuário possa navegar de forma sequencial pelo conteúdo do *carousel*.\n\n**Atenção:** caso seja necessário a ênfase dos botões de navegação pode ser alterada para obter um maior destaque.\n\nOs botões de navegação podem estar localizados fora ou dentro do palco. Para cada um dos casos há um comportamento específico."
      },
      {
        "title": "Botões de Navegação Localizados Fora da Área do Palco",
        "level": 4,
        "content": "Por padrão, os botões de navegação devem estar localizados fora da área do palco de conteúdo. Isso faz com que os botões sejam mais facilmente visíveis para o usuário.\n\n![Botões de navegação fora da área do palco.](imagens/buttons-out.png)\n*Exemplo de carousel com os botões de navegação fora da área do palco*"
      },
      {
        "title": "Botões de Navegação Localizados Dentro da Área do Palco",
        "level": 4,
        "content": "Muitas vezes pode ser necessário economizar espaço na tela e nesses casos, uma alternativa é localizar os botões de navegação dentro da área do palco de conteúdo.\n\n![Botões de navegação fora da área do palco.](imagens/buttons-in.png)\n*Exemplo de carousel com os botões de navegação dentro da área do palco*\n\nComo nesses casos os botões de navegação podem ficar menos evidentes para o usuário um comportamento extra foi adicionado: *áreas de interação diferenciadas.*\n\nO botão de navegação ocupa toda a altura do palco e o estado *hover* é acionado ao se passar o ponteiro do *mouse* em qualquer área do palco. Veja a imagem abaixo:\n\n![Comportamento hover em botões de navegação localizados dentro do palco do carousel.](imagens/button-hover.png)\n*Exemplo do estado hover em botões de navegação localizados dentro do palco do carousel*\n\n*Atenção:* em ambos os casos, disponha os botões sempre centralizados verticalmente com o palco e use botões com ícones de setas para indicar a direção da navegação."
      },
      {
        "title": "3. Botões de Reprodução (Opcional)",
        "level": 3,
        "content": "Em alguns casos o *carousel* pode ser automático, isto é, executa a navegação do conteúdo de forma automática. Nestes casos, é importante oferecer ao usuário uma forma de interagir com o conteúdo, pausando-o e reproduzindo-o quando desejar. Disponibilize os botões de reprodução (componentes *button* circular com ênfase terciária) para esta finalidade.\n\n![Exemplos de botões de reprodução no carousel.](imagens/botoes-reproducao.png)\n*Exemplos de botões de reprodução no carousel*\n\nNo estado normal do *carousel* os botões de reprodução devem ficar \"invisíveis\" para o usuário. Porém, ao passar o ponteiro do *mouse* sobre o conteúdo (*hover*) o botão de reprodução fica disponível para interação. Se o conteúdo estiver passando automaticamente, o botão *pause* fica disponível. Caso o *carousel* esteja pausado, o botão *play* fica disponível.\n\n*Atenção:* o comportamento automático do *carousel* será tratado com detalhes mais adiante neste documento."
      },
      {
        "title": "4. Indicador de Páginas (Obrigatório)",
        "level": 3,
        "content": "O *carousel* é definido por uma lista de conteúdo (páginas) em sequência. Cada passo na navegação possui uma correspondência no indicador de páginas (componente *step*).\n\nO indicador de páginas serve basicamente para:\n\n1. informar ao usuário quantas páginas há no *carousel*;\n2. qual a página está sendo mostrada pelo *carousel*.\n\nOpte pelos dois tipos possíveis de indicadores de páginas, conforme a necessidade:\n\n1. Simples;\n2. Textual."
      },
      {
        "title": "Indicador de Páginas Simples",
        "level": 4,
        "content": "Formados pelo componente *step* simples. Cada indicador do *step* corresponde a um passo da navegação pelo conteúdo do *carousel*. Deve haver tantos indicadores de *step* quanto páginas de conteúdo. A página que está sendo apresentada no momento deve ser indicada pelo indicador do *step* ativo.\n\n![Exemplo de carousel com indicador de páginas simples.](imagens/steps-simples.png)\n*Exemplo de utilização do indicador de páginas simples.*\n\nQuando optar pela utilização do indicador de páginas dentro do palco, considere o recurso da superfície *overlay* já mencionado na seção *Tipos de Conteúdo*. Esta técnica ajudará a garantir o contraste entre o indicador de páginas e o conteúdo quando a imagem de fundo obtiver muitos elementos visuais.\n\n**Atenção:** para oferecer uma melhor experiência ao usuário, utilize a dimensão do componente *step* que melhor se harmoniza com a resolução da tela e com as dimensões do *carousel*."
      },
      {
        "title": "Indicador de Páginas Textual",
        "level": 4,
        "content": "O indicador de páginas textual é formado por dois números. O primeiro indica a página que está sendo apresentada e o segundo, a quantidade total de páginas que o *carousel* possui.\n\nAo contrário do indicador de páginas simples, o indicador de páginas textual não pode ser aplicado dentro do palco de conteúdo. Mantenha-o sempre centralizado abaixo do palco de conteúdo, conforme a imagem abaixo:\n\n![Exemplo de carousel com indicador de páginas textual.](imagens/steps-textual.png)\n*Exemplo de utilização do indicador de páginas textual.*\n\n**Atenção:** tenha em mente que a utilização do indicador de páginas no *carousel* é uma boa prática de usabilidade e sempre que possível deve ser utilizado.\n\nPara mais informações consulte o documento [Componentes > Step](/ds/components/step?tab=designer)."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Navegação",
        "level": 3,
        "content": "*Carousels* são componentes de navegação sequencial ou linear, pois cada página do conteúdo é mostrada na ordem em que foi criada no *carousel*.\n\nÉ possível também propor uma navegação em \"*looping*\". Neste caso, ao se atingir a última página do conteúdo o usuário voltará para a primeira página de forma linear.\n\n![Navegação no carousel.](imagens/carousel-navegacao.png)\n*Botão de navegação desabilitado na primeira e na última página do conteúdo.*\n\n**Atenção:** lembre-se de deixar os controles de navegação desabilitados quando for a primeira ou a última página do conteúdo. Exceto quando a navegação for em *looping*."
      },
      {
        "title": "2. Navegação por Gestos",
        "level": 3,
        "content": "Em dispositivos *touch screen* a navegação deve ser acionada por gestos (*swipe*) sobretudo quando utilizada em dispositivos móveis. Nestes casos, o usuário deve deslizar o dedo e arrastar o conteúdo para a direita ou esquerda.\n\n![Navegação por gestos no carousel.](imagens/swipe.png)\n*Navegação por gestos em dispositivos touch screen*\n\n**Atenção:** ao implementar a navegação por gestos não é necessário utilizar os botões de navegação, porém é importante verificar o seu funcionamento com tecnologias assistivas como leitor de telas entre outras oferecendo sempre uma alternativa acessível para o usuário."
      },
      {
        "title": "3. Reprodução Automática",
        "level": 3,
        "content": "O componente *carousel* também pode exibir os conteúdos de forma automática, alternando-os por um tempo determinado. Nesse caso, deve-se fornecer ao usuário botões que permitam o controle para pausar e reproduzir o movimento.\n\n![Controles de reprodução automática.](imagens/botoes-reproducao.png)\n*Controles de reprodução automática do carousel*\n\nConsidere sempre o conteúdo exibido. Para conteúdos com muitos textos ou elementos interativos, considere uma duração compatível com o tempo que o usuário necessitará para assimilar o conteúdo. Estime quanto tempo um usuário médio pode levar para ler o texto e processar as imagens do conteúdo. Use três palavras por segundo como orientação.\n\nNão pare na última página. Use navegação em *looping* para reproduções automáticas.\n\n**Atenção:** não utilize reprodução automática em dispositivos móveis porque torna a página mais lenta e, além disso, porque as páginas são curtas e os usuários geralmente rolam rapidamente para baixo. Portanto, quando o *carousel* mudar a página de conteúdo o usuário provavelmente estará olhando abaixo da dobra e não verá a mudança.\n\n**Não utilize reprodução automática se:**\n\n- Você não tem certeza se pode acertar a duração de tempo correta para que a maioria das pessoas leia e absorva o conteúdo. Às vezes, os carrosséis se movem muito rapidamente e os usuários não conseguem ler as informações, o que pode ser frustrante.\n\n- o conteúdo se assemelha a anúncios. Os usuários são mais propensos a ignorar um item animado que se parece com um anúncio (se eles não estiverem com uma mentalidade de compras)."
      },
      {
        "title": "4. Movimento",
        "level": 3,
        "content": "Ao navegar pelo conteúdo do *carousel* é necessário especificar a maneira como as páginas serão exibidas, isto é, o tipo de movimento que fará com que uma página entre e saia do palco.\n\n<video controls width=\"320\" height=\"240\" controls type=\"video/mp4\">\n<source src=\"videos/carousel.mp4\" type=\"video/mp4\">\n</video>\n*Exemplo de movimentos na navegação no carousel*\n\nEntendemos que as características do movimento, para se tornar harmônico e natural para o usuário, podem variar com o tamanho do *carousel* e com o tipo de conteúdo apresentado. Portanto, não deixe de testar os atributos de movimento que melhor se adaptem ao *carousel* projetado.\n\nDeixamos algumas dicas de *boas práticas* para auxiliar na escolha do movimento:\n\n- Opte pela **transição slide**, pois trata-se de uma transição de movimento pensada especificamente para o uso no *carousel*;\n\n- Prefira movimentos de **duração rápida** (consulte a tabela de duração dos movimentos no *link* abaixo);\n\n- Geralmente *easing* do tipo *easing-in-out* funciona bem, pois deixa os movimentos de transição das páginas mais naturais e orgânicas;\n\nPara entender melhor os tipos de movimento, consulte o documento [Fundamentos > Movimento](/ds/fundamentos-visuais/movimento)."
      },
      {
        "title": "5. Múltiplas Páginas",
        "level": 3,
        "content": "É possível exibir múltiplas páginas na área de conteúdo do *carousel*, ou seja, o palco pode exibir simultaneamente blocos de páginas de conteúdo.\n\n![Múltiplas páginas](imagens/multiplo-conteudo.png)\n*Neste exemplo, o carousel exibe um bloco com três páginas de conteúdo por vez*\n\nTenha o cuidado de manter a consistência no espaçamento entre as páginas de conteúdo de cada bloco. Se possível, evite blocos com mais de três páginas.\n\n![Consistência nos espaçamentos das páginas de conteúdo de um bloco.](imagens/multiplo-conteudo-espacamento.png)\n*Espaçamento entre as páginas de conteúdo em um bloco deve ser consistente.*\n\nNos *carousels* de múltiplas páginas, a navegação pelo conteúdo pode se dar por blocos de páginas ou por páginas individuais. Acompanhe as imagens abaixo:\n\n![navegação por blocos de páginas.](imagens/multiplo-conteudo-navegacao-1.png)\n*Exemplo de navegação por blocos de páginas. Cada indicador de páginas corresponde ao bloco de páginas de conteúdo apresentado. Ao clicar no botão de navegação, todo o bloco de páginas é alterado.*\n\n![navegação por páginas.](imagens/multiplo-conteudo-navegacao-2.png)\n*Exemplo de navegação por páginas. Cada indicador de páginas corresponde à página de conteúdo apresentada. Ao clicar no botão de navegação, uma página entra no palco e outra sai.*\n\nEm ambos os casos o indicador do *step* deve corresponder a cada passo na navegação, isto é, a cada clique nos botões de navegação.\n\n**Atenção:** para um melhor aproveitamento da área na tela, em resoluções menores um *carousel* de múltiplas páginas pode se converter em um *carousel* simples e vice-versa."
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- Evite *carousel* para exibir apenas um conteúdo. Neste caso, prefira uma imagem estática.\n\n- Evite exibir excesso de conteúdo em um mesmo *carousel*. É improvável que o usuário se envolva com mais do que cinco páginas. Mais do que isso pode se tornar cansativo.\n\n- Indique sempre que possível quantas páginas estão presentes no *carousel* e onde o usuário está na progressão. Esta prática ajuda os usuários se sentirem no controle.\n\n- Garanta que o conteúdo do *carousel* se adequará em qualquer resolução de tela. Escolha conteúdos que possam ser ajustados.\n\n- Para *carousel* de exibição automática, observe se o tempo de exibição do conteúdo é suficiente para que o usuário consiga interagir (ler, compreender, preencher, etc.) com o conteúdo.\n\n- Não utilize o *carousel* automático se não tem certeza se o usuário conseguirá compreender o conteúdo dentro do tempo especificado. Tenha em mente que se mal projetado, um *carousel* automático pode atrapalhar mais do que ajudar.\n- Evite a reprodução automática em dispositivos móveis, pois nestes casos, o *carousel* deve ocupar uma grande espaço na tela e a reprodução automática pode se tornar estressante para certos usuários.\n\n- É sempre uma boa ideia colocar qualquer informação importante que apareça em um *carousel* também em outro local na arquitetura da informação do *site*, para que as pessoas que não interajam com o *carousel* tenham uma chance de visualizá-la.\n\n- Se houver uma hierarquia de importância entre os conteúdos do *carousel* posicione sempre o mais importante na primeira página, pois muitas pessoas não chegam a ver as últimas páginas do *carousel*.\n\n- É bastante comum a aplicação de *carousels* no início da tela com imagens de grande impacto. Porém, tenha em mente que o uso do *carousel* é polêmico e gera grande discussão na *web*. *Nilsen/Norman Group*, os gurus da usabilidade, confirma em testes de uso que pessoas tem \"cegueira\" para conteúdos rotativos. A conversão é mínima e os *carousels* são frequentemente ignorados pelos usuários."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                 | Property            |    Spacing Scale Token    |\n| -------------------- | ------------------- | :-----------------------: |\n| Botões de navegação  | `margin-right/left` | `--spacing-scale-default` |\n| Indicador de páginas | `margin-top`        |   `--spacing-scale-2x`    |"
      },
      {
        "title": "Alinhamento",
        "level": 3,
        "content": "| Name                 | Property             |         Spacing Token         |\n| -------------------- | -------------------- | :---------------------------: |\n| Botões de navegação  | `spacing-vertical`   |  `--spacing-vertical-center`  |\n| Indicador de páginas | `spacing-horizontal` | `--spacing-horizontal-center` |\n| Botões de reprodução | `spacing-vertical`   |  `--spacing-vertical-center`  |\n| Botões de reprodução | `spacing-horizontal` | `--spacing-horizontal-center` |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name                                 | Ícone                              | Size              | Class (Font Awesome) |\n| ------------------------------------ | ---------------------------------- | ----------------- | -------------------- |\n| Botão de navegação (página anterior) | <i class=\"fas fa-angle-left\"></i>  | `–icon-size-base` | `fa-angle-left`      |\n| Botão de navegação (página seguinte) | <i class=\"fas fa-angle-right\"></i> | `–icon-size-base` | `fa-angle-righ`      |\n| Botão de reprodução (Pause)          | <i class=\"fas fa-pause\"></i>       | `–icon-size-base` | `fa-pause`           |\n| Botão de reprodução (Play)           | <i class=\"fas fa-play\"></i>        | `–icon-size-base` | `fa-play`            |"
      },
      {
        "title": "Movimento",
        "level": 3,
        "content": "| Name   | Property  | Movimento Token           |\n| ------ | --------- | ------------------------- |\n| Página | Transição | `slide`                   |\n| Página | Easing    | `--animation-ease-in-out` |\n| Página | Duração   | `--duration-fast`         |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Ofereça ao usuário navegação via teclado, com o uso das teclas `Tab` e `Shift + Tab`, assim como acionamento dos controles interativos por meio das teclas `Space` ou `Enter`;\n\n- Garanta que o conteúdo do *carousel* se adequará em qualquer resolução de tela. Escolha conteúdos que possam ser ajustados;\n\n- É sempre uma boa ideia colocar qualquer informação importante que apareça em um *carousel* também em outro local na arquitetura da informação do site, para que aqueles que não interajam com o *carousel* tenham a chance de visualizá-la;\n\n- É bastante comum a aplicação de *carousels* no início da tela com imagens de grande impacto. Porém, tenha em mente que o uso do *carousel* é polêmico e gera grande discussão na web. Nilsen/Norman Group, os gurus da usabilidade, confirma em testes de uso que pessoas têm “cegueira” para conteúdos rotativos. A conversão é mínima e os *carousels* são frequentemente ignorados pelos usuários."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Para exibição de imagens com textos é importante estar atento ao contraste e à legibilidade. Verifique questões como cor, tamanho do corpo do texto e contraste com a cor ou imagem de fundo;\n\n- Quando houver texto sobre uma imagem, considere utilizar uma superfície **overlay** entre a imagem de fundo e o texto para reforçar o contraste. Consulte o documento [Fundamentos Visuais > Superfície](https://www.gov.br/ds/fundamentos-visuais/superficie) para mais detalhes;\n\n- Crie variações da mesma imagem adaptadas para cada resolução de tela. Desta forma, há maior controle da informação apresentada quando o site for visualizado em diferentes resoluções;\n\n- Certifique-se que os botões de navegação e os botões de reprodução estejam claramente visíveis e funcionais;\n\n- Em dispositivos *mobile* certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de `44px`;\n\n- Sempre que possível, indique a quantidade de páginas do carousel e em que página o usuário se encontra;\n\n- Tenha cuidado com a velocidade de transição entre as páginas. Para mais detalhes, cosulte [Fundamentos Visuais > Movimento](https://www.gov.br/ds/fundamentos-visuais/movimento);\n\n- Não utilize reprodução automática em dispositivos móveis porque torna a página mais lenta e, além disso, porque as páginas são curtas e os usuários geralmente rolam a tela rapidamente para baixo;\n\n- Não utilize a reprodução automática se você não tem certeza sobre qual é a duração de tempo correta. Se o *carousel* se mover muito rapidamente os usuários podem não conseguir ler as informações de forma adequada."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Certifique-se de que as imagens e vídeos do *carousel* estejam acessíveis, fornecendo textos alternativos com o atributo `alt` para as imagens e legendas para os vídeos.\n\n- Recomenda-se usar a tag `<picture>` e `<source>` para um melhor controle do uso de imagens para diferentes resoluções de tela. Veja mais informações em [MDN Web Docs - Tag Picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Guia WCAG](https://guia-wcag.com/)\n- [NN/Group](https://www.nngroup.com/articles/mobile-carousels/)\n- [MDN Web Docs - Tag Picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/carousel/carousel.md",
      "accessibilityPath": "ds/componentes/carousel/carousel-access.md"
    }
  },
  {
    "name": "Checkbox",
    "slug": "checkbox",
    "description": "O componente *checkbox* permite selecionar uma ou mais opções em uma lista de opções.",
    "documentationUrl": "https://www.gov.br/ds/components/checkbox",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente checkbox.](imagens/checkbox-exemplo.png)\n*Exemplo do componente checkbox.*\n\nDeve ser utilizado para permitir que o usuário selecione uma ou mais opções em uma lista de opções. Quando a lista de opções permitir a seleção de apenas um único item utilize o componente *radiobutton*.\n\nQuando a lista de opções for muito extensa, deve ser avaliada a possibilidade de uso do componente *select*.\n\nCada opção pode ou não ser acompanhada por um texto descritivo que identifica o item a ser selecionado.\n\nO componente pode ser utilizado sem o texto descritivo para identificar a seleção de um conjunto de itens como em uma linha de tabela, por exemplo; e deverá continuar mantendo suas diretrizes de alinhamento e espaçamento.\n\nÉ fundamental que antes de uma lista de opções múltiplas apareça um rótulo e uma breve descrição, orientando ao usuário sobre o que se trata as opções e que podem ser selecionadas mais de uma opção."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "- Deve-se utilizar o componente para opções em que a resposta seja sim ou não. Ex.: Lembrar senha?.\n\n- Quando a resposta for ligado ou desligado (Ex.: Componente habilitado.) pode-se utilizar o componente *switch* como alternativa.\n\n- Recomenda-se que o texto do rótulo e o texto descritivo sejam breves, claros e diretos. Utilizar os verbos sempre na terceira pessoa do imperativo afirmativo. Ex.: Selecione os estados contidos no projeto.\n\n- Dar preferência ao uso do componente em uma coluna, porém pode-se dispor de mais de uma coluna se houver extrema necessidade. Nesse caso, é recomendado manter a mesma largura em todas os itens da mesma coluna e a mesma altura dos itens da mesma linha da lista.\n\n- Deve-se manter uma coerência entre as larguras dos itens evitando uma largura de linha com mais de 10 palavras ou 56 caracteres em média."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome                              |                    Referência                    | Uso         |\n| --- | --------------------------------- | :----------------------------------------------: | ----------- |\n| 1   | Caixa de opção                    |                       ---                        | Obrigatório |\n| 2   | Item de opção                     |     [Item](/ds/components/item?tab=designer)     | Obrigatório |\n| 3   | Cabeçalho de opções               | [Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 4   | Lista de opções                   |     [List](/ds/components/list?tab=designer)     | Obrigatório |\n| 5   | Mensagem de *feedback* contextual |  [Message](/ds/components/message?tab=designer)  | Opcional    |\n\n![Anatomia do checkbox.](imagens/checkbox-estrutura.png)\n*Anatomia do componente checkbox*"
      },
      {
        "title": "Detalhamento dos itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Caixa de opção (Obrigatório)",
        "level": 3,
        "content": "A caixa de opção é composta pelo *container* e pelo ícone de suporte visual interativo que indicará o estado do componente como selecionado ou válido. Pode ser utilizado de forma independente como em células de tabelas, por exemplo.\n\n1. *Container*;\n2. Ícone de suporte visual.\n\n![Exemplo caixa de opção.](imagens/checkbox-caixa-opcao.png)\n*Exemplo de caixa de opção.*"
      },
      {
        "title": "1. Container",
        "level": 4,
        "content": "O *container* do *checkbox* parte de um quadrado com os cantos levemente arredondados."
      },
      {
        "title": "2. Ícone de suporte visual interativo",
        "level": 4,
        "content": "O Ícone de suporte visual é um elemento que se encontra dentro da área do *container* e deve ser utilizado para identificar o estado do item *checkbox* como selecionado ou válido a depender do seu estado."
      },
      {
        "title": "2. Item de opção (Obrigatório)",
        "level": 3,
        "content": "É composto pela caixa de opção à esquerda e o texto descritivo sempre à direita. Este item deve ter uma largura mínima e máxima (ver design tokens).\n\n1. Caixa de opção;\n2. Texto descritivo (opcional).\n\n![Exemplo item de opção.](imagens/checkbox-item-opcao.png)\n*Exemplo de item de opção.*\n\n- Para proporcionar um maior conforto visual ao usuário o texto descritivo deve se posicionar sempre à direita do *container* respeitando o espaçamento lateral da caixa de opção.\n- O texto que descreve a opção a ser selecionada pode ser suprimido dependendo da aplicação, como por exemplo em tabelas.\n- Deve-se manter uma coerência entre as larguras dos itens evitando um texto descritivo com mais de sete palavras.\n- Os textos descritivos deverão ser escritos com sua primeira letra em maiúsculo e o restante em minúsculo. Ex.: Selecione a opção 01.\n- Evitar escrever com todas as letras em maiúsculo (*ALL CAPS*) ou com todas as primeiras letras das palavras em maiúsculo (*Camel Case*)."
      },
      {
        "title": "3. Cabeçalho de opções (Opcional)",
        "level": 3,
        "content": "O cabeçalho de opções é composto pelo rótulo e caso necessário, texto auxiliar. Deve ser o item mais ao topo da lista de opções. Não há restrição de largura ou altura para este item.\n\n1. Rótulo;\n2. Texto auxiliar.\n\n![Exemplo item de cabeçalho.](imagens/checkbox-cabecalho-opcoes.png)\n*Exemplo de cabeçalho.*"
      },
      {
        "title": "1. Rótulo (opcional)",
        "level": 4,
        "content": "- Quando o componente é apresentado em uma lista e opções devem ser precedidos de um rótulo que descreva a informação que o usuário deve selecionar.\n- O rótulo deve estar posicionado no topo do componente alinhado à esquerda.\n- O rótulo deve ser escrito com sua primeira letra em maiúsculo e o restante em minúsculo. Ex.: Selecione a opção 01.\n- Evitar escrever com todas as letras em maiúsculo (*ALL CAPS*) ou com todas as primeiras letras das palavras em maiúsculo (*Camel Case*)."
      },
      {
        "title": "2. Informações Adicionais (opcional)",
        "level": 4,
        "content": "- É possível adicionar um texto auxiliar ao rótulo para facilitar o seu entendimento.\n- Este texto deve estar posicionado logo abaixo do componente rótulo, sem espaçamentos e alinhado à esquerda.\n- Deve ser escrito com sua primeira letra em maiúsculo e o restante em minúsculo. Ex.: Selecione a opção 01.\n- Evitar escrever com todas as letras em maiúsculo (*ALL CAPS*) ou com todas as primeiras letras das palavras em maiúsculo (*Camel Case*)."
      },
      {
        "title": "4. Lista de Opções (Obrigatório)",
        "level": 3,
        "content": "A lista de opções é o conjunto formado pelos itens de opção.\nQuando esta lista possuir mais de um item é recomendado que seja precedida de um cabeçalho de opções.\n\n1. Lista de opções.\n\n![Exemplo item de opções.](imagens/checkbox-lista-opcoes.png)\n*Exemplo de lista de opções.*"
      },
      {
        "title": "5. Mensagens de feedback contextual (Opcional)",
        "level": 3,
        "content": "O componente mensagem pode ser utilizado para enviar mensagens informativas de alerta, de erro ou validação (*feedback* contextual). Estas mensagens devem ser o mais sucintas possível e de preferência não ultrapassando uma linha de mesma largura do campo de texto, além de seguir suas diretrizes de componente.\nDeve estar posicionada logo abaixo do último item da lista de opções, alinhado à esquerda e respeitando uma margem superior de acordo com suas diretrizes.\n\n1. Mensagem de *feedback* contextual.\n\n![Exemplo de mensagem de feedback contextual.](imagens/checkbox-mensagem.png)\n*Exemplo de mensagem de feedback contextual.*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Estados",
        "level": 3,
        "content": "Os itens do componente *checkbox* se apresentam nos seguintes estados:"
      },
      {
        "title": "Estado Não selecionado (estado padrão)",
        "level": 4,
        "content": "Estado padrão do componente. Indica que o usuário não interagiu com o componente.\n\n![Exemplo do checkbox no estado padrão não selecionado.](imagens/checkbox-estado-default.png)\n*Exemplo do checkbox no estado padrão não selecionado.*"
      },
      {
        "title": "Estado Hover",
        "level": 4,
        "content": "Estado que indica que o usuário posicionou o ponteiro do *mouse* sobre a área do componente. Pode não fazer sentido em dispositivos em que não se utiliza o *mouse* como recurso.\n\n![Exemplo do estado hover no componente checkbox.](imagens/checkbox-estado-hover.png)\n*Exemplo do estado hover no componente checkbox.*"
      },
      {
        "title": "Estado Selecionado",
        "level": 4,
        "content": "Este estado indica que o usuário selecionou um item. Pode ser acionado:\n\n1. Pressionando a tecla espaço quando o foco estiver no componente;\n2. Pelo clique do *mouse* ou toque na tela na região do componente (incluindo seu texto descritivo, quando houver);\n3. Ou por meio de outra ação que corresponda ao item desejado pelo usuário como por exemplo recursos de voz.\n\n![Exemplo do checkbox no estado selecionado.](imagens/checkbox-estado-selected.png)\n*Exemplo do checkbox no estado selecionado.*"
      },
      {
        "title": "Estado Foco",
        "level": 4,
        "content": "Este estado indica que o item da lista de opções está destacado, so ser usado o método de entrada por teclado (tecla \"Tab\", por exemplo). Este estado é de extrema importância para garantir a acessibilidade do componente na interface.\n\n![Exemplo do checkbox no estado foco.](imagens/checkbox-estado-focused.png)\n*Exemplo do checkbox no estado foco.*"
      },
      {
        "title": "Estado Inválido",
        "level": 4,
        "content": "Este é o estado indicativo de que uma opção não é válida. Pode ser aplicado quando a opção selecionada em um questionário está incorreta ou quando o preenchimento de pelo menos uma opção é obrigatório.\n\n![Exemplo do checkbox no estado inválido.](imagens/checkbox-estado-invalid.png)\n*Exemplo do checkbox no estado inválido.*"
      },
      {
        "title": "Estado Válido",
        "level": 4,
        "content": "Estado indicativo de que a opção é válida. Pode ser aplicado quando a opção selecionada em um questionário está correta, por exemplo.\n\n![Exemplo do checkbox no estado válido.](imagens/checkbox-estado-valid.png)\n*Exemplo do checkbox no estado válido.*"
      },
      {
        "title": "Estado Desabilitado",
        "level": 4,
        "content": "Estado que indica que uma ou mais opções não estão disponíveis para serem selecionadas.\n\n![Exemplo do checkbox no estado desabilitado.](imagens/checkbox-estado-disabled.png)\n*Exemplo do checkbox no estado desabilitado.*"
      },
      {
        "title": "Estado Intermediário",
        "level": 4,
        "content": "Este estado é utilizado quando ocorre a \"seleção em lote\", ou seja, quando alguns itens vinculados ao *Checkbox Principal* estiverem selecionados, porém não todos, este assumirá o *Estado Intermediário*.\n\n![Estado Intermediário](imagens/checkbox-estado-intermediary.png)\n*Estado Intermediário*\n\nFunciona da seguinte forma:\n\n- **1** - Caso o usuário clique no *Checkbox Principal* no *Estado Não Selecionado*, o *Checkbox Principal* assumirá o *Estado Selecionado* e realizará a seleção de todos os itens que estão vinculados a ele.\n\n![Selecionando o CheckBox Principal](imagens/checkbox-estado-intermediary-1.png)\n*Selecionando o CheckBox Principal*\n\n- **2** - Caso o usuário clique no *Checkbox Principal* no *Estado Selecionado*, o *Checkbox Principal* assumirá o *Estado Não Selecionado* e removerá a seleção de todos os itens que estão vinculados a ele.\n\n![Desselecionando o CheckBox Principal](imagens/checkbox-estado-intermediary-2.png)\n*Desselecionando o CheckBox Principal*\n\n- **3** - Caso o usuário selecione alguns itens que estejam vinculados ao *CheckBox Principal*, porém não selecione todos eles, o *CheckBox Principal* assumirá o *Estado Intermediário*.\n\n![Estado Intermediário](imagens/checkbox-estado-intermediary-3.png)\n*Estado Intermediário*\n\n- **4** - Caso o usuário clique no *Checkbox Principal* no *Estado Intermediário*, o *Checkbox Principal* assumirá o *Estado Selecionado* e realizará a seleção de todos os itens vinculados a ele.\n\n![Clicando no CheckBox com Estado Intermediário](imagens/checkbox-estado-intermediary-4.png)\n*Clicando no CheckBox com Estado Intermediário*\n\n**OBS:** Os itens vinculados ao *CheckBox Principal* não precisam ser necessariamente outros *CheckBoxes*, poderão ser utilizados outros componentes ou estado que representem a seleção de elementos. Abaixo pode-se observar alguns exemplos de seleção em lote com outros componentes e elementos.\n\n![Estado Intermediário com Listas e Swiches](imagens/checkbox-estado-intermediary-5.png)\n*Estado Intermediário com Listas e Swiches*\n\n![Estado Intermediário com Seleção de Linhas em Tabelas](imagens/checkbox-estado-intermediary-6.png)\n*Estado Intermediário com Seleção de Linhas em Tabelas*"
      },
      {
        "title": "2. Espaçamento e Alinhamento",
        "level": 3,
        "content": ""
      },
      {
        "title": "Espaçamento",
        "level": 4,
        "content": "![Espaçamento dos elementos do item de checkbox.](imagens/checkbox-caixa-opcao-espacamento.png)\n*Espaçamento dos elementos do item de checkbox.*"
      },
      {
        "title": "Caixa de opção",
        "level": 5,
        "content": "A caixa de opção do item do *checkbox* deve manter uma distância superior e inferior (1) e um espaçamento lateral direito (2) de qualquer outro elemento."
      },
      {
        "title": "Texto descritivo",
        "level": 5,
        "content": "O texto descritivo deve se posicionar sempre à direita a (2) da caixa de opção como indicado acima. Deve manter um espaçamento inferior dos elementos abaixo (3)."
      },
      {
        "title": "Item de opção",
        "level": 5,
        "content": "Cada item do *checkbox*, composto pela caixa de opção à esquerda e seu texto descritivo à direita, deve manter uma distância à direita (4), abaixo (3) e acima (1) entre este e o próximo componente.\n\n![Espaçamento entre os itens do checkbox.](imagens/checkbox-item-opcao-espacamento.png)\n*Espaçamento entre os itens do checkbox.*"
      },
      {
        "title": "Cabeçalho de opções",
        "level": 5,
        "content": "O rótulo e o texto auxiliar devem estar localizados no topo do agrupamento. Não há espaçamento além do já previsto em suas diretrizes e um espaçamento inferior a partir do último dos dois elementos (rótulo ou texto auxiliar)."
      },
      {
        "title": "Mensagens de feedback contextual",
        "level": 5,
        "content": "Deve ser o elemento mais abaixo de todos na lista de opções do componente. Deve manter o espaçamento superior do último item da lista de opções (2).\n\n![Espaçamento Cabeçalho Mensagem ](imagens/checkbox-lista-opcao-espacamento.png)\n\n**Atenção:** deve haver apenas uma mensagem para todo o conjunto da lista de opções."
      },
      {
        "title": "Disposição vertical",
        "level": 5,
        "content": "![exemplo de checkbox com disposição vertical com texto descritivo.](imagens/checkbox-lista-opcao-vertical.png)\n*Exemplo de checkbox com disposição vertical com texto descritivo.*\n\nNo caso de *checkbox* com disposição vertical com texto descritivo de alturas diferentes ou que ultrapassem uma linha de conteúdo deve-se manter o espaçamento inferior (3) para garantir a distinção dos itens pelo usuário.\n\nNão há limite de altura ou linhas de texto para os item de opção.\n\nPara itens de opção com larguras diferentes a lista de opções deve seguir as dimensões do maior item."
      },
      {
        "title": "Disposição horizontal",
        "level": 5,
        "content": "![Exemplo de checkbox com disposição horizontal.](imagens/checkbox-lista-opcao-horizontal.png)\n*Exemplo de espaçamentos em checkbox com disposição horizontal.*\n\nPara *checkboxes* com disposição horizontal com mais de um item deve-se manter a largura máxima (1) e mínima (2) (ver *design tokens*).\n\nNo caso de listas horizontais com itens de opção com larguras diferentes, deve-se manter o espaçamento lateral direito de segurança entre os itens (2).\n\nNo caso do item de opção ultrapassar o limite de largura (1), o texto descritivo deverá continuar em uma outra linha mantendo o alinhamento ao texto.\n\nNão há limite de linhas de texto ou altura de linha para os itens do componente.\n\nPara itens de opção com alturas diferentes a lista de opções deve seguir as dimensões do maior item."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Nome           | Property      | Value |\n| -------------- | ------------- | ----- |\n| Caixa de opção | width         | 24px  |\n| Caixa de opção | height        | 24px  |\n| Caixa de opção | border-radius | 4px   |\n| Caixa de opção | border-width  | 1px   |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                | Property       | Value                         |\n| ------------------- | -------------- | ----------------------------- |\n| Caixa de opção      | padding-right  | `--spacing-scale-base`        |\n| Caixa de opção      | padding-left   | `--spacing-scale-default`     |\n| Caixa de opção      | padding-top    | `--spacing-scale-half`        |\n| Caixa de opção      | padding-bottom | `--spacing-scale-half`        |\n| Texto descritivo    | padding-right  | `--spacing-scale-4x`          |\n| Texto descritivo    | padding-left   | `--spacing-scale-default`     |\n| Texto descritivo    | padding-bottom | `--spacing-scale-2x`          |\n| Texto descritivo    | padding-top    | `--spacing-scale-half`        |\n| Ícone Intermediário | vertical-align | `--spacing-vertical-center`   |\n| Ícone Intermediário | text-align     | `--spacing-horizontal-center` |\n\n| Nome                | Property       | Value                     |\n| ------------------- | -------------- | ------------------------- |\n| Rótulo              | padding        | `--spacing-scale-default` |\n| Texto auxiliar      | padding        | `--spacing-scale-default` |\n| Cabeçalho de opções | padding        | `--spacing-scale-default` |\n| Cabeçalho de opções | padding-bottom | `--spacing-scale-2x`      |\n| Lista de opções     | padding-top    | `--spacing-scale-default` |\n| Lista de opções     | margin-bottom  | `--spacing-scale-2x`      |\n| Lista de opções     | padding-left   | `--spacing-scale-default` |\n| Lista de opções     | padding-right  | `--spacing-scale-5x`      |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name             | family-type          | font-size                   | font-weight               |\n| ---------------- | -------------------- | --------------------------- | ------------------------- |\n| Rótulo           | `–-font-family-base` | `--font-size-scale-base`    | `--font-weight-semi-bold` |\n| Texto auxiliar   | `-–font-family-base` | `--font-size-scale-down-01` | `--font-weight-medium`    |\n| Texto descritivo | `-–font-family-base` | `--font-size-scale-base`    | `--font-weight-medium`    |"
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                                  | Property   | Color Token            |\n| ------------------------------------- | ---------- | ---------------------- |\n| Caixa de opção                        | background | `--pure-0`             |\n| Caixa de opção                        | border     | `--gray-20`            |\n| Caixa de opção (Estado Intermediário) | background | `--blue-warm-vivid-50` |\n| Caixa de opção (Estado Intermediário) | border     | `--blue-warm-vivid-50` |\n| Caixa de opção (Estado Intermediário) | color      | `--pure-0`             |\n| Texto descritivo                      | color      | `--gray-80`            |\n| Rótulo                                | color      | `--gray-80`            |\n| Informações adicionais                | color      | `--gray-80`            |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name                | Estado | Ícone                        | Size              | Class (Font Awesome) |\n| ------------------- | ------ | ---------------------------- | ----------------- | -------------------- |\n| Ícone interativo    | --     | <i class=\"fas fa-check\"></i> | `.icone.size--sm` | `.fa-check`          |\n| Ícone intermediário | --     | <i class=\"fas fa-minus\"></i> | `.icone.size--sm` | `.fa-minus`          |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- O *checkboxes* devem ser navegáveis pelo teclado através da tecla `Tab` e acionados com a tecla `Space`;\n\n- Para agrupamento de *checkboxes*, utilize, quando possível, uma ordem de tabulação significativa para o usuário. Por exemplo: Segunda, Terça, Quarta, etc."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- O *checkbox* deve ter um rótulo associado que explique seu objetivo e esteja claramente vinculado a ele;\n\n- Quando houver mudança de estado no *checkbox*, ofereça **sempre** *feedback* de *status* claro e audível para o usuário;\n\n- Esteja atendo às recomendações na diretriz de design quanto ao uso das cores para este elemento, garantindo um contraste de cor suficiente para serem facilmente lidos por pessoas com dificuldade de visão;\n\n- Em caso de agrupamento de *checkboxes* utilize um rótulo para o grupo, tornado claro o propósito do agrupamento e para identificação pelo leitor de tela."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Sempre que possível, recomenda-se utilizar o elemento `<input>` com o atributo `type=\"checkbox\"`, para garantir uma boa semântica;\n\n- Caso contrário, recomenda-se usar os recursos do `aria-checked` com os valores `true`, `false` ou `mixed` para definir os estados do *checkbox*."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/checkbox/accessibility/)\n- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/checkbox/checkbox.md",
      "accessibilityPath": "ds/componentes/checkbox/checkbox-access.md"
    }
  },
  {
    "name": "CookieBar",
    "slug": "cookiebar",
    "description": "O *cookieBar* é o componente responsável por fazer a gestão de *cookies* de um determinado produto, ele deve ser utilizado quando houver a necessidade de fazer qualquer tipo de tratamento de dados do usuário por meio de *cookies*. O componente permite que o usuário possa habilitar/desabilitar cada *cookie* de acordo com as definições e regras de negócio do produto, visualizar detalhes sobre cada *cookie*, finalidades, tempo de duração, dados que são coletados, dar consentimento ao tratamento dos dados, entre outros, conforme orientação da LGPD.",
    "documentationUrl": "https://www.gov.br/ds/components/cookiebar",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente cookieBar.](imagens/diretriz-lgpd-optout.png)\n*Exemplo do componente cookieBar*\n\nTrata-se de um componente obrigatório em *sites* e aplicativos que fazem a coleta de qualquer dado do usuário e deve ser utilizado na tela inicial ficando sempre visível, até que o usuário dê o consentimento ou revogue o tratamento dos dados.\n\n[Confira o texto oficial da lei nº 13.709/18](http://www.planalto.gov.br/ccivil*03/*ato2015-2018/2018/lei/L13709.htm)\n\n![Gráfico extraído do portal do Serpro representando os principais pontos tratados pela lei nº 13.709/18. ](imagens/infografico.jpg)\n*Infográfico com resumo dos pontos mais importantes da lei nº 13.709/18, extraído do [Portal do Serpro](https://serpro.gov.br/lgpd/menu/a-lgpd/o-que-muda-com-a-lgpd)*"
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "Apesar de tratar de um tema bastante técnico procure ser o mais claro e objetivo possível. Utilize vocabulário e termos simples e de fácil entendimento por leigos. Lembre-se que seu usuário não é obrigado a compreender expressões específicas restritas a áreas técnicas."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "Tenha em mente que o *cookieBar* é um componente único, no entanto, para facilitar a explicação este guia o divide em duas etapas:\n\n- **CookieBar default**: etapa em que o usuário se encontra na tela inicial;\n- **CookieBar aberto**: etapa em que o usuário interage com o botão \"Definir Cookies\" ou \"Ver Política de Cookies\".\n\n| ID  | Nome                                                           |                         Referência                          | Uso         |\n| --- | -------------------------------------------------------------- | :---------------------------------------------------------: | ----------- |\n| A   | Área de conteúdo global                                        |                             ---                             | Obrigatório |\n| B   | Área de conteúdo introdutório                                  |                             ---                             | Obrigatório |\n| C   | Área de conteúdo principal                                     |                             ---                             | Obrigatório |\n| D   | Área de conteúdo complementar                                  |                             ---                             | Opcional    |\n| E   | Área de ação                                                   |                             ---                             | Opcional    |\n| 1   | Superfície                                                     | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n| 2   | Botão primário                                                 |   [Componente Button](/ds/components/button?tab=designer)   | Obrigatório |\n| 3   | Botão secundário                                               |   [Componente Button](/ds/components/button?tab=designer)   | Obrigatório |\n| 4   | Superfície *scrim*                                             | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Opcional    |\n| 5   | Título principal                                               | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Obrigatório |\n| 6   | Informação sobre atualização                                   |                             ---                             | Obrigatório |\n| 7   | Texto introdutório                                             |                             ---                             | Obrigatório |\n| 8   | Botão terciário fechar                                         |   [Componente Button](/ds/components/button?tab=designer)   | Obrigatório |\n| 9   | Título da lista de classes de *cookies*                        | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Obrigatório |\n| 10  | Nome da classe do *cookie*                                     |                             ---                             | Obrigatório |\n| 11  | Descrição da classe do *cookie*                                |                             ---                             | Obrigatório |\n| 12  | *Checkbox* para ativação/desativação de todos os *cookies*     | [Componente Checkbox](/ds/components/checkbox?tab=designer) | Obrigatório |\n| 13  | Botão terciário para abertura/fechamento da classe do *cookie* |   [Componente Button](/ds/components/button?tab=designer)   | Obrigatório |\n| 14  | Aviso *opt in*                                                 |                             ---                             | Obrigatório |\n| 15  | *Checkboxes* para ativação/desativação de classes de *cookies* | [Componente Checkbox](/ds/components/checkbox?tab=designer) | Obrigatório |\n| 16  | *Card*                                                         |     [Componente Card](/ds/components/card?tab=designer)     | Obrigatório |\n| 17  | *Switch* para ativação/desativação de *cookie* específico      |   [Componente Switch](/ds/components/switch?tab=designer)   | Obrigatório |\n| 18  | Mensagem do sistema                                            |  [Componente Message](/ds/components/message?tab=designer)  | Obrigatório |\n| 19  | *Link* para mais informações                                   |    [Fundamento Estados](/ds/fundamentos-visuais/estados)    | Obrigatório |\n\n![Anatomia da etapa cookiebar default.](imagens/anatomia-cookiebar-default.png)\n*Anatomia da etapa cookieBar default*\n\n![Anatomia da etapa cookiebar aberto.](imagens/anatomia-openbar1.png)\n*Exemplo da etapa cookieBar aberto*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "A. Área de Conteúdo Global (Obrigatório)",
        "level": 3,
        "content": "Na etapa *cookieBar default* a área de conteúdo global se limita a um texto descritivo informando que os dados do usuário serão gravados por meio de *cookies*, assim como os respectivos benefícios para uma melhor experiência de navegação. É fundamental que este texto seja claro e direto e informe que os dados do usuário poderão ser gravados mesmo que não seja aceito a política de *cookies*. Além disso, algumas funcionalidades poderão não funcionar corretamente prejudicando a experiência de navegação como um todo.\n\nNa etapa *cookieBar* aberto, o conteúdo deve ser mais amplo e detalhado e é dividido em três subáreas:"
      },
      {
        "title": "B. Conteúdo Introdutório (Obrigatório)",
        "level": 3,
        "content": "Trata de informações a respeito do título da tela, última atualização do conteúdo e um breve texto introdutório."
      },
      {
        "title": "C. Conteúdo Principal (Obrigatório)",
        "level": 3,
        "content": "Trata do conteúdo principal com informações sobre os *cookies* utilizados e possibilidades de configurá-los, quando se tratar de *opt out*."
      },
      {
        "title": "D. Conteúdo complementar (Opcional)",
        "level": 3,
        "content": "Conteúdo opcional que, quando existir, deve oferecer *links* para conteúdos externos que complementam o entendimento do usuário."
      },
      {
        "title": "E. Área de ação (Opcional)",
        "level": 3,
        "content": "Esta área disponibiliza botões de ação.\n\n- **Quando opt in**: deve conter os botões **\"Ver Política de Cookies\"** e **\"Aceitar\"**;\n\n- **Quando opt out**: deve conter os botões **\"Definir Cookies\"** e **\"Aceitar\"**.\n\n![A imagem mostra duas áreas de ação: a primeira com cookiebar opt in com os botões \"ver política de cookie\" e o botão \"aceitar. A segunda com o cookiebar optout e os botões \"definir cookies\" e \"aceitar\".](imagens/anatomia-area-acao.png)\n*Anatomia da área de ação para os casos opt in e opt out com seus respectivos botões*"
      },
      {
        "title": "16. Cards (Obrigatório)",
        "level": 3,
        "content": "Os *cards* devem apresentar as informações detalhadas de cada um dos *cookies*.\n\n- **Quando opt in**: O *card* deve apresentar apenas informações não interativas.\n\n- **Quando opt out**: O *card* deve apresentar, além das informações não interativas, *switches* para que os usuários possam configurar os *cookies*.\n\n![A imagem mostra dois cards: no primeiro só há conteúdo texto. No segundo, além de texto, há switch para interação.](imagens/anatomia-card.png)\n*Anatomia de cards para os casos opt in e opt out*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Opt In e Opt Out",
        "level": 3,
        "content": "Pensando em toda complexidade e cenários existentes, o componente foi desenvolvido de forma ser o mais flexível possível para tratar desde serviços que estão *opt in* como *opt out*.\n\n1- É recomendável sempre que possível a utilização do padrão *opt out*. Nesse caso o *cookieBar* deve apresentar os botões: **Definir Cookies** e **Aceitar**.\n\n- Ao acionar o botão *Aceitar*, o usuário informa ao sistema que aceita a configuração padrão de *cookies* pré-definida pelo sistema. O *cookieBar* é então recolhido com um movimento para baixo (micro interação) e o usuário está pronto para navegar pelo *site*.\n\n- Ao acionar o botão *\"Definir Cookies\"* o usuário é levado à etapa *cookieBar* aberto e tem a possibilidade de configurar os *cookies* conforme o seu desejo, além de ter acesso às informações técnicas a respeito dos *cookies* utilizados pelo sistema.\n\n2- Já na configuração *opt in* o usuário não tem permissão para definir *cookies* e por isso o botão **Definir Cookies** é alterado para **Ver Política de Cookies**. Ao acionar este botão o usuário tem acesso às mesmas informações do padrão *opt out*, porém sem a possibilidade de alterar *cookies*."
      },
      {
        "title": "2. Navegação no CookieBar default",
        "level": 3,
        "content": "O **cookieBar na etapa default** deve ser disponibilizado sempre no primeiro acesso do usuário na tela inicial do *site*/aplicativo e pode apresentar duas versões distintas: **opt in** e **opt out**:\n\n![Exemplo de um cookieBar default na versão opt in.](imagens/diretriz-lgpd-optin.png)\n*Exemplo de cookieBar default na versão opt in*\n\n![Exemplo de um cookieBar default na versão opt out.](imagens/diretriz-lgpd-optout.png)\n*Exemplo de cookieBar default na versão opt out*\n\nO *cookieBar default* só é apresentado no primeiro acesso do usuário e só pode ser fechado se o usuário aceitar os termos definidos pelo texto apresentado. A partir de então os dados são armazenados pelo sistema e o *cookieBar* não estará mais disponível ao usuário. Caso o usuário deseje redefinir os *cookies* poderá fazê-lo por meio de um item de menu localizado no *header* do *site*/aplicativo (ou outro local de destaque).\n\n**Atenção:** quando o componente *cookieBar default* é apresentado, o conteúdo da tela pode estar bloqueado. Esse comportamento é opcional é varia de acordo com cada regra de negócio. Quando estiver bloqueado, utilize uma camada de superfície transparente (*scrim*) para demonstrar que não é possível navegar enquanto não houver a concordância com a política de *cookies* apresentada pelo *cookieBar default*.\n\n![Exemplo da tela inicial com conteúdo bloqueado pelo scrim e com cookieBar default](imagens/scrim.png)\n*Exemplo da tela inicial com conteúdo bloqueado (scrim) pelo cookieBar default*\n\nSe o usuário clicar em **\"Definir Cookies\"** o **cookieBar default** se expande para cima cobrindo inteiramente a tela (micro interação) passando então para a etapa *cookieBar* aberto.\n\n![Exemplo do cookieBar default na tela inicial e aberto, após o usuário clicar em Definir Cookies.](imagens/lgpd-inicial.png)\n*A imagem da esquerda ilustra o cookieBar default na tela inicial e a imagem da direita, o cookieBar aberto, após o usuário acionar no botão \"Definir Cookies\"*"
      },
      {
        "title": "3. Navegação no cookieBar aberto",
        "level": 3,
        "content": "Esta etapa deve apresentar tudo o que o usuário necessita para entender como cada *cookie* funciona além de permitir, nos casos *opt out*, que o usuário possa configurar as preferências de *cookies* da maneira que preferir."
      },
      {
        "title": "Classes",
        "level": 4,
        "content": "Quando houver grupos de *cookies* que apresentem algum tipo de relação entre si, eles poderão ser agrupados em *classes*. Cada classe exibe entre parênteses a quantidade de *cookies* que contém. Para expandir uma classe e ter acesso a cada um dos *cookies* basta clicar na seta correspondente à classe desejada.\n\n**Atenção:** agrupar os *cookies* por afinidades é uma boa maneira de organizar o conteúdo mas cada produto pode estruturar a informação da forma que achar mais apropriada.\n\nA figura 1 ilustra o caso em que só é permitida ao usuário a seleção de *checkbox* para toda a classes. Já na figura 2 é possível selecionar cada *cookie* individualmente por meio de *switches*.\n\n![Esta imagem apresenta duas figuras: a figura um ilustra o caso em que ao usuário só é permitida a seleção de cookies por classes. Já na figura dois é possível selecionar cada cookie individualmente.](imagens/switches.png)\n*Exemplos das possibilidades de uso dos switches*\n\n**Atenção:** geralmente o usuário ativa/desativa a classe de *cookies*, mas também é possível definir *cookies* individualmente, conforme a necessidade de cada caso. Há também a possibilidade de o usuário selecionar/desselecionar todas as classes por meio de um *checkbox* localizado no *header* da lista de *cookies*. Entre parêntese é possível informar ao usuário quantos *cookies* foram selecionados em relação ao total.\n\n![Exemplo de uso de seleção de checkbox no modo intermediário.](imagens/checkbox.png)\n*Exemplos das possibilidades de uso dos checkboxes apresentando a possibilidade do checkbox em um modo intermediário e a informação da quantidade de cookies selecionados*\n\nDesta forma, cada classe pode ser ativada ou desativada conforme a preferência do usuário. Podem ainda existir classes marcadas com o texto *\"Sempre ativos\"* na cor verde. Isso significa que essas classes não podem ser desativadas por motivos de performance do sistema e neste caso, não haverá *checkbox* para o usuário interagir.\n\n![Exemplo de tela com o cookieBar aberto apresentando a lista de classes de cookies.](imagens/lgpd-openbar.png)\n*Exemplo de tela com o cookieBar aberto apresentando a lista de classes de cookies*"
      },
      {
        "title": "Card",
        "level": 4,
        "content": "Ao clicar no ícone seta de qualquer uma das classes de *cookies* a mesma é aberta e detalhes sobre cada *cookie* são apresentados ao usuário em *cards*. Cada *cookie* pode apresentar um *switch* para habilitá-lo ou não, conforme a natureza do *cookie*.\n\n![Exemplo de uma classe de cookies aberta mostrando os detalhes do cookie em um card.](imagens/lgpd-grupo.png)\n*Exemplo de uma classe de cookies aberta mostrando os detalhes do cookie em um card*\n\n**Atenção:** cada *cookie* deve ser mostrado individualmente em um *card*. As informações descritivas sobre cada *cookie* são de responsabilidade do Órgão responsável pelo *site/aplicativo*."
      },
      {
        "title": "Aviso sobre cookies",
        "level": 4,
        "content": "O último item da lista é o **Aviso sobre cookies**. Nesse item o usuário encontra apenas informações textuais em forma de pergunta-respostas, de acordo com a imagem abaixo:\n\n![Exemplo da tela de conteúdo com o item informações rápida sobre assuntos gerais aberto.](imagens/lgpd-cookies-aviso.png)\n*Exemplo de informações rápida sobre assuntos gerais*\n\n**Atenção:** o padrão de pergunta-respostas é amplamente aceito na internet por ser uma forma rápida e objetiva de transmitir informação e por isso é bastante recomendável. Porém, o conteudista é sempre livre para criar o conteúdo da maneira que for mais interessante para seu negócio."
      },
      {
        "title": "Botão fechar",
        "level": 4,
        "content": "A qualquer momento, independentemente de haver definido os *cookies* ou não, é possível fechar a tela de conteúdo. Para tanto, basta clicar no ícone fechar no topo à direita da tela. Após confirmar a ação de fechamento, o usuário retornará à tela inicial do *site*/aplicativo com o *cookieBar default* sendo apresentado ao usuário.\n\n![Imagem detalhando a localização do botão de fechamento da tela de conteúdo do cookieBar aberto.](imagens/lgpd-fechar.png)\n*Para fechar a tela de conteúdo do cookieBar basta clicar no ícone fechar no canto superior direito*\n\n**Atenção:** lembre-se que ao fechar o *cookieBar* sem aceitar a política de *cookie* o usuário poderá ter uma navegação comprometida (ou mesmo bloqueada, dependendo do caso) e ainda assim seus dados poderão ser gravados. **Deixe essa informação de forma explícita no texto da área de conteúdo do cookieBar default.**\n\nÉ interessante que o sistema apesente uma mensagem ao usuário informando que os *cookies* não foram efetivamente salvos e que caso tenha sido feita algumas seleções, elas serão perdidas. Além disso, é de bom tom informar ao usuário como é possível retornar ao *cookieBar* para configurar ou reconfigurar os *cookies*.\n\n![Exemplo de mensagem global do sistema informando que os cookies não foram salvos.](imagens/mensagem.png)\n*Exemplo de mensagem global do sistema alertando ao usuário que um dos cookies selecionados não foram salvos*"
      },
      {
        "title": "4. Mensagens",
        "level": 3,
        "content": "Caso o usuário desabilite um *cookie* essencial que comprometa a experiência de navegação um aviso deve ser apresentado e desta forma o usuário poderá decidir se manterá a sua escolha.\nEsta mensagem deve ser exibida logo abaixo do *checkbox* ou *switch* correspondente ao clique do usuário, de acordo com as imagens a seguir:\n\n![Exemplo de mensagem ao desabilitar um cookie essencial para a performance do site/aplicativo no nível global.](imagens/lgpd-message.png)\n*Exemplo de mensagem alertando ao usuário que um cookie desabilitado é essencial para um bom funcionamento do serviço em nível global*\n\n![Exemplo de mensagem  ao desabilitar um cookie essencial para a performance do site/aplicativo no nível da classe.](imagens/lgpd-message2.png)\n*Exemplo de mensagem alertando ao usuário que um cookie desabilitado é essencial para um bom funcionamento do serviço em nível da classe*\n\n![Exemplo de mensagem ao desabilitar um cookie essencial para a performance do site/aplicativo em nível do cookie.](imagens/lgpd-message3.png)\n*Exemplo de mensagem do sistema alertando ao usuário que um cookie desabilitado é essencial para um bom funcionamento do serviço em nível do cookie*\n\n**Atenção:** se o padrão adotado for o *opt in* o usuário apenas poderá visualizar as informações disponíveis mas não haverá componentes *checkboxes* e *switches* para que os *cookies* possam ser alterados. Lembre-se de deixar essa informação clara no texto da área de conteúdo introdutório."
      },
      {
        "title": "5. Responsividade",
        "level": 3,
        "content": "Tudo o que é mencionado sobre o uso do *cookieBar* neste documento deve ser considerado para todas as resoluções. O componente *cookieBar* e todo o conteúdo devem se adaptar à qualquer resolução. A seguir, é ilustrado como exemplo os *layouts* deste componente na resolução de quatro colunas:\n\n![Exemplo de fluxo de telas mostrando como fica aplicação do componente cookieBar em resolução de quatro colunas.](imagens/lgpd-mobile.png)\n*Exemplo de aplicação do componente cookieBar em resolução de quatro colunas*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- O *cookieBar* é **obrigatório** em todos os produtos do Governo que necessitem coletar/tratar dados dos usuários e garante o consentimento do usuário para o uso de *cookies* na sua experiência de navegação.\n\n- Prefira sempre que possível utilizar o padrão *opt out* que dá autonomia para o usuário decidir sobre a coleta/tratamento de seus dados. Somente utilize o padrão *opt in* em casos restritos.\n\n- O conteúdo do *cookieBar* é de responsabilidade de cada serviço. Esteja atento para abordar todos os aspectos legais e técnicos.\n\n- **Lembre-se:** o usuário poderá ter a navegação bloqueada ou autorizada mesmo que não aceite a política de *cookies* do *site*. Neste último caso, ele pode ter seus dados gravados mesmo assim além de ter um prejuízo na experiência de navegação. É muito importante que essa informação esteja escrita de forma muito clara no texto do *cookieBar default*.\n\n- É uma ótima ideia oferecer *links* para detalhamentos legais.\n\n- É interessante pensar na possibilidade de oferecer suporte para o usuário entrar em contato caso necessite tirar algum tipo de dúvida.\n\n- Caso haja uma alteração na política de *cookies* após o usuário já houver definido as suas escolhas, o *cookieBar* deverá ser apresentado novamente com o texto explicando o motivo a solicitação de nova ação por parte do usuário. Todo o procedimento é idêntico ao já explicado neste documento."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name               | Property |          Token          |\n| ------------------ | -------- | :---------------------: |\n| Texto Sempre Ativo | color    | `--green-cool-vivid-50` |"
      },
      {
        "title": "Alinhamento",
        "level": 3,
        "content": "| Name                                            |         Spacing Token         |\n| ----------------------------------------------- | :---------------------------: |\n| Botão primário e secundário (cookieBar default) | `--spacing-horizontal-right`  |\n| Botão primário (cookieBar aberto)               | `--spacing-horizontal-right`  |\n| Text (cookieBar default)                        |  `--spacing-horizontal-left`  |\n| Conteúdo                                        | `--spacing-horizontal-center` |\n| Botão terciário (Declaração de Conformidade)    | `--spacing-horizontal-center` |\n| Switch (Header)                                 | `--spacing-horizontal-right`  |\n| Mensagem                                        |  `--spacing-vertical-right`   |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name                                         | Property                   |      Token/Value       |\n| -------------------------------------------- | -------------------------- | :--------------------: |\n| Botão primário (cookie default)              | margin-right               |  `--spacing-scale-5x`  |\n| Botão primário (cookie default)              | margin-down                |  `--spacing-scale-3x`  |\n| Botão primário (cookie aberta)               | margin-right               |  `--spacing-scale-5x`  |\n| Botão primário (cookie aberto)               | margin-top/down            | `--spacing-scale-2xh`  |\n| Text (cookieBar default)                     | margin-top                 | `--spacing-scale-3xh`  |\n| Conteúdo                                     | margin-left/right/top/down |  `--spacing-scale-5x`  |\n| Botão terciário (Declaração de Conformidade) | margin-top/down            |  `--spacing-scale-5x`  |\n| Switch (Header)                              | margin-top/down            |  `--spacing-scale-6x`  |\n| Mensagem                                     | margin-top/down            | `--spacing-scale-base` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name                                        | Property    |        Token/Value         |\n| ------------------------------------------- | ----------- | :------------------------: |\n| Text (cookieBar default)                    | size        |  `––font-size-scale-base`  |\n| Text (cookieBar default)                    | font-weight |  `--font-weight-regular`   |\n| Text (cookieBar default)                    | line-height | `-–font-lineheight-medium` |\n| Text título (cookBar aberto)                | size        | `--font-size-scale-up-06`  |\n| Text título (cookieBar default)             | font-weight |  `--font-weight-regular`   |\n| Text última atualização (cookBar aberto)    | size        | `--font-size-scale-up-01`  |\n| Text última atualização (cookieBar default) | font-weight | `--font-weight-semi-bold`  |\n| Text conteúdo (cookBar aberto)              | size        |  `--font-size-scale-base`  |\n| Text conteúdo (cookieBar default)           | font-weight |  `--font-weight-regular`   |\n| Text (Sempre ativo)                         | size        |  `––font-size-scale-base`  |\n| Text (Sempre ativo)                         | font-weight | `--font-weight-semi-bold`  |\n| Text (Sempre ativo)                         | color       |    `--color-highlight`     |\n| Text col. esquerda (card)                   | size        |  `--font-size-scale-base`  |\n| Text col. esquerda (card)                   | font-weight | `--font-weight-semi-bold`  |\n| Text col. direita (card)                    | size        | `--font-size-scale-up-01`  |\n| Text col. direita (card)                    | font-weight |  `--font-weight-regular`   |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "|    Name    |          Shadow          |\n| :--------: | :----------------------: |\n| Superfície | `--surface-shadow-xl-up` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Inclua uma descrição clara do propósito do *cookieBar*, explicando por que os *cookies* estão sendo usados no site e quais informações são coletadas;\n\n- É recomendado que os botões do *cookieBar* possam ser acessados via navegação por teclado através da tecla `Tab` e possam ser acionados por meio da tecla `Space` ou `Enter`;\n\n- O *cookieBar* deve ser apresentado em uma linguagem simples e clara, sem termos técnicos ou jargões que possam ser difíceis de entender para alguns usuários;\n\n- Certifique-se de que o *cookieBar* seja fácil de encontrar e acessar para todos os usuários, incluindo aqueles que usam tecnologias assistivas, como leitores de tela;\n\n- Forneça uma opção para que os usuários possam optar por não aceitar *cookies*, se desejarem. Isso deve ser facilmente acessível e claro para todos os usuários;\n\n- O *cookieBar* deve ser projetado de forma que não interfira no conteúdo principal do site e não prejudique a navegação dos usuários."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Em dispositivos *mobile* certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de `44px`;"
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Certifique-se de que o *cookieBar* seja compatível com as tecnologias assistivas, como leitores de tela e teclados."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/cookiebar/cookiebar.md",
      "accessibilityPath": "ds/componentes/cookiebar/cookiebar-access.md"
    }
  },
  {
    "name": "DateTimePicker",
    "slug": "datetimepicker",
    "description": "*DateTimePicker* é um componente que auxilia o usuário na seleção de uma data a partir de um calendário e/ou uma hora a partir de um seletor de horas.",
    "documentationUrl": "https://www.gov.br/ds/components/datetimepicker",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo Componente](imagens/diretriz-datetimepicker.png)\n*Exemplo do componente DateTimePicker*"
      },
      {
        "title": "Tom e Voz",
        "level": 2,
        "content": "Prefira sempre utilizar os nomes dos meses e dias no idioma português (pt-br).\nO nome do mês deve ser escrito por inteiro e os dias da semana abreviados (com três dígitos).\nPor padrão defina domingo como primeiro dia da semana."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O componente *DateTimePicker* é dividido em duas partes: *datepicker* e *timepicker* e podem ser utilizados em conjunto ou de forma independente.\n\n| ID  | Nome                                                  |                      Referência                       | Uso         |\n| --- | ----------------------------------------------------- | :---------------------------------------------------: | ----------- |\n| 1   | Campo de entrada (*Input*)                            | [Componente Input](/ds/components/input?tab=designer) | Obrigatório |\n| 2   | Mês e ano atuais e ícones de navegação entre os meses |                          ---                          | Obrigatório |\n| 3   | Dias da semana                                        |                          ---                          | Obrigatório |\n| 4   | Dia atual em destaque                                 |                          ---                          | Opcional    |\n| 5   | Dia selecionado                                       | [Fundamento Estados](/ds/fundamentos-visuais/estados) | Obrigatório |\n| 6   | *Hover*                                               | [Fundamento Estados](/ds/fundamentos-visuais/estados) | Obrigatório |\n| 7   | *Card* que contém o componente                        |  [Componente Card](/ds/components/card?tab=designer)  | Obrigatório |\n| 8   | Seletor de horas                                      |                          ---                          | Obrigatório |\n| 9   | Dias (mês anterior/posterior)                         |                          ---                          | Obrigatório |\n| 10  | Datas inicial e final selecionadas                    |                          ---                          | Obrigatório |\n| 11  | Intervalo de dias em destaque                         |                          ---                          | Obrigatório |\n| 12  | Dias desabilitados                                    |                          ---                          | Obrigatório |\n\n![Anatomia do componente DateTimePicker](imagens/anatomy-1.png)\n*Anatomia do componente DateTimePicker*\n\n![Anatomia do componente DateTimePicker](imagens/anatomy-2.png)\n*Anatomia do calendário*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "Basicamente existem três variações do componente: *DateTimePicker* (padrão), *Datepicker* e *Timepicker*:\n\n![Exemplo Tipo](imagens/anatomy-3.png)\n*Variações do componente DateTimePicker*"
      },
      {
        "title": "1. DateTimePicker",
        "level": 3,
        "content": "O *DateTimePicker* é o componente padrão para escolha conjunta de data e horário.\n\n![Tipo DateTimePicker](imagens/type-datetimepicker.png)\n*Exemplo do componente do tipo DateTimePicker*"
      },
      {
        "title": "2. Datepicker",
        "level": 3,
        "content": "O componente *datepicker* está disponível de maneira independente, isto é, um componente apenas para o calendário. O funcionamento é o mesmo já descrito anteriormente porém, ao usuário é permitido selecionar somente datas.\n\n![Tipo DatePicker](imagens/type-datepicker.png)\n*Exemplo do componente do tipo Ditepicker*"
      },
      {
        "title": "3. Timepicker",
        "level": 3,
        "content": "O componente *timepicker* também está disponível de maneira independente, isto é, um componente apenas para o seletor de horas e minutos. O funcionamento é o mesmo já descrito anteriormente porém, ao usuário é permitido selecionar somente horários.\n\n![Tipo TimePicker](imagens/type-timepicker.png)\n*Exemplo do componente do tipo Timepicker*\n\n**Atenção:** O horário *default* indicado nos campos deve ser: 00:00. Por enquanto, o componente oferece apenas o formato 24 horas como opção de uso."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Como funciona",
        "level": 3,
        "content": "O componente *DateTimePicker* funciona basicamente como seletores de datas e horas. De uma forma geral, o usuário pode selecionar datas e horas por meio do calendário e seletores disponibilizados ou simplesmente digitando diretamente no campo de entrada (*Input*) conforme a máscara sugere. O calendário e o seletor de horas podem ocorrer juntos, ou seja, em um mesmo componente ou em componentes independentes.\n\n![Exemplo Uso](imagens/uso.png)\n*Exemplos de uso*\n\nO componente *DateTimePicker* (e suas variações independentes) funcionam sempre da mesma maneira.\n\nAo clicar no campo *Input*, um calendário e/ou seletor de horas são apresentados. Uma vez selecionadas data e/ou a hora, o campo *input* é preenchido e o *card* ocultado. Para acessar novamente o calendário, basta clicar no campo *Input*.\nA qualquer momento em que o usuário clicar em qualquer área da tela fora do *card*, o mesmo será ocultado.\nO *DateTimePicker* poderá exibir a data atual em destaque para facilitar a identificação das datas no calendário."
      },
      {
        "title": "2. Navegação entre as datas",
        "level": 3,
        "content": "O usuário pode navegar linearmente pelo calendário por meio das setas de navegação. Também é possível selecionar o mês desejado por meio de um seletor nativo do componente ( *select* ) e o ano por meio de digitação no campo *input* apropriado.\n\n1. Setas de navegação linear;\n2. Combo *select* para escolha do mês;\n3. Combo *input* para escolha do ano.\n\n![Exemplo Tipo](imagens/type-datetimepicker-nav.png)\n*Possibilidades de navegação pelo calendário*"
      },
      {
        "title": "3. Intervalo de datas",
        "level": 3,
        "content": "É possível utilizar o *datepicker*, para criar uma entrada conjunta de data inicial e data final. Uma vez selecionadas as datas inicial e final, o intervalo de dias entre as datas selecionadas ficará em destaque. No exemplo abaixo, o intervalo entre os dias 8 e 12 de fevereiro está destacado.\n\n1. Data inicial selecionada;\n2. Data final selecionada e destacado todos os dias compreendidos neste intervalo.\n\n![Exemplo Comportamento](imagens/datepicker-interval.png)\n*Exemplo de comportamento de intervalo de datas selecionadas*\n\n**Atenção:** Os dias anteriores à data inicial escolhida devem ficar desabilitados, não permitindo que o usuário selecione por descuido uma data inválida."
      },
      {
        "title": "4. Estados",
        "level": 3,
        "content": "Alguns estados podem ser encontrados nos elementos do datepicker e do *timepicker*. A seguir, é ilustrado cada um deles.\n\n**Atenção:** A fim de facilitar o entendimento, os componentes estão ilustrados de forma independente porém todos os estados apresentados ocorrem também no componente padrão *DateTimePicker*."
      },
      {
        "title": "1. Hover",
        "level": 4,
        "content": "O estado *hover* ocorre nos campos *input* e nos dias do calendário.\n\n1. Estado *hover*.\n\n![Exemplo Comportamento hover](imagens/estado-hover.png)\n*Exemplo de estado hover*"
      },
      {
        "title": "2. Selecionado",
        "level": 4,
        "content": "O estado selecionado ocorre basicamente nos dias selecionados pelo usuário, tanto em um calendário simples quanto em um calendário de intervalo de datas.\n\n1. Estado selecionado.\n\n![Exemplo Comportamento selecionado](imagens/estado-selecionado.png)\n*Exemplo de estado selecionado*"
      },
      {
        "title": "3. Foco",
        "level": 4,
        "content": "O estado foco ocorre somente nos campos *input*.\n\n1. Estado foco.\n\n![Exemplo Comportamento foco](imagens/estado-foco.png)\n*Exemplo de estado de foco*"
      },
      {
        "title": "4. Destacado",
        "level": 4,
        "content": "O estado destacado ocorre unicamente para marcar o dia atual e independe de qualquer ação do usuário.\n\n1. Estado destacado.\n\n![Exemplo Comportamento destacado](imagens/estado-destacado.png)\n*Exemplo de uma data com destaque*"
      },
      {
        "title": "5. Desabilitado",
        "level": 4,
        "content": "O estado desabilitado ocorre nas datas que por qualquer motivo não podem ser selecionadas. Geralmente é utilizado para desabilitar as datas anteriores à data inicialmente escolhida.\n\n1. Estado desabilitado.\n\n![Exemplo Comportamento desabilitado](imagens/estado-desabilitado.png)\n*Exemplo de comportamento de datas desabilitadas*"
      },
      {
        "title": "5. Intervalo",
        "level": 3,
        "content": "O estado intervalo ocorre apenas nos calendários em que a seleção de duas datas (data inicial e final) é permitida e tem por finalidade destacar os dias compreendidos nesse intervalo.\n\n1. Data inicial e final selecionada;\n2. Intervalo de dias entre a data inicial e final.\n\n![Exemplo Comportamento intervalo](imagens/estado-interval.png)\n*Exemplo de comportamento de intervalo de datas*"
      },
      {
        "title": "6. Responsividade",
        "level": 3,
        "content": "O componente *DateTimePicker* for projetado para ser utilizado em qualquer resolução de tela até 4 colunas de acordo com a imagem a seguir:\n\n![Exemplo Comportamento responsividade](imagens/responsividade.png)\n*Exemplo de comportamento nas grids*"
      },
      {
        "title": "7. Utilização em fundo escuro",
        "level": 3,
        "content": "![Exemplo de uso em fundo escuro.](imagens/darkmode.png)\n*Exemplo de utilização em fundo escuro*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name                         | Token Size                | Token Weight              |\n| ---------------------------- | ------------------------- | ------------------------- |\n| Mês/Ano                      | `--font-size-scale-up-01` | `--font-weight-semi-bold` |\n| Dias da Semana               | `--font-size-scale-base`  | `--font-weight-medium`    |\n| Dias                         | `--font-size-scale-base`  | `--font-weight-semi-bold` |\n| Dia Atual                    | `--font-size-scale-base`  | `--font-weight-semi-bold` |\n| Dia Mês anterior/posterior   | `--font-size-scale-base`  | `--font-weight-regular`   |\n| Dia Desabilitados            | `--font-size-scale-base`  | `--font-weight-regular`   |\n| Intervalo Dias (Selected)    | `--font-size-scale-base`  | `--font-weight-semi-bold` |\n| Seletor (Data/Hora)          | `--font-size-scale-up-01` | `--font-weight-semi-bold` |\n| Seletor (Data/Hora Selected) | `--font-size-scale-up-01` | `--font-weight-semi-bold` |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name                              | Property | Token Color            | Opacity |\n| --------------------------------- | -------- | ---------------------- | ------- |\n| Texto Mês/Ano                     | color    | `--blue-warm-vivid-70` | -       |\n| Texto Dias da Semana              | color    | `--gray-70`            | -       |\n| Texto Dias                        | color    | `--blue-warm-vivid-70` | -       |\n| Texto Dias Mês anterior/posterior | color    | `--blue-warm-vivid-70` | 60%     |\n| Texto Dias Desabilitados          | color    | `--gray-20`            | 45%     |\n| Intervalo (dias selecionados)     | color    | `--pure-100`           | -       |\n| Seletor (Data/Hora)               | color    | `--gray-80`            | -       |\n| Seletor (Data/Hora Selected)      | color    | `--blue-warm-vivid-70` | -       |\n| Ícone \"Selecionar Data\"           | color    | `--blue-warm-vivid-70` | -       |\n| Ícone \"Marcar Hora\"               | color    | `--blue-warm-vivid-70` | -       |\n| Botão terciário \"Voltar\"          | color    | `--blue-warm-vivid-70` | -       |\n| Botão terciário \"Avançar\"         | color    | `--blue-warm-vivid-70` | -       |\n| Botão terciário \"Retrair\"         | color    | `--blue-warm-vivid-70` | -       |\n| Botão terciário \"Expandir\"        | color    | `--blue-warm-vivid-70` | -       |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name            | Ícone                           | Token Size         | Class (Font Awesome) |\n| --------------- | ------------------------------- | ------------------ | -------------------- |\n| Selecionar Data | <i class=\"fas fa-calendar\"></i> | `--icon-size-base` | fa-calendar-alt      |\n| Marcar Hora     | <i class=\"fas fa-clock\"></i>    | `--icon-size-base` | fa-clock             |"
      },
      {
        "title": "Botões Terciários",
        "level": 3,
        "content": "| Name    | Ícone                              | Token Size        | Class (Font Awesome) |\n| ------- | ---------------------------------- | ----------------- | -------------------- |\n| Voltar  | <i class=\"fas fa-angle-left\"></i>  | `--icon-size-lg`  | fa-angle-left        |\n| Avançar | <i class=\"fas fa-angle-right\"></i> | `---icon-size-lg` | fa-angle-right       |\n| Retrair | <i class=\"fas fa-angle-up\"></i>    | `---icon-size-lg` | fa-angle-up          |"
      },
      {
        "title": "Dimensão",
        "level": 3,
        "content": "| Name                      | Property | Dimension |\n| ------------------------- | -------- | --------- |\n| *Card* (*DateTimePicker*) | width    | `304px`   |\n| *Card* (*DateTimePicker*) | height   | `auto`    |\n| *Card* (*Datepicker*)     | width    | `304px`   |\n| *Card* (*Datepicker*)     | height   | `auto`    |\n| *Card* (*Timepicker*)     | width    | `144px`   |\n| *Card* (*Timepicker*)     | height   | `116px`   |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name                          | Property      | Token Spacing                 |\n| ----------------------------- | ------------- | ----------------------------- |\n| Calendário (*DateTimePicker*) | width         | `--spacing-scale-2xh`         |\n| Calendário (*DateTimePicker*) | height        | `--spacing-scale-2xh`         |\n| Seletor (*DateTimePicker*)    | width         | `--spacing-horizontal-center` |\n| Seletor (*DateTimePicker*)    | height        | `--spacing-scale-base`        |\n| Calendário (*Datepicker*)     | width         | `--spacing-scale-2xh`         |\n| Calendário (*Datepicker*)     | height        | `--spacing-scale-2xh`         |\n| Seletor (*TimePicker*)        | width         | `--spacing-scale-base`        |\n| Seletor (*TimePicker*)        | height        | `--spacing-scale-base`        |\n| Campo de Entrada (*Input*)    | margin-bottom | `--spacing-scale-base`        |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "|    Name    |        Shadow         |\n| :--------: | :-------------------: |\n| Superfície | `--surface-shadow-md` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- O *dateTimePicker* deve ser operável com teclado, permitindo que os usuários selecionem uma data sem precisar usar o *mouse*;\n\n- A navegação por teclado deve ser fácil e intuitiva, se possível utilize atalhos para selecionar uma data específica ou avançar e retroceder pelos meses e anos;\n\n- A caixa seletora de data deve ser acionada por meio da tecla `Enter` e recolhida por meio da tecla `Esc`;\n\n- Os elementos interativos devem ser acessados por meio da tecla `Tab`, seguindo uma ordem de tabulação que faça sentido para o usuário;\n\n- Forneça *feedback* aos usuários que navegam pelo teclado de forma que saibam o que está acontecendo."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Disponibilize um rótulo claro e descritivo para o *dateTimePicker*, permitindo que os usuários entendam o propósito do controle;\n\n- Certifique-se de seguir as recomendações de cores na diretriz do componente, garantindo a qualidade de contraste e legibilidade para usuários com baixa visão;\n\n- Em dispositivos móveis, certifique-se de usar uma área mínima de toque de `44px` para os elementos interativos."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Recomenda-se utilizar a *tag* semântica `<input type=\"date\">` ou `<input type=\"text\">` como alternativa;\n\n- A rotulagem no código deve oferecer uma verbalização completa da data para os usuários que utilizam leitores de tela. Por exemplo: `Sábado, 5 de agosto de 2023`, ao invés de apenas `5`;\n\n- É importante configurar corretamente o *dateTimePicker* com o formato padrão de data coerente à localidade dos usuários, oferecendo um contexto claro e evitando confusões."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Material Design](https://m3.material.io/components/date-pickers/accessibility)\n- [Carbon Design System](https://carbondesignsystem.com/components/date-picker/accessibility)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/datetimepicker/datetimepicker.md",
      "accessibilityPath": "ds/componentes/datetimepicker/datetimepicker-access.md"
    }
  },
  {
    "name": "Divider",
    "slug": "divider",
    "description": "*Divider*, também conhecido como **Divisor** ou **Separador**, é uma linha neutra que separa conteúdos, sessões ou temas afins.",
    "documentationUrl": "https://www.gov.br/ds/components/divider",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente divider.](imagens/diretriz.png)\n*Exemplo do componente divider*\n\nUtilize divide quando precisar separar na tela seções de conteúdo ou quando os espaços em branco não forem suficientes para indicar a separação dos elementos ou sessões."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *divider* composto pela borda de uma superfície formando uma linha reta.\n\n| ID  | Nome  |                         Referência                          | Uso         |\n| --- | ----- | :---------------------------------------------------------: | ----------- |\n| 1   | Borda | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n\n![Exemplo do componente divider.](imagens/anatomia.png)\n*Exemplo do componente divider*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Posição",
        "level": 3,
        "content": "O *divider* pode ser utilizado tanto na posição horizontal quanto na vertical, conforme a necessidade:\n\n![Exemplos de posições do componente divider.](imagens/posicao.png)\n*Exemplos de posições do componente divider*\n\n![Exemplos componente divider horizontal.](imagens/exemplo-horizontal.png)\n*Exemplo do componente divider horizontal*\n\n![Exemplos componente divider vertical.](imagens/exemplo-vertical.png)\n*Exemplo do componente divider vertical*"
      },
      {
        "title": "2. Fundo",
        "level": 3,
        "content": "O *divider* pode ser utilizado em fundos de qualquer cor. A seguir é ilustrado a aplicação do *divider* em um fundo claro e um fundo escuro:\n\n![Exemplo de aplicação do componente divider em fundo claro e escuro.](imagens/background.png)\n*Exemplo de aplicação do componente divider em fundo claro e escuro*\n\nAlterne as cores do componente nos casos em que o fundo tenha a cor igual ou parecida com a do *divider* tornando-o imperceptível.\n\n![Exemplo de aplicação do componente divider em fundo cinza.](imagens/background-cinza.png)\n*Exemplo de aplicação do componente divider em fundo cinza*\n\n**Atenção:** evite o uso de cores aleatórias nos *dividers*. Eles foram pensados para funcionar com as cores indicadas neste manual."
      },
      {
        "title": "3. Estados",
        "level": 3,
        "content": "*Dividers* são elementos neutros e não interativos. Em hipótese alguma devem se comportar com estados."
      },
      {
        "title": "4. Responsividade",
        "level": 3,
        "content": "*Dividers* são estruturas flexíveis e se adaptam perfeitamente à largura da tela. Por isso, ele pode ser usado sem prejuízo em qualquer resolução."
      },
      {
        "title": "5. Estilos e Espessuras",
        "level": 3,
        "content": "*Dividers* podem apresentar estilos e espessuras diferentes seguindo sempre as diretrizes de superfície do Design System.\n\n![Espessuras diferentes.](imagens/espessuras.png)\n*Exemplo de espessuras diferentes*\n\n![Estilos diferentes.](imagens/estilo.png)\n*Exemplo de estilo tracejado com espessuras diferentes*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- Os *divider* devem ser usados com moderação.\n\n- Os *dividers* devem ser usados quando os elementos não puderem ser separados por distanciamento (espaços vazios).\n\n![Estilos diferentes.](imagens/uso-correto-muito-espacamento.png)\n*Uso correto! O espaçamento já caracteriza a separação dos elementos*\n\n![Estilos diferentes.](imagens/uso-errado-muito-espacamento.png)\n*Uso não recomendado! Como o espaçamento já caracteriza a separação dos elementos não há necessidade de um divider*\n\n![Estilos diferentes.](imagens/uso-correto-pouco-espacamento.png)\n*Uso correto! Como o espaçamento é insuficiente, o espaçamento indica a separação entre os elementos*\n\n- Utilize o *divider* apenas para separar na tela seções de conteúdo.\n\n- Os *dividers* devem ser visíveis em um *layout*, porém não devem \"destoar\" chamando mais atenção que o próprio conteúdo.\n\n![Uso errado do componente divider vertical.](imagens/exemplo-errado-vertical.png)\n*Uso errado do componente divider vertical*\n\n- Não utilize *dividers* para circundar um item. Prefira bordas.\n\n- Opte por utilizá-los para criar agrupamentos em vez de itens separados.\n\n![Prefira os dividers para separar blocos de conteúdo e não elementos separadamente.](imagens/divider-list.png)\n*Na imagem da esquerda o divider é utilizado para separar grupos de conteúdo, isso torna o layout mais limpo e simplificado. Na imagem da direita ele é usado de forma errada, separando cada um dos subitens, tornando o layout confuso e poluído*\n\n- O componente *divider* pode \"sangrar\" (ausência de margens) quando utilizado dentro de outro componente.\n\n![Exemplo ilustrando o comportamento de \"sangria\" do divider.](imagens/divider-bleed.png)\n*O componente divider pode \"sangrar\" no componente em que está contido. Essa é uma opção de estilo do designer na criação do layout e não possui necessariamente uma regra*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name                     | Property   | Color Token |\n| ------------------------ | ---------- | :---------: |\n| *Divider* (fundo claro)  | background | `--gray-20` |\n| *Divider* (fundo escuro) | background | `--pure-0`  |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name                 | Property   |     Token/Value      |\n| -------------------- | ---------- | :------------------: |\n| *Divider* horizontal | top/bottom | `--spacing-scale-2x` |\n| *Divider* vertical   | left/right | `--spacing-scale-2x` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Por se tratar de um elemento decorativo, o *divider* deve ser **ignorado** pelos leitores de tela e o foco não deve passar por ele. Essa prática evita que os usuários de tecnologias assistivas percam tempo com paradas irrelevantes durante o fluxo de navegação."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- *Dividers* **não** possuem requisitos mínimos de contraste, visto que são apenas elementos decorativos;\n- Evite o uso excessivo de *dividers* no *layout*, para não distrair ou confundir os usuários."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Utilize o elemento semântico apropriado para o *divider*, a tag `<hr>`. Como alternativas, também podem ser usadas as tags `<div>` ou `<span>`;"
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Material Design System](https://m3.material.io/components/divider/accessibility)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/divider/divider.md",
      "accessibilityPath": "ds/componentes/divider/divider-access.md"
    }
  },
  {
    "name": "Footer",
    "slug": "footer",
    "description": "Geralmente localizado na parte inferior das páginas, o *footer* (rodapé) pode ser organizado de formas distintas. Normalmente essa organização é definida através da combinação de elementos que reforçam a identidade visual com o conteúdo a ser informado, respeitando os objetivos de negócio e as necessidades do usuário.",
    "documentationUrl": "https://www.gov.br/ds/components/footer",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente footer.](imagens/footer-type-standard.png)\n*Exemplo do componente footer*\n\nO *footer*, deve ser utilizado como um elemento de \"fechamento\" de conteúdo de página, ajudando o usuário em sua localização e, em muitos casos, auxiliando-o com serviços úteis e informações complementares.\n\nSeu *layout* pode variar em seu conteúdo, cor e forma dependendo da necessidade do projeto ou do padrão da *grid* ao qual o *footer* deverá se adequar."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "O *footer* deve apresentar um padrão organizacional com *layout* consistente, previsível e facilmente detectável em todas as páginas do projeto."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *footer* é composto por vários elementos visuais e componentes organizados em espaços determinados. É importante notar que **os elementos se repetem nas versões e variações do footer**, podendo assumir outras formas dependendo do tipo escolhido ou da resolução da tela.\n\nA seguir, apresentamos os elementos e componentes mais utilizados no *footer*:\n\n| ID  | Nome                          |                          Referência                           | Uso         |\n| --- | ----------------------------- | :-----------------------------------------------------------: | ----------- |\n| 1   | Área de Logo                  |                              ---                              | Opcional    |\n| 2   | Área de Mapa do Site          |                              ---                              | Opcional    |\n| 3   | Componente *List*             |      [Componente List](/ds/components/list?tab=designer)      | Opcional    |\n| 4   | Ícone \"expandir\"              | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 5   | Ícone \"retrair\"               | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 6   | Título do Conteúdo Secundário |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 7   | Conteúdo Secundário           |                              ---                              | Opcional    |\n| 8   | Logo assinatura               |                              ---                              | Opcional    |\n| 9   | Área de Informação Legal      |                              ---                              | Opcional    |\n| 10  | Conteúdo informação legal     |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 11  | Destaque do conteúdo          |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 12  | *container* do *footer*       |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 13  | Componente *divider*          |   [Componente Divider](/ds/components/divider?tab=designer)   | Condicional |\n\n![Anatomia do componente footer em grid de doze colunas.](imagens/footer-anatomy-1.png)\n*Anatomia do componente footer em grid de 12 colunas*\n\n![Anatomia do componente footer em grid de oito colunas.](imagens/footer-anatomy-2.png)\n*Anatomia do componente footer em grid de 8 colunas*\n\n![Anatomia do componente footer em grid de quatro colunas.](imagens/footer-anatomy-3.png)\n*Anatomia do componente footer em grid de 4 colunas*\n\n**Atenção:** em caso de necessidade de inserção de novos componentes, a equipe de design responsável pelo *Design System* deverá ser contactada para a realização de um estudo preliminar."
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": "O *footer* é organizado em quatro grandes áreas compostas por vários elementos. Neste tópico, exploraremos cada uma dessas áreas e seus respectivos elementos com mais detalhes:\n\n![Detalhamento das áreas do componente footer.](imagens/footer-structure.png)\n*Detalhamento das áreas do componente footer*"
      },
      {
        "title": "1. Área de Logo",
        "level": 4,
        "content": "Esta área destina-se à inserção do logo do sistema ou portal, observando as alturas e larguras mínimas e máximas definidas nas Especificações.\n\n![Área logo principal.](imagens/footer-logo.png)\n*Área de logo principal*\n\nÉ permitido o uso de mais de um logo nesta área, desde que sirvam para identificar a solução em uso pelo usuário. Logotipos que não cumpram essa finalidade devem ser aplicados na Área Secundária.\n\nPor padrão, o logo está alinhado à esquerda, mas é possível configurar outros tipos de alinhamento."
      },
      {
        "title": "2, 3, 4, e 5. Área de Mapa do Site",
        "level": 4,
        "content": "O mapa do *site* é formado pela junção de vários componentes *list*. Cada *list* deverá se adaptar a todos os tipos de *grid*, respeitando as definições de espaçamento e alinhamento propostos, mantendo uma melhor organização quanto à responsividade.\n\n**Atenção:** caso o mapa do *site* apresentado esteja muito extenso, correndo o risco de se tornar pesado e difícil de usar, será necessária a criação de um mapa completo do *site* em uma página separada e vinculá-lo ao *footer*, que é geralmente onde os usuários esperam encontrar essa informação.\n\n![Exemplo de list usada de duas em duas colunas.](imagens/footer-sitemap.png)\n*Exemplo de list usada de 2 em 2 colunas*\n\n**Atenção:** o componente *list*, em todos os itens que o compõe, possui a altura definida como comportamento de densidade."
      },
      {
        "title": "Mapa do Site - adição de novas Lists",
        "level": 5,
        "content": "Sempre que houver a necessidade de adicionar novas *lists*, estas deverão ser organizadas abaixo mantendo as especificações de colunas e de espaçamento já definidas nos *tokens*.\n\n![Exemplo de adição de novas lists no footer.](imagens/footer-add-sitemap.png)\n*Exemplo de adição de novas lists no footer*"
      },
      {
        "title": "Comportamento de expansão de list",
        "level": 5,
        "content": "O mapa do *site* quando utilizados em *layouts* com 4 e 8 colunas deve ser apresentado como *lists* no \"comportamento *list* expandir\", devida à limitação de espaço.\n\nPara o *footer* o \"comportamento *list* expandir\" transforma as categorias das *lists* expansíveis com ação [*collapse*](/ds/padroes/design/collapse). Cada categoria da *list*, quando acionada, apresentará em seu interior os itens da *list* que a compõe.\n\nPor definição, só deve ser apresentada uma *list* por vez, ou seja, quando uma categoria com seus itens estiver aberta, automaticamente as outras deverão permanecer fechadas.\n\n![Exemplo do comportamento expandir footer em grid de quatro e oito colunas.](imagens/footer-expand-list.png)\n*Exemplo do comportamento expandir em footer de 4 e 8 colunas*"
      },
      {
        "title": "6, 7 e 8. Área de Informações Secundárias",
        "level": 4,
        "content": "É formada pela junção das informações referentes às redes sociais e às marcas utilizadas como assinaturas.\n\n![Exemplo de áreas secundárias.](imagens/footer-second_inform.png)\n*Exemplos de áreas secundárias*"
      },
      {
        "title": "Redes Sociais",
        "level": 5,
        "content": "Esta área fornece botões secundários de acesso rápido às redes sociais."
      },
      {
        "title": "Logo Assinatura",
        "level": 5,
        "content": "Área destinada à apresentação de logos ou siglas que integrem uma empresa ou marcas parceiras que patrocinam ou endossam um evento ou projeto específico."
      },
      {
        "title": "9, 10 e 11. Área de Informação Legal",
        "level": 4,
        "content": "Esta área apresenta informações indispensáveis ao sistema ou portal e deve ser utilizado sempre que for necessário.\n\n![Exemplo de áreas de informação legal.](imagens/footer-legal_info.png)\n*Exemplos de áreas de informação legal*\n\n*Atenção:* o componente *list* possui documentação com suas próprias especificações, no entanto, houve a necessidade de ajustes de cor para se adequar ao *layout* do componente *footer*. Ver mais detalhes na área de *token*."
      },
      {
        "title": "13. Componente Divider",
        "level": 4,
        "content": "Os *Dividers* devem ser utilizados para separar o *Footer* do restante do conteudo de uma página e a área de \"Logo + Mapa do Site + Secundária\" da área de Informação Legal.\n\nCaso essas áreas não estejam sendo utilizadas na interface, esses dividers não precisam ser exibidos."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": "O componente *footer* deve se comportar de forma fluida em relação à resolução de tela utilizada. A tabela a seguir resume as dimensões de *footer* utilizadas referentes à quantidade de *grids*:\n\nSeguem exemplos de *footers* para cada *grid* disponível:\n\n![Exemplo de rodapé simples em grid de doze colunas.](imagens/footer-behavior-responsive-simple-grid-12col.png)\n*Rodapé simples em grid de 12 colunas*\n\n![Exemplo de rodapé simples em grid de oito colunas.](imagens/footer-behavior-responsive-simple-grid-8col.png)\n*Rodapé simples em grid de 8 colunas*\n\n![Exemplo de rodapé simples em grid de quatro colunas.](imagens/footer-behavior-responsive-simple-grid-4col.png)\n*Rodapé simples em grid de 4 colunas*\n\n![Exemplo de rodapé complexo em grid de doze colunas (seis lists).](imagens/footer-behavior-responsive-complex-grid-12col-6lists.png)\n*Rodapé complexo em grid de 12 colunas (6 lists)*\n\n![Exemplo de rodapé complexo em grid de doze colunas (doze lists)](imagens/footer-behavior-responsive-complex-grid-12col-12lists.png)\n*Rodapé complexo em grid de 12 colunas (12 lists)*\n\n![Exemplo de rodapé complexo em grid de oito colunas.](imagens/footer-behavior-responsive-complex-grid-8col.png)\n*Rodapé complexo em grid de 8 colunas*\n\n![Exemplo de rodapé complexo em grid de quatro colunas.](imagens/footer-behavior-responsive-complex-grid-4col.png)\n*Rodapé complexo em grid de 12 colunas (4 lists)*\n\n![Exemplo de barra de informação em grid de doze colunas.](imagens/footer-behavior-responsive-simple-info-grid-12col.png)\n*Rodapé simples - barra de informação em grid de 12 colunas*\n\n![Exemplo de barra de informação em grid de oito colunas.](imagens/footer-behavior-responsive-simple-info-grid-8col.png)\n*Rodapé simples - barra de informação em grid de 8 colunas*\n\n![Exemplo de barra de informação em grid de quatro colunas.](imagens/footer-behavior-responsive-simple-info-grid-4col.png)\n*Rodapé simples - barra de informação em grid de 4 colunas*\n\n![Exemplo de barra de informação em grid de doze colunas (seis lists)](imagens/footer-behavior-responsive-complex-info-grid-12col-6lists.png)\n*Rodapé complexo - barra de informação em grid de 12 colunas (6 lists)*\n\n![Exemplo de barra de informação em grid de doze colunas (doze lists)](imagens/footer-behavior-responsive-complex-info-grid-12col-12lists.png)\n*Rodapé complexo - barra de informação em grid de 12 colunas (12 lists)*\n\n![Exemplo barra de informação em grid de oito colunas.](imagens/footer-behavior-responsive-complex-info-grid-8col.png)\n*Rodapé complexo - barra de informação em grid de 8 colunas*\n\n![Exemplo barra de informação em grid de quatro colunas.](imagens/footer-behavior-responsive-complex-info-grid-4col.png)\n*Rodapé complexo - barra de informação em grid de 4 colunas*\n\n**Atenção:** mesmo existindo variação na quantidade de *lists* apresentadas para o *footer*, estes deverão se ajustar à disposição de sua respectiva *grid*."
      },
      {
        "title": "2. Fundo Claro e Fundo Escuro",
        "level": 3,
        "content": "O *footer* pode ser utilizado com dois tipos de superfícies distintas: *Fundo Claro* e *Fundo Escuro*.\n\n![Exemplo de footer utilizando o tema 1.](imagens/footer-behavior-theme1.png)\n*Exemplo de footer utilizando o fundo escuro*\n\n![Exemplo de footer utilizando o tema 2.](imagens/footer-behavior-theme2.png)\n*Exemplo de footer utilizando o fundo claro*"
      },
      {
        "title": "3. Layout Fluido",
        "level": 3,
        "content": "Em alguns casos, conforme a necessidade do projeto ou das regras de negócio, os elementos do *footer* podem apresentar mudanças de alinhamento, afetando desta forma seu *layout*.\nEsta organização e composição final deverá sempre respeitar o alinhamento na sua respectiva *grid*.\n\n![Exemplos do comportamento fluido do footer.](imagens/footer-fluidlayout.png)\n*Exemplos do comportamento fluido do footer*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name                                | Size                        | Weight                     | Outros                      |\n| ----------------------------------- | --------------------------- | -------------------------- | --------------------------- |\n| Título Redes Sociais                | `-–font-size-scale-up-01`   | `-–font-weight-bold`       | -                           |\n| Texto Informações Legais            | `-–font-size-scale-down-01` | `-–font-weight-medium`     | -                           |\n| Texto Informações Legais - Destaque | `-–font-size-scale-down-01` | `-–font-weight-extra-bold` | -                           |\n| Texto componente list (categoria)   | `-–font-size-scale-down-02` | `--font-weight-semi-bold`  | `text-transform:uppercase;` |\n| Texto componente list (itens)       | `--font-size-scale-base`    | `--font-weight-regular`    | -                           |"
      },
      {
        "title": "Cores",
        "level": 3,
        "content": ""
      },
      {
        "title": "Footer Fundo Escuro",
        "level": 4,
        "content": "| Name                                | Property         | Color Token            |\n| ----------------------------------- | ---------------- | ---------------------- |\n| Logo Principal                      | color            | `--pure-0`             |\n| Texto Componente Lista              | color            | `--blue-warm-20`       |\n| Container Componente Lista          | background color | `--blue-warm-vivid-90` |\n| Ícone Expandir                      | color            | `--blue-warm-20`       |\n| Ícone Retrair                       | color            | `--blue-warm-20`       |\n| Título Redes Sociais                | color            | `--pure-0`             |\n| Container Informações Legais        | background color | `--blue-warm-vivid-90` |\n| Logo Assinatura                     | color            | `--pure-0`             |\n| Texto Informações Legais            | color            | `--pure-0`             |\n| Texto Informações Legais - Destaque | color            | `--pure-0`             |\n| Container *Footer*                  | background color | `--blue-warm-vivid-90` |"
      },
      {
        "title": "Footer Fundo Claro",
        "level": 4,
        "content": "| Name                                | Property         | Color Token            |\n| ----------------------------------- | ---------------- | ---------------------- |\n| Logo Principal                      | color            | `--gray-80`            |\n| Texto Componente Lista              | color            | `--blue-warm-vivid-70` |\n| Container Componente Lista          | background color | `--pure-0`             |\n| Ícone Expandir                      | color            | `--blue-warm-vivid-70` |\n| Ícone Retrair                       | color            | `--blue-warm-vivid-70` |\n| Título Redes Sociais                | color            | `--gray-80`            |\n| Container Informações Legais        | background color | `--pure-0`             |\n| Logo Assinatura                     | color            | `--gray-80`            |\n| Texto Informações Legais            | color            | `--gray-80`            |\n| Texto Informações Legais - Destaque | color            | `--gray-80`            |\n| Container *Footer*                  | background color | `--pure-0`             |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": ""
      },
      {
        "title": "Áreas de Logo, Mapa do Site e Secundária",
        "level": 4,
        "content": "| Name                          | Padding - Property             |\n| ----------------------------- | ------------------------------ |\n| Componente Divider            | `0px` / `0px` / `48px` / `0px` |\n| Área de Logo                  | `0px` / `0px` / `48px` / `0px` |\n| Área de Mapa do Site          | `0px` / `0px` / `48px` / `0px` |\n| Área Secundária               | `0px` / `0px` / `48px` / `0px` |\n| Título do Conteúdo Secundário | `0px` / `0px` / `0px` / `24px` |\n| Conteúdo Secundário           | `16px` entre os elementos      |"
      },
      {
        "title": "Área Informação Legal",
        "level": 4,
        "content": "| Name                     | Padding - Property            |\n| ------------------------ | ----------------------------- |\n| Componente Divider       | `0px` / `0px` / `0px` / `0px` |\n| Texto Informações Legais | alinhamento `centralizado`    |"
      },
      {
        "title": "Dimensão",
        "level": 3,
        "content": ""
      },
      {
        "title": "Dimensões - Sem Informação Legal",
        "level": 4,
        "content": "| Name                                      | Property                         |\n| ----------------------------------------- | -------------------------------- |\n| *4 Colunas*                               | *width* / *height*               |\n| Componente Divider                        | `480px` /`1px`                   |\n| Logo Principal e Assinatura - Tam. Mínimo | `102px` / `variável`             |\n| Logo Principal e Assinatura - Tam. Máximo | `180px` / `variável`             |\n| Container *Footer*                        | `480px` / `133px`                |\n| *8 Colunas*                               | *width* / *height*               |\n| Componente Divider                        | `768px` / `1px`                  |\n| Logo Principal e Assinatura - Tam. Mínimo | `102px` / `variável`             |\n| Logo Principal e Assinatura - Tam. Máximo | `180px` / `variável`             |\n| Container Redes Sociais                   | `688px` / `96px`                 |\n| Container *Footer*                        | `768px` / `variável (conteúdo)`  |\n| *12 Colunas*                              | *width* / *height*               |\n| Componente Divider                        | `1280px` / `1px`                 |\n| Logo Principal e Assinatura - Tam. Mínimo | `102px` / `variável`             |\n| Logo Principal e Assinatura - Tam. Máximo | `180px` / `variável`             |\n| Container Redes Sociais                   | `1200px` / `96px`                |\n| Container *Footer*                        | `1280px` / `variável (conteúdo)` |"
      },
      {
        "title": "Dimensões - Área Informação Legal",
        "level": 4,
        "content": "| Name                         | Property           |\n| ---------------------------- | ------------------ |\n| *4 Colunas*                  | *width* / *height* |\n| Componente divider           | `480px` / `1px`    |\n| Container Informações Legais | `480px` / `48px`   |\n| *8 Colunas*                  | *width* / *height* |\n| Componente Divider           | `768px` / `1px`    |\n| Container Informações Legais | `788px` / `48px`   |\n| *12 Colunas*                 | *width* / *height* |\n| Componente Divider           | `1280px` / `1px`   |\n| Container Informações Legais | `1280px` / `48px`  |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- O *footer* deve ter uma estrutura clara e organizada, com informações relevantes e úteis para o usuário;\n\n- É recomendado que os *links* possam ser acessados via navegação por teclado através da tecla `Tab` e possam ser acionados por meio da tecla `Space` ou `Enter`;"
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Verifique o uso das cores em `cor de superfície` e `cor de leitura` no *footer* se correspondem às recomendadas na diretriz de design, garantindo um contraste de cores adequado para uma boa acessibilidade;\n\n- Em dispositivos *mobile* certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de `44px`;"
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- É recomendado usar a *tag* semântica `<footer>` para o componente;\n\n- Mantenha **sempre** habilitado o estado foco na configuração do navegador, para os elementos focados exibirem os recursos visuais próprios do estado;\n\n- Todos os *links* no *footer* devem ser claramente identificados como tal, com texto descritivo que indique o destino do link;\n\n- Use os atributos ARIA para descrever elementos interativos e permitir que usuários com deficiência visual possam interagir com o *footer*."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/footer/footer.md",
      "accessibilityPath": "ds/componentes/footer/footer-access.md"
    }
  },
  {
    "name": "Header",
    "slug": "header",
    "description": "O componente *Header* é o principal elemento de uma página, onde podem ser agrupados componentes predefinidos que tem como finalidade auxiliar o usuário no acesso ou mesmo execução das funcionalidades principais site/sistema.",
    "documentationUrl": "https://www.gov.br/ds/components/header",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "Utilize o *Header* quando necessitar identificar o nome do site/sistema, agrupar os elementos de navegação, de funcionalidades e de suporte ao usuário.\n\n![Exemplo Header](imagens/header-anatomy-type-default.png)\n*Exemplo de uso do Header*"
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome                      |                          Referência                           | Uso         |\n| --- | ------------------------- | :-----------------------------------------------------------: | ----------- |\n| 1   | Logo                      |                              ---                              | Opcional    |\n| 2   | Assinatura                |                              ---                              | Opcional    |\n| 3   | Título                    |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Obrigatório |\n| 4   | Subtítulo                 |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 5   | Botão Menu                |    [Componente Button](/ds/components/button?tab=designer)    | Opcional    |\n| 6   | Área para Links           |                              ---                              | Opcional    |\n| 7   | Área para Funcionalidades | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 8   | Botão Autenticar          |   [Componente Sign-In](/ds/components/signin?tab=designer)    | Opcional    |\n| 9   | Avatar do Usuário         |    [Componente Avatar](/ds/components/avatar?tab=designer)    | Opcional    |\n| 10  | Campo de Busca            |     [Componente Input](/ds/components/input?tab=designer)     | Opcional    |\n| 11  | Lista Dropdown            |        [Padrão Dropdown](/ds/padroes/design/dropdown)         | Opcional    |\n| 12  | Superfície                |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 13  | Separadores               |   [Componente Divider](/ds/components/divider?tab=designer)   | Obrigatório |\n\n![Anatomia Header Padrão](imagens/header-anatomy-1.png)\n*Anatomia do Header Padrão*\n\n![Anatomia Header Compacto](imagens/header-anatomy-2.png)\n*Anatomia do Header Compacto*\n\n![Anatomia Header 4 Colunas](imagens/header-anatomy-3.png)\n*Anatomia do Header Grid 4 Colunas*\n\n![Anatomia Dropdown](imagens/header-anatomy-12.png)\n*Anatomia do Dropdown*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Logo (Opcional)",
        "level": 3,
        "content": "Existem três tamanhos para a logo. Cada um usado para um nível ênfase determinado:\n\n1. **Large**: maior ênfase\n2. **Medium**: média ênfase\n3. **Small**: baixa ênfase\n\n![Tamanhos Logo](imagens/header-anatomy-4.png)\n*Tamanhos das Logos*\n\n**OBS:** Logos (imagens) são limitadas pela a altura. É recomendada que a largura tenha, no máximo, 4x a dimensão da altura (ênfase) escolhida.\n\n**Large**: Usado quando temos espaço disponível e queremos dar maior destaque para marca do sistema/site. Comum no *Header* Padrão (Grid de 12 e 8 colunas);\n\n![Header Padrão - Logo Large](imagens/header-anatomy-type-default.png)\n*Header Padrão - Logo Large*\n\n**Medium**: Usado quando não temos tanto espaço disponível, mas mesmo assim queremos dar destaques para a marca. Comum em versão mobile (Grid de 4 colunas);\n\n![Exemplo Logo Medium](imagens/header-anatomy-logo-medium.png)\n*Header - Logo Medium*\n\n**Small**: Usado quando a marca não necessita de tanto destaque em relação a outros elementos, ou temos um espaço muito menor na tela. Comum nos *Headers* do tipo Compacto (Grid de 12 e 8 colunas) e em comportamentos de *Sticky Headers*.\n\n![Header Compacto - Logo Small](imagens/header-anatomy-type-compact.png)\n*Header Compacto - Logo Small*\n\nA logo é um elemento *opcional* como demonstrado nos exemplos abaixo:\n\n![Header Compacto - Logo Small](imagens/header-anatomy-compact-logo.png)\n*Header Compacto - Logo Small*\n\n![Header Compacto - Sem Logo](imagens/header-anatomy-compact-no-logo.png)\n*Header Compacto - Sem Logo*\n\n**OBS:** Recomendamos a utilização do Separador sempre que utilizar algum outro elemento posicionado lado a lado com a Logo, como a Assinatura por exemplo. Isso pode facilitar a leitura e trazer um maior equilíbrio visual dentro do *Header*."
      },
      {
        "title": "2. Assinatura (Opcional)",
        "level": 3,
        "content": "A assinatura serve para identificar uma subcategoria ou descrição relacionada à marca. Descreve uma categoria superior ao título do cabeçalho. Fica localizada ao lado da logo/marca. É um elemento opcional.\n\n![Header Assinatura](imagens/header-anatomy-signature.png)\n*Header utilizando a assinatura*\n\n![Header Sem Assinatura](imagens/header-anatomy-type-no-signature.png)\n*Header sem a assinatura*\n\n**Atenção:** recomendamos que a assinatura *permaneça oculta* em variações *mobile* (Grid de 4 colunas) e no *comportamento do Sticky Header*, como observa-se no exemplo abaixo:\n\n![Exemplos Header](imagens/header-anatomy-signature-1.png)\n*Exemplos de Header com e sem assinatura*"
      },
      {
        "title": "3. Título (Obrigatório)",
        "level": 3,
        "content": "No *Header* deve sempre existir um título que identifique o site, sistema ou aplicativo. Em alguns dispositivos (como celulares), o título pode identificar a página atual.\n\nO título é o único elemento obrigatório no *Header*, porém é possível utilizar texto ou outro elemento para substituí-lo.\n\n**OBS:** Caso não deseje utilizar o título textual, opte pelo elemento Logo que pode ser posicionamento no mesmo local do texto."
      },
      {
        "title": "Comportamentos no formato Textual",
        "level": 4,
        "content": ""
      },
      {
        "title": "Tamanho da Fonte",
        "level": 5,
        "content": "O tamanho da tipografia no título do Header muda conforme se ajusta às diferentes resoluções e grids. Esses ajustes ocorrem de acordo com os *Breakpoints*.\n\n![Exemplo Header - Diferentes Grids](imagens/header-behaviour-title-default.png)\n*Diferentes tamanhos para tipografia em cada grid*\n\n**OBS:** Consulte os tamanhos das fontes tipográficas na seção *Design Tokens > Tipografia*."
      },
      {
        "title": "Quantidade de Caracteres",
        "level": 5,
        "content": "O título do Header poderá variar bastante em relação à quantidade de caracteres. Tendo em vista este aspecto essencial, o Header pode suportar *no máximo até duas linhas de texto*, não podendo ultrapassar este limite. Em casos extremos e raros, quando o título ultrapassar a quantidade de caracteres superior a duas linhas, o mesmo deve ser *truncado e adicionado três pontos (...)* ao final. Observe os exemplos abaixo:\n\n![Exemplos Títulos Duas Linhas](imagens/header-behavior-tilte.png)\n*No exemplo acima, na versão para celulares, ocorre o truncamento do título.*\n\nÉ importante salientar que quando o título cresce para duas linhas a altura do *header* acompanha o crescimento na vertical. O mesmo comportamento ocorre com a *versão compacta do Header*.\n\n![Títulos Versão Compacta](imagens/header-compact-behavior-tilte.png)\n*Títulos na versão compacta.*\n\nO mesmo comportamento ocorre quando o *Título* vem acompanhado do *Subtítulo*. Veja abaixo:\n\n![Header Compacto Título e Sub-Título](imagens/header-compact-behavior-tilte-subtitle.png)\n*Header compacto com título e subtítulo.*\n\n**OBS:** Consulte na seção *Design Tokens > Dimensões*, as mudanças na altura do Header em decorrência do número de linhas."
      },
      {
        "title": "4. Subtítulo (Opcional)",
        "level": 3,
        "content": "Subtítulos servem para reforçar a identificação de uma categoria ou descrição associada ao título da página. Fica localizado imediatamente abaixo do título. Trata-se de um elemento opcional.\n\nObserve abaixo a utilização do *Subtítulo do Header* em diferentes grids.\n\n![Exemplo Subtítulo - Diferentes Grids](imagens/header-compact-anatomy-subtitle.png)\n*Exemplo Subtítulo em diferentes grids.*\n\n**Atenção:** Note que o subtítulo permanece obrigatoriamente oculto nas versões mobile (grid de 4 colunas).\n\nTanto o título quanto o subtítulo podem ser apresentados no formato de *hyperlinks*. A imagem a seguir ilustra essa possibilidade:\n\n![Header com hyperlinks](imagens/header-compact-anatomy-subtitle-link.png)\n*Exemplos de header com títulos e subtítulo em forma de hyperlink.*"
      },
      {
        "title": "5. Botão Menu (Opcional)",
        "level": 3,
        "content": "Elemento opcional utilizado para interagir com o componente Menu (para exibir, esconder, retrair ou outro comportamento possível).\n\n![Botão Menu](imagens/header-anatomy-5.png)\n*Button usado para acessar o Menu*"
      },
      {
        "title": "6. Área para Links (Opcional)",
        "level": 3,
        "content": "Trata-se de links opcionais de apoio. Devem ser usados apenas quando fizerem parte do contexto ou tema tratado no Site/Sistema. Neste caso, apontarão para sítios ou sistemas externos.\n\nQuando a quantidade de links não couber no espaço horizontal em decorrência do tamanho do título, número de links, ou resolução da tela, estes devem ser acessados através da *Lista Dropdown*. Veja o exemplo abaixo com suas variações:\n\n![Área Links](imagens/header-anatomy-links-area.png)\n*Área para Links*"
      },
      {
        "title": "7. Área para Funcionalidades (Opcional)",
        "level": 3,
        "content": "São itens opcionais e devem ser utilizados quando houver necessidades específicas em cada Site/Sistema.\n\nQuando a quantidade de ícones não couber no espaço horizontal em decorrência do tamanho do título, número de funcionalidades, ou resolução da tela, estes devem ser acessados através da *Lista Dropdown*.\n\nPreferencialmente, utilize o *Button* na versão com densidade alta.\n\n![Área Funcionalidades](imagens/header-anatomy-functions-area.png)\n*Área para Funcionalidades*"
      },
      {
        "title": "8. Botão de Autenticar (Opcional)",
        "level": 3,
        "content": "O Botão de Autenticar é opcional e fica localizado no canto direito do *Header* e através dele o usuário poderá realizar os passos de autenticação no ambiente GovBr ou no sistema relacionado ([veja Sign-in](/ds/components/signin?tab=designer)).\n\nÉ apresentado apenas quando o usuário estiver \"deslogado\". Após o login, ele será substituído pelo Avatar.\n\nPreferencialmente, utilize o *Sign-in* na versão com densidade alta.\n\n![Botão Autenticar](imagens/header-anatomy-8.png)\n*Botão Autenticar*"
      },
      {
        "title": "9. Avatar do Usuário (Opcional)",
        "level": 3,
        "content": "O Avatar do Usuário é um elemento opcional que consiste em uma imagem (ou ícone, caso o usuário não tenho escolhido uma foto para representá-lo no ambiente virtual) e dá acesso a algumas ferramentas úteis à configuração do usuário e notificações do sistema. *Este elemento só será apresentado quando o usuário estiver autenticado* no ambiente. A opção de *Logout* ou *Sair* ficará disponível no elemento *Dropdown* após o clique/toque no *Componente Avatar*.\n\n![Avatar Usuário](imagens/header-anatomy-9.png)\n*Avatar Usuário*\n\n![Avatar Usuário Dropdown](imagens/header-anatomy-15.png)\n*1- Dropdown; 2- Dropdown Mobile.*\n\nHá disponível um documento com maiores detalhes do componente Avatar. Por favor consulte-o para mais detalhes."
      },
      {
        "title": "10. Busca (Opcional)",
        "level": 3,
        "content": "Através deste *Input* o usuário poderá realizar pesquisa no Site/Sistema por palavra-chave. Este elemento é opcional e deve ser usado de acordo com a necessidade de cada Site/Sistema.\n\nO *Input* foi estilizado para se adaptador as características de um *header*. O detalhe desse novos estilos estão descritos na área de *Especificação*.\n\nAbaixo seguem os exemplos de visualização da Busca no Header para diferentes *breakpoints*.\n\n![Exemplo Busca](imagens/header-anatomy-10.png)\n*Exemplo Busca*"
      },
      {
        "title": "11. Lista Dropdown (Opcional)",
        "level": 3,
        "content": "A lista *dropdown* é utilizada na área para Links e para Funcionalidades."
      },
      {
        "title": "Área para Links",
        "level": 4,
        "content": "O usuário deverá clicar sobre o ícone `ellipsis-v` e uma **Lista Dropdown** aparecerá flutuando sobre o conteúdo. Este elemento corresponde ao **Componente List**. Observe o modelo abaixo:\n\n![Área Links](imagens/header-anatomy-13.png)\n*1- Dropdown; 2- Dropdown Mobile.*"
      },
      {
        "title": "Área para Funcionalidades",
        "level": 4,
        "content": "O usuário deverá clicar sobre o ícone `th` e uma **Lista Dropdown** aparecerá flutuando sobre o conteúdo. Este elemento corresponde ao **Componente List**. Observe o modelo abaixo:\n\n![Área Funcionalidades](imagens/header-anatomy-14.png)\n*1- Dropdown; 2- Dropdown Mobile.*"
      },
      {
        "title": "12. Superfície (Obrigatório)",
        "level": 3,
        "content": "A superfície foi utilizada para agrupar melhor todos os elementos que compõem o componente *Header*. Ela não possui um altura fixa (somente um espaçamento interno padrão), sendo flexível, se ajustando conforme a distribuição dos elementos internos."
      },
      {
        "title": "13. Separadores (Obrigatório)",
        "level": 3,
        "content": "No *Header* utilizamos os separadores para agruparmos a área para Links, área para Funcionalidades e a Ação de busca (quando ele está no formato de botão).\n\nTambém são recomendados para serem utilizados em imagens (como a Logo), sempre que existir outro elemento alinhado horizontalmente."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "É possível criar infinidades diferentes de *headers* que atendam diferentes necessidades. Esses \"tipos\" dependem de como se deseja configurar os elementos que estão previstos neste componente.\n\nRecomendamos duas configurações que podem atender a maioria das situações: *Padrão* e *Compacto*."
      },
      {
        "title": "1. Header Padrão",
        "level": 3,
        "content": "Este tipo de *header* é utilizado quando se pretende exibir uma quantidade maior de informações e também quando for necessário dar mais ênfase a marca do site/sistema. Geralmente é mais utilizado em sites ou portais de notícias, mas não é uma exclusividade deste tipo.\n\n![Header Padrão](imagens/header-anatomy-type-default.png)\n*Header Padrão*"
      },
      {
        "title": "2. Header Compacto",
        "level": 3,
        "content": "O tipo Compacto é mais utilizado quando as informações a serem exibidas forem mais sucintas ou seja necessário dar mais espaço visível à área de conteúdo. Muito utilizado em sistemas, porém não obrigatório.\n\n![Header Compacto](imagens/header-anatomy-type-compact.png)\n*Header Compacto*\n\n**Atenção:** por padrão o *header* se encontra na *camada 1* por ser um elemento com relevância e desta forma apresenta sombra suave. Consulte o documento Fundamentos > Elevação para mais detalhes."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": "O componente *Header* deve se comportar de forma fluida em relação à resolução de tela utilizada. A seguir ilustramos os *Headers* para cada *Grid* disponível.\n\n**OBS:** A superfície do *Header* sempre sangra na Grid (ocupando todo o espaço da margem), independente de qual Grid seja utilizada."
      },
      {
        "title": "Header Padrão",
        "level": 4,
        "content": "![Header Padrão 12 colunas](imagens/header-behavior-responsive-1280px.png)\n*Header Padrão 12 colunas*\n\n![Header Padrão 8 colunas](imagens/header-behavior-responsive-768px.png)\n*Header Padrão 8 colunas*\n\n![Header Padrão 4 colunas](imagens/header-behavior-responsive-320px.png)\n*Header Padrão 4 colunas*"
      },
      {
        "title": "Header Compacto",
        "level": 4,
        "content": "![Header Compacto 12 colunas](imagens/header-compact-behavior-responsive-1280px.png)\n*Header Compacto 12 colunas*\n\n![Header Compacto 8 colunas](imagens/header-compact-behavior-responsive-768px.png)\n*Header Compacto 8 colunas*\n\n![Header Compacto 4 colunas](imagens/header-compact-behavior-responsive-320px.png)\n*Header Compacto 4 colunas*"
      },
      {
        "title": "2. Densidade",
        "level": 3,
        "content": "Conforme descrito em **Responsividade**, o *header* possui um comportamento fluido em relação a grid utilizada, além de utilizar o conceito de sangria na grid. Por tanto, por padrão, o *header* só possui um espaçamento superior e inferior.\n\nEsses espaçamento podem assumir valores pré-definidos para cada tipo de *header* utilizado, podendo ainda sim, ser modificados:\n\n- **Densidade Alta:** utilizada quando se pretende ocupar menos espaço útil na interface.\n- **Densidade Padrão:** Funciona na maioria dos layouts.\n- **Densidade Baixa:** utilizado quando o *header* precisa se destacar dentro da interface.\n\n![Densidades Alta Padrão e Baixa](imagens/header-densidade.png)\n*Densidades Alta Padrão e Baixa*"
      },
      {
        "title": "3. Busca",
        "level": 3,
        "content": "O comportamento da busca varia conforme o tipo de *Header* e a *grid* utilizada. A seguir algumas sugestões:"
      },
      {
        "title": "Grid 12 Colunas na variação Padrão",
        "level": 4,
        "content": "Em se tratando de Header do tipo Padrão, a busca funciona como um *input* comum.\n\n![Input de Busca 12 colunas](imagens/header-behavior-search-active-1280px.png)\n*Input de Busca 12 colunas*"
      },
      {
        "title": "Demais Grids (8 e 4 Colunas) e variações do Header (Padrão e Compacto)",
        "level": 4,
        "content": "Ao acionar o ícone de \"Lupa\", o *Header* recebe um contexto de busca, apresentando as seguintes características:\n\n- Todos os elementos exibidos no Header são ocultados;\n- O *input* preenche todo a largura do Header recebendo o estado *Focus*;\n- Um *Button* circular surge com a ação para \"fechar\" o *input*;\n\nQuando *Button* fechar é acionado:\n\n- O *Header* volta para o contexto anterior, voltando todos os elementos que antes eram visíveis;\n- Tanto o *Input* como o *button* desaparecem."
      },
      {
        "title": "Normal",
        "level": 5,
        "content": "![Input de Busca 8 colunas](imagens/header-behavior-search-active-768px.png)\n*Input de Busca 8 colunas*\n\n![Input de Busca 4 colunas](imagens/header-behavior-search-active-320px.png)\n*Input de Busca 4 colunas*"
      },
      {
        "title": "Compacto",
        "level": 5,
        "content": "![Input de Busca 12 colunas](imagens/header-compact-behavior-search-active-1280px.png)\n*Input de Busca 12 colunas*\n\n![Input de Busca 8 colunas](imagens/header-compact-behavior-search-active-768px.png)\n*Input de Busca 8 colunas*\n\n![Input de Busca 4 colunas](imagens/header-compact-behavior-search-active-320px.png)\n*Input de Busca 4 colunas*"
      },
      {
        "title": "4. Logado e Não Logado",
        "level": 3,
        "content": "Basicamente a diferença entre as duas variações é a substituição do **Botão Acesso GovBr** pelo componente *Avatar* que indica que o usuário está logado.\n\n![Header Deslogado](imagens/header-anatomy-logout.png)\n*Header Deslogado*\n\n![Header Logado](imagens/header-anatomy-login.png)\n*Header Logado*"
      },
      {
        "title": "5. Dropdown",
        "level": 3,
        "content": "A Lista Dropdown aparecerá flutuando sobre o cabeçalho logo abaixo do seu botão de acionamento correspondente. E fechará com um segundo clique no mesmo botão ou clique fora da lista."
      },
      {
        "title": "Dropdown - Desktop e Tablet (Grid de 12 e 8 colunas)",
        "level": 4,
        "content": "![Dropdown Grid 12 e 8 colunas](imagens/header-compact-behavior-dropdown-1.png)\n*Dropdown Grid 12 e 8 colunas*"
      },
      {
        "title": "Dropdown - Smartphone (Grid de 4 colunas)",
        "level": 4,
        "content": "![Dropdown Grid 4 colunas](imagens/header-compact-behavior-dropdown-2.png)\n*Dropdown Grid 4 colunas*\n\nNa versão para *Smartphone* (Grid de 4 colunas) a Lista *Dropdown* terá o mesmo comportamento. Desta vez, com o evento *Touch*, a Lista aparecerá com uma formatação apropriada para *mobile*, como mostra o exemplo acima, ocupando toda largura do dispositivo e flutuando sobre o conteúdo da tela. Para fechá-la, basta acionar com um *touch* no mesmo botão.\n\n**Importante:** Nos botões *Acionadores Dropdown*, é opcional a utilização do identificador *Dropdown*. Este posiciona-se à direita do *Acionador* e centralizado verticalmente. Consulte mais detalhes em *Padrões > Dropdown*.\n\n![Exemplos de Botões Acionadores Dropdown](imagens/header-behaviour-trigger.png)\n*Exemplos de Botões Acionadores Dropdown - O uso do Identificador é opcional*"
      },
      {
        "title": "6. Sticky Header",
        "level": 3,
        "content": "O comportamento *Sticky Header* ocorre quando o usuário faz a rolagem da página para cima. Neste momento, o *header* *fixa no topo* da área visível da página enquanto o conteúdo continua rolando por baixo dele.\n\nAo rolar a página para baixo, e chegando na posição de topo inicial, o *header* volta a assumir seu comportamento normal.\n\nQuando o *header* possuir o comportamento *sticky* ele deve estar localizado na **camada 3** de elevação e portanto possuir sombras mais pronunciadas que o *header* padrão. Consulte o documento Fundamentos > Elevação para mais detalhes.\n\n**Importante**: neste comportamento é necessário simplificar o conteúdo do *header*, exibindo somente as informações estritamente necessárias.\n\nAbaixo seguem alguns exemplos do funcionamento do *Sticky Header* nas versões **Padrão** e **Compacto**:"
      },
      {
        "title": "Sticky Header - Padrão",
        "level": 4,
        "content": "Quando o cabeçalho assume o comportamento *Sticky Header*, seu formato é **otimizado** e **resumido**, **ocultando a assinatura do cabeçalho**, **reposicionando a busca**, e consequentemente, reduzindo a altura do mesmo.\n\nEm resumo, ele assume as características de um *header* compacto.\n\n![Sticky Header sem rolagem](imagens/header-behavior-sticky-header-1.png)\n*Sticky Header sem rolagem*\n\n![Sticky Header rolagem](imagens/header-behavior-sticky-header-2.png)\n*Sticky Header rolagem*\n\nNeste formato, quando a *busca é acionada*, esta assume o formato mostrado abaixo, ocupando toda largura do cabeçalho.\n\n![Sticky Header Busca Acionada](imagens/header-behavior-sticky-header-3.png)\n*Sticky Header Busca Acionada*"
      },
      {
        "title": "Sticky Header - Compacto",
        "level": 4,
        "content": "**A única diferença** é que na versão Compacta o *Header* **não muda de formato**, tendo em vista que esta versão já é bastante otimizada. Logo, todos os elementos do *Header* na versão Compacta permanecerão do mesmo jeito com o *Sticky Header* ativo.\n\n![Header Compacto sem rolagem](imagens/header-compact-behavior-sticky-header.png)\n*Header Compacto sem rolagem*\n\n![Header Compacto rolagem - Sticky Header](imagens/header-compact-behavior-sticky-header-2.png)\n*Header Compacto rolagem - Sticky Header*\n\nCom a *Busca ativa*, o campo de pesquisa ocupará toda largura do Cabeçalho.\n\n![Header Compacto rolagem - Sticky Header - Busca ativa](imagens/header-compact-behavior-sticky-header-3.png)\n*Header Compacto rolagem - Sticky Header - Busca ativa*\n\n**Atenção:** sempre que o *header* estiver com o comportamento *sticky* deverá necessariamente utilizar o recurso de sombra, pois o componente passar a pertencer à *camada 3*. Consulte o documento Fundamento > Elevação para entender melhor o conceito de camadas."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name                         | Size                        | Weight                    | Outros                      |\n| ---------------------------- | --------------------------- | ------------------------- | --------------------------- |\n| Título (12 colunas) Padrão   | `--font-size-scale-up-03`   | `--font-weight-regular`   | `text-transform:uppercase;` |\n| Título (12 colunas) Compacto | `--font-size-scale-up-02`   | `--font-weight-regular`   | `text-transform:uppercase;` |\n| Título (8 colunas) Padrão    | `--font-size-scale-up-02`   | `--font-weight-regular`   | `text-transform:uppercase;` |\n| Título (8 colunas) Compacto  | `--font-size-scale-up-01`   | `--font-weight-regular`   | `text-transform:uppercase;` |\n| Título (4 colunas) Padrão    | `--font-size-scale-up-base` | `--font-weight-regular`   | `text-transform:uppercase;` |\n| Título (4 colunas) Compacto  | `--font-size-scale-up-base` | `--font-weight-regular`   | `text-transform:uppercase;` |\n| Texto (Infos Adicionais)     | `--font-size-scale-down-01` | `--font-weight-regular`   | `text-transform:uppercase;` |\n| *Placeholder* (Busca)        | `--font-size-scale-up-01`   | `--font-weight-medium`    | `text-transform:lowercase;` |\n| Assinatura                   | `--font-size-scale-base`    | `--font-weight-medium`    | `text-transform:lowercase;` |\n| Subtítulo (12 colunas)       | `--font-size-scale-base`    | `--font-weight-medium`    | `text-transform:lowercase;` |\n| Subtítulo (8 colunas)        | `--font-size-scale-down-01` | `--font-weight-medium`    | `text-transform:lowercase;` |\n| Área para Links              | `--font-size-scale-down-01` | `--font-weight-semi-bold` | `text-decoration:none;`     |"
      },
      {
        "title": "Iconografia (12 e 8 colunas)",
        "level": 3,
        "content": "| Name                              | ícone                             | Size               | Class (Font Awesome) |\n| --------------------------------- | --------------------------------- | ------------------ | -------------------- |\n| Acessar Menu Principal (Compacto) | <i class=\"fas fa-bars\"></i>       | `--icon-size-base` | `fa-bars`            |\n| Acessar Menu Principal (Padrão)   | <i class=\"fas fa-bars\"></i>       | `--icon-size-base` | `fa-bars`            |\n| Ícones Funcionalidades            | <i class=\"fas fa-th\"></i>         | `--icon-size-base` | `fa-th`              |\n| Pesquisar Padrão (12 colunas)     | <i class=\"fas fas fa-search\"></i> | `--icon-size-base` | `fa-search`          |\n| Pesquisar Compacto (12 colunas)   | <i class=\"fas fas fa-search\"></i> | `--icon-size-base` | `fa-search`          |\n| Pesquisar Padrão (8 colunas)      | <i class=\"fas fas fa-search\"></i> | `--icon-size-base` | `fa-search`          |\n| Pesquisar Compacto (8 colunas)    | <i class=\"fas fas fa-search\"></i> | `--icon-size-base` | `fa-search`          |\n| Fechar (Busca)                    | <i class=\"fas fas fa-times\"></i>  | `--icon-size-2x`   | `fa-times`           |"
      },
      {
        "title": "Iconografia (4 colunas)",
        "level": 3,
        "content": "| Name                              | ícone                                 | Size               | Class (Font Awesome) |\n| --------------------------------- | ------------------------------------- | ------------------ | -------------------- |\n| Acessar Menu Principal (Padrão)   | <i class=\"fas fa-bars\"></i>           | `--icon-size-base` | `fa-bars`            |\n| Acessar Menu Principal (Compacto) | <i class=\"fas fa-bars\"></i>           | `--icon-size-base` | `fa-bars`            |\n| Ícones Funcionalidades            | <i class=\"fas fa-th\"></i>             | `--icon-size-base` | `fa-th`              |\n| Pesquisar                         | <i class=\"fas fas fa-search\"></i>     | `--icon-size-base` | `fa-search`          |\n| Ícone Links                       | <i class=\"fas fas fa-ellipsis-v\"></i> | `--icon-size-base` | `fa-ellipsis-v`      |\n| Fechar (Busca)                    | <i class=\"fas fas fa-times\"></i>      | `--icon-size-base` | `fa-times`           |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name                  | Property   | Color Token            |\n| --------------------- | ---------- | ---------------------- |\n| Título                | text color | `--pure-100`           |\n| Subtítulo             | text color | `--gray-70`            |\n| Assinatura            | text color | `--gray-70`            |\n| Links                 | text color | `--blue-warm-vivid-70` |\n| Todos os ícones       | icon       | `--blue-warm-vivid-70` |\n| Superfície (*Header*) | Background | `--pure-0`             |\n| Busca (Input)         | Background | `--gray-2`             |"
      },
      {
        "title": "Borda",
        "level": 3,
        "content": "| Name          | Style  |         Width          | Color |             Side              |\n| ------------- | :----: | :--------------------: | :---: | :---------------------------: |\n| Busca (Input) | `none` | `--surface-width-none` |   -   | `top`/`right`/`bottom`/`left` |\n\n| Name          |     Border-radius      |\n| ------------- | :--------------------: |\n| Busca (Input) | `--surface-rounder-md` |"
      },
      {
        "title": "Dimensão",
        "level": 3,
        "content": "| Name          | Property | Value  |\n| ------------- | -------- | :----: |\n| Busca (Input) | width    | `56px` |\n| Logo (Large)  | height   | `40px` |\n| Logo (Medium) | height   | `24px` |\n| Logo (Small)  | height   | `16px` |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name                          | Property                     | Value                  |\n| ----------------------------- | ---------------------------- | ---------------------- |\n| Superfície (Densidade Padrão) | padding-top / padding-bottom | `--spacing-scale-2x`   |\n| Superfície (Densidade Baixa)  | padding-top / padding-bottom | `--spacing-scale-3x`   |\n| Superfície (Densidade Alta)   | padding-top / padding-bottom | `--spacing-scale-base` |"
      },
      {
        "title": "Espaçamento (Grid 12 colunas)",
        "level": 3,
        "content": "| Name                                   | Property         | Value                        |\n| -------------------------------------- | ---------------- | ---------------------------- |\n| Superfície                             | padding-top      | `--spacing-scale-2x`         |\n| Superfície                             | padding-bottom   | `--spacing-scale-2x`         |\n| Logo                                   | margin-right     | `--spacing-scale-2x`         |\n| Logo                                   | margin-bottom    | `--spacing-scale-2x`         |\n| Logo (Header Compacto)                 | margin-bottom    | `--spacing-scale-base`       |\n| Assinatura                             | margin-right     | `--spacing-scale-2x`         |\n| Assinatura                             | margin-bottom    | `--spacing-scale-2x`         |\n| Título (Header Compacto)               | margin-right     | `--spacing-scale-base`       |\n| Assinatura                             | margin-top       | `--spacing-scale-half`       |\n| Assinatura (Header Compacto)           | margin-right     | `--spacing-scale-base`       |\n| Botão Menu                             | margin-right     | `--spacing-scale-2x`         |\n| Área para Links                        | align-horizontal | `--spacing-horizontal-right` |\n| Área para Links (Header Compacto)      | align-vertical   | `--spacing-vertical-center`  |\n| Links (Área para Links)                | margin-left      | `--spacing-scale-2x`         |\n| Área Funcionalidades                   | align-horizontal | `--spacing-horizontal-right` |\n| Área Funcionalidades (Header Compacto) | align-vertical   | `--spacing-vertical-center`  |\n| Ícones (Área Funcionalidades)          | margin-left      | `--spacing-scale-base`       |\n| Separator                              | margin-left      | `--spacing-scale-base`       |\n| Separator                              | margin-right     | `--spacing-scale-base`       |\n| Separator (Header Compacto)            | align-vertical   | `--spacing-vertical-center`  |\n| Botão Acesso Gov                       | align-horizontal | `--spacing-horizontal-right` |\n| Botão Acesso Gov (Header Compacto)     | align-vertical   | `--spacing-vertical-center`  |\n| Botão Acesso Gov                       | margin-left      | `--spacing-scale-3x`         |\n| Avatar                                 | align-horizontal | `--spacing-horizontal-right` |\n| Avatar (Header Compacto)               | align-vertical   | `--spacing-vertical-center`  |\n| Avatar                                 | margin-left      | `--spacing-scale-3x`         |\n| Ícone Busca (Header Compacto)          | align-vertical   | `--spacing-vertical-center`  |"
      },
      {
        "title": "Espaçamento (4 colunas)",
        "level": 3,
        "content": "| Name             | Property       | Value                  |\n| ---------------- | -------------- | ---------------------- |\n| Container        | padding-top    | `--spacing-scale-base` |\n| Container        | padding-bottom | `--spacing-scale-base` |\n| Separator        | margin-left    | `--spacing-scale-half` |\n| Separator        | margin-right   | `--spacing-scale-half` |\n| Avatar           | margin-left    | `--spacing-scale-2x`   |\n| Botão Acesso Gov | margin-left    | `--spacing-scale-2x`   |\n| Botão Menu       | margin-right   | `--spacing-scale-half` |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "|        Name         |        Shadow         |\n| :-----------------: | :-------------------: |\n|     Superfície      | `--surface-shadow-sm` |\n| Superfície (sticky) | `--surface-shadow-xl` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Verifique se é possível navegar pelo *header* usando apenas o teclado, sem o uso do *mouse*;\n\n- Ofereça aos usuários navegação através das teclas `Tab` e `Shift + Tab` e acionamento dos elementos interativos por meio das teclas `Space` ou `Enter`;\n\n- Certifique-se de que a ordem dos elementos do *header* faça sentido e siga um fluxo lógico. Isso ajuda as pessoas que usam tecnologias assistivas a entenderem como navegar pelo conteúdo do *header*;\n\n- Não sobrecarregue o *header* com um número excessivo de funcionalidades. Priorize somente as essenciais."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Evite o uso excessivo de imagens, mas caso haja necessidade, forneça uma alternativa textual para cada uma delas;\n\n- Em dispositivos *mobile* utilize ícones fortemente semânticos, aqueles que tragam um entendimento imediato aos usuários. Como estes dispositivos não possuem o recurso de *tooltip* com uso do `hover`, o uso de ícones mais conhecidos pode amenizar esta limitação."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Para o componente *header* recomenda-se usar o marcador semântico correto, a *tag* `<header>`. Isso ajuda as pessoas que usam tecnologias assistivas a entenderem a estrutura do documento;\n\n- Adicione texto descritivo para cada elemento do *header*, para ajudar as pessoas que usam leitores de tela a entenderem o conteúdo e como ele se relaciona com o restante do site."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/header/header.md",
      "accessibilityPath": "ds/componentes/header/header-access.md"
    }
  },
  {
    "name": "Input",
    "slug": "input",
    "description": "Componente que permite a entrada de dados textuais por parte do usuário.",
    "documentationUrl": "https://www.gov.br/ds/components/input",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de Input](imagens/input-sample.png)\n*Exemplo do componente input.*\n\nUtilize o componente *input* quando:\n\n- houver a necessidade de inserir ou enviar dados de forma textual por meio de um sistema ou aplicação;\n- houver a necessidade de realizar uma requisição de busca ou pesquisa por meio de um sistema ou aplicação com o uso de palavra-chave;\n- a informação textual requerida for relativamente curta e objetiva."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *Input* é constituído por:\n\n| ID  | Nome                      |                     Referência                     | Uso         |\n| --- | ------------------------- | :------------------------------------------------: | ----------- |\n| 1   | Rótulo/Label              |  [Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 2   | Campo de Entrada de Texto |                        ---                         | Obrigatório |\n| 3   | Ícone Ilustrativo         | [Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 4   | Ação interna              |    [Button](/ds/components/button?tab=designer)    | Opcional    |\n| 5   | Placeholder               |  [Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 6   | Mensagem                  |   [Message](/ds/components/message?tab=designer)   | Opcional    |\n| 7   | Texto Auxiliar            |  [Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n\n![Anatomia do Input](imagens/input-anatomy.png)\n*Anatomia do componente input.*"
      },
      {
        "title": "Detalhamento dos itens",
        "level": 2,
        "content": "Abaixo seguem os detalhamentos dos itens do componente *input*. Para maiores informações consulte também a documentação [Padrão de Formulário](/ds/padroes/design/formulario), onde são abordados mais detalhes com relação ao uso do componente *input* em páginas de formulários."
      },
      {
        "title": "1. Rótulo/Label (Opcional)",
        "level": 3,
        "content": "Auxilia o usuário, indicando o tipo de informação que deve ser digitado no Campo de Texto. O texto do Rótulo deve ser curto e objetivo possível.\n\nAlém disso, o Rótulo também tem a função de indicar ao usuário se o *Campo de Texto é obrigatório ou não*. Veja detalhes sobre a indicação de *Campos Obrigatórios/Opcionais* no documento [Padrão de Formulário](/ds/padroes/design/formulario)."
      },
      {
        "title": "Posicionamento do rótulo",
        "level": 4,
        "content": "Por padrão o rotulo é posicionado no tipo do campo de texto, mas caso haja necessidade, pode ser utilizado à esquerda-centralizado do campo de texto.\n\n![Posicionamento do rótulo](imagens/input-label.png)\n*A - Posicionamento padrão do rótulo. B - Posicionamento alternativo, à esquerda do Campo de Texto.*\n\n**Atenção:** ao optar por um tipo de posicionamento, recomenda-se que todos os campos na página sigam o mesmo posicionamento, seja no topo ou na lateral do campo."
      },
      {
        "title": "2. Campo de entrada de texto (Obrigatório)",
        "level": 3,
        "content": "Este é o elemento essencial e obrigatório do componente. Por meio dele o usuário deve inserir a informação que foi requerida pelo sistema.\n\nÉ recomendado que os campos de texto tenham um tamanho aproximado do texto de entrada esperado, ou seja, recomenda-se prever o tamanho aproximado, pois é extremamente suscetível a erros quando os usuários não conseguem visualizar a entrada completa. Observe o exemplo abaixo:\n\n![Tamanho do Input](imagens/input-size.png)\n*Tamanho flexível do input.*"
      },
      {
        "title": "3. Ícone Ilustrativo (Opcional)",
        "level": 3,
        "content": "O componente *input* também prevê o uso de ícone, de forma opcional, como maneira de reforçar a comunicação semântica a respeito do dado de entrada solicitado. Este ícone é apenas representativo e não possui qualquer tipo de interação. Quando utilizado, deve estar posicionado à esquerda dentro do campo de *input*, antes do *placeholder* ou do texto digitado pelo usuário. Observe os exemplos abaixo:\n\n![Uso de Ícones](imagens/input-icons.png)\n*Utilização de Ícones.*\n\n**OBS:** Consulte as características de cores e espaçamentos em *Especificações*."
      },
      {
        "title": "4. Ação interna (Opcional)",
        "level": 3,
        "content": "Este elemento é opcional e visa auxiliar o usuário sobre ações referentes ao campo de entrada de texto. Por padrão é utilizado um *Button* de enfase terciária do tipo circular sempre com densidade alta, e o ícone deve representar a ação a ser realizada na interação.\n\n![Exemplo de Botão Circular](imagens/input-icon.png)\n*Exemplo da ação visualizar/ocultar senha no campo de entrada.*\n\nCaso o ícone não seja suficiente para o entendimento da ação, pode-se utilizar o *Button* tipo Padrão, mas neste caso, recomendamos *somente o uso do elemento textual* (evitando o auxílio de ícones).\n\n![Exemplo de Botão Circular](imagens/input-action.png)\n*Caso seja identificado que o usuário não esteja entendendo a ação interna, é possível alterar o tipo do button. Esse uso é indicado em casos excepcionais, e deve-se utilizar apenas recursos textuais.*"
      },
      {
        "title": "5. Placeholder (Opcional)",
        "level": 3,
        "content": "O *placeholder* tem a função de auxiliar o usuário a preencher os dados solicitados.\n\nDeve trazer informações mais completas que a contida no Rótulo/Label, e desaparece quando o usuário iniciar o preenchimento do campo. No caso de exclusão da do texto digitado, o *placeholder* deve reaparecer.\n\nUse o *placeholder* quando o usuário não estiver familiarizado com a entrada solicitada ou com a formatação em questão (por exemplo, DD-MM-AAAA).\n\n![Exemplo de Placeholder](imagens/input-placeholder.png)\n*Exemplo de placeholder para orientação de preenchimento do nome completo.*"
      },
      {
        "title": "6. Mensagem (Opcional)",
        "level": 3,
        "content": "O componente *Message* é opcional e é utilizado quando há uma necessidade de dar uma mensagem de *feedback* ao usuário. A mensagem pode ter até quatro objetivos diferentes: *Erro*, *Sucesso*, *Alerta* e *Informativo*.\n\n![Componente Mensagem Erro](imagens/input-behavior-states-danger.png)\n*Uso do componente message de erro.*"
      },
      {
        "title": "7. Texto auxiliar (Opcional)",
        "level": 3,
        "content": "O texto auxiliar tem a função de ajudar o usuário com uma informação mais completa e detalhada para o preenchimento do campo de texto. É necessário quando as informações trazidas no *label* e no *placeholder* não foram suficientes. Por exemplo:\n\n![Exemplo de Texto Auxiliar](imagens/input-text.png)\n*Exemplo de texto auxiliar.*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Input padrão",
        "level": 3,
        "content": "Geralmente utilizado em páginas de formulários, campos de autenticação, ou qualquer outra finalidade que permita entrada de dados de forma padrão.\n\n![Exemplo de Input Padrão](imagens/input-sample.png)\n*Exemplo de input padrão.*"
      },
      {
        "title": "2. Input destaque",
        "level": 3,
        "content": "Esse tipo permite um destaque maior na interface, geralmente ocupando um grande espaço. É utilizado em situações onde há necessidade de chamar atenção do usuário, como campos de busca.\n\n![Exemplo de Input Destaque](imagens/input-search.png)\n*Exemplo de input destaque.*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": ""
      },
      {
        "title": "Grid de 12 e 8 colunas",
        "level": 4,
        "content": "Nas *grids* de 12 e 8 colunas o *input* pode ser organizado conforme a necessidade de diagramação definida no *layout* do projeto.\n\nÉ recomendado que os campos de texto tenham tamanhos fixos, e o comportamento adequado ao reduzir a resolução da tela e o espaço horizontal, é posicionar os campos de texto nas linhas abaixo, caso não haja espaço. Desta forma os campos de texto ocuparão mais espaço vertical na tela. Observe o exemplo abaixo:\n\n![Input - Grid de 12 colunas](imagens/Input-behavior-responsive-grid-12-cols.png)\n*Input - grid de 12 colunas.*\n\n![Input - Grid de 8 colunas](imagens/Input-behavior-responsive-grid-8-cols.png)\n*Input - grid de 8 colunas. Os campos são reorganizados nas linhas abaixo.*\n\nNeste exemplo, os *Campos Telefone*, *UF* e *Senha*, foram posicionados nas linhas abaixo, pois não couberam mais na largura da tela."
      },
      {
        "title": "Grid de 4 colunas",
        "level": 4,
        "content": "Na *grid* de 4 colunas, recomenda-se que o *Input* se estenda por toda largura a da tela, proporcionando mais espaço para o usuário digitar o texto solicitado. Também deverá ser utilizado o *input* com a densidade baixa, com a finalidade de aumentar a área de *touch*. Consulte Comportamento [Densidade](/ds/padroes/design/densidade) para maiores detalhes.\n\n![Input - Grid de 4 colunas](imagens/Input-behavior-responsive-grid-4-cols.png)\n*Input - grid de 4 colunas.*"
      },
      {
        "title": "2. Densidade",
        "level": 3,
        "content": "O *input* pode ser utilizado com diferentes densidades. A densidade tem relação direta com as dimensões de altura do campo de entrada de texto. Consulte as dimensões utilizadas em *Design* > *Tokens*."
      },
      {
        "title": "A. Densidade baixa",
        "level": 4,
        "content": "É bastante útil quando for necessária uma área de *touch* mais expressiva ou para conferir maior destaque ao campo de entrada de texto."
      },
      {
        "title": "B. Densidade média",
        "level": 4,
        "content": "É a densidade padrão utilizada nos campos de entrada de texto. É utilizada na maioria dos casos, em resoluções para *tablet* e *desktop*."
      },
      {
        "title": "C. Densidade alta",
        "level": 4,
        "content": "É a situação em que a altura do campo é reduzida. É bastante útil quando for necessário utilizar o campo de entrada de texto dentro de outros componentes ou em espaços menores. Por exemplo, dentro de uma tabela, dentro do cabeçalho do sistema, etc.\n\n![Densidades do Input](imagens/input-behavior-density.png)\n*Densidades do input: A- baixa, B- média e C- alta.*"
      },
      {
        "title": "3. Estados",
        "level": 3,
        "content": "O *input* pode ser apresentado nos seguintes estados:"
      },
      {
        "title": "Estado padrão",
        "level": 4,
        "content": "É o estado comum no qual o componente *input* se encontra.\n\n![Estado Interativo](imagens/input-behavior-states-interative.png)\n*Exemplo do estado padrão em fundo claro e escuro.*"
      },
      {
        "title": "Estado aviso - Sucesso",
        "level": 4,
        "content": "Nesse caso, o estado informa ao usuário se uma tarefa foi concluída conforme o esperado.\n\n![Estado Sucesso](imagens/input-behavior-states-success.png)\n*Estado sucesso em fundo claro e escuro.*"
      },
      {
        "title": "Estado aviso - Erro",
        "level": 4,
        "content": "Neste caso, é informado se houve um erro ou falha por parte do usuário. Por exemplo, um campo com texto inválido.\n\n![Estado Erro](imagens/input-behavior-states-danger.png)\n*Estado erro em fundo claro e escuro.*"
      },
      {
        "title": "Estado aviso - Informativo",
        "level": 4,
        "content": "Esse estado ocorre quando há a necessidade de passar informação neutra ao usuário. Nessa situação, pode-se utilizar tanto o texto auxiliar como a mensagem informativa. Porém, se houver a necessidade de mais ênfase ou destaque na informação, deve-se optar pela mensagem informativa. Observe abaixo:\n\n![Estado Informativo](imagens/input-behavior-states-info.png)\n*Estado informativo em fundo claro e escuro.*\n\n![Texto Auxiliar ao Preenchimento](imagens/input-behavior-states-info-2.png)\n*Texto auxiliar ao preenchimento.*"
      },
      {
        "title": "Estado aviso - Alerta",
        "level": 4,
        "content": "Esse estado ocorre quando há a necessidade de alertar o usuário a respeito de aspectos que envolvam o *input*.\n\n![Estado Alerta](imagens/input-behavior-states-alert.png)\n*Estado alerta em fundo claro e escuro.*"
      },
      {
        "title": "Estado desabilitado",
        "level": 4,
        "content": "Ocorre quando o *input* está desabilitado temporariamente para o preenchimento. Nesse caso, é apresentado com opacidade reduzida, o cursor do *mouse* muda de forma e não há ação sobre o campo.\n\n![Estado Desabilitado](imagens/input-behavior-states-disabled.png)\n*Estado desabilitado em fundo claro e escuro. Caso tenha necessidade de passar alguma informação sobre o campo para o usuário, utilize a mensagem do tipo alerta.*"
      },
      {
        "title": "Estado Hover",
        "level": 4,
        "content": "Este estado ocorre quando o usuário posiciona o *mouse* sobre o campo de texto. O cursor deve mudar para o formato `Text`.\n\n![Estado Hover](imagens/input-behavior-states-hover.png)\n*Estado hover em fundo claro e escuro.*"
      },
      {
        "title": "Estado foco",
        "level": 4,
        "content": "É o estado no qual o *input* recebe o foco sobre ele, seja por meio da navegação por teclado ou alguma outra ação que dispare o foco sobre o campo de texto. Nesse estado a borda do campo assume cor e espessura diferenciadas indicando que o campo está \"editável\".\n\n![Estado Foco](imagens/input-behavior-states-foco.png)\n*Estado foco em fundo claro e escuro.*\n\nUmas das interações para receber foco é por meio de clique/toque. Por tanto, o estado \"pressionado padrão\" não existe neste componente. Além disso, *quando está \"focado\"*, o estado hover não precisa ser aplicado na superfície do componente, porém, o cursor do mouse ainda deve sofrer as alterações referentes.\n\nVeja abaixo um exemplo de interações no componente:\n\n![Estado Foco](imagens/behavior-state-foco.png)\n*A- Exibe o estado padrão (sem nenhuma interação). B- O cursor fica sobre o componente, exibindo o estado hover. C- Mostra o componente com estado foco após interação de um clique. Neste momento já é possível a entrada de dados no campo e o fundo do campo input não tem mais a necessidade do estado hover. D- Mesmo com estado foco é possível interagir com outros elementos do componente.*"
      },
      {
        "title": "Melhores práticas",
        "level": 2,
        "content": ""
      },
      {
        "title": "Uso de máscaras",
        "level": 3,
        "content": "Sempre que o dado de entrada requerido possuir um padrão de escrita, recomenda-se utilizar máscaras de formatação para o texto digitado. Geralmente estes tipos de dados, são números, códigos, protocolos ou textos com tamanho padronizado e podem vir acompanhados de caracteres específicos, como pontos, parênteses ou caracteres especiais. Sendo assim, a utilização de máscaras auxilia o usuário na digitação e padronização do texto inserido.\n\n![Exemplo de Máscara - Telefone](imagens/input-mask-01.png)\n*Exemplo de máscara - número de telefone.*\n\n![Exemplo de Máscara - CPF](imagens/input-mask-02.png)\n*Exemplo de máscara - CPF.*\n\n- É recomendável que a máscara funcione dinamicamente no momento da digitação e também ao \"colar\" o texto no campo *input*;\n- Evite dividir o *input* em campos separados sem necessidade, isso aumenta o custo de interação do usuário, além de causar problemas para usuários internacionais, visto que utilizam padrões diferenciados. Por exemplo, o formato do telefone nos EUA é bem diferente do brasileiro: +1 (xxx) xxx-xx-xx.\n\n![Não divida o Input em Campos Separados](imagens/input-mask-03.png)\n*Não divida o input em campos separados sem necessidade.*\n\nA máscara deve oferecer espaçamentos e separadores específicos para cada trecho do número, código ou protocolo digitado. Esta prática oferece ao usuário uma melhor visualização do texto, além de prevenir possíveis erros de digitação.\n\n![Ofereça espaçamentos e separadores entre trechos do texto](imagens/input-mask-05.png)\n*Ofereça espaçamentos e separadores entre trechos do texto*\n\nVeja mais detalhes sobre máscaras no documento [Padrão de Formulário](/ds/padroes/design/formulario)."
      },
      {
        "title": "Autocomplete",
        "level": 3,
        "content": "O *autocomplete* é um recurso bastante útil durante o processo de pesquisa de dados pelo usuário, pois oferece um atalho de sugestões de resultados com base nos caracteres digitados no campo *input*.\n\nPor padrão, as sugestões são carregadas dinamicamente em uma lista *dropdown* no momento da digitação.\n\n![Exemplo de Autocomplete](imagens/input-autocomplete-01.png)\n*Exemplo do recurso de autocomplete.*\n\nAbaixo pode-se observar algumas boas práticas a esse respeito:\n\n- Recomenda-se que os resultados exibidos dinamicamente no momento da digitação sejam atualizados de forma automática o mais rápido possível ou instantaneamente, de preferência. Quando utilizar o *autocomplete*, deve-se evitar fazer o usuário esperar, mas caso isso ocorra, pode-se utilizar o recurso de *loading* durante o carregamento dos dados;\n\n![Autocomplete Carregamento](imagens/input-autocomplete-02.png)\n*Deve-se evitar fazer o usuário esperar, porém utilize o recurso de loading caso seja necessário*\n\n- utilize ordem alfabética ao carregar a lista de sugestões;\n\n![Autocomplete Ordem Alfabética](imagens/input-autocomplete-03.png)\n*Utilize ordem alfabética nas sugestões de resultado.*\n\n- Quando não houver dados de sugestões referentes ao texto digitado, sinalize ao usuário com *feedback* no lugar da lista de sugestões;\n\n![Autocomplete com Feedback](imagens/input-autocomplete-04.png)\n*Exemplo de autocomplete com feedback.*\n\n- Sempre que possível, associe assuntos relacionados aos termos digitados no campo de pesquisa, isso trará uma experiência mais rica ao usuário durante o processo de pesquisa. É interessante também associar assuntos relacionados nos casos em que não são encontrados termos de sugestões.\n\n![Autocomplete com Assuntos Relacionados](imagens/input-autocomplete-05.png)\n*Exemplo de autocomplete com assuntos relacionados.*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                            | Property   | Token/Value |\n| ------------------------------- | ---------- | ----------- |\n| Rótulo/Label                    | color      | `--gray-80` |\n| Rótulo/Label fundo escuro       | color      | `--pure-0`  |\n| Placeholder                     | color      | `--gray-80` |\n| Texto auxiliar                  | color      | `--gray-80` |\n| Texto auxiliar fundo escuro     | color      | `--pure-0`  |\n| Campo de texto                  | background | `--pure-0`  |\n| Campo de texto - Input Destaque | background | `--gray-2`  |\n| Borda campo de texto            | background | `--gray-40` |\n| Ícone Ilustrativo               | color      | `--gray-40` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name           |        Token Size        |      Token Weight       | Tabela de Estilo |\n| -------------- | :----------------------: | :---------------------: | :--------------: |\n| Rótulo/Label   |            -             |            -            |     `Label`      |\n| Placeholder    |            -             |            -            |  `Placeholder`   |\n| Campo de texto |            -             |            -            |     `Input`      |\n| Texto auxiliar | `--font-size-scale-base` | `--font-weight-regular` |        -         |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name                             | Property      |      Token/Value       |\n| -------------------------------- | ------------- | :--------------------: |\n| Campo de texto - Input Destaque  | height        |  `--spacing-scale-7x`  |\n| Campo de texto - Densidade Baixa | height        |  `--spacing-scale-6x`  |\n| Campo de texto - Densidade Média | height        |  `--spacing-scale-5x`  |\n| Campo de texto - Densidade Alta  | height        |  `--spacing-scale-4x`  |\n| Campo de texto                   | border-radius | `--surface-rounder-sm` |\n| Campo de texto - Input Destaque  | border-radius | `--surface-rounder-md` |\n| Ação interna                     | densidade     |         `alta`         |\n| Ação interna - Input Destaque    | densidade     |        `normal`        |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                                       | Property                   |         Token/Value         |\n| ------------------------------------------ | -------------------------- | :-------------------------: |\n| Rótulo/Label topo                          | margin-bottom              |   `--spacing-scale-half`    |\n| Rótulo/Label lateral                       | margin-right               |   `--spacing-scale-base`    |\n| Placeholder                                | margin-left                |    `--spacing-scale-2x`     |\n| Placeholder                                | margin-top/bottom          | `--spacing-vertical-center` |\n| Placeholder (ícone)                        | margin-left                |   `--spacing-scale-base`    |\n| Texto auxiliar                             | margin-top                 |   `--spacing-scale-base`    |\n| Ação interna                               | margin-top/bottom          | `--spacing-vertical-center` |\n| Ação interna                               | margin-right               |   `--spacing-scale-half`    |\n| Campo de entrada de texto                  | margin-top                 |   `--spacing-scale-half`    |\n| Campo de entrada de texto                  | margin-bottom              |   `--spacing-scale-base`    |\n| Campo de entrada de texto                  | padding-top/padding-bottom | `--spacing-vertical-center` |\n| Campo de entrada de texto                  | padding-left               |    `--spacing-scale-2x`     |\n| Campo de entrada de texto                  | padding-right              |   `--spacing-scale-half`    |\n| Campo de entrada de texto - Input Destaque | padding-top/padding-bottom | `--spacing-vertical-center` |\n| Campo de entrada de texto - Input Destaque | padding-left               |    `--spacing-scale-3x`     |\n| Campo de entrada de texto - Input Destaque | padding-right              |    `--spacing-scale-2x`     |\n| Ícone ilustrativo                          | margin-left                |    `--spacing-scale-2x`     |\n| Ícone ilustrativo                          | margin-right               |   `--spacing-scale-base`    |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Os *inputs* ou *input Text* devem ser acessíveis por meio de navegação via teclado, por meio da tecla `Tab`, onde cada *input* deve ser um ponto de foco na ordem da tabulação;\n\n- Utilize a marcação correta para o estado de foco, previsto na diretriz de estados, quando o foco estiver ativo no *input*;\n\n- Após o *input* receber o foco, permita que o usuário possa digitar o texto na sequência, sem necessidade de qualquer outro passo anterior;\n\n- Permita que os controles internos ao *input* também possam ser acessados por teclado, via tecla `Tab` e acionados via tecla `Space`. Por exemplo: botões de busca, botões para visualização de senha, etc;\n\n- Siga uma ordem lógica para tabulação, focando primeiramente o rótulo associado ao *input*. Depois, ícones/botões de informação associados ao rótulo. Por fim, *input* e seus controles internos;\n\n- Por padrão, o usuário deve conseguir navegar entre as palavras do texto digitado, com o uso das teclas `Ctrl + left/right` no Windows ou `Option + left/right` no Mac."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Utilize rótulos (*labels*) claros e descritivos para que o usuário compreenda o propósito do campo de texto;\n\n- Adicione ajuda contextual, fornecendo informações adicionais ou instruções para os usuários entenderem detalhes a respeito do preenchimento do *input*. Pode-se utilizar um texto auxiliar logo abaixo do *input* ou um ícone de informação ao lado do rótulo para exibir a ajuda;\n\n- Para validação em campos de texto, é importante fornecer *feedback* visual imediato quando o usuário preencher o *input*. Marque o *input* com a cor correspondente ao estado de sucesso, se o usuário preencher corretamente, ou cor correspondente ao estado de erro, se houver algum problema no preenchimento do campo."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Utilize a marcação semântica correta no código HTML, com a tag `<input>` e o valor do atributo `type` correspondente a sua função. Por exemplo: `type = \"text\"`, `type = \"date\"`, `type = \"email\"`, `type = \"password\"`, etc; Veja mais detalhes em [MDN Web Docs - Input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input);\n\n- Associe o *input* ao rótulo usando o atributo `for` na tag `<label>` e um `id` com mesmo valor na tag `<input>`;\n\n- Caso seja necessário, use o atributo `aria-describedby` para vincular a um elemento de ajuda ou instrução e fornecer informações adicionais aos usuários que podem precisar de mais contexto."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/text-input/accessibility)\n- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/input/input.md",
      "accessibilityPath": "ds/componentes/input/input-access.md"
    }
  },
  {
    "name": "Item",
    "slug": "item",
    "description": "Itens são blocos compactos e altamente flexível diagramados para exibir uma ampla variedade de conteúdo de forma repetida.",
    "documentationUrl": "https://www.gov.br/ds/components/item",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente item.](imagens/diretriz.png)\n*Exemplo do componente item.*\n\nOs itens são componentes projetados para servirem de apoio a outros componentes como *lists*, menus, etc, servindo de matéria prima para a montagem desses componentes mais complexos. Devem ser utilizados quando se pretende apresentar conteúdos que devem ser visualizados de forma repetida e ordenada, facilitando desta forma a leitura.\n\n![Exemplo uso do componente item.](imagens/uso.png)\n*Itens servem como apoio para a criação de outros componente mais complexos.*"
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "Para construir um item é necessário uma superfície, uma área com no mínimo um conteúdo contido e opcionalmente um separador na extremidade inferior da superfície.\n\n| ID  | Nome             |                         Referência                          | Uso         |\n| --- | ---------------- | :---------------------------------------------------------: | ----------- |\n| 1   | Superfície       | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n| 2   | Área de conteúdo |                             ---                             | Obrigatório |\n| 3   | Divider          |  [Componente Divider](/ds/components/divider?tab=designer)  | Opcional    |\n\n![Anatomia do componente item.](imagens/anatomia.png)\n*Anatomia do componente item.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Superfície (Obrigatório)",
        "level": 4,
        "content": "A superfície de um item é a área onde são colocados os componentes. A diagramação dos componentes dentro dessa área é livre porém deve-se levar em conta as características de cada componente.\n\n1. Superfície;\n2. Área de conteúdo: qualquer componente é aceitável, exceto botões primários e componentes relacionados à navegação, como: carrossel, *pagination*, *tab*, menu, etc.\n\n![Exemplo da estrutura de um item.](imagens/areas.png)\n*Exemplo da estrutura de um item.*\n\nA seguir, alguns exemplos de possíveis combinações de componentes dentro da área de conteúdo:\n\n![Exemplos de formatação da área de conteúdo de um item.](imagens/areas-2.png)\n*Exemplos de formatação da área de conteúdo de um item.*"
      },
      {
        "title": "Regras para criação de itens",
        "level": 2,
        "content": "Como já dito anteriormente, itens são componentes básicos para a utilização em outros componentes mais complexos. Um item isolado não faz muito sentido mas quando é utilizado em conjunto repetido com outros itens pode ser muito útil e flexível.\nA seguir, apresentamos algumas características do componente item."
      },
      {
        "title": "1. Largura",
        "level": 3,
        "content": "Os itens são flexíveis e por isso não possuem dimensões fixas. No entanto, é recomendável que todos os itens de um mesmo agrupamento devam possuir a mesma largura.\n\n![Exemplo larguras de itens.](imagens/larguras.png)\n*Exemplo de larguras de itens.*\n\nAs alturas dos itens podem ser variáveis entre si porém, isso acarreta uma perda da leitura \"escaneada\". Portanto, use este recurso com cautela.\n\n![Exemplo de itens com diferentes alturas.](imagens/alturas.png)\n*Exemplo de uso de itens com alturas variáveis.*\n\n**Atenção:** as larguras mínima e máxima dos itens são flexíveis de acordo com o conteúdo e a largura da tela."
      },
      {
        "title": "2. Alinhamento e Espaçamento",
        "level": 3,
        "content": "Os itens podem ser alinhados tanto horizontalmente quanto verticalmente e podem apresentar diferentes espaçamentos externos de acordo com a escala de espaçamentos de *layout* prevista no documento de Fundamentos.\n\n![Exemplos de alinhamentos e espaçamentos de itens.](imagens/espacamentos.png)\n*Alguns exemplos de possíveis alinhamentos e espaçamentos de itens.*\n\n**Atenção:** evite o uso de itens agrupados com espaçamentos variados dentro do mesmo agrupamento.\n\n![Exemplo espaçamento.](imagens/espacamentos-faca.png)\n*Exemplos de espaçamentos que devem ser evitados no componente item.*"
      },
      {
        "title": "3. Margens Internas",
        "level": 3,
        "content": "Os componentes dentro dos itens devem respeitar as margens internas (*padding*) entre cada um dos lados da superfície, conforme definido no documento de Fundamentos. Somente elementos de mídias (como fotos e ilustrações) podem quando necessário \"sangrar\".\n\n**Atenção:** para saber mais sobre \"sangria\" consultar o documento Fundamentos/Espaçamento."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": "Itens possuem diversos comportamentos próprios. A seguir, listamos os mais usuais:"
      },
      {
        "title": "1. Hover",
        "level": 3,
        "content": "Um item pode ser interativo. Neste caso, toda a superfície do item é interativa e assume o estado *hover*.\n\n![behavior-interativo](imagens/behavior-interativo.png)\n*Estado Hover*"
      },
      {
        "title": "2. Elemento Interativo",
        "level": 3,
        "content": "Um item pode pode conter elementos interativos. Neste caso, apenas estes elementos possuem ação e estado *hover*.\n\n![behavior-interativo](imagens/behavior-elemento-interativo.png)\n*Estado Interativo*"
      },
      {
        "title": "3. Seleção",
        "level": 3,
        "content": "Um item pode ser selecionável. Quando o usuário clicar em em um item selecionável ele assume o estado selecionado.\n\n![behavior-selecionado](imagens/behavior-selecionado.png)\n*Estado Selecionado*"
      },
      {
        "title": "4. Expansão",
        "level": 3,
        "content": "Um item pode ser expansível. Quando o usuário clicar no botão de expansão outros elementos serão apresentados. A qualquer momento o usuário poderá fechar a expansão.\n\n![behavior-expandido](imagens/behavior-expansivel.png)\n*Expandido*"
      },
      {
        "title": "5. Rotulagem",
        "level": 3,
        "content": "Um item pode ser rotulado com cores. Quando o usuário clicar no botão de rotulagem as opções de cores serão apresentadas ao usuário.\n\n![behavior-expandido](imagens/behavior-rotulado.png)\n*Expandido*\n\n**Atenção:** todos os comportamentos apresentados acima são opcionais e podem ser utilizados de forma conjunta, de acordo com a regra de negócio."
      },
      {
        "title": "6. Estados Aplicados ao Item",
        "level": 3,
        "content": "Os itens podem apresentar todos os estados listados abaixo. Para maiores detalhes consultar o documento de Fundamentos.\n\n![behavior-elemento-interativo](imagens/states.png)\n*Estados Aplicados*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name       | Property | Color Token |\n| ---------- | -------- | ----------- |\n| Superfície | color    | `--pure-0`  |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- É recomendado que o componente *item* possa ser acessado via navegação por teclado, através das teclas `Tab` ou `Shift + Tab`. Como alternativa também pode-se fazer uso das teclas direcionais `arrowUp` e `arrowDown` para navegar entre os *itens* dentro de uma lista;\n\n- Os *itens* interativos ou que possuam elementos interativos em seu interior, podem ser acionados por meio das teclas `Space` ou `Enter`;\n\n- Forneça uma navegação clara e consistente entre os *itens*, permitindo que usuários com deficiência física ou de mobilidade naveguem facilmente por todo o conteúdo."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Verifique o uso das cores em `cor de superfície` e `cor de leitura` no *item* se correspondem às recomendadas na diretriz de design, garantindo um contraste de cores adequado para uma boa acessibilidade;\n\n- Em dispositivos *mobile* certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de `44px`;\n\n- Deixe claro para o usuário quais são os elementos interativos que o *item* contém ou se o próprio *item* é interativo. Aplique os estados corretamente para fornecer *feedback*."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/item/item.md",
      "accessibilityPath": "ds/componentes/item/item-access.md"
    }
  },
  {
    "name": "List",
    "slug": "list",
    "description": "*Lists* são estruturas compostas por itens em sequência vertical ou horizontal que podem conter imagens, ícones e elementos interativos. Utilize *lists* quando precisar organizar conteúdos semelhantes em forma sequencial.",
    "documentationUrl": "https://www.gov.br/ds/components/list",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente list horizontal e vertical.](imagens/diretriz.png)\n*Exemplo dos componentes list vertical e list horizontal*"
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome       |                         Referência                          | Uso         |\n| --- | ---------- | :---------------------------------------------------------: | ----------- |\n| 1   | *Header*   |                             ---                             | Opcional    |\n| 2   | Item       |     [Componente Item](/ds/components/item?tab=designer)     | Obrigatório |\n| 3   | Rótulo     | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 4   | *Divider*  |  [Componente Divider](/ds/components/divider?tab=designer)  | Opcional    |\n| 5   | Superfície | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n\n![Anatomia do componente list.](imagens/anatomia.png)\n*Anatomia do componente list*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Header (Opcional)",
        "level": 3,
        "content": "*Lists* podem opcionalmente possuir títulos. O *header* possui uma área textual para o título da *list* e outra para conter ações relacionadas a *list* (uso de botões por exemplo).\nApesar de possuir uma altura padrão, seu *container* pode sofrer alteração na altura quando botões são adicionados.\n\n1. **Header** com altura padrão;\n2. **Header** com altura alterada pela inserção de botões.\n\n![Exemplo de altura do header alterado pela inserção de botões.](imagens/titulos.png)\n*Áreas de títulos da list*"
      },
      {
        "title": "2. Item (Obrigatório)",
        "level": 3,
        "content": "Um item corresponde à unidade de uma *list* que, ao ser repetido, forma uma lista. Consulte o documento do componente item para mais detalhes.\n\nDe uma forma geral, um item pode ser criado contendo uma infinidade de componentes mas, como boas práticas, é recomendável mantê-lo o mais organizado e enxuto possível e dividi-lo em áreas lógicas.\nSão sugeridas três áreas distintas:\n\n1. **Suporte Visual** (*opcional*): exibe os recursos visuais (geralmente ícones, avatares e mídias);\n2. **Área Principal**: exibe o conteúdo principal (geralmente textual);\n3. **Suporte Complementar** (*opcional*): exibe os metadados, elementos interativos (geralmente botões e *links*) e informações que complementam o conteúdo principal.\n\nPode-se utilizar as três áreas sugeridas em conjunto ou isoladamente. É permitida ainda a criação de novas áreas ou utilizar qualquer uma delas isoladamente. No entanto, esteja atento em manter a formatação e consistência dentro de uma mesma *list*.\n\n![Anatomia das partes de um item da list.](imagens/item-areas.png)\n*Áreas recomendadas para os itens de uma list*\n\nOs itens podem possuir alturas fixas ou flexíveis determinadas pela quantidade de linhas de conteúdo. No entanto, apesar dessa variação, recomendamos que todos os itens de uma *list* deva possuir a mesma altura, independentemente do comportamento aplicado.\n\nNa ilustração seguinte podemos observar diferentes alturas dos itens de acordo com a quantidade de linhas do conteúdo:\n\n![Exemplos de diferentes alturas dos itens de uma list de acordo com a quantidade de linhas.](imagens/alturas.png)\n*Exemplos de variação das alturas dos itens de uma list*\n\n**Atenção:** os itens de uma *list* podem apresentar a quantidade de conteúdo que for necessária e consequentemente a altura deve variar de acordo com o conteúdo. Tenha cuidado ao utilizar alturas flexíveis de itens em uma mesma *list*.\n\n![Exemplo do uso com cautela de list com diferentes quantidade de conteúdo.](imagens/alturas-2.png)\n*Use diferentes alturas de itens de uma list com cautela*"
      },
      {
        "title": "Área Principal",
        "level": 4,
        "content": "A área principal suporta o conteúdo principal da *list* que geralmente é representado por textos. Podemos organizar o texto pensando na hierarquia da informação e para isso é recomendado utilizar as sugestões abaixo:\n\n1. **Subtítulo**: texto opcional que possui a maior ênfase entre os textos. Deve ser usado somente quando há necessidade de ter um conteúdo com ênfase maior que o texto principal. É sugerido o uso de letras maiúsculas;\n2. **Texto Principal**: texto obrigatório, onde o conteúdo principal da *list* será exibido;\n3. **Texto Secundário**: texto opcional que possui a menor ênfase entre os textos.\n\n![Hierarquia dos textos de um item de list.](imagens/item-textos.png)\n*Use hierarquia da informação para organizar melhor os textos dentro de uma list*\n\n**Atenção:** é permitida a criação de *layouts* de texto mais específico para determinado produto, porém esteja sempre atento às boas práticas descritas neste documento."
      },
      {
        "title": "Recurso Visual ou Complementar",
        "level": 4,
        "content": "Recursos visuais ou complementar são representados por ícones, imagens, avatares, botões e elementos interativos em geral. São exibidos nas áreas de suporte (visual/complementar) do item.\n\n![Exemplos de possibilidades de uso de recursos visuais/interativos em uma list.](imagens/recursos-1.png)\n*Exemplos de possibilidades de uso dos recursos visuais/interativos em uma list representados em azul*\n\n**Atenção:** mantenha a consistência de uma lista em relação ao posicionamento e tipos de recursos visuais/interativos utilizados.\n\n![Exemplos do que é permitido e não permitido fazer com os recursos visuais/interativos de uma list.](imagens/recursos-2.png)\n*Exemplos de possibilidades de uso dos recursos visuais/interativos em uma list representados em azul*"
      },
      {
        "title": "Recursos Visuais",
        "level": 5,
        "content": "Os recursos visuais são definidos por quaisquer elementos que dão apoio visual ao conteúdo. Podem ser ícones, avatares e mídias em geral.\n\nQuando existirem, devem estar localizados na área de *suporte visual*.\n\n![Exemplos de aplicações de recursos visuais.](imagens/recursos-visuais.png)\n*Exemplos de recursos visuais localizados na área de suporte*"
      },
      {
        "title": "Recursos Complementares",
        "level": 5,
        "content": "Recursos complementares são quaisquer componentes interativos, metadados ou informações adicionais que podem ser utilizados em conjunto com *lists*. Quando aparecerem, devem estar localizados na área de *suporte complementar* do item.\n\nReflita sempre se o uso de determinado recurso complementar é necessário e faz sentido dentro de uma *list*.\n\n![Exemplo de uso de recursos complementares dentro do componente list.](imagens/controles.png)\n*Exemplo de uso do componente check box dentro do componente list*"
      },
      {
        "title": "Metadados",
        "level": 5,
        "content": "Metadados são informações complementares ao conteúdo principal e têm como objetivo informar-nos sobre eles para tornar mais fácil a sua organização e compreensão.\n\nQuando existir, é recomendado que fique localizado na área de *suporte complementar* do item e alinhado verticalmente ao centro. Pode eventualmente vir acompanhado de um ícone ou botão.\n\n![Exemplos de alinhamentos de metadados.](imagens/metadado.png)\n*Exemplos de possibilidades de diagramação do metadados em diferentes itens de list*"
      },
      {
        "title": "3. Rótulo (Opcional)",
        "level": 3,
        "content": "É um item com uma formatação específica com a finalidade de nomear os grupos das lists. Veja o comportamento *Agrupamento* para maiores detalhes."
      },
      {
        "title": "4. Dividers e Espaçamento (Opcional)",
        "level": 3,
        "content": "*Dividers* são recursos opcionais que auxiliam visualmente a percepção do final do item de uma *list* favorecendo a distinção dos seus itens. Quando presentes, devem, estar localizados sempre abaixo da borda inferior de cada item, quando se tratar de uma *list* vertical ou após a borda direita, no caso de *lists* horizontais. *Dividers* podem ser utilizados também como agrupadores.\n\n*Lists* podem ser criadas com diferentes espaçamentos entre seus itens e esta decisão deve ser direcionada pelo *layout* e tomada com equilíbrio e bom senso.\n\n![Exemplos de diferentes espaçamentos nas lists.](imagens/espacamento.png)\n*Exemplos de diferentes possibilidades de espaçamentos nas lists*\n\n![Exemplo de list horizontal com dividers verticais.](imagens/separadores-vert.png)\n*Exemplo de list horizontal com dividers verticais*\n\n**Atenção:** os espaçamentos devem seguir as orientações especificadas no documento de Fundamentos/Espaçamentos."
      },
      {
        "title": "Boas práticas no uso do dividers",
        "level": 4,
        "content": "- Não é permitido variar o espaçamento dos itens dentro de uma mesma *list*.\n\n![Exemplo do correto uso de espaçamento nas lists.](imagens/espacamento-2.png)\n*Exemplo do correto uso de espaçamentos nas lists*\n\n- A leitura de uma *list* com grande quantidade de conteúdo pode ficar confusa. *Dividers* podem auxiliar a separação dos itens e tornar a *list* mais estruturada. Tenha sempre bom senso no uso dos *dividers*.\n\n![Exemplo do bom uso de dividers em uma lista. Use-os com cautela.](imagens/separadores-boaspraticas.png)\n*Use dividers em lists com moderação e bom senso*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Vertical",
        "level": 3,
        "content": "São as mais utilizadas quando o objetivo for listar itens de forma ordenada. Os itens podem estar dispostos em ordem alfabética, conceitual, cronológica ou por qualquer outro critério lógico.\n\n![Exemplo de list do tipo vertical.](imagens/tipo-vertical.png)\n*Exemplo de list vertical*"
      },
      {
        "title": "2. Horizontal",
        "level": 3,
        "content": "*Lists* horizontais são menos comuns que as verticais. Podem ser utilizadas quando se quer aproveitar o espaço horizontal da tela. Tem função semelhante às abas e menus horizontais.\n\n![Exemplo de list do tipo horizontal.](imagens/tipo-horizontal.png)\n*Exemplo de list horizontal*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Densidades e Alturas",
        "level": 3,
        "content": "A densidade de uma *list* é definida de acordo com o *padding-top-bottom* (espaçamento interno) de seu conteúdo e desta forma determina-se a altura dos itens da *list*. O texto principal é o elemento base para definir o *padding*.\n\nOs itens de uma *list* podem ter densidades *alta*, *média* ou *baixa*.\n\n![Exemplos de densidade alta, média e baixa de uma list.](imagens/densidades-itens.png)\n*Densidades fixas possíveis para lists: alta, média e baixa*\n\nJá as alturas dos itens podem ser *fixas* ou *flexíveis*. Na altura fixa a altura é determinada por um valor fixo em pixels. Quando utilizar altura flexível a quantidade de conteúdo irá determinar a altura do item.\n\n**Atenção:** para resoluções abaixo de 4 colunas evite a utilização de densidade alta."
      },
      {
        "title": "2. Agrupamento",
        "level": 3,
        "content": "Algumas *lists* podem conter muitos itens. Um recurso para torná-las mais organizadas é agrupar os itens por afinidades. Os agrupamentos podem ser feitos de três maneiras:\n\n**1. Com rótulos:**\nSub-itens são agrupados por agrupadores que funcionam como títulos de um grupo.\n\n**2. Com separadores:**\nSub-itens são agrupados por afinidades e cada grupo é destacado por *dividers*.\n\n**3. Com expansão:**\nSub-itens são agrupados e ocultados pelo recurso de expansão. Podem ser acessados por meio do clique no item desejado. Esse comportamento será explicado com mais detalhes neste documento.\n\n![Possibilidades de agrupamento dos itens da list.](imagens/agrupamento.png)\n*Possibilidades de agrupamento dos itens da list*\n\n**Atenção:** os exemplos acima podem ser combinados entre si para dar mais ênfase aos agrupamentos.\n\nOs rótulos nada mais são que itens utilizados como títulos de agrupamentos. Por isso devem utilizar a mesma regra de densidade explicada acima.\n\nReferimo-nos a sub-itens quando temos itens agrupados de alguma maneira. Podemos afirmar que sub-itens são itens agrupados, conforme é visualizado na imagem anterior. Evite criar *lists* com mais de um sub-nível."
      },
      {
        "title": "3. Responsividade",
        "level": 3,
        "content": "Quando uma tela é redimensionada, a largura da área principal de um item sofre alteração de acordo com a nova resolução adotada pelo dispositivo, enquanto as demais áreas (suporte visual e suporte interativo) continuam fixas.\n\n![Comportamento de um item de list conforme a resolução é alterada.](imagens/responsividade.png)\n*Comportamento de um item de list conforme a resolução é alterada*"
      },
      {
        "title": "4. Expansão",
        "level": 3,
        "content": "Os itens podem exibir ou esconder conteúdos de diversos tipos, empurrando ou puxando verticalmente os demais conteúdos da *list*. Esta é uma boa maneira de organizar hierarquicamente conteúdos, deixando oculto o que é menos importante.\n\n1. Rótulo expandido;\n2. Itens de sub-nível;\n3. Botão de acionamento do recurso de expansão.\n\n![Anatomia do comportamento de expansão de list.](imagens/collapse.png)\n*Podemos encontrar o recurso de expansão em itens e rótulos, como mostra a imagem acima*\n\nEm *list* horizontais o comportamento de expansão funciona da mesma forma. O exemplo a seguir ilustra esse caso:\n\n![Exemplo do comportamento de expansão em lists horizontais.](imagens/collapse-2.png)\n*Exemplo de expansão em uma list horizontal*\n\n**Atenção:** Quando necessário, utilize *dividers* ou elementos visuais (como sombra) para destacar os rótulos ou itens expansíveis. A superfície do conteúdo expandido pode opcionalmente assumir uma cor distinta para diferenciar da *list* principal, mas tenha atenção de não utilizar uma cor já definida para os estados, pois isso pode gerar confusão semântica. Respeite a usabilidade garantindo a taxa mínima de contraste entre a cor do texto e a cor do fundo."
      },
      {
        "title": "5. Ordenação",
        "level": 3,
        "content": "*Lists* podem oferecer recursos de reordenação pelo usuário, ou até deslocamentos de itens de *lists* diferentes. Quando este recurso estiver ativado deve-se utilizar as definições do estado arrastado (ver documento de Fundamentos/Estados).\n\n![Exemplo de reordenação de itens de uma list.](imagens/ordenacao-1.png)\n*Exemplo de reordenação de itens dentro de uma mesma list*\n\nItens também podem ser deslocados entre diferentes *lists*. A sequência de imagens abaixo ilustra os passos desse comportamento:\n\n1. Item escolhido para ser removido da *list*;\n2. *List* que receberá um novo item deslocado da primeira lista;\n3. A primeira *list* tem um item removido;\n4. Item sendo arrastado;\n5. Primeira *list* sem seu item de origem;\n6. Segunda *list* com um item inserido.\n\n![Passo 1: escolha do item a ser movido para outra list.](imagens/ordenacao-2.png)\n*Exemplo de troca de item entre lists*\n\n![Passo 2: item sendo removido entre as lists.](imagens/ordenacao-3.png)\n*Exemplo de troca de item entre listas*\n\n![Passo 3: Item adicionado em uma nova list.](imagens/ordenacao-4.png)\n*Exemplo de troca de item entre lists*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": ""
      },
      {
        "title": "Alinhamento",
        "level": 4,
        "content": "| Name   |        Spacing Token        |\n| ------ | :-------------------------: |\n| Textos | `--spacing-vertical-center` |\n| Textos | `--spacing-horizontal-left` |"
      },
      {
        "title": "Spacing",
        "level": 4,
        "content": "| Name                   |         Token          |\n| ---------------------- | :--------------------: |\n| Item - densidade alta  | `--spacing-scale-base` |\n| Item - densidade média |  `--spacing-scale-2x`  |\n| Item - densidade baixa |  `--spacing-scale-3x`  |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name             | Property   | Color Token  |\n| ---------------- | ---------- | :----------: |\n| Superfície       | background |  `--pure-0`  |\n| Textos           | text       | `--pure-100` |\n| Texto secundário | text       | `--gray-70`  |\n| Rótulo           | text       | `--pure-100` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name             | Property    |         Token/Value         |\n| ---------------- | ----------- | :-------------------------: |\n| Título           | size        |  `--font-size-scale-base`   |\n| Item             | size        | `--font-size-scale-down-01` |\n| Texto principal  | size        |  `--font-size-scale-base`   |\n| Texto secundário | size        | `--font-size-scale-down-01` |\n| Rótulo           | size        | `--font-size-scale-down-01` |\n| Título           | font-weight |    `--font-weight-bold`     |\n| Item             | font-weight |  `--font-weight-semi-bold`  |\n| Texto principal  | font-weight |   `--font-weight-regular`   |\n| Texto secundário | font-weight |   `--font-weight-regular`   |\n| Rótulo           | font-weight |  `--font-weight-semi-bold`  |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name           | Estado | Ícone                               | Size               | Class (Font Awesome) |\n| -------------- | ------ | ----------------------------------- | ------------------ | -------------------- |\n| Ícone Expandir | --     | <i class=\"fas fa-chevron-down\"></i> | `--icon-size-base` | `.fa-chevron-down`   |\n| Ícone Retrair  | --     | <i class=\"fas fa-chevron-up\"></i>   | `--icon-size-base` | `.fa-chevron-up`     |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Os usuários devem poder navegar pelo *list* através do teclado, usando as teclas `Tab` e `Shift + Tab` ou usar as teclas direcionais `arrowUp` e `arrowDown` como alternativa;\n\n- Certifique-se de que os elementos interativos dentro do *list* sejam acessíveis por teclado, com o uso das teclas `Space` ou `Enter`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Forneça informações claras e concisas que sejam de fácil entendimento para os usuários;\n\n- Garanta que a ordem dos itens na lista tenha um sentido lógico;\n\n- Certifique-se de que o *list* seja legível para usuários que têm dificuldades de visão. Use cores recomendadas na diretriz do componente;"
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Se houver imagens no *list*, ofereça textos descritivos para elas com o atributo `alt`;"
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/list/list.md",
      "accessibilityPath": "ds/componentes/list/list-access.md"
    }
  },
  {
    "name": "Loading",
    "slug": "loading",
    "description": "São indicadores de progresso que expressam um tempo de espera não especificado ou exibem a duração de um processo.",
    "documentationUrl": "https://www.gov.br/ds/components/loading",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo Loading](imagens/loading-types.png)\n*Exemplo de Loading*\n\nUtilizado com o objetivo de proporcionar *feedback* ao usuário durante algum processamento do sistema. Como, por exemplo, em envio de formulários, *upload* de arquivos, carregamento de dados entre outras requisições síncronas e assíncronas ao servidor."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *loading* é constituído por:\n\n| ID  | Nome                         |                         Referência                          | Uso         |\n| --- | ---------------------------- | :---------------------------------------------------------: | ----------- |\n| 1   | Círculo dinâmico contínuo    |                             ---                             | Obrigatório |\n| 2   | Rótulo                       | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 3   | Superfície 1                 | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Opcional    |\n| 4   | Círculo Base                 |                             ---                             | Obrigatório |\n| 5   | Rótulo Percentual            | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Obrigatório |\n| 6   | Superfície 2                 | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Opcional    |\n| 7   | Círculo dinâmico progressivo |                             ---                             | Obrigatório |\n| 8   | Botão Cancelar               |   [Componente Button](/ds/components/button?tab=designer)   | Opcional    |\n| 9   | Superfície *scrim*           | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Opcional    |\n\n![Exemplo Anatomia](imagens/loading-anatomy-1.png)\n*Exemplo de loading indeterminado*\n\n![Exemplo Anatomia](imagens/loading-anatomy-2.png)\n*Exemplo de loading determinado*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Círculo Dinâmico Contínuo (Obrigatório)",
        "level": 3,
        "content": "Elemento visual em movimento contínuo, responsável por representar o processamento do sistema. Este é o elemento principal do *Loading* Indeterminado."
      },
      {
        "title": "2. Rótulo (Opcional)",
        "level": 3,
        "content": "Serve para reforçar a mensagem ao usuário de que há um processamento sendo realizado pelo sistema. Seu uso é opcional, porém é recomendado utilizá-lo em situações em que a probabilidade de demora do processamento do sistema seja maior. Elemento visual usado no *Loading* Indeterminado."
      },
      {
        "title": "3. Superfície 200 x 180px (Opcional)",
        "level": 3,
        "content": "Elemento visual utilizado com o *Loading* Indeterminado. Só deverá ser utilizado quando houver o bloqueio da tela ou parte desta. Servirá para dar contraste e legibilidade entre o componente *Loading* e o *scrim*.\n\n**Obrigatoriedade e Restrições:**\nSeu uso será obrigatório quando houver o bloqueio da tela, ou parte desta, pelo elemento *scrim*. Em qualquer outra situação este elemento não deverá ser utilizado."
      },
      {
        "title": "4. Círculo Base (Obrigatório)",
        "level": 3,
        "content": "Elemento visual que servirá de guia base para o Círculo Dinâmico Progressivo. Ele representa visualmente o percentual não carregado na progressão de 0 a 100%. Este elemento só será utilizado no *Loading* Determinado."
      },
      {
        "title": "5. Rótulo Percentual (Obrigatório)",
        "level": 3,
        "content": "Informação textual dinâmica que é atualizada de 0% a 100% durante o processamento. Este elemento só será utilizado no *Loading* Determinado."
      },
      {
        "title": "6. Superfície 240 x 200px (Opcional)",
        "level": 3,
        "content": "Elemento visual utilizado juntamente com o *Loading* Determinado. Só deverá ser utilizado quando houver o bloqueio da tela ou parte desta. Servirá para dar contraste e legibilidade entre o componente *Loading* e o *scrim*.\n\n**Obrigatoriedade e Restrições:**\nSeu uso será obrigatório quando houver o bloqueio da tela, ou parte desta, pelo elemento Scrim. Em qualquer outra situação este elemento não deverá ser utilizado."
      },
      {
        "title": "7. Círculo Dinâmico Progressivo (Obrigatório)",
        "level": 3,
        "content": "Elemento visual que representa dinamicamente a progressão percentual de 0% a 100%. Este elemento só será utilizado no *Loading* Determinado."
      },
      {
        "title": "8. Botão Cancelar (Opcional)",
        "level": 3,
        "content": "Elemento que compreende o Componente Botão do tipo terciário. Seu uso é opcional. Só poderá ser utilizado quando o sistema tiver a possibilidade de cancelar uma operação já em curso. Este elemento só será utilizado juntamente com o *Loading* Determinado."
      },
      {
        "title": "9. Componente Scrim (Opcional)",
        "level": 3,
        "content": "Este elemento compreende o Componente *scrim* do tipo foco, ou seja, com **40% de opacidade**. É utilizado para bloquear a tela durante o processamento do sistema.\n\n**Obrigatoriedade e Restrições:**\nSeu uso será obrigatório quando for necessário o bloqueio da tela, ou parte desta, pelo sistema. Em qualquer outra situação este elemento não deverá ser utilizado."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Loading Determinado (Tamanho Único)",
        "level": 3,
        "content": "Exibe quanto tempo uma operação vai demorar. Exibe uma progressão **percentual de 0 a 100**. Pode ser utilizado com ou sem o Botão Cancelar. Possui apenas um tamanho.\n\n![Exemplo Loading Determinado](imagens/loading-types-determined.png)\n*Exemplo de loading determinado*"
      },
      {
        "title": "2. Loading Indeterminado (Tamanho Padrão)",
        "level": 3,
        "content": "Demonstra um tempo de espera não especificado. Exibe uma forma circular em movimento contínuo enquanto o processamento dos dados estiver ocorrendo. Pode ser usado com ou sem o rótulo.\n\n![Exemplo Loading Indeterminado](imagens/loading-types-indeterminated.png)\n*Exemplo de loading indeterminado*"
      },
      {
        "title": "3. Loading Indeterminado (Tamanho Pequeno)",
        "level": 3,
        "content": "Possui a mesma finalidade e funcionamento do *Loading* Indeterminado Tamanho Padrão, porém seu uso é mais restrito, apenas dentro de outros componentes, onde o espaço é menor ou em situações em que se quer dar pouco destaque ao processamento. Também pode ser utilizado com ou sem o rótulo.\n\n![Exemplo Loading Indeterminado Pequeno](imagens/loading-types-indeterminated-small.png)\n*Exemplo de loading indeterminado pequeno*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Exibição",
        "level": 3,
        "content": "Dependendo do contexto o componente *loading* poderá ser exibido de formas diferentes, com tamanhos diferenciados:\n\n- *Loading* Determinado (Tamanho Único): 84x84px\n\n- *Loading* Indeterminado (Tamanho Padrão): 44x44px\n\n- *Loading* Indeterminado (Tamanho Pequeno): 24x24px\n\n![Exemplo Tamanhos de Loading](imagens/loading-anatomy-size.png)\n*Exemplos de possíveis tamanhos para o componente loading*"
      },
      {
        "title": "Dentro ou associado a um componente",
        "level": 4,
        "content": "Neste caso, utiliza-se o *Loading* Indeterminado Tamanho Pequeno (24x24px), geralmente para dar resposta de espera à uma requisição assíncrona, onde o usuário poderá continuar a interagir com outros elementos da página. Por exemplo, pode-se usar o *loading* dentro de um *button*, *table*, *list* etc., como demonstrado na figura abaixo.\n\n![Exemplo Tamanho menor](imagens/loading-indeterminated-small-behavior-sample.png)\n*Exemplo de loading dentro de uma componente*"
      },
      {
        "title": "No corpo da página",
        "level": 4,
        "content": "Neste caso, pode-se utilizar o *Loading* Determinado ou Indeterminado em seus tamanhos padrões (44x44px, 84x84px), de acordo com o contexto e a necessidade. Pode ser usado em auxílio a um componente de *upload* ou para demonstrar o carregamento de um bloco ou área da página, como observado no exemplo abaixo.\n\n![Exemplo Tamanho menor](imagens/loading-indeterminated-behavior-sample.png)\n*Exemplo de loading no corpo da página*"
      },
      {
        "title": "Bloqueando a tela ou parte dela",
        "level": 4,
        "content": "Aqui, também, deve-se utilizar o *Loading* Indeterminado ou Determinado em seus formatos padrões, (44x44px e 84x84px respectivamente). Nesta situação, o usuário é impedido de continuar interagindo com o conteúdo da página ou parte dela durante o processamento da informação. O *loading* é exibido com um *scrim* e uma superfície ao fundo.\n\n![Exemplo bloqueando a página inteira](imagens/loading-indeterminate-scrim.png)\n*Exemplo de loading indeterminado com o uso do scrim*\n\n![Exemplo bloqueando a página inteira](imagens/loading-determined-scrim.png)\n*Exemplo de loading determinado com o uso do scrim*"
      },
      {
        "title": "2. Movimento",
        "level": 3,
        "content": "No *Loading Indeterminado*, o elemento apresenta um movimento circular e contínuo no sentido horário como demonstrado na figura abaixo.\n\n![Exemplo Movimento Loading Indeterminado](imagens/loading-indeterminate-behavior-movement.png)\n\nNo ***Loading* Determinado**, o elemento apresenta um movimento circular crescente no sentido horário, começando ao topo do círculo e terminando quando completar uma volta inteira. Durante o movimento, o rótulo ao centro do círculo é atualizado dinamicamente com a progressão percentual.\n\n![Exemplo Movimento Loading Determinado](imagens/loading-progress-behavior-movement.png)"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                         | Property         | Color Token            | Opacity |\n| ---------------------------- | ---------------- | ---------------------- | :-----: |\n| Círculo dinâmico contínuo    | background color | `--blue-warm-vivid-70` |    -    |\n| Círculo base                 | background color | `--gray-20`            |    -    |\n| Círculo dinâmico progressivo | background color | `--blue-warm-vivid-70` |    -    |\n| Rótulo Percentual            | color            | `--blue-warm-vivid-70` |    -    |\n| Rótulo                       | color            | `--gray-80`            |    -    |\n| Botão                        | color            | `--blue-warm-vivid-70` |    -    |\n| Superfície                   | background color | `--pure-0`             |    -    |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name              | Size                      | Weight                    |\n| ----------------- | ------------------------- | ------------------------- |\n| Rótulo Percentual | `--font-size-scale-up-02` | `--font-weight-semi-bold` |\n| Rótulo            | `--font-size-scale-base`  | `--font-weight-medium`    |\n| Botão             | `--font-size-scale-up-01` | `--font-weight-medium`    |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name                               |  Width  | Height  |\n| ---------------------------------- | :-----: | :-----: |\n| Loading Determinado                | `84px`  | `84px`  |\n| Loading Indeterminado Padrão       | `44px`  | `44px`  |\n| Loading Indeterminado Pequeno      | `24px`  | `24px`  |\n| Superfície - Loading Indeterminado | `200px` | `180px` |\n| Superfície - Loading Determinado   | `240px` | `200px` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                                       | margin-bottom | margin-top | margin-left | margin-right | padding-bottom | padding-top | padding-left | padding-right |\n| ------------------------------------------ | :-----------: | :--------: | :---------: | :----------: | :------------: | :---------: | :----------: | :-----------: |\n| Loading Indeterminado Pequeno              |    `16px`     |   `16px`   |   `16px`    |    `16px`    |       -        |      -      |      -       |       -       |\n| Loading Indeterminado Padrão               |    `16px`     |   `16px`   |   `16px`    |    `16px`    |       -        |      -      |      -       |       -       |\n| Loading Determinado                        |    `28px`     |   `28px`   |   `28px`    |    `28px`    |       -        |      -      |      -       |       -       |\n| Loading Indeterminado Padrão na Superfície |    `auto`     |   `auto`   |   `auto`    |    `auto`    |       -        |      -      |      -       |       -       |\n| Loading Determinado na Superfície          |    `auto`     |   `auto`   |   `auto`    |    `auto`    |       -        |      -      |      -       |       -       |\n| Rótulo                                     |    `auto`     |   `16px`   |   `auto`    |    `auto`    |       -        |      -      |      -       |       -       |\n| Botão                                      |    `auto`     |   `28px`   |   `auto`    |    `auto`    |       -        |      -      |      -       |       -       |\n| Superfície - Loading Indeterminado         |    `auto`     |   `auto`   |   `auto`    |    `auto`    |     `auto`     |   `auto`    |    `auto`    |    `auto`     |\n| Superfície - Loading Determinado           |    `auto`     |   `auto`   |   `auto`    |    `auto`    |     `auto`     |   `auto`    |    `auto`    |    `auto`     |\n\n**OBS:** Os conteúdos das superfícies são obrigatoriamente **centralizados** na **altura** e na **largura**."
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "|    Name    | Shadow Token  |\n| :--------: | :-----------: |\n| Superfície | `--shadow-xl` |"
      }
    ],
    "accessibility": [
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Forneça um texto alternativo descritivo para explicar o que está acontecendo na página durante a exibição do *loading*. Esta prática auxilia os usuários que possuem alguma deficiência visual;\n\n- Outra alternativa é fornecer *feedback* sonoro para atender usuários com deficiência visual. Neste caso, é recomendado também manter a alternativa descritiva textual para atender usuários com deficiência auditiva;\n\n- É importante deixar claro para os usuários a indicação do progresso do *loading*, seja de forma visual, textual ou sonora. A indicação pode exibir uma informação referente ao percentual, etapas ou passos do progresso;\n\n- Evite tempos de espera excessivos. Caso o *loading* apresente um tempo de espera muito longo, forneça ao usuário opções para cancelar o processamento e retornar à tarefa anterior;\n\n- Evite utilizar animações com variações intensas de cores ou flashes durante o uso do *loading*. Isso pode prejudicar usuários que possuem alguma sensibilidade a esses estímulos, causando problemas de epilepsia, por exemplo;\n\n- Forneça aos usuários, por meio de tecnologias assistivas, a informação sobre a conclusão do processamento do *loading*."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Utilize o atributo `title` no ícone `<svg>` do *loading*, fornecendo sua descrição. Por exemplo: \"Carregando\";\n\n- Caso utilize imagens (gif, jpg, ...) para o ícone de *loading*, use o atributo `alt` para descrição, podendo acrescentar o atributo `title` com um texto de ajuda adicional para a imagem;\n\n- É possível utilizar `aria-live` com valor `assertive` para fornecer o status de carregamento para tecnologias assistivas;\n\n- Uma mensagem de status, como “carregamento completo”, pode ser colocada na seção `aria-live` ou por meio do atributo `role = \"status\"`."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/loading/accessibility)\n- [Material Design System](https://m3.material.io/components/progress-indicators/accessibility)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/loading/loading.md",
      "accessibilityPath": "ds/componentes/loading/loading-access.md"
    }
  },
  {
    "name": "Magic Button",
    "slug": "magicbutton",
    "description": "O componente *Magic Button* é um botão com grande apelo visual.",
    "documentationUrl": "https://www.gov.br/ds/components/magicbutton",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplos de magic button.](imagens/diretriz.png)\n*Exemplos do componente magic button.*\n\nUse o *magic button* para iniciar/encerrar fluxos relevantes ou induzir usuários a realizar ações que geram algum tipo de conversão."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome                |                          Referência                           | Uso         |\n| --- | ------------------- | :-----------------------------------------------------------: | ----------- |\n| 1   | Superfície de apoio |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 2   | Superfície          |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 3   | *Label*             |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Obrigatório |\n| 4   | Ícone               | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Obrigatório |\n\n![Anatomia do magic button.](imagens/anatomia.png)\n*Anatomia do componente magic button.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Superfície de Apoio (Obrigatório)",
        "level": 4,
        "content": "O *magic button* possui uma superfície de apoio. Esta superfície pode ser entendida como uma moldura, o que confere algumas vantagens ao *magic button*:\n\n- Possui maior robustez que um botão primário.\n\n- Garante contraste e destaque visual em qualquer cor de *background*.\n\n- Possui sombra para indicar que o componente se encontra elevado em relação ao fundo proporcionando mais destaque.\n\n- A superfície de apoio funciona como área de proteção quando o *magic button* tiver o comportamento flutuante."
      },
      {
        "title": "2. Superfície (Obrigatório)",
        "level": 4,
        "content": "Trata-se da superfície interna do componente e funciona da mesma maneira que a do *button*.\n\n- É apenas permitida superfície no formato redondo ou pílula.\n\n- A única cor possível para a superfície é a indicada pela paleta *highlight*."
      },
      {
        "title": "3. Label (Obrigatório)",
        "level": 4,
        "content": "O *label* do *magic button* é um pouco mais avantajado que o do *button*, o que lhe ajuda a conferir um peso visual maior.\n\nUtilize estratégicas de \"*call-to-action*\" para elaborar o texto do *label*. Informe aos usuários qual ação eles realizarão se clicarem no botão. O texto é geralmente *curto*, mas *consistente* de modo que pode rapidamente chamar a atenção dos usuários induzindo à ação."
      },
      {
        "title": "4. Ícone (Obrigatório)",
        "level": 4,
        "content": "Tenha cautela ao escolher o ícone que utilizará no *magic button* redondo. Dê preferência a ícones já popularmente consagrados e reconhecido pelas pessoas em geral.\n\n![Exemplos de como escolher ícones. A imagem mostra como uma boa prática ícones de carrinho de compra, sino, e câmera fotográfica. Exemplos ruins são ícones de uma folha, um cubo e uma bandeira.](imagens/icone.png)\n*Exemplos de boas e más escolhas de ícones.*\n\n**Atenção:** não está proibido o uso de ícone no *magic button* pílula, no entanto é recomendado o uso apenas de texto curto e direto e que cause grande impacto. Tenha em mente que a mensagem de um *magic button* deve ser tão clara e direta que não haja a necessidade de ícone para reforçar a mensagem.\n\n![Exemplos de magic button sem e com ícone.](imagens/icone2.png)\n*Exemplos de uso de ícone no magic button.*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "Estão previstos dois tipos de *magic buttons*:\n\n1 - Formato pílula;\n2 - Formato redondo.\n\n![Exemplos de magic button sem e com ícone.](imagens/tipos.png)\n*Exemplos de uso de ícone no magic button.*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Magic Button x Button",
        "level": 3,
        "content": "*Magic button* pode ser frequentemente confundido com *buttons* (*primary* e *secondary*) e isso dependerá da sua função em um determinado contexto. Tenha em mente que o contexto é fundamental para a correta escolha do botão. Para facilitar o entendimento apresentamos algumas situações de uso visando auxiliar na decisão de qual componente será mais eficiente em cada caso."
      },
      {
        "title": "Use Magic Button",
        "level": 4,
        "content": "- Para atrair a atenção do usuário para uma ação de conversão ou geração de *leads* (em relação ao serviço como todo).\n\n- Para iniciar e encerrar fluxos relevantes.\n\n- Como botão flutuante de uma ação que deva ser visível independentemente da rolagem de tela.\n\n- Como botão que pela relevância da sua ação precise se destacar dos *buttons*."
      },
      {
        "title": "Use button",
        "level": 4,
        "content": "- Como botão que executa uma ação primária em uma tela dando continuidade à navegação.\n\n- Como botão que executa uma ação secundária (normalmente, em relação a uma ação primária).\n\n- Como um botão pertencente a um componente.\n\n- Como botões que dão continuidade a um fluxo com início e fim determinados por *magic buttons*.\n\n- Para submeter ao servidor informações ordinárias.\n\n- para ações corriqueiras de um serviço.\n\n- para associar páginas ou serviços internos e/ou externos.\n\n**Atenção:** tenha em mente que **o button pode substituir o magic button** em todos os contextos porém, o contrário não é permitido."
      },
      {
        "title": "2. Quantidade",
        "level": 3,
        "content": "*Magic buttons* são botões exclusivos e por isso não é recomendável a existência de mais de um *magic button* em uma tela ou fluxo.\n\n**Atenção:** o mais indicado é que haja apenas um único *magic button* em todo o *site*/aplicativo. Desta forma, fica garantida a exclusividade do componente."
      },
      {
        "title": "3. Posicionamento",
        "level": 3,
        "content": "Geralmente o *magic button* está localizado nas áreas nobres da tela (no topo à direita, em baixo à direita ou embaixo no centro) ou ainda flutuando sobre o conteúdo. No entanto, não se trata de uma regra. O designer deve analisar com bom senso a melhor localização para o *magic button* ter destaque e não ser confundido com outros componentes.\n\n![A imagem ilustra alguns dos mais comuns posicionamentos em telado magic button.](imagens/posicionamento.png)\n*Exemplos mais comuns de posicionamento na tela do magic button.*"
      },
      {
        "title": "4. Densidade",
        "level": 3,
        "content": "O componente *magic button* possui as seguintes densidades:\n\n![Exemplos de densidades do componente magic button.](imagens/densidade.png)\n*Exemplos de densidades do componente magic button.*"
      },
      {
        "title": "5. Estados",
        "level": 3,
        "content": "Os estados possíveis para o *magic button* são: *hover*, *pressionado* e *foco*.\n\n![Exemplos de estados do componente magic button.](imagens/estados.png)\n*Exemplos de estados do componente magic button.*\n\n**Atenção:** jamais utilize o *magic button* com estado desabilitado. Se for necessário utilizar um botão que possa se tornar desabilitado então este deve ser um botão primário ou secundário."
      },
      {
        "title": "6. Responsividade",
        "level": 3,
        "content": "Em larguras de quatro colunas, utilize o *magic button* no formato pílula ocupando toda a largura disponível da tela.\n\nO formato redondo flutuante funciona muito bem em aplicativos móveis, devida à escassez de espaço na tela.\n\n![Exemplos de uso do componente magic button em responsividade de quatro colunas.](imagens/responsividade.png)\n*Exemplos de uso do componente magic button em responsividade de quatro colunas.*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- Tenha em mente que apesar de ser um botão, o *magic button* tem características especiais e exclusivas no *layout*.\n\n- Por ter forte apelo visual o *magic button* se presta perfeitamente à função de *call-to-action* em um serviço.\n\n- Use textos curtos porém impactantes nos *labels* dos *magic buttons*.\n\n- O DS não proíbe o uso de *tooltips* em *magics buttons*, no entanto tenha em mente que o *label* ou o ícone do *magic button* deve ser tão claro e objetivo que não seja necessário o recurso de *tooltips* para que o usuário possa compreender a ação proposta pelo *magic button*.\n\n- Para conferir maior destaque ao *magic button* crie uma área de respiro para evitar a competição da atenção do usuário com outros componentes, principalmente *buttons*.\n\n![A imagem apresenta exemplos do uso de áreas de respiro para ambos os tipos de magic button.](imagens/respiro.png)\n*Área de respiro para ambos os tipos de magic button.*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Alinhamento",
        "level": 3,
        "content": "| Name                |        Spacing Token        |\n| ------------------- | :-------------------------: |\n| Superfície de apoio | `--spacing-vertical-center` |\n| Label               | `--spacing-vertical-center` |\n| Icon                | `--spacing-vertical-center` |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name               | Property                   |       Token/Value       |\n| ------------------ | -------------------------- | :---------------------: |\n| Label              | marging-right/marging-left |  `--spacing-scale-3x`   |\n| Icon (dens. alta)  | marging-left/marging-right | `--spacing-scale-base`  |\n| Icon (dens. media) | marging-left/marging-right | `--spacing-scale-baseh` |\n| Icon (dens. baixa) | marging-left/marging-right |  `--spacing-scale-2x`   |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name  | Property    |        Token/Value        |\n| ----- | ----------- | :-----------------------: |\n| Label | family      |   `–-font-family-base`    |\n| Label | font-weight | `--font-weight-semi-bold` |\n| Label | size        | `--font-size-scale-up-02` |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name  | Property |   Token/Value    |\n| ----- | -------- | :--------------: |\n| Ícone | size     | `--icon-size-lg` |"
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                | Property   |          Token          |\n| ------------------- | ---------- | :---------------------: |\n| Label               | color      |       `--pure-0`        |\n| Superfície          | background | `--green-cool-vivid-50` |\n| Superfície de Apoio | background |       `--gray-5`        |"
      },
      {
        "title": "Arredondamento [Formato pílula]",
        "level": 3,
        "content": "| Name                              | Property              | Value  |\n| --------------------------------- | --------------------- | :----: |\n| Superfície (dens. alta)           | top-left-bottom-right | `18px` |\n| Superfície (dens. media)          | top-left-bottom-right | `22px` |\n| Superfície (dens. baixa)          | top-left-bottom-right | `26px` |\n| Superfície de apoio (dens. alta)  | top-left-bottom-right | `28px` |\n| Superfície de apoio (dens. media) | top-left-bottom-right | `32px` |\n| Superfície de apoio (dens. baixa) | top-left-bottom-right | `36px` |"
      },
      {
        "title": "Arredondamento [Formato redondo]",
        "level": 3,
        "content": "| Name                              | Property              | Value  |\n| --------------------------------- | --------------------- | :----: |\n| Superfície (dens. alta)           | top-left-bottom-right | `18px` |\n| Superfície (dens. media)          | top-left-bottom-right | `22px` |\n| Superfície (dens. baixa)          | top-left-bottom-right | `28px` |\n| Superfície de apoio (dens. alta)  | top-left-bottom-right | `28px` |\n| Superfície de apoio (dens. media) | top-left-bottom-right | `32px` |\n| Superfície de apoio (dens. baixa) | top-left-bottom-right | `36px` |"
      },
      {
        "title": "Densidade [Superfície]",
        "level": 3,
        "content": "| Name        | Property |      Token/Value      |\n| ----------- | -------- | :-------------------: |\n| Dens. alta  | height   | `--spacing-scale-4xh` |\n| Dens. media | height   | `--spacing-scale-5xh` |\n| Dens. baixa | height   | `--spacing-scale-6xh` |"
      },
      {
        "title": "Densidade [Superfície de apoio]",
        "level": 3,
        "content": "| Name        | Property |     Token/Value      |\n| ----------- | -------- | :------------------: |\n| Dens. alta  | height   | `--spacing-scale-7x` |\n| Dens. media | height   | `--spacing-scale-8x` |\n| Dens. baixa | height   | `--spacing-scale-9x` |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "|        Name         | Token Shadow  |\n| :-----------------: | :-----------: |\n| Superfície de apoio | `--shadow-sm` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- O *magic button* deve ser acessado via navegação por teclado por meio da tecla `Tab` e acionado por meio da tecla `Space` ou `Enter`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Verifique se o uso das cores em `cor de superfície` e `cor de leitura` no *magic button* correspondem às recomendadas na diretriz de design, garantindo um contraste adequado para uma boa acessibilidade;\n\n- Quando utilizar o *magic button* com apenas ícones, certifique-se de exibir a informação do rótulo através de um `Tooltip` ao passar o mouse ou focar no botão;\n\n- Em dispositivos móveis utilize ícones fortemente semânticos, isto é, que tragam um entendimento imediato para os usuários. Como estes dispositivos não possuem o recurso de `Tooltip` com uso do `hover`, a escolha de ícones conhecidos pode amenizar esta limitação;\n\n- Em dispositivos mobile certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de `44px`."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- É recomendável utilizar a tag `<button>` como marcação semântica para construção do componente, apesar de existirem alternativas como `<a>` ou `<input type=\"button\">`;\n\n- Mantenha **sempre** habilitado o estado foco na configuração do navegador, para os elementos focados exibirem os recursos visuais próprios do estado;\n\n- Caso haja ícone decorativo - aquele que funciona como apoio ao lado rótulo do botão - utilize `aria-hidden = true` e não utilize atributo `title`, para evitar que os leitores de tela leiam duas vezes a mesma informação;\n\n- Ao utilizar o *magic button* com apenas ícones, certifique-se de usar os atributos `title` ou `aria-label`;\n\n- Caso seja utilizado link com formato do *magic button*, recomenda-se configurá-lo para aceitar a tecla `Space` como acionadora, visto que os links são ativados por padrão pela tecla `Enter`;\n\n- Para o *magic button* com ação de alternância, utilize `aria-pressed` alternando seu valor entre `true` e `false` ou alternância de rótulo com texto que seja significativo para o entendimento do usuário (por exemplo: Expandir / Retrair)."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Guia WCAG](https://guia-wcag.com/)\n- [Mayflower Design System](https://mayflower.digital.mass.gov/core/index.html?path=/docs/elements-buttons--button-primary)\n- [Carbon Design System](https://carbondesignsystem.com/components/button/accessibility)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/button/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/magicbutton/magicbutton.md",
      "accessibilityPath": "ds/componentes/magicbutton/magicbutton-access.md"
    }
  },
  {
    "name": "Menu de Navegação",
    "slug": "menu",
    "description": "Os menus de navegação (ou simplesmente menus) são listas de categorias de conteúdo ou recursos, normalmente apresentados como um conjunto de *links* ou ícones agrupados com um estilo visual diferente do resto do *design*.",
    "documentationUrl": "https://www.gov.br/ds/components/menu",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Menu Principal e Auxiliar](imagens/menu-types.png)\n*Exemplo de menu de navegação principal e menu de navegação contextual.*\n\nO menu de navegação deve ser utilizado com o objetivo de oferecer acesso a todas as áreas ou páginas do *site*/sistema. Esse acesso é feito por meio de *links* categorizados em seções e subseções definidos pela arquitetura da informação."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "Seguindo as boas práticas de design e usabilidade, o tom e voz utilizado no menu devem ser sucintos e objetivos. Por conta do espaço limitado, deve-se evitar o uso de textos longos e quebra do texto em duas ou mais linhas. Aqui deve-se usar o bom senso, a substituição de palavras longas por sinônimos menores, com o objetivo de atender à comunicação clara ao usuário e, ao mesmo tempo, garantir a boa estética."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O menu é constituído por:\n\n| ID  | Nome                         |                     Referência                      | Uso         |\n| --- | ---------------------------- | :-------------------------------------------------: | ----------- |\n| 1   | Ícone de acionamento         |    [Button](/ds/components/button?tab=designer)     | Opcional    |\n| 2   | Superfície *scrim*           |                         ---                         | Condicional |\n| 3   | Cabeçalho do menu            |    [Header](/ds/components/header?tab=designer)     | Opcional    |\n| 4   | Botão Fechar                 |    [Button](/ds/components/button?tab=designer)     | Opcional    |\n| 5   | Item de 1º nível             |      [Item](/ds/components/item?tab=designer)       | Opcional    |\n| 6   | Item de 2º nível             |      [Item](/ds/components/item?tab=designer)       | Condicional |\n| 7   | Ícone Expandir/Retrair       |    [Button](/ds/components/button?tab=designer)     | Condicional |\n| 8   | Ícone representativo do item | [Iconografia](/ds/fundamentos-visuais/iconografia)  | Opcional    |\n| 9   | Ícone Acessar Subitens       |    [Button](/ds/components/button?tab=designer)     | Condicional |\n| 10  | Componente *divider*         | [Divider](/ds/components/divider?tab=desenvolvedor) | Condicional |\n| 11  | Painel do menu               |                         ---                         | Obrigatório |\n| 12  | Rodapé do menu               |    [Footer](/ds/components/footer?tab=designer)     | Opcional    |\n\n![Anatomia do Menu](imagens/menu-anatomy.png)\n*Anatomia do menu.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Ícone de acionamento (Opcional)",
        "level": 3,
        "content": "A partir deste ícone/botão o usuário pode acionar o menu e ter acesso aos *links* para navegação."
      },
      {
        "title": "2. Superfície scrim (Condicional)",
        "level": 3,
        "content": "Este elemento serve para adicionar contraste entre o componente menu e o conteúdo da tela ao fundo, direcionando a atenção do usuário ao conteúdo do menu. Neste contexto, será utilizado a superfície *scrim*.\n\nEste elemento é condicional porque só será apresentado com o primeiro tipo de abertura do menu principal, quando este se apresenta sobre a tela cobrindo o conteúdo.\n\nVeja mais informações sobre modos de abertura do menu em: Comportamentos > Acionamento/Fechamento.\n\n**Atenção:** nesse caso, o menu passará a ocupar a *camada 3* na hierarquia de elevação e apresentará a sombra correspondente a essa camada.\n\nVeja mais detalhes no documento [Fundamentos Elevação](/ds/fundamentos-visuais/elevacao)."
      },
      {
        "title": "3. Cabeçalho do menu (Opcional)",
        "level": 3,
        "content": "Identifica o *site* ou sistema. Seu uso é opcional e pode ser utilizado com o logo, o título ou algum elemento que identifique o *site* ou o menu.\n\n![Anatomia do Cabeçalho do Menu](imagens/menu-anatomy-header.png)\n*Possibilidades de aplicação do cabeçalho do menu.*"
      },
      {
        "title": "4. Botão Fechar (Opcional)",
        "level": 3,
        "content": "Este elemento está localizado no cabeçalho do menu e seu uso é opcional, visto que é possível optar pelo fechamento com um clique em qualquer área da tela fora do menu.\nÉ recomendado, porém, oferecer as duas opções de fechamento do menu concomitantemente: botão Fechar e clique fora do menu.\n\n![Como Fechar o Menu](imagens/menu-behavior-close.png)\n*Possibilidades de fechamento do menu.*\n\n**Atenção:** em alguns casos, o menu pode ser fixo na tela e não oferecer a possibilidade de fechamento e abertura."
      },
      {
        "title": "5. Itens de 1º nível (Opcional)",
        "level": 3,
        "content": "São formados pelo componente item e utilizados essencialmente para possibilitar a navegação pelo menu. Os itens de primeiro nível podem funcionar como itens agrupadores ou como itens de navegação. Quando utilizado como agrupador, use o ícone Expandir/Retrair à direita para reforçar a existência de subitens. Garanta que a área de interação seja em toda a área do item.\n\n![item do Menu](imagens/menu-anatomy-item-types–1.png)\n*Itens do menu com agrupamento e simples.*"
      },
      {
        "title": "6. Item de 2º nível (Condicional)",
        "level": 3,
        "content": "Este elemento é condicionado à necessidade de uso de subitens.\n\nSão também formados pelo componente item e possuem algumas distinções em relação aos itens de 1º nível a fim de garantir contraste visual entre os dois níveis de itens do menu:\n\n- São utilizados com uma indentação maior;\n- Apresentam cor de fundo diferenciada;\n- Não deve utilizar o componente *divider* para separá-los.\n\nQuando um item de 2º nível apresentar subitens, um ícone de seta deve ser utilizado à direta e nestes casos levam o usuário para um painel com os itens filhos.\n\n![item do Menu](imagens/menu-anatomy-item-types–2.png)\n*Item do menu de 2º nível.*"
      },
      {
        "title": "7. Ícone Expandir/Retrair (Condicional)",
        "level": 3,
        "content": "Utilize os ícones Expandir/Retrair para acionar o comportamento *collapse* para acionamento dos subníveis.\n\n![Ícone Expandir/Retrair](imagens/menu-anatomy-item-types-4.png)\n*Uso do ícone Expandir/Retrair.*"
      },
      {
        "title": "8. Ícones representativos (Opcional)",
        "level": 3,
        "content": "Ícones representativos do item é um elemento opcional e pode ser usado para dar ênfase visual aos *links* de navegação, reforçando a semântica do texto.\n\nPreze pelas boas práticas de utilização:\n\n- Utilize a família de ícones adotada no Design System (*Font Awesome*);\n\n- Padronize a utilização de ícones.\n  Por exemplo: utilize em todos os itens do mesmo bloco ou em todos os itens do menu.\n\n![Ícones do Menu](imagens/menu-anatomy-itens-icons.png)\n*Padronize o uso dos ícones no menu.*"
      },
      {
        "title": "9. Ícone Acessar Subitens (Condicional)",
        "level": 3,
        "content": "Este elemento é condicionado à existência de subitens no 2º nível do menu.\nOs itens filhos devem ser apresentados em um painel separado.\n\nVeja mais detalhes em Comportamento > 2º nível.\n\n![Subníveis do Menu](imagens/menu-behavior-second-level.png)\n*Subníveis do 2º nível do menu.*"
      },
      {
        "title": "10. Componente divider (Condicional)",
        "level": 3,
        "content": "O componente *divider* deve ser utilizado apenas no 1º nível do menu. Os itens de 2º nível não utilizam *dividers*.\n\n![Componente *Divider](imagens/menu-anatomy-divider.png)\n*Uso do componente divider.*"
      },
      {
        "title": "11. Painel do menu (Obrigatório)",
        "level": 3,
        "content": "O painel é utilizado como superfície de suporte para os itens do menu. Quando acionado, abrirá flutuando e deslizando lateralmente da esquerda para direita. Opcionalmente, pode ocorrer com a utilização do elemento *scrim* ocupando toda a área da tela.\n\nO painel pode conter também outros elementos auxiliares."
      },
      {
        "title": "12. Rodapé do menu (Opcional)",
        "level": 3,
        "content": "Está posicionado na parte inferior do painel do menu e contém algumas áreas de apoio, como *links* para acesso a *sites* externos, mídias sociais, informações adicionais, etc.\n\n![Rodapé do Menu](imagens/menu-anatomy-footer.png)\n*Possíveis usos do rodapé do menu.*\n\n**Atenção:** o rodapé deve ser utilizado conforme a necessidade e é flexível para conter qualquer tipo de informações adicionais."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Menu Principal",
        "level": 3,
        "content": "Por meio do menu principal o usuário tem acesso a todos os *links* para as páginas do *site*/sistema.\n\nO menu principal deve ser fácil de ser acessado de qualquer página do *site*/sistema.\n\n![Menu Principal](imagens/menu-type-main.png)\n*Exemplo de menu principal.*"
      },
      {
        "title": "2. Menu Contextual",
        "level": 3,
        "content": "O menu contextual ou secundário, é utilizado de forma auxiliar ao principal. Geralmente é aplicado para navegações de páginas internas ou itens relacionados (âncoras). É menos relevante e por isso costuma ser uma versão simplificada do menu principal.\n\n![Menu Auxiliar](imagens/menu-type-auxiliary.png)\n*Exemplo de menu contextual.*\n\nO menu contextual se encontra na *camada zero* de elevação e portanto não apresenta sombra.\n\n**Atenção:** Por ser uma versão \"enxuta\" do menu principal, evite subníveis e excesso de elementos. Menus contextuais devem ser simples e diretos portanto, quanto menos elementos, melhor performance apresentará.\n\nTenha em mente que ambos os menus (principal e contextual) funcionam de modo independente. Evite, portanto, dispor *links* comuns nos dois menus. Deixe bem claro para o usuário o nível de navegação que cada menu oferece."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Localização",
        "level": 3,
        "content": "O menu principal pode se comportar de duas maneiras distintas na tela:\n\n- Flutuando;\n- Fixo."
      },
      {
        "title": "Flutuando",
        "level": 4,
        "content": "O menu é aberto por meio de um elemento acionador localizado no cabeçalho do *site*/sistema e aparece flutuando sobre o conteúdo da tela. Este comportamento do menu principal deve estar associado ao elemento *scrim*, que \"bloqueia\" o acesso ao conteúdo da tela enquanto o menu estiver aberto.\n\nNeste caso, o menu deverá se encontrar na *camada 3* na hierarquia de elevação e apresenta a sombra correspondente a essa camada.\n\nVeja mais detalhes no documento [Fundamentos Elevação](/ds/fundamentos-visuais/elevacao).\n\nPara fechar o menu, basta clicar novamente no mesmo elemento acionador, no ícone fechar no cabeçalho do menu ou em qualquer área da tela fora do menu.\n\n![1º Modo de Acionamento](imagens/menu-behavior-open-position-1.png)\n*Comportamento do menu principal flutuando.*"
      },
      {
        "title": "Fixo",
        "level": 4,
        "content": "O menu principal é acionado por meio de um elemento acionador localizado no cabeçalho e é aberto na lateral da página sem sobrepor o conteúdo. O conteúdo da página é então deslocado para direita\n\nNeste caso, não há sobreposição de camadas porém, pelo fato de ser considerado um elemento relevante deve ser apresentado na *camada 1* de elevação e por isso apresenta sombra suave.\n\nVeja mais detalhes no documento [Fundamentos Elevação](/ds/fundamentos-visuais/elevacao).\n\nPara fechar o menu, basta clicar no no elemento acionador, que deve ter o ícone alterado para \"fechar\".\n\n![2º Modo de Acionamento](imagens/menu-behavior-open-position-2.png)\n*Comportamento do menu principal fixo.*"
      },
      {
        "title": "Menu contextual",
        "level": 4,
        "content": "O menu contextual, quando houver, pode ser fixo ou *sticky* e e geralmente fica posicionado no extremo direito da tela para não competir com o menu principal. Geralmente não há a possibilidade do usuário abri-lo ou fechá-lo.\n\n![Posição do Menu Contextual](imagens/menu-behavior-open-position-3.png)\n*Comportamento do menu contextual.*"
      },
      {
        "title": "2. Rolagem",
        "level": 3,
        "content": "Menus podem apresentar muitos itens, ultrapassando a altura da tela do dispositivo (*desktop*, *tablet* ou *smartphone*).\n\nDe acordo com [padrão da diretriz Template Base](/ds/templates/base?tab=designer), a Área de navegação pode existir um barra de rolagem interna para acessar o conteúdo.\n\nPorém nos *smartphones*, como a altura do dispositivo geralmente são bem menor, a rolagem deve ocorrer de forma natural, rolando todo conteúdo do menu para cima ou para baixo utilizando a própria rolagem do navegador. Em outras palavras, evite o uso de rolagem interna na grid de 4 colunas!\n\n![Comportamento Scroll](imagens/menu-behavior-scroll.png)\n*Comportamento de rolagem do menu.*"
      },
      {
        "title": "3. Agrupamento de itens",
        "level": 3,
        "content": "Agrupamentos de itens podem ser utilizados tanto no menu principal quanto no menu contextual.\n\nHá três formas de agrupar:\n\n- Agrupamento por expansão;\n- Agrupamento por rótulos;\n- Agrupamento por *dividers*."
      },
      {
        "title": "Agrupamento por expansão",
        "level": 4,
        "content": "O usuário pode expandir ou retrair os blocos de agrupamento para acessar os subitens que estão ocultos."
      },
      {
        "title": "Agrupamento por rótulos",
        "level": 4,
        "content": "Os blocos de agrupamento são classificados por rótulos e não há a ação de expansão/retração dos subitens."
      },
      {
        "title": "Agrupamento por dividers",
        "level": 4,
        "content": "Os itens do menu são separados pelos componentes *dividers*.\n\n![Formas de Agrupamento](imagens/menu-behavior-group.png)\n*Possibilidades de agrupamento dos itens do menu.*\n\n**Atenção:** evite utilizar agrupamentos no meu contextual. Caso seja realmente necessário, prefira os agrupamentos por rótulos ou por *dividers*."
      },
      {
        "title": "4. Navegação em subníveis",
        "level": 3,
        "content": "Realce a existência de subníveis ocultos utilizando ícones de seta.\n\nClicando nos itens agrupadores, o menu desliza para baixo e apresenta os subitens de 1º nível. O mesmo ocorre do 1º para o 2º nível. Para retornar os níveis basta realizar o processo inverso.\n\n![Navegação em subníveis](imagens/menu-anatomy-item-types-4.png)\n*Exemplo de navegação entre 1º e o 2º nível.*\n\n![Navegação em subníveis](imagens/menu-behavior-second-level.png)\n*Exemplo de navegação entre 2º para o 3º nível.*\n\nPode haver subníveis dentro de subníveis e o comportamento de navegação é sempre o mesmo. Desta forma, o usuário tem sempre a sua frente a opção escolhida e a possibilidade de retornar ao nível anterior.\n\n**Atenção:** se o menu for fechado e aberto em seguida, apresente o 1º nível de itens."
      },
      {
        "title": "5. Responsividade",
        "level": 3,
        "content": "Tendo em vista a variedade de resoluções e dispositivos existentes, não é possível determinar uma largura fixa para o componente menu. Sendo assim, a largura deve ser ajustada à *grid* para cada *layout*, respeitando os diversos tamanhos de dispositivos."
      },
      {
        "title": "Grid de 12 colunas",
        "level": 4,
        "content": "Em *grids* de 12 colunas o menu principal e o menu contextual podem ocorrer conjuntamente sem problemas.\n\n![Grid de 12 Colunas](imagens/menu-behavior-responsive-grid-12-col.png)\n*Exemplo de grid de 12 colunas.*"
      },
      {
        "title": "Grid de 8 colunas",
        "level": 4,
        "content": "Em *grids* de 8 colunas o menu contextual deve mudar de comportamento e ocupar uma barra inferior *dropdown*. Maiores detalhes são expostos na explicação da *grid* de 4 colunas.\n\n![Grid de 8 Colunas](imagens/menu-behavior-responsive-grid-8-col.png)\n*Exemplo de grid de 8 colunas.*"
      },
      {
        "title": "Grid de 4 colunas",
        "level": 4,
        "content": ""
      },
      {
        "title": "Menu principal",
        "level": 4,
        "content": "Em dispositivos smartphones o menu principal assumirá a largura completa da tela ocupando todas as colunas da *grid*.\n\n![Grid de 4 Colunas](imagens/menu-behavior-responsive-grid-4-col.png)\n*Exemplo de grid de 4 colunas para o menu principal.*\n\n**Atenção:** no menu principal flutuante, por se tratar de um elemento dropdown, não há necessidade de adequação à grid, pois são elementos flutuantes e não recebem influência da mesma. Porém, é importante definir um percentual da dimensão deste conteúdo. Recomenda-se que a largura do menu ocupe de 25% a 35% da área visível da tela, enquanto que em grids de 4 colunas a ocupação deve ser de 100% da área visível."
      },
      {
        "title": "Menu grid 4 colunas contextual",
        "level": 4,
        "content": "Na *grid* de 4 colunas há uma adaptação substancial no menu contextual que é apresentado como uma barra na base da área visível da tela. Ao ser acionado, o menu contextual expande de baixo para cima e ocupa parte da tela que é preenchida pelo componente *scrim*, reforçando a ênfase no menu.\n\n**Atenção:** ao rolar a tela, a barra do menu contextual permanece fixa na base da área visível da tela.\n\n![Grid de 4 Colunas para o Menu Auxiliar](imagens/menu-behavior-responsive-grid-4-col-1.png)\n*Exemplo de grid de 4 colunas para o menu contextual.*"
      },
      {
        "title": "6. Estados",
        "level": 3,
        "content": ""
      },
      {
        "title": "Estado interativo",
        "level": 4,
        "content": "![Estado Interativo](imagens/menu-behavior-state-interactive.png)\n*Exemplo de estado interativo do menu.*"
      },
      {
        "title": "Estado hover",
        "level": 4,
        "content": "![Estado Hover](imagens/menu-behavior-state-hover.png)\n*Exemplo de estado hover do menu.*"
      },
      {
        "title": "Estado foco",
        "level": 4,
        "content": "![Estado Foco](imagens/menu-behavior-state-foco.png)\n*Exemplo de estado foco do menu.*"
      },
      {
        "title": "Estado desabilitado",
        "level": 4,
        "content": "![Estado Desabilitado](imagens/menu-behavior-state-disabled.png)\n*Exemplo de estado desabilitado do menu.*"
      },
      {
        "title": "Estado ativo",
        "level": 4,
        "content": "![Estado Ativo](imagens/menu-behavior-state-active.png)\n*Exemplo de estado ativo do menu.*\n\nPara mais detalhes a respeito das regras de funcionamento dos estados, consulte [Fundamentos Visuais > Estados.](/ds/fundamentos-visuais/estados)"
      },
      {
        "title": "7. Densidade",
        "level": 3,
        "content": "O menu pode ser implementado em três densidades, que se referem ao nível de espaçamento interno nos itens:\n\n- **Densidade alta:** os itens têm o espaçamento interno mais condensado. Este tipo de densidade é útil quando há a necessidade de otimizar o espaço vertical.\n\n- **Densidade média:** é a densidade padrão dos itens do menu. Neste modo há maior equilíbrio entre economia de espaço e separação de elementos.\n\n- **Densidade baixa:** oferece maior espaçamento interno possível. É recomendado o uso em dispositivos móveis, pois é necessário um espaço maior nos elementos para a interação com os dedos (*touch*).\n\n![Tipos de Densidade](imagens/menu-behaviour-density.png)\n*Tipos de densidade para o menu principal e para o menu contextual.*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- Não use menus ou ícones de menu minúsculos em telas com resolução grande. Os menus não devem ser ocultados quando houver muito espaço para exibi-los.\n\n- Os usuários esperam encontrar elementos da interface onde já os viram antes em outros *sites* ou aplicativos (por exemplo, barra esquerda, parte superior da tela). Faça com que essas expectativas trabalhem a seu favor, posicionando seus menus onde as pessoas esperam encontrá-los.\n\n- Faça os *links* do menu parecerem interativos. Os usuários podem nem perceber que é um menu se as opções não parecerem clicáveis ​​(ou tocáveis).\n\n- Teste sempre seu menu com o usuário final e valide se a arquitetura de informação utilizada faz sentido.\n\n- Use o estado ativo para indicar aos usuários \"onde\" a tela atualmente visível está localizada nas opções do menu. “Onde estou?” é uma das perguntas fundamentais que os usuários precisam responder para navegar com sucesso. Os usuários contam com dicas visuais de menus (e outros elementos de navegação, como *breadcrumbs*) para responder a essa pergunta crítica. Deixar de indicar a localização atual é provavelmente o erro mais comum que vemos nos menus de sites. Ironicamente, esses menus têm a maior necessidade de orientar os usuários, já que os visitantes muitas vezes não entram pela página inicial.\n\n- Use rótulos de *link* compreensíveis. Descubra o que os usuários estão procurando e use rótulos de agrupamentos familiares e relevantes. Use uma terminologia que descreva claramente o conteúdo e os recursos.\n\n- Se as pessoas desejam frequentemente comparar produtos relacionados ou concluir várias tarefas em uma única seção, torne essas páginas próximas visíveis com um menu de navegação contextual, em vez de forçá-las a \"pular\" para cima e para baixo na hierarquia do menu principal.\n\n- Dê a opção para o usuário decidir deixar o menu fixo na tela (principalmente em *sites* com conteúdo muito extenso) ou retraí-lo (para um melhor aproveitamento da leitura do conteúdo).\n\n- Considere utilizar o recurso de busca juntamente com o menu. Ofereça outras maneiras de o usuário buscar o conteúdo desejado.\n\n- Por regra geral o menu contextual funciona independentemente do menu principal e geralmente é utilizado na navegação interna de telas com grande quantidade de conteúdo. Desta forma, evite o uso de itens que apontam para outras telas ou para informações externas ao *site*. Reserve essa função ao o menu principal.\n  O menu contextual pode estar localizado em qualquer área da página, mas lembre-se de garantir a consistência do *layout*. Geralmente é aplicado na lateral direita da tela de modo fixo ou flutuante.\n\n![Menu Auxiliar](imagens/menu-behavior-open-position-3.png)\n*Exemplo de localização do menu contextual.*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": ""
      },
      {
        "title": "Painel",
        "level": 4,
        "content": "| Name             | Property   | Color Token |\n| ---------------- | ---------- | ----------- |\n| Painel flutuante | background | `--pure-0`  |\n| Painel fixo      | background | `--pure-0`  |"
      },
      {
        "title": "Cabeçalho do menu",
        "level": 4,
        "content": "| Name                    | Property   | Color Token            |\n| ----------------------- | ---------- | ---------------------- |\n| Background do cabeçalho | background | `--pure-0`             |\n| Cor do título           | color      | `--gray-80`            |\n| Cor do ícone Fechar     | color      | `--blue-warm-vivid-70` |"
      },
      {
        "title": "Item 1º nível",
        "level": 4,
        "content": "| Name                 | Property   | Color Token            |\n| -------------------- | ---------- | ---------------------- |\n| Background do item   | background | `--pure-0`             |\n| Cor do texto         | color      | `--blue-warm-vivid-70` |\n| Ícone representativo | color      | `--blue-warm-vivid-70` |\n| Ícone ação           | color      | `--blue-warm-vivid-70` |"
      },
      {
        "title": "Item 2º nível",
        "level": 4,
        "content": "| Name                           | Property   | Color Token            |\n| ------------------------------ | ---------- | ---------------------- |\n| Background do item             | background | `--gray-2`             |\n| Background do item em destaque | background | `--gray-2`             |\n| Cor do Texto                   | color      | `--blue-warm-vivid-70` |\n| Cor do Texto em destaque       | color      | `--blue-warm-vivid-80` |\n| Ícone representativo           | color      | `--blue-warm-vivid-70` |\n| Ícone ação                     | color      | `--blue-warm-vivid-70` |"
      },
      {
        "title": "Rodapé do menu",
        "level": 4,
        "content": "| Name                 | Property         | Color Token            |\n| -------------------- | ---------------- | ---------------------- |\n| Background do rodapé | background color | `--pure-0`             |\n| Cor do título        | color            | `--gray-80`            |\n| Cor do texto         | color            | `--gray-80`            |\n| Cor do ícone link    | color            | `--blue-warm-vivid-70` |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": ""
      },
      {
        "title": "Cabeçalho menu",
        "level": 4,
        "content": "| Name           | ícone                               | Size               | Class (Font Awesome) |\n| -------------- | ----------------------------------- | ------------------ | -------------------- |\n| Ícone Expandir | <i class=\"fas fa-chevron-down\"></i> | `--icon-size-base` | `fa-chevron-down`    |\n| Ícone Retrair  | <i class=\"fas fa-chevron-up\"></i>   | `--icon-size-base` | `fa-chevron-up`      |\n| Ícone Fechar   | <i class=\"fas fa-times\"></i>        | `--icon-size-base` | `fa-times`           |"
      },
      {
        "title": "Item do menu (1º e 2º níveis)",
        "level": 4,
        "content": "| Name              | ícone                               | Size               | Class (Font Awesome) |\n| ----------------- | ----------------------------------- | ------------------ | -------------------- |\n| Ícone Expandir    | <i class=\"fas fa-chevron-down\"></i> | `--icon-size-base` | `fa-chevron-down`    |\n| Ícone Retrair     | <i class=\"fas fa-chevron-up\"></i>   | `--icon-size-base` | `fa-chevron-up`      |\n| Acionar subnível  | <i class=\"fas fa-angle-right\"></i>  | `--icon-size-base` | `fa-angle-right`     |\n| Retornar subnível | <i class=\"fas fa-angle-left\"></i>   | `--icon-size-base` | `fa-angle-left`      |"
      },
      {
        "title": "Rodapé menu",
        "level": 4,
        "content": "| Name               | ícone                                           | Size             | Class (Font Awesome)          |\n| ------------------ | ----------------------------------------------- | ---------------- | ----------------------------- |\n| Ícone link externo | <i class=\"fas fa-external-link-square-alt\"></i> | `--icon-size-sm` | `fa-external-link-square-alt` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": ""
      },
      {
        "title": "Cabeçalho menu",
        "level": 4,
        "content": "| Name               | Size                     | Weight                  |\n| ------------------ | ------------------------ | ----------------------- |\n| Texto do cabeçalho | `--font-size-scale-base` | `--font-weight-regular` |"
      },
      {
        "title": "Item do menu",
        "level": 4,
        "content": "| Name                      | Size                     | Weight                    |\n| ------------------------- | ------------------------ | ------------------------- |\n| Texto do item             | `--font-size-scale-base` | `--font-weight-regular`   |\n| Texto do item em destaque | `--font-size-scale-base` | `--font-weight-semi-bold` |"
      },
      {
        "title": "Rodapé menu",
        "level": 4,
        "content": "| Name             | Size                     | Weight                    |\n| ---------------- | ------------------------ | ------------------------- |\n| Título do rodapé | `--font-size-scale-base` | `--font-weight-semi-bold` |\n| Texto do rodapé  | `--font-size-scale-base` | `--font-weight-medium`    |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name              | Property |   Value    |\n| ----------------- | -------- | :--------: |\n| Cabeçalho do menu | Height   |   `56px`   |\n| Cabeçalho do menu | Width    | `variável` |\n| Item do menu      | Height   |   `56px`   |\n| Item do menu      | Width    | `variável` |\n| Rodapé do menu    | Height   | `variável` |\n| Rodapé do menu    | Width    | `variável` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": ""
      },
      {
        "title": "Menu tamanho padrão",
        "level": 4,
        "content": "| Name              | Property       |         Value         |\n| ----------------- | -------------- | :-------------------: |\n| Cabeçalho do menu | padding-left   | `--spacing-scale-2x`  |\n| Cabeçalho do menu | padding-right  | `--spacing-scale-2x`  |\n| item do menu      | padding-left   | `--spacing-scale-2x`  |\n| item do menu      | padding-right  | `--spacing-scale-2x`  |\n| Rodapé            | padding-left   | `--spacing-scale-7x`  |\n| Rodapé            | padding-right  | `--spacing-scale-2x`  |\n| Rodapé            | padding-top    | `--spacing-scale-3xh` |\n| Rodapé            | padding-bottom | `--spacing-scale-4x`  |"
      },
      {
        "title": "Menu largura mínima (320px)",
        "level": 4,
        "content": "| Name              | Property       |         Value          |\n| ----------------- | -------------- | :--------------------: |\n| Cabeçalho do menu | padding-left   | `--spacing-scale-base` |\n| Cabeçalho do menu | padding-right  |  `--spacing-scale-2x`  |\n| item do menu      | padding-left   |  `--spacing-scale-5x`  |\n| item do menu      | padding-right  |  `--spacing-scale-2x`  |\n| Rodapé            | padding-left   |  `--spacing-scale-5x`  |\n| Rodapé            | padding-right  |  `--spacing-scale-2x`  |\n| Rodapé            | padding-top    | `--spacing-scale-3xh`  |\n| Rodapé            | padding-bottom |  `--spacing-scale-4x`  |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "|            Name             |           Shadow            |\n| :-------------------------: | :-------------------------: |\n|   Superfície (menu fixo)    | `--surface-shadow-sm-right` |\n| Superfície (menu flutuando) | `--surface-shadow-lg-right` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- O componente menu pode ser acionado pelo elemento gatilho utilizando a tecla `Enter` ou `Space`;\n\n- Para fechar o menu, utilize a tecla `Esc`;\n\n- O usuário deve conseguir navegar pelos itens do menu usando as teclas `Tab` e `Shift + Tab` para retroceder a navegação ou, como alternativa, também podem ser utilizadas as teclas direcionais `arrowUp` e `arrowDown`;\n\n- Após abertura do menu, o foco deve cair imediatamente sobre o botão fechar, se houver. Isso auxilia o usuário, caso ele queira desistir da navegação pelos itens do menu;\n\n- Os itens interativos ou agrupadores com itens filhos, podem ser acionados pelas teclas `Enter` ou `Space`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Utilize rótulos claros e objetivos para os textos nos itens do menu. Evite textos longos e jargões técnicos. O objetivo é trazer um entendimento fácil e de forma rápida para o usuário sobre os tópicos abordados;\n\n- Utilize o padrão de cores corretamente, conforme especificado na diretriz do componente. Isto garante o contraste adequado para leitura com acessibilidade dentro do padrão;\n\n- Certifique-se de consultar a diretriz de estados e usá-los corretamente nos itens do menu. Como por exemplo: `hover`, `ativo`, `foco`, entre outros. O feedback visual é muito importante para todos os usuários durante a interação com o menu."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Para a construção do menu, é recomendável utilizar a tag semântica `<nav>`, e as tags de lista `<ul>`, `<li>` para os itens internos."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/overflow-menu/accessibility)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/menu/menu.md",
      "accessibilityPath": "ds/componentes/menu/menu-access.md"
    }
  },
  {
    "name": "Message",
    "slug": "message",
    "description": "O *Message* (Mensagem) é um Componente de Interface que tem como finalidade proporcionar *feedback* ao usuário sobre o que ocorre no sistema.",
    "documentationUrl": "https://www.gov.br/ds/components/message",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de Message](imagens/message-sample.png)\n*Exemplo de Message*\n\nUtilize o *Message* quando houver a necessidade de transmitir qualquer informação ao usuário em decorrência de interações com o sistema, ou em decorrência de eventos previamente programados pelo sistema."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *Message* é composto pelos seguintes elementos:\n\n| ID  | Nome                  |                          Referência                           | Uso         |\n| --- | --------------------- | :-----------------------------------------------------------: | ----------- |\n| 1   | Superfície do Message |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 2   | Ícones                | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 3   | Título do Message     |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 4   | Mensagem              |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Obrigatório |\n| 5   | Botão Fechar          |    [Componente Button](/ds/components/button?tab=designer)    | Opcional    |\n\n![Anatomia do Message](imagens/message-anatomy.png)\n*Anatomia do Message*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Superfície do Message (Obrigatório)",
        "level": 4,
        "content": "A Superfície do *Message* é o elemento do *Componente Message* que agrupará todos os outros elementos que o compõe e que estão previamente listadas na anatomia. A Superfície do *Message* tem a função de definir semanticamente o tipo de mensagem está sendo transmitida, além de destacar a mensagem sobre todos os outros elementos da *interface*.\n\nLogo, a Superfície do *Message* pode ser apresentada em diferentes cores, com funções semânticas. Veja mais detalhes em [Fundamento Estados](/ds/fundamentos-visuais/estados).\n\n![Superfície do Message](imagens/message-container.png)\n*Superfície do Message*\n\n**Atenção:** a Superfície do *Message* pode variar de tamanho em decorrência do Tipo do *Message*, conteúdo interno, ou tamanho da tela. Consulte detalhes na seção *Comportamentos*."
      },
      {
        "title": "2. Ícones (Opcional)",
        "level": 4,
        "content": "O *Ícone* é um elemento opcional do *Componente Message* e tem a função de reforçar o *Estado Semântico* da mensagem. É recomendável utilizar estas categorias de *Ícones*, correspondente a cada *Estado* *Semântico* da mensagem e correspondente a ação desejada. Observe abaixo:\n\nA - Sucesso - (*Check-Circle*)\nB - Alerta - (*Exclamation-Triangle*)\nC - Erro - (*Times-Circle*)\nD - Informação - (*Info-Circle*)\nE - Ação Fechar - (*Times*)\n\n![Exemplo de Ícones](imagens/message-icons.png)\n*Exemplo de Ícones*\n\nConsulte maiores detalhes e referências na seção *Design Tokens*."
      },
      {
        "title": "Posição dos Ícones",
        "level": 5,
        "content": "Os ícones de função semântica devem ser posicionados à esquerda na Superfície do *Message*, enquanto o *Botão Fechar*, deve ser posicionado no topo e à direita.\n\nA - Ícones de função semântica\nB - Ícone de ação *Fechar*\n\n![Posição dos Ícones](imagens/message-icon-position.png)\n*Posição dos Ícones*"
      },
      {
        "title": "3. Título do Message (Opcional)",
        "level": 4,
        "content": "O Título do *Message* é um elemento opcional e serve dar destaque à mensagem textual. É utilizado logo no início do texto ou acima dele. Geralmente se utiliza uma palavra ou pequena frase de efeito, resumindo a ideia da descrição textual.\n\nO Título do *Message* pode ser posicionado:\n\nA - No início, na mesma linha da mensagem;\n\nB - No início, acima da mensagem.\n\n![Título do Message](imagens/message-behavior-title.png)\n*Título do Message*"
      },
      {
        "title": "Tom e Voz do Título",
        "level": 5,
        "content": "É recomendável utilizar uma palavra ou pequena frase que sintetize toda ideia descrita na mensagem."
      },
      {
        "title": "4. Mensagem (Obrigatório)",
        "level": 4,
        "content": "A mensagem é o elemento essencial e obrigatório do *Componente Message*. Através dela é transmitida ao usuário a informação de *feedback* do sistema.\n\n![Mensagem](imagens/message-message.png)\n*Mensagem*"
      },
      {
        "title": "Tom e Voz da Mensagem",
        "level": 5,
        "content": "Deve-se optar por um texto curto, claro e objetivo, compreendendo toda informação necessária ao usuário."
      },
      {
        "title": "5. Botão Fechar (Opcional)",
        "level": 4,
        "content": "Este elemento é o **Componente Botão - Ênfase Terciária de Alta Densidade**. É um elemento opcional e tem a função de ocultar o Componente *Message* da tela. É um recurso útil por oferecer ao usuário a opção de liberar mais espaço em tela após ler a mensagem.\n\n![Botão Fechar](imagens/message-button.png)\n*Botão Fechar*\n\nNo tipo **Mensagem Contextual**, não existe a opção de utilização do *Botão Fechar*. Utilize o **Botão Fechar** apenas no Tipo de *Message* Padrão.\n\n**Atenção:** Geralmente, quando a mensagem possui um conteúdo muito importante, não é recomendável utilizar o **Botão Fechar**, garantindo que o conteúdo esteja sempre visível ao usuário, porém, não é uma ação obrigatória."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Mensagem Tipo Padrão",
        "level": 3,
        "content": "A Mensagem Tipo Padrão é utilizada quando há a necessidade de oferecer ao usuário um *feedback* de contexto global, ou seja, que tenha relação com um processo ou interação referente à tela ou seção em que o usuário está interagindo.\n\n![Mensagem Tipo Padrão](imagens/message-type-default.png)\n*Mensagem Tipo Padrão*"
      },
      {
        "title": "2. Mensagem Tipo Contextual",
        "level": 3,
        "content": "A **Mensagem Tipo Contextual** é utilizada quando o *feedback* está relacionado a algum elemento ou componente dentro de uma tela ou seção. Refere-se diretamente à ação do usuário sobre algum **Componente**.\n\n![Mensagem Tipo Contextual](imagens/message-type-context.png)\n*Mensagem Tipo Contextual*\n\nPor exemplo, a mensagem de validação de campo de texto é uma *Mensagem Contextual*.\n\n![Exemplo de Mensagem Contextual](imagens/message-context-sample.png)\n*Exemplo de Mensagem Contextual*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": "A Superfície do *Message* se estenderá até o limite à direita da tela, oferecendo espaço ao texto da mensagem. Quando o espaço da tela for menor que a largura do texto da mensagem, a Superfície do *Message* também se estenderá até o limite, porém sua altura também será aumentada, acompanhando a quebra de linha do texto da mensagem. Observe abaixo.\n\n![Grid de 12 Colunas](imagens/message-behavior-responsive-grid-12-cols.png)\n*Grid de 12 Colunas*\n\n![Grid de 8 Colunas](imagens/message-behavior-responsive-grid-8-cols.png)\n*Grid de 8 Colunas*\n\n![Grid de 4 Colunas](imagens/message-behavior-responsive-grid-4-cols.png)\n*Grid de 4 Colunas*\n\n**Atenção:** É importante notar que a posição do *Botão Fechar* permanece a mesma, enquanto o *Ícone* de função semântica será posicionado centralizado na vertical, enquanto a *Superfície do Message* aumentar sua altura."
      },
      {
        "title": "2. Superfície do Message x Quebra de Linha",
        "level": 3,
        "content": "Quando o tamanho da mensagem de texto for maior que a largura da tela, o comportamento padrão é que ocorra quebra de linha na mensagem, aumentando a altura da **Superfície do Message**.\n\nA - A mensagem é menor que a largura da tela: a **Superfície do Message** mantém sua altura padrão e sua largura se estende até o final da tela;\n\nB - A mensagem é maior que a largura da tela: a **Superfície do Message** mantém sua largura até o limite da tela enquanto que sua altura acompanha o texto.\n\nB e C - O **Botão Fechar** permanece na mesma posição, enquanto o **Ícone** de função semântica se mantém centralizado na vertical da **Superfície do Message**.\n\n![Quebra de Linha](imagens/message-behavior-break-line.png)\n*Exemplo da superfície do message se adaptando ao conteúdo*\n\nNa *Mensagem Contextual* a Superfície do *Message* acompanha sempre o conteúdo interno em sua largura e altura, porém a *Superfície do Message* tem seu limite relacionado à largura do *Componente* ao qual se refere. Observe a imagem acima.\n\nD - A *Superfície do Message* tem sua largura relacionada ao tamanho do texto;\n\nE - A Superfície do *Message* acompanha o tamanho do texto até o limite de largura do *Componente* ao qual está relacionado.\n\nF - Quando o tamanho do texto da mensagem for maior que a largura do *Componente* relacionado, ocorre a quebra de linha e a altura da Superfície do *Message* acompanha a altura do texto."
      },
      {
        "title": "3. Posicionamento",
        "level": 3,
        "content": "Existem duas formas de posicionamento para as *mensagens do tipo padrão*. Deverão ser apresentados de acordo com a necessidade de uso. São elas: *Mensagem para uso global* e *Mensagem para uso direcionado*."
      },
      {
        "title": "Mensagem para uso global",
        "level": 4,
        "content": "A informação deste tipo de notificação, deve, de forma geral, ser uma resposta à funcionalidade de toda a página ou sistema e deverá ser apresentado entre o cabeçalho e o componente *breadcrumb*, se estendendo até o limite da sua largura. Neste tipo de posicionamento, a superfície do *Message* deverá se estender, sangrando a área da *Grid*, enquanto seu conteúdo interno deverá respeitar as margens da área útil. Como exemplificado abaixo:\n\n![Exemplo de posicionamento da notificação para uso global](imagens/message-behavior-position01.png)\n*Exemplo de posicionamento da notificação para uso global*"
      },
      {
        "title": "Mensagem para uso direcionado",
        "level": 4,
        "content": "A notificação para uso direcionado deve ser uma resposta do sistema relacionado-o a uma funcionalidade específica ou local, que não impacte em todo conteúdo da página. Sempre que possível, recomenda-se posicionar a mensagem próximo ao elemento ao qual a mensagem se refere.\n\nNo exemplo abaixo, a informação de sucesso está diretamente relacionada a uma ação realizada em um dos itens do componente *tab*.\n\n![Exemplo de posicionamento da notificação para uso direcionado](imagens/message-behavior-position02.png)\n*Exemplo de posicionamento da notificação para uso direcionado*"
      },
      {
        "title": "4. Estados",
        "level": 3,
        "content": "O *Message* pode ser apresentado nos seguintes estados:"
      },
      {
        "title": "Estado Informativo",
        "level": 4,
        "content": "É o estado padrão de utilização do *Message*. Deve ser usado quando o objetivo da mensagem for uma informação neutra.\n\n![Estado Informativo](imagens/message-behavior-states-info.png)\n*Estado Informativo*"
      },
      {
        "title": "Estado Sucesso",
        "level": 4,
        "content": "Deve ser usado quando o objetivo da mensagem for transmitir uma ideia de finalização de tarefa/passo ou conclusão bem sucedida.\n\n![Estado Sucesso](imagens/message-behavior-states-success.png)\n*Estado Sucesso*"
      },
      {
        "title": "Estado Alerta",
        "level": 4,
        "content": "Deve ser usado quando o objetivo da mensagem for transmitir uma ideia de advertência ao usuário. Geralmente, uma mensagem que alerte o usuário a evitar erros.\n\n![Estado Alerta](imagens/message-behavior-states-alert.png)\n*Estado Alerta*"
      },
      {
        "title": "Estado Erro",
        "level": 4,
        "content": "Deve ser usado quando o objetivo da mensagem for transmitir um alerta de erro por parte do sistema ou por parte do usuário.\n\n![Estado Erro](imagens/message-behavior-states-danger.png)\n*Estado Erro*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- É importante evitar textos de mensagens muito longos, que proporcionem muitas quebras de linha. O ideal é que quando ocorra a quebra de linha seja numa situação excepcional ou eventual como os casos de responsividade.\n\n- Deve-se evitar situações iguais à representada na imagem do exemplo 'F'. Onde a *Mensagem Contextual* cresce com mais de uma linha.\n\n![Quebra de Linha](imagens/message-behavior-break-line.png)\n*Quebra de Linha*\n\n- Deve-se evitar o uso de múltiplas *Mensagens do Tipo Padrão*. Quando for necessário dar ênfase a vários elementos em tela, utilize a *Mensagem do Tipo Contextual*. Observe abaixo:\n\n![Forma de uso das Mensagens](imagens/message-behavior-multiple-messages.png)\n*À direita exemplo do uso recomendável com as mensagens contextuais e à esquerda o exemplo do uso não recomendável com múltiplas mensagens*\n\n- Quando houver a necessidade de apresentar informações adicionais relacionadas a mensagem de erro do sistema, a descrição principal deverá ser apresentada por um estilo tipográfico (padrão) enquanto as informações complementares deverão ser apresentados em uma formatação diferente.\n\n![Mensagem de erro do sistema com informações complementares em itálico](imagens/message-danger-cod.png)\n*Na mensagem acima, foi utilizado o texto regular para o detalhamento do erro, e as informações complementares (como código e data) em itálico*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": ""
      },
      {
        "title": "Cores do Estado Informativo",
        "level": 4,
        "content": "| Name                               | Property   | Color Token            |\n| ---------------------------------- | ---------- | ---------------------- |\n| Superfície do Message              | background | `--blue-warm-vivid-10` |\n| Superfície do Message Tipo Context | background | `--blue-warm-vivid-60` |\n| Ícone                              | color      | `--blue-warm-vivid-60` |\n| Título do Message                  | color      | `--gray-80`            |\n| Mensagem Tipo Context              | color      | `--pure-0`             |\n| Botão Fechar                       | color      | `--blue-warm-vivid-60` |"
      },
      {
        "title": "Cores do Estado Sucesso",
        "level": 4,
        "content": "| Name                               | Property   |       Color Token       |\n| ---------------------------------- | ---------- | :---------------------: |\n| Superfície do Message              | background | `--green-cool-vivid-5`  |\n| Superfície do Message Tipo Context | background | `--green-cool-vivid-50` |\n| Ícone                              | color      | `--green-cool-vivid-50` |\n| Título do Message                  | color      |       `--gray-80`       |\n| Mensagem Tipo Context              | color      |       `--pure-0`        |\n| Mensagem                           | color      |       `--gray-80`       |\n| Botão Fechar                       | color      | `--green-cool-vivid-50` |"
      },
      {
        "title": "Cores do Estado Alerta",
        "level": 4,
        "content": "| Name                               | Property   |     Color Token     |\n| ---------------------------------- | ---------- | :-----------------: |\n| Superfície do Message              | background | `--yellow-vivid-5`  |\n| Superfície do Message Tipo Context | background | `--yellow-vivid-20` |\n| Título do Message                  | color      |     `--gray-80`     |\n| Mensagem                           | color      |     `--gray-80`     |\n| Mensagem Tipo Context              | color      |     `--gray-80`     |\n| Botão Fechar                       | color      |     `--gray-80`     |"
      },
      {
        "title": "Cores do Estado Erro",
        "level": 4,
        "content": "| Name                               | Property   |   Color Token    |\n| ---------------------------------- | ---------- | :--------------: |\n| Superfície do Message              | background | `--red-vivid-10` |\n| Superfície do Message Tipo Context | background | `--red-vivid-50` |\n| Ícone                              | color      | `--red-vivid-50` |\n| Título do Message                  | color      |   `--gray-80`    |\n| Mensagem                           | color      |   `--gray-80`    |\n| Mensagem Tipo Context              | color      |    `--pure-0`    |\n| Botão Fechar                       | color      | `--red-vivid-50` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name                  | Size                      | Weight                    |\n| --------------------- | ------------------------- | ------------------------- |\n| Título do Message     | `--font-size-scale-up-01` | `--font-weight-semi-bold` |\n| Mensagem              | `--font-size-scale-up-01` | `--font-weight-regular`   |\n| Mensagem Tipo Context | `--font-size-scale-base`  | `--font-weight-medium`    |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name                             | Ícone                                | Token Size         | Class (Font Awesome)   |\n| -------------------------------- | ------------------------------------ | ------------------ | ---------------------- |\n| Ícone Botão Fechar               | <i class=\"times\"></i>                | `--icon-size-base` | `times`                |\n| Ícone Informativo - Tipo Padrão  | <i class=\"info-circle\"></i>          | `--icon-size-lg`   | `info-circle`          |\n| Ícone Informativo - Tipo Context | <i class=\"info-circle\"></i>          | `--icon-size-base` | `info-circle`          |\n| Ícone Sucesso - Tipo Padrão      | <i class=\"check-circle\"></i>         | `--icon-size-lg`   | `check-circle`         |\n| Ícone Sucesso - Tipo Context     | <i class=\"check-circle\"></i>         | `--icon-size-base` | `check-circle`         |\n| Ícone Alerta - Tipo Padrão       | <i class=\"exclamation-triangle\"></i> | `--icon-size-lg`   | `exclamation-triangle` |\n| Ícone Alerta - Tipo Context      | <i class=\"exclamation-triangle\"></i> | `--icon-size-base` | `exclamation-triangle` |\n| Ícone Erro - Tipo Padrão         | <i class=\"times-circle\"></i>         | `--icon-size-lg`   | `times-circle`         |\n| Ícone Erro - Tipo Context        | <i class=\"times-circle\"></i>         | `--icon-size-base` | `times-circle`         |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name                               | Property |   Value    |\n| ---------------------------------- | -------- | :--------: |\n| Superfície do Message Tipo Padrão  | Width    | `variável` |\n| Superfície do Message Tipo Padrão  | Height   | `variável` |\n| Superfície do Message Tipo Context | Width    | `variável` |\n| Superfície do Message Tipo Context | Height   | `variável` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                              | Property       |            Value            |\n| --------------------------------- | -------------- | :-------------------------: |\n| Superfície do Message Tipo Padrão | padding-top    |    `--spacing-scale-3x`     |\n| Superfície do Message Tipo Padrão | padding-bottom |    `--spacing-scale-3x`     |\n| Superfície do Message Tipo Padrão | padding-left   |    `--spacing-scale-2x`     |\n| Superfície do Message Tipo Padrão | padding-right  |   `--spacing-scale-base`    |\n| Botão Fechar                      | margin-top     |   `--spacing-scale-base`    |\n| Botão Fechar                      | margin-right   |   `--spacing-scale-base`    |\n| Ícone Tipo Padrão                 | margin-left    |    `--spacing-scale-2x`     |\n| Ícone Tipo Padrão                 | margin-right   |    `--spacing-scale-2x`     |\n| Ícone Tipo Padrão                 | margin-top     | `--spacing-vertical-center` |\n| Ícone Tipo Padrão                 | margin-bottom  | `--spacing-vertical-center` |\n| Ícone Tipo Context                | margin-top     | `--spacing-vertical-center` |\n| Ícone Tipo Context                | margin-bottom  | `--spacing-vertical-center` |\n| Ícone Tipo Context                | margin-left    |   `--spacing-scale-half`    |\n| Ícone Tipo Context                | margin-right   |   `--spacing-scale-half`    |\n| Título e Message Tipo Padrão      | margin-top     |    `--spacing-scale-3x`     |\n| Título e Message Tipo Padrão      | margin-bottom  |    `--spacing-scale-3x`     |\n| Título e Message Tipo Padrão      | margin-left    |    `--spacing-scale-2x`     |\n| Título e Message Tipo Padrão      | margin-right   |    `--spacing-scale-2x`     |\n| Message Tipo Context              | margin-top     |   `--spacing-scale-half`    |\n| Message Tipo Context              | margin-bottom  |   `--spacing-scale-half`    |\n| Message Tipo Context              | margin-left    |   `--spacing-scale-half`    |\n| Message Tipo Context              | margin-right   |   `--spacing-scale-half`    |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Ao exibir uma mensagem de *feedback* em resposta à ação do usuário, permita que o leitor de tela leia imediatamente a mensagem;\n\n- No momento da exibição da mensagem, o foco do navegador deve estar sobre o botão fechar, quando houver. Isto permite que o usuário possa sair da mensagem e voltar ao fluxo de navegação original;\n\n- É importante que após o fechamento da mensagem, o foco do navegador volte ao local original no fluxo de navegação."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Use uma linguagem clara e compreensível para seu público. Evite jargões ou textos complexos;\n\n- Use as cores semânticas recomendadas para cada tipo de mensagem: informação, sucesso, alerta e erro. Isto ajuda a garantir os padrões de acessibilidade;\n\n- Lembre-se que o uso de cores semânticas não atende a todos os públicos, sempre forneça uma alternativa para usuários de leitores de tela;\n\n- Ao exibir uma mensagem, pode ser útil disparar um som de alerta característico. Isto ajuda os usuários de tecnologias assistivas a identificar que houve um *feedback* do sistema antes da mensagem ser lida;\n\n- Evite projetar mensagens que desapareçam automaticamente. Uma mensagem que some rapidamente pode passar despercebida pelo usuário;\n\n- Outro ponto de atenção é a frequência de interrupção causada pelas mensagens. Interrupções frequentes podem inibir a usabilidade, principalmente para pessoas com deficiência cognitiva e visual."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/message/message.md",
      "accessibilityPath": "ds/componentes/message/message-access.md"
    }
  },
  {
    "name": "Modal",
    "slug": "modal",
    "description": "Modal é uma janela que exibe um conteúdo adicional em uma camada acima da página atual, com uma sobreposição de superfície (*overlay*) cobrindo a página e tornando-a temporariamente inacessível.",
    "documentationUrl": "https://www.gov.br/ds/components/modal",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de Modal](imagens/diretriz.png)\n*Exemplo do componente modal*\n\nUse modais quando houver necessidade de obter a atenção imediata do usuário para uma interrupção no fluxo de navegação de foma proposital.\n\nPor exemplo:\n\n- Para informar sobre erros que impedem o fluxo normal de uma interface;\n- Para informações críticas que requerem uma escolha, decisão ou reconhecimento específico do usuário;\n- Para fornecer entrada de dados sem a perda contextual de uma tela."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "Modais devem manter uma comunicação direta nas informações e dedicadas à conclusão de uma determinada tarefa. Devem aparecer em resposta a uma tarefa ou ação do usuário, com informações relevantes e contextuais."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome                     |                         Referência                          | Uso         |\n| --- | ------------------------ | :---------------------------------------------------------: | ----------- |\n| 1   | Superfície               | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n| 2   | Título                   | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 3   | Conteúdo                 |                             ---                             | Obrigatório |\n| 4   | Botões                   |   [Componente Button](/ds/components/button?tab=designer)   | Obrigatório |\n| 5   | Botão terciário cancelar |   [Componente Button](/ds/components/button?tab=designer)   | Opcional    |\n| 6   | Superfície *overlay*     | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Opcional    |\n\n![Anatomia da Modal](imagens/anatomy.png)\n*Elementos que compõe uma modal*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Superfície (Obrigatório)",
        "level": 3,
        "content": "A superfície funciona como *background* para a modal onde deve ser observado o contraste entre o fundo e o conteúdo, pois a modal, mais que qualquer outro elemento, deve se destacar aos olhos do usuário. É recomendável utilização na cor branca."
      },
      {
        "title": "2. Título (Opcional)",
        "level": 3,
        "content": "Precisa ser uma declaração ou pergunta específica, breve e clara.\nDeve-se evitar termos que expressem ambiguidade ou seja alarmante ao usuário, como: \"*Desculpe pela interrupção*\", \"*Aviso!*\", \"*Você tem certeza?*\".\n\nSe necessário, os títulos podem ocupar duas linhas. Acima de duas linhas, o texto deve ser contraído no espaço disponível e terminar com reticências (...). Ao passar o *mouse* sobre o texto contraído, o componente *tooltip* revelará o texto completo.\n\n![Título da Modal em Duas linhas](imagens/titulos.png)\n*Use tooltip para mostrar títulos que ocupem uma área maior que duas linhas*"
      },
      {
        "title": "3. Conteúdo (Obrigatório)",
        "level": 3,
        "content": "A modal é flexível para se adaptar ao tamanho do conteúdo apresentado.\n\nLembre-se que uma modal deve ser concisa e direta. Seja o mais objetivo possível em relação ao conteúdo apresentado.\n\nEvite, sempre que possível, que a modal ocupe quase todo o tamanho da tela. Em casos de conteúdos mais extensos opte pela barra de rolagem vertical. Essa recomendação não é possível para resoluções de telas menores.\n\n![Conteúdo da Modal](imagens/tamanho.png)\n*Planeje uma \"área de respiro\" razoável entre o tamanho da modal e o tamanho da tela. É importante que o usuário perceba que a modal está sobreposta à tela anterior*"
      },
      {
        "title": "4. Botões (Obrigatório)",
        "level": 3,
        "content": "Representam as três ações relativas à modal que o usuário poderá interagir. A ação determinará o tipo de botão utilizado:\n\n**Conhecimento:** Quando a ciência do usuário é necessária para prosseguir, isto é, uma única ação é apresentada.\nUso do botão primário.\n\n**Confirmação:** Quando confirma uma ação proposta. Essas ações podem envolver a opção de não concordância como \"Excluir\" ou \"Cancelar\".\nUso do botão primário.\n\n**Negação:** Descartam uma ação proposta pelo ação de confirmação e retornam para o usuário a tela ou etapa de origem.\nUso do botão secundário.\n\nOs botões devem ser alinhados por padrão à direita, porém, opcionalmente, poderá estar centralizado no caso de ser a única ação proposta.\n\n![Posicionamento dos Botões na Modal](imagens/buttons.png)\n*Exemplos de posicionamento dos botões em uma modal*"
      },
      {
        "title": "Quantidade de botões",
        "level": 4,
        "content": "É recomendado que em uma modal contenha no máximo dois botões:\n\nSe *uma* única ação for fornecida, ela deverá ser um botão de *conhecimento* *ou* de *negação*.\n\nSe *duas* ações são fornecidas, uma deve ser de *confirmação* *e* a outra de *negação*.\n\nSe a ação de *confirmação* for fornecida, *deverá* existir a ação de *negação*.\n\n**Atenção:** não é recomendável fornecer um terceiro botão como \"*Saiba mais*\", pois ele afasta o usuário do foco principal, deixando a tarefa proposta pela modal inacabada.\nAo invés disso, um conteúdo expansível pode exibir as informações necessárias. Caso sejam necessárias informações mais extensas forneça-as antes da entrada da modal."
      },
      {
        "title": "5. Botão Cancelar (Opcional)",
        "level": 3,
        "content": "O botão terciário Cancelar é opcional. Se precisar utilizá-lo, deve estar posicionado obrigatoriamente no canto superior direito da janela da modal. Este botão cumpre exatamente a mesma função de um botão secundário Cancelar ou Fechar.\n\n**Atenção:** uma terceira possibilidade para fechamento da janela modal pode ser clicando em qualquer área da tela fora da janela da modal."
      },
      {
        "title": "6. Superfície overlay (Opcional)",
        "level": 3,
        "content": "Geralmente uma modal deve vir acompanhada de uma superfície *overlay*. Isso é necessário pois o *overlay* funciona como um bloqueio do fluxo e passa o foco para a ação proposta pela modal. Desta forma, só é possível retornar para o fluxo principal cumprindo as opções propostas pela modal. Porém, há casos em que a modal pode ser utilizada sem o recurso do *overlay*.\n\nVeja o documento de superfície para mais informações a respeito do *overlay*."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "Há três Tipos de modais:\n\n- Modal de Alerta;\n- Modal de Opção;\n- Modal de Entrada.\n\nA escolha vai depender da tarefa que o usuário deve realizar."
      },
      {
        "title": "1. Modal de Alerta",
        "level": 3,
        "content": "Interrompe o usuário com informações, detalhes ou ações urgentes.\n\n![Modal de Alerta](imagens/modal-alerta.png)\n*Exemplos de modal de alerta*\n\nNão se deve utilizar rótulos de ação que não indique claramente a ação realizada. Por exemplo: \"Cancelar\" e \"Excluir\" indicam melhor a ação do que \"Não\" e \"Sim\".\nNa modal do tipo alerta o título é opcional.\n\nManeiras de fechar (cancelar):\n\n- Clicando em um dos botões propostos."
      },
      {
        "title": "2. Modal de Opção",
        "level": 3,
        "content": "Oferece opções de escolha para o usuário, podendo ser apresentado por uma lista ou por algum componente de seleção (dependendo da finalidade da tarefa).\nO uso de Título é altamente recomendável."
      },
      {
        "title": "2.1. Por Lista",
        "level": 4,
        "content": "Exibem uma lista de itens que entram em vigor imediatamente quando selecionados.\n\n![Modal Por Opção de Lista](imagens/modal-opcao.png)\n*Exemplos de modal de opção por lista*\n\nPela característica da modal, esta opção deve ser utilizada com moderação. É preferível o uso de *dropdown* como uma opção menos disruptiva.\nEste tipo de modal não possui botões.\n\nManeiras de fechar (cancelar):\n\n- Clicando no botão terciário no topo (à direita) da janela da modal;\n- Clicando em qualquer área da tela fora da janela da modal;\n- Automaticamente após o usuário concluir a tarefa."
      },
      {
        "title": "2.2. Por Seleção",
        "level": 4,
        "content": "Exige que o usuário confirme uma das opção apresentadas antes que seja submetida, permitindo a possibilidade de alterar a escolha. Uma vez confirmada, a ação será executada.\n\n![Modal De Opção Por Seleção](imagens/modal-selecao.png)\n*Exemplos de modal de opção por seleção*\n\nAs ações de confirmação e negação são obrigatórias.\n\nManeiras de fechar a modal (cancelar):\n\n- Clicando no botão secundário;\n- Clicando no botão terciário no topo (à direita) da janela da modal;\n- Clicando em qualquer área da tela fora da janela da modal."
      },
      {
        "title": "3. Modal de Entrada",
        "level": 3,
        "content": "Contém ações que requerem uma série de tarefas para serem concluídas tais como campos de entrada, de escolha e outros componentes relacionados ao formulário.\n\n![Modal por Opção de Entrada](imagens/modal-entrada.png)\n*Exemplos de modal de entrada*\n\nManeiras de fechar (cancelar):\n\n- Clicando no botão secundário;\n- Clicando no botão terciário no topo (à direita) da janela da modal;\n- Clicando em qualquer área da tela fora da janela da modal.\n\n**Atenção:** Uma boa recomendação é que a ação para confirmação deva estar desativada até que todos os campos obrigatórios estejam preenchidos."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Interrupção",
        "level": 3,
        "content": "As modais utilizam superfície (*overlay*) criando uma área bloqueada e não interativa exigindo que os usuários interrompam sua tarefa atual.\nUtilize a modal com moderação, pois nem todas as opções ou cenários justificam essa interrupção."
      },
      {
        "title": "2. Posição",
        "level": 3,
        "content": "A modal deve manter o foco total do usuário até que uma ação seja tomada. Não deve ser ocultada por outros elementos. Alguns componentes de importância maior como um *tooltip* ou o *datetimepicker* podem ocultar uma parte do modal temporariamente.\n\nDeve ser centralizado na tela do dispositivo ou pode ser exibido próximo ao elemento que \"solicitou/disparou\" a modal."
      },
      {
        "title": "3. Scroll bar (Barra de rolagem)",
        "level": 3,
        "content": "Evite o máximo possível *scroll bar* (barra de rolagem) na modal. Quando necessária, o título deve ficar fixo no topo e os botões na parte inferior. Isso garante que o conteúdo permaneça sempre visível com o título e os botões durante a rolagem.\n\nÉ recomendável a utilização do efeito de sombra na divisão entre o título e os botões sempre que existir conteúdo oculto.\n\n![Comportamento da Barra de Rolagem na Modal](imagens/modal-scroll.png)\n*Os três momentos no processo de rolagem do conteúdo em uma modal*\n\nBotões de Conhecimento e/ou de Confirmação podem estar desativados até que o usuário consiga rolar até o final da rolagem.\n\n**Atenção:** Jamais utilize rolagem horizontal em modais."
      },
      {
        "title": "4. Temporizador",
        "level": 3,
        "content": "Comportamento que pode ser aplicado em uma modal, geralmente no tipo alerta, fazendo com que o fechamento seja feito de forma automatizada (após alguns segundos), sem a necessidade de interação do usuário.\n\nEsse tipo de modal só pode ser utilizada em situações onde o conteúdo perde sentido após um determinado período, tal como o componente *loading*.\n\nO usuário deve ser capaz de cancelar modal a qualquer momento, por isso o botão de ação de negação é obrigatório.\n\n![Temporizador na Modal](imagens/loading.png)\n*Exemplo de uso da modal com fechamento automático*\n\n**Atenção:** utilize este comportamento somente nos casos estritamente necessários."
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- Use uma modal quando precisar alterar o fluxo de conteúdo ou interação e ainda manter o contexto da página ou tarefa existente.\n\n- Modais podem ser bastante intrusivas, então devem ser usadas com moderação. Para evitar a “cegueira do banner” e que as pessoas a dispensem imediatamente sem lê-las, mostre apenas nas interações do usuário, como um botão clicado, e não em eventos conduzidos pelo sistema, como imediatamente no carregamento da página.\n\n- Todas as modais usam um único botão de ação principal. Se uma segunda ação for necessária, use um botão de ação secundária.\n\n- Use uma linguagem precisa e combine o título e o texto do botão principal. Por exemplo, o título é “Excluir foto” e o botão principal é “Excluir”. Evite perguntas como “Tem certeza?”.\n\n- Nunca empilhe várias modais juntas na tela ao mesmo tempo.\n\n- Modais devem ser usadas ​​para diálogos curtos e diretos com o usuário. Se uma modal exigir que o usuário faça pesquisas complexas ou consulte fontes adicionais de informações (potencialmente bloqueadas pela modal), então não é o componente correto para essa interação. Considere usar um *popover* ou *tooltip* para esta finalidade."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Alinhamento",
        "level": 3,
        "content": "| Name                     | Property |   Spacing Vertical Token    |\n| ------------------------ | :------: | :-------------------------: |\n| Button                   |  center  | `--spacing-vertical-center` |\n| Título                   |  center  | `--spacing-vertical-center` |\n| Botão Terciário Cancelar |  center  | `--spacing-vertical-center` |\n\n| Name                     | Property |   Spacing Horizontal Token    |\n| ------------------------ | :------: | :---------------------------: |\n| Button                   |  center  | `--spacing-horizontal-center` |\n| Título                   |  center  | `--spacing-horizontal-center` |\n| Botão Terciário Cancelar |  center  | `--spacing-horizontal-center` |"
      },
      {
        "title": "Escala",
        "level": 3,
        "content": "| Name                     | Type    |          Top           |         Right          |         Bottom         |         Left         |\n| ------------------------ | ------- | :--------------------: | :--------------------: | :--------------------: | :------------------: |\n| Button                   | Externo | `--spacing-scale-base` |  `--spacing-scale-2x`  | `--spacing-scale-base` |         `-`          |\n| Título                   | Externo | `--spacing-scale-base` |          `-`           | `--spacing-scale-base` | `--spacing-scale-2x` |\n| Botão Terciário Cancelar | Externo | `--spacing-scale-base` | `--spacing-scale-base` | `--spacing-scale-base` |         `-`          |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name  | Property   | Color Token |\n| ----- | ---------- | :---------: |\n| Modal | background | `--pure-0`  |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "|    Name    | Token Shadow  |\n| :--------: | :-----------: |\n| Superfície | `--shadow-xl` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Ao acionar uma janela *modal* ou de diálogo, informe os usuários de leitores de tela qual o propósito da mesma;\n\n- Os usuários devem ser capazes de navegar facilmente pela janela *modal*, por meio da tecla `Tab` ou `Shift + Tab` para retroceder na navegação;\n\n- Após aberta, o fluxo de navegação deve percorrer apenas os elementos da janela *modal*, não passando por outros elementos da tela até que a *modal* seja fechada;\n\n- O foco inicial na *modal* depende do tipo: se for uma janela apenas com conteúdo informativo o foco deve ir inicialmente no `botão fechar`. Caso seja uma janela em que haja uma ação do usuário, o foco deve estar no `botão de ação primária`. Caso seja uma janela com uma ação destrutiva, o `botão de ação secundária` assume o foco inicial (cancelar, por exemplo);\n\n- A janela *modal* pode ser fechada após o usuário finalizar seu propósito, utilizando as teclas `Enter` ou `Space` nos controles interativos (como por exemplo: cancelar ou salvar), ou através da tecla `Esc`;\n\n- É importante oferecer ao usuário a opção do botão `Fechar` e o fluxo de navegação deve passar por ele;\n\n- Ao fechar a janela *modal*, o foco deve retornar ao último elemento focado na tela. Esta prática auxilia o usuário seguir o fluxo de navegação que vinha percorrendo, evitando se perder."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Identifique claramente a janela *modal* por meio de um título ou descrição;\n\n- O conteúdo dentro da janela *modal* também deve ser acessível, incluindo rótulos claros, descrições de ajuda para os elementos interativos além de descrições informativas para imagens;\n\n- As janelas *modais* devem ser usadas ​​com moderação, fornecendo apenas informações críticas. Outras informações menos críticas devem ser apresentadas na tela. Esta prática evita poluir o fluxo de navegação do usuário, com vários impedimentos para abertura de janelas de diálogo;\n\n- Utilize o recurso de *overlay* por trás da janela *modal*, quando o objetivo for restringir o acesso do usuário apenas ao conteúdo da janela."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- A janela *modal* pode ser rotulada pelo atributo `aria-label`, usando a mesma *string* do título;\n\n- Ao utilizar o recurso de `arial-modal` como `true`, pode impedir que os usuários de tecnologias assistivas sejam impedidos de acessar o conteúdo de fora da *modal*, quando esta estiver aberta. Portanto, faça isso apenas quando o objetivo for realmente este e a experiência seja a mesma para todos os tipos de usuários."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Material Design](https://m3.material.io/components/date-pickers/accessibility)\n- [Carbon Design System](https://carbondesignsystem.com/components/date-picker/accessibility)\n- [Acessibilidade Digital - UFRGS](https://www.ufrgs.br/acessibilidadedigital/modais-com-acessibilidade/)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/modal/modal.md",
      "accessibilityPath": "ds/componentes/modal/modal-access.md"
    }
  },
  {
    "name": "Notification",
    "slug": "notification",
    "description": "*Notification* (notificação) são mensagens enviadas por aplicativos ou *sites* que fornecem informações curtas, oportunas e relevantes ao usuário.",
    "documentationUrl": "https://www.gov.br/ds/components/notification",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Componente Notification](imagens/notification.png)\n*Exemplo componente notification*\n\nUtilize *notification* para agrupar e informar o usuário sobre eventos e informações relevantes no seu sistema, site ou em aplicativos mobile."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "*Notification* devem ser organizado e apresentado de forma clara e consistente dentro de uma *interface*. O agrupamento deve ser classificado de forma cronológica para que o usuário tenha uma melhor organização temporal do conteúdo de maneira a facilitar sua identificação."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O componente *notification* é composto pelos seguintes elementos:\n\n| ID  | Nome               |                         Referência                          | Uso         |\n| --- | ------------------ | :---------------------------------------------------------: | ----------- |\n| 1   | Área do Usuário    |                             ---                             | Opcional    |\n| 2   | Botão Fechar       |   [Componente Button](/ds/components/button?tab=designer)   | Opcional    |\n| 3   | Componente *Tab*   |      [Componente Tab](/ds/components/tab?tab=designer)      | Opcional    |\n| 4   | Componente Item    |     [Componente Item](/ds/components/item?tab=designer)     | Obrigatório |\n| 5   | Componente Divider |  [Componente Divider](/ds/components/divider?tab=designer)  | Obrigatório |\n| 6   | Superfície         | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n\n![Anatomia do notification](imagens/anatomia.png)\n*Detalhes dos principais elementos que formam o notification*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Área do Usuário (Opcional)",
        "level": 3,
        "content": "Esta área é formada por informações pessoais, tais como do nome e o e-mail do usuário. A apresentação dessas informações são importantes principalmente quando forem acessadas por meio do componente avatar.\n\n![Área do Usuário](imagens/guide-user.png)\n*Área destinada aos dados do usuário*\n\nDe acordo com a necessidade do portal ou sistema implementado, outras informações também podem ser acrescentadas. Essas devem respeitar uma hierarquia informacional, tipográfica e de margens já proposta na definição do *layout*.\n\nÉ na área do usuário que deve se encontrar o Botão Fechar."
      },
      {
        "title": "2. Botão Fechar (Opcional)",
        "level": 3,
        "content": "É o componente *Button* utilizado na densidade alta. Com exceção da *grid* de 4 colunas, seu uso é opcional. Veja Responsividade mais adiante.\n\nA função do componente *button* é fechar/esconder o *notification* após ser acionado.\n\n![Botão Fechar](imagens/guide-close.png)\n*Uso do button fechar*\n\n*Observação*: o *notification* também pode ser fechado/escondido ao clicar fora da superfície do componente ou acionando novamente o mesmo elemento que o solicitou."
      },
      {
        "title": "3. Componente Tab (Opcional)",
        "level": 3,
        "content": "É o componente usado para navegação dentro do *notification*.\n\n![Exemplo de navegação tab](imagens/menu-navigation.png)\n*Exemplo da navegação por meio do componente tabs*\n\nO *item* da *tab* pode ser utilizado em qualquer formatação possível, porém, sempre deverá ser utilizado o comportamento de densidade alta.\n\n![Exemplo configuração dos itens da tab](imagens/guide-tabs-1.png)\n*Item formado por ícone e label no padrão horizontal*\n\n![Exemplo configuração dos itens da tab](imagens/guide-tabs-2.png)\n*Item formado por ícone e label no padrão vertical*\n\n![Exemplo configuração dos itens da tab](imagens/guide-tabs-3.png)\n*Item formado apenas por label sem uso de ícone*\n\n![Exemplo configuração dos itens da tab](imagens/guide-tabs-4.png)\n*Item formado apenas por ícones sem uso de label*\n\nPara mais informações veja o Componente *Tab*."
      },
      {
        "title": "4. Componente Item do notification (Obrigatório)",
        "level": 3,
        "content": "O componente *Item* é a base onde será criada a formatação do conteúdo relacionada às notificações. Possui todas as características e comportamentos desse componente.\nAs informações apresentadas podem variar de acordo com a necessidade de cada projeto. Para exemplificar, apresentamos uma diagramação onde o componente *item* apresenta as seguintes informações:\n\n- **Componente Tag de Status**: Pode-se utilizar o componente *tag* para marcar visualmente qual *item* da notificação é novo ou que ainda não foi lido.\n- **Título da Notificação**: Principal identificação para a chamada do *item* do *notification*.\n- **Informação Cronológica**: Serve para localizar as informações da notificação cronologicamente.\n- **Conteúdo**: Esse bloco serve para informar o conteúdo total ou parcial de uma determinada informação.\n\n![Exemplo Anatomia](imagens/guide-itens.png)\n*Um exemplo de como construir o Item do notification*\n\nPara mais informações veja o Componente Item."
      },
      {
        "title": "5. Componente Divider (Obrigatório)",
        "level": 3,
        "content": "Componente *Divider* é utilizado para organizar e destacar visualmente todos os elementos listados anteriormente.\n\n![Visualizando os componentes divider](imagens/guide-divider.png)\n*Notification com somente os dividers visíveis*\n\nPara mais informações veja o Componente *Divider*."
      },
      {
        "title": "6. Superfície (Obrigatório)",
        "level": 3,
        "content": "A superfície do *notification* é um elemento *Dropdown* (Elemento Flutuante) onde estará agrupado todos os itens listados na anatomia.\nPor ser um elemento *Dropdown*, é importante adicionar uma sombra para representar visualmente a diferença de camada entre o componente *notification* e o restante do conteúdo. Esta sombra, por sua vez, utiliza o padrão de *Elevação* na Camada 2.\n\n![Visualizando a superfície do notification](imagens/guide-surface.png)\n*Superfície do notification*\n\nConsulte detalhes em *Fundamentos > Elevação*."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Acionamento do Notification",
        "level": 3,
        "content": "Tendo em vista que o *Notification* é um elemento *Dropdown* (Elemento Flutuante), este deverá ser exibido em tela através da interação do usuário com um acionador. Este acionador poderá ser qualquer elemento interativo que indique ao usuário a existência de notificação.\n\n![Exemplo de Acionador do Notification](imagens/behavior-trigger.png)\n*Exemplo de Acionador do Notification - Avatar com Badge indicando a existência de notificação*\n\nConsulte mais detalhes em [Padrões Dropdown](/ds/padroes/design/dropdown)."
      },
      {
        "title": "2. Responsividade",
        "level": 3,
        "content": "O *notification* é constituído por elementos e *containers* que podem se adaptar a diferentes dimensões e larguras.\n\n![Exemplo de diferentes dimensões](imagens/responsividade.png)\n*Exemplo de diferentes dimensões*\n\nPor ser um elemento flutuante, não sofre alteração na mudança de resoluções, porém, existem boas práticas e ele pode sofrer mudanças nos *breakpoints*.\n\nSeguem as recomendações de uso para cada categoria de *Grid*."
      },
      {
        "title": "Grid de 12 e 8 Colunas",
        "level": 4,
        "content": "É importante que o *notification* ocupe, no máximo, a largura de 50% da área disponível para conteúdo, enquanto a altura nunca deverá ultrapassar a área visível disponível.\n\n*Importante*: Utilize o comportamento *Rolagem Interna* (veja adiante) para contornar conteúdos extensos de forma vertical.\n\n![Limites recomendados na altura e largura](imagens/responsividade-limite.png)\n*Exemplo de Limites recomendados no notification*"
      },
      {
        "title": "Grid de 4 Colunas",
        "level": 4,
        "content": "O componente ocupará toda disponível da tela. A altura terá o tamanho total do conteúdo disponível no *notification*.\n\n![Notification na grid de 4 colunas](imagens/responsividade-4colunas.png)\n*Comportamento do notification em Grid para 4 colunas*\n\nComo o *notification* ficará sobre todo o conteúdo, é importante utilizar o *Botão fechar* para permitir que o conteúdo seja fechado/escondido.\n\n![Visualizando a superfície do notification](imagens/responsividade-button.png)\n*Superfície do notification*\n\n**Importante**: Evite o uso do comportamento *Rolagem Interna* nas *grids* de 4 colunas! Utilize apenas a barra de rolagem nativa do dispositivo."
      },
      {
        "title": "3. Rolagem Interna",
        "level": 3,
        "content": "A estrutura e a organização dos Itens do *notification* seguem o padrão de uma \"*timeline* infinita\", onde as notificações mais recentes são empilhadas sobre as mais antigas ordenando-os cronologicamente.\n\nA altura máxima do componente deve-se manter inalterada. Para visualizar as notificações mais antigas, deve-se utilizar uma barra de rolagem interna.\n\n*Importante*:A rolagem deve afetar somente os itens do notification, mantendo estáticos a área do usuário e o componente tab.\n\n![Notification com barra de rolagem interna](imagens/tab-scrolling.png)\n*Na rolagem interna, somente os itens são controlados*"
      },
      {
        "title": "4. Estados",
        "level": 3,
        "content": "Os estados dos itens do *notification* seguem as mesmas regras para o componente *Item*.\n\n![Estados do componente item](imagens/notification-states.png)\n*Exemplo de alguns estados nos itens. Veja a diretriz do componente item para maiores detalhes*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name       | Property   | Color Token |\n| ---------- | ---------- | ----------- |\n| Superfície | background | `--pure-0`  |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                   | Property               | Token/Value          |\n| ---------------------- | ---------------------- | -------------------- |\n| Área do Usuário        | espaçamento interno    | `--spacing-scale-2x` |\n| Item do *notification* | espaçamento interno    | `--spacing-scale-2x` |\n| Botão Fechar           | alinhamento vertical   | `top`                |\n| Botão Fechar           | alinhamento horizontal | `right`              |"
      },
      {
        "title": "Superfície",
        "level": 3,
        "content": "| Name       | Property | Token/Value           |\n| ---------- | -------- | --------------------- |\n| Superfície | shadow   | `--surface-shadow-md` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Certifique-se de que as notificações possam ser acessadas usando um teclado, sem depender apenas do mouse;\n\n- Os usuários devem conseguir acessar o painel de notificações usando a tecla `Tab` e `Shift + Tab` para avançar e retroceder na navegação;\n\n- Os controles interativos no painel de notificações podem ser acionados com as teclas `Enter` ou `Space`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Garanta que as notificações sejam opcionais: os usuários podem configurar se desejam recebê-las ou não;\n\n- Use uma descrição significativa e clara para as mensagens de notificação;\n\n- Certifique-se de seguir as orientações para contraste de cores, recomendadas na diretriz do componente. As notificações devem ser legíveis com contraste suficiente para usuários com visão reduzida;\n\n- Embora as notificações possam ser úteis, evite sobrecarregar os usuários com o excesso de notificações."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/notification/notification.md",
      "accessibilityPath": "ds/componentes/notification/notification-access.md"
    }
  },
  {
    "name": "Pagination",
    "slug": "pagination",
    "description": "O *Pagination* é um *Componente* de interface que tem a função de organizar conteúdo de dados em páginas sequenciais, trazendo maior usabilidade durante o consumo da informação pelo usuário.",
    "documentationUrl": "https://www.gov.br/ds/components/pagination",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de Pagination](imagens/type-default.png)\n*Exemplo de Pagination*\n\nUtilize o *Pagination* quando:\n\n- O volume de dados carregados na tela for bastante extenso e houver a necessidade de organizá-lo em partes menores, ou seja, *Páginas Sequenciais*;\n- Melhorar a usabilidade e organização de conteúdos em listas."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *Pagination* contém os componentes: *Botão Circular*, *Lista* e *Separadores*, além de outros elementos específicos, e é organizado nos seguintes módulos:\n\n| ID  | Nome                       |                    Referência                    | Uso         |\n| --- | -------------------------- | :----------------------------------------------: | ----------- |\n| 1   | Setas de Navegação         |   [Button](/ds/components/button?tab=designer)   | Obrigatório |\n| 2   | Identificadores de Páginas |   [Button](/ds/components/button?tab=designer)   | Obrigatório |\n| 3   | Botão Reticências          |   [Button](/ds/components/button?tab=designer)   | Opcional    |\n| 4   | Módulo de Exibição         |   [Select](/ds/components/select?tab=designer)   | Opcional    |\n| 5   | Módulo de Informação       | [Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 6   | Módulo de Atalho           |   [Select](/ds/components/select?tab=designer)   | Opcional    |\n\n![Anatomia do Pagination](imagens/anatomy.png)\n*Anatomia do Pagination*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Setas de Navegação (Obrigatório)",
        "level": 4,
        "content": "Constituem um *Botão* para esquerda e outro para direita. A cada clique, o usuário poderá navegar página por página de forma crescente ou decrescente (direita / esquerda).\n\n![Setas de Navegação](imagens/anatomy-module-navigation-arrow-buttons.png)\n*Setas de Navegação*"
      },
      {
        "title": "2. Identificadores de Páginas (Obrigatório)",
        "level": 4,
        "content": "Os *Identificadores de Páginas* também são interativos. O usuário poderá clicar diretamente na página para qual deseja acessar. Neste elemento só será permitido caracteres numéricos.\n\n![Identificadores de Páginas](imagens/anatomy-module-navigation-page-buttons.png)\n*Identificadores de Páginas*"
      },
      {
        "title": "3. Botão Reticências (Opcional)",
        "level": 4,
        "content": "O *Botão de Reticências* indica que há mais páginas entre o número inicial e final. O objetivo deste elemento é tornar o *Pagination* mais compacto e resumido. Para acessar todas as páginas ocultas basta clicar no botão e acessá-las através de uma lista por *dropdown*.\n\nSe a Lista for bastante extensa, deve-se utilizar Barra de Rolagem que por padrão deverá ser acionada quando existir uma lista acima de 4 itens a serem apresentados. No entanto, esse valor poderá ser personalizado de acordo com as necessidades visuais e técnicas do projeto. Observe o exemplo abaixo:\n\n![Botão de Reticências](imagens/anatomy-module-navigation-elipsis-buttons.png)\n*Botão de Reticências*"
      },
      {
        "title": "4. Módulo de Exibição (Opcional)",
        "level": 4,
        "content": "Este é um módulo opcional. O *Componente Pagination* poderá ser configurado para exibi-lo ou não. Sua utilidade é oferecer ao usuário a possibilidade de configurar quantos itens deverão aparecer na listagem do *Pagination*.\n\n![Módulo de Exibição](imagens/anatomy-module-view.png)\n*Módulo de Exibição*"
      },
      {
        "title": "5. Módulo de Informação (Opcional)",
        "level": 4,
        "content": "Este módulo é opcional e sua função é mostrar ao usuário o intervalo de páginas que está sendo exibido no momento e o total de páginas que existem no *Pagination*.\n\n![Módulo de Informação](imagens/anatomy-module-info.png)\n*Módulo de Informação*"
      },
      {
        "title": "6. Módulo de Atalho (Opcional)",
        "level": 4,
        "content": "Este módulo também é opcional e sua função é oferecer ao usuário um atalho para acessar qualquer página. É exibido o número da página ativa e se o usuário clicar nele abrirá uma lista do componente *select* com todas as páginas restantes. Se a lista trouxer muitas páginas, deve-se utilizar a *Barra de Rolagem*. É bastante útil e evita obrigar o usuário navegar página por página até encontrar a desejada.\n\nPor padrão, a barra de rolagem, deverá ser acionada quando existir uma lista acima de 4 itens a serem apresentados. No entanto, esse valor poderá ser personalizado de acordo com as necessidades visuais e técnicas do projeto.\n\n![Módulo de Atalho](imagens/anatomy-module-shortcut.png)\n*Módulo de Atalho*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Tipo Padrão",
        "level": 3,
        "content": "É a paginação padrão, aparece sempre no final do conteúdo da tela. As páginas são acessadas rapidamente e são facilmente reconhecíveis aos usuários, a sequência dos *Identificadores de Páginas* ficam sempre visíveis na tela.\n\n![Paginação Tipo Padrão](imagens/type-default.png)\n*Paginação Tipo Padrão*"
      },
      {
        "title": "2. Tipo Contextual",
        "level": 3,
        "content": "É utilizada integrada a outros componentes, como por exemplo *Cards* ou *Tabelas* e visa controlar a sequência de paginação dos *Componentes* aos quais se relacionam. Neste tipo, o *Pagination* apresenta apenas as *Setas de Navegação*, além de poder utilizar também o *Módulo de Exibição*, *Módulo de Informação* e o *Módulo de Atalho*.\n\nNeste tipo, apenas as *Setas de Navegação* são obrigatórias, os demais elementos são opcionais e poderão ser usados conforme a necessidade.\n\n![Paginação Tipo Contextual](imagens/type-context.png)\n*Paginação Tipo Contextual*\n\n![Exemplo de Paginação Tipo Contextual em Tabela](imagens/type-context-sample.png)\n*Exemplo de Paginação Tipo Contextual em Tabela*\n\n![Exemplo de Paginação Tipo Contextual em Cards](imagens/type-context-sample-2.png)\n*Exemplo de Paginação Tipo Contextual em Cards*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": "A *Paginação Padrão* permanecerá centralizada às *Grids* de 12, 8 e 4 *Colunas*. Na *Grid* de 4 colunas recomenda-se utilizar a *Paginação* com *Densidade Baixa* com a finalidade de proporcionar maior área de *Touch*.\n\n![Pagination Padrão - Grid de 12 colunas](imagens/behavior-responsive-grid-12-cols-default.png)\n*Pagination Padrão - Grid de 12 colunas*\n\n![Pagination Padrão - Grid de 8 colunas](imagens/behavior-responsive-grid-8-cols-default.png)\n*Pagination Padrão - Grid de 8 colunas*\n\n![Pagination Padrão - Grid de 4 colunas](imagens/behavior-responsive-grid-4-cols-default.png)\n*Pagination Padrão - Grid de 4 colunas*"
      },
      {
        "title": "Responsividade dos Identificadores de Páginas",
        "level": 4,
        "content": "Em decorrência da redução da tela, caso não seja possível exibir todos os *Identificadores de Páginas*, o *Componente Pagination* deverá ocultar quantos *Identificadores* forem necessários utilizando o *Botão Reticências*. Observe o exemplo abaixo:\n\n![Responsividade dos Identificadores de Páginas - Grid de 8 colunas](imagens/behavior-responsive-grid-8-1.png)\n*Responsividade dos Identificadores de Páginas - Grid de 8 colunas*\n\n![Responsividade dos Identificadores de Páginas - Grid de 4 colunas](imagens/behavior-responsive-grid-4-1.png)\n*Responsividade dos Identificadores de Páginas - Grid de 4 colunas*\n\nA *Paginação Contextual* poderá ser ajustada às colunas da *Grid* e seu tamanho e disposição poderão variar conforme a necessidade.\n\n![Pagination Contextual - Grid de 12 colunas](imagens/behavior-responsive-grid-12-cols-context.png)\n*Pagination Contextual - Grid de 12 colunas*\n\n![Pagination Contextual - Grid de 8 colunas](imagens/behavior-responsive-grid-8-cols-context.png)\n*Pagination Contextual - Grid de 8 colunas*\n\nNa *Grid de 4 Colunas*, caso seja necessário, pode-se ocultar alguns módulos menos relevantes de forma a obter mais espaço.\n\n![Pagination Contextual - Grid de 4 colunas](imagens/behavior-responsive-grid-4-cols-context.png)\n*Pagination Contextual - Grid de 4 colunas*"
      },
      {
        "title": "2. Posição e Alinhamento",
        "level": 3,
        "content": ""
      },
      {
        "title": "Pagination Tipo Padrão",
        "level": 4,
        "content": "O *Pagination Tipo Padrão* posiciona-se sempre centralizado à tela.\n\n![Posição e Alinhamento - Tipo Padrão](imagens/behavior-position-1.png)\n*Posição e Alinhamento - Tipo Padrão*"
      },
      {
        "title": "Pagination Tipo Contextual",
        "level": 4,
        "content": "O *Pagination Tipo Contextual* possui posição e alinhamento configuráveis para seus módulos. O *Componente* permitirá que cada módulo possa ser alinhado à esquerda ou à direita. Isto proporcionará bastante flexibilidade e tornará o Componente flexível às necessidades de diferentes projetos de layout. Abaixo seguem algumas sugestões de posicionamento:\n\n![Posição e Alinhamento Tipo Contextual](imagens/behavior-position-2.png)\n*Posição e Alinhamento Tipo Contextual - Sugestão*\n\n![Posição e Alinhamento Tipo Contextual](imagens/behavior-position-3.png)\n*Posição e Alinhamento Tipo Contextual - Sugestão*\n\n![Posição e Alinhamento Tipo Contextual](imagens/behavior-position-4.png)\n*Posição e Alinhamento Tipo Contextual - Sugestão*"
      },
      {
        "title": "3. Visualização dos Módulos",
        "level": 3,
        "content": "O *Componente Pagination* do *Tipo Contextual* também permite a configuração da visualização de cada módulo, independentemente. Cada módulo poderá ser usado ou não, conforme a necessidade.\n\nNeste exemplo estão sendo utilizados apenas o *Módulo de Exibição* e as *Setas de Navegação*.\n\n![Módulo de Exibição e Setas de Navegação](imagens/behavior-view-1.png)\n*Módulo de Exibição e Setas de Navegação*\n\nJá neste exemplo são utilizadas as *Setas de Navegação* e o *Módulo de Informação*.\n\n![Módulo de Informação e Setas de Navegação](imagens/behavior-view-2.png)\n*Módulo de Informação e Setas de Navegação*\n\nAqui são utilizados todos os módulos.\n\n![Todos os Módulos](imagens/behavior-view-3.png)\n*Todos os Módulos*\n\n**Importante:** Nas visualizações dos módulos, sempre nos lugares que permitem escolhas com opções, deve-se utilizar o componente *select* personalizado, onde o seu *input* (Campo de Entrada de Texto) estará em densidade alta, sem contorno e pré definido e não terá uma de largura mínima pré-definida. A largura deverá se adaptar de acordo com os elementos que o compõe. O rótulo ou *label* que do componente *select* deverá ser apresentado ao lado do *input*, em outro estilo tipográfico (–font-size-scale-base)\n\n![Módulo de Informação e Setas de Navegação](imagens/behavior-select.png)\n*Escolha nos módulos de opções através do Componente select*"
      },
      {
        "title": "4. Número de Páginas Customizável",
        "level": 3,
        "content": "O número de *Identificadores de Páginas* utilizados no *Componente Pagination* é customizável. Esta customização permite adequar melhor o *Componente Pagination* em diversos espaços e resoluções diferenciadas. Veja os exemplos abaixo:\n\n![Número de Páginas Customizável](imagens/behavior-number-pages.png)\n*Número de Páginas Customizável*\n\n**Atenção:** Quando houver a necessidade de utilizar o botão de reticências em um Componente *Pagination*, para um tamanho mínimo recomenda-se, limitar os Identificadores de Páginas a quatro no total."
      },
      {
        "title": "5. Uso do Botão Reticências",
        "level": 3,
        "content": "O *Botão Reticências* poderá ser utilizado:\n\n- No Início - logo após a primeira página;\n- No Final - imediatamente antes da última página;\n- Em ambas situações."
      },
      {
        "title": "Botão Reticências no Início",
        "level": 4,
        "content": "Este aparecerá no início quando a configuração do número de páginas a serem exibidas for menor que o total de páginas e o *Página Ativa* estiver no intervalo de páginas próximo ao final.\n\n![Botão Reticências no Início](imagens/behaviour-ellipsis-2.png)\n*Botão Reticências no Início*"
      },
      {
        "title": "Botão Reticências no Final",
        "level": 4,
        "content": "Este aparecerá no final quando a configuração do número de páginas a serem exibidas for menor que o total de páginas e a *Página Ativa* estiver no intervalo de páginas próximo ao início.\n\n![Botão Reticências no Final](imagens/behaviour-ellipsis-1.png)\n*Botão Reticências no Final*"
      },
      {
        "title": "Botão Reticências no Início e no Final",
        "level": 4,
        "content": "Este aparecerá no início e no final quando a configuração do número de páginas a serem exibidas for menor que o total de páginas e o *Página Ativa* estiver num intervalo de páginas intermediário.\n\n![Botão Reticências no Início e no Final](imagens/behaviour-ellipsis-3.png)\n*Botão Reticências no Início e no Final*\n\nPara acessar as páginas ocultas basta clicar no botão e acessá-las através de uma lista por *dropdown*.\n\n![Botão de Reticências](imagens/behaviour-ellipsis-4.png)\n*Botão de Reticências*"
      },
      {
        "title": "Navegando por Páginas Subsequentes",
        "level": 4,
        "content": "Ao selecionar uma página subsequente à página ativa, o *Componente Pagination* mantém sua configuração original, alterando apenas o número de página ativa. Veja a seguir:\n\n![Navegando no Pagination - Páginas Subsequentes](imagens/behaviour-ellipsis-6.png)\n*Navegando no Pagination - Páginas Subsequentes*\n\nA - A página ativa é a primeira e o usuário seleciona a segunda página;\n\nB - O *Pagination* mantém a configuração original e altera a página selecionada para o *Estado Ativo*;\n\nC - O mesmo ocorre sempre que o usuário selecionar uma página subsequente à página ativa."
      },
      {
        "title": "Navegando através do Botão Reticências",
        "level": 4,
        "content": "Ao selecionar uma página através do *Botão Reticências*, o *Componente Pagination* trará nova configuração dos *Identificadores de Páginas* contendo o *Identificador da Página Ativo* centralizado ao *Componente*. Observe abaixo:\n\n![Navegando no Pagination - Botão Reticências](imagens/behaviour-ellipsis-5.png)\n*Navegando no Pagination - Botão Reticências*\n\nA - A página ativa é a primeira;\n\nB - O usuário seleciona outra página através do *Botão Reticências*;\n\nC - O *Pagination* é reconfigurado exibindo a página ativa selecionada centralizada ao *Componente*."
      },
      {
        "title": "6. Número de caracteres",
        "level": 3,
        "content": "Quando o número de caracteres no *Identificador da Página* for igual ou superior a 3, este deverá assumir o formato de pílula e crescerá na horizontal, caso a quantidade de caracteres aumente.\n\n![Número de caracteres](imagens/behaviour-caracter.png)\n*Número de caracteres*"
      },
      {
        "title": "7. Densidade",
        "level": 3,
        "content": ""
      },
      {
        "title": "Densidade Baixa",
        "level": 4,
        "content": "Utilize *Densidade Baixa* quando o projeto de layout permitir mais espaço ou quando quando houver necessidade de dar mais destaque ao *Componente Pagination*, ou ainda quando houver necessidade de utilizar o *Pagination* em resolução de 4 colunas, onde é necessário mais área para interação através do *Touch*.\n\n![Tipo Padrão Densidade Baixa](imagens/behavior-density-low.png)\n*Tipo Padrão Densidade Baixa*\n\n![Tipo Contextual Densidade Baixa](imagens/behavior-density-contextual-low.png)\n*Tipo Contextual Densidade Baixa*"
      },
      {
        "title": "Densidade Média",
        "level": 4,
        "content": "É a forma comum do *Componente Pagination*. Oferece um espaçamento interno adequado e equilibrado para vários tipos de projetos. Importante se atentar ao fato que a densidade média é a densidade para uso padrão.\n\n![Tipo Padrão Densidade Média](imagens/behavior-density-default.png)\n*Tipo Padrão Densidade Média*\n\n![Tipo Contextual Densidade Média](imagens/behavior-density-contextual-default.png)\n*Tipo Contextual Densidade Média*"
      },
      {
        "title": "Densidade Alta",
        "level": 4,
        "content": "Utilize *Densidade Alta* quando for necessário usar o *Componente Pagination* em espaços mais restritos, ou dentro de outros elementos.\n\n![Tipo Padrão Densidade Alta](imagens/behavior-density-hight.png)\n*Tipo Padrão Densidade Alta*\n\n![Tipo Contextual Densidade Alta](imagens/behavior-density-contextual-hight.png)\n*Tipo Contextual Densidade Alta*"
      },
      {
        "title": "8. Estados",
        "level": 3,
        "content": "O *Componente Pagination* pode ser apresentado nos seguintes estados:"
      },
      {
        "title": "Estado Interativo",
        "level": 4,
        "content": "É o estado comum no qual o *Componente Pagination* se apresenta.\n\n![Estado Interativo](imagens/behavior-states-interactive.png)\n*Estado Interativo*"
      },
      {
        "title": "Estado Hover",
        "level": 4,
        "content": "Este estado ocorre quando o usuário passa o *Mouse* sobre os elementos interativos, como por exemplo, as *Setas Laterais* e os *Botões*.\n\n![Estado Hover](imagens/behavior-states-hover.png)\n*Estado Hover*"
      },
      {
        "title": "Estado Ativo",
        "level": 4,
        "content": "O *Estado Ativo* informa ao usuário que um elemento foi acionado e encontra-se em estado ativo ou em evidência.\n\n![Estado Ativo](imagens/behavior-states-active.png)\n*Estado Ativo*"
      },
      {
        "title": "Estado Pressionado",
        "level": 4,
        "content": "O *Estado Pressionado* ocorre quando o usuário clica sobre o elemento interativo.\n\n![Estado Pressionado](imagens/behavior-states-pressed.png)\n*Estado Pressionado*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": ""
      },
      {
        "title": "Paginação Vertical com Botão",
        "level": 3,
        "content": "Quando houver a necessidade de uma navegação vertical e contínua, recomenda-se utilizar o *Componente Botão* ao final da tela. Neste caso, a paginação ocorre como um comportamento, mas o *Componente* utilizado é o *Botão Ênfase Secundária*.\n\nO usuário clica no *Botão* e enquanto os dados são carregados, o *Componente Loading* substitui a lista. Após o carregamento dos dados, a lista é atualizada. Observe abaixo:\n\n![Paginação Vertical com Botão](imagens/behavior-scroll-pagination.png)\n*Paginação Vertical com Botão*"
      },
      {
        "title": "Paginação Vertical com Rolagem Automática",
        "level": 4,
        "content": "Há também outra forma de *Paginação Vertical* sem utilização de *Botão*. É a *Paginação com Rolagem Automática*. Nesta situação, o usuário apenas rola a tela para baixo, e quando o conteúdo chega ao fim, mais dados são carregados na tela automaticamente. Observe abaixo:\n\n![Paginação Vertical com Rolagem Automática](imagens/behavior-scroll-pagination-2.png)\n*Paginação Vertical com Rolagem Automática*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": ""
      },
      {
        "title": "Estado - Interativo",
        "level": 4,
        "content": "| Name                                    | Property   | Color Token            |\n| --------------------------------------- | ---------- | ---------------------- |\n| Setas de Navegação                      | color      | `--blue-warm-vivid-70` |\n| Setas de Navegação Fundo Escuro         | color      | `--blue-warm-20`       |\n| Identificadores de Páginas              | color      | `--blue-warm-vivid-70` |\n| Identificadores de Páginas              | background | `--pure-0`             |\n| Identificadores de Páginas Fundo Escuro | color      | `--pure-0`             |\n| Identificadores de Páginas Fundo Escuro | background | `--blue-warm-vivid-90` |\n| Texto Módulos                           | color      | `--color-secondary-08` |\n| Texto Módulos Fundo Escuro              | color      | `--pure-0`             |\n| Texto Interativo Módulos                | color      | `--blue-warm-vivid-70` |\n| Texto Interativo Módulos Fundo Escuro   | color      | `--blue-warm-20`       |\n| Botões Módulos                          | color      | `--blue-warm-vivid-70` |\n| Botões Módulos Fundo Escuro             | color      | `--blue-warm-20`       |"
      },
      {
        "title": "Estado - Hover",
        "level": 4,
        "content": "| Name                                    | Property   | Color Token            |        Opacity         |\n| --------------------------------------- | ---------- | ---------------------- | :--------------------: |\n| Setas de Navegação                      | color      | `--blue-warm-vivid-70` |           -            |\n| Setas de Navegação                      | background | `--blue-warm-vivid-70` | `--surface-opacity-xs` |\n| Setas de Navegação Fundo Escuro         | background | `--blue-warm-vivid-70` | `--surface-opacity-sm` |\n| Setas de Navegação Fundo Escuro         | color      | `--blue-warm-20`       |           -            |\n| Texto Módulos Fundo Escuro              | color      | `--pure-0`             |           -            |\n| Texto Interativo Módulos Fundo Escuro   | color      | `--blue-warm-20`       |           -            |\n| Identificadores de Páginas              | color      | `--blue-warm-vivid-70` |           -            |\n| Identificadores de Páginas              | background | `--blue-warm-vivid-70` | `--surface-opacity-xs` |\n| Identificadores de Páginas Fundo Escuro | background | `--blue-warm-vivid-70` | `--surface-opacity-sm` |\n| Botões Módulos                          | color      | `--blue-warm-vivid-70` |           -            |\n| Botões Módulos                          | background | `--blue-warm-vivid-70` | `--surface-opacity-xs` |\n| Botões Módulos Fundo Escuro             | color      | `--blue-warm-20`       |           -            |\n| Botões Módulos Fundo Escuro             | background | `--blue-warm-vivid-70` | `--surface-opacity-sm` |"
      },
      {
        "title": "Estado - Pressionado",
        "level": 4,
        "content": "| Name                                    | Property   | Color Token            |        Opacity         |\n| --------------------------------------- | ---------- | ---------------------- | :--------------------: |\n| Setas de Navegação                      | color      | `--blue-warm-vivid-70` |           -            |\n| Setas de Navegação Fundo Escuro         | color      | `--blue-warm-20`       |           -            |\n| Setas de Navegação                      | background | `--blue-warm-vivid-70` | `--surface-opacity-md` |\n| Setas de Navegação Fundo Escuro         | background | `--blue-warm-20`       | `--surface-opacity-lg` |\n| Identificadores de Páginas              | color      | `--blue-warm-vivid-70` |           -            |\n| Identificadores de Páginas Fundo Escuro | color      | `--pure-0`             |           -            |\n| Identificadores de Páginas              | background | `--blue-warm-vivid-70` | `--surface-opacity-md` |\n| Identificadores de Páginas Fundo Escuro | background | `--pure-0`             | `--surface-opacity-lg` |\n| Botões Módulos                          | color      | `--blue-warm-vivid-70` |           -            |\n| Botões Módulos Fundo Escuro             | color      | `--blue-warm-20`       |           -            |\n| Botões Módulos                          | background | `--blue-warm-vivid-70` | `--surface-opacity-md` |\n| Botões Módulos Fundo Escuro             | background | `--blue-warm-20`       | `--surface-opacity-lg` |"
      },
      {
        "title": "Estado - Ativo",
        "level": 4,
        "content": "| Name                                    | Property   | Color Token            | Opacity |\n| --------------------------------------- | ---------- | ---------------------- | :-----: |\n| Setas de Navegação Fundo Escuro         | color      | `--blue-warm-20`       |    -    |\n| Texto Módulos Fundo Escuro              | color      | `--pure-0`             |    -    |\n| Texto Interativo Módulos Fundo Escuro   | color      | `--blue-warm-20`       |    -    |\n| Identificadores de Páginas              | color      | `--pure-0`             |    -    |\n| Identificadores de Páginas              | background | `--blue-warm-vivid-90` |    -    |\n| Identificadores de Páginas Fundo Escuro | color      | `--blue-warm-vivid-90` |    -    |\n| Identificadores de Páginas Fundo Escuro | background | `--pure-0`             |    -    |\n| Botões Módulos                          | color      | `--pure-0`             |    -    |\n| Botões Módulos                          | background | `--blue-warm-vivid-90` |    -    |\n| Botões Módulos Fundo Escuro             | color      | `--blue-warm-vivid-90` |    -    |\n| Botões Módulos Fundo Escuro             | background | `--pure-0`             |    -    |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name                                         | Size                      | Weight                    |\n| -------------------------------------------- | ------------------------- | ------------------------- |\n| Texto Módulos                                | `--font-size-scale-base`  | `--font-weight-regular`   |\n| Texto Botões Páginas                         | `--font-size-scale-up-01` | `--font-weight-regular`   |\n| Identificador de página                      | `--font-size-scale-up-01` | `--font-weight-regular`   |\n| Identificador de página (página selecionada) | `--font-size-scale-up-01` | `--font-weight-semi-bold` |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name                        | Ícone                       | Token Size          | Class (Font Awesome) |\n| --------------------------- | --------------------------- | ------------------- | -------------------- |\n| Seta Lateral Esquerda       | <i class=\"angle-left\"></i>  | `--icone-size-base` | angle-left           |\n| Seta Lateral Direita        | <i class=\"angle-right\"></i> | `--icone-size-base` | angle-right          |\n| Seta Seleção de Lista       | <i class=\"angle-down\"></i>  | `--icone-size-base` | angle-down           |\n| Seta Seleção de Lista Ativa | <i class=\"angle-up\"></i>    | `--icone-size-base` | angle-up             |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name                                         | Property | Value  |\n| -------------------------------------------- | -------- | :----: |\n| Setas de Navegação - Densidade Média         | Width    | `32px` |\n| Setas de Navegação - Densidade Média         | Height   | `32px` |\n| Identificadores de Páginas - Densidade Média | Width    | `32px` |\n| Identificadores de Páginas - Densidade Média | Height   | `32px` |\n| Botões Seleção de Lista - Densidade Média    | Width    | `32px` |\n| Botões Seleção de Lista - Densidade Média    | Height   | `32px` |\n| Setas de Navegação - Densidade Baixa         | Width    | `40px` |\n| Setas de Navegação - Densidade Baixa         | Height   | `40px` |\n| Identificadores de Páginas - Densidade Baixa | Width    | `40px` |\n| Identificadores de Páginas - Densidade Baixa | Height   | `40px` |\n| Botões Seleção de Lista - Densidade Baixa    | Width    | `40px` |\n| Botões Seleção de Lista - Densidade Baixa    | Height   | `40px` |\n| Setas de Navegação - Densidade Alta          | Width    | `24px` |\n| Setas de Navegação - Densidade Alta          | Height   | `24px` |\n| Identificadores de Páginas - Densidade Alta  | Width    | `24px` |\n| Identificadores de Páginas - Densidade Alta  | Height   | `24px` |\n| Botões Seleção de Lista - Densidade Alta     | Width    | `24px` |\n| Botões Seleção de Lista - Densidade Alta     | Height   | `24px` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                       | Property     |         Value          |\n| -------------------------- | ------------ | :--------------------: |\n| Setas de Navegação         | margin-right | `--spacing-scale-base` |\n| Setas de Navegação         | margin-left  | `--spacing-scale-base` |\n| Identificadores de Páginas | margin-left  | `--spacing-scale-half` |\n| Identificadores de Páginas | margin-right | `--spacing-scale-half` |\n| Módulo de Exibição         | margin-left  |  `--spacing-scale-2x`  |\n| Módulo de Exibição         | margin-right |  `--spacing-scale-2x`  |\n| Módulo de Informação       | margin-left  |  `--spacing-scale-2x`  |\n| Módulo de Informação       | margin-right |  `--spacing-scale-2x`  |\n| Módulo de Atalho           | margin-left  |  `--spacing-scale-2x`  |\n| Módulo de Atalho           | margin-right |  `--spacing-scale-2x`  |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Torne o componente *pagination* acessível via navegação por teclado. Certifique-se de que o usuário possa usar as teclas `Tab` e `Shift + Tab` para avançar ou retroceder na navegação;\n\n- Configure as teclas `Enter` ou `Space` para ser possível o acionamento dos botões de paginação pelo teclado;\n\n- Quando navegar pelos atalhos, em listas de seleção, o usuário poderá fazê-lo por meio das teclas direcionais `arrowUp` e `arrowDown`;\n\n- Utilize a tecla `Esc` para fechar as listas de seleção."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Forneça aos usuários de leitores de tela, textos descritivos mais claros nos botões de paginação. Por exemplo, em vez de apenas números ou símbolos `\"1\"`, use `\"Ir para a página 1\"`;\n\n- Forneça atalhos para que o usuário possa acessar uma página desejada sem ter que passar por todas as páginas intermediárias. Por exemplo, permita que o usuário consiga saltar para a última página ou diretamente para uma página qualquer;\n\n- Utilize as cores de estado `(ativo, hover, foco, etc)` recomendadas na diretriz do componente, para fornecer ao usuário um *feedback* visual claro sobre a página atual e o progresso de navegação."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Recomenda-se usar marcadores semânticos para estruturar o componente *pagination*, as *tags* `<nav>`, `<ul>`, `<ol>` e `<li>`;\n\n- Para os links de paginação utilize a *tag* `<a>` e para os botões de ação a *tag* `<button>`;\n\n- Para os atalhos de navegação, utilize o componente *select*."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/pagination/accessibility)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/pagination/pagination.md",
      "accessibilityPath": "ds/componentes/pagination/pagination-access.md"
    }
  },
  {
    "name": "Radio",
    "slug": "radio",
    "description": "O componente Radio permite selecionar apenas uma opção em uma lista de opções.",
    "documentationUrl": "https://www.gov.br/ds/components/radio",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo Componente](imagens/radio-exemplo.png)\n*Componente Radio*\n\nO componente Radio deve ser utilizado para permitir que o usuário selecione uma ou mais opções em uma lista de opções.\n\nQuando a lista de opções exigir a seleção de apenas um item deve-se utilizar o componente radiobutton.\n\nQuando a lista de opções for muito extensa, deve ser avaliada a possibilidade de uso do componente select.\n\nCada opção pode ser acompanhada de um texto que a descreva.\n\nO componente pode ser utilizado sem o texto descritivo, como em uma tabela, por exemplo; e deverá continuar mantendo suas diretrizes de alinhamento e espaçamento.\n\nÉ fundamental que antes de uma lista de opções múltiplas apareça um rótulo e uma breve descrição, orientando ao usuário sobre o que se trata as opções e que podem ser selecionadas mais de uma opção."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "Deve-se utilizar o componente para opções em que a resposta seja sim ou não (Ex.: Lembrar senha?), quando a resposta for ligado ou desligado (Ex.: Componente habilitado.) pode-se utilizar o componente switch como alternativa.\n\nRecomenda-se, que o texto do rótulo e o texto descritivo sejam breves, claros e diretos. Utilizar os verbos sempre na terceira pessoa do imperativo afirmativo. Ex.: Selecione os estados contidos no projeto.\n\nDar preferência ao uso do componente em uma coluna, porém pode-se dispor de mais de uma coluna se houver extrema necessidade. Nesse caso, é recomendado manter a mesma largura em todos os itens da mesma coluna e a mesma altura dos itens da mesma linha da lista.\n\nDeve-se manter uma coerência entre as larguras dos itens evitando uma largura de linha com mais de 10 palavras ou 56 caracteres em média."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *Radio* é constituído por:\n\n| ID  | Nome                              |                    Referência                    | Uso         |\n| --- | --------------------------------- | :----------------------------------------------: | ----------- |\n| 1   | Caixa de opção                    |                       ---                        | Obrigatório |\n| 2   | Item de opção                     |     [Item](/ds/components/item?tab=designer)     | Obrigatório |\n| 3   | Cabeçalho de opções               | [Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 4   | Lista de opções                   |     [List](/ds/components/list?tab=designer)     | Obrigatório |\n| 5   | Mensagem de *feedback* contextual |  [Message](/ds/components/message?tab=designer)  | Opcional    |\n\n![Exemplo Estrutura](imagens/radio-estrutura.png)\n*Anatomia do componente Radio*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Caixa de Opção (Obrigatório)",
        "level": 3,
        "content": "A caixa de opção é composta pelo container (A) e pelo ícone de suporte visual interativo (B) que indicará o estado do componente como selecionado ou válido. Pode ser utilizado de forma independente como em células de tabelas, por exemplo.\n\n![Exemplo caixa opção](imagens/radio-caixa-opcao.png)\n*Caixa de opção do componente Radio*"
      },
      {
        "title": "A. Container",
        "level": 4,
        "content": "O container do *Radio* parte de um círculo opaco que deverá conter o ícone de suporte interativo."
      },
      {
        "title": "B. Ícone de suporte visual interativo",
        "level": 4,
        "content": "- O Ícone de suporte visual é um elemento que ficará dentro da área do container e deve ser utilizado para identificar o estado do item radio como selecionado ou não selecionado a depender do seu estado.\n- Deve estar dentro da área do container"
      },
      {
        "title": "2. Item de opção (Obrigatório)",
        "level": 3,
        "content": "É composto pela caixa de opção (A) à esquerda e o texto descritivo (B) sempre à sua direita. Este item deve ter uma largura mínima e máxima (ver design tokens).\n\n![Exemplo item opção](imagens/radio-item-opcao.png)\n*Item de opção do componente Radio*"
      },
      {
        "title": "A. Caixa de opção",
        "level": 4,
        "content": "O container do *Radio* no estado selecionado."
      },
      {
        "title": "B. Texto descritivo",
        "level": 4,
        "content": "- Para proporcionar um maior conforto visual ao usuário, o texto descritivo deve se posicionar sempre à direita do container respeitando o espaçamento lateral da caixa de opção.\n- Texto que descreve a opção a ser selecionada. Pode ser suprimido dependendo da aplicação, como por exemplo em tabelas.\n- Deve-se manter uma coerência entre as larguras dos itens evitando um texto descritivo com mais de sete palavras.\n- Os textos descritivos deverão ser escritos com sua primeira letra em maiúsculo e o restante em minúsculo. Ex.: Selecione a opção 01.\n- Evitar escrever com todas as letras em maiúsculo (ALL CAPS) ou com todas as primeiras letras das palavras em maiúsculo (Camel Case)."
      },
      {
        "title": "3. Cabeçalho de opções (Opcional)",
        "level": 3,
        "content": "O cabeçalho de opções é composto pelo rótulo (A) e caso necessário, texto auxiliar (B). Deve ser o item mais ao topo da lista de opções. Não há restrição de largura ou altura para este item.\n\n![Exemplo Cabeçalho Opções](imagens/radio-cabecalho-opcoes.png)\n*Exemplo Cabeçalho de Opções*"
      },
      {
        "title": "A. Rótulo",
        "level": 4,
        "content": "- Quando o componente é apresentado em uma lista e opções devem ser precedidos de um rótulo que descreva a informação que o usuário deve selecionar.\n- O rótulo deve se posicionar no topo do componente alinhado à esquerda.\n- Deverá ser escrito com sua primeira letra em maiúsculo e o restante em minúsculo. Ex.: Selecione a opção 01.\n- Evitar escrever com todas as letras em maiúsculo (ALL CAPS) ou com todas as primeiras letras das palavras em maiúsculo (Camel Case)."
      },
      {
        "title": "B. Informações Adicionais",
        "level": 4,
        "content": "- É possível adicionar um texto auxiliar ao rótulo para facilitar o seu entendimento.\n- Este texto deve se posicionar logo abaixo do componente rótulo, sem espaçamentos e alinhado à esquerda.\n- Deverá ser escrito com sua primeira letra em maiúsculo e o restante em minúsculo. Ex.: Selecione a opção 01.\n- Evitar escrever com todas as letras em maiúsculo (ALL CAPS) ou com todas as primeiras letras das palavras em maiúsculo (Camel Case)."
      },
      {
        "title": "4. Lista de opções (Obrigatório)",
        "level": 3,
        "content": "A lista de opções é o conjunto formado por itens de opções (A).\nQuando esta lista possuir mais de um item é recomendado que seja precedida de um cabeçalho de opções.\n\n![Exemplo lista de opção](imagens/radio-lista-opcoes.png)\n*Lista de Opções*"
      },
      {
        "title": "5. Mensagens de feedback contextual (Opcional)",
        "level": 3,
        "content": "O componente mensagem pode ser utilizado para enviar mensagens informativas, de alerta, de erro (A) ou validação (feedback contextual) devem ser o mais sucintas possível, de preferência não ultrapassando uma linha da mesma largura do campo de texto além de seguir suas diretrizes de componente.\nDeve se posicionar abaixo do último item da lista de opções, alinhado à esquerda e respeitando uma margem superior de acordo com suas diretrizes.\n\n![Exemplo item opção](imagens/radio-mensagem.png)\n*Mensagem de feedback contextual*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Estados",
        "level": 3,
        "content": ""
      },
      {
        "title": "Não selecionado (Estado padrão)",
        "level": 4,
        "content": "Estado padrão do componente. Indica que o usuário não respondeu ou não optou pela opção da lista.\n\n![Default](imagens/radio-estado-default.png)\n*Estado Default*"
      },
      {
        "title": "Hover",
        "level": 4,
        "content": "Estado que indica quando o usuário posiciona o ponteiro do mouse sobre a área do componente (1). Pode não fazer sentido em dispositivos em que não se utiliza o mouse como recurso.\n\n![Estado hover](imagens/radio-estado-hover.png)\n*Estado Hover*"
      },
      {
        "title": "Selected",
        "level": 4,
        "content": "Estado que indica que o usuário selecionou um item. Pode ser acionado pressionando a tecla espaço quando o foco está no componente, pelo clique do mouse ou toque na tela na região do componente (incluindo seu texto descritivo, quando houver), ou outra ação que corresponda ao item desejado pelo usuário com a fala, por exemplo.\n\n![Estado selecionado](imagens/radio-estado-selected.png)\n*Estado Selecionado*"
      },
      {
        "title": "Focused",
        "level": 4,
        "content": "Estado que indica que o item da lista de opções está destacado, usando um método de entrada como a tecla \"Tab\" do teclado, por exemplo. Este estado é de extrema importância para garantir a acessibilidade do componente na interface.\n\n![Estado focused](imagens/radio-estado-focused.png)\n*Estado Foco*"
      },
      {
        "title": "Invalid",
        "level": 4,
        "content": "Estado indicativo de que a opção não é válida. Pode ser aplicado quando a opção selecionada em um questionário está incorreta, ou o preenchimento de ao menos uma opção é obrigatório.\n\n![Estado invalido](imagens/radio-estado-invalid.png)\n*Estado Inválido*"
      },
      {
        "title": "Valid",
        "level": 4,
        "content": "Estado indicativo de que a opção é válida. Pode ser aplicado quando a opção selecionada em um questionário está correta, por exemplo.\n\n![Estado valido](imagens/radio-estado-valid.png)\n*Estado Válido*"
      },
      {
        "title": "Disabled",
        "level": 4,
        "content": "Estado que indica que a opção não está disponível para ser selecionada.\n\n![Estado disabled](imagens/radio-estado-disabled.png)\n*Estado Desabilitado*"
      },
      {
        "title": "2. Espaçamento e Alinhamento",
        "level": 3,
        "content": ""
      },
      {
        "title": "Caixa de opção",
        "level": 4,
        "content": "A caixa de opção do item do Radio deve manter uma distância superior e inferior (1) e um espaçamento lateral direito (2) de qualquer outro elemento."
      },
      {
        "title": "Texto descritivo",
        "level": 4,
        "content": "O texto descritivo deve se posicionar sempre à direita a (2) da caixa de opção como indicado acima. Deve manter um espaçamento inferior dos elementos abaixo (3).\n\n![Espaçamento caixa](imagens/radio-caixa-opcao-espacamento.png)\n*Espaçamento da caixa de opção e texto descritivo*"
      },
      {
        "title": "Item de opção",
        "level": 4,
        "content": "Cada item do Radio, composto pela caixa de opção à esquerda e seu texto descritivo à direita, deve manter uma distância à direita (4), abaixo (3) e acima (1) entre este e o próximo componente.\n\n![Espaçamento item](imagens/radio-item-opcao-espacamento.png)\n*Espaçamento da caixa de opção e texto descritivo*"
      },
      {
        "title": "Cabeçalho de opções",
        "level": 4,
        "content": "O Rótulo e o texto auxiliar devem estar ao topo do agrupamento, devem se posicionar um logo abaixo do outro não havendo espaçamento além do já previsto em suas diretrizes e um espaçamento inferior a partir do último dos dois elementos (Rótulo ou texto auxiliar)."
      },
      {
        "title": "Mensagens de feedback contextual",
        "level": 4,
        "content": "- Deve ser o elemento mais abaixo na lista de opções do componente.\n- Deve manter o espaçamento superior do último item da lista de opções (2).\n- Deverá haver apenas uma mensagem para todo o conjunto da lista de opções.\n\n![Espaçamento Cabeçalho Mensagem ](imagens/radio-lista-opcao-espacamento.png)\n*Espaçamento do cabeçalho e das mensagens*"
      },
      {
        "title": "Disposição vertical",
        "level": 4,
        "content": "- No caso de listas verticais com textos descritivos de alturas diferentes ou que ultrapassem um linha de conteúdo deve-se manter o espaçamento inferior (3) para garantir a distinção dos itens pelo usuário.\n\n- Não há limite de altura ou linhas de texto para os itens de opção.\n\n- Para itens de opção com larguras diferentes a lista de opções deve seguir as dimensões do maior item.\n\n![Lista vertical](imagens/radio-lista-opcao-vertical.png)\n*Espaçamento dos itens em lista vertical*"
      },
      {
        "title": "Disposição horizontal",
        "level": 4,
        "content": "- Para listas horizontais com mais de um item, deve-se manter a largura máxima (1) e mínima (2) (ver design tokens).\n\n- No caso de listas horizontais com itens de opção com larguras diferentes, deve-se manter o espaçamento lateral direito de segurança entre os itens (2).\n\n- No caso de o item de opção ultrapassar o limite de largura (1), o texto descritivo deverá continuar em uma outra linha mantendo o alinhamento ao texto.\n\n![Lista horizontal](imagens/radio-lista-opcao-horizontal.png)\n*Espaçamento dos itens em lista horizontal*\n\n- Não há limite de linhas de texto ou altura de linha para os itens do componente.\n\n- Para itens de opção com alturas diferentes a lista de opções deve seguir as dimensões do maior item."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Nome           | Property      | Value |\n| -------------- | ------------- | ----- |\n| Caixa de opção | width         | 24px  |\n| Caixa de opção | height        | 24px  |\n| Caixa de opção | border-radius | 12px  |\n| Caixa de opção | border-width  | 1px   |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name                | Property       | Value                     |\n| ------------------- | -------------- | ------------------------- |\n| Caixa de opção      | padding-right  | `--spacing-scale-base`    |\n| Caixa de opção      | padding-left   | `--spacing-scale-default` |\n| Caixa de opção      | padding-top    | `--spacing-scale-half`    |\n| Caixa de opção      | padding-bottom | `--spacing-scale-half`    |\n| Texto descritivo    | padding-right  | `--spacing-scale-4x`      |\n| Texto descritivo    | padding-left   | `--spacing-scale-default` |\n| Texto descritivo    | padding-bottom | `--spacing-scale-2x`      |\n| Texto descritivo    | padding-top    | `--spacing-scale-half`    |\n| Rótulo              | padding        | `--spacing-scale-default` |\n| Texto auxiliar      | padding        | `--spacing-scale-default` |\n| Cabeçalho de opções | padding        | `--spacing-scale-default` |\n| Cabeçalho de opções | padding-bottom | `--spacing-scale-2x`      |\n| Lista de opções     | padding-top    | `--spacing-scale-default` |\n| Lista de opções     | margin-bottom  | `--spacing-scale-2x`      |\n| Lista de opções     | padding-left   | `--spacing-scale-default` |\n| Lista de opções     | padding-right  | `--spacing-scale-5x`      |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name             | family-type          | font-size                   | font-weight               |\n| ---------------- | -------------------- | --------------------------- | ------------------------- |\n| Rótulo           | `–-font-family-base` | `--font-size-scale-base`    | `--font-weight-semi-bold` |\n| Texto auxiliar   | `-–font-family-base` | `--font-size-scale-down-01` | `--font-weight-medium`    |\n| Texto descritivo | `-–font-family-base` | `--font-size-scale-base`    | `--font-weight-medium`    |"
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                               | Property   | Color Token            |\n| ---------------------------------- | ---------- | ---------------------- |\n| Caixa de opção                     | background | `--pure-0`             |\n| Caixa de opção                     | border     | `--gray-20`            |\n| Ícone de suporte visual interativo | background | `--blue-warm-vivid-50` |\n| Texto descritivo                   | color      | `--gray-80`            |\n| Rótulo                             | color      | `--gray-80`            |\n| Informações adicionais             | color      | `--gray-80`            |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name             | Estado | Ícone                         | Size             | Class (Font Awesome) |\n| ---------------- | ------ | ----------------------------- | ---------------- | -------------------- |\n| Ícone interativo | --     | <i class=\"fas fa-circle\"></i> | `.icon.size--sm` | `.fa-circle`         |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- *Radio buttons* devem ser navegáveis pelo teclado por meio da tecla `Tab` e acionados com a tecla `Space`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- *Radio button* devem ter rótulos associados que expliquem seu objetivo e esteja claramente vinculado a eles;\n\n- Quando houver mudança de estado, ofereça **sempre** *feedback* de *status* claro e audível para o usuário;\n\n- Esteja atendo às recomendações na diretriz de design quanto ao uso das cores para este elemento, garantindo um contraste de cor suficiente para serem facilmente lidos por pessoas com baixa visão;\n\n- Em caso de agrupamento de *radio buttons* utilize um rótulo para o grupo, tornado claro o propósito do agrupamento e para identificação pelo leitor de tela."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Sempre que possível, é recomendável utilizar o elemento `<input>` com o atributo `type=\"radio\"`, para garantir uma boa semântica;\n\n- Em caso de *radio button* selecionado por padrão, utilize o atributo `checked`;\n\n- Para *radio buttons* com opção de seleção obrigatória, utilize o atributo `required`."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/radio-button/accessibility)\n- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/radio/radio.md",
      "accessibilityPath": "ds/componentes/radio/radio-access.md"
    }
  },
  {
    "name": "Scrim",
    "slug": "scrim",
    "description": "Scrims são tratamentos temporários que podem ser aplicados às superfícies dos elementos de uma interface com o objetivo de tornar o conteúdo menos proeminente.",
    "documentationUrl": "https://www.gov.br/ds/components/scrim",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de Scrim](imagens/scrim_zoom.png)\n\nScrims ajudam a redirecionar a atenção do usuário para outras partes ou elementos da tela, retirando possibilidade de foco, ou inibindo a interação com a superfície que o recebe.\n\nMultiplas áreas ou qualquer elemento (parcialmente ou não), pode receber scrim.\nPodem existir vários scrims ativos na mesma tela e de diferentes tipos.\n\nUsado fundamentalmente para oferecer:\n\n- **Foco:** Quando existe mudança de foco entre um elemento e outro;\n- **Legibilidade:** Quando um texto precisa ser aplicado sobre uma superfície e o contraste entre fundo/texto não é suficiente para gerar um contraste acessível;\n- **Inibição:** Simular elementos para o estado de desativado;"
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "Um Scrim é uma sobreposição, ou seja, uma forma semi-transparente sobre uma área.\n\nPode ser aplicado sobre um elemento inteiro, de forma pacial ou sobre toda a tela visível de um dispositivo.\n\n![Anatomia](imagens/scrim.png)\n\nEm alguns casos, pode ser necessário a utilização de um **scrim vazado**, cuja característica é possuir uma área de fresta para dar destaque.\n\nA cor e o valor da opacidade variam de acordo com o tipo de scrim utilizado."
      },
      {
        "title": "Tipo",
        "level": 2,
        "content": "Existem 3 tipos de scrim: **Foco**, **Legibilidade** e **Inibição**.\nA escolha deve ser feita baseada na necessidade de uso."
      },
      {
        "title": "Foco",
        "level": 3,
        "content": "Usado para alterar o foco hierárquico de um elemento sobre outro ou sobre vários elementos ao mesmo tempo, onde um determinado conteúdo precisa de uma grande relevância sobre os demais.\n\nUsado principalmente quando um novo elemento surge na tela e necessita de uma atenção especial do usuário. As demais áreas que não requerem atenção do usuário ficam escuras, enquanto o elemento em questão ganha total atenção.\n\n![Scrim de Foco](imagens/foco.png)\n\nO **scrim vazado** pode ser utilizado com esta finalidade, onde o elemento de atenção deve ser concentrado na área de fresta do scrim.\n\n![Scrim Inverso de Foco ](imagens/inverso_foco.png)\n\nO scrim recebe as seguintes especificações:\n\n- **Cor:** #000000\n- **Opacidade:** 40%"
      },
      {
        "title": "Legibilidade",
        "level": 3,
        "content": "Usados como um tipo de sobreposição (overlay), buscando melhorar o constraste e leitura do texto sobre qualquer superfície, podendo ser uma imagem ou não. Pode ser usado parcial ou totalmente sobre um elemento/componente.\n\n![Scrim Legibilidade Parcial](imagens/legibilidade_parcial.png)\n\n![Scrim Legibilidade TOtal](imagens/legibilidade_total.png)\n\nO scrim recebe as seguintes especificações:\n\n- **Cor:** #000000\n- **Opacidade:** 64%"
      },
      {
        "title": "Inibição",
        "level": 3,
        "content": "Por possuir um comportamento que impede a interação de elemento soprepostos, o scrim pode ser usado para simular o estado desativado de elementos dentro de uma área.\n\nA principal característica neste modo, é que o elemento que recebe o scrim ficará visualmente desativado, simulando transparência em relação ao fundo.\n\n![Scrim Inibição](imagens/inibicao_01.png)\n\n> Utilize o scrim de inibição sobre opções que ainda não podem ser obtidas pelo o usuário.\n\nEsse tipo de scrim deve ser utilizado com cautela, pois os elementos que estarão abaixo da scrim não estarão realmente em estado desativado. Esse recurso deve ser utilizado em situações onde uma grande área deve ser temporariamente desativada.\n\nEm pequenas áres ou componentes, sempre que possível, prefira configurar o elemento para o estado desativado,ao invés da utilização deste recurso.\n\n![Scrim Inibição](imagens/inibicao_02.png)\n\n> **Cuidado**: não crie obstáculos para o usuário realizar uma busca ou utilizar a área de acessibilidade. Deve existir uma boa justificativa para impedir acesso a essas áreas de suporte.\n\nO scrim recebe as seguintes especificações:\n\n- **Cor:** cor de fundo predominante do elemento que recebe o scrim\n- **Opacidade:** 64%"
      }
    ],
    "accessibility": [],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/scrim/scrim.md"
    }
  },
  {
    "name": "Select",
    "slug": "select",
    "description": "O componente *select* permite selecionar itens em uma lista de opções.",
    "documentationUrl": "https://www.gov.br/ds/components/select",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo Componente Select](imagens/select-sample.png)\n*Exemplo do componente select*\n\nA função do componente *select* é coletar informações fornecidas pelo usuário em uma lista de opções. Utilize o componente *select* quando um usuário precisar escolher uma ou mais opções em uma lista."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "- Ordene os itens de forma lógica para facilitar a visualização das opções pelo usuário (Ex: ordem alfabética, cronológica, etc.).\n- Se possível torne padrão a opção mais escolhida pelos usuários."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome                |                     Referência                     | Uso         |\n| --- | ------------------- | :------------------------------------------------: | ----------- |\n| 1   | Componente *input*  |     [Input](/ds/components/input?tab=designer)     | Obrigatório |\n| 2   | Componente *button* |    [Button](/ds/components/button?tab=designer)    | Obrigatório |\n| 3   | Componente *list*   |      [List](/ds/components/list?tab=designer)      | Obrigatório |\n| 4   | Modos de seleção    |     [Estados](/ds/fundamentos-visuais/estados)     | Obrigatório |\n| 5   | Ícone *search*      | [Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n\n![Anatomia](imagens/select-anatomy.png)\n*Anatomia do componente select.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Componente Input (Obrigatório)",
        "level": 3,
        "content": "É o campo de entrada de texto onde o usuário poderá digitar o texto do item escolhido ou selecionar através do *mouse*. Ao clicar no componente *input*, este assumirá seu estado foco e o cursor ficará ativo em seu interior habilitando a funcionalidade de filtro de pesquisa por *autocomplete*.\n\n![Detalhamento do input do componente select.](imagens/select-input.png)\n*Detalhamento da seleção pelo input do filtro de pesquisa por autocomplete.*"
      },
      {
        "title": "2. Componente Button (Obrigatório)",
        "level": 3,
        "content": "É um botão terciário que tem a função de acionar a exibição ou ocultação da lista *dropdown*, apresentando um *feedback* visual através da alternância em seu ícone interno, através de um comportamento de *toggle*. Este botão deve estar posicionado na extremidade direita ao componente *input*. Para maiores informações consultar o documento Padrão *Dropdown*.\n\n![Detalhe botão terciário.](imagens/select-button-circle.png)\n*Detalhe do uso do botão terciário para abrir/fechar a lista dropdown.*"
      },
      {
        "title": "3. Componente List (Obrigatório)",
        "level": 3,
        "content": "O componente *list* deve apresentar os itens a serem escolhidos pelo usuário. No tipo *multiselect*, o usuário poderá incluir ou remover mais de um item por meio do *checkbox*. Cada item selecionado assumirá o estado selecionado.\n\n![Exemplos de componente select padrão e multiselect.](imagens/select-sample.png)\n*Exemplos de componente select padrão e multiselect.*"
      },
      {
        "title": "Sombra no componente list",
        "level": 4,
        "content": "O componente *list* será apresentado flutuando sobre a tela e uma sombra deve ser utilizada para proporcionar contraste entre o componente e o conteúdo de tela ao fundo. Para maiores informações consultar o fundamento visual Elevação.\n\n![Detalhe do uso de sombra no componente list.](imagens/select-behavior-shadow.png)\n*Detalhe do uso de sombra no componente list.*"
      },
      {
        "title": "4. Modos de Seleção (Obrigatório)",
        "level": 3,
        "content": "Existem três formas de realizar a seleção no componente *Multiselect*. São elas:"
      },
      {
        "title": "Seleção total",
        "level": 4,
        "content": "Permite ao usuário fazer, com um único acionamento, a seleção de todos os itens da lista do *multiselect*."
      },
      {
        "title": "Seleção intermediária",
        "level": 4,
        "content": "Funciona como um *feedback* visual, sendo exibido quando existir, tanto item(ns) selecionado(s), quanto não selecionados."
      },
      {
        "title": "Sem seleção",
        "level": 4,
        "content": "Permite ao usuário fazer a desseleção de todos os itens da lista previamente selecionados.\n\n![Exemplo do modo de seleção do multiselect](imagens/select-multiselect.png)\n*À esquerda, exemplo do componente multiselect com todos os itens selecionados, ao centro com alguns itens selecionados e à direita com todos os itens desselecionados.*"
      },
      {
        "title": "5. Ícone Search (Opcional)",
        "level": 3,
        "content": "O uso do ícone *search* é por padrão exibido nos componentes *select* e *multiselect*, no entanto o seu uso *não é obrigatório*. Em determinadas situações, onde as informações textuais são muito reduzidas, por exemplo, o ícone *search* poderá ser retirado.\n\n![Exemplo da extração do ícone search nos componentes select e multiselect](imagens/select-removed-icon.png)\n*Exemplo da retirada do ícone search em um componente select para uma melhor adequação de espaço.*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "O componente pode ser do tipo:\n\n- *Select*;\n- *Multiselect*."
      },
      {
        "title": "1. Tipo select",
        "level": 3,
        "content": "O tipo *select* é utilizado para as opções de seleção única. O item selecionado será apresentado no \"Campo de Entrada de Texto\" seguindo as diretrizes do componente *input*.\n\n![Exemplo de uso do select.](imagens/select-type-select.png)\n*Exemplo de uso do componente select.*"
      },
      {
        "title": "2. Tipo multiselect",
        "level": 3,
        "content": "Caso seja necessário oferecer múltiplas seleções, deve-se utilizar o tipo *multiselect*. As opções selecionadas serão apresentadas no \"Campo de Entrada de Texto\", seguindo as diretrizes de exibição do componente *input*.\n\n![Exemplo multiselect](imagens/select-type-multiselect.png)\n*Exemplo de uso do componente multiselect.*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Seleção dos itens",
        "level": 3,
        "content": "Ao selecionar os itens no componente *select* e *multiselect*, o usuário terá essa informação visível no campo campo de entrada, conforme a sequência de cada tipo abaixo:"
      },
      {
        "title": "Seleção de itens no select",
        "level": 4,
        "content": "1. O *placeholder* exibe a informação inicial;\n2. O usuário seleciona o item;\n3. O campo de entrada exibe a opção selecionada.\n\n![Exemplo do comportamento de seleção de um item do select.](imagens/select-placeholder.png)\n*Exemplo do comportamento de seleção de um item do select.*"
      },
      {
        "title": "Seleção de itens no multiselect",
        "level": 4,
        "content": "1. O *placeholder* exibe a informação inicial;\n2. O usuário seleciona os itens;\n3. O campo de entrada exibe as opções selecionadas em tempo real;\n4. O campo de entrada exibe as opções escolhidas.\n\n![Exemplo do comportamento de seleção de vários itens do multiselect.](imagens/select-placeholder-multiselect.png)\n*Exemplo do comportamento de seleção de vários itens do multiselect.*\n\n**Importante:** observe que no passo 3 e 4 o campo de entrada só exibe quantos itens couberem dentro do campo *input* e o restante será acrescentado em forma de quantidade ao final do texto."
      },
      {
        "title": "Seleção de todos os itens no multiselect",
        "level": 4,
        "content": "O usuário poderá selecionar ou desselecionar todos os itens da lista ao mesmo tempo. Esta opção é disponível no primeiro item da lista de forma destacada.\n\nAo clicar no *checkbox* deste primeiro item, todos os itens da lista serão selecionados. Caso o usuário desmarque o *checkbox* do primeiro item, todos os itens da lista serão desselecionados.\n\nO rótulo deste item alternará entre \"Selecionar Todos\" e \"Desselecionar Todos\" conforme o usuário marque ou desmarque o primeiro item da lista. Observe o exemplo abaixo:\n\n1. Os itens estão todos desselecionados;\n2. A lista foi totalmente selecionada através do primeiro item da lista.\n\n![Exemplo do comportamento de seleção de todos os itens no multiselect.](imagens/select-behaviour-selected-all.png)\n*Exemplo do comportamento de seleção de todos os itens no tipo multiselect.*"
      },
      {
        "title": "2. Abertura do select e multiselect",
        "level": 3,
        "content": "Para abrir o componente *select* ou *multiselect* o usuário poderá clicar em toda a extensão no campo *input*. Observe abaixo:\n\n![Exemplo de abertura dos itens do select.](imagens/select-behaviour-select-click-open.png)\n*Exemplo do comportamento de abertura dos itens do select nos estados interativo à esquerda, estado hover no centro e estado pressionado à direita.*\n\n![Exemplo de abertura dos itens do multiselect.](imagens/select-behaviour-multiselect-click-open.png)\n*Exemplo do comportamento de abertura dos itens do multiselect nos estados interativo à esquerda, estado hover no centro e estado pressionado à direita.*\n\n**Importante:** Não havendo espaço disponível para visualizar a abertura devido aos limites da tela, os itens do \"Componente *list*\" deverão ser reposicionado em uma outra direção, garantindo uma melhor adequação ao layout apresentado. Para maiores informações consultar o tópico *\"Posicionamento\"* no documento Padrão [*Dropdown*](/ds/padroes/design/dropdown)."
      },
      {
        "title": "3. Responsividade",
        "level": 3,
        "content": "Nas *grids* de 12 e 8 colunas o tamanho do *select* e *multiselect* será ajustado conforme o seu conteúdo interno, respeitando os tamanhos mínimos e máximos."
      },
      {
        "title": "Grid de 12 colunas",
        "level": 4,
        "content": "![Responsividade do componente select em grid de 12 colunas](imagens/select-behavior-responsive-grid-12-col.png)\n*Responsividade do componente select em grid de 12 colunas*"
      },
      {
        "title": "Grid de 8 Colunas",
        "level": 4,
        "content": "![Responsividade do componente select em grid de 8 colunas](imagens/select-behavior-responsive-grid-8-col.png)\n*Responsividade do componente select em grid de 8 colunas*"
      },
      {
        "title": "Grid de 4 Colunas",
        "level": 4,
        "content": "Na *grid* de 4 colunas, os componentes *select* e *Multiselect* ocuparão toda largura da tela, respeitando as margens laterais da *grid*.\n\n![Responsividade do componente select em grid de 4 colunas](imagens/select-behavior-responsive-grid-4-col.png)\n*Responsividade do componente select em grid de 4 colunas*"
      },
      {
        "title": "4. Estados",
        "level": 3,
        "content": "Os componentes *select* e *multiselect* seguirão o padrão de diretrizes para estados, conforme observado abaixo:"
      },
      {
        "title": "Estado Padrão",
        "level": 4,
        "content": "No estado padrão o campo *input* e os itens da *list* apresentam-se em suas formas naturais.\n\n![Exemplo de estado interativo.](imagens/select-behaviour-state-interative.png)\n*Exemplo de estado interativo no select.*"
      },
      {
        "title": "Estado Foco",
        "level": 4,
        "content": "O estado foco ocorre sobre o campo *input* quando o usuário clicar sobre ele ou sobre o botão terciário.\n\n![Exemplo de estado foco.](imagens/select-behaviour-state-foco.png)\n*Exemplo de estado foco no select.*"
      },
      {
        "title": "Estado Hover",
        "level": 4,
        "content": "O estado *hover* ocorre sobre o item da *list* quando o usuário direcionar o *mouse* sobre ele.\n\n![Exemplo de estado hover.](imagens/select-behaviour-state-hover.png)\n*Exemplo de estado hover no select.*"
      },
      {
        "title": "Estado Selecionado",
        "level": 4,
        "content": "O estado selecionado ocorre quando algum(ns) item(ns) da *list* estiver(em) selecionado(s).\n\n![Exemplo de estado selecionado.](imagens/select-behaviour-state-intermediary.png)\n*Exemplo de estado selecionado no select.*\n\n**OBS:** Se todos os itens não estiverem selecionados, o componente *select* também poderá se enquadrar no estado intermediário."
      },
      {
        "title": "5. Dimensões mínimas e máximas",
        "level": 3,
        "content": ""
      },
      {
        "title": "Larguras do select e multiselect",
        "level": 4,
        "content": "Os componentes *select* e *multiselect* têm as larguras ajustadas conforme o conteúdo interno dos seus itens. Porém, devem ser respeitadas as larguras mínimas e máximas para estes elementos. Observe a seguir:\n\n![Exemplo de larguras do componente select.](imagens/select-behavior-size.png)\n*Exemplo de largura do componente select.*"
      },
      {
        "title": "Largura Mínima",
        "level": 4,
        "content": "Sempre que possível, deve-se evitar que a largura do *select* seja muito reduzida, dificultando a leitura e entendimento das informações. Recomendamos que a largura mínima não seja inferior a 64px.\n\n![Exemplos de larguras mínimas recomendáveis e não recomendáveis.](imagens/select-behavior-size-1.png)\n*Exemplos de larguras mínimas recomendáveis à esquerda, onde os textos estão bem ajustados e à direita exemplos selects com parte dos seus textos ocultados.*\n\n**OBS:** Em situações onde os textos do input ou dos itens do select forem muito extensos, estes deverão ser diagramados como informado no tópico **\"Comportamento\"**, seção **\"Ajustes textuais no select\"**."
      },
      {
        "title": "Largura Máxima",
        "level": 4,
        "content": "Não há obrigatoriedade para definição de uma largura máxima. Recomendamos que a largura escolhida, respeite as especificações da *grid* do dispositivo, onde o layout de tela esteja sendo apresentado. Para maiores informações consultar a documentação do sistema de *grid*."
      },
      {
        "title": "Altura Máxima",
        "level": 4,
        "content": "A altura máxima para o *select* e *multiselect* é correspondente à quantidade de itens em cada um:\n\n- *Select*: dez itens;\n- *Multiselect*: nove itens.\n\nQuando a quantidade de itens for superior, deverá ser utilizada uma barra de rolagem para visualização dos demais itens. Por exemplo, se o *select* possuir cem itens, ficarão visíveis apenas dez, e o restante será visível apenas por meio de rolagem.\n\n![Exemplo de altura máxima do componente select.](imagens/select-behaviour-max-height.png)\n*Exemplo de altura máxima do componente select.*"
      },
      {
        "title": "6. Ajustes textuais no select",
        "level": 3,
        "content": ""
      },
      {
        "title": "Ajustes textuais na área do input",
        "level": 4,
        "content": "Sempre que a largura da área do campo de entrada for menor que o texto principal do item selecionado, deve-se seguir as seguintes recomendações:\n\n1. Quando o item selecionado tiver um texto extenso e maior que a largura da área do campo de entrada do input, as últimas letras ou palavras poderão ser ocultadas, exibindo no final do campo o símbolo de *\"reticências\" (...)*, indicando que existe mais palavras excedentes. **OBS:** O texto completo poderá ser exibido através do uso de *tooltip*.\n   ![Exemplos de ajustes textuais no campo de entrada do input.](imagens/select-behavior-text-size01.png)\n   *Exemplos de ajustes textuais no campo de entrada do input.*\n\n2. Quando houver mais de um item selecionado, as informações apresentadas no campo de entrada deverá conter o texto do primeiro item selecionado, o sinal de *\"mais\" (+)* acrescido do *\"somatório dos itens restantes entre parênteses ( )\"*. Ex.: texto do primeiro item + (nº de itens restantes).\n   ![Exemplos de ajustes textuais no campo de entrada do input.](imagens/select-behavior-text-size02.png)\n   *Exemplos de ajustes textuais no campo de entrada do input.*\n\n3. Em situações em que, além da extensão dos textos, houver mais de um item selecionado, as informações exibidas na área do campo do input agrupará as boas práticas descritas no tópico 1 e 2. Ver exemplo abaixo:\n   ![Exemplos de ajustes textuais no campo de entrada do input.](imagens/select-behavior-text-size03.png)\n   *Exemplos de ajustes textuais no campo de entrada do input.*"
      },
      {
        "title": "Ajustes nos itens do select",
        "level": 4,
        "content": "Quando o texto dos itens for maior que a largura do componente, poderá ocorrer a quebra de linha . Porém recomenda-se evitar sempre que possível esta situação. Observe o modelo abaixo:\n\n1. Texto excedendo a largura do item.\n\n![Exemplos de largura máxima do select e do multiselect.](imagens/select-behavior-size-2.png)\n*Exemplos de largura máxima do select e do multiselect.*\n\n**Atenção:** de modo geral, deve-se prezar pelo uso de textos curtos e objetivos no *select* e no *multiselect*. Quando for de extrema necessidade, utiliza-se a quebra de linha dentro o item."
      },
      {
        "title": "7. Feedback após pesquisa",
        "level": 3,
        "content": "Quando o usuário optar por utilizar a função de pesquisa e não for localizado o item procurado, o componente *input* deverá exibir, logo abaixo, uma mensagem de *feedback* do tipo \"Empty State\", onde será apresentada uma sugestão ou resposta visual para a informação pesquisada.\n![Exemplo de mensagem de feedback do tipo empty state](imagens/select-feedback-search.png)\n*Exemplo de mensagem de feedback do tipo empty state.*"
      },
      {
        "title": "8. Filtro no select e multiselect",
        "level": 3,
        "content": "Para facilitar o processo de encontrar os itens na lista, tanto o *select* quanto o *multiselect* possuem a função de filtro, permitindo que o usuário digite o texto no campo *input* e, de forma dinâmica, atualizando a lista *dropdown* apenas com os itens que possuem os mesmo caracteres que estão sendo digitados naquele momento. Observe o exemplo abaixo:\n\n1. A lista contém diversas palavras;\n2. O usuário digita o início de uma palavra à sua escolha e a lista será atualizada conforme o texto digitado.\n\n![Exemplo de comportamento de filtragem de itens em um select.](imagens/select-behaviour-filter1.png)\n*Exemplo de comportamento de filtragem de itens em um select.*\n\n![Exemplo de comportamento de filtragem de itens em um multiselect.](imagens/select-behaviour-filter2.png)\n*Exemplo de comportamento de filtragem de itens em um multiselect.*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name                        | Estado  | Ícone                             | Class (Font Awesome) |\n| --------------------------- | ------- | --------------------------------- | :------------------: |\n| Ícone - componente *button* | Fechado | <i class=\"fas fa-caret-down\"></i> |   `fa-caret-down`    |\n| Ícone - componente *button* | Aberto  | <i class=\"fas fa-caret-up\"></i>   |    `fa-caret-up`     |\n| Ícone - *Search*            | -       | <i class=\"fas fa-search\"></i>     |     `fa-search`      |"
      },
      {
        "title": "Opacidade",
        "level": 3,
        "content": "| Name             | Cor                   |     Opacity Value      |\n| ---------------- | --------------------- | :--------------------: |\n| Selecionar Todos | `--red-warm-vivid-50` | `--surface-opacity-xs` |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name               | Property      |           Token           |\n| ------------------ | ------------- | :-----------------------: |\n| Componente *Input* | margin-bottom |  `--spacing-scale-base`   |\n| Selecionar Todos   | margin-top    |  `--spacing-scale-base`   |\n| Componente *List*  | margin-top    | `--spacing-scale-default` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name              |        Font-Weight        |\n| ----------------- | :-----------------------: |\n| Componente *List* |  `--font-weight-regular`  |\n| Selecionar Todos  | `--font-weight-semi-bold` |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name                               | Width      | Max-Width | Min-Width | Height |\n| ---------------------------------- | ---------- | --------- | --------- | :----: |\n| Componente *Input* - *Select*      | `variável` | `400px`   | `100px`   | `40px` |\n| Componente *Input* - *Multiselect* | `variável` | `400px`   | `200px`   | `40px` |\n| Item *List* - *Select*             | `variável` | `400px`   | `100px`   | `56px` |\n| Item *List* - *Multiselect*        | `variável` | `400px`   | `200px`   | `56px` |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "| Name       |        Shadow         |\n| ---------- | :-------------------: |\n| Superfície | `--surface-shadow-md` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- O componente *select* deve ser acessado via navegação por teclado por meio da tecla `Tab`;\n\n- Quando o foco estiver sobre o *select*, o mesmo deve ser acionado e exibir a lista de itens;\n\n- Após aberta a lista de itens, o usuário deve conseguir navegar através dela por meio das teclas de seta `Up` e `Down`;\n\n- Os usuários poderão filtrar a lista de opções digitando a letra inicial da palavra buscada, e navegar da mesma forma através da lista filtrada por meio das teclas de seta `Up` e `Down`;\n\n- Após encontrar o item desejado, o usuário pode selecioná-lo por meio da tecla `Space` ou `Enter`, recolhendo o componente *select* com a opção desejada;\n\n- O *select* pode ser recolhido por meio da tecla `Esc`, sem selecionar qualquer item de opção."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Disponibilize um rótulo claro e intuitivo para o usuário, permitindo que compreendam o propósito do controle;\n\n- Certifique-se de seguir as recomendações de `cores` e `estados` na diretriz do componente, garantindo a qualidade de contraste e legibilidade para usuários com baixa visão."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Associe o *select* a uma *tag* `<label>`. Isso ajuda a garantir que os usuários com leitores de tela possam entender o objetivo deste componente;\n\n- Caso não haja um rótulo visual associado ao *select*, use o atributo `aria-label` para fornecer um nome descritivo com a explicação do propósito;\n\n- O *select* pode ser marcado como obrigatório através do `aria-required=\"true\"`;\n\n- Recomenda-se utilizar um nome acessível na lista de opções, diferente de seu valor, para os usuários de tecnologia assistiva;\n\n- Caso seja necessário, use o atributo `aria-describedby` para vincular a um elemento de ajuda ou instrução e fornecer informações adicionais aos usuários que podem precisar de mais contexto."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/select/accessibility)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/select/select.md",
      "accessibilityPath": "ds/componentes/select/select-access.md"
    }
  },
  {
    "name": "Sign-in",
    "slug": "signin",
    "description": "*Sign-in* é um botão que envia um ID de *login* do usuário e senha ao servidor para autenticação e é utilizado para direcionar o usuário a uma área de confirmação de acesso que utiliza dados do usuário previamente cadastrados.",
    "documentationUrl": "https://www.gov.br/ds/components/signin",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo componente sign-in.](imagens/anatomy-1.png)\n*Exemplo do componente sign-in nas versões principal e alternativa*\n\nUtilizado quando se deseja saber quem é o usuário ativo para fornecer conteúdo personalizado ou oportunidades para realizar uma compra.\n\nQuando utilizar:\n\n- Quando existir a necessidade de restringir o acesso a determinado conteúdo;\n- Quando houver a necessidade de controlar quais usuários têm acesso a um determinado conteúdo;\n- Quando houver informações contextuais a serem apresentadas ao usuário. O contexto pode depender da geografia, fuso horário, idade, interesses ou mesmo das interações anteriores do usuário com o *site* (amigos adicionados, conteúdo enviado etc.);\n- Para proteger as informações do usuário.\n\nO uso desse recurso visa facilitar o acesso por parte dos usuários que possuem um cadastro prévio em seu banco de dados, facilitando seu acesso em outros *websites* e sistemas. Atualmente essa funcionalidade é muito utilizada, por exemplo, como *login* de acesso rápido, fazendo uso das informações de perfis já cadastrados nas redes sociais.\n\n**Atenção:** grande parte dos *sites* e sistemas que utilizam esse recurso, também oferecem a opção de cadastro tradicional, em que o usuário pode preencher seus dados manualmente, aumentando as chances de que ele siga em frente caso não se sinta confortável com o recurso. Aqueles usuários que já possuem cadastro em um *site* anteriormente à implantação do *sign-in* também podem sincronizar as contas, evitando retrabalhos e o gerenciamento de *logins* diferentes."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *sign-in* é composto basicamente por ícone ou imagem e *label*. É importante notar que os elementos que o compõe, geralmente se repete nas versões e variações de tamanho, podendo assumir outras formas dependendo do tipo escolhido ou da resolução da tela.\n\nSegue a estrutura básica da anatomia:\n\n| ID  | Nome          |                          Referência                           | Uso         |\n| --- | ------------- | :-----------------------------------------------------------: | ----------- |\n| 1   | Ícone usuário | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Obrigatório |\n| 2   | Rótulo        |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Obrigatório |\n| 3   | Imagem        |                              ---                              | Opcional    |\n| 4   | Superfície    |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n\n![Anatomia do componente sign-in.](imagens/anatomy-2.png)\n*Anatomia do componente sign-in*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": "![Exemplos do componente sign-in.](imagens/anatomy-details.png)\n*Exemplos do componente sign-in*"
      },
      {
        "title": "1. Ícone Usuário (Obrigatório)",
        "level": 4,
        "content": "Se fará o uso do ícone de usuário, que deverá ser localizado à esquerda do rótulo, diferentemente do *sign-in* do tipo externo que não possui ícone e a sua imagem localiza-se à direita do rótulo. No formato circular, é possível utilizar apenas o ícone."
      },
      {
        "title": "2. Rótulo (Obrigatório)",
        "level": 4,
        "content": "Haverá variação do tamanho dos *labels*, de acordo com a variação das densidades dos *sign-ins* desenvolvidos já definidos na área de *tokens*.\n\nOs textos utilizados no *label* devem seguir os valores de fonte, tamanho, espessura e entrelinha definidas na documentação de tipografia."
      },
      {
        "title": "Tamanho dos Rótulos",
        "level": 5,
        "content": "Naturalmente as palavras usadas nos rótulos farão a largura dos *sign-ins* variar bastante de tamanho. O ideal é que sejam utilizadas até três palavras no máximo. Opte por rótulos concisos e diretos.\n\n1. Deve-se evitar o uso excessivo de palavras no rotulo;\n2. Nunca utilizar quebra de linhas nos rótulos do *sign-in*.\n\n![Exemplo do uso de rótulos no componente sign-in.](imagens/signin-label.png)\n*Exemplos de uso de rótulos no componente sign-in*\n\n**Atenção:** caso o texto definido para o *label* do *sign-in* não traduza totalmente o sentido da ação proposta, um texto de apoio deve ser colocado no *title* do elemento e ser exibido utilizando o componente *tooltip*."
      },
      {
        "title": "3. Imagem (Opcional)",
        "level": 4,
        "content": "A área da imagem é destinada à utilização de uma assinatura ou logo institucional. Caso não exista ou opte por não a utilizar, esta área deve ser substituída pelo nome institucional, escrita na mesma tipografia utilizada no rótulo, com a mesma cor, porém, com a espessura da fonte em *(black)*, a fim de garantir maior contraste.\n\n![Exemplo de uso de assinaturas no componente sign-in.](imagens/signin-image.png)\n*Exemplos de uso de assinaturas no componente sign-in*\n\n**Atenção:** as dimensões da assinatura institucional que será utilizada na área da imagem devem seguir as seguintes restrições:\n\n1. A largura escolhida precisa ter valor múltiplo 4px e 8px;\n2. A altura não pode ultrapassar a altura da caixa de texto do rótulo (*label*) já definidas na área de *tokens*;\n3. Na imagem, é recomendada que a altura utilizada para o logo institucional não ultrapasse 20px. Se possível, mantenha a largura da imagem com valores múltiplos de 4px."
      },
      {
        "title": "4. Superfície (Obrigatório)",
        "level": 4,
        "content": "As superfícies do *sign-in* são elementos obrigatórios e podem sofrer variações de largura, respeitando o tamanho do texto designado para o rótulo, além da largura da imagem. As alturas para cada densidade estão designadas na área de *tokens*."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "Existem três tipos de *sign-ins*:"
      },
      {
        "title": "1. Interno",
        "level": 3,
        "content": "Seu uso é exclusivo, interno ao *login* gov.br, evitando uma repetição indevida do logo no *header*."
      },
      {
        "title": "2. Externo",
        "level": 3,
        "content": "Projetado para as demais soluções que utilizam o acesso único gov.br para se autenticarem."
      },
      {
        "title": "3. Icônico",
        "level": 3,
        "content": "Variação circular para ser utilizado apenas com ícones. É comum o uso com redes sociais ou outras possibilidades de acesso alternativo.\n\n![Exemplo de tipos de sign-ins.](imagens/type.png)\n*Exemplos de tipos de sign-ins*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Densidade",
        "level": 3,
        "content": "Para conferir uma maior flexibilidade no uso do componente *sign-in* em diferentes dispositivos e uma melhor adequação visual em tela, é disponibilizada três possibilidades de densidades:\n\n- **Baixa:** densidade sugerida para uso em *layouts* com poucos elementos, facilitando a percepção e aumentando a área de interação.\n\n- **Média:** densidade sugerida para uso na maioria dos casos, sem a necessidade de grandes ajustes.\n\n- **Alta:** densidade sugerida para uso em *layouts* com muitos elementos ou com pouco espaço para diagramação.\n\n![Exemplos de densidades para o sign-in do tipo interno.](imagens/signin-in-behaviour-density.png)\n*Variação das densidades para o sign-in do tipo interno*\n\n![Exemplos de densidades para o sign-in do tipo externo.](imagens/signin-out-behaviour-density.png)\n*Variação das densidades para o sign-in do externo*\n\n![Exemplos de densidades para o sign-in do tipo alternativo.](imagens/signin-circle-behaviour-density.png)\n*Variação das densidades para o sign-in do tipo icônico*"
      },
      {
        "title": "2. Ênfases",
        "level": 3,
        "content": "A escolha da ênfase determinará se o componente terá mais ou menos destaque em relação a outros componentes exibidos na tela.\n\n![Exemplos de ênfases para os tipos de sign-in.](imagens/background.png)\n*Exemplos de ênfases para os tipos de sign-in*\n\nA imagem abaixo ilustra as possibilidades de aplicação em relação ao fundo:\n\n![Possibilidades de aplicação em fundo claro e escuro.](imagens/fundos.png)\n*Possibilidades de aplicação do sign-in em fundo claro e escuro*"
      },
      {
        "title": "3. Bloco",
        "level": 3,
        "content": "Assim como os *buttons*, o componente *sign-in* padrões pode utilizar o comportamento bloco para alterar sua largura, ocupando todo o espaço disponível na superfície (seja dentro de outro componente, como o *header* ou de determinado lugar da *grid*).\n\nNeste comportamento, o *sign-in* “empurra” qualquer outro elemento existente para outro espaço disponível.\n\nO conteúdo deve permanecer sempre centralizado. Veja o exemplo:\n\n![Exemplo do componente sign-in aplicado em uma grid de quatro colunas.](imagens/signin-behaviour-position.png)\n*Exemplo do componente sign-in aplicado em uma grid de 4 colunas*\n\n**Atenção:** observamos esse comportamento com mais frequência nas *grids* de 4 colunas."
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "Visando reduzir possíveis obstáculos na utilização do componente *sign-in* em diferentes tipos de telas, densidades e dispositivos móveis, seguem algumas sugestões de melhores práticas de uso:"
      },
      {
        "title": "Sign-in Web - Autenticação Inicial",
        "level": 3,
        "content": "- Mantenha o *sign-in* sempre próximo aos *inputs* de entrada de texto nas opções de cadastro, mesmo quando utilizado em conjunto com outros métodos de *logins* alternativos, como *logins* de redes sociais, por exemplo.\n- É importante sempre deixar disponíveis as opções de acesso às dúvidas frequentes, de criação de cadastro e de recuperação de *login* e senha.\n- Toda vez que o componente *sign-in* for acessado, o sistema deve oferecer imediatamente alguma forma de *feedback* de interação, melhorando a experiência do usuário e dando-lhe algum tipo de retorno do sistema.\n- É importante certificar-se de que os usuários possam navegar e interagir pela(s) página(s) de acesso do *sign-in* utilizando apenas o teclado. Use as marcações apropriadas para designar a região de *login* e permitir que os leitores de tela \"pulem\" diretamente para os campos de entrada.\n- Apresente, sempre que possível, opções variadas de cadastro e acesso, tais como: validação facial; validação via impressão digital; número de CPF e senha; dados de acesso via *Internet Banking*; certificado digital de Pessoas Físicas ou Jurídicas e Certificado Digital em Nuvem."
      },
      {
        "title": "Sign-in Mobile - Autenticação Inicial (Usuário Anônimo)",
        "level": 3,
        "content": "- Garanta informações textuais concisas, tanto para o *label* quanto para a tela, além de apresentar uma linguagem de fácil compreensão, reduzindo a carga cognitiva e facilitando ao máximo a compreensão das ações a serem tomadas pelo usuário.\n- Em suas dimensões, a largura do componente deve sempre se ajustar a *grid* de 4 colunas, como mostrado no tópico \"responsividade˜.\n- Uma forma de otimizar a interação é colocar o *sign-in* no meio ou na parte de baixo da tela, em uma área de fácil acesso aos dedos dos usuários, minimizando o esforço para executar esta ação e deixando o processo mais fluido, independentemente de fazê-lo com a mão direita ou esquerda.\n- O *sign-in* deve estar na sua versão de baixa densidade, atendendo ao problema da falta de acuracidade das mãos, pois possui uma maior área de toque, reduzindo as chances de erro do usuário.\n- Mantenha o *sign-in* sempre próximo dos campos de *input* de entrada de texto nas opções de cadastro, mesmo quando utilizado em conjunto com outros métodos *logins* alternativos, como *logins* de redes sociais, por exemplo.\n- É importante sempre disponibilizar as opções de acesso às dúvidas frequentes, de criação de cadastro e de recuperação de *login* e senha.\n- Toda vez que o componente *sign-in* for acessado, o sistema deve oferecer alguma forma de *feedback* de interação apropriada imediatamente, melhorando a experiência do usuário e dando-lhe algum tipo de retorno do sistema.\n- Apresente, sempre que possível, opções variadas de cadastro e acesso, tais como: validação facial; validação via impressão digital; número de CPF e Senha; dados de acesso via Internet Banking; certificado digital de Pessoas Físicas ou Jurídicas e Certificado Digital em Nuvem.\n\nTodos esses pontos são importantes na busca de clareza e facilidade de uso."
      },
      {
        "title": "Sign-in Web e Mobile - Confirmação de Acesso (Usuário Logado)",
        "level": 4,
        "content": "Após a autenticação, o usuário será redirecionado à página inicial do sistema solicitado já autenticado, confirmando o seu acesso. Podendo gerenciar seus dados ou realizar *logout* (sair) do serviço por meio do menu oculto ao lado do avatar no *header* da versão *web* ou no menu principal na versão *mobile*.\n\n![Exemplo de localização para acesso de logout.](imagens/useroptions.png)\n*Exemplo de localização do acesso para realização de logout*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name   | Size                     | Weight               | Text-transform |\n| ------ | ------------------------ | -------------------- | :------------: |\n| Rótulo | `--font-size-scale-base` | `--font-weight-bold` |     `none`     |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name          |            Icon             | Size             | Class (Font Awesome) |\n| ------------- | :-------------------------: | ---------------- | :------------------: |\n| Ícone Usuário | <i class=\"fas fa-user\"></i> | `--icon-size-sm` |       fa-user        |"
      },
      {
        "title": "Cores (ênfase primária - fundo claro)",
        "level": 3,
        "content": "| Name          | Property         | Color Token            |\n| ------------- | ---------------- | ---------------------- |\n| Ícone Usuário | color            | `--gray-2`             |\n| Rótulo        | color            | `--gray-2`             |\n| Imagem        | color            | `--gray-2`             |\n| Superfície    | background color | `--blue-warm-vivid-70` |"
      },
      {
        "title": "Cores (ênfase primária - fundo escuro)",
        "level": 3,
        "content": "| Name          | Property         | Color Token            |\n| ------------- | ---------------- | ---------------------- |\n| Ícone Usuário | color            | `--blue-warm-vivid-90` |\n| Rótulo        | color            | `--blue-warm-vivid-90` |\n| Imagem        | color            | `--blue-warm-vivid-90` |\n| Superfície    | background color | `--blue-warm-20`       |"
      },
      {
        "title": "Cores (ênfase secundária - fundo claro)",
        "level": 3,
        "content": "| Name          | Property         | Color Token            |\n| ------------- | ---------------- | ---------------------- |\n| Ícone Usuário | color            | `--blue-warm-vivid-70` |\n| Rótulo        | color            | `--blue-warm-vivid-70` |\n| Imagem        | color            | `--blue-warm-vivid-70` |\n| Superfície    | background color | `--gray-2`             |"
      },
      {
        "title": "Cores (ênfase secundária - fundo escuro)",
        "level": 3,
        "content": "| Name          | Property         | Color Token            |\n| ------------- | ---------------- | ---------------------- |\n| Ícone Usuário | color            | `--blue-warm-20`       |\n| Rótulo        | color            | `--blue-warm-20`       |\n| Imagem        | color            | `--blue-warm-20`       |\n| Superfície    | background color | `--blue-warm-vivid-90` |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name       | Densidade |   Height   |   Width    |\n| ---------- | --------- | :--------: | :--------: |\n| Superfície | Alta      |   `32px`   | `variável` |\n| Superfície | Média     |   `40px`   | `variável` |\n| Superfície | Baixa     |   `48px`   | `variável` |\n| Imagem     | Todas     | `max 20px` | `variável` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name            |    Padding-right     | Margin-left            |\n| --------------- | :------------------: | ---------------------- |\n| Superfície      | `--spacing-scale-2x` | `--spacing-scale-2x`   |\n| (Rótulo+Imagem) |          -           | `--spacing-scale-half` |"
      },
      {
        "title": "Alinhamento",
        "level": 4,
        "content": "| Name            | Value                         | Property |\n| --------------- | ----------------------------- | -------- |\n| (Ícone+Rótulo)  | `--spacing-vertical-center`   | Center   |\n| (Ícone+Rótulo)  | `--spacing-horizontal-center` | Center   |\n| (Rótulo+Imagem) | `--spacing-vertical-center`   | Center   |\n| (Rótulo+Imagem) | `--spacing-horizontal-center` | Center   |"
      },
      {
        "title": "Arredondamento",
        "level": 3,
        "content": "| Name       | Densidade | Property      | Value  |\n| ---------- | --------- | ------------- | ------ |\n| Superfície | Alta      | border-radius | `16px` |\n| Superfície | Padrão    | border-radius | `20px` |\n| Superfície | Baixa     | border-radius | `24px` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- É recomendado que os botões *sign-in* possam ser acessados via navegação por teclado através da tecla `Tab` e possam ser acionados por meio da tecla `Space` ou `Enter`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Verifique o uso das cores em `cor de superfície` e `cor de leitura` no botão *sign-in* se correspondem às recomendadas na diretriz de design, garantindo um contraste de cores adequado para uma boa acessibilidade;\n\n- Quando utilizar botões *sign-in* com apenas ícones, certifique-se de exibir a informação do rótulo através de um *tooltip*, ao passar o mouse ou focar nele;\n\n- Em dispositivos mobile utilize ícones fortemente semânticos, aqueles que tragam um entendimento imediato aos usuários. Como estes dispositivos não possuem o recurso de *tooltip* com uso do *hover*, o uso de ícones mais conhecidos pode amenizar esta limitação;\n\n- Em dispositivos mobile certifique-se de projetar a interface com elementos interativos que possuam área mínima de toque de `44px`."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Recomenda-se utilizar a *tag* `<button>` como marcação semântica para construção do componente *sign-in*, apesar de existirem alternativas como `<a>` ou `<input type=\"button\">`;\n\n- Mantenha **sempre** habilitado o estado foco na configuração do navegador para os elementos focados exibirem os recursos visuais próprios do estado;\n\n- Caso seja utilizado um ícone decorativo, aquele que é usado como apoio ao lado rótulo do botão *sign-in*, utilize `aria-hidden=true` e não utilize atributo `title`, evitando que os leitores de tela leiam duas vezes a mesma informação;\n\n- Ao utilizar botões *sign-in* com apenas ícones, certifique-se de usar os atributos `title` ou `aria-label`;\n\n- Caso sejam utilizados *links* `<a>` com formato de botão, recomenda-se configurá-los para aceitar a tecla `Space` como acionadora, visto que os *links* são ativados por padrão pela tecla `Enter`."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Guia WCAG](https://guia-wcag.com/)\n- [Mayflower Design System](https://mayflower.digital.mass.gov/core/index.html?path=/docs/elements-buttons--button-primary)\n- [Carbon Design System](https://carbondesignsystem.com/components/button/accessibility)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/button/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/signin/signin.md",
      "accessibilityPath": "ds/componentes/signin/signin-access.md"
    }
  },
  {
    "name": "Skip Link",
    "slug": "skiplink",
    "description": "O componente *skip link* consiste em uma lista de itens que auxiliam os usuários a navegarem por uma página com o auxílio do teclado, sendo extremamente útil ou até mesmo indispensável para aqueles que dependem do teclado para a navegação.",
    "documentationUrl": "https://www.gov.br/ds/components/skiplink",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de skip link.](imagens/skiplink.png)\n*Exemplo de skip links*\n\nUtilize o componente *skip link* em todas as páginas do seu *site* para torná-las mais acessíveis aos usuários que navegam utilizando o teclado."
      },
      {
        "title": "Tom e Voz",
        "level": 2,
        "content": "Utilize *labels* com textos curtos e diretos."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *skip link* é composto pelos seguintes elementos:\n\n| ID  | Nome       |                         Referência                          | Uso         |\n| --- | ---------- | :---------------------------------------------------------: | ----------- |\n| 1   | Superfície | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n| 2   | Item       |     [Componente Item](/ds/components/item?tab=designer)     | Obrigatório |\n| 3   | *Tag*      |      [Componente Tag](/ds/components/tag?tab=designer)      | Opcional    |\n| 4   | Rótulo     | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Obrigatório |\n\n![Anatomia do skip link.](imagens/anatomy.png)\n*Anatomia do skip link*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Superfície (Obrigatório)",
        "level": 4,
        "content": "A superfície é a área onde são organizados os componentes. A diagramação dos componentes dentro dessa área é livre, porém, deve-se levar em conta as características de cada componente."
      },
      {
        "title": "2. Item (Obrigatório)",
        "level": 4,
        "content": "O *skip link* é formado por uma lista de itens. São eles que fornecem atalhos para navegação via teclado e com isso, evitam que o usuário necessite navegar por todos os elementos interativos da tela podendo ir diretamente para uma seção específica."
      },
      {
        "title": "3. Tag (Opcional)",
        "level": 4,
        "content": "Pode-se utilizar dentro do *item* uma *tag* do tipo texto, com o número da tecla correspondente ao *link*, tornando o processo mais visual, porém, o mais importante, é que o leitor de telas interprete o número indicado e o usuário possa por meio das teclas numéricas navegar diretamente para a seção desejada."
      },
      {
        "title": "4. Rótulo (Obrigatório)",
        "level": 4,
        "content": "É um elemento de descrição textual que apresenta formatação específica e tem por finalidade nomear cada item da lista."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "O componente *skip link* pode ser simples ou composto e deve ser utilizado de acordo com a necessidade de cada projeto."
      },
      {
        "title": "1. Simples",
        "level": 3,
        "content": "É apresentado apenas uma opção de item por vez. Ocupa menos espaço em tela e funciona melhor em resoluções menores.\n\n![Tipo simples.](imagens/tipo-simples.png)\n*Skip link tipo simples*\n\nO tipo simples deve ter suas dimensões fixas, baseadas no item de maior dimensão.\n\n**Atenção:** ao navegar com a tecla *TAB* as opções de itens de atalho devem ser apresentadas na mesma posição do item anterior.\n\nComo só é apresentado um item por vez, é recomendável acrescentar no *label* a informação de quantos itens estão disponíveis no componente. Para isso, utilize a notação (1/4), (2/4), (3/4), (4/4) e assim por diante."
      },
      {
        "title": "2. Composto",
        "level": 3,
        "content": "O tipo composto, ao contrário do tipo simples, apresenta simultaneamente todas a opções da lista.\n\nUtilize no máximo quatro itens. Se houver necessidade de uma quantidade maior é recomendável utilizar o tipo simples descrito anteriormente.\n\n![Tipo composto.](imagens/tipo-composto.png)\n*Skip link tipo composto*\n\nO tipo composto apresenta apenas a altura fixa. As larguras variam de acordo com o tamanho de cada conteúdo (*label*)."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": "Algumas pessoas utilizam a tecla *TAB* para navegação por *hyperlinks* e elementos de formulário em uma página *web*. Incluir o componente *skip link* oferece aos usuários uma opção de ignorar os *hyperlinks* de navegação de nível superior (menu principal) e saltar para o conteúdo principal ou qualquer outra seção de seu interesse no *site*. Portanto, é muito útil para aqueles que preferem utilizar o teclado como forma padrão de navegação, além de indispensáveis para aqueles que possuem algum tipo de deficiência visual sendo dependentes de leitor de telas.\n\nO componente *skip link* se encontra visualmente oculto até que a tecla *TAB* seja pressionada e, então, é disponibilizado para que o usuário possa navegar pelos seus itens via teclado, indo diretamente para a seção de seu interesse. Ao sair do *skip link* ele deve voltar ao estado oculto.\n\nO atalho *CTRL+TAB* permite que a navegação seja feita no sentido oposto.\n\n**Atenção:** sempre que possível, divida as áreas mais importantes de seu *site* em blocos de informações que façam sentido, por exemplo: menu principal, conteúdo, rodapé, etc. O *skip link* deve dirigir o usuário para cada um desses blocos de informação."
      },
      {
        "title": "Estados",
        "level": 3,
        "content": "O componente *skip link* apresenta os seguintes estados:\n\n![Estados do skip link.](imagens/estados.png)\n*Possíveis estados do skip link*\n\n**Atenção:** jamais utilize o estado desabilitado no componente *skip link*."
      },
      {
        "title": "Melhores práticas",
        "level": 2,
        "content": "- *Skip links* se tornam essenciais em *sites* com grandes quantidades de informação e menus com muitos itens.\n\n- Os usuários que navegam por auxílio de teclado devem ser capazes de acessar todos os elementos interativos, não apenas a navegação principal ou *hyperlinks*. Isso significa que os elementos do formulário, menus suspensos, botões, caixas de diálogo e outros *widgets* devem ser acessíveis por meio de tabulação na interface. Este componente deve estar logo após a *tag body* (deve ser a primeira coisa que um usuário de teclado acessaria em sua página).\n\n- Existem milhares de pessoas no mundo com algum tipo de deficiência. Ao possibilitar que naveguem em seu *site* por meio do *skip link* aumentará a visibilidade, a acessibilidade e atenderá a um maior número de usuários.\n\n- Lembre-se que a acessibilidade é também um fator muito importante para ranqueamento do Google.\n\n- Implementar o *skip links* em seu *site* demonstra que seu serviço se preocupa com a inclusão, ajudando a conquistar novos potenciais clientes."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Alinhamentos",
        "level": 3,
        "content": "| Name      | Property |        Spacing Token        |\n| --------- | -------- | :-------------------------: |\n| Rótulo    | Align    | `--spacing-vertical-center` |\n| Tag       | Align    | `--spacing-vertical-center` |\n| Skip link | Align    | `--spacing-horizontal-left` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name          | Property           |        Token/Value        |\n| ------------- | ------------------ | :-----------------------: |\n| Item          | padding-top/bottom |  `--spacing-scale-baseh`  |\n| Item          | padding-left/right |   `--spacing-scale-2x`    |\n| Entre os item | spacing            | `--spacing-scale-default` |\n| Skip link     | spacing            |  `--spacing-scale-half`   |\n| Skip link     | spacing            |  `--spacing-scale-half`   |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name | Property |     Token/Value      |\n| ---- | -------- | :------------------: |\n| Item | width    |      `variável`      |\n| Item | height   | `--spacing-scale-7x` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name   | Property | Token/Value               |\n| ------ | -------- | ------------------------- |\n| Rótulo | size     | `--font-size-scale-up-01` |\n| Rótulo | weight   | `--font-weight-semi-bold` |"
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name   | Property   | Color Token            |\n| ------ | ---------- | ---------------------- |\n| Item   | background | `--pure-0`             |\n| Rótulo | text       | `--blue-warm-vivid-70` |\n| Tag    | background | `--blue-warm-vivid-70` |"
      },
      {
        "title": "Elevação",
        "level": 3,
        "content": "| Name |   Elevation Token   |\n| ---- | :-----------------: |\n| Item | `--z-index-layer-4` |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "| Name |     Shadow Token      |\n| ---- | :-------------------: |\n| Item | `--surface-offset-xl` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- *Skip link* é fundamental para os usuários que não utilizam o *mouse* para a navegação, portanto, certifique-se de testar seu funcionamento pelo teclado e se os *links* de atalhos estão levando aos destinos corretos;\n\n- O *skip link* deve ser o primeiro elemento a receber o foco na navegação por teclado e deve ser exibido imediatamente para o usuário;\n\n- Por meio da tecla `Tab` o usuário poderá acionar a exibição do *skip link*, assim como navegar pelas suas opções de atalho;\n\n- Para acionar os *links* de atalho, o usuário pode utilizar as teclas `Enter` ou `Space`;\n\n- Utilize a tecla `Esc` para recolher o *skip link*;\n\n- Ao criar teclas de atalho, é importante estar atento ao padrão de combinação de teclas utilizadas nativamente em cada tipo ou versão de navegador."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- O *skip link* deve estar posicionado no topo da página. Esta prática facilita o acesso para usuários de leitores de tela ou teclado e agiliza o fluxo de navegação na busca pelo conteúdo;\n\n- Use uma linguagem descritiva e clara. Evite textos longos ou jargões técnicos. O objetivo é fornecer ao usuário um entendimento rápido e fácil do conteúdo de atalho. Por exemplo: \"Pular para o conteúdo principal\";\n\n- O *skip link* também precisa estar visível para usuários que navegam com *mouse*, pois pode ser útil para os atalhos de navegação."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Os *skip links* são âncoras de navegação que auxiliam os usuários a acessarem diretamente um conteúdo específico na página. Sendo assim, é importante lembrar que toda estrutura da página `HTML` deve ser pensada de forma semântica, usando as marcações recomendadas nas regiões de referência, que serão alvos para os *skip links*. Por exemplo:\n\n  - Use `<header>` para marcação do cabeçalho da página;\n  - Use `<nav>` para marcação da seção de navegação principal da página;\n  - Use `<main>` para marcação da seção principal do conteúdo da página;\n  - Use`<footer>` para marcação do rodapé da página;\n  - Para os links do *skip Link* use a *tag* `<a>`, podendo estruturar um conjunto deles em listas de navegação, com *tags* `<nav>`, `<ul>` e `<li>`, por exemplo."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Acessibilidade Digital - UFRGS](https://www.ufrgs.br/acessibilidadedigital/pular-links/)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/skiplink/skiplink.md",
      "accessibilityPath": "ds/componentes/skiplink/skiplink-access.md"
    }
  },
  {
    "name": "Slider",
    "slug": "slider",
    "description": "*Sliders* são controles deslizantes de entrada de dados que permite ao usuário selecionar um valor limitado por um intervalo.\n\n![Exemplo de componente slider horizontal e vertical.](imagens/diretriz.png)\n*Exemplo do componente slider horizontal e vertical.*\n\nUtilize *sliders* quando:\n\n- *o alcance for mais importante do que a precisão.*\n  Por exemplo, pode ser mais importante para um seletor de preços comunicar onde o preço-alvo está dentro de um determinado intervalo do que o valor exato do produto.\n\n- *quando um valor relativo é mais importante do que um valor exato.*\n  Por exemplo, um controle deslizante de volume é normalmente mais focado no volume relativo da saída do áudio que no nível específico de decibéis.",
    "documentationUrl": "https://www.gov.br/ds/components/slider",
    "sections": [
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome              |                         Referência                          | Uso         |\n| --- | ----------------- | :---------------------------------------------------------: | ----------- |\n| 1   | Trilha            |                             ---                             | Obrigatório |\n| 2   | *Label*           | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 3   | Referências       |                             ---                             | Opcional    |\n| 4   | Alça de Controle  |                             ---                             | Obrigatório |\n| 5   | Etiqueta de Valor |                             ---                             | Opcional    |\n| 6   | Caixa de Entrada  |    [Componente Input](/ds/components/input?tab=designer)    | Opcional    |\n| 7   | Gradações         |                             ---                             | Opcional    |\n\n![Anatomia do componente slider.](imagens/anatomia.png)\n*Anatomia do componente slider.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Trilha (Obrigatório)",
        "level": 3,
        "content": "Trilha é o eixo horizontal ou vertical por onde o usuário desliza a alça de controle.\n\n![Trilhas do slider.](imagens/trilha.png)\n*Trilhas do componente slider.*\n\nÉ importante proporcionar *feedback* visual para o usuário auxiliando-o a visualizar o espaço percorrido pela alça de controle na trilha.\n\n![Feedback da trilha do slider.](imagens/trilha-feedback.png)\n*Trilha com feedback visual que especifica a quantidade selecionada.*\n\n**Atenção:** o comprimento da trilha do *slider* pode ser personalizado de acordo com o contexto, mas procure evitar trilhas muito longas, pois isso pode dificultar a interação."
      },
      {
        "title": "2. Label (Opcional)",
        "level": 3,
        "content": "O *label* especifica o assunto de que se trata o *slider* e deve estar posicionado sempre alinhado à esquerda e acima da trilha.\n\n![Label](imagens/label-1.png)\n*Exemplo de como posicionar corretamente o label no slider.*\n\nEm casos raros em que o contexto é suficiente, o *label* pode ser omitido.\n\n![Exemplo de slider sem label.](imagens/label-2.png)\n*Exemplo de caso em que o label não é necessário para o entendimento da função do slider.*"
      },
      {
        "title": "3. Referências (Opcional)",
        "level": 3,
        "content": "As referências podem ser posicionadas nas extremidades da trilha ou abaixo dela, no *slider* horizontal e à direita, no *slider* vertical.\n\n![Posicionamentos das referências.](imagens/referencias-1.png)\n*Possíveis posicionamentos das referências do slider.*\n\nEmbora sejam opcionais, é importante informar ao usuário os valores máximo e mínimo disponíveis para as referências. Algumas vezes é conveniente informar também o *valor médio* e/ou *valores intermediários*.\n\n![Posicionamentos das referências com valores intermediários.](imagens/referencias-2.png)\n*Possíveis posicionamentos das referências do slider com valores intermediários.*\n\n**Atenção:** os valores intermediários das referências devem estar necessariamente posicionados abaixo da trilha, no *slider* horizontal e à direita da trilha, no *slider* vertical. Nestes casos, prefira posicionar os valores mínimos e máximos também abaixo ou à direita para manter a coerência na leitura.\n\n![Posicionamentos das referências com valores intermediários.](imagens/referencias-4.png)\n*Possíveis posicionamentos das referências do slider com valores intermediários.*\n\nAs referências podem ser *textuais*, *icônicas* ou *interativas* (componente interativo).\n\n![Referências textuais, icônicas e interativas.](imagens/referencias-3.png)\n*É possível utilizar texto, ícone ou mesmo um elemento interativo como referências, de acordo com a imagem.*\n\nSe utilizar um elemento interativo como referência, prefira *buttons* com densidade alta.\n\n**Atenção:** às vezes, uma referência precisa ser formatada para localização ou para comunicação mais clara (por exemplo: moedas ou porcentagens). A formatação pode envolver arredondamentos, transformações matemáticas, formatação de números ou exibição de um prefixo ou sufixo (por exemplo: “+/-” ou “px”). Analise se é preciso repensar o posicionamento das referências."
      },
      {
        "title": "4. Alça de Controle (Obrigatório)",
        "level": 3,
        "content": "A alça de controle é o elemento interativo que o usuário desliza para alcançar um valor. Sempre exibida selecionando um dos valores dentro da distribuição disponível.\n\nPode ser encontrado em três tamanhos (veja mais adiante Comportamento> Densidade) e é representado graficamente por uma \"círculo\" com estado *selecionado*, deslizando sobre a trilha.\n\n![Alça de controle.](imagens/alca-controle.png)\n*Exemplo de alça de controle.*"
      },
      {
        "title": "5. Etiqueta de Valor (Opcional)",
        "level": 3,
        "content": "A etiqueta de valor indica o valor exato que o usuário está selecionando. Para isso, utiliza-se o componente *tooltip* e, embora seja um elemento opcional, é sempre uma boa ideia utilizá-lo.\n\nA etiqueta de valor deve estar posicionada preferencialmente acima da alça (no *slider* horizontal) ou à esquerda da alça (no *slider* vertical).\n\nNos casos em que a etiqueta de valor seja utilizada, certifique-se de que o *design* visual do elemento não prejudique a usabilidade. Para telas sensíveis ao toque, considere onde o dedo do usuário será colocado na tela - e quais áreas da tela serão cobertas pelo dedo - enquanto manipula o componente. Embora as etiquetas colocadas diretamente abaixo do controle deslizante possam funcionar em designs de *desktop* usados ​​com um cursor do *mouse*, a mesma colocação de etiquetas não funciona bem para dispositivos móveis e outros designs de tela sensível ao toque porque as etiquetas podem ser ocultadas pelo dedo do usuário enquanto eles estão interagindo com o *slider*.\n\n![Posicionamento da etiqueta](imagens/etiqueta.png)\n*Posicione as etiquetas de valor acima ou à esquerda da trilha, de acordo com a variação do slider.*\n\n**Atenção:** a etiqueta deve ficar visível todo o momento em que o usuário estiver interagindo com o componente *slider*."
      },
      {
        "title": "6. Caixa de Entrada (Opcional)",
        "level": 3,
        "content": "Em algumas situações pode ser interessante disponibilizar uma forma alternativa para o usuário entrar com valores. Nestes casos, disponibilize uma caixa de entrada com o componente *input* integrado ao *slider*.\n\n![Caixa de entrada.](imagens/input.png)\n*Exemplo de caixa de entrada.*\n\nConforme a alça de controle é deslizada o valor correspondente é mostrado na caixa de entrada. Da mesma forma, se o usuário optar por digitar o valor na caixa de entrada, a alça de controle desliza para o valor correspondente na trilha."
      },
      {
        "title": "7. Gradações (Opcional)",
        "level": 3,
        "content": "Gradações são pequenos espaços na trilha que determinam os valores que podem ser selecionados pelo usuário.\n\n![Gradações na trilha do slider.](imagens/step-2.png)\n*Detalhe das gradações na trilha do slider.*\n\nAs gradações \"forçam\" a alça de controle a \"saltar\" por cada valor previamente definido, impossibilitando que o usuário possa selecionar valores aleatórios."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "O componente *slider* pode ser encontrado nos tipos *simples* e *composto* e nos formatos *horizontal* e *vertical*. A escolha do tipo e formato mais apropriado deve-se à função e ao *layout*."
      },
      {
        "title": "1. Simples",
        "level": 3,
        "content": "*Slider* simples é composto por uma única alça de controle e permite a escolha de um valor pertence a um intervalo definido.\n\n![Slider simples.](imagens/tipo-simples.png)\n*Exemplo de slider simples no formato horizontal e vertical.*\n\n**Atenção:** geralmente o tipo simples é mais utilizado quando é necessário definir um valor único como: medida, temperatura, volume, etc."
      },
      {
        "title": "2. Composto",
        "level": 3,
        "content": "*Slider* composto é formado por duas alças de controle e permite a escolha de dois valores pertencentes a um intervalo definido.\n\n![Slider composto.](imagens/tipo-composto.png)\n*Exemplo de slider composto no formato horizontal e vertical.*\n\nNo tipo composto, o *feedback* visual da trilha deve ocorrer no intervalo entre os dois valores selecionados.\n\n**Atenção:** geralmente o tipo composto é mais utilizado quando é necessário definir uma faixa de valores como: datas, preços, etc."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Interação",
        "level": 3,
        "content": "Há diversas maneiras para o usuário interagir, isto é, selecionar um valor por meio de *sliders*:"
      },
      {
        "title": "A. Deslizando a alça de controle",
        "level": 4,
        "content": "Trata-se da forma mais comum de interação. Basta clicar em cima da alça de controle e deslizá-la para qualquer uma das direções sugeridas pela trilha."
      },
      {
        "title": "B. Por meio do teclado",
        "level": 4,
        "content": "O *slider* deve ser sempre acessível para o uso por meio de teclas.\n\n- As teclas ↑ → *aumentam* o valor selecionado.\n\n- As teclas ↓ ← *diminuem* o valor selecionado."
      },
      {
        "title": "C. Por meio de componente",
        "level": 4,
        "content": "É permitido utilizar componentes interativos como referências para facilitar a escolha de valores precisos. Geralmente *buttons* circulares com ênfase terciária\\* podem ser úteis.\n\nClicando nos *buttons* o usuário pode aumentar ou diminuir o valor tendo um maior controle da alça de valor.\n\n![Exemplo de slider utilizando buttons.](imagens/buttons.png)\n*Exemplo de slider utilizando buttons.*\n\n**Atenção:** embora possa ser utilizado em qualquer ocasião, *buttons* funcionam melhor quando a trilha está construída com valores pré-definidos (*steps*)."
      },
      {
        "title": "D. Inserindo o valor exato no campo de entrada",
        "level": 4,
        "content": "É possível ainda associar um campo de *input* ao componente *slider*. Desta forma, o usuário tem a opção de selecionar o valor desejado por meio do deslocamento da alça de controle (conforme descrito no item 1) ou simplesmente digitando diretamente o valor desejado no campo de entrada.\n\n![Slider com entrada de dados por meio de campo de entrada.](imagens/input-exemples.png)\n*Exemplo de slider com entrada de dados por meio de campos de entrada.*\n\n**Atenção:** neste último caso não é necessário o uso de etiqueta de valor, pois o próprio campo de entrada já retorna os valores selecionados."
      },
      {
        "title": "E. Utilizando valores pré-definidos",
        "level": 4,
        "content": "É possível definir gradações (valores pré-definidos) no componente *slider*. Essa é uma boa maneira de conduzir o usuário para selecionar os valores permitidos.\n\n![Slider com valores pré-definidos.](imagens/step-1.png)\n*Exemplo de slider com entrada de valores pré-definidos. Neste exemplo, só é possível selecionar as porcentagens pares.*\n\n![Exemplos de slider simples e composto com valores pré-definidos.](imagens/step-3.png)\n*Exemplos de slider simples e composto com valores pré-definidos.*"
      },
      {
        "title": "F. Utilizando valores negativos",
        "level": 4,
        "content": "O *slider* também pode apresentar valores negativos. Nesse caso, é interessante referenciar o ponto zero na metade da trilha.\n\n![Exemplos de slider simples com valores negativos.](imagens/negative.png)\n*Exemplos de slider simples com valores negativos.*\n\n**Atenção:** como padrão o *slider* deve vir marcado com valor zero."
      },
      {
        "title": "2. Estados",
        "level": 3,
        "content": "Os estados previstos para o *slider* são os listados na imagem abaixo. Com exceção do estado desabilitado, todos os demais estados são representados apenas na alça de controle do *slider*.\n\n![Estados](imagens/estados.png)\n*Exemplos dos possíveis estados para o slider.*"
      },
      {
        "title": "3. Densidades",
        "level": 3,
        "content": "A densidade do *slider* se resume ao tamanho da alça de controle. A figura seguinte ilustra todas as possibilidades:\n\n![Densidades](imagens/densidades.png)\n*Exemplos das densidades do slider.*\n\n**Atenção:** procure utilizar densidade baixa em dispositivos móveis, pois a área de interação com o dedo do usuário é maior tornando-se mais fácil o manuseio."
      },
      {
        "title": "4. Área de Interação",
        "level": 3,
        "content": "Para facilitar ainda mais a utilização do componente pelo usuário, a trilha também deve ser interativa. Caso o usuário clique em qualquer parte da trilha, a alça de controle se desloca imediatamente para a posição correspondente.\n\n![Área interativa da trilha](imagens/trilha-interativa.png)\n*O usuário pode interagir clicando na trilha.*\n\nPara cada densidade da alça de controle há uma mesma área de interação. Isso auxilia a utilização do componente principalmente em dispositivos com recursos de toque.\n\nConfira em Especificação o valor mínimo (x) sugerido.\n\n![Área interativa](imagens/area-interativa.png)\n*Exemplos das áreas interativas para cada densidade da alça de controle.*"
      },
      {
        "title": "5. Dispositivos Móveis",
        "level": 3,
        "content": "Em dispositivos móveis, como telefones e outros aparelhos que possuem o toque como método principal de interação, a alça de controle do *sliders* deve possuir densidade baixa (maior dimensão) para acomodar o uso do dedo ao invés do cursor do *mouse*.\n\n![Dispositivos móveis.](imagens/mobile.png)\n*Prefira a dimensão baixa do slider para deixar a alça de controle mais evidente em dispositivos móveis.*"
      },
      {
        "title": "6. Fundo Escuro",
        "level": 3,
        "content": "A imagem a seguir ilustra a representação do componente *slider* em fundos escuros. Confira os *tokens* no final desse documento para o uso correto das cores.\n\n![Fundo escuro.](imagens/fundo-escuro.png)\n*Exemplos de aplicação do componente slider em fundo escuro.*"
      },
      {
        "title": "7. Acessibilidade",
        "level": 3,
        "content": "Controles deslizantes funcionam melhor quando o valor específico não é tão importante para o usuário, sendo um valor aproximado o suficiente. **Sempre que o valor exato for importante, o slider pode não funcionar tão bem.**\n\nPor exemplo, se você precisar inserir quantidades como idade ou peso em um formulário, um controle deslizante não seria apropriado, a não ser que venha acompanhado com um campo de *input*.\n\nOutra questão importante ao projetar uma interface de toque é considerar como seria desafiador interagir com um controle deslizante para usuários com dificuldades motoras.\n\nEles seriam capazes de selecionar o valor exato que desejam? Quanto esforço e quantas tentativas eles precisariam?\n\nMuitos usuários idosos têm mãos menos estáveis ​ e podem encontrar dificuldades em realizar gestos precisos exigidos pelo *slider*.\n\nNão esqueça de permitir que o *slider* seja operado também por meio do teclado."
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- Selecionar um valor preciso usando um *slider* pode ser uma tarefa difícil em certas ocasiões e requer alguma habilidade motora. Se a escolha de um valor exato for importante para o objetivo da interface, estude as alternativas para tornar a tarefa mais simples.\n\n- Quanto mais amplo ou mais denso for o intervalo selecionável por meio do *slider*, mais difícil será selecionar um valor preciso.\n\n- Quando o intervalo for muito pequeno (exemplo: 1-3), prefira utilizar outro componente, como *radio* ou *select*. Se for uma configuração binária, use o *switch*.\n\n- Devida à sua versatilidade, o componente *slider* pode ser adaptado à diversas necessidades específicas e funciona bem integrado a outros componentes. Sinta-se livre para testar e assim criar novos componentes mistos.\n\n![Sliders customizados.](imagens/exemplos.png)\n*Exemplos de sliders customizados.*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Alinhamento",
        "level": 3,
        "content": "| Name             | Property   |                       Spacing Token                        |\n| ---------------- | ---------- | :--------------------------------------------------------: |\n| Alça de controle | Vertical   |                `--spacing-vertical-center`                 |\n| Referências      | Horizontal | `--spacing-horizontal-left` / `--spacing-horizontal-right` |\n| Referências      | Vertical   |                `--spacing-vertical-bottom`                 |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name             | Property                 |      Token/Value       |\n| ---------------- | ------------------------ | :--------------------: |\n| Referências      | margin-right/margin-left | `--spacing-scale-half` |\n| Label            | margin-botton            | `--spacing-scale-base` |\n| Caixa de Entrada | margin-right/margin-left |  `--spacing-scale-2x`  |\n| Gradações        | margin-right             |         `1px`          |"
      },
      {
        "title": "Dimensão",
        "level": 3,
        "content": "| Name                               | Property     |      Token/Value       |\n| ---------------------------------- | ------------ | :--------------------: |\n| Alça de controle (densidade alta)  | width/height |  `--spacing-scale-2x`  |\n| Alça de controle (densidade média) | width/height | `--spacing-scale-2xh`  |\n| Alça de controle (densidade baixa) | width/height |  `--spacing-scale-3x`  |\n| Trilha                             | height       | `--spacing-scale-half` |\n| Área mínima de interação (x)       | width/height |  `--spacing-scale-4x`  |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name                               | Property   | Color Token             |        Opacity         |\n| ---------------------------------- | ---------- | ----------------------- | :--------------------: |\n| Alça de controle                   | background | `--blue-warm-vivid-50`  |           -            |\n| Alça de controle (fundo escuro)    | background | `--blue-warm-vivid-50`  |           -            |\n| Trilha                             | background | `--gray-20`             |           -            |\n| Trilha (fundo escuro)              | background | `--pure-0`              |           -            |\n| Trilha marcada                     | background | `--blue-warm-vivid-50`  | `--surface-opacity-md` |\n| Trilha marcada (fundo escuro)      | background | `–--blue-warm-vivid-50` | `--surface-opacity-md` |\n| Label / Referências                | text       | `--gray-80`             |           -            |\n| Label / Referências (fundo escuro) | text       | `--pure-0`              |           -            |\n| Ícones                             | icon       | `--gray-80`             |           -            |\n| Ícones (fundo escuro)              | icon       | `--pure-0`              |           -            |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name        | Property    |        Token/Value        |\n| ----------- | ----------- | :-----------------------: |\n| Label       | size        | `--font-size-scale-base`  |\n| Label       | font-weight | `--font-weight-semi-bold` |\n| Referências | size        | `--font-size-scale-base`  |\n| Referências | font-weight |  `--font-weight-regular`  |"
      }
    ],
    "accessibility": [],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/slider/slider.md"
    }
  },
  {
    "name": "Steps",
    "slug": "step",
    "description": "*Steps* são indicadores de etapas e progresso que auxiliam os usuários durante um fluxo de trabalho, seguindo uma sequência lógica linear, aleatória, numeradas ou não.",
    "documentationUrl": "https://www.gov.br/ds/components/step",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de Step Complexo](imagens/sample-01.png)\n*Exemplo de Step Complexo*\n\n![Exemplo de Steps Simples](imagens/sample-02.png)\n*Exemplo de Steps Simples*\n\nUtilize *Steps* quando:\n\n- houver necessidade de construir fluxos de navegação com etapas sequenciais;\n- houver necessidade de sinalizar ao usuário uma ideia de progressão durante uma jornada: etapas concluídas, não concluídas e etapas em andamento;\n- houver necessidade de sinalizar ao usuário o tamanho do fluxo que este deverá percorrer.\n\nNão utilize *Steps*:\n\n- quando não houver necessidade de sinalizar ao usuário uma sequência de progressão, linear ou não. Neste caso utilize *Menus* ou *Tabs*.\n- quando as etapas não possuem relação entre si. É importante que o uso de *Steps* esteja diretamente relacionado com a ideia de se completar um fluxo, tarefa ou jornada."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *Componente Step* é constituido por:\n\n| ID  | Nome           |                         Referência                          | Uso         |\n| --- | -------------- | :---------------------------------------------------------: | ----------- |\n| 1   | Indicador      |                             ---                             | Obrigatório |\n| 2   | Rótulos        | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 3   | Linha do Tempo |                             ---                             | Obrigatório |\n\n![Anatomia do Step](imagens/anatomy.png)\n*Anatomia do Step*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Indicador (Obrigatório)",
        "level": 4,
        "content": "O *Indicador* é o elemento que definirá os estados de cada etapa, além de servir como elemento interativo por onde o usuário poderá navegar. Os *Indicadores* poderão ser utilizados da seguinte forma:"
      },
      {
        "title": "A. Representando a Ordem Numérica das Etapas",
        "level": 5,
        "content": "É a forma mais comum de utilização do *Indicador*. Este modelo provê ao usuário claramente a quantidade de etapas que este deverá seguir e a etapa onde se encontra.\n\n![Indicador Ordem Numérica](imagens/anatomy-step-buttons-numbers.png)\n*Indicador Ordem Numérica*"
      },
      {
        "title": "B. Representando uma Informação Iconográfica",
        "level": 5,
        "content": "É um modelo que transmite ao usuário uma informação semântica através dos ícones e deverá ser utilizado com cautela. Abaixo seguem algumas dicas:\n\n- certifique-se de que o ícone utilizado transmita uma ideia bastante clara ao usuário da ação ou etapa que representa;\n- não utilize este modelo quando o número de etapas for muito extenso;\n- recomenda-se fortemente a utilização de rótulos como apoio à informação transmitida;\n- se possível, numere as etapas nos rótulos.\n\n![Indicador Informação Iconográfica](imagens/anatomy-step-buttons-icons.png)\n*Indicador Informação Iconográfica*"
      },
      {
        "title": "C. Indicador Vazio",
        "level": 5,
        "content": "Este formato possui uma representação mais simples e pode ser utilizado quando a necessidade for construir um layout mais minimalista. Além disso, é um modelo bastante adequado para interfaces em dispositivos móveis (*Grid de 4 colunas*), pois permite uma economia maior do espaço horizontal. Neste modelo não se utiliza informação numérica ou iconográfica.\n\n![Indicador Vazio - Sem informação numérica ou iconográfica](imagens/anatomy-step-buttons-bullet.png)\n*Indicador Vazio - Sem informação numérica ou iconográfica*\n\nFique atento a algumas boas práticas:\n\n- Utilize este modelo quando tiver certeza que a ausência de ícones ou números, não interferirá no entendimento do usuário durante sua jornada;\n\n- Recomenda-se utilizar poucas etapas neste tipo de formato;\n\n- Recomenda-se utilizar este modelo em interfaces para dispositivos móveis;\n\n- Quando o *Rótulo* não for utilizado, faça uso do *Componente Tooltip* para auxiliar o usuário no seu entendimento;\n\n![Uso do Tooltip no Indicador Vazio](imagens/anatomy-step-buttons-bullet-tooltip.png)\n*Uso do Tooltip no Indicador Vazio*\n\n**Atenção:** Caso também seja necessário utilizar o *Tooltip* para indicar algum erro ou alerta, em situações onde não existe *Rótulo*, utilize o nome do *Rótulo* dentro do *Tooltip* que indica o erro ou alerta, juntamente com o detalhamento do erro ou alerta. Veja abaixo:\n\n![Uso do Tooltip sem Rótulo com alertas](imagens/behaviour-nolabel-tooltip.png)\n*Uso do Tooltip sem Rótulo com alertas*"
      },
      {
        "title": "2. Rótulos (Opcional)",
        "level": 4,
        "content": "O *Rótulo* é a informação textual que acompanha o *Indicador*, sua utilização não é obrigatória, mas é recomendada. O *Rótulo* deverá transmitir a informação, clara, direta e objetiva ao usuário da ação ou etapa que representa. Pode ser utilizado da seguinte forma:\n\n- Centralizado abaixo do *Indicador*. É a forma mais utilizada e por tanto o modelo de posicionamento padrão para o *Rótulo*. O texto do *Rótulo* deve possuir alinhamento centralizado;\n\n![Rótulo Centralizado abaixo do Indicador](imagens/behaviour-position-label-01.png)\n*Rótulo Centralizado abaixo do Indicador (Padrão)*\n\n- Centralizado acima do *Indicador*, como posicionamento alternativo. O texto do *Rótulo* deve possuir alinhamento centralizado;\n\n![Rótulo Centralizado acima do Indicador](imagens/behaviour-position-label-03.png)\n*Rótulo Centralizado acima do Indicador (Alternativo)*\n\n- À direita do *Indicador*, como forma de posicionamento alternativo. Neste caso, o texto do *Rótulo* deve possuir alinhamento à esquerda;\n\n![Rótulo à direita do Indicador](imagens/behaviour-position-label-02.png)\n*Rótulo à direita do Indicador (Alternativo)*\n\n- À esquerda do *Indicador*, como posicionamento alternativo. Neste caso, o texto do *Rótulo* deve possuir alinhamento à direita.\n\n![Rótulo à esquerda do Indicador](imagens/behaviour-position-label-04.png)\n*Rótulo à esquerda do Indicador (Alternativo)*\n\nÉ importante estar atendo a algumas boas práticas:\n\n- o ideal é que se utilize apenas uma palavra no rótulo;\n- caso haja necessidade, utilize duas ou três palavras, no máximo;\n- use um texto claro, direto e objetivo;\n- mantenha a consistência optando por apenas um dos modelos em seu projeto, não utilize mais de um tipo;\n- no caso do posicionamento do *Rótulo* à direita ou à esquerda do *Indicador*, fique atento às restrições de espaço. Estes tipos de posicionamento necessitam de mais espaço horizontal e são mais adequados em resoluções *Desktop* (*Grid* de 12 colunas);\n- na ausência do *Rótulo*, recomenda-se utilizar o *Componente Tooltip* para auxiliar o usuário em seu entendimento."
      },
      {
        "title": "Rótulo no Tipo Step Textual",
        "level": 5,
        "content": "O *Rótulo* também é utilizado no modelo tipo *Step Textual*. Veja mais detalhes em *Tipos*.\n\n![Rótulo no Tipo Step Textual](imagens/anatomy-step-simple-text-step.png)\n*Rótulo no Tipo Step Textual*"
      },
      {
        "title": "3. Linha do Tempo (Obrigatório)",
        "level": 4,
        "content": "A linha do tempo servirá para dar sentido semântico ao fluxo que deve ser seguido pelo usuário através das etapas. Esta se posiciona entre os *Indicadores* e acompanha o espaçamento entre eles.\n\n![Exemplo de Linha do Tempo](imagens/anatomy-time-line-01.png)\n*Exemplo de Linha do Tempo*"
      },
      {
        "title": "Linha do Tempo com Indicadores Ocultos",
        "level": 5,
        "content": "A linha do tempo também tem a função de indicar se existem mais *Indicadores* ocultos. Quando isto ocorrer, a linha do tempo deverá \"sangrar\" até os limites da tela, indicando que há mais etapas antes ou depois das etapas visíveis na tela. Além disto, deve-se utilizar sombras nas laterais do *Painel de Etapas*, nos lados onde houver etapas ocultas. Observe o exemplo abaixo:\n\n![Exemplo de Linha do Tempo com Indicadores Ocultos](imagens/anatomy-time-line-02.png)\n*Exemplo de Linha do Tempo com Indicadores Ocultos*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Step Complexo",
        "level": 3,
        "content": "Este tipo é bastante utilizado em *Wizard (Assistentes)* e auxiliam o usuário durante o fluxo ou jornada de alguma tarefa específica.\n\n![Exemplo de Step Complexo](imagens/sample-01.png)\n*Exemplo de Step Complexo*"
      },
      {
        "title": "2. Step Simples",
        "level": 3,
        "content": "É um modelo bastante resumido e otimizado para utilização dentro de outros componentes. É mais comumente utilizado em *Carrosséis de Imagens*, *Cards*, *Janelas Modais*, entre outros. Este modelo geralmente é utilizado juntamente com outros controles de navegação, como por exemplo, botão para avançar e recuar. O funcionamento destes controles de navegação dependem do componente que contém os *Steps*. Observe o exemplo abaixo.\n\n![Exemplo de Step Simples](imagens/sample-02.png)\n*Exemplo de Utilização do Step Simples - Os controles de navegação fazem parte do Carrossel no exemplo*\n\n- Evite utilizar um número elevado de etapas no *Step Simples*, pois resulta em problemas de diagramação e usabilidade.\n- recomenda-se utilizar de 4 a 5 etapas neste caso;\n- caso necessite de mais etapas, utilize o *Step Textual*.\n\n![Uso do Step Simples](imagens/type-simple-step-samples.png)\n*Uso do Step Simples*"
      },
      {
        "title": "3. Step Textual",
        "level": 3,
        "content": "O *Step Textual* possui a mesma finalidade do *Step Simples*, e pode ser utilizado dentro de outros componentes, a diferença é que este apresenta a progressão das etapas de forma textual. Sendo formatado da seguinte maneira: \"Etapa Atual\" / \"Total de Etapas\". Este modelo oferece a possibilidade de exibir um número de etapas maior que o permitido no *Step Simples*, devido ao formato compacto da representação numérica.\n\nObserve o exemplo abaixo:\n\n![Exemplo de Step Textual](imagens/sample-03.png)\n*Exemplo de Step Textual*\n\n- Utilize o *Step Textual* quando houver necessidade de um número elevado de etapas;\n\n![Uso do Step Textual](imagens/type-simple-text-step-samples.png)\n*Uso do Step Textual*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Progressão Linear x Não Linear",
        "level": 3,
        "content": "A progressão definirá se o usuário deverá obedecer uma ordem sequencial ou não. Sendo assim, dependendo da regra de negócio em cada projeto, a progressão das etapas pode ser linear ou não linear."
      },
      {
        "title": "Linear",
        "level": 4,
        "content": "Na progressão linear o acesso a cada etapa depende da conclusão da etapa anterior. Logo, as etapas não visitadas deverão permanecer no estado desabilitado. Este comportamento é bastante utilizado quando há a necessidade de enviar formulários subsequentes ou na execução de tarefas que tenha interdependência.\n\n- A - As etapas não visitadas deverão permanecer em estado desabilitado até a conclusão da etapa anterior;\n\n- B - As etapas concluídas devem ser apresentadas no estado concluído.\n\n![Exemplo de Steps com Progressão Linear](imagens/behaviour-linear.png)\n*Exemplo de Steps com Progressão Linear*"
      },
      {
        "title": "Não Linear",
        "level": 4,
        "content": "Na progressão não linear, o usuário poderá acessar todas as etapas livremente. Este comportamento é bastante utilizado quando a conclusão de uma etapa não depende da conclusão de outra.\n\n- A - as etapas não concluídas deverão permanecer no estado interativo e o usuário poderá navegar livremente por elas;\n\n- B - as etapas concluídas deverão permanecer com o estado concluído.\n\n![Exemplo de Steps com Progressão Não Linear](imagens/behaviour-no-linear.png)\n*Exemplo de Steps com Progressão Não Linear*"
      },
      {
        "title": "2. Orientação Vertical x Horizontal",
        "level": 3,
        "content": "O *Step Complexo* possui orientação horizontal e vertical e pode ser utilizado a depender da estrutura de layout em cada projeto."
      },
      {
        "title": "Orientação Horizontal",
        "level": 4,
        "content": "Muito utilizada em resoluções para *Desktop* *(Grid de 12 ou 8 colunas)*.\n![Steps Orientação Horizontal](imagens/behaviour-orientation-horizontal.png)\n*Step Complexo - Orientação Horizontal*"
      },
      {
        "title": "Orientação Vertical",
        "level": 4,
        "content": "Apesar de não ser uma obrigatoriedade, geralmente a orientação vertical é mais adequada em dispositivos móveis *(Grid de 4 colunas)*, onde a navegação vertical é mais presente.\n\nNeste modelo, os *Steps* posicionam-se à esquerda, a *Linha do Tempo* fica disposta na direção vertical e o conteúdo da etapa atual será apresentado abaixo do *Indicador* e do *Rótulo*. Observe o modelo abaixo:\n\n![Steps Orientação Vertical](imagens/behaviour-orientation-vertical.png)\n*Step Complexo - Orientação Vertical*"
      },
      {
        "title": "Conteúdo x Orientação Vertical",
        "level": 5,
        "content": "Na orientação vertical o conteúdo poderá ser posicionado entre as etapas ou ao lado delas. Observe abaixo:\n\n![Steps Orientação Vertical - Conteúdo entre as Etapas](imagens/behaviour-orientation-vertical-01.png)\n*Steps Orientação Vertical - Conteúdo entre as Etapas*\n\n![Steps Orientação Vertical - Conteúdo ao lado das Etapas](imagens/behaviour-orientation-vertical-02.png)\n*Steps Orientação Vertical - Conteúdo ao lado das Etapas*"
      },
      {
        "title": "3. Responsividade",
        "level": 3,
        "content": ""
      },
      {
        "title": "Grid de 12 Colunas",
        "level": 4,
        "content": "Nas *Grids* de 12 colunas é possível utilizar os dois tipos de orientação para o *Steps*, horizontal e vertical. A escolha pode ser feita por razões de adequação à diagramação de interface ou questões estéticas.\n\n![Step Complexo - Grid de 12 Colunas](imagens/behaviour-responsive-grid-12-cols.png)\n*Step Complexo - Grid de 12 Colunas - Orientação Horizontal*\n\n![Step Complexo - Grid de 12 Colunas](imagens/behaviour-responsive-grid-12-cols-vertical.png)\n*Step Complexo - Grid de 12 Colunas - Orientação Vertical*"
      },
      {
        "title": "Grid de 8 e 4 Colunas",
        "level": 4,
        "content": "Já nas *Grids* de 8 e 4 colunas, recomenda-se utilizar a orientação vertical, pois este modelo adequa-se melhor a dispositivos móveis. Veja os exemplos abaixo:\n\n![Step Complexo - Grid de 8 Colunas](imagens/behaviour-responsive-grid-8-cols.png)\n*Step Complexo - Grid de 8 Colunas - Orientação Vertical*\n\n![Step Complexo - Grid de 4 Colunas](imagens/behaviour-responsive-grid-4-cols.png)\n*Step Complexo - Grid de 4 Colunas - Orientação Vertical*\n\n**Importante:** Caso seja necessário utilizar a orientação horizontal em *Grids* de 8 e 4 colunas, é fortemente recomendado que sejam exibidos no máximo 4 *Etapas* na área visível da tela. As demais etapas deverão permanecer ocultas e só serão exibidas caso o usuário realize o movimento de rolagem horizontal. Veja mais detalhes sobre o comportamento de rolagem na *Seção > Comportamento > Espaçamento entre Etapas > Espaçamento com Scroll*\n\n![Número Máximo de Etapas em Grids de 4 e 8 colunas](imagens/behavior-steps-number.png)\n*Número Máximo de Etapas em Grids de 4 e 8 colunas*"
      },
      {
        "title": "Responsividade do Step Simples e Step Textual",
        "level": 4,
        "content": "Estes dois tipos de *Steps*, tendo em vista sua forma compactada, não são influenciados pela resolução da tela, logo não possuem características responsivas. Geralmente estão localizados dentro de outros componentes. Neste caso, apenas os componentes que os contém é que possuem suas próprias características responsivas. Neste caso, o *Step Simples* e *Step Textual* devem se manter centralizados ao componente que fazem parte. Veja os exemplos abaixo:\n\n![Carrossel com Step Simples e Step Textual - Grid de 12 Colunas](imagens/behaviour-simple-step-grid-12-cols.png)\n*Carrossel com Step Simples e Step Textual - Grid de 12 Colunas*\n\n![Carrossel com Step Simples e Step Textual - Grid de 8 Colunas](imagens/behaviour-simple-step-grid-8-cols.png)\n*Carrossel com Step Simples e Step Textual - Grid de 8 Colunas*\n\n![Carrossel com Step Simples e Step Textual - Grid de 4 Colunas](imagens/behaviour-simple-step-grid-4-cols.png)\n*Carrossel com Step Simples e Step Textual - Grid de 4 Colunas*"
      },
      {
        "title": "4. Espaçamento entre as Etapas",
        "level": 3,
        "content": "Os *Rótulos* e *Indicadores* das etapas podem ser distribuídos na tela de duas formas: com espaçamento dinâmico ou com o espaçamento fixo com *scroll*."
      },
      {
        "title": "Espaçamento Dinâmico",
        "level": 4,
        "content": "No espaçamento dinâmico, os *Rótulos* e *Indicadores* são distribuídos de forma linear e equidistantes por toda largura ou altura disponível na área visível da tela. Não importa o número de etapas, estas serão distribuídas pela largura ou altura útil da tela. Observe abaixo:\n\n![Espaçamento Dinâmico entre as Etapas - Horizontal](imagens/behaviour-space-horizontal-01.png)\n*Espaçamento Dinâmico entre as Etapas - Horizontal*\n\n![Espaçamento Dinâmico entre as Etapas - Horizontal](imagens/behaviour-space-horizontal-02.png)\n*Espaçamento Dinâmico entre as Etapas - Horizontal*\n\n![Espaçamento Dinâmico entre as Etapas - Vertical](imagens/behaviour-space-vertical-01.png)\n*Espaçamento Dinâmico entre as Etapas - Vertical*\n\n![Espaçamento Dinâmico entre as Etapas - Vertical](imagens/behaviour-space-vertical-02.png)\n*Espaçamento Dinâmico entre as Etapas - Vertical*"
      },
      {
        "title": "Espaçamento Fixo com Scroll",
        "level": 4,
        "content": "No espaçamento fixo com *Scroll*, a distância entre as etapas são determinadas por parâmetro e caso o número de etapas ultrapasse a área visível da tela, o usuário poderá navegar pelas etapas ocultas com *Scroll*.\n\nA - O espaçamento fixo é determinado por parâmetro;\nB - Caso o número de etapas ultrapasse a área visível da tela, é utilizado o *Scroll* para acessar as etapas ocultas;\nC - Área visível da tela.\n\n![Espaçamento Fixo com Scroll](imagens/behavior-space-fix-01.png)\n*Espaçamento Fixo com Scroll*"
      },
      {
        "title": "Comportamento do Scroll",
        "level": 5,
        "content": "*A -* O usuário poderá posicionar o dedo ou o mouse sobre qualquer uma das etapas visíveis e;\n\n*B -* poderá deslizar horizontalmente para esquerda ou direita, exibindo as etapas ocultas.\n\n![Espaçamento Fixo com Scroll](imagens/behavior-scroll-02.png)\n*Espaçamento Fixo com Scroll - Grid de 12 colunas*\n\n![Espaçamento Fixo com Scroll](imagens/behavior-scroll-01.png)\n*Espaçamento Fixo com Scroll - Grid de 4 colunas*"
      },
      {
        "title": "5. Densidade",
        "level": 3,
        "content": ""
      },
      {
        "title": "Densidade Alta",
        "level": 4,
        "content": "Utilize densidade alta quando houver necessidade de economizar espaço em tela, ou quando esta densidade se adequar melhor ao projeto de layout. Para o *Step Simples*, não há necessidade de se utilizar a alta densidade, visto que este componente já possui uma compactação muito elevada.\n\n![Densidade Alta](imagens/behaviour-density-hight.png)\n*Densidade Alta*"
      },
      {
        "title": "Densidade Média (Padrão)",
        "level": 4,
        "content": "A densidade média ou padrão é forma comum do *Step Complexo* e do *Step Simples*.\n\n![Densidade Média (Padrão)](imagens/behaviour-density-default.png)\n*Densidade Média (Padrão) do Step Complexo*\n\n![Step Simples - Densidade Média (Padrão)](imagens/behavior-simple-density-default.png)\n*Densidade Média (Padrão) do Step Simples*"
      },
      {
        "title": "Densidade Baixa",
        "level": 4,
        "content": "Utilize a densidade baixa quando houver necessidade de uma área maior de clique ou um destaque maior para as etapas.\n\n![Densidade Baixa](imagens/behaviour-density-low.png)\n*Densidade Baixa do Step Complexo*\n\n![Step Simples - Densidade Baixa)](imagens/behavior-simple-density-low.png)\n*Densidade Baixa do Step Simples*"
      },
      {
        "title": "6. Uso de Alertas, Erros e Concluído",
        "level": 3,
        "content": "No *Step Complexo*, é possível sinalizar ao usuário erros ou pendências ocorridas nas etapas, além de sinalizar se a etapa foi concluída. Isto é feito com a utilização do *Componente Tag*, do tipo *Ícone*. Esta *Tag* é posicionada no topo e à direita do *Indicador*, e pode representar os *Estados Alert*, *Error* e *Concluído*.\n\n- Quando ocorrer alguma pendência referente à tarefa realizada em alguma etapa do fluxo, comunique através da *Tag* no *Estado Alert* no *Indicador* e *Rótulo*.\n\n![Estado Alert](imagens/behaviour-alert.png)\n*Estado Alert*\n\n- Da mesma forma, caso ocorra algum erro ou impedimento na tarefa executada em alguma etapa, comunique ao usuário através da *Tag* no *Estado Error* no *Indicador* e *Rótulo*;\n\n![Estado Error](imagens/behaviour-error.png)\n*Estado Error*\n\n- Quando a tarefa é finalizada em uma determinada etapa, utilize a *Tag* com o estado concluído no *Indicador* e *Rótulo*.\n\n![Estado Concluído](imagens/behaviour-concluded.png)\n*Estado Concluído*\n\n- Recomenda-se utilizar também o *Componente Tooltip* para exibir o detalhamento da pendência. Utilize o *Tooltip* com a interação `mouseover` e detalhe em poucas palavras qual erro ou pendência precisa ser sanada pelo usuário. Observe os exemplos abaixo:\n\n![Uso do Tooltip com Estado Alert](imagens/behaviour-alert-01.png)\n*Uso do Tooltip com Estado Alert*\n\n![Uso do Tooltip com Estado Error](imagens/behaviour-error-01.png)\n*Uso do Tooltip com Estado Error*"
      },
      {
        "title": "Alertas e Erros com o Indicador Vazio",
        "level": 4,
        "content": "Nesta situação, a utilização da *Tag* de *Erro* ou *Alerta* substituirá o *Indicador*, dando ênfase à etapa com pendências.\n\n![Erros com o Indicador Vazio](imagens/behaviour-error-bullet.png)\n*Erros com o Indicador Vazio*\n\n![Alertas com o Indicador Vazio](imagens/behaviour-alert-bullet.png)\n*Alertas com o Indicador Vazio*\n\n**Atenção:** Quando a etapa com erro, alerta ou concluído for a etapa em que o usuário se encontra, ou seja, quando for a etapa ativa, a *Tag* de erro, alerta ou concluído deve ser circulada por uma borda representando a cor do estado ativo. Veja as diferenças abaixo:\n\n![Erro com o Indicador Numérico no Estado Ativo](imagens/behaviour-error-active.png)\n*Erro com o Indicador Numérico no Estado Ativo*\n\n![Erro com o Indicador Vazio no Estado Ativo](imagens/behaviour-error-bullet-active.png)\n*Erro com o Indicador Vazio no Estado Ativo*\n\n![Alerta com o Indicador Numérico no Estado Ativo](imagens/behaviour-alert-active.png)\n*Alerta com o Indicador Numérico no Estado Ativo*\n\n![Alerta com o Indicador Vazio no Estado Ativo](imagens/behaviour-alert-bullet-active.png)\n*Alerta com o Indicador Vazio no Estado Ativo*\n\n![Concluído com o Indicador Numérico no Estado Ativo](imagens/behaviour-concluded-active.png)\n*Concluído com o Indicador Numérico no Estado Ativo*\n\n![Concluído com o Indicador Vazio no Estado Ativo](imagens/behaviour-concluded-bullet-active.png)\n*Concluído com o Indicador Vazio no Estado Ativo*"
      },
      {
        "title": "7. Estados",
        "level": 3,
        "content": ""
      },
      {
        "title": "Estado Interativo",
        "level": 4,
        "content": "Utilize o estado interativo sobre os elementos nos quais o usuário irá interagir, nesse caso sobre o Indicador e o Rótulo.\n\n![Estado Interativo](imagens/behaviour-state-interative.png)\n*Estado Interativo*\n\n- Durante a progressão não linear, as etapas não visitadas podem apresentar-se no estado interativo, pois o acesso a essas etapas não dependem da conclusão das anteriores.\n\n  ![Etapas Não Visitadas - Estado Interativo](imagens/anatomy-step-buttons-no-visited-interactive.png)\n  *Etapas Não Visitadas - Estado Interativo*"
      },
      {
        "title": "Estado Hover",
        "level": 4,
        "content": "O estado hover ocorre sobre o *Indicador* quando o usuário passar o mouse sobre o Indicador ou o Rótulo.\n\n![Estado Hover](imagens/behaviour-state-hover.png)\n*Estado Hover*"
      },
      {
        "title": "Estado Ativo",
        "level": 4,
        "content": "O estado ativo ocorre sobre o Indicador que representa a etapa que o usuário se encontra.\n\n![Estado Ativo](imagens/behaviour-state-active.png)\n*Estado Ativo*"
      },
      {
        "title": "Estado Desabilitado",
        "level": 4,
        "content": "O estado desabilitado ocorre nas etapas não visitadas ou inoperantes.\n\n![Estado Desabilitado](imagens/behaviour-state-dissabled.png)\n*Estado Desabilitado*\n\n- quando o acesso a etapas não visitadas depender da conclusão das anteriores, ou seja na progressão linear, utilize o estado desabilitado.\n\n![Indicador Etapa Não Visitada](imagens/anatomy-step-buttons-no-visited-disabled.png)\n*Indicador de Etapa Não Visitada Desabilitado - depende da conclusão das etapas anteriores*"
      },
      {
        "title": "Estado Pressionado",
        "level": 4,
        "content": "O estado pressionado ocorre quando o usuário clica sobre o Indicador.\n\n![Estado Pressionado](imagens/behaviour-state-pressed.png)\n*Estado Pressionado*"
      },
      {
        "title": "Estado Foco",
        "level": 4,
        "content": "O estado foco ocorre quando o Indicador recebe o foco do navegador através de uma navegação via tecla `Tab`.\n\n![Estado Foco](imagens/behaviour-state-foco.png)\n*Estado Foco*"
      },
      {
        "title": "Estado Concluído",
        "level": 4,
        "content": "Este formato tem a finalidade exclusiva de representar as etapas concluídas. Ou seja, a tarefa referente àquela etapa precisa estar finalizada. Por exemplo, um envio de um formulário ou a leitura de um texto com consentimento.\n\n![Indicador Etapa Concluída](imagens/anatomy-step-buttons-visited.png)\n*Indicador Etapa Concluída*\n\n![Estado Concluído](imagens/behaviour-state-visited.png)\n*Estado Concluído*"
      },
      {
        "title": "Estado Alert",
        "level": 4,
        "content": "O estado alert ocorre sobre o Indicador quando há a necessidade de informar alguma pendência referente à tarefa de alguma etapa.\n\n![Estado Alert](imagens/behaviour-state-alert.png)\n*Estado Alert*"
      },
      {
        "title": "Estado Error",
        "level": 4,
        "content": "O estado error ocorre sobre o Indicador quando há a necessidade de informar algum erro ou impedimento referente à tarefa de alguma etapa.\n\n![Estado Error](imagens/behaviour-state-error.png)\n*Estado Error*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": ""
      },
      {
        "title": "Cores do Estado Interativo",
        "level": 4,
        "content": "| Name                             | Property     | Token/Value            |\n| -------------------------------- | ------------ | ---------------------- |\n| Rótulos                          | color        | `--blue-warm-vivid-70` |\n| Rótulos (Fundo Escuro)           | color        | `--blue-warm-20`       |\n| Indicador                        | color        | `--blue-warm-vivid-70` |\n| Indicador                        | border-color | `--blue-warm-vivid-70` |\n| Indicador                        | border-style | `solid`                |\n| Indicador                        | border-width | `--surface-width-sm`   |\n| Indicador (Fundo Escuro)         | color        | `--blue-warm-20`       |\n| Indicador (Fundo Escuro)         | border-color | `--blue-warm-20`       |\n| Indicador (Fundo Escuro)         | border-style | `solid`                |\n| Indicador (Fundo Escuro)         | border-width | `--surface-width-sm`   |\n| Indicador Simples                | background   | `--gray-20`            |\n| Indicador Simples (Fundo Escuro) | border-color | `--pure-0`             |\n| Indicador Simples (Fundo Escuro) | border-style | `solid`                |\n| Indicador Simples (Fundo Escuro) | border-width | `--surface-width-sm`   |\n| Linha do Tempo                   | border-color | `--blue-warm-vivid-70` |\n| Linha do Tempo (Fundo Escuro)    | border-color | `--pure-0`             |\n| Linha do Tempo                   | border-style | `solid`                |\n| Linha do Tempo                   | border-width | `--surface-width-sm`   |"
      },
      {
        "title": "Cores do Estado Ativo",
        "level": 4,
        "content": "| Name                                        | Property     | Token/Value            |\n| ------------------------------------------- | ------------ | ---------------------- |\n| Rótulos                                     | color        | `--blue-warm-vivid-80` |\n| Rótulos (Fundo Escuro)                      | color        | `--blue-warm-20`       |\n| Indicador                                   | color        | `--pure-0`             |\n| Indicador                                   | border-color | `--pure-0`             |\n| Indicador                                   | border-style | `solid`                |\n| Indicador                                   | border-width | `--surface-width-sm`   |\n| Indicador Simples                           | background   | `--blue-warm-vivid-80` |\n| Indicador Simples (Fundo Escuro)            | background   | `--pure-0`             |\n| Indicador Vazio (Error, Alerta e concluído) | border-color | `--blue-warm-vivid-80` |\n| Indicador Vazio (Error, Alerta e concluído) | border-style | `solid`                |\n| Indicador Vazio (Error, Alerta e concluído) | border-width | `--surface-width-lg`   |"
      },
      {
        "title": "Cores do Estado Concluído",
        "level": 4,
        "content": "| Name                   | Property | Token/Value             |\n| ---------------------- | -------- | ----------------------- |\n| Rótulos                | color    | `--green-cool-vivid-50` |\n| Rótulos (Fundo Escuro) | color    | `--blue-warm-20`        |"
      },
      {
        "title": "Cores do Estado Alerta",
        "level": 4,
        "content": "| Name                   | Property | Token/Value      |\n| ---------------------- | -------- | ---------------- |\n| Rótulos                | color    | `--gray-80`      |\n| Rótulos (Fundo Escuro) | color    | `--blue-warm-20` |"
      },
      {
        "title": "Cores do Estado Error",
        "level": 4,
        "content": "| Name                   | Property | Token/Value      |\n| ---------------------- | -------- | ---------------- |\n| Rótulos                | color    | `--red-vivid-50` |\n| Rótulos (Fundo Escuro) | color    | `--blue-warm-20` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name         | Token Size               | Token Weight            |\n| ------------ | ------------------------ | ----------------------- |\n| Rótulos      | `-font-size-scale-up-01` | `--font-weight-medium`  |\n| Step Textual | `--font-size-scale-base` | `--font-weight-regular` |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name                   | Estado | Ícone                                       | Token Size         | Class (Font Awesome)       |\n| ---------------------- | ------ | ------------------------------------------- | ------------------ | -------------------------- |\n| Indicador Simples      | --     | <i class=\"fas fa-circle\"></i>               | `--icon-size-xs`   | `.fa-circle`               |\n| Ícone Estado Concluído | --     | <i class=\"fas fa-check\"></i>                | `--icon-size-base` | `.fa-check`                |\n| Ícone Estado Alert     | --     | <i class=\"fas fa-exclamation-triangle\"></i> | `--icon-size-base` | `.fa-exclamation-triangle` |\n| Ícone Estado Error     | --     | <i class=\"fas fa-times\"></i>                | `--icon-size-base` | `.fa-times`                |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                            | Property      |      Token/Value       |\n| ------------------------------- | ------------- | :--------------------: |\n| Indicador                       | margin-right  |  `--spacing-scale-2x`  |\n| Indicador                       | margin-botton |  `--spacing-scale-2x`  |\n| Indicador (Orientação Vertical) | margin-botton |  `--spacing-scale-3x`  |\n| Indicador Simples               | margin-right  | `--spacing-scale-base` |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name                                 | Property | Token/Value |\n| ------------------------------------ | -------- | :---------: |\n| Indicador (Densidade Padrão)         | width    |   `40px`    |\n| Indicador (Densidade Padrão)         | height   |   `40px`    |\n| Indicador Simples (Densidade Padrão) | width    |    `8px`    |\n| Indicador Simples (Densidade Padrão) | height   |    `8px`    |\n| Indicador (Densidade Baixa)          | width    |   `48px`    |\n| Indicador (Densidade Baixa)          | height   |   `48px`    |\n| Indicador Simples (Densidade Baixa)  | width    |   `12px`    |\n| Indicador Simples (Densidade Baixa)  | height   |   `12px`    |\n| Indicador (Densidade Alta)           | width    |   `32px`    |\n| Indicador (Densidade Alta)           | height   |   `32px`    |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Torne o componente *step* acessível pelo teclado. Os usuários de tecnologias assistivas devem conseguir navegar por meio das teclas `Tab` e `Shift + Tab`, para avançar e retroceder na navegação;\n\n- Os controles interativos do componente *step*, podem ser acionados a partir das teclas `Enter` ou `Space`;\n\n- Forneça dicas de foco quando o usuário estiver interagindo com *step* pelo teclado, indicando qual etapa está sendo focada no momento. Isso auxiliará os usuários com deficiências visuais a compreender o fluxo de navegação pelas etapas."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Forneça *feedback* sonoro e visual informando quando uma etapa for concluída com sucesso ou quando ocorrer um erro. Isso ajuda os usuários com baixa visão a entender o progresso das etapas;\n\n- Use rótulos com descrições claras e objetivas. Isso permite que os usuários entendam o que precisa ser feito em cada passo;\n\n- É importante que as etapas sejam apresentadas em uma ordem lógica, evitando confundir os usuários durante o fluxo das tarefas;\n\n- Certifique-se de seguir as recomendações de cores e contrastes indicados na diretriz do componente *step*. Isso garante a leitura com acessibilidade aceitável pelos padrões da WCAG;\n\n- Evite utilizar o indicador simples como a única de forma interativa de navegação. Sua forma reduzida dificulta a interação do usuário através do *mouse* ou *touch*; Se for o caso, utilize-o apenas como um elemento de apoio para navegação, acompanhado de um elemento de navegação principal;\n\n- Ofereça controles de navegação ao usuário sempre que utilizar o *step simples* e o *step textual*. Estes controles devem fazer parte do componente que os contém e seu funcionamento depende exclusivamente da característica deste componente. Por exemplo: botões para avançar ou voltar na navegação;\n\n- Em caso de *steps* que funcionem em *loop* automático, ofereça ao usuário controles de interação que permitam pausar ou retomar a animação. Por exemplo: botões para *pause* e *play*."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Para os *steps* interativos, recomenda-se utilizar a *tag* `<button>`;\n\n- Quando utilizar indicadores sem rótulo, utilize sempre recursos de `aria-labels` no código HTML, trazendo a informação da ação e permitindo a possibilidade de leitores de tela."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/step/step.md",
      "accessibilityPath": "ds/componentes/step/step-access.md"
    }
  },
  {
    "name": "Switch",
    "slug": "switch",
    "description": "*Switches* são controles usados para alternar rapidamente entre dois estados possíveis. São usados ​​apenas para ações binárias que ocorrem imediatamente após o usuário “girar” o botão de alternância. São comumente usados ​​para interruptores “liga/desliga”.",
    "documentationUrl": "https://www.gov.br/ds/components/switch",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de componente switch.](imagens/diretriz.png)\n*Exemplo do componente switch.*\n\nUtilize *switches* para ajudar usuários a atualizar preferências, configurações e outros tipos de informação que envolvam uma escolha entre duas seleções e os resultados são eficazes e visíveis imediatamente não havendo necessidade de o usuário clicar em um botão de envio."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome                 |                     Referência                     | Uso         |\n| --- | -------------------- | :------------------------------------------------: | ----------- |\n| 1   | *Label*              |  [Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 2   | *container*          |  [Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 3   | Chave de alternância |                        ---                         | Obrigatório |\n| 4   | Rótulo               |  [Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 5   | Ícone                | [Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n\n![Anatomia do componente switch.](imagens/anatomia.png)\n*Anatomia do componente switch.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Label (Opcional)",
        "level": 3,
        "content": "*Labels* são itens opcionais. Muitas vezes *switches* podem funcionar adequadamente sem *labels*, porém, se houver necessidade de deixar o entendimento mais claro, não hesite em utilizar *labels* que devem descrever concisamente o que o componente faz quando a alternância estiver ativada.\n\nO *label* pode estar localizado à esquerda, à direita ou acima do *switch* e a distância entre o *label* e o *switch* pode ser determinado pelo *layout* da tela. Uma vez definido como serão aplicados os *labels* em seu produto, mantenha sempre a consistência.\n\n![Possíveis posicionamentos do label em relação ao switch.](imagens/label.png)\n*Labels podem estar localizados em diversas posições em relação ao switch para melhor se adequar ao layout da página.*"
      },
      {
        "title": "2. Container (Obrigatório)",
        "level": 3,
        "content": "*Container* é o espaço que contem a chave de alternância e limita as duas posições aceitáveis para a escolha do usuário."
      },
      {
        "title": "3. Chave de alternância (Obrigatório)",
        "level": 3,
        "content": "Chave de alternância é simplesmente o sinalizador que alterna as posições ligado/desligado. Embora o usuário possa interagir clicando em qualquer parte do *switch*, é por meio da chave que o usuário tem o *feedback* da ação realizada."
      },
      {
        "title": "4. Rótulo (Opcional)",
        "level": 3,
        "content": "Rótulo são itens opcionais que ajudam a esclarecer as duas possibilidades de escolha do usuário. É recomendável usar rótulos quando for necessário dar maior visibilidade das opções disponíveis.\n\nRótulos favorecem a usabilidade, pois auxiliam no entendimento da posição em que a chave se encontra.\n\n![Exemplo de uso de rótulos no switch.](imagens/rotulo.png)\n*Use rótulos curtos e concisos.*"
      },
      {
        "title": "5. Ícone (Opcional)",
        "level": 3,
        "content": "Ícones podem ser utilizados opcionalmente para reforçar a opção escolhida pelo usuário. Neste caso, a usabilidade é potencializada, pois além da cor e da posição, o ícone auxilia semanticamente a posição que a chave de alternância se encontra.\n\n![Exemplo de uso de ícone na chave de alternância.](imagens/icone.png)\n*Ícones podem auxiliar a leitura das posições ligado/desligado.*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Densidades",
        "level": 3,
        "content": "O componente *switch* possui três densidades. Quanto menor for a densidade, maior a área de interação.\n\n![Exemplos de possíveis densidades para o componente switch.](imagens/densidades.png)\n*Exemplos das possíveis densidades do componente switch.*"
      },
      {
        "title": "2. Área interativa",
        "level": 3,
        "content": "O componente *switch* pode ser interativo em toda a área compreendida pelo elemento *container* e pelo *label* correspondente.\n\n![exemplo de áreas interativas do componente switch.](imagens/interatividade.png)\n*A interatividade do componente switch ocorre tanto na área compreendida pelo container como pelo label correspondente.*\n\n*Atenção:* nos casos em que o label e o *container* não estejam próximos apenas o *container* deverá ser interativo.\n\n![Exemplo de situação em que apenas o *container* deve ser interativo.](imagens/interatividade-2.png)\n*Neste exemplo apenas o container é interativo.*"
      },
      {
        "title": "3. Estados",
        "level": 3,
        "content": ""
      },
      {
        "title": "Desabilitado",
        "level": 4,
        "content": "Um *switch* pode ficar desabilitado quando uma interação for feita pelo usuário anteriormente e que reflita neste *switch*.\n\n![Exemplo de switch com estado desabilitado.](imagens/desabilitado.png)\n*Switches desabilitados.*\n\nA seguir apresentamos uma tabela com outros possíveis estados para o componente *switches*.\n\n![Outros casos possíveis de serem encontrados em switches.](imagens/estados.png)\n*Estados possíveis dos switches.*\n\n**Atenção:** consulte o documento de estados para se informar sobre a aplicação dos estados mencionados no componente *switch*."
      },
      {
        "title": "4. Agrupamento",
        "level": 3,
        "content": "O componente *switch*, funciona basicamente como um interruptor de alternância, permitindo aos usuários ligar ou desligar as opções apresentadas. No entanto, quando utilizados de forma agrupada, deverão vir associados a um componente *checkbox* principal, permitindo ao usuário selecionar e desselecionar todas, além de ter o *feedback* relacionado ao estado intermediário. Para maiores informações consultar \"Estado Intermediário\" na documentação do componente checkbox.\n![Exemplo de switches agrupados em uma lista associado a um checkbox principal](imagens/switches-agrupados.png)\n*Exemplo de switches agrupados em uma lista associado a um checkbox principal.*"
      },
      {
        "title": "5. Responsividade",
        "level": 3,
        "content": "Não há nenhum comportamento especial previsto para o componente *switch* quando aplicado em resoluções menores. Apenas esteja atento quanto à área de interação. Em dispositivos *touch screen* prefira utilizar densidade baixa, pois apresenta uma maior área de interação ao toque."
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- *Switches* devem ter efeito imediato e não devem exigir que o usuário clique em botões de \"Salvar\" ou \"Enviar\" para aplicar o novo estado.\n\n- Evite incluir *switches* em formulários longos onde outros tipos de campos de formulário estão presentes e os usuários precisarão clicar no botão \"Enviar\" para que outras alterações tenham efeito. Este cenário confunde os usuários porque eles não podem ter certeza se sua escolha de alternância terá efeito imediato.\n\n- Mantenha os rótulos dos *switches* curtos e diretos.\n\n- Certifique-se de que os *switches* sejam implementados de forma consistente. A inconsistência força os usuários a gastar mais tempo pensando em como interagir com os componentes.\n\n- O *Switch* deve ser posicionado na interface de forma firme e consistente durante o movimento da *chave de alternância* ou alternância de *labels* e surgimento de bordas de foco, evitando mudar o posicionamento do seu *container*. Caso contrário, poderá confundir ou atrapalhar o processo de interação do usuário com o componente.\n\n- Os rótulos devem descrever o que o *switch* fará quando a chave estiver ligada ou desligada. Eles não devem ser neutros ou ambíguos.\n\n- Evite mais de três termos para definir rótulos.\n\n- Use rótulos sempre na mesma posição em relação ao *switch*.\n\n- Evite utilizar rótulo apenas para um estado possível.\n\n![Exemplos de uso correto e incorreto de rótulos no switch.](imagens/rotulo-1.png)\n*Use rótulos curtos e concisos.*\n\n![Exemplos de uso correto e incorreto de rótulos no switch.](imagens/rotulo-2.png)\n*Não alterne a posição dos rótulos.*\n\n![Exemplos de uso correto e incorreto de rótulos no switch.](imagens/rotulo-3.png)\n*Use os rótulos sempre em pares.*\n\n*Atenção:* quando utilizar rótulos prefira alinhar o componente reservando espaço pelo rótulo de maior extensão. desta forma, evita-se o deslocamento do componente quando for alterada a chave de alternância.\n\n![Exemplos de uso correto de alinhamento dos rótulos.](imagens/rotulo-alinhamento.png)\n*Exemplos de boas práticas no alinhamento dos rótulos.*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Alinhamento",
        "level": 3,
        "content": "| Name  |        Spacing Token        |\n| ----- | :-------------------------: |\n| Label | `--spacing-vertical-center` |\n| Label | `--spacing-horizontal-left` |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name                        | Property                               |      Token/Value       |\n| --------------------------- | -------------------------------------- | :--------------------: |\n| Label (depende da posição)  | margin-right/margin-left/margin-botton |  `--spacing-scale-2x`  |\n| Rótulo (depende da posição) | margin-right/margin-left               | `--spacing-scale-base` |\n| *container* (alta)          | padding-all                            | `--spacing-scale-half` |\n| *container* (média)         | padding-all                            | `--spacing-scale-half` |\n| *container* (baixa)         | padding-left, padding-right            | `--spacing-scale-half` |\n| *container* (baixa)         | padding-top, padding-botton            | `--spacing-scale-half` |\n| *container*                 | margin-bottom                          | `--spacing-scale-base` |\n| Chave (ligado)              | horizontal align                       |        `right`         |\n| Chave (desligado)           | horizontal align                       |         `left`         |"
      },
      {
        "title": "Dimensão",
        "level": 3,
        "content": "| Name                         | Property | Token/Value |\n| ---------------------------- | -------- | :---------: |\n| *container* (alta)           | width    |   `40px`    |\n| *container* (alta)           | height   |   `24px`    |\n| Chave de alternância (alta)  | width    |   `16px`    |\n| Chave de alternância (alta)  | height   |   `16px`    |\n| *container* (média)          | width    |   `52px`    |\n| *container* (média)          | height   |   `30px`    |\n| Chave de alternância (média) | width    |   `22px`    |\n| Chave de alternância (média) | height   |   `22px`    |\n| *container* (baixa)          | width    |   `64px`    |\n| *container* (baixa)          | height   |   `36px`    |\n| Chave de alternância (baixa) | width    |   `28px`    |\n| Chave de alternância (baixa) | height   |   `28px`    |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name                       | Property   |      Color Token       |\n| -------------------------- | ---------- | :--------------------: |\n| Superfície                 | background |       `--pure-0`       |\n| Label                      | text       |      `--gray-80`       |\n| Rótulo                     | text       |      `--gray-80`       |\n| chave de alternância - on  | icon       | `--blue-warm-vivid-40` |\n| chave de alternância - off | icon       |      `--gray-20`       |\n| Ícones                     | icon       |       `--pure-0`       |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name   | Property    |        Token/Value        |\n| ------ | ----------- | :-----------------------: |\n| Label  | size        | `--font-size-scale-base`  |\n| Label  | font-weight | `--font-weight-semi-bold` |\n| Rótulo | size        | `--font-size-scale-base`  |\n| Rótulo | font-weight |  `--font-weight-regular`  |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name                         |                Ícone                |        Size        | Class (Font Awesome) |\n| ---------------------------- | :---------------------------------: | :----------------: | :------------------: |\n| Chave de alternância (alta)  |    <i class=\"fas fa-circle\"></i>    |  `--icon-size-sm`  |     `fa-circle`      |\n| Chave de alternância (média) |    <i class=\"fas fa-circle\"></i>    |  `--icon-size-lg`  |     `fa-circle`      |\n| Chave de alternância (baixa) |    <i class=\"fas fa-circle\"></i>    |  `--icon-size-2x`  |     `fa-circle`      |\n| Ícone off (alta)             | <i class=\"fas fa-times-circle\"></i> |  `--icon-size-xs`  |  `fa-times-circle`   |\n| Ícone off (média)            | <i class=\"fas fa-times-circle\"></i> |  `--icon-size-sm`  |  `fa-times-circle`   |\n| Ícone off (baixa)            | <i class=\"fas fa-times-circle\"></i> | `--icon-size-base` |  `fa-times-circle`   |\n| Ícone on (alta)              | <i class=\"fas fa-check-circle\"></i> |  `--icon-size-xs`  |  `fa-check-circle`   |\n| Ícone on (média)             | <i class=\"fas fa-check-circle\"></i> |  `--icon-size-sm`  |  `fa-check-circle`   |\n| Ícone on (baixa)             | <i class=\"fas fa-check-circle\"></i> | `--icon-size-base` |  `fa-check-circle`   |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Os usuários devem poder acessar o *switch* por meio da tecla `Tab` e alternar seu estado (ligado/desligado) por meio das teclas `Space` ou `Enter`;\n\n- Para que usuários com deficiência visual possam entender completamente a opção selecionada, os leitores de tela devem anunciar o rótulo descritivo e o estado atual do *switch*."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- O *switch* deve ter um rótulo claro e de fácil entendimento, que explica seu propósito;\n\n- Forneça indicação visual de foco conforme a recomendação na diretriz de estados. Isto ajuda os usuários que navegam com o teclado perceber claramente o *switch* selecionado;\n\n- Forneça *feedback* visual e/ou auditivo indicando qual é o estado atual da opção selecionada. Observe as indicações de cores de estado na diretriz do componente;\n\n- Ofereça uma área ampla o suficiente para que os usuários possam clicar ou tocar facilmente, mesmo para aqueles com deficiência motora."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Utilize o atributo `aria-label` ou forneça um rótulo associado através da *tag* `<label>` e o atributo `for`;\n\n- Quando ativado, o elemento *switch* deve ter o atributo `aria-checked` definido como `true` e quando desativado, o atributo `aria-checked` definido como `false`;\n\n- Se o *switch* for um elemento HTML do tipo `<input type=\"checkbox\">` ou `<input type=\"radio\">`, recomenda-se usar o atributo `checked` em vez da propriedade `aria-checked`."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/toggle/accessibility)\n- [Material Design System](https://m3.material.io/components/switch/accessibility)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/switch/switch.md",
      "accessibilityPath": "ds/componentes/switch/switch-access.md"
    }
  },
  {
    "name": "Tab",
    "slug": "tab",
    "description": "As *Tabs* (Abas) são Componentes de Navegação em Interface que tem a função de organizar o conteúdo da página em categorias ou seções, oferecendo maior usabilidade ao usuário.",
    "documentationUrl": "https://www.gov.br/ds/components/tab",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de *Tab*](imagens/type-default.png)\n*Exemplo de Tab*\n\nUtilize as *Tabs* quando:\n\n- Existir informação disponível em excesso, por página, e houver a necessidade de organizá-la em partes menores, ou seja, Categorias ou Seções;\n- For necessário melhorar a usabilidade e organização de conteúdos em tela."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "As *Tabs* são compostas pelos seguintes elementos:\n\n| ID  | Nome                 |                     Referência                     | Uso         |\n| --- | -------------------- | :------------------------------------------------: | ----------- |\n| 1   | Item da *Tab*        |      [Item](/ds/components/item?tab=designer)      | Obrigatório |\n| 2   | Rótulo da *Tab*      |  [Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 3   | Superfície da *Tab*  |  [Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 4   | Rótulo Contador      |  [Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 5   | Ícone                | [Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 6   | Componente *Divider* |   [Divider](/ds/components/divider?tab=designer)   | Obrigatório |\n\n![Anatomia das Tabs](imagens/anatomy.png)\n*Anatomia das Tabs*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Item da Tab (Obrigatório)",
        "level": 4,
        "content": "O Item da *Tab* é o elemento obrigatório que poderá conter ícone e informação textual correspondente à categoria ou seção. Seu número é variado dentro do Componente *Tab* e dependerá da quantidade de seções ou categorias existentes.\n\nÉ importante ressaltar que este elemento possui dois estados obrigatórios, o ativo e o interativo.\n\n![Item da Tab](imagens/tab-item.png)\n*Item da Tab*\n\nA - O Item da *Tab* Ativo tem a finalidade de mostrar ao usuário em qual aba ele se encontra.\n\nB - O Item da *Tab* Interativo é o estado padrão da *Tab* e representa as seções ou categorias não ativas.\n\nO tamanho do Item da *Tab* deverá sempre acompanhar a largura do Rótulo, respeitando os espaçamentos internos. Observe abaixo:\n\n![Rótulo da Tab](imagens/tab-space.png)\n*Largura da Tab*"
      },
      {
        "title": "2. Rótulo da Tab (Opcional)",
        "level": 4,
        "content": "O Rótulo da *Tab* é a informação textual que representa a categoria ou seção da *Tab*. O Tom e Voz deste elemento deve ser uma informação curta, direta e objetiva. Não é recomendado utilizar textos longos. Deve-se prezar, ao máximo, pelo uso de uma a três palavras.\n\n![Rótulo da Tab](imagens/tab-label.png)\n*Rótulo da Tab*"
      },
      {
        "title": "3. Superfície da Tab (Obrigatório)",
        "level": 4,
        "content": "A Superfície da *Tab* é um elemento obrigatório e conterá todos os Itens da *Tab*. Em sua base ele contém o Componente Divider, que tem a função de dividir as *Tabs* e o seu conteúdo. Observe abaixo:\n\n![Superfície da Tab](imagens/container-divider.png)\n*Superfície da Tab*\n\n**Atenção:** É importante observar, que mesmo se o número de Itens de *Tabs* somar uma largura menor que a largura da tela, a Superfície da *Tab* se estenderá até o limite da tela, como visto no exemplo acima."
      },
      {
        "title": "4. Rótulo Contador (Opcional)",
        "level": 4,
        "content": "O Rótulo Contador é um elemento opcional que tem como função exibir a quantidade de referências encontradas em uma *Tab*, como resultado de uma ação de uma pesquisa realizada pelo usuário.\n\n![Rótulo Contador](imagens/counter.png)\n*Rótulo Contador*\n\nNo exemplo acima, o usuário realizou uma busca por palavra-chave e o Componente *Tabs* exibe o Rótulo Contador em cada Item de *Tab*. Cada Rótulo Contador exibiu a quantidade de palavras-chave encontradas dentro de cada categoria ou seção."
      },
      {
        "title": "5. Ícone (Opcional)",
        "level": 4,
        "content": "O uso do elemento ícone no item da *tab* é opcional, tendo como função ser uma representação visual da funcionalidade do item ao qual ele representa, ilustrando e reforçando a compreensão da sua função pelo usuário.\n\nNa *web*, o item da *tab* quando apresentado sem os seus respectivos rótulos, ou seja, somente com os ícones, deverá este utilizar o recurso de *tooltip* para que o usuário tenha acesso ao nome do rótulo.\n\nConsulte especificações em [Tooltip](/ds/components/tooltip?tab=designer).\n\n![Anatomia das Tabs](imagens/type-icons.png)\n*Variações do uso de ícone nos itens da Tab*"
      },
      {
        "title": "6. Componente Divider (Obrigatório)",
        "level": 4,
        "content": "Componente padrão. Ver especificações em [Componente Divider](/ds/components/divider?tab=designer)."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": "O Componente *Tab* deve se adequar à largura da página, estendendo a Superfície da *Tab* até o limite na extremidade direita. Observe abaixo:\n\n![Grid de 12 Colunas](imagens/behavior-responsive-grid-12-cols.png)\n*Grid de 12 Colunas*\n\nQuando o espaçamento lateral for muito reduzido, deverão ficar visíveis apenas o Item da *Tab* Ativo e os que estiverem próximos a este. Neste caso, haverá navegação através do acesso por *swipe* dos Itens de *Tab* ocultos.\n\nÉ importante observar que este comportamento também ocorre quando o número de Itens de *Tab* for maior que a largura da tela."
      },
      {
        "title": "Responsividade Interna (Ícone e Label)",
        "level": 4,
        "content": "O componente item, quando apresentado com ícone e label, mudará sua disposição de diagramação, de horizontal para vertical, quando estiver na proporção do grid de 4 colunas, alinhando-os de forma responsiva com a mudança na dimensão e disposição da tela.\n![Alinhamento Interno](imagens/behavior-responsive-item.png)\n*Posicionamento responsivo interno do componente item*"
      },
      {
        "title": "2. Navegação por Swipe",
        "level": 3,
        "content": "A navegação por *swipe* é uma funcionalidade muito utilizada em dispositivos móveis e é destinado a solucionar problemas de dimensão e responsividade.\n\nÉ recomendável utilizar essa forma de navegação quando a quantidade de abas exceder a largura da tela ou dispositivo. Nesse caso, ao clicar e arrastar as abas para a direita, todas as *tabs* se deslocarão para esquerda, exibindo as que estiverem ocultas. O mesmo poderá ser feito em sentido contrário. Observe abaixo:\n\nA - O Componente *Tabs* se adéqua perfeitamente à tela com espaço excedente;\n\n![Tabs sem a navegação por swipe](imagens/behavior-swipe.png)\n*Componente Tabs sem o swipe*\n\nB - O Componente de *Tabs* é visualizado numa largura reduzida, alinhado à esquerda. Ao arrastar para a direita, os Itens de *Tab* ocultos deverão ser exibidos;\n\n![Navegação Swipe à direita](imagens/behavior-swipe-1.png)\n*Comportamento swipe à direita*\n\nC - Quando o usuário fizer o movimento de *swipe* ou arrasto no sentido contrário (da esquerda para a direita), deverá ser mostrado novamente as *Tabs* antes ocultas à esquerda;\n![Navegação Swipe à esquerda](imagens/behavior-swipe-2.png)\n*Comportamento swipe à esquerda*\n\nOptou-se pelo uso de \"sombras\" nas laterais onde as *tabs* estiverem ocultas, facilitando ao usuário, o entendimento da necessidade de se utilizar o recuso de navegação por *swipe* para exibir o conteúdo parcialmente oculto."
      },
      {
        "title": "Controle Swipe via Teclado",
        "level": 4,
        "content": "O Componente *Tabs* poderá ter sua função de *swipe* controlada por teclado, utilizando as Teclas de Navegação, Seta Esquerda e Seta Direita. A cada clique nas Teclas de Navegação, os Itens da *Tab* se deslocam para esquerda ou direita na distância de sua própria largura.\n\nPara mais informações acessar [Example of Tabs with Manual Activation](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html)."
      },
      {
        "title": "3. Alinhamento",
        "level": 3,
        "content": "Os Itens de *Tabs* devem, por padrão, manter o alinhamento à esquerda na Superfície da *Tab*.\n\n![Alinhamento](imagens/behavior-align.png)\n*Alinhamento*\n\nA - Rótulo centralizado no Item de *Tab*;\nB - Itens de *Tab* alinhados à esquerda na Superfície de *Tab*."
      },
      {
        "title": "4. Densidade",
        "level": 3,
        "content": "O Componente *Tab* possui três categorias de densidade:"
      },
      {
        "title": "A. Baixa Densidade",
        "level": 4,
        "content": "Utilize Baixa Densidade quando o projeto de layout permitir mais espaço ou quando houver a necessidade de dar mais destaque ao Componente *Tab*.\n![Tab em Baixa Densidade](imagens/behavior-density-low.png)\n*Tab em baixa densidade*"
      },
      {
        "title": "B. Densidade Padrão",
        "level": 4,
        "content": "É a forma comum do Componente *Tab*. Oferece um espaçamento interno adequado e equilibrado para várias categorias de projeto.\n![Tab em Densidade Padrão](imagens/behavior-density-standard.png)\n*Tab em densidade padrão*"
      },
      {
        "title": "C. Alta Densidade",
        "level": 4,
        "content": "Utilize Alta Densidade quando for necessário utiliza-lo em espaços mais restritos, ou dentro de outros elementos.\n![Tab em Alta Densidade](imagens/behavior-density-high.png)\n*Tab em alta densidade*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tabs dentro de Tabs",
        "level": 3,
        "content": "Seguindo os Princípios Gerais e Boas Práticas de *Design* e Usabilidade, é recomendado que *não* se utilize o Componente *Tabs* dentro de outro Componente *Tabs*. Isto deve-se ao fato de que, quando isto ocorre, o usuário poderá ter sua experiência de navegação confundida, além de aumentar sua sobrecarga cognitiva.\n\nLogo, quando for necessário definir uma nova divisão de categorias em um dos Itens de *Tab*, deve-se recorrer a outro Componente que propicie esta sub-divisão, como, por exemplo, o Componente *List*. Veja os exemplos abaixo:\n\n![Tabs dentro de Tabs](imagens/behavior-tab-inside-tab.png)\n*Utilize o componente list dentro de Tab, em vez de Tabs dentro de Tabs*"
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                             | Property   | Color Token            |\n| -------------------------------- | ---------- | ---------------------- |\n| Rótulo da *Tab*                  | color      | `--gray-80`            |\n| Rótulo da *Tab* Fundo Escuro     | color      | `--pure-0`             |\n| Rótulo Contador                  | color      | `--gray-80`            |\n| Rótulo Contador Ativo            | color      | `--blue-warm-vivid-80` |\n| Rótulo Contador Fundo Escuro     | color      | `--pure-0`             |\n| Item da *Tab*                    | background | `--pure-0`             |\n| Item da *Tab* Fundo Escuro       | background | `--blue-warm-vivid-90` |\n| Superfície da *Tab*              | background | `--pure-0`             |\n| Superfície da *Tab* Fundo Escuro | background | `--blue-warm-vivid-90` |\n| Ícone                            | color      | `--blue-warm-vivid-90` |\n| Ícone Fundo Escuro               | color      | `--pure-0`             |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name                  | Size                      | Weight                    |\n| --------------------- | ------------------------- | ------------------------- |\n| Rótulo da *Tab*       | `--font-size-scale-up-02` | `--font-weight-medium`    |\n| Rótulo Contador       | `--font-size-scale-base`  | `--font-weight-medium`    |\n| Rótulo Contador Ativo | `--font-size-scale-base`  | `--font-weight-semi-bold` |"
      },
      {
        "title": "Borda",
        "level": 3,
        "content": "| Name                       | Style   | Width                | Color                  | Size     |\n| -------------------------- | ------- | -------------------- | ---------------------- | -------- |\n| item do *Tab*              | `solid` | `--surface-width-lg` | `--blue-warm-vivid-90` | `bottom` |\n| item do *Tab* Fundo Escuro | `solid` | `--surface-width-lg` | `--pure-0`             | `bottom` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                           | Property       |           Value           |\n| ------------------------------ | -------------- | :-----------------------: |\n| Item da *Tab* Densidade Padrão | padding-left   |   `--spacing-scale-3x`    |\n| Item da *Tab* Densidade Padrão | padding-right  |   `--spacing-scale-3x`    |\n| Item da *Tab* Densidade Padrão | padding-top    |   `--spacing-scale-2x`    |\n| Item da *Tab* Densidade Padrão | padding-bottom |   `--spacing-scale-2x`    |\n| Item da *Tab* Baixa Densidade  | padding-left   |   `--spacing-scale-3x`    |\n| Item da *Tab* Baixa Densidade  | padding-right  |   `--spacing-scale-3x`    |\n| Item da *Tab* Baixa Densidade  | padding-top    |   `--spacing-scale-3x`    |\n| Item da *Tab* Baixa Densidade  | padding-bottom |   `--spacing-scale-3x`    |\n| Item da *Tab* Alta Densidade   | padding-left   |   `--spacing-scale-3x`    |\n| Item da *Tab* Alta Densidade   | padding-right  |   `--spacing-scale-3x`    |\n| Item da *Tab* Alta Densidade   | padding-top    |  `--spacing-scale-base`   |\n| Item da *Tab* Alta Densidade   | padding-bottom |  `--spacing-scale-base`   |\n| Superfície da *Tab*            | margin-bottom  |   `--spacing-scale-2x`    |\n| Rótulo Contador                | margin-top     |   `--spacing-scale-2x`    |\n| Ícone (Disposição Horizontal)  | margin-right   |  `--spacing-scale-base`   |\n| Ícone (Disposição Vertical)    | margin-bottom  | `--spacing-scale-default` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Certifique-se de que as *tabs* possam ser acessadas e navegadas pelo teclado, sem a ajuda do *mouse*. Isto visa auxiliar usuários de leitores de tela;\n\n- Os usuários devem conseguir navegar pelas abas através do teclado por meio das teclas `Tab` e setas direcionais `left` e `right`;\n\n- Ao acessar o componente *tabs*, o foco inicial deve cair sobre a primeira aba interativa;\n\n- Os itens do componente *tabs* podem ser acionadas por meio das teclas `Enter` ou `Space`;\n\n- Como recursos **opcionais** de navegação por teclado, pode-se utilizar as teclas `Home` e `End` para mover o foco para a primeira e para a última aba respectivamente."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Certifique-se de que cada aba contenha um rótulo claro e útil, de modo que seja fácil para o usuário entender o conteúdo que se encontra dentro da aba;\n\n- Quando o usuário navegar pelas abas com a tecla `Tab`, o foco do teclado deve ser visível para que fique claro qual aba está selecionada. Por isso, é importante observar as informações sobre os estados das abas na diretriz do componente;\n\n- Forneça um *feedback* visual claro e distinguível para a aba ativa, seguindo as recomendações de estados na diretriz do componente. Se possível, forneça *feedback* sonoro para usuários que usam tecnologias assistivas;\n\n- É importante oferecer aos usuários de dispositivos móveis uma área mínima de toque de `44px`;\n\n- Caso o número de abas não caibam na largura da tela - recorrente em dispositivos móveis - ofereça o recurso de rolagem horizontal. Isto permite que o usuário acesse todo conteúdo disponível."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Use marcação semântica adequada, como a propriedade `role = tablist` para a *tag* `<ul>` na raiz do componente;\n\n- Para as seções de conteúdo, podem ser usadas as *tags* `<section>` ou `<div>`, recebendo a propriedade `role = tabpanel`;\n\n- Ao usar a *tag* `<section>` é uma boa prática fazer uso de um título com a *tag* correspondente `<h1>`, `<h2>`, etc. Uma alternativa é usar a *tag* `<div>` caso isso não seja possível;\n\n- Relacione semanticamente o item de aba à seção de conteúdo correspondente: utilize a propriedade `role = tab` nos *links* das abas e um `id` próprio, atribuindo o valor deste `id` à propriedade `aria-labelledby` na seção de conteúdo correspondente;\n\n- Utilize o atributo `aria-selected`com valor `true` para aba ativa e `aria-selected`com valor `false` para abas não ativas;\n\n- Recomenda-se organizar o componente *tab* em uma estrutura de código semântica, contendo *tags* como `<nav>`, `<ul>`, `<li>`, `<a>` ou `<button>`.\n\nObserve o exemplo abaixo:\n\n```html\n<nav>\n  <ul role=\"tablist\">\n    <li>\n      <a role=\"tab\" href=\"#sessao1\" id=\"aba1\" aria-selected=\"true\">Aba 1</a>\n    </li>\n    <li>\n      <a role=\"tab\" href=\"#sessao2\" id=\"aba2\" aria-selected=\"false\">Aba 2</a>\n    </li>\n  </ul>\n</nav>\n<section role=\"tabpanel\" id=\"sessao1\" aria-labelledby=\"aba1\">\n  <h2>Sessão de Conteúdo 1</h2>\n  ...\n</section>\n<section role=\"tabpanel\" id=\"sessao2\" aria-labelledby=\"aba2\" hidden>\n  <h2>Sessão de Conteúdo 2</h2>\n  ...\n</section>\n```"
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/tabs/accessibility)\n- [Material Design System](https://m3.material.io/components/tabs/accessibility)\n- [Acessibilidade Digital - UFRGS](https://www.ufrgs.br/acessibilidadedigital/abas-tabs-acessiveis/)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/tab/tab.md",
      "accessibilityPath": "ds/componentes/tab/tab-access.md"
    }
  },
  {
    "name": "Table",
    "slug": "table",
    "description": "A *Table* (Tabela) é um conjunto de dados organizados em linhas e colunas.",
    "documentationUrl": "https://www.gov.br/ds/components/table",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de Tabela](imagens/type.png)\n*Exemplo de Table*\n\nUtilize a *Table* quando houver necessidade de organizar as informações de uma maneira intuitiva, com uma estrutura lógica que facilite a compreensão do conteúdo, utilizando o uso de hierarquia ou alfabetização."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "A *Table* é estruturada em:\n\n| ID  | Nome               |                   Referência                   | Uso         |\n| --- | ------------------ | :--------------------------------------------: | ----------- |\n| 1   | Barra de Título    |    [Item](/ds/components/item?tab=designer)    | Opcional    |\n| 2   | Barra Contextual   |    [Item](/ds/components/item?tab=designer)    | Opcional    |\n| 3   | *Header* da Tabela |  [Header](/ds/components/header?tab=designer)  | Obrigatório |\n| 4   | Linhas             | [Divider](/ds/components/divider?tab=designer) | Obrigatório |\n| 5   | Barra de Paginação |  [Footer](/ds/components/footer?tab=designer)  | Opcional    |\n| 6   | Colunas            | [Divider](/ds/components/divider?tab=designer) | Obrigatório |\n\n![Exemplo de Tabela](imagens/anatomy.png)\n*Exemplo de Table*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Barra de Título (Opcional)",
        "level": 4,
        "content": "A - A barra de título tem a função de exibir o título da tabela, texto usado para descrever o assunto da tabela. Caso seja necessário utilizá-lo, deve-se prezar por um tom e voz curto e objetivo. Não é recomendado utilizar um texto com mais de uma linha.\n\nB - A barra de título também tem a função de abrigar ícones de ações utilitárias.\n\n![Barra de Título](imagens/anatomy-title-bar.png)\n*Barra de Título*"
      },
      {
        "title": "Quantidade de ícones de ação",
        "level": 5,
        "content": "Tendo em vista a otimização do conteúdo na barra de título, recomendamos a utilização de até 4 ícones dispostos lado a lado na barra de título. Caso seja necessário utilizar uma quantidade maior, deve-se optar pelo uso do *menu* flutuante, que será acessado pelo botão `Ellipsis-v`. Veja o exemplo a seguir.\n\nA - Recomendamos utilizar até 4 ícones dispostos lado a lado;\n\nB - Com mais de 4 ícones de ação, utilize o botão de acesso ao *menu* flutuante;\n\n![Quantidade de Ícones de Ação](imagens/behavior-actions.png)\n*Quantidade de Ícones de Ação*"
      },
      {
        "title": "2. Barra Contextual (Opcional)",
        "level": 4,
        "content": "A barra contextual tem a função de exibir informações, ou ações contextuais referentes a uma, ou várias linhas selecionadas. Ao realizar a seleção de alguma linha, a barra contextual deverá aparecer logo abaixo da barra de títulos, deslocando as linhas da tabela para baixo e exibindo as ações ou informações relacionadas. Observe abaixo:\n\n![Barra Contextual](imagens/behavior-line-select-2.png)\n*Barra Contextual*\n\nA barra contextual pode conter:\n\n1. *Texto Contextual*\n2. *Itens de Ação Contextual*\n\n![Barra Contextual](imagens/anatomy-contextual-bar.png)\n*Barra Contextual*"
      },
      {
        "title": "3. Header da Tabela (Obrigatório)",
        "level": 4,
        "content": "O *header* da tabela é um elemento obrigatório, pois descreve o tipo de conteúdo exibido em cada coluna."
      },
      {
        "title": "Nome da coluna",
        "level": 5,
        "content": "![Header da Tabela](imagens/anatomy-header.png)\n*Header da Tabela*"
      },
      {
        "title": "Tom e Voz",
        "level": 6,
        "content": "O nome da coluna, texto que descreve o tipo de conteúdo exibido, deve ser conciso de modo a comunicar a sua mensagem de maneira mais eficiente possível. Estes textos não devem ser extensos (preferencialmente com quantidade de caracteres menor que os dados referentes).\n\n> *Dica*: faça uma lista de palavras-chave e depois escolha as mais relevantes para sua necessidade.\n\n*Exemplo*: nomes como \"Data Inicial\" e \"Data Final\" podem ser utilizados como \"Inicial\" e \"final\" respectivamente."
      },
      {
        "title": "4. Linhas (Obrigatório)",
        "level": 4,
        "content": "As linhas são elementos obrigatórios e apresentam os dados ou informações organizadas por colunas. Podem também conter funcionalidades para manipulação destes dados. Observe abaixo:\n\n1. *Dados ou Elementos Interativos*\n2. *Ação Expandir/Retrair*\n3. *Seleção de Linhas*\n\n![Elementos da Linha da Tabela](imagens/anatomy-lines.png)\n*Elementos da Linha da Tabela*"
      },
      {
        "title": "Dados ou elementos interativos",
        "level": 5,
        "content": "Os dados de uma linha podem conter:\n\n- Ícones\n- *Links*\n- Textos\n- Componentes de formulários (*checkbox*, *text*, *radio*, *select*...)"
      },
      {
        "title": "Estado Hover em tabelas sem interatividade (opcional)",
        "level": 4,
        "content": "Em tabelas muito extensas, sem interatividade, recomendamos a utilização do Estado *Hover* visando auxiliar o usuário durante a leitura dos dados na localização e acompanhamento das informações através do *mouse*, desta forma, \"marcando\" a linha com o ponteiro do *mouse* enquanto ocorre a leitura dos dados, desta forma a seta do cursor deverá ser apresentado no seu formato padrão. Ver exemplo abaixo:\n\n![Estado Hover - Fundo Claro e Escuro](imagens/behavior-state-hover-2.png)\n*Utilizando o estado hover na linha da Table*"
      },
      {
        "title": "5. Barra de Paginação (Opcional)",
        "level": 4,
        "content": "A paginação é exibida na parte inferior de uma tabela. Os controles de paginação fornecem acesso rápido a todas as páginas, enquanto indicam e permitem a configuração da quantidade de linhas de uma tabela. Consulte mais detalhes a respeito da paginação na documentação específica do componente *Pagination*.\n\n![Barra de Paginação](imagens/anatomy-pagination-bar.png)\n*Barra de Paginação*"
      },
      {
        "title": "6. Colunas (Obrigatório)",
        "level": 4,
        "content": "A coluna é um elemento obrigatório e essencial da tabela, pois para constituir uma tabela é necessário pelo menos uma coluna. Esta faz intersecção com o *Header* da tabela e a linha da tabela e abrigam os dados tanto do *Header* como da linha. O número de colunas em uma tabela é ilimitado e sua largura depende do tamanho do conteúdo interno.\n\n![Coluna da Tabela](imagens/anatomy-column.png)\n*Coluna da Tabela*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": ""
      },
      {
        "title": "Grid de 12 e 8 colunas",
        "level": 4,
        "content": "Nas *grids* de 12 e 8 colunas o comportamento responsivo padrão funciona com a quebra de linha do conteúdo interno das células da tabela. Esse é o comportamento padrão oferecido pela estrutura *HTML*. É importante observar, que este comportamento padrão ocorre não apenas com textos, mas em todos os tipos de conteúdo interno às células da tabela, como, por exemplo: ícones, botões ou imagens em sequência.\n\nVeja abaixo:\n\n![Grid de 12 Colunas](imagens/behavior-responsive-grid-12-cols.png)\n*Grid de 12 Colunas*\n\n![Grid de 8 Colunas](imagens/behavior-responsive-grid-8-cols.png)\n*Grid de 8 Colunas*"
      },
      {
        "title": "Truncamento",
        "level": 5,
        "content": "Pode-se utilizar um recurso para limitar o número de caracteres nas células e exibir apenas o início de cada texto. Os textos devem ser truncados exibindo as reticências no final. Ao passar o *mouse* sobre o texto truncado é revelado o texto completo pelo uso de *tooltip*. Veja o exemplo abaixo.\n\n![Grid de 8 Colunas](imagens/behavior-responsive-grid-8-cols-2.png)\n*Grid de 8 Colunas com Truncamento de Linha*"
      },
      {
        "title": "Grid de 4 colunas",
        "level": 4,
        "content": "Na *Grid* de 4 colunas, tendo em vista a característica bastante horizontal da tabela, é recomendável utilizar o recurso de rolagem, caso seja necessário exibir muitas colunas na tabela. Consulte detalhes em *Comportamento > Rolagem*.\n\n![Grid de 4 Colunas](imagens/behavior-responsive-grid-4-cols.png)\n*Grid de 4 Colunas*"
      },
      {
        "title": "Sugestão de usabilidade em grids de 4 Colunas",
        "level": 5,
        "content": "Sempre que possível, opte pela utilização dos recursos de busca e paginação, visando garantir uma melhor usabilidade, principalmente em *layouts* reduzidos.\n![Exemplo de recursos para melhorar a usabilidade](imagens/acessibility.png)\n*Exemplo de recursos para melhorar a usabilidade*"
      },
      {
        "title": "Grid de 4 colunas - Responsividade da barra contextual e da barra de título",
        "level": 5,
        "content": "Na barra contextual e barra de títulos o conjunto de ícones de ação podem ser agrupados em um único ícone. E as ações acessadas a partir do *menu* flutuante. Observe o exemplo abaixo:\n\nA - Os ícones de ação são dispostos lado a lado nas barra de título e contextual;\n\nB - Os ícones de ação são agrupados em um único ícone de *menu* flutuante.\n\n![Responsividade Barra Contextual e de Título](imagens/anatomy-title-contextual-responsive.png)\n*Responsividade barra contextual e de título*\n\n**Atenção:** É importante lembrar que quando houver mais de quatro ícones de ação na barra de título, é recomendável a utilização do ícone `Ellipsis-V` para o *menu* flutuante. Observe o exemplo acima."
      },
      {
        "title": "2. Rolagem",
        "level": 3,
        "content": "O comportamento de rolagem visa solucionar problemas de exibição de conteúdos muito extensos na tabela ou exibir conteúdo em espaços restritos."
      },
      {
        "title": "Rolagem vertical",
        "level": 4,
        "content": "Na rolagem vertical, a barra de título, o *Header da Table* e a barra de paginação permanecem fixas enquanto a rolagem ocorrerá apenas nas linhas da tabela. A barra de rolagem deverá ser posicionado na extrema direita da tabela entre o *Header da Table* e a barra de paginação.\n\n![Rolagem Vertical](imagens/behavior-scroll-1.png)\n*Rolagem Vertical*"
      },
      {
        "title": "Rolagem horizontal",
        "level": 4,
        "content": "A rolagem horizontal visa solucionar a exibição de uma tabela com muitas colunas em um espaço restrito. Neste caso, a barra de paginação e a barra de título permanecem fixas enquanto todo conteúdo da tabela deverá ser deslocado horizontalmente durante a rolagem. A barra de rolagem fica posicionada logo acima da barra de paginação.\n\n![Rolagem Horizontal](imagens/behavior-scroll-2.png)\n*Rolagem Horizontal*\n\nEm *layouts* muito pequenos como em dispositivos móveis (*Grid* de 4 colunas), o uso de barras de rolagem simples, também deverão ser utilizados considerando todo o conteúdo da tabela.\n![Exemplo de tabela em telas reduzidas com rolagem horizontal](imagens/horizontal-scroll.png)\n*Exemplo de tabela em telas reduzidas com rolagem horizontal*"
      },
      {
        "title": "3. Expandir e collapse",
        "level": 3,
        "content": "Este comportamento visa expandir a visualização de uma linha da tabela e exibir um conteúdo oculto, seja um painel, seja uma imagem ou qualquer outro conteúdo.\n\nA expansão da linha ocorre quando o usuário clicar sobre o botão `Chevron-Down` que se localiza no início de cada linha. Após a expansão ocorrer, o botão muda seu ícone para `Chevron-Up` e o usuário poderá recolher a visualização do conteúdo. Observe abaixo.\n\n![Linha Recolhida](imagens/behavior-expand-collapse-12-cols-1.png)\n*Linha Recolhida*\n\n![Linha Expandida](imagens/behavior-expand-collapse-12-cols-2.png)\n*Linha Expandida*\n\nObserve que o conteúdo exibido após a expansão da linha é marcado com uma sombra, fazendo diferenciação de hierarquia.\n\n**Atenção:** O conteúdo que será expandido internamente em cada linha, deve ser diagramado com cautela. O excesso de informação e elementos interativos podem confundir o usuário, atrapalhando a leitura e o entendimento dos dados encontrados na tabela. Evite componentes como: tabela, *card*, ou qualquer outro componente complexo responsável por organizar, ordenar informações em excesso. O uso mais comum de apresentar estes dados adicionais seria por uso de listas."
      },
      {
        "title": "4. Seleção de linhas",
        "level": 3,
        "content": "O comportamento de seleção de linhas é necessário quando o usuário deseja realizar uma ação posterior referente ao conteúdo desta linha. A seleção da linha ocorre quando o usuário marca o *checkbox* localizado no início de cada linha. Neste caso, toda linha assume o estado selecionado.\n\n![Seleção de Linhas](imagens/behavior-line-select-1.png)\n*Linha sem seleção*\n\nApós selecionada a linha, poderá ser utilizada a *Barra Contextual* que conterá informações e ações referentes à linha selecionada. Esta surgirá logo abaixo da barra de título. Quando forem selecionadas uma ou mais linhas da tabela, mas não todas, o *checkbox* do *header* da tabela assumirá o estado intermediário, indicando que uma ou algumas linhas estão selecionadas. Observe abaixo:\n\n![Seleção de Linhas](imagens/behavior-line-select-2.png)\n*Linha selecionada e Barra Contextual*\n\nO usuário também poderá selecionar todas as linhas simultaneamente, clicando no *checkbox* localizado no *header* da tabela. Neste caso, o *checkbox* no *header* da tabela assumirá o estado selecionado.\n\n![Seleção de Linhas](imagens/behavior-state-selected-3.png)\n*Selecionando todas as linhas*"
      },
      {
        "title": "5. Densidade",
        "level": 3,
        "content": "O componente *table* possui três categorias de densidade."
      },
      {
        "title": "Baixa densidade",
        "level": 4,
        "content": "Utilize baixa densidade quando o projeto de *layout* permitir mais espaço ou quando houver necessidade de dar mais destaque ao componente *Table*.\n\n![Baixa Densidade](imagens/behavior-low-density-grid-12-cols.png)\n*Baixa Densidade*"
      },
      {
        "title": "Densidade padrão",
        "level": 4,
        "content": "É a forma comum do componente *Table*. Oferece um espaçamento interno adequado e equilibrado para vários tipos de projetos.\n\n![Densidade Padrão](imagens/behavior-default-density-grid-12-cols.png)\n*Densidade Padrão*"
      },
      {
        "title": "Alta densidade",
        "level": 4,
        "content": "Utilize alta densidade quando for necessário usar o componente *Table* em espaços mais restritos ou otimizar o conteúdo em tela.\n\n![Alta Densidade](imagens/behavior-high-density-grid-12-cols.png)\n*Alta Densidade*\n\nConsulte especificações de Densidade em *Design Tokens*.\n\n**OBS:** Atentar-se para a correta utilização das densidades, onde a densidade escolhida afetará toda a estrutura da tabela (linhas e colunas)."
      },
      {
        "title": "6. Busca",
        "level": 3,
        "content": "Este comportamento tem a função de auxiliar o usuário na procura por algum conteúdo específico na tabela. O usuário poderá fazer a busca por palavra-chave acionando o botão `Search` na barra de título da tabela. Observe abaixo:\n\nA - O usuário aciona o botão `Search` na barra de título para abrir a opção de busca;\n\nB - Após acionar o botão `Search`, o campo de busca aparece por cima da barra de título cobrindo os demais elementos e, ao lado dele, será exibido o botão fechar;\n\nC - Enquanto o usuário digitar a palavra-chave no campo de busca, as palavras correspondentes à pesquisa serão destacadas automaticamente no conteúdo da tabela, e só serão exibidas as linhas contendo a palavra-chave digitada;\n\nD - O usuário poderá ocultar o campo de busca clicando no botão fechar.\n\n![Busca](imagens/behavior-search-1.png)\n*Busca*"
      },
      {
        "title": "7. Estados",
        "level": 3,
        "content": "O componente *Table* possui os seguintes estados:"
      },
      {
        "title": "Estado hover",
        "level": 4,
        "content": "O estado *hover* ocorre quando o usuário passa o *mouse* sobre a linha da tabela.\n\n![Estado Hover - Fundo Claro e Escuro](imagens/behavior-state-hover.png)\n*Estado Hover - Fundo Claro e Escuro*"
      },
      {
        "title": "Estado selecionado",
        "level": 4,
        "content": "O estado selecionado ocorre quando o usuário seleciona uma ou todas as linhas da tabela através do *checkbox*.\n\n![Estado Selecionado - Fundo Claro e Escuro](imagens/behavior-state-selected.png)\n*Estado Selecionado - Fundo Claro e Escuro*"
      },
      {
        "title": "8. Agrupamento de colunas e linhas",
        "level": 3,
        "content": "Sempre que possível opte pela utilização de tabelas simples, pois, múltiplos níveis de cabeçalhos para colunas podem confundir usuários que se utilizam de leitores de tela, contudo, em alguns casos, existe a necessidade da utilização de tabelas complexas que requerem mais do que um nível de cabeçalhos de linhas e/ou colunas. Essa organização visa garantir uma maior liberdade e flexibilidade na organização das informações apresentadas."
      },
      {
        "title": "Agrupamento por colunas",
        "level": 4,
        "content": "![Exemplo de tabela com colunas agrupadas](imagens/behavior-group-columns.png)\n*Exemplo de tabela com colunas agrupadas*"
      },
      {
        "title": "Agrupamento por linhas",
        "level": 4,
        "content": "![Exemplo de tabela com linhas agrupadas](imagens/behavior-group-rows.png)\n*Exemplo de tabela com linhas agrupadas*\n\n**OBS:** Para mais informações consultar \"Tables with irregular headers\", da W3C na área de referências."
      },
      {
        "title": "9. Ordenação",
        "level": 3,
        "content": "O comportamento de ordenação tem a utilidade de organizar o conteúdo das colunas exibidas na tabela à partir de uma lógica de visualização, ou seja: ordem crescente ou decrescente. Para ordenar a visualização da tabela, o usuário poderá clicar em qualquer área da célula do *header* que esteja com o texto no seu estado interativo. A cada novo *click* o ícone e a cor do estado mudará, garantindo um *feedback* visual e indicando o tipo de ordenação utilizado na coluna.\n\nApós clicar no *header* de uma coluna que esteja no estado interativo, sua celular mudará para o estado ordenado, indicando que houve uma mudança na ordenação da coluna. Ver sequência e estados de acionamentos abaixo:\n\n![Ordenação](imagens/behavior-state-change.png)\n*A - Exemplo de tabela sem ordenação definida; B - Após contato com a seta do mouse o estado do header mudará o hover; C - Exemplo do header da tabela sendo clicado; D - Após clique, os dados da coluna serão ordenado no modo crescente, com o ícone indicando o sentido e o header será apresentado no estado ordenado; E - No instante de um novo clique, o header da tabela apresentará novamente o estado pressionado; F - Após novo acionamento, os dados serão re-ordenados no modo decrescente, o estado do header será apresentado novamente no estado ordenado, porém com o sentido do ícone invertido indicando a nova ordenação.*\n\n**Atenção:** Na ordenação, o usuário só poderá selecionar um parâmetro por vez (Sem ordenação, Crescente ou Decrescente)."
      },
      {
        "title": "Possibilidade de ordenação de tabelas",
        "level": 4,
        "content": "O header da tabela poderá ser apresentado, de forma opcional, de duas maneiras distintas. Ver exemplo abaixo:\n\n![Possibilidade de Ordenação](imagens/behavior-interactive-rows.png)\n*A - Células não interativas, sem a funcionalidade de ordenação; B - Células interativas que permitem a funcionalidade de ordenação.*\n\nDesta maneira, o usuário poderá ser apresentando a funcionalidade de ordenação, através de uma representação interativa ou *feedback* visual (B) ou sem o estado interativo, onde não será possível ordenar o conteúdo da coluna da tabela (A)."
      },
      {
        "title": "Ordenação em tabelas complexas",
        "level": 4,
        "content": "O comportamento de ordenação em tabelas complexas poderá ser utilizado apenas nas colunas mais próxima às linhas, não podendo ser aplicado em colunas que agrupem outras colunas. Ver exemplos abaixo:\n\n![Ordenação](imagens/behavior-group-sort.png)\n*Ordenação em tabelas complexas*"
      },
      {
        "title": "Ícones de ordenação",
        "level": 4,
        "content": "Para indicar qual coluna está ordenada, será exibido um ícone com seta para baixo (decrescente) ou para cima (crescente) ao lado do nome da coluna. A ausência de setas ou uso de seta dupla (com estado *hover*) significa que a coluna está com ordenação padrão. Observe a seguir:\n\n![Ícones de Ordenação](imagens/behavior-sort-3.png)\n*A - Ordenação Padrão; B - Ordenação Padrão (*hover*); C - Ordenado Crescente; D - Ordenado Decrescente*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "Para que as tabelas atendam aos padrões do Design System de forma satisfatória é necessário atentar-se a algumas recomendações:\n\n- Antes de optar pelo agrupamento de linhas ou colunas nas tabelas, é necessário atentar-se para a possibilidade de simplificação das informações, evitando ao máximo problemas de entendimento devido ao excesso de informações apresentadas.\n- Para uma melhor organização, deve-se optar por fazer separações visuais nítidas com o uso de recursos com bordas destacadas entre os agrupamentos.\n- Evite o uso de colunas com células vazias.\n- Sempre que uma ordenação estiver sendo feita, a coluna estiver selecionada deverá ser apresentada com o estado ativo e com ícone visível.\n- Quando o cabeçalho da tabela não disponibilizar a funcionalidade de ordenação, o rótulo utilizado não deverá ser apresentado na cor do seu estado interativo.\n\n**OBS:** Essas recomendações visam beneficiar não somente as pessoas que possuem necessidades especiais, como também busca facilitar o entendimento para os demais usuários."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                              | Property   | Color Token            |\n| --------------------------------- | ---------- | ---------------------- |\n| Barra de Título                   | color      | `--gray-80`            |\n| Barra de Título                   | background | `--pure-0`             |\n| Barra de Título (Fundo Escuro)    | color      | `--pure-0`             |\n| Barra de Título (Fundo Escuro)    | background | `--blue-warm-vivid-90` |\n| Header da Tabela                  | color      | `--blue-warm-vivid-70` |\n| Header da Tabela                  | background | `--gray-5`             |\n| Header da Tabela (Fundo Escuro)   | color      | `--blue-warm-20`       |\n| Header da Tabela (Fundo Escuro)   | background | `--blue-warm-vivid-90` |\n| Linhas                            | color      | `--gray-80`            |\n| Linhas                            | background | `--pure-0`             |\n| Linhas (Fundo Escuro)             | color      | `--pure-0`             |\n| Linhas (Fundo Escuro)             | background | `--blue-warm-vivid-90` |\n| Barra de Paginação                | color      | `--gray-80`            |\n| Barra de Paginação                | background | `--pure-0`             |\n| Barra de Paginação (Fundo Escuro) | color      | `--pure-0`             |\n| Barra de Paginação (Fundo Escuro) | background | `--blue-warm-vivid-90` |"
      },
      {
        "title": "Estado Ordenação",
        "level": 4,
        "content": "| Name                            | Property   | Color Token            |        Opacity         |\n| ------------------------------- | ---------- | ---------------------- | :--------------------: |\n| Header da Tabela                | color      | `--blue-warm-vivid-80` |           -            |\n| Header da Tabela                | background | `--blue-warm-vivid-80` | `--surface-opacity-xs` |\n| Header da Tabela (Fundo Escuro) | color      | `--pure-0`             |           -            |\n| Header da Tabela (Fundo Escuro) | background | `--pure-0`             | `--surface-opacity-xs` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name             | Size                      | Weight                    |\n| ---------------- | ------------------------- | ------------------------- |\n| Barra de Título  | `--font-size-scale-up-01` | `--font-weight-semi-bold` |\n| Header da Tabela | `--font-size-scale-base`  | `--font-weight-semi-bold` |\n| Linhas           | `--font-size-scale-base`  | `--font-weight-medium`    |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                                  | Property       |         Value          |\n| ------------------------------------- | -------------- | :--------------------: |\n| Barra de Título (Densidade Padrão)    | padding-top    |  `--spacing-scale-2x`  |\n| Barra de Título (Densidade Padrão)    | padding-bottom |  `--spacing-scale-2x`  |\n| Barra de Título (Densidade Padrão)    | padding-left   |  `--spacing-scale-2x`  |\n| Barra de Título (Densidade Padrão)    | padding-right  |  `--spacing-scale-2x`  |\n| Header da Tabela (Densidade Padrão)   | padding-top    |  `--spacing-scale-2x`  |\n| Header da Tabela (Densidade Padrão)   | padding-bottom |  `--spacing-scale-2x`  |\n| Header da Tabela (Densidade Padrão)   | padding-left   |  `--spacing-scale-3x`  |\n| Header da Tabela (Densidade Padrão)   | padding-right  |  `--spacing-scale-3x`  |\n| Linhas (Densidade Padrão)             | padding-top    |  `--spacing-scale-2x`  |\n| Linhas (Densidade Padrão)             | padding-bottom |  `--spacing-scale-2x`  |\n| Linhas (Densidade Padrão)             | padding-left   |  `--spacing-scale-3x`  |\n| Linhas (Densidade Padrão)             | padding-right  |  `--spacing-scale-3x`  |\n| Barra de Paginação (Densidade Padrão) | padding-top    |  `--spacing-scale-2x`  |\n| Barra de Paginação (Densidade Padrão) | padding-bottom |  `--spacing-scale-2x`  |\n| Barra de Paginação (Densidade Padrão) | padding-left   |  `--spacing-scale-2x`  |\n| Barra de Paginação (Densidade Padrão) | padding-right  |  `--spacing-scale-2x`  |\n| Barra de Título (Baixa Densidade)     | padding-top    |  `--spacing-scale-3x`  |\n| Barra de Título (Baixa Densidade)     | padding-bottom |  `--spacing-scale-3x`  |\n| Barra de Título (Baixa Densidade)     | padding-left   |  `--spacing-scale-2x`  |\n| Barra de Título (Baixa Densidade)     | padding-right  |  `--spacing-scale-2x`  |\n| Header da Tabela (Baixa Densidade)    | padding-top    |  `--spacing-scale-3x`  |\n| Header da Tabela (Baixa Densidade)    | padding-bottom |  `--spacing-scale-3x`  |\n| Header da Tabela (Baixa Densidade)    | padding-left   |  `--spacing-scale-3x`  |\n| Header da Tabela (Baixa Densidade)    | padding-right  |  `--spacing-scale-3x`  |\n| Linhas (Baixa Densidade)              | padding-top    |  `--spacing-scale-3x`  |\n| Linhas (Baixa Densidade)              | padding-bottom |  `--spacing-scale-3x`  |\n| Linhas (Baixa Densidade)              | padding-left   |  `--spacing-scale-3x`  |\n| Linhas (Baixa Densidade)              | padding-right  |  `--spacing-scale-3x`  |\n| Barra de Paginação (Baixa Densidade)  | padding-top    |  `--spacing-scale-3x`  |\n| Barra de Paginação (Baixa Densidade)  | padding-bottom |  `--spacing-scale-3x`  |\n| Barra de Paginação (Baixa Densidade)  | padding-left   |  `--spacing-scale-2x`  |\n| Barra de Paginação (Baixa Densidade)  | padding-right  |  `--spacing-scale-2x`  |\n| Barra de Título (Alta Densidade)      | padding-top    | `--spacing-scale-base` |\n| Barra de Título (Alta Densidade)      | padding-bottom | `--spacing-scale-base` |\n| Barra de Título (Alta Densidade)      | padding-left   |  `--spacing-scale-2x`  |\n| Barra de Título (Alta Densidade)      | padding-right  |  `--spacing-scale-2x`  |\n| Header da Tabela (Alta Densidade)     | padding-top    |  `--spacing-scale-2x`  |\n| Header da Tabela (Alta Densidade)     | padding-bottom |  `--spacing-scale-2x`  |\n| Header da Tabela (Alta Densidade)     | padding-left   |  `--spacing-scale-3x`  |\n| Header da Tabela (Alta Densidade)     | padding-right  |  `--spacing-scale-3x`  |\n| Linhas (Alta Densidade)               | padding-top    | `--spacing-scale-base` |\n| Linhas (Alta Densidade)               | padding-bottom | `--spacing-scale-base` |\n| Linhas (Alta Densidade)               | padding-left   |  `--spacing-scale-3x`  |\n| Linhas (Alta Densidade)               | padding-right  |  `--spacing-scale-3x`  |\n| Barra de Paginação (Alta Densidade)   | padding-top    | `--spacing-scale-base` |\n| Barra de Paginação (Alta Densidade)   | padding-bottom | `--spacing-scale-base` |\n| Barra de Paginação (Alta Densidade)   | padding-left   |  `--spacing-scale-2x`  |\n| Barra de Paginação (Alta Densidade)   | padding-right  |  `--spacing-scale-2x`  |"
      },
      {
        "title": "Sombra (Collapse e Scroll)",
        "level": 3,
        "content": "|  Name  | Offset (px) |                   Offset Token                   |\n| :----: | :---------: | :----------------------------------------------: |\n| Header |      1      |              `--surface-offset-sm`               |\n| Linha  |   1 ou -1   | `--surface-offset-sm` ou `--surface-offset-sm-n` |\n| Footer |     -1      |             `--surface-offset-sm-n`              |\n\n|      Name      | Blur (px) |     Blur Token      |\n| :------------: | :-------: | :-----------------: |\n| Header e Linha |     6     | `--surface-blur-lg` |\n\n|      Name      | Camada |     Layer Token     |\n| :------------: | :----: | :-----------------: |\n| Header e Linha |   1    | `--z-index-layer-1` |"
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Tables with irregular headers](https://www.w3.org/WAI/tutorials/tables/irregular/)"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- A navegação deve seguir de célula em célula do componente *table*, começando pela primeira célula na coluna à esquerda e na linha do topo, e seguindo para a próxima célula à direita até alcançar a última célula na coluna à direita. Em seguida, deve passar para a próxima linha e repetir o mesmo processo;\n\n- Quando houver controles interativos dentro das células do *table*, garanta que entrem no fluxo de navegação seguindo a ordem da tabulação;\n\n- Para percorrer a navegação no *table* via teclado, utilize a tecla `Tab`;\n\n- Quando houver caixas de seleção com foco dentro das células do *table*, a navegação pode ser feita por meio das teclas direcionais no teclado `arrow keys` (para cima ou para baixo);\n\n- Os controles interativos devem ser acionados a partir das teclas `Enter` ou `Space`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- É importante que os *tables* sejam projetados de forma acessível, o que significa que devem possuir cabeçalho de linha e colunas claramente identificáveis, rótulos de célula claros e navegação por teclado consistente;\n\n- Evite o uso de colunas com células vazias;\n\n- Utilize o ícone com a indicação `sort` nas colunas que tenham controle de ordenação. Se a coluna já foi ordenada, utilize os ícones com as indicações correspondentes à ordem em que ela se encontra (`sort-up` ou `sort-down`);\n\n- Sempre que uma ordenação for realizada, apresente a coluna selecionada com o estado ativo e com ícone visível."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- **Sempre** utilize a estrutura de *tags* semânticas para o *table* (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<tr>`, `<td>`). Isso auxilia na identificação das informações pelos leitores de tela;\n\n- Forneça informações suficientes sobre os controles interativos, por meio dos atributos `title` ou `aria-label`, para que os usuários de leitores de tela possam entender e interagir com eles;\n\n- Utilize o atributo `aria-sort` nos controles de ordenação de colunas."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/data-table/accessibility)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/table/table.md",
      "accessibilityPath": "ds/componentes/table/table-access.md"
    }
  },
  {
    "name": "Tag",
    "slug": "tag",
    "description": "*Tag* é qualquer tipo de sinalizador que pode indicar um *status*, uma quantidade ou uma informação de forma precisa e direta.",
    "documentationUrl": "https://www.gov.br/ds/components/tag",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplos de tipos de tags.](imagens/diretriz.png)\n*Exemplos de tipos do componente tag*\n\nUse *tags* para informar, rotular, chamar atenção ou categorizar itens usando palavras-chave, ícones ou cores."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "Devem ter um relacionamento claro e útil com o conteúdo ou tarefa aos quais estão relacionados. Por serem elementos compactos é recomendado o uso de informações discretas e objetivas:\n\n- No caso de textos, utilize o mínimo de palavras possíveis (de preferência somente uma) e/ou um ícone apenas;\n\n- Utilize apenas uma cor por *tag*."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "| ID  | Nome            |                          Referência                           | Uso         |\n| --- | --------------- | :-----------------------------------------------------------: | ----------- |\n| 1   | Superfície      |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 2   | Ícone           | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 3   | *Label*         |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 4   | Botão Terciário |    [Componente Button](/ds/components/button?tab=designer)    | Opcional    |\n\n![Anatomia dos tipos de tags.](imagens/anatomia.png)\n*Anatomia do componente tag*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Superfície (Obrigatório)",
        "level": 4,
        "content": "Todos os elementos da *tag* estão contidos na superfície que pode ter o formato retangular ou circular, conforme o tipo.\n\n![Exemplos de superfície.](imagens/superficie.png)\n*Superfícies do tag*\n\nCuidado com contraste de cores (*superfície* e o *texto/ícone*) nas *tag* que podem ser personalizadas.\n\n**Atenção:** os únicos tipos de *tags* que podem conter bordas são as *tags* de *status* e as *tags* de contagem."
      },
      {
        "title": "2. Ícone (Opcional)",
        "level": 4,
        "content": "Os ícones identificam entidades ou categorias. Funcionam como apoio aos *labels* ou podem ser o único conteúdo da *tag*. Nos casos em que o ícone seja o único elemento da *tag* o uso de *tooltip* é necessário.\n\n![Exemplos de ícones com tooltips.](imagens/icone.png)\n*Use tooltips para complementar informações em tags de ícone ou de status*"
      },
      {
        "title": "3. Label (Opcional)",
        "level": 4,
        "content": "*Labels* são conteúdos presentes nas *tags* com exceção da *tag* de ícone, o único tipo que não apresenta *label*. Na *tag* de *status* o uso de *label* é opcional.\n\n![Exemplos de tags que utilizam labels.](imagens/label.png)\n*Exemplos de tags com uso de labels*\n\n**Atenção:** o *label* da *tag* deve ser um adjetivo ou substantivo, *não use verbos*."
      },
      {
        "title": "4. Botão Terciário (Opcional)",
        "level": 4,
        "content": "A *tag* interativa é o único tipo em que é possível incluir um botão terciário para a sua remoção ou exclusão.\n\nFoi criada uma nova densidade para o botão terciário fechar especialmente para o componente *tag* denominada *extra-alta*.\n\n![Exemplo de tags interativas com o uso do botão terciário e uma tag de texto sem botão terciário.](imagens/botao-terciario.png)\n*Exemplo do uso de botão terciário em uma tag interativa e uma tag de texto que não possui botão terciário*\n\nO botão terciário deve manter o seu comportamento dentro do componente e funciona da mesma maneira em todos os estados."
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "Encontramos cinco tipos de componentes *tag*:\n\n1. *Tag* de interação;\n2. *Tag* de texto;\n3. *Tag* de *status*;\n4. *Tag* de contagem;\n5. *Tag* de ícone."
      },
      {
        "title": "1. Tag de Interação",
        "level": 3,
        "content": "As *tags* de interação, como o próprio nome sugere, são interativas, isto é, possuem uma ação ao serem clicadas/tocadas. De acordo com o tipo de interação podemos ter *tags* interativas dispensáveis e persistentes."
      },
      {
        "title": "1.1. Dispensável",
        "level": 4,
        "content": "Uma *tag* é considerada dispensável quando apresenta o botão terciário que permite que o usuário possa excluir a *tag*.\n\n![Imagem mostra o comportamento de antes e depois do fechamento de uma tag de interação dispensável ao acionar o botão terciário.](imagens/tag-interacao-fechar.png)\n*Ao clicar/tocar no botão fechar, uma tag é excluída de uma amostragem. Neste exemplo, a tag Label 2 foi excluída*\n\nUma *tag* interativa dispensável pode ser adicionada por meio de diversos componentes de entrada como: *input*, *select*, etc."
      },
      {
        "title": "1.2. Persistente",
        "level": 4,
        "content": "Uma *tag* é considerada persistente quando permitir que possa ser selecionada/desselecionada.\n\n![Imagem ilustrando como selecionar uma tag de interação persistente.](imagens/tag-interacao-selecionar.png)\n*Exemplo de tag selecionada*\n\nEssa funcionalidade é realizada interagindo em qualquer área do componente para selecionar uma *tag de interação persistente*. Ao se clicar/tocar novamente em uma *tag* já selecionada, ela é desselecionada retornando ao estado original.\n\nQuando se trabalha com grupos de *tags* é possível selecionar quantas *tags* desejar.\n\n![Exemplo de grupo de quatro tags de interação persistente alinhadas horizontalmente e três delas estão selecionadas](imagens/tag-interacao-selecionar-multiplo.png)\n*Neste exemplo temos três tags selecionadas*\n\n**Atenção:** as duas variações de *tags* de interação apresentadas (dispensáveis e persistentes) não podem ser utilizadas simultaneamente em um mesmo componente ou grupo de componentes."
      },
      {
        "title": "2. Tag de Texto",
        "level": 3,
        "content": "*Tags* de texto são utilizados quando é necessário identificar ou chamar a atenção de um elemento no *layout*, que de outra forma, poderia ser perdido. A *tag* de texto nunca é interativa.\n\nMuitas vezes, *tags* de texto podem utilizar um ícone para reforçar a sua mensagem. Quando isso ocorrer, o ícone deve vir à esquerda do *label*, como ilustra a figura abaixo:\n\n![Exemplos de tags de texto com e sem a utilização de ícone.](imagens/tag-text.png)\n*Exemplo de tag de texto com e sem uso de ícone*\n\nA imagem a seguir ilustra alguns dos mais frequentes usos da *tag* de texto:\n\n![Exemplos de aplicabilidade de tags de texto. No primeiro exemplo há uma lista com tags. No segundo exemplo há uma tabela com tags. No terceiro exemplo há um card com uma tag.](imagens/tag-text-exemples.png)\n*Algumas possibilidades comuns de uso da tag de texto*"
      },
      {
        "title": "3. Tag de Status",
        "level": 3,
        "content": "*Tags* de *status* basicamente informa o *status* de um elemento. É flexível podendo ser utilizado com *label* ou apenas a superfície circular. Neste caso, a informação é transmitida unicamente por meio de cores.\n\n![Exemplos de tag de status com e sem label.](imagens/tag-status.png)\n*Exemplo de tag de status com e sem uso de label*\n\n**Atenção:** lembre-se que ao optar pela *tag* de *status* sem *label* é recomendável utilizar *tooltip* para evitar ambiguidade."
      },
      {
        "title": "4. Tag de Contagem",
        "level": 3,
        "content": "*Tags* de contagem têm a função de contabilizar uma determinada informação e apresentar ao usuário. Por exemplo, a quantidade de mensagens não lidas na caixa de entrada.\n\n![Exemplo de tag de contagem.](imagens/tag-counter.png)\n*Exemplo de tag de contagem*\n\nAs *tags* de contagem podem conter no máximo três dígitos. Qualquer valor acima de 999 deve ser acrescido do sinal de \"+\" após o número 999.\n\n![Exemplos de tags de contagem com um, dois, três e mais de três dígitos.](imagens/tag-counter-digitos.png)\n*Exemplos das possibilidades de quantidade de dígitos nas tag de contagem*\n\n**Atenção:** em caso de números com mais de três dígitos é recomendado o uso de *tooltip* para especificar a quantidade exata do valor.\n\n![Exemplo do uso de tooltip na tag de contagem com mais de três dígitos](imagens/tag-counter-4digitos.png)\n*Exemplos do uso de uma tag de contagem com mais de três dígitos*\n\nA imagem a seguir ilustra alguns dos mais frequentes usos da *tag* de contagem:\n\n![Exemplos comuns do uso de tags de contagem. No primeiro exemplo há um avatar com uma tag de contagem. No segundo exemplo há o componente tabs com tag de contagem em cada uma das abas.](imagens/tag-counter-exemples.png)\n*Algumas possibilidades comuns de uso da tag de contagem*"
      },
      {
        "title": "5. Tag de Ícone",
        "level": 3,
        "content": "*Tags* de ícone funcionam exatamente da mesma forma que as *tags* de texto, porém utilizam ícones em vez de textos para transmitir a informação.\n\n![Exemplos de tags de ícone, cada uma delas com um ícone diferente.](imagens/tag-icone.png)\n*Algumas possibilidades comuns de uso da tag de ícone*\n\nPor ser visual, a *tag* de ícone é mais sintética e direta. Por isso, escolha ícones que sejam de fácil assimilação pelo usuário e de preferência aqueles que já sejam popularmente conhecidos pela audiência. Lembre-se que é recomendado a utilização de *tooltip* para evitar ambiguidade.\n\n**Atenção:** somente as *tags* de *status*, de ícone e de contagem possuem bordas. Isso se deve ao fato de usualmente elas sobreporem outros elementos. Porém, por serem opcionais as bordas podem ser omitidas quando desnecessárias."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Classificação",
        "level": 3,
        "content": "Geralmente é utilizada a cor azul padrão para o *background* da superfície do componente *tag de interação* porque esta é a cor que indica que um elemento é interativo. Para os demais tipos de *tags* sugerimos utilizar a paleta de cores de apoio do *Design System*. Esteja sempre atento para garantir legibilidade e coerência semântica na escolha das cores.\n\n**Atenção:** não exagere na variedade de cores pois isso pode desviar a atenção do usuário do foco principal da tela."
      },
      {
        "title": "2. Estados",
        "level": 3,
        "content": "Somente a *tag* de interação possui estados que devem seguir o padrão dos demais componentes do DS, porém há algumas peculiaridades:\n\n- Quando houver botão terciário os estados de *hover*, pressionado e foco devem ocorrer no próprio botão;\n\n- Os demais estados ocorrem na *tag* por completo.\n\n![A imagem mostra exemplo de estados das tags. Há uma imagem para o estado padrão, para o hover, para o pressionado, para o foco, para o selecionado, para o desabilitado e para o arrastado.](imagens/estados.png)\n*Exemplo dos estados possíveis para tags*\n\n**Atenção:** quando *tag* é arrastada de uma posição para a outra, além de assumir o estado arrastado enquanto é realizada a ação, as demais *tags* à sua direita devem se deslocar para a esquerda e ao ser posicionado na nova posição os componentes a sua direita devem se deslocar para a direita.\n\n![Esta imagem representa o comportamento de dragging em um grupo de tags. Há três etapas. Antes: a primeira tag é pressionada. Durante: a tag é arrastada. Depois: a tag ocupa agora a terceira posição no grupo de tags.](imagens/tag-interacao-dragging.png)\n*Exemplo do comportamento de dragging com tags*"
      },
      {
        "title": "3. Densidade",
        "level": 3,
        "content": "O ajuste da densidade consiste em aumentar ou reduzir os espaçamentos internos dos elementos com intuito de possibilitar *tags* mais compactas ou mais expandidas em seu formato. Este recurso permite uma maior flexibilidade de uso das *tags*.\n\n![Imagem em forma de tabela mostrando a densidade alta, média e baixa para cada um dos cinco tipos de tag.](imagens/densidade.png)\n*Exemplo das possíveis densidades para tags*"
      },
      {
        "title": "4. Dimensões",
        "level": 3,
        "content": "O componente *tag* possui uma altura fixa e por isso não é permitida mais de uma linha de texto ou ícone no mesmo componente.\n\n![Imagem ilustrando como fazer uma tag com uma única linha e mostrando que não se deve fazer uma tag com duas linhas.](imagens/tag-linha.png)\n*Só é permitida uma única linha de texto/ícone nas tags*\n\nQuanto à largura, a quantidade máxima permitida é de *cem caracteres*. Se um texto com mais de cem caracteres for inevitável deve-se truncar o conteúdo com o uso de reticências (...) a partir do centésimo caractere. Desta forma é indicado ao usuário que o texto tem continuidade.\n\n![Esta imagem mostra o exemplo de uma tag com o limite de cem caracteres e o texto truncado. Há um tooltip detalhando o texto truncado por completo.](imagens/tag-dimensao.png)\n*Exemplo com a quantidade máxima de caracteres aceita pela tag*\n\n**Atenção:** uma boa prática nesses casos é a utilização de *tooltip* para mostrar a informação completa."
      },
      {
        "title": "5. Distribuição",
        "level": 3,
        "content": "*Tags* podem estar agrupadas tanto horizontal quanto verticalmente mantendo a consistência nos espaços entre as *tags*.\n\n![Imagem mostra grupos de tags distribuídos horizontalmente e verticalmente.](imagens/distribuicao.png)\n*Exemplos de possibilidades de distribuição de tag na tela*\n\n**Atenção:** tenha em mente que *tags* também podem estar contidas em outros componentes como: modais, *cards*, *tables*, etc. e devem respeitar as orientações desses componentes."
      },
      {
        "title": "6. Entrada de tags",
        "level": 3,
        "content": "Quando for necessário o cadastro de *tags* pelo usuário sugerimos a utilização de componentes de entrada de dados, como: o *input* ou o *select*.\n\nO componente *input* é mais indicado para a entrada de *tags* criadas aleatoriamente pelo usuário por meio de digitação. Já o componente *select* funciona melhor para apresentar as *tags* sugeridas pelo sistema para que o usuário faça suas escolhas."
      },
      {
        "title": "Entrada de tags com o componente input",
        "level": 4,
        "content": "![Exemplo de entrada de tags por meio do componente input.](imagens/tags-entrada.png)\n*Exemplo dos passos para a criação de uma tag por meio do componente de entrada input*\n\n**Atenção:** o recurso de *auto complete* pode ser interessante em determinados casos."
      },
      {
        "title": "Entrada de tags com o componente select",
        "level": 4,
        "content": "![Exemplo de entrada de tags por meio do componente select.](imagens/tags-entrada-2.png)\n*Exemplo dos passos para a criação de uma tag por meio do componente de entrada select*\n\n**Atenção:** quando a entrada de *tags* for por meio de um componente de entrada como *input* ou *select* a *tag* deve ser do tipo *interação dispensável*.\n\nAs *tags* adicionadas devem ser disponibilizadas lado a lado até preencher o espaço horizontal disponível. Caso seja necessário, outras linhas de *tags* poderão ser criadas.\n\n![Exemplo de entrada de tags.](imagens/tags-entrada-3.png)\n*Para concluir a inserção de uma tag utilizando campos de input basta clicar no botão \"+\", \"Enter\" ou clicar fora da área do componente input após digitar o nome da tag*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- *Tags* são elementos de apoio e geralmente acompanham outros elementos. A exceção é a *tag* de interação, que pode funcionar como um componente isolado.\n\n- Evite utilizar *tags* de interação próximas a botões, pois podem causar confusão. Na dúvida, conduza testes de usabilidade para certificar-se de que sua implementação não esteja causando frustração.\n\n- Não misture *tags* de interação com *tags* estáticas. Depois de estabelecer um padrão de como as *tags* se comportam em seu *site*, os usuários sempre esperam esse comportamento.\n\n- Não exagere. As *tags* são mais úteis quando utilizadas com cautela, caso contrário seu significado pode ser diminuído. Lembre-se: se tudo em uma página for considerado importante, nada atrairá atenção exclusiva.\n\n- Mantenha a consistência dos *labels* ao realizar a entrada de *tags*."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Alinhamento [tag de Interação]",
        "level": 3,
        "content": "| Name                       |         Spacing Token         |\n| -------------------------- | :---------------------------: |\n| Label/Icon/Terciary-button |  `--spacing-vertical-center`  |\n| Label                      | `--spacing-horizontal-center` |\n| Icon                       |  `--spacing-horizontal-left`  |\n| Tertiary-button            | `--spacing-horizontal-right`  |"
      },
      {
        "title": "Alinhamento [tag de Texto]",
        "level": 3,
        "content": "| Name       |        Spacing Token         |\n| ---------- | :--------------------------: |\n| Label/Icon | `--spacing-vertical-center`  |\n| Label      | `--spacing-horizontal-right` |\n| Icon       | `--spacing-horizontal-left`  |"
      },
      {
        "title": "Alinhamento [tag de Status]",
        "level": 3,
        "content": "| Name       |         Spacing Token         |\n| ---------- | :---------------------------: |\n| Label      |  `--spacing-vertical-center`  |\n| Label      | `--spacing-horizontal-center` |\n| Superfície |  `--spacing-vertical-center`  |\n| Superfície | `--spacing-horizontal-center` |"
      },
      {
        "title": "Alinhamento [tag de Ícone]",
        "level": 3,
        "content": "| Name |         Spacing Token         |\n| ---- | :---------------------------: |\n| Icon |  `--spacing-vertical-center`  |\n| Icon | `--spacing-horizontal-center` |"
      },
      {
        "title": "Alinhamento [tag de Contagem]",
        "level": 3,
        "content": "| Name  |         Spacing Token         |\n| ----- | :---------------------------: |\n| Label |  `--spacing-vertical-center`  |\n| Label | `--spacing-horizontal-center` |"
      },
      {
        "title": "Espaçamento [Tag de Interação]",
        "level": 3,
        "content": "| Name            | Property                 |        Token/Value        |\n| --------------- | ------------------------ | :-----------------------: |\n| Label           | margin-right/margin-left |  `--spacing-scale-baseh`  |\n| Icon            | margin-left              |  `--spacing-scale-base`   |\n| Tertiary-button | margin-right             | `--spacing-scale-default` |"
      },
      {
        "title": "Espaçamento [Tag de Texto]",
        "level": 3,
        "content": "| Name  | Property                 |       Token/Value       |\n| ----- | ------------------------ | :---------------------: |\n| Label | margin-right/margin-left | `--spacing-scale-baseh` |\n| Icon  | margin-left              | `--spacing-scale-baseh` |"
      },
      {
        "title": "Espaçamento [Tag de Status]",
        "level": 3,
        "content": "| Name  | Property    |      Token/Value       |\n| ----- | ----------- | :--------------------: |\n| Label | margin-left | `--spacing-scale-base` |"
      },
      {
        "title": "Espaçamento [Tag de Entrada]",
        "level": 3,
        "content": "| Name           | Property                |      Token/Value       |\n| -------------- | ----------------------- | :--------------------: |\n| Tag de Entrada | margin-right/margin-top | `--spacing-scale-base` |"
      },
      {
        "title": "Tipografia [Tag de Interação]",
        "level": 3,
        "content": "| Name  | Property    |        Token/Value        |\n| ----- | ----------- | :-----------------------: |\n| Label | family      |   `–-font-family-base`    |\n| Label | font-weight |  `--font-weight-medium`   |\n| Label | size        | `--font-size-scale-up-01` |"
      },
      {
        "title": "Tipografia [Tag de Texto]",
        "level": 3,
        "content": "| Name  | Property    |       Token/Value        |\n| ----- | ----------- | :----------------------: |\n| Label | family      |   `–-font-family-base`   |\n| Label | font-weight |  `--font-weight-medium`  |\n| Label | size        | `--font-size-scale-base` |"
      },
      {
        "title": "Tipografia [Tag de Status]",
        "level": 3,
        "content": "| Name  | Property    |       Token/Value        |\n| ----- | ----------- | :----------------------: |\n| Label | family      |   `–-font-family-base`   |\n| Label | font-weight | `--font-weight-regular`  |\n| Label | size        | `--font-size-scale-base` |"
      },
      {
        "title": "Tipografia [Tag de Contagem]",
        "level": 3,
        "content": "| Name  | Property    |       Token/Value        |\n| ----- | ----------- | :----------------------: |\n| Label | family      |   `–-font-family-base`   |\n| Label | font-weight |  `--font-weight-medium`  |\n| Label | size        | `--font-size-scale-base` |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name             | Property |    Token/Value     |\n| ---------------- | -------- | :----------------: |\n| tag de interação | size     | `--icon-size-base` |\n| tag de texto     | size     | `--icon-size-base` |\n| tag de ícone     | size     | `--icon-size-base` |"
      },
      {
        "title": "Cores [Tag de Interação]",
        "level": 3,
        "content": "| Name       | Property |      Token/Value       |\n| ---------- | -------- | :--------------------: |\n| Label      | color    |       `--pure-0`       |\n| Superfície | color    | `--blue-warm-vivid-70` |"
      },
      {
        "title": "Cores [Tag de Texto]",
        "level": 3,
        "content": "| Name       | Property |            Token/Value            |\n| ---------- | -------- | :-------------------------------: |\n| Label      | color    |     `--pure-0` ou `--gray-80`     |\n| Superfície | color    | `Qualquer cor da paleta de apoio` |"
      },
      {
        "title": "Cores [Tag de Status]",
        "level": 3,
        "content": "| Name       | Property |                     Token/Value                      |\n| ---------- | -------- | :--------------------------------------------------: |\n| Label      | color    |                     `--gray-80`                      |\n| Superfície | color    | `Qualquer cor da paleta de apoio ou paleta de aviso` |"
      },
      {
        "title": "Cores [Tag de Ícone]",
        "level": 3,
        "content": "| Name       | Property |                     Token/Value                      |\n| ---------- | -------- | :--------------------------------------------------: |\n| Ícone      | color    |              `--pure-0` ou `--gray-80`               |\n| Superfície | color    | `Qualquer cor da paleta de apoio ou paleta de aviso` |"
      },
      {
        "title": "Cores [Tag de Contagem]",
        "level": 3,
        "content": "| Name       | Property |                     Token/Value                      |\n| ---------- | -------- | :--------------------------------------------------: |\n| Label      | color    |              `--pure-0` ou `--gray-80`               |\n| Superfície | color    | `Qualquer cor da paleta de apoio ou paleta de aviso` |"
      },
      {
        "title": "Arredondamento [Tag de Interação]",
        "level": 3,
        "content": "| Name       | Property              |         Value          |\n| ---------- | --------------------- | :--------------------: |\n| Superfície | top-left-bottom-right | `--surface-rounder-sm` |"
      },
      {
        "title": "Arredondamento [Tag de Texto]",
        "level": 3,
        "content": "| Name       | Property              |         Value          |\n| ---------- | --------------------- | :--------------------: |\n| Superfície | top-left-bottom-right | `--surface-rounder-sm` |"
      },
      {
        "title": "Arredondamento [Tag de Ícone]",
        "level": 3,
        "content": "| Name       | Property              |          Value           |\n| ---------- | --------------------- | :----------------------: |\n| Superfície | top-left-bottom-right | `--surface-rounder-pill` |"
      },
      {
        "title": "Arredondamento [Tag de Contagem]",
        "level": 3,
        "content": "| Name       | Property              |          Value           |\n| ---------- | --------------------- | :----------------------: |\n| Superfície | top-left-bottom-right | `--surface-rounder-pill` |"
      },
      {
        "title": "Tertiary Button [Tag de Interação]",
        "level": 3,
        "content": "| Name                 | Property |      Token/Value      |\n| -------------------- | -------- | :-------------------: |\n| Densidade extra-alta | height   | `--spacing-scale-3xh` |"
      },
      {
        "title": "Densidade",
        "level": 3,
        "content": "| Name                           | Property |       Token/Value       |\n| ------------------------------ | -------- | :---------------------: |\n| Tag de interação (dens. alta)  | height   |  `--spacing-scale-4x`   |\n| Tag de interação (dens. media) | height   |  `--spacing-scale-5x`   |\n| Tag de interação (dens. baixa) | height   |  `--spacing-scale-5xh`  |\n| Tag de texto (dens. alta)      | height   |  `--spacing-scale-2xh`  |\n| Tag de texto (dens. media)     | height   |  `--spacing-scale-3xh`  |\n| Tag de texto (dens. baixa)     | height   |  `--spacing-scale-4xh`  |\n| Tag de status (dens. alta)     | height   | `--spacing-scale-baseh` |\n| Tag de status (dens. media)    | height   |  `--spacing-scale-2x`   |\n| Tag de status (dens. baixa)    | height   |  `--spacing-scale-3x`   |\n| Tag de contagem (dens. alta)   | height   |  `--spacing-scale-2xh`  |\n| Tag de contagem (dens. media)  | height   |  `--spacing-scale-3x`   |\n| Tag de contagem (dens. baixa)  | height   |  `--spacing-scale-3xh`  |\n| Tag de ícone (dens. alta)      | height   |  `--spacing-scale-3xh`  |\n| Tag de ícone (dens. media)     | height   |  `--spacing-scale-4x`   |\n| Tag de ícone (dens. baixa)     | height   |  `--spacing-scale-5xh`  |"
      },
      {
        "title": "Border",
        "level": 3,
        "content": "| Name            | Surface Border Token        | Style | Width                | Color      |\n| --------------- | --------------------------- | ----- | -------------------- | ---------- |\n| Tag de status   | `--surface-border-solid-sm` | solid | `--surface-width-sm` | `--pure-0` |\n| Tag de contagem | `--surface-border-solid-sm` | solid | `--surface-width-sm` | `--pure-0` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- É recomendável que os usuários possam acessar as *tags* usando o teclado como meio de navegação;\n\n- Os usuários podem usar as teclas `Tab` e `Shift + Tab` para avançar ou retroceder na navegação;\n\n- Quando houver controles interativos dentro das *tags*, o foco da tabulação deve passar por eles e os usuários devem conseguir acioná-los com as teclas `Enter` ou `Space`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- O objetivo da *tag* é informar, rotular, chamar atenção ou categorizar de forma precisa e direta, portanto, utilize textos claros e objetivos;\n\n- O uso da cor é um ótimo recurso para personalizar as *tags* por situações ou categorias, porém não deve ser a única maneira de diferenciação. Utilize outras formas de categorização que podem ser identificadas por leitores de tela;\n\n- Certifique-se de atender os requisitos mínimos de contraste para leitura ao utilizar cores personalizadas nas *tags*."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/tag/accessibility/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/tag/tag.md",
      "accessibilityPath": "ds/componentes/tag/tag-access.md"
    }
  },
  {
    "name": "Textarea",
    "slug": "textarea",
    "description": "O *Textarea* é um campo de entrada de texto que permite que seu aplicativo aceite um valor de texto potencialmente longo do usuário.",
    "documentationUrl": "https://www.gov.br/ds/components/textarea",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de Textarea](imagens/behavior-states-interactive.png)\n*Exemplo de Textarea*\n\nUtilize o *Textarea* quando:\n\n- Houver a necessidade de inserir dados de forma textual através de um sistema ou aplicação;\n- A informação textual requerida for relativamente longa, exigindo múltiplas linhas de texto."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *Textarea* é constituído por:\n\n| ID  | Nome                       |                          Referência                           | Uso         |\n| --- | -------------------------- | :-----------------------------------------------------------: | ----------- |\n| 1   | *Label*                    |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 2   | Campo de Entrada de Texto  |                              ---                              | Obrigatório |\n| 3   | Ícone de Redimensionamento | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Obrigatório |\n| 4   | *Placeholder*              |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 5   | Mensagem                   |   [Componente Message](/ds/components/message?tab=designer)   | Opcional    |\n| 6   | Texto Auxiliar             |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n\n![Anatomia do Textarea](imagens/anatomy.png)\n*Anatomia do Textarea*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": "Abaixo segue o detalhamento dos itens do *Componente Textarea*. Para maiores informações consulte também a documentação [Padrão de Formulário](/ds/padroes/design/formulario)."
      },
      {
        "title": "1. Label (Opcional)",
        "level": 4,
        "content": "Auxiliam o usuário, indicando que tipo de informação deverá ser digitada no *Campo de Texto*. O texto do *Label* deverá ser curto e objetivo.\n\nAlém disso, o *Label* também tem a função de indicar ao usuário se o *Campo de Texto é obrigatório ou não*. Veja detalhes sobre a indicação de *Campos Obrigatórios/Opcionais* no documento [Padrão de Formulário](/ds/padroes/design/formulario)."
      },
      {
        "title": "Posicionamento do Label",
        "level": 5,
        "content": "A - O *Label* posiciona-se por padrão no topo do *Campo de Texto*.\n\nB - Caso haja necessidade, há um posicionamento alternativo, à esquerda do *Campo de Texto*, alinhado ao topo. Observe abaixo:\n\n![Posições para o Label](imagens/label.png)\n*Posições para o Label*\n\n**Atenção:** ao optar por um tipo de posicionamento, recomenda-se que todos os campos na página sigam o mesmo posicionamento, seja no topo ou na lateral do *Campo*."
      },
      {
        "title": "2. Campo de Entrada de Texto (Obrigatório)",
        "level": 4,
        "content": "Este é o elemento essencial e obrigatório do componente. Através dele o usuário poderá inserir múltiplas linhas de texto.\n\nÉ recomendado que o campo *Textarea* tenha um tamanho aproximado ao texto de entrada esperado, ou seja, recomenda-se prever este tamanho aproximado, dependendo da quantidade de caracteres esperada. Observe o exemplo abaixo:\n\n![Tamanho do Textarea](imagens/size.png)\n*Tamanho do Textarea*"
      },
      {
        "title": "3. Ícone de Redimensionamento (Obrigatório)",
        "level": 4,
        "content": "Este é um elemento padrão do próprio html, que tem como funcionalidade redimensionar o componente *Textarea*. É posicionado na parte inferior direita do *Textarea* e o redimensionamento poderá ser feito tanto na horizontal quanto na vertical. Para mais detalhes consulte *Comportamento > Redimensionamento*.\n\n![Exemplo de Ícone de Redimensionamento](imagens/icon.png)\n*Exemplo de Ícone de Redimensionamento*"
      },
      {
        "title": "4. Placeholder (Opcional)",
        "level": 4,
        "content": "O *placeholder* tem a função de auxiliar o usuário em como preencher os dados solicitados. Obrigatoriamente deverá trazer uma informação mais completa que a contida no *Label/Label*. Ele desaparecerá logo ao iniciar a digitação no campo de entrada de texto. E retornar no caso de exclusão da informação.\n\nUse o *Placeholder* quando o usuário não estiver familiarizado com a entrada solicitada ou a formatação estiver em questão (por exemplo, AAAA-MM-DD).\n\n![Exemplo de Placeholder](imagens/placeholder.png)\n*Exemplo de Placeholder*"
      },
      {
        "title": "5. Mensagem (Opcional)",
        "level": 4,
        "content": "O Componente *Message* é utilizado quando há necessidade de dar uma mensagem de *feedback* ao usuário. A mensagem pode ter até quatro objetivos diferentes: *Erro*, *Sucesso*, *Alerta* e *Informativo*. Observe os exemplos abaixo:\n\n![Componente Mensagem Erro](imagens/behavior-states-danger.png)\n*Componente Mensagem Erro*\n\n![Componente Mensagem Sucesso](imagens/behavior-states-success.png)\n*Componente Mensagem Sucesso*\n\n![Componente Mensagem Alerta](imagens/behavior-states-alert.png)\n*Componente Mensagem Alerta*\n\n![Componente Mensagem Informativa](imagens/behavior-states-info.png)\n*Componente Mensagem Informativa*"
      },
      {
        "title": "6. Texto Auxiliar (Opcional)",
        "level": 4,
        "content": "O *Texto Auxiliar* é opcional e tem a função de ajudar o usuário no preenchimento do texto, acrescentando alguma informação mais detalhada. É bastante útil quando a informação no *Label* e *Placeholder* não são suficientes.\n\n![Exemplo de Texto Auxiliar](imagens/text.png)\n*Exemplo de Texto Auxiliar*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": ""
      },
      {
        "title": "Grid de 12 e 8 Colunas",
        "level": 4,
        "content": "Na Grid de 12 e 8 colunas o *Textarea* terá seu tamanho ajustado a um tamanho aproximado da entrada de texto esperada. Poderá variar conforme à necessidade.\n\nAo reduzir a resolução da tela o *Textarea* poderá ter dois comportamentos esperados:\n\n1 - Adequa-se a nova largura de tela, quebrando linha e ocupando toda horizontal\n\n2 - Poderá ter sua própria largura comprimida.\n\nObserve abaixo:\n\n![Textarea - Grid de 12 colunas](imagens/behavior-responsive-grid-12-cols.png)\n*Textarea - Grid de 12 colunas*\n\n![Textarea - Grid de 8 colunas](imagens/behavior-responsive-grid-8-cols-1.png)\n*Textarea - Grid de 8 colunas ocupando toda largura Horizontal*\n\n![Textarea - Grid de 8 colunas](imagens/behavior-responsive-grid-8-cols.png)\n*Textarea - Grid de 8 colunas com largura comprimida*"
      },
      {
        "title": "Grid de 4 Colunas",
        "level": 4,
        "content": "Na Grid de 4 colunas, o *Textarea* deverá se estender por toda largura da tela, proporcionando mais espaço para o usuário digitar o texto solicitado. Também deverá ser utilizada uma altura razoável para melhor visualização por parte do usuário.\n\n![Textarea - Grid de 4 colunas](imagens/behavior-responsive-grid-4-cols.png)\n*Textarea - Grid de 4 colunas*"
      },
      {
        "title": "2. Redimensionamento",
        "level": 3,
        "content": "Através do *Ícone de Redimensionamento*, o *Textarea* poderá ser re-ajustado tanto na horizontal quanto na vertical ou em ambas as dimensões simultaneamente. Observe os exemplos abaixo:\n\n![Redimensionamento Horizontal](imagens/resize-horizontal.png)\n*Redimensionamento Horizontal*\n\n![Redimensionamento Vertical](imagens/resize-vertical.png)\n*Redimensionamento Vertical*\n\n![Redimensionamento Horizontal e Vertical](imagens/resize-horizontal-vertical.png)\n*Redimensionamento em ambas dimensões*"
      },
      {
        "title": "Tamanho Fixo Opcional",
        "level": 4,
        "content": "O redimensionamento do *Textarea* é um comportamento opcional, este poderá ser configurado para permanecer com o tamanho fixo na tela. Neste caso, o *Ícone de Redimensionamento* não será exibido.\n\n![Textarea com Tamanho Fixo](imagens/fix-size.png)\n*Textarea com Tamanho Fixo*"
      },
      {
        "title": "Tamanho Fixo Obrigatório - Mobile",
        "level": 4,
        "content": "Em dispositivos móveis, *Grid de 4 Colunas*, o tamanho do *Textarea* deve permanecer fixo, ocupando toda largura disponível, devido ao espaço reduzido para realizar o redimensionamento."
      },
      {
        "title": "3. Barra de Rolagem",
        "level": 3,
        "content": "Quando o número de caracteres ultrapassa a altura do *Textarea*, este deverá apresentar uma barra de rolagem. Observe abaixo:\n\n![Textarea com Barra de Rolagem](imagens/scroll.png)\n*Textarea com Barra de Rolagem*\n\n**Atenção:** a *Barra de Rolagem* será o elemento nativo renderizado pelo *Navegador*."
      },
      {
        "title": "4. Contagem de Caracteres (Opcional)",
        "level": 3,
        "content": "O *Componente Textarea* possui o comportamento de contagem de caracteres. Este comportamento é opcional e funciona de duas formas. Observe abaixo:"
      },
      {
        "title": "A. Preenchimento com limite máximo",
        "level": 4,
        "content": "Compreende em definir uma quantidade máxima de caracteres e através do *Texto Auxiliar* a quantidade restante de caracteres será atualizada dinamicamente enquanto o usuário digitar. Veja o exemplo abaixo:\n\n1 - O usuário ainda não começou digitar no campo de texto. O *Texto Auxiliar* informa ao usuário o limite máximo de caracteres permitidos.\n\n2 - O usuário está digitando o texto. A informação de caracteres restantes é atualizada dinamicamente no *Texto Auxiliar*.\n\n3 - O usuário atinge o limite máximo de caracteres permitido. O *Textarea* bloqueia o acesso à digitação e o *Texto Auxiliar* informa que não restam mais caracteres a serem preenchidos.\n\n![Contagem de Caracteres com limite](imagens/behavior-count-limit.png)\n*Contagem de Caracteres com limite*"
      },
      {
        "title": "B. Preenchimento sem limite máximo de caractere",
        "level": 4,
        "content": "Nesta situação o contador de caracteres indica a quantidade que já foi digitada apenas como informação ao usuário. Neste tipo, não há limitação da quantidade de caracteres digitada. Observe abaixo:\n\n1 - O usuário ainda não começou a digitar e o *Texto Auxiliar* informa que não foi digitado qualquer caractere.\n\n2 - O usuário está digitando e o *Texto Auxiliar* vai sendo atualizado dinamicamente informando a quantidade de caracteres digitada.\n\n3 - Enquanto o usuário continuar digitando a informação será atualizada no *Texto Auxiliar*. Neste caso não há limite máximo de caracteres.\n\n![Contagem de Caracteres sem limite](imagens/behavior-count.png)\n*Contagem de Caracteres sem limite*"
      },
      {
        "title": "5. Densidade",
        "level": 3,
        "content": "O *Textarea* poderá ser usado com densidades diferentes. A *Densidade* tem a ver com o espaço interno oferecido no *Campo de Entrada de Texto*. Consulte os espaçamentos em *Design > Tokens*."
      },
      {
        "title": "A. Densidade Baixa",
        "level": 4,
        "content": "É bastante útil quando for necessária uma área de 'respiro' maior ou quando for mais adequado ao projeto de *layout*.\n![Densidade do Textarea](imagens/behavior-density-low.png)"
      },
      {
        "title": "B. Densidade Média",
        "level": 4,
        "content": "É a densidade comum utilizada nos campos de entrada de texto. Geralmente utilizada, na maioria dos casos, em resoluções para *Tablet* e *Desktop*.\n![Densidade do Textarea](imagens/behavior-density-medium.png)"
      },
      {
        "title": "C. Densidade Alta",
        "level": 4,
        "content": "É a situação onde o espaçamento interno do campo é bastante reduzido.\n\n![Densidade do Textarea](imagens/behavior-density-high.png)\n*Densidade do Textarea*"
      },
      {
        "title": "6. Estados",
        "level": 3,
        "content": "O componente *Textarea* é bem parecido com o componente *input*. Portanto, boa parte dos comportamentos são similares e podem ser \"reaproveitados\".\n\nPara simplificação, utilize o comportamento Estados da mesma forma como é encontrado no [*Input*](/ds/components/input?tab=designer) (tanto na parte de uso em fundos claros e escuros como nas suas limitações descritas)."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                     | Property   | Token/Value |\n| ------------------------ | ---------- | ----------- |\n| Label/Label              | color      | `--gray-80` |\n| Label/Label Fundo Escuro | color      | `--pure-0`  |\n| Placeholder              | color      | `--gray-80` |\n| Texto Auxiliar           | color      | `--gray-80` |\n| Campo de texto           | background | `--pure-0`  |\n| Borda Campo de texto     | background | `--gray-40` |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name           | Token Size               | Token Weight              |\n| -------------- | ------------------------ | ------------------------- |\n| Label/Label    | `--font-size-scale-base` | `--font-weight-semi-bold` |\n| Placeholder    | `--font-size-scale-base` | `--font-weight-regular`   |\n| Texto Auxiliar | `--font-size-scale-base` | `--font-weight-regular`   |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name           |   Property    |      Token/Value       |\n| -------------- | :-----------: | :--------------------: |\n| Campo de texto |     Width     |       `variável`       |\n| Campo de texto |    Height     |       `variável`       |\n| Campo de texto | Border-Radius | `--surface-rounder-sm` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                           | Property       |       Token/Value       |\n| ------------------------------ | -------------- | :---------------------: |\n| Label/Label Topo               | margin-bottom  | `--spacing-scale-half`  |\n| Label/Label Lateral            | margin-right   | `--spacing-scale-base`  |\n| Placeholder                    | margin-left    |  `--spacing-scale-2x`   |\n| Placeholder                    | margin-top     | `--spacing-scale-base`  |\n| Texto Auxiliar                 | margin-top     | `--spacing-scale-base`  |\n| Campo de texto                 | margin-top     | `--spacing-scale-half`  |\n| Campo de texto                 | margin-bottom  | `--spacing-scale-base`  |\n| Campo de texto Densidade Baixa | padding-top    |  `--spacing-scale-2x`   |\n| Campo de texto Densidade Baixa | padding-bottom |  `--spacing-scale-2x`   |\n| Campo de texto Densidade Baixa | padding-left   |  `--spacing-scale-2x`   |\n| Campo de texto Densidade Baixa | padding-right  |  `--spacing-scale-2x`   |\n| Campo de texto Densidade Média | padding-top    | `--spacing-scale-baseh` |\n| Campo de texto Densidade Média | padding-bottom | `--spacing-scale-baseh` |\n| Campo de texto Densidade Média | padding-left   | `--spacing-scale-baseh` |\n| Campo de texto Densidade Média | padding-right  |  `--spacing-scale-2x`   |\n| Campo de texto Densidade Alta  | padding-top    | `--spacing-scale-base`  |\n| Campo de texto Densidade Alta  | padding-bottom | `--spacing-scale-base`  |\n| Campo de texto Densidade Alta  | padding-left   | `--spacing-scale-base`  |\n| Campo de texto Densidade Alta  | padding-right  |  `--spacing-scale-2x`   |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- *Textareas* devem ser acessíveis por meio de navegação via teclado, por meio da tecla `Tab`;\n\n- Utilize a marcação correta para o estado de foco previsto na diretriz de estados quando o foco estiver ativo no *textarea*;\n\n- Após o *textarea* receber o foco, permita que o usuário possa digitar imediatamente o texto sem necessidade de qualquer outro passo anterior;\n\n- Siga uma ordem lógica para tabulação, focalizando primeiramente o rótulo associado ao *textarea*, depois ícones/botões de informação associados ao rótulo e o *textarea*;\n\n- Por padrão, o usuário deve conseguir navegar entre as palavras do texto digitado com o uso das teclas `Ctrl + left/right` no Windows ou `Option + left/right` no Mac."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Utilize rótulos (*labels*) claros e descritivos para que o usuário compreenda o propósito do campo de texto;\n\n- Adicione ajuda contextual, fornecendo informações adicionais ou instruções para os usuários entenderem detalhes a respeito do preenchimento do *textarea*. Utilize um texto auxiliar abaixo do *textarea* ou um ícone de informação ao lado do rótulo;\n\n- Para validação em campos de texto, é importante fornecer *feedback* visual imediato quando o usuário preencher o *textarea*. Marque o *textarea* com a cor correspondente ao estado de sucesso, se o usuário preencher corretamente, ou cor correspondente ao estado de erro, se houver erro no preenchimento do campo."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Utilize a marcação semântica correta no código `HTML`, com a *tag* `<textarea>`;\n\n- Associe o *textarea* ao rótulo usando o atributo `for` na *tag* `<label>` e um `id` com mesmo valor na *tag*s `<textarea>`;\n\n- Caso seja necessário, use o atributo `aria-describedby` para vincular a um elemento de ajuda ou instrução e fornecer informações adicionais aos usuários que podem precisar de mais contexto."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/text-input/accessibility)\n- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/textarea/textarea.md",
      "accessibilityPath": "ds/componentes/textarea/textarea-access.md"
    }
  },
  {
    "name": "Tooltip",
    "slug": "tooltip",
    "description": "São alertas flutuantes que proporcionam ao usuário um *feedback* do sistema, informando sobre algum aspecto da interface que mereça maior atenção.",
    "documentationUrl": "https://www.gov.br/ds/components/tooltip",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo de tooltip.](imagens/tooltip-sample.png)\n*Exemplo de tooltip*\n\nUtilize *tooltip* quando:\n\n- houver necessidade de agregar detalhes de informação a elementos da interface ou qualquer informação visível na tela;\n\n- houver necessidade de exibição de informação que, em um primeiro momento, não necessita estar visível."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *tooltip* é composto pelos seguintes elementos:\n\n| ID  | Nome            |                         Referência                          | Uso         |\n| --- | --------------- | :---------------------------------------------------------: | ----------- |\n| 1   | Balão Flutuante | [Fundamento Superfície](/ds/fundamentos-visuais/superficie) | Obrigatório |\n| 2   | Seta Direcional |                             ---                             | Obrigatório |\n| 3   | Título          | [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia) | Opcional    |\n| 4   | Conteúdo        |                             ---                             | Obrigatório |\n| 5   | Botão Fechar    |                             ---                             | Opcional    |\n\n![Anatomia do tooltip.](imagens/tooltip-anatomy.png)\n*Anatomia do tooltip*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 3,
        "content": ""
      },
      {
        "title": "1. Balão Flutuante (Obrigatório)",
        "level": 4,
        "content": "O balão flutuante é o elemento essencial que contém todo conteúdo informativo do *tooltip* e possui as seguintes características:\n\n- Posicionamento dinâmico;\n- Visibilidade dinâmica;\n- Flutua sobre todos os outros elementos da tela.\n\nEste também pode ser apresentado com configurações de cores diferenciadas dependendo do contexto.\n\n![Balões flutuante.](imagens/tooltip-container.png)\n*Balões Flutuantes com cores diferenciadas*\n\n**Atenção:** por ser um elemento flutuante e se encontrar na camada 4 de elevação, o *tooltip* deve sempre apresentar sombras.\n\nConsulte o documento de [Fundamentos Visuais > Elevação](/ds/fundamentos-visuais/elevacao) para mais detalhes."
      },
      {
        "title": "2. Seta Direcional (Obrigatório)",
        "level": 4,
        "content": "A seta direcional é elemento obrigatório, e tem por finalidade indicar o elemento da interface ao qual o *tooltip* se refere.\n\nA seta pode ocorrer em qualquer um dos lados do balão flutuante. Este comportamento é útil para melhor ajuste do *tooltip* em relação à interface.\n\n![Setas direcionais](imagens/tooltip-arrows.png)\n*Setas direcionais nas quatro direções do tooltip*\n\n**Atenção:** caso a seta seja utilizada no topo ou na base do balão flutuante, esta deverá permanecer centralizada horizontalmente com o balão flutuante. Caso a seta seja usada nas laterais do balão flutuante, esta deve permanecer centralizada verticalmente em relação ao balão flutuante."
      },
      {
        "title": "3. Título (Opcional)",
        "level": 4,
        "content": "O título do *tooltip* pode ser utilizado quando houver a necessidade de conferir mais ênfase à informação apresentada.\n\n**Atenção:** nunca utilize o título com função de texto informativo. Confira a imagem abaixo:\n\n![Não utilize tooltips contendo apenas títulos.](imagens/tooltip-title.png)\n*Não utilize tooltips contendo apenas títulos*"
      },
      {
        "title": "4. Conteúdo (Obrigatório)",
        "level": 4,
        "content": "O conteúdo do *tooltip* deve sempre apresentar o texto informativo como padrão.\n\n![Conteúdo do tooltip com texto informativo padrão.](imagens/tooltip-type-default.png)\n*Conteúdo do tooltip com texto informativo padrão*\n\nSe for necessário apresentar conteúdos mais complexos, é possível utilizar recursos interativos como *buttons*, *hiperlinks* ou elementos gráficos, como imagens e ícones. É possível ainda a formatação de texto com recursos estilísticos como: *bold*, itálico, etc., assim como alinhamentos de texto variados. Nestes casos, utilize o tipo *popover*.\n\n![Conteúdo do tooltip.](imagens/tooltip-content.png)\n*Conteúdo do tooltip*\n\n**Atenção:** tenha sempre a preocupação de conferir o contraste dos elementos do conteúdo do *popover*."
      },
      {
        "title": "5. Botão Fechar (Opcional)",
        "level": 4,
        "content": "Utilize o componente *button* circular com ênfase terciária de densidade alta apenas no tipo *popover* e posicione-o sempre no canto superior direito do balão flutuante.\n\n![Botão fechar.](imagens/tooltip-icon-close.png)\n*Botão fechar em um tooltip do tipo popover*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Padrão",
        "level": 3,
        "content": "*Tooltips* do tipo padrão são aqueles que surgem automaticamente na tela ao se passar o ponteiro do *mouse* sobre um elemento (*mouse over*). São contextuais e devem apresentar informações curtas e concisas.\n\n![Tipo tooltip padrão.](imagens/type-tooltip.png)\n*Tooltips do tipo padrão*\n\nGeralmente são utilizados para explicar um ícone ou uma ação relacionada ao elemento relacionado ou trazer um *feedback* relacionada a uma ação previamente executada."
      },
      {
        "title": "2. Popover",
        "level": 3,
        "content": "São *tooltips* que ficam visíveis na tela até serem fechados pelo usuário. Por isso apresentam sempre um botão para fechá-lo.\n\nPodem ser acionados por meio de clique ou já serem apresentados automaticamente pelo sistema.\n\nPodem trazem uma maior complexidade de informação e permitem maior estilização de seu conteúdo, inclusive com a possibilidade de inclusão de elementos interativos e de elementos gráficos.\n\n![Tipo tooltip popover.](imagens/type-popover.png)\n*Tooltips do tipo popover*\n\nGeralmente são utilizados como um complemento da navegação. Como podem ocorrer problemas de acessibilidade, utilize somente quando for indispensável e ofereça sempre alternativas de acesso para o mesmo conteúdo."
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": "O comportamento responsivo do componente *tooltip* é invariável, com relação às suas dimensões, pois é sempre exibido de forma flutuante sobre a tela e com posicionamento dinâmico. Portanto, as dimensões da tela não afetam sua forma característica.\n\n![Grid de 12 colunas.](imagens/tooltip-behavior-grid-12-cols.png)\n*Grid de 12 colunas*\n\n![Grid de 8 colunas.](imagens/tooltip-behavior-responsive-grid-8-cols.png)\n*Grid de 8 colunas*"
      },
      {
        "title": "Grids de 4 Colunas",
        "level": 4,
        "content": "No *grid* de 4 colunas, o *tooltip* também não sofre alterações sobre sua aparência ou dimensões, porém existem restrições a respeito do seu acionamento. Por não haver evento *mouse over* em dispositivos móveis, o *tooltip* terá seu acionamento restrito apenas ao clique ou foco. Observe abaixo:\n\n- 1- Acionamento por clique;\n- 2- Acionamento por foco.\n\n![Grid de 4 colunas.](imagens/tooltip-behavior-responsive-grid-4-cols-start.png)\n*Grid de 4 colunas - acionamento restrito ao clique, foco ou automático*"
      },
      {
        "title": "2. Direções do Tooltip",
        "level": 3,
        "content": "Por princípio, as setas direcionais devem estar apontadas para o elemento ao qual o *tooltip* se refere e o *tooltip* deve estar posicionado próximo a este elemento.\n\nPor padrão, o *tooltip* será localizado no topo do elemento ao qual se refere. Observe abaixo:\n\n![Posicionamento do tooltip padrão.](imagens/tooltip-behavior-position.png)\n*Posicionamento do tooltip padrão no topo do elemento*\n\nNo entanto, o posicionamento do *tooltip* pode variar conforme a necessidade do *layout*.\n\n![Posicionamento do tooltip variado.](imagens/tooltip-behavior-position-2.png)\n*Variados posicionamentos permitidos do tooltip*\n\nA posição do *tooltip* em relação ao elemento varia conforme a posição e os limites da tela.\n\nAcompanhe a seguir:\n\n- 1- Caso o elemento esteja próximo ao topo da tela, o *tooltip* deve estar posicionado abaixo do elemento;\n\n- 2- Caso o elemento esteja próximo à base da tela, o *tooltip* deve estar posicionado acima do elemento;\n\n- 3- Caso o elemento esteja próximo à lateral esquerda da tela, o *tooltip* deve estar posicionado à direita do elemento;\n\n- 4- Caso o elemento esteja próximo à lateral direita da tela, o *tooltip* deve estar posicionado à esquerda do elemento.\n\n![Posicionamento e limites da tela.](imagens/tooltip-behavior-directions.png)\n*Posicionamento e limites da tela*"
      },
      {
        "title": "3. Acionamento do Tooltip",
        "level": 3,
        "content": "O *tooltip* pode ser configurado para ser acionado por meio dos seguintes eventos:\n\n- 1- *Mouse over*: quando o usuário passa o ponteiro do *mouse* sobre o elemento. Use somente no tipo padrão;\n\n- 2- Clique: quando o usuário clicar no elemento. Use somente no tipo *popover*;\n\n- 3- *Foco:* quando o estado foco for acionado no elemento. Use em todos os tipos.;\n\n- 4- Automaticamente: quando for programado pelo sistema para ser mostrado em determinada situação, independentemente de ação do usuário. Use somente no tipo *popover*.\n\n![Possibilidades de acionamento do tooltip.](imagens/tooltip-behavior-start.png)\n*Possibilidade de acionamento do tooltip*"
      },
      {
        "title": "4. Fechamento do Tooltip",
        "level": 3,
        "content": "O *tooltip* pode ser configurado para ser ocultado por meio dos seguintes eventos:\n\n- A- *Mouse out*: quando o usuário retirar o ponteiro do *mouse* de cima do elemento;\n\n- B- *Clique*: ao clicar no *button* fechar ou clicar em qualquer área da tela fora do *tooltip*;\n\n- C- *Por tempo determinado:* quando for programado para ser ocultado após um tempo predefinido pelo sistema.\n\n![Fechamentos do tooltip.](imagens/tooltip-behavior-hide.png)\n*Fechamentos do tooltip*"
      },
      {
        "title": "5. Largura do Tooltip x Conteúdo Interno",
        "level": 3,
        "content": "A largura do *tooltip* cresce conforme aumenta o conteúdo. No entanto, esteja atento às boas práticas e procure utilizar um conteúdo textual curto e objetivo.\n\n- 1- Largura mínima do *tooltip*: corresponde a um conteúdo de texto informativo de 12 caracteres;\n- 2- Largura ajustável ao texto.\n\n![Largura do tooltip.](imagens/tooltip-behavior-text-size.png)\n*Largura do tooltip*\n\nA altura do *tooltip* também se ajusta proporcionalmente à quantidade de conteúdo.\n\n![Exemplo de altura do tooltip ajustável ao conteúdo.](imagens/tooltip-size-2.png)\n*Neste exemplo, a altura do tooltip original (1) cresceu conforme recebeu mais conteúdo (2)*"
      },
      {
        "title": "6. Densidades",
        "level": 3,
        "content": "Pode-se encontrar o componente *tooltip* nas três densidades abaixo. Utilize a que melhor se adequar ao seu *layout*.\n\n![Densidades previstas para o tooltip.](imagens/tooltip-densidades.png)\n*Densidades previstas para utilização no tooltip*"
      },
      {
        "title": "7. Estados",
        "level": 3,
        "content": "O componente *tooltip* pode ser apresentado nos seguintes estados:"
      },
      {
        "title": "Estado Informativo",
        "level": 4,
        "content": "É o estado padrão do *tooltip*. É utilizado quando o objetivo da mensagem consiste em uma informação neutra.\n\n![Estado informativo aplicado emm fundo claro e fundo escuro.](imagens/tooltip-state-info.png)\n*Estado Informativo aplicado em fundo claro e fundo escuro*"
      },
      {
        "title": "Estado Sucesso",
        "level": 4,
        "content": "Utilize o estado Sucesso quando o objetivo da mensagem for transmitir ideia de conclusão com êxito de uma tarefa ou etapa.\n\n![Estado sucesso aplicado emm fundo claro e fundo escuro.](imagens/tooltip-state-success.png)\n*Estado Sucesso aplicado em fundo claro e fundo escuro*"
      },
      {
        "title": "Estado Alerta",
        "level": 4,
        "content": "O estado Alerta deve ser utilizado quando o objetivo da mensagem for transmitir uma ideia de advertência ao usuário, geralmente com finalidade de prevenção de erros.\n\n![Estado alerta aplicado emm fundo claro e fundo escuro.](imagens/tooltip-state-alert.png)\n*Estado Alerta aplicado em fundo claro e fundo escuro*"
      },
      {
        "title": "Estado Erro",
        "level": 4,
        "content": "Utilize o estado Erro quando o objetivo da mensagem for transmitir a ocorrência de erro por parte do usuário ou do sistema.\n\n![Estado erro aplicado emm fundo claro e fundo escuro.](imagens/tooltip-state-danger.png)\n*Estado Erro aplicado em fundo claro e fundo escuro*\n\n**Atenção:** não confie apenas nas cores para transmitir uma mensagem. Utilize o título do *tooltip* para reforçar que se trata de um *tooltip* de erro, alerta ou sucesso."
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- Use *tooltips* somente quando necessário pois o uso excessivo deste recurso pode ser irritante para a experiência do usuário.\n\n- *Tooltips* podem ser uma forma útil de introduzir os usuários a novas e importantes funcionalidades, mas quando o usuário aprender a usar essa funcionalidade, esse *tooltip* deve desaparecer.\n\n- *Tooltips* devem ser incisivos, informativos e orientados à ação. Se você precisa escrever um texto para explicar aos usuários o que eles precisam fazer, então um *tooltip* não é a melhor solução. Talvez seja melhor fornecer ao usuário um tutorial em vídeo ou até mesmo um guia interativo.\n\n- O texto do *tooltip* deve ser curto e ir direto ao ponto, deve ser informativo e não enrolado e deve ser orientado à ação, indicando ao usuário o que ele precisa e o que ele pode fazer. Ele também pode ser útil para explicar aos usuários como uma funcionalidade específica que eles estão observando os ajudará.\n\n- Use um *tooltip* por vez na tela. Por atrair o foco da atenção do usuário para um determinado elemento na tela, não é interessante apresentar mais de um *tooltip* ao mesmo tempo."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Alinhamentos",
        "level": 3,
        "content": "| Name            | Property |         Spacing Token         |\n| --------------- | -------- | :---------------------------: |\n| Seta Direcional | Align    |  `--spacing-vertical-center`  |\n| Seta Direcional | Align    | `--spacing-horizontal-center` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                             | Property                     |       Token/Value       |\n| -------------------------------- | ---------------------------- | :---------------------: |\n| Balão Flutuante (dens. baixa)    | padding-top/bottom           |  `--spacing-scale-2x`   |\n| Balão Flutuante (dens. baixa)    | padding-left/right           |  `--spacing-scale-2x`   |\n| Balão Flutuante (dens. média)    | padding-top/bottom           | `--spacing-scale-baseh` |\n| Balão Flutuante (dens. média)    | padding-left/right           | `--spacing-scale-baseh` |\n| Balão Flutuante (dens. alta)     | padding-top/bottom           | `--spacing-scale-base`  |\n| Balão Flutuante (dens. alta)     | padding-left/right           | `--spacing-scale-base`  |\n| Título do Tooltip                | margin-bottom                | `--spacing-scale-half`  |\n| Botão Fechar                     | margin-top                   | `--spacing-scale-half`  |\n| Botão Fechar                     | margin-left/right            | `--spacing-scale-half`  |\n| Tooltip (em relação ao elemento) | margin-left/right/top/bottom | `--spacing-scale-base`  |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name                             | Property | Token/Value |\n| -------------------------------- | -------- | :---------: |\n| Balão Flutuante                  | Width    | `variável`  |\n| Balão Flutuante                  | Height   | `variável`  |\n| Balão Flutuante (largura mínima) | Width    |   `108px`   |\n| Seta Direcional                  | Width    |   `16px`    |\n| Seta Direcional                  | Height   |    `8px`    |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name              | Property    | Token/Value                 |\n| ----------------- | ----------- | --------------------------- |\n| Título            | size        | `--font-size-scale-base`    |\n| Título            | font-weight | `--font-weight-semi-bold`   |\n| Texto Informativo | size        | `--font-size-scale-down-01` |\n| Texto Informativo | font-weight | `--font-weight-regular`     |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name         | Ícone                 | Token Size       | Class (Font Awesome) |\n| ------------ | --------------------- | ---------------- | -------------------- |\n| Botão Fechar | <i class=\"times\"></i> | `--icon-size-xs` | `times`              |"
      },
      {
        "title": "Cores",
        "level": 3,
        "content": ""
      },
      {
        "title": "Cores do Estado Informativo",
        "level": 4,
        "content": "| Name              | Property   | Color Token            |\n| ----------------- | ---------- | ---------------------- |\n| Balão Flutuante   | background | `--blue-warm-vivid-60` |\n| Seta Direcional   | background | `--blue-warm-vivid-60` |\n| Título            | color      | `--pure-0`             |\n| Texto Informativo | color      | `--pure-0`             |\n| Botão Fechar      | color      | `--pure-0`             |"
      },
      {
        "title": "Cores do Estado Sucesso",
        "level": 4,
        "content": "| Name              | Property   | Color Token             |\n| ----------------- | ---------- | ----------------------- |\n| Balão Flutuante   | background | `--green-cool-vivid-50` |\n| Seta Direcional   | background | `--green-cool-vivid-50` |\n| Título            | color      | `--pure-0`              |\n| Texto Informativo | color      | `--pure-0`              |\n| Botão Fechar      | color      | `--pure-0`              |"
      },
      {
        "title": "Cores do Estado Alerta",
        "level": 4,
        "content": "| Name              | Property   | Color Token         |\n| ----------------- | ---------- | ------------------- |\n| Balão Flutuante   | background | `--yellow-vivid-20` |\n| Seta Direcional   | background | `--yellow-vivid-20` |\n| Título            | color      | `--gray-80`         |\n| Texto Informativo | color      | `--gray-80`         |\n| Botão Fechar      | color      | `--gray-80`         |"
      },
      {
        "title": "Cores do Estado Erro",
        "level": 4,
        "content": "| Name              | Property   | Color Token      |\n| ----------------- | ---------- | ---------------- |\n| Balão Flutuante   | background | `--red-vivid-50` |\n| Seta Direcional   | background | `--red-vivid-50` |\n| Título            | color      | `--pure-0`       |\n| Texto Informativo | color      | `--pure-0`       |\n| Botão Fechar      | color      | `--pure-0`       |"
      },
      {
        "title": "Sombra",
        "level": 3,
        "content": "| Name            |    Shadow Token     |\n| --------------- | :-----------------: |\n| Balão Flutuante |    `--shadow-xl`    |\n| Balão Flutuante | `--shadow-xl-right` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Durante a navegação por teclado, *tooltips* aparecem automaticamente quando um elemento gatilho receber foco;\n\n- *Tooltips* não devem receber foco durante a navegação por teclado, pois seu conteúdo será lido pelas tecnologias assistivas no elemento gatilho;\n\n- *Tooltips* desaparecem quando o usuário pressionar a tecla `Esc` ou quando o foco for removido de seu elemento gatilho."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Use textos claros e objetivos. O objetivo do *tooltip* é trazer uma orientação de ajuda rápida e útil para o usuário;\n\n- O texto de conteúdo do *tooltip* também deve estar presente em seu elemento gatilho para ser lido pelos leitores de tela;\n\n- Recomenda-se colocar *tooltips* apenas em elementos HTML que são focáveis com teclado ou interativos, como *hyperlinks* e campos de formulário;\n\n- Não dependa só do evento `hover` como acionador para seu *tooltip*, isso impossibilitará de serem acionados por usuários de teclado ou usuários mobile."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Utilize `aria-labelledby` no elemento gatilho do *tooltip* para fornecer a descrição de ajuda."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [Carbon Design System](https://carbondesignsystem.com/components/tooltip/accessibility/)\n- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/tooltip/tooltip.md",
      "accessibilityPath": "ds/componentes/tooltip/tooltip-access.md"
    }
  },
  {
    "name": "Upload",
    "slug": "upload",
    "description": "*Upload* é um componente que permite ao usuário selecionar um ou mais arquivos e os enviar por meio de um servidor de aplicação.",
    "documentationUrl": "https://www.gov.br/ds/components/upload",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Imagem ilustra o componente upload.](imagens/upload-diretriz.png)\n*Exemplo do componente Upload.*\n\nO componente *Upload* é geralmente usado dentro de formulários, mas pode eventualmente ser também utilizado como um componente isolado."
      },
      {
        "title": "Tom e voz",
        "level": 2,
        "content": "O texto do *placeholder* e o ícone ilustrativo (fa-upload) são únicos e não podem ser alterados. Já o texto do *label* deve ser claro, objetivo e informativo seguindo o seguinte padrão: \"Envio de arquivos\", \"Envio de vídeos\", \"Envio de imagens\", \"Envio de documentos\" e assim por diante. Se houver algum motivo especial que justifique a alteração desse padrão a equipe de design responsável pelo *Design System* deverá ser consultada."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "A seguir é ilustrada a relação de componentes utilizados na construção do componente *upload*.\n\n| ID  | Nome                               |                          Referência                           | Uso         |\n| --- | ---------------------------------- | :-----------------------------------------------------------: | ----------- |\n| 1   | *Label* ou rótulo                  |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 2   | Superfície (Área de Transferência) |  [Fundamento Superfície](/ds/fundamentos-visuais/superficie)  | Obrigatório |\n| 3   | Ícone Subir Arquivo/*Upload*       | [Fundamento Iconografia](/ds/fundamentos-visuais/iconografia) | Opcional    |\n| 4   | *Placeholder*                      |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 5   | *Message*                          |   [Componente Message](/ds/components/message?tab=designer)   | Opcional    |\n| 6   | *List*                             |      [Componente List](/ds/components/list?tab=designer)      | Opcional    |\n| 7   | Texto auxiliar                     |  [Fundamento Tipografia](/ds/fundamentos-visuais/tipografia)  | Opcional    |\n| 8   | *Loading*                          |   [Componente Loading](/ds/components/loading?tab=designer)   | Opcional    |\n\n![Imagem de anatomia do componente upload.](imagens/upload-anatomia-upload.png)\n*Anatomia do Upload.*\n\n![Imagem que ilustra o uso do componente loading junto com o componente upload.](imagens/upload-anatomia-upload-loading.png)\n*Anatomia do componente upload com componente Loading.*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Adição de Arquivos",
        "level": 3,
        "content": "O componente *upload* serve para o usuário enviar arquivos solicitados pelo sistema e isto pode ser realizado de duas maneiras distintas:\n\n1. Clicando no componente para acessar a janela de arquivos do sistema operacional;\n\n2. Arrastando os arquivos diretamente para a superfície (área de transferência) do componente.\n\nNeste último caso, a cor da borda do componente muda para verde quando o usuário arrasta o *mouse* (*dragging*) com os arquivos selecionados corretamente para a área tracejada. Veja a figura a seguir:\n\n![Imagem ilustrando a mudança da cor do componente para verde, ao se transferir arquivos para a área de transferência.](imagens/upload_transferencia.png)\n*Uso do estado Dropzone.*\n\nSe o usuário soltar os arquivos na área correta (ou se ele clicar na área tracejada e selecionar os arquivos desejados) o processo de transferência se inicia e o ícone de *loading* é mostrado durante o tempo de transferência dos arquivos.\n\n![A imagem ilustra o processo de transferência de três arquivos.](imagens/upload_loading.png)\n*Três arquivos estão sendo transferidos e mostrado um Loading por arquivo.*\n\nApós a conclusão da transferência, uma lista com os nomes dos arquivos e seus respectivos tamanhos é disponibilizada logo abaixo do componente *upload*.\n\n![A imagem mostra uma lista de aquivos transferidos. Para cada aquivos é mostrado o nome, o tamanho do arquivo e um ícone de lixeira para excluí-lo.](imagens/upload_arquivos_enviados.png)\n*Lista de arquivos adicionados no upload.*\n\n**Atenção:** a lista permite que o usuário possa excluir os arquivos que desejar antes que sejam submetidos para o servidor. O usuário pode ainda clicar no nome do arquivo para abri-lo no seu sistema operacional."
      },
      {
        "title": "2. Selecionar ou Arrastar arquivos",
        "level": 3,
        "content": "O componente *upload* deve disponibilizar o recurso de arrastar arquivos. Esta funcionalidade deve ser informada ao usuário na mensagem abaixo do campo.\n\n![Exemplo do uso do texto auxiliar para informar ao usuário quando o componente aceita que os arquivos possam ser arrastados para a área de transferência.](imagens/upload-comportamento-label.png)\n*Exemplo de uso do texto auxiliar.*"
      },
      {
        "title": "3. Mensagem de erro",
        "level": 3,
        "content": "Nos casos em que os arquivos não atendam aos requisitos desejados uma mensagem de erro é apresentada ao usuário.\n\n![Exemplo do uso do componente message.](imagens/upload_mensagem.png)\n*Uso do componente message no upload.*\n\nSe o usuário mover ou selecionar vários arquivos e um deles não estiver de acordo com o requisito, uma mensagem de erro é apresentada para este arquivo. Os arquivos que estiverem válidos serão aceitos normalmente.\n\n![Exemplo de arquivo recusado pelo componente upload. Uma mensagem de erro é apresentada ao usuário.](imagens/upload_mensagem-1.png)\n*Mensagem de erro para um arquivo específico.*\n\n**Atenção:** qualquer tipo de erro como: formato inválido, tamanho excessivo, envio não concluído, etc, deverá ser tratado com *feedbacks* de mensagens do sistema (consultar diretrizes desse componente)."
      },
      {
        "title": "4. Truncamento de texto",
        "level": 3,
        "content": "Nos casos em que o nome do arquivo seja maior que o espaço destinado a ele, deve-se truncar a parte do nome que exceda o espaço definido.\n\nVeja a imagem a seguir:\n\n![Esta imagem apresenta exemplos de nomes de aquivos muito grandes e por isso, truncados.](imagens/upload-truncamento.png)\n*Nomes dos arquivos são truncados quando forem maiores que o espaço disponível.*\n\n**Atenção:** é recomendável o uso de *tooltips* para apresentar ao usuário o texto completo que foi truncado.\n\n![Esta imagem apresenta um exemplo de uso de tooltip para mostrar ao usuário o nome completo do arquivo truncado.](imagens/upload-truncamento-tooltip.png)\n*Use o componente tooltip para mostrar o nome completo do arquivo truncado.*"
      },
      {
        "title": "5. Envio de 1 arquivo",
        "level": 3,
        "content": "Se o *site*/sistema permitir o envio de apenas um único arquivo, o *label* do componente deverá ser alterado para *\"Envio de arquivo\"* e o *placeholder* para *\"Selecione o arquivo\"* (ou variações).\n\n![Esta imagem ilustra a mudança do texto do placeholder para quando se é permitido o envio de apenas um arquivo para upload.](imagens/upload-comportamento-umarquivo.png)\n*Textos do label e placeholder alterados.*\n\nNesse caso, o usuário não conseguirá selecionar mais de um arquivo para ser enviado. Se arrastar mais de um arquivo, o componente não aceitará a ação e retornará uma mensagem ao usuário deixando claro que só será permitido realizar *upload* de um único arquivo.\n\n![Imagem coom exemplo de mensagem de erro.](imagens/upload_mensagem-2.png)\n*Exemplo de erro.*\n\n**Atenção:** se o usuário já enviou um arquivo para a lista e tentar enviar outro, o arquivo mais recente substituirá o mais antigo. Uma mensagem de alerta do sistema deve manter o usuário informado sobre este comportamento.\n\n![Imagem coom exemplo de substituição de mensagem.](imagens/upload_mensagem-3.png)\n*Neste exemplo o \"arquivo_do_usuario_v01\" foi substituído pelo \"arquivo_do_usuario_v02\" mais recente.*"
      },
      {
        "title": "6. Resolução de 4 colunas",
        "level": 3,
        "content": "Em resoluções maiores que 4 colunas o componente *Upload* não sofre qualquer transformação, mas ao se atingir a resolução de 4 colunas o componente *Upload* terá sua largura adequada para esta resolução de tela.\n\n![A imagem mostra o componente upload com a largura ajustada para uma resolução de quatro colunas.](imagens/upload-anatomia-upload-4colunas.png)\n*Largura do componente upload sendo ajustada.*\n\n![A imagem ilustra o comportamento do componente upload em responsividades de oito e quatro colunas.](imagens/upload-comportamento-responsividade.png)\n*Comparação da aplicação do upload em diferentes Grids.*\n\nNestes tipos de dispositivos, não há o recurso de arrastar arquivo, portanto, a única forma do usuário enviar arquivos é por meio do clique no componente *upload* (ou toque, nos casos de dispositivos *mobile*)."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name          | Size Token               | Weight Token              | Text-transform | Outros Estilos       |\n| ------------- | ------------------------ | ------------------------- | -------------- | -------------------- |\n| *Label*       | `--font-size-scale-base` | `--font-weight-semi-bold` | uppercase      | -                    |\n| *Placeholder* | `--font-size-scale-base` | `--font-weight-regular`   | uppercase      | `font-style:` italic |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name          | ícone                            | Size Token       | Class (Font Awesome) |\n| ------------- | -------------------------------- | ---------------- | -------------------- |\n| Ícone Upload  | <i class=\"fas fa-upload\"></i>    | `--icon-size-lg` | fa-upload            |\n| Ícone Excluir | <i class=\"fas fa-trash-alt\"></i> | `--icon-size-sm` | fa-trash-alt         |"
      },
      {
        "title": "Cor",
        "level": 3,
        "content": "| Name                        | Property         | Color Token             |\n| --------------------------- | ---------------- | ----------------------- |\n| *Label*                     | text color       | `--gray-80`             |\n| *Placeholder*               | text color       | `--blue-warm-vivid-70`  |\n| Ícone Upload                | icon             | `--blue-warm-vivid-70`  |\n| Ícone Excluir               | icon             | `--blue-warm-vivid-70`  |\n| *container*                 | background-color | `--pure-0`              |\n| *container* (borda)         | background-color | `--blue-warm-vivid-70`  |\n| *container* (borda-sucesso) | background-color | `--green-cool-vivid-50` |"
      },
      {
        "title": "Dimensões",
        "level": 3,
        "content": "| Name       | Property | Value |\n| ---------- | -------- | ----- |\n| Superfície | width    | 550px |"
      },
      {
        "title": "Espaçamento",
        "level": 3,
        "content": "| Name           | Property                     | Value                  |\n| -------------- | ---------------------------- | ---------------------- |\n| Superfície     | padding-left / padding-right | `--spacing-scale-2x`   |\n| Superfície     | padding-top / padding-bottom | `--spacing-scale-base` |\n| Superfície     | margin-bottom                | `--spacing-scale-base` |\n| Message        | margin-bottom                | `--spacing-scale-base` |\n| Texto Auxiliar | margin-bottom                | `--spacing-scale-base` |\n| Ícone Upload   | margin-right                 | `--spacing-scale-2x`   |\n| *Placeholder*  | margin-left                  | `--spacing-scale-half` |\n| *Loading*      | margin-top                   | `--spacing-scale-base` |"
      },
      {
        "title": "Superfície",
        "level": 3,
        "content": "| Name       | Property | Value                        |\n| ---------- | -------- | ---------------------------- |\n| Superfície | border   | `--surface-border-dashed-sm` |\n\n![Imagem com algumas medidas para ajudar os desenvolvedores.](imagens/upload-detalhamento.png)\n*Imagem de apoio para a especificação.*"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- *Uploads* podem ser acessados via navegação por teclado, por meio da tecla `Tab`, e acionados por meio das teclas `Enter` ou `Space`;\n\n- Quando exibir a lista dos arquivos carregados, o usuário poderá acessá-la por meio da tecla `Tab` ou setas direcionais `arrowUp` e `arrowDown`;\n\n- Na lista de arquivos carregados o usuário também pode acessar via tecla `Tab`, o botão excluir presente em cada item, e acioná-los com a tecla `Enter` ou `Space`."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Utilize rótulos (*labels*) claros e descritivos para que o usuário compreenda o propósito do campo de texto;\n\n- Identifique as mensagens de *feedback* (informação, sucesso, alerta e erro) associadas ao *upload* e exibidas pelas tecnologias assistivas."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Utilize a *tag* semântica `<input type=\"file\"/>` para construção do componente *upload*;\n\n- É importante associar - por meio do código - o botão excluir ao nome do arquivo carregado, para que o usuário entenda qual arquivo será removido."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)\n- [Carbon Design System](https://carbondesignsystem.com/components/file-uploader/accessibility)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/upload/upload.md",
      "accessibilityPath": "ds/componentes/upload/upload-access.md"
    }
  },
  {
    "name": "Wizard",
    "slug": "wizard",
    "description": "*Wizard* é um processo passo a passo que permite ao usuário inserir informações em uma ordem prescrita e na qual as etapas subsequentes podem depender das informações inseridas nas etapas anteriores.",
    "documentationUrl": "https://www.gov.br/ds/components/wizard",
    "sections": [
      {
        "title": "Uso",
        "level": 2,
        "content": "![Exemplo do componente wizard](imagens/type-horizontal.png)\n*Exemplo do componente wizard.*\n\nUse *wizards* como um padrão para entrada de informações que devam seguir uma ordem específica. Os assistentes funcionam bem para processos executados apenas ocasionalmente."
      },
      {
        "title": "Anatomia",
        "level": 2,
        "content": "O *Componente Wizard* é constituído pelos seguintes elementos.\n\n| ID  | Nome               |                     Referência                      | Uso         |\n| --- | ------------------ | :-------------------------------------------------: | ----------- |\n| 1   | Painel de etapas   |                         ---                         | Obrigatório |\n| 2   | Componente Step    | [Componente Step](/ds/components/step?tab=designer) | Obrigatório |\n| 3   | Área de Conteúdo   |                         ---                         | Obrigatório |\n| 4   | Barra de Navegação |                         ---                         | Obrigatório |\n\n![Elementos do componente Wizard](imagens/anatomy.png)\n*Elementos do componente Wizard.*"
      },
      {
        "title": "Detalhamento dos Itens",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Painel de Etapas (Obrigatório)",
        "level": 3,
        "content": "Nesta área são exibidas as etapas do *wizard*. O painel de etapas se estende por toda largura da tela e as etapas devem seguir as orientações e recomendações de boas práticas do Componente *Step*.\n\n![Painel de Etapas](imagens/steps-space-1.png)\n*Painel de Etapas*\n\nConsulte detalhes em [Componente Step](/ds/components/step?tab=designer)."
      },
      {
        "title": "2. Componente Steps (Obrigatório)",
        "level": 3,
        "content": "*Steps* são indicadores de etapas e progresso que auxiliam os usuários durante um fluxo de trabalho, seguindo uma sequência lógica linear, aleatória, numeradas ou não. Consulte detalhes sobre comportamentos e boas práticas dos *Steps* em [Componente Step](/ds/components/step?tab=designer).\n![Exemplo de Componente Step](imagens/anatomy-step.png)\n*Exemplo de Componente Step*"
      },
      {
        "title": "3. Área de Conteúdo (Obrigatório)",
        "level": 3,
        "content": "Esta área reserva o espaço para o conteúdo do *Wizard*. Geralmente são encontrados elementos de formulário, interativos ou informacionais que auxiliarão o usuário realizar sua jornada de tarefas.\n\n![Exemplo de Conteúdo - Texto](imagens/anatomy-content-area-01.png)\n*Exemplo de Conteúdo - Texto*\n\n![Exemplo de Conteúdo - Formulário](imagens/anatomy-content-area-02.png)\n*Exemplo de Conteúdo - Formulário*"
      },
      {
        "title": "4. Barra de Navegação (Obrigatório)",
        "level": 3,
        "content": "Na barra de navegação estão disponíveis os botões de *Cancelar*, *Avançar* e *Voltar*. Assim o usuário tem o total controle da navegação no *Wizard*.\n\n![Barra de Navegação](imagens/navigation-bar.png)\n*Barra de Navegação*"
      },
      {
        "title": "A. Botão Cancelar",
        "level": 4,
        "content": "O *Botão Cancelar* deve ser sempre do tipo *terciário*. É utilizado para o usuário cancelar o processo assistente e retornar para a tela imediatamente anterior ao do *Wizard*. É uma boa prática fornecer um aviso que os dados inseridos até aquele ponto serão perdidos clicando no *Botão Cancelar*."
      },
      {
        "title": "B. Botão Voltar",
        "level": 4,
        "content": "O *Botão Voltar* deve ser sempre do tipo *secundário* e serve para o usuário retroceder um passo na sequência de etapas. Na primeira etapa, o *Botão Voltar* não será exibido.\n\n*A -* Primeira Etapa: O *Botão Voltar* não será exibido.\n*B -* Etapas Subsequentes: *Botão Voltar* é exibido no *Estado Interativo*.\n\n![Na primeira etapa o Botão Voltar não será exibido](imagens/behavior-first-step.png)\n*Na primeira etapa o Botão Voltar não será exibido*"
      },
      {
        "title": "C. Botão Avançar",
        "level": 4,
        "content": "O *Botão Avançar* deve ser sempre do tipo *primário* e serve para o usuário avançar um nível na sequência de etapas. Uma vez atingida a última etapa, o botão apresentado deve ser o de *Concluir* para sinalizar o fim das etapas.\n\n*A -* Etapas iniciais e intermediárias: *Botão Avançar*;\n*B -* Na última etapa, o rótulo do botão *Avançar* deve ser alterado para *Concluir*.\n\n![Na última etapa, o rótulo do botão Avançar deve ser alterado para Concluir](imagens/behavior-last-step.png)\n*Na última etapa, o rótulo do botão Avançar deve ser alterado para Concluir*"
      },
      {
        "title": "Barra de Navegação Mobile (Grid de 4 Colunas)",
        "level": 4,
        "content": "Na versão mobile da Barra de Navegação o Botão Cancelar será substituído por um link e os botões Avançar e Voltar serão substituídos por botões do tipo circular. Além disso, a Barra de Navegação mobile deverá ter um posicionamento fixo na base da área visível da tela.\n\nA - Link Cancelar;\nB - Botão Voltar (Circular com Ênfase Secundária);\nC - Botão Avançar (Circular com Ênfase Primária);\nD - Botão Concluir (Circular com Ênfase Primária).\n\n![Barra de Navegação Mobile](imagens/navigation-bar-mobile.png)\n*Barra de Navegação Mobile*\n\n![Barra de Navegação Mobile com Botão Concluir](imagens/navigation-bar-mobile-01.png)\n*Barra de Navegação Mobile com Botão Concluir*"
      },
      {
        "title": "Tipos",
        "level": 2,
        "content": "O *Wizard* possui dois tipos, o horizontal e o vertical. Não existe uma obrigatoriedade ou restrição para o uso de cada tipo. Estes poderão ser utilizados de acordo com a preferência estética ou funcional, seguindo a necessidade de cada projeto."
      },
      {
        "title": "1. Tipo Horizontal (Padrão)",
        "level": 3,
        "content": "O *Tipo Horizontal* é comumente o mais utilizado e por isso é considerado o padrão.\n\n![Tipo Horizontal](imagens/type-horizontal.png)\n*Tipo Horizontal*"
      },
      {
        "title": "2. Tipo Vertical",
        "level": 3,
        "content": "O *Tipo Vertical*, geralmente menos utilizado, pode ser mais adequado em alguns contextos específicos, se adequando a composição estética ou diagramação do sistema.\n\n![Tipo Vertical](imagens/type-vertical.png)\n*Tipo Vertical*"
      },
      {
        "title": "Comportamentos",
        "level": 2,
        "content": ""
      },
      {
        "title": "1. Responsividade",
        "level": 3,
        "content": ""
      },
      {
        "title": "Grid de 12 e 8 Colunas",
        "level": 4,
        "content": "Nas *Grids* de 12 e 8 colunas o Componente *Wizard* adequa-se ocupando todo o espaçamento horizontal permitido pela *Grid*. Observe abaixo:\n\n![Wizard Horizontal - Grid de 12 Colunas](imagens/behavior-horizontal-responsive-grid-12-cols.png)\n*Wizard Horizontal - Grid de 12 Colunas*\n\n![Wizard Horizontal - Grid de 8 Colunas](imagens/behavior-horizontal-responsive-grid-8-cols.png)\n*Wizard Horizontal - Grid de 8 Colunas*\n\n![Wizard Vertical - Grid de 12 Colunas](imagens/behavior-vertical-responsive-grid-12-cols.png)\n*Wizard Vertical - Grid de 12 Colunas*\n\n![Wizard Vertical - Grid de 8 Colunas](imagens/behavior-vertical-responsive-grid-8-cols.png)\n*Wizard Vertical - Grid de 8 Colunas*\n\n**Atenção:** é importante lembrar que os espaçamentos entre as etapas permanecem equidistantes."
      },
      {
        "title": "Grid de 4 Colunas",
        "level": 4,
        "content": "Na *Grid* de 4 colunas o *Componente Wizard* tem o seu formato modificado a fim de reduzir os espaços internos na *Barra de Etapas* e proporcionar maior espaço na *Área de Conteúdo*. A *Barra de Navegação* é exibida abaixo da *Área de Conteúdo*, apenas mudando sua cor de fundo e permanecendo com a mesma cor da *Área de Conteúdo*. Veja a seguir:\n\n![Wizard Horizontal - Grid de 4 Colunas](imagens/behavior-horizontal-responsive-grid-4-cols.png)\n*Wizard Horizontal - Grid de 4 Colunas*\n\n![Wizard Vertical - Grid de 4 Colunas](imagens/behavior-vertical-responsive-grid-4-cols.png)\n*Wizard Vertical - Grid de 4 Colunas*\n\n**Atenção:** Neste formato, tanto no *Tipo Horizontal* como no *Tipo Vertical*, o *Componente Wizard* se apresenta ocultando os *Rótulos*. Este exibirá inicialmente apenas os *Botões das Etapas*. Porém o usuário poderá expandir a *Barra de Etapas* e visualizar os *Rótulos*."
      },
      {
        "title": "2. Slide",
        "level": 3,
        "content": "Este comportamento tem o objetivo de oferecer ao usuário a opção de exibir e ocultar os *Rótulos* do *Componente Wizard* no formato para *Grid de 4 Colunas*."
      },
      {
        "title": "Slide Tipo Horizontal",
        "level": 4,
        "content": "No *Tipo Horizontal*, o usuário poderá realizar o *Touch* no ícone `grip-lines`, na parte inferior central do *Painel de Etapas* e deslizar o dedo para baixo, exibindo os *Rótulos* das *Etapas*. Poderá também realizar o movimento contrário para ocultá-los.\n\n*A* - O usuário pode clicar no ícone `grip-lines`\n*B* - e deslizar o Painel de Etapas para baixo.\n\n![Slide - Wizard Horizontal](imagens/behavior-horizontal-slide.png)\n*Slide - Wizard Horizontal*\n\n**Atenção:** O *Painel de Etapas* deslizará sobre a *Área de Conteúdo* exibindo uma sombra de elevação abaixo do painel."
      },
      {
        "title": "Slide Tipo Vertical",
        "level": 4,
        "content": "No *Tipo Vertical*, o *Painel de Etapas* se posiciona na parte lateral esquerda da tela. Da mesma forma, o usuário realizará o *Touch* no ícone `grip-lines-vertical`, localizado centralizado verticalmente à direita do *Painel de Etapas*. O usuário deslizará o dedo horizontalmente para direita exibindo os *Rótulos* das *Etapas*. Poderá também realizar o movimento contrário para ocultá-los.\n\n*A* - O usuário pode clicar no ícone `grip-lines-vertical`\n*B* - e deslizar o Painel de Etapas para o lado.\n\n![Slide - Wizard Vertical](imagens/behavior-vertical-slide.png)\n*Slide - Wizard Vertical*\n\n**Atenção:** Ao expandir o Painel de Etapas, este \"empurrará\" a Área de Conteúdo e a largura desta será ajustada dinamicamente, assim como a largura da Barra de Navegação."
      },
      {
        "title": "3. Densidade",
        "level": 3,
        "content": "O comportamento de densidade no componente *Wizard* refere-se aos espaçamentos internos do Painel de Etapas,Área de Conteúdo e Barra de Navegação. Além destes, também recomenda-se utilizar as densidades dos componentes *Button* e *Steps* seguindo a mesma densidade do *Wizard*. Consulte os espaçamentos de densidades dos componentes *Button* e *Steps* nas documentações específicas de cada um deles."
      },
      {
        "title": "Baixa Densidade",
        "level": 4,
        "content": "Utilize *Baixa Densidade* quando o projeto de *layout* permitir mais espaço ou quando quando houver necessidade de dar mais destaque ao *Componente Wizard*.\n\n![Wizard Horizontal - Baixa Densidade](imagens/behavior-low-density.png)\n*Wizard Horizontal - Baixa Densidade*\n\n![Wizard Vertical - Baixa Densidade](imagens/behavior-vertical-low-density.png)\n*Wizard Vertical - Baixa Densidade*"
      },
      {
        "title": "Densidade Padrão",
        "level": 4,
        "content": "É a forma comum do *Componente Wizard*. Oferece um espaçamento interno adequado e equilibrado para vários tipos de projetos.\n\n![Wizard Horizontal - Densidade Padrão](imagens/behavior-default-density.png)\n*Wizard Horizontal - Densidade Padrão*\n\n![Wizard Vertical - Densidade Padrão](imagens/behavior-vertical-default-density.png)\n*Wizard Vertical - Densidade Padrão*"
      },
      {
        "title": "Alta Densidade",
        "level": 4,
        "content": "Utilize *Alta Densidade* quando for necessário usar o *Componente Wizard* em espaços mais restritos ou otimizar o conteúdo em tela.\n\n![Wizard Horizontal - Alta Densidade](imagens/behavior-high-density.png)\n*Wizard Horizontal - Alta Densidade*\n\n![Wizard Vertical - Alta Densidade](imagens/behavior-vertical-high-density.png)\n*Wizard Vertical - Alta Densidade*\n\nConsulte especificações de *Densidade* em *Design Tokens*."
      },
      {
        "title": "4. Scroll",
        "level": 3,
        "content": "O componente *Wizard* pode ser utilizado com duas formas de rolagem do conteúdo."
      },
      {
        "title": "Rolagem Nativa do Navegador",
        "level": 4,
        "content": "Neste formato o conteúdo cresce naturalmente e o usuário poderá utilizar a barra de rolagem do navegador para acessar o conteúdo. Veja os exemplos na orientação vertical e horizontal.\n\nA - Barra de Rolagem nativa do navegador.\n\n![Wizard Horizontal - Rolagem Natural do Navegador](imagens/behavior-scroll-01.png)\n*Wizard Horizontal - Rolagem Natural do Navegador*\n\n![Wizard Vertical - Rolagem Natural do Navegador](imagens/behavior-scroll-02.png)\n*Wizard Vertical - Rolagem Natural do Navegador*"
      },
      {
        "title": "Rolagem Interna na Área de Conteúdo",
        "level": 4,
        "content": "Neste modelo, a Área de Conteúdo possui uma altura fixa e a rolagem ocorre dentro dela com uma barra de rolagem customizada. O Painel de Etapas e a Barra de Navegação permanecem com posicionamento fixo na tela.\n\nA - Barra de Rolagem customizada na Área de Conteúdo;\nB - Painel de Etapas com posicionamento fixo;\nC - Barra de Navegação com posicionamento fixo;\n\n![Wizard Horizontal - Rolagem na Área de Conteúdo](imagens/behavior-scroll-03.png)\n*Wizard Horizontal - Rolagem na Área de Conteúdo*\n\n![Wizard Vertical - Rolagem na Área de Conteúdo](imagens/behavior-scroll-04.png)\n*Wizard Vertical - Rolagem na Área de Conteúdo*"
      },
      {
        "title": "Melhores Práticas",
        "level": 2,
        "content": "- *Wizard* é uma ótima opção quando o usuário precisa executar uma tarefa complexa que consiste em várias sub tarefas.\n\n- O *Wizard* deve ser utilizado sempre com o objetivo de seguir uma navegação linear. Caso seja permitido navegar livremente entre as etapas, utilize o *Componente Tab*.\n\n- *Wizard* também é eficiente quando o usuário precisa de orientação: o usuário deseja atingir uma meta geral, mas pode não estar familiarizado com as etapas necessárias para atingir a meta.\n\n- Os *wizards* devem ser rápidos e fáceis. Por esse motivo, é uma boa ideia manter o conteúdo de uma tela, bem como sua navegação, dentro da área visível da tela, evitando assim barras de rolagens.\n\n- Geralmente as etapas necessárias para atingir uma meta final podem variar devido a decisões tomadas em estágios anteriores. Se não for este o caso, prefira utilizar o componente *Tab*.\n\n- Use linguagem simples. Os usuários de um *wizard* não são necessariamente especialistas, por isso deve ser evitado o uso de jargão técnico. A linguagem usada deve ser adaptada ao usuário e não o contrário.\n\n- É uma boa prática apresentar para o usuário um resumo das opções feitas em todo o assistente na etapa final. Isso permitirá que o usuário revise e verifique os dados inseridos antes de clicar no Botão Concluir. No caso de o usuário desejar alterar os dados inseridos, ele deve ser capaz de navegar de volta para etapas anteriores. Se a quantidade de etapas for maior que seis, é uma boa ideia fornecer *links* diretamente para a tela de entrada do dado que deve ser alterado."
      },
      {
        "title": "Especificações",
        "level": 2,
        "content": ""
      },
      {
        "title": "Cores",
        "level": 3,
        "content": "| Name                            | Property   | Color Token            |\n| ------------------------------- | ---------- | ---------------------- |\n| Painel de etapas                | background | `--gray-2`             |\n| Painel de etapas Fundo Escuro   | background | `--blue-warm-vivid-90` |\n| Área de Conteúdo                | background | `--pure-0`             |\n| Área de Conteúdo Fundo Escuro   | background | `--blue-warm-vivid-90` |\n| Barra de Navegação              | background | `--gray-2`             |\n| Barra de Navegação Fundo Escuro | background | `--blue-warm-vivid-90` |\n| Rótulos                         | color      | `--blue-warm-vivid-70` |\n| Rótulos Fundo Escuro            | color      | `--pure-0`             |"
      },
      {
        "title": "Tipografia",
        "level": 3,
        "content": "| Name           | Size                     | Weight                 |\n| -------------- | ------------------------ | ---------------------- |\n| Rótulos        | `-font-size-scale-up-01` | `--font-weight-medium` |\n| Rótulos Mobile | `--font-size-scale-base` | `--font-weight-medium` |"
      },
      {
        "title": "Iconografia",
        "level": 3,
        "content": "| Name                   | Ícone                               | Token Size          | Class (Font Awesome)  |\n| ---------------------- | ----------------------------------- | ------------------- | --------------------- |\n| Ícones dos Steps       | -                                   | `--icone-size-base` | -                     |\n| Ícone Slide Horizontal | <i class=\"grip-lines\"></i>          | `--icone-size-base` | `grip-lines`          |\n| Ícone Slide Vertical   | <i class=\"grip-lines-vertical\"></i> | `--icone-size-base` | `grip-lines-vertical` |"
      },
      {
        "title": "Espaçamentos",
        "level": 3,
        "content": "| Name                                  | Property       |        Value         |\n| ------------------------------------- | -------------- | :------------------: |\n| Painel de etapas (Densidade Padrão)   | padding-top    | `--spacing-scale-4x` |\n| Painel de etapas (Densidade Padrão)   | padding-bottom | `--spacing-scale-4x` |\n| Painel de etapas (Densidade Padrão)   | padding-left   | `--spacing-scale-5x` |\n| Painel de etapas (Densidade Padrão)   | padding-right  | `--spacing-scale-5x` |\n| Painel de etapas (Baixa Densidade)    | padding-top    | `--spacing-scale-5x` |\n| Painel de etapas (Baixa Densidade)    | padding-bottom | `--spacing-scale-5x` |\n| Painel de etapas (Baixa Densidade)    | padding-left   | `--spacing-scale-6x` |\n| Painel de etapas (Baixa Densidade)    | padding-right  | `--spacing-scale-6x` |\n| Painel de etapas (Alta Densidade)     | padding-top    | `--spacing-scale-3x` |\n| Painel de etapas (Alta Densidade)     | padding-bottom | `--spacing-scale-3x` |\n| Painel de etapas (Alta Densidade)     | padding-left   | `--spacing-scale-4x` |\n| Painel de etapas (Alta Densidade)     | padding-right  | `--spacing-scale-4x` |\n| Área de Conteúdo (Densidade Padrão)   | padding-top    | `--spacing-scale-5x` |\n| Área de Conteúdo (Densidade Padrão)   | padding-bottom | `--spacing-scale-5x` |\n| Área de Conteúdo (Densidade Padrão)   | padding-left   | `--spacing-scale-5x` |\n| Área de Conteúdo (Densidade Padrão)   | padding-right  | `--spacing-scale-5x` |\n| Área de Conteúdo (Baixa Densidade)    | padding-top    | `--spacing-scale-6x` |\n| Área de Conteúdo (Baixa Densidade)    | padding-bottom | `--spacing-scale-6x` |\n| Área de Conteúdo (Baixa Densidade)    | padding-left   | `--spacing-scale-6x` |\n| Área de Conteúdo (Baixa Densidade)    | padding-right  | `--spacing-scale-6x` |\n| Área de Conteúdo (Alta Densidade)     | padding-top    | `--spacing-scale-4x` |\n| Área de Conteúdo (Alta Densidade)     | padding-bottom | `--spacing-scale-4x` |\n| Área de Conteúdo (Alta Densidade)     | padding-left   | `--spacing-scale-4x` |\n| Área de Conteúdo (Alta Densidade)     | padding-right  | `--spacing-scale-4x` |\n| Barra de Navegação (Densidade Padrão) | padding-top    | `--spacing-scale-3x` |\n| Barra de Navegação (Densidade Padrão) | padding-bottom | `--spacing-scale-3x` |\n| Barra de Navegação (Densidade Padrão) | padding-left   | `--spacing-scale-5x` |\n| Barra de Navegação (Densidade Padrão) | padding-right  | `--spacing-scale-5x` |\n| Barra de Navegação (Baixa Densidade)  | padding-top    | `--spacing-scale-4x` |\n| Barra de Navegação (Baixa Densidade)  | padding-bottom | `--spacing-scale-4x` |\n| Barra de Navegação (Baixa Densidade)  | padding-left   | `--spacing-scale-6x` |\n| Barra de Navegação (Baixa Densidade)  | padding-right  | `--spacing-scale-6x` |\n| Barra de Navegação (Alta Densidade)   | padding-top    | `--spacing-scale-2x` |\n| Barra de Navegação (Alta Densidade)   | padding-bottom | `--spacing-scale-2x` |\n| Barra de Navegação (Alta Densidade)   | padding-left   | `--spacing-scale-4x` |\n| Barra de Navegação (Alta Densidade)   | padding-right  | `--spacing-scale-4x` |"
      }
    ],
    "accessibility": [
      {
        "title": "Navegação e Comportamento",
        "level": 2,
        "content": "- Torne o componente *wizard* acessível pelo teclado. Os usuários de tecnologias assistivas devem poder navegar por meio das teclas `Tab` e `Shift + Tab`, para avançar e retroceder na navegação;\n\n- Os controles interativos, como *steps* ou botões de avançar, cancelar e voltar podem ser acionados a partir das teclas `Enter` ou `Space`;\n\n- Forneça dicas de foco quando o usuário estiver interagindo com *wizard* pelo teclado, indicando qual etapa está sendo focada no momento. Isso auxiliará os usuários com deficiências visuais a compreender o fluxo de navegação pelas etapas."
      },
      {
        "title": "Recomendações para Estilo e Design",
        "level": 2,
        "content": "- Garanta que os formulários utilizados no *wizard* sejam acessíveis. Utilize rótulos claros e faça associação entre rótulos e campos de texto. Veja mais informações sobre boas práticas na [Diretriz de Formulários](https://www.gov.br/ds/padroes/design/formulario);\n\n- Forneça *feedback* sonoro e visual informando quando uma etapa for concluída com sucesso ou quando ocorrer um erro. Isso ajuda os usuários com baixa visão a entender o progresso da tarefa."
      },
      {
        "title": "Recomendações para Código",
        "level": 2,
        "content": "- Caso utilize imagens ou ícones no conteúdo do *wizard*, ofereça alternativas de textos de descrição com o atributo `alt`."
      },
      {
        "title": "Referências",
        "level": 2,
        "content": "- [W3C World Wide Web Consortium](https://www.w3.org/)\n- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)"
      }
    ],
    "source": {
      "repository": "govbr-ds/govbr-ds",
      "ref": "main",
      "documentationPath": "ds/componentes/wizard/wizard.md",
      "accessibilityPath": "ds/componentes/wizard/wizard-access.md"
    }
  }
];
