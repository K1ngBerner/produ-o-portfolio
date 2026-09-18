# Integração do case REINE.EXE

## Onde fica

- Entrada: `index.html#reine-exe`, dentro de projetos autorais, antes de Sussurros do Folclore.
- Case completo: `index.html#reine-exe-case`, também acessível pela vitrine em movimento.
- Projeto ao vivo: https://reineexe.netlify.app/
- Endereço após publicar esta pasta: https://k1ngberner.github.io/produ-o-portfolio/#reine-exe-case
- Nenhum deploy foi executado nesta atualização.

O portfólio continua em HTML/CSS/JavaScript puro, sem novas dependências. A gaveta utiliza `dialog` nativo, com foco contido, Escape, fechamento pelo fundo, restauração de foco e idioma compartilhado com o header. O hash permite abrir o case diretamente e usar Voltar/Avançar do navegador.

## Arquivos

- `index.html`: entrada de destaque, dois itens equivalentes na vitrine contínua e 11 capítulos semânticos do case.
- `style.css`: apresentação do projeto, gaveta, índice, diagramas, adaptações mobile e motion reduzido. Os estilos específicos usam o prefixo `reine-`.
- `script.js`: traduções em `translations.pt.reineCase` e `translations.en.reineCase`; abertura, fechamento e navegação do case.
- `assets/projects/reine-exe/`: três capturas reais e instruções para atualizar a mídia.

Todos os projetos, textos e links anteriores foram preservados. A comparação do HTML anterior, retirando somente os blocos novos desta integração, resultou em conteúdo idêntico.

## Narrativa adicionada

Contexto, conceito 70/30, atuação do autor e apoio de IA, direção visual, funcionalidades agrupadas, conteúdo pessoal como UX, áudio, stack, arquitetura, Sports e iterações, debugging de assets, resultado e aprendizados. Todo o texto novo e os nomes acessíveis têm PT/EN. As imagens documentais permanecem no idioma em que foram capturadas.

## Evidência técnica

Código analisado, sem alterar os fontes: `C:/Users/Reine/OneDrive/Documentos/ChatGPT/Hobbies`.

| Afirmação | Evidência real |
| --- | --- |
| React, TypeScript, Vite, CSS e Lucide React | `package.json`, `vite.config.ts`, `src/main.tsx` |
| Conteúdo separado em dados tipados | `src/data/games.ts`, `books.ts`, `sports.ts`, `hobbies.ts`, `links.ts`, `current.ts`, `about.ts`, `types.ts` |
| Navegação por hash, sem biblioteca de rotas | `src/App.tsx`, `src/data/navigation.ts` |
| Dicionários PT/EN e nomes acessíveis | `src/i18n/index.ts`, `pt.ts`, `en.ts`, `tree.ts` |
| Tema, idioma e intro em localStorage | `src/App.tsx`, `src/i18n/index.ts` |
| Save com visitas, áreas, fichas, segredos e sete badges | `src/hooks/useSave.ts`, chave `reine-save` |
| Volume em sessionStorage, não localStorage | `src/components/Player.tsx`, chave `reine-volume` |
| Player mantido ao mudar de área; play após ação e tratamento de erro | `Player.tsx` e sua posição em `App.tsx` |
| Lazy loading e reduced motion | `App.tsx`, `MotionAsset.tsx`, imagens de `Areas.tsx`, CSS |
| Teclado no mapa e janela modal nativa | `AreaMenu.tsx`, `Window.tsx` |
| Sports 2×2 e versão mobile empilhada | `Areas.tsx`, regras finais de `src/styles/home-system.css` |
| Logos locais, validação e nomes normalizados | `scripts/fetch-sports-assets.mjs`, `src/data/sports.ts`, `public/assets/sports/teams` |
| Siglas em caso de falha de imagem | `src/components/TeamIdentity.tsx` |
| Créditos de Pedro Joaquim | `src/data/party.ts`, `src/data/credits.ts` |
| Conexão com YouTube e portfólio profissional | `src/data/links.ts`, `src/data/2doods.ts`, `src/pages/Areas.tsx` |

O build local gerou os mesmos nomes de bundles identificados no HTML publicado durante a inspeção: `index-D8pTKgke.js` e `index-BBrAu5YT.css`. Isso sustenta a correspondência com a versão inspecionada; não é uma auditoria do histórico de deploy.

## Limites e pendências confirmados

- Não há screenshot autenticado da primeira iteração de Sports. Há placeholder identificado, sem imagem fabricada.
- A origem, as decisões criativas e a cronologia das iterações são relatos do autor fornecidos no pedido, não fatos dedutíveis de um snapshot de código.
- Não é possível concluir que case sensitivity foi a causa exata da falha antiga só pelo código atual. O case apresenta os pontos investigados, não uma causa inventada.
- A captura do deploy ainda mostra fallback em logos. Não foi afirmado que todos os assets publicados foram corrigidos.
- Git está inicializado na pasta original, mas `git remote -v` não retornou remoto e os fontes aparecem como não rastreados. Não foi inventado fluxo GitHub/CI nem histórico de commits; GitHub não foi apresentado como infraestrutura comprovada deste projeto.
- O changelog permanece em `App.tsx`; nem todo o conteúdo foi externalizado.
- Há `current.ts` com jogo e livro atuais. A anotação antiga em `ASSET_TODO.md` sobre esses campos vazios estava desatualizada; o case segue o código atual.
- `videos` em `src/data/2doods.ts` está vazio. O canal está conectado; o case não promete uma galeria de vídeos preenchida.
- O arquivo de áudio existe, mas a autoria/licença não foi comprovada pelos metadados. Não foi copiado para o portfólio nem descrito como música licenciada verificada.
- Mute e posição do áudio não são persistidos entre novas sessões. Nenhuma sincronização por backend é alegada.

## Validação executada

- REINE.EXE: `npm run build` aprovado; inclui `tsc -b` e build Vite.
- REINE.EXE: `npm run lint` aprovado, sem avisos.
- Portfólio: `node --check script.js` aprovado.
- Portfólio: ESLint com regras recomendadas e globals de navegador aprovado, sem avisos, usando o runtime já instalado no projeto original.
- 633 referências de i18n conferidas em PT/EN; nenhuma chave ausente.
- Nenhum ID duplicado, âncora interna ausente, arquivo local referenciado ausente ou link `_blank` sem `noopener noreferrer`.
- Navegador: 320, 375, 768 e 1280 px em PT; também 320 px em EN. Nenhum overflow horizontal na página, entrada ou gaveta.
- Navegador: troca PT/EN e preferência após recarregar; entrada por hash; Voltar fecha e Avançar reabre o case.
- Navegador: Escape, botão de fechar, clique no fundo, Tab/Shift+Tab circulares, retorno de foco e desbloqueio da rolagem.
- Navegador: índice posiciona o capítulo abaixo do toolbar; as três imagens carregaram; nenhum erro ou aviso no console na sessão de validação.
- O portfólio não possui `package.json`, build, TypeScript ou lint próprios. Não foi introduzido um toolchain para a integração.

As capturas da validação visual ficam em `.qa/`, separadas dos assets publicados do projeto. Para editar o texto depois, mantenha o PT inicial do HTML e os dois objetos `reineCase` sincronizados.
