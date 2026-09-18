# REINE.EXE: mídia do case

As três imagens são capturas reais de https://reineexe.netlify.app/, feitas em 17/09/2026. Não são mockups gerados nem reconstruções da interface.

| Arquivo | Conteúdo | Resolução do arquivo |
| --- | --- | --- |
| `home-desktop.jpg` | Home publicada, tema noturno, PT | 1265 × 712 |
| `sports-desktop.jpg` | Sports publicado, captura completa, com fallbacks visíveis | 1265 × 1653 |
| `home-mobile.jpg` | Home publicada, tela mobile | 375 × 812 |

A captura mobile exclui a área da barra de rolagem do navegador. Os arquivos somam aproximadamente 289 KiB. Mantidos no formato JPEG retornado pela captura, sem geração de imagens.

## Crédito

As ilustrações pessoais de Pokémon presentes nas capturas são de **Pedro Joaquim / @ped_joaquim**:
https://www.instagram.com/ped_joaquim?stkn=MWN1Z2xrZnRhaW53eA==

Esse crédito está visível na entrada do projeto e no case. As ilustrações não são atribuídas a Reinhold.

## Material pendente

Falta apenas o registro **original da primeira versão de Sports** para uma comparação visual antes/depois. Não foi encontrada uma captura comprovadamente correspondente à iteração descrita. Não usar uma reconstrução como se fosse screenshot histórico.

Nome sugerido: `sports-before.jpg`.

O espaço está em `index.html`, identificado por `data-asset-slot="sports-before"`. Quando o arquivo estiver disponível, substituir o placeholder por um `figure` com a classe `reine-screen`, imagem com dimensões reais, `loading="lazy"`, alt PT/EN e legenda de ITERATION 01. Acrescentar as traduções em `translations.pt.reineCase.media` e `translations.en.reineCase.media`, no `script.js`.

Capturas extras de Games, Pokémon, Books ou World Map são opcionais. Não há imagens ausentes sendo requisitadas nem placeholders que imitam screenshots.

## Atualização

Para renovar uma captura mantendo o mesmo nome, substituir o arquivo e ajustar `width`/`height` no HTML caso a proporção mude. Atualizar as legendas se a interface publicada mudar. O case não incorpora o player ou o MP3 do projeto original.
