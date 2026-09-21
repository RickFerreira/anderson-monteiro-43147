# Anderson Monteiro 43147 — Landing page

Site institucional de campanha, one page com navegação por âncoras e rolagem suave.
HTML, CSS e JavaScript puros, sem build e sem dependências.
Ideia inicial feita com vibe coding, utilizando a metodologia Spec-Driven Development (SDD) e depois realizando ajustes manuais.

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

## Identidade visual

| Token      | Hex       | Uso                     |
| ---------- | --------- | ----------------------- |
| `--deep`   | `#00604F` | verde profundo da marca |
| `--deep-2` | `#004A3E` | fundos escuros de apoio |
| `--lime`   | `#BFFE1B` | destaque neon           |
| `--green`  | `#17C55C` | verde vibrante do hero  |
| `--leaf`   | `#00AF48` | verde médio             |

Tipografia via Google Fonts: **Anton** nos títulos em caixa alta e **Poppins** no restante.

## Acessibilidade e performance

- Marcação semântica, foco visível e link "pular para o conteúdo".
- `prefers-reduced-motion` respeitado.
- Sem bibliotecas externas: só as fontes do Google são carregadas da rede.
- Imagens já otimizadas (pacote completo com menos de 500 KB).

---

Site produzido por Richard Salviano.
