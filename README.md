# Anderson Monteiro 43147 — Landing page

Site institucional de campanha, uma única página com navegação por âncoras e rolagem suave.
HTML, CSS e JavaScript puros, sem build e sem dependências — basta subir os arquivos.

## Estrutura

```
index.html          marcação de todas as seções
style.css           estilos (mobile first)
script.js           menu, rolagem suave, scrollspy e lista de leis
assets/
  logo-a.png                  símbolo "A" (usado no header e no favicon)
  logo-lockup-branco.png      assinatura completa em branco (hero e rodapé)
  logo-lockup-cor.png         assinatura em cores (para fundos claros)
  mosaico-horizontal.png      mosaico de ladrilhos (textura do hero)
  mosaico-faixa.png           uma linha do mosaico (fita antes do rodapé)
  mosaico-vertical.png        mosaico vertical (reserva, não usado ainda)
  foto-hero.jpg               retrato do hero
  foto-sobre.jpg              retrato da seção "Sobre"
  foto-duotone.jpg            arte duotone da faixa de chamada
```

## Como publicar

É um site estático. Qualquer hospedagem serve:

- **GitHub Pages**: suba os arquivos na raiz do repositório e ative Pages na branch `main`.
- **Netlify / Vercel**: arraste a pasta; não há comando de build.
- **Hospedagem tradicional**: envie tudo por FTP para a pasta pública.

Para testar localmente, abra `index.html` no navegador ou rode `npx serve` na pasta.

## Onde editar

| O que mudar | Onde |
| --- | --- |
| Textos das seções | `index.html` |
| Lista de leis | array `LEIS` no topo do `script.js` |
| Cores e tipografia | bloco `:root` no início do `style.css` |
| Links de redes sociais | rodapé do `index.html` |
| Logos e fotos | pasta `assets/` (mantenha os nomes dos arquivos) |

## Identidade visual

Cores retiradas dos arquivos oficiais da campanha:

| Token | Hex | Uso |
| --- | --- | --- |
| `--deep` | `#00604F` | verde profundo da marca |
| `--deep-2` | `#004A3E` | fundos escuros de apoio |
| `--lime` | `#BFFE1B` | destaque neon |
| `--green` | `#17C55C` | verde vibrante do hero |
| `--leaf` | `#00AF48` | verde médio |

Tipografia via Google Fonts: **Anton** nos títulos em caixa alta e **Poppins** no restante.
A assinatura manuscrita "Monteiro" faz parte do arquivo do logo, não é uma fonte.

## Acessibilidade e performance

- Marcação semântica, foco visível e link "pular para o conteúdo".
- `prefers-reduced-motion` respeitado.
- Sem bibliotecas externas: só as fontes do Google são carregadas da rede.
- Imagens já otimizadas (pacote completo com menos de 500 KB).

---

Site produzido por Richard Salviano.
