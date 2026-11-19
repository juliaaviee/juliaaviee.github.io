# Portfólio Web de Julia Silva

## Visão geral
Um site estático, **leve**, totalmente pronto para ser publicado no **GitHub Pages** (`<username>.github.io`). Não requer nenhuma etapa de build – basta fazer o `git push`.

## Estrutura de diretórios
```
/ (raiz)
├─ index.html            # página inicial
├─ css/
│   └─ style.css        # estilos globais, temas claro/escuro e badges
├─ js/
│   ├─ data.js          # lista de projetos (adicionar/remover aqui)
│   └─ main.js          # renderiza dinamicamente os cards e alterna tema
├─ assets/
│   └─ icons/           # coloque ícones SVG/PNG (ex.: favicon)
└─ README.md            # este arquivo
```

## Como publicar no GitHub Pages
1. Crie um repositório público no GitHub, por exemplo `julia/portfolio`.
2. Commit e push todos os arquivos acima para a branch `main` (ou `master`).
3. No GitHub, vá em **Settings → Pages** e selecione a branch `main` como source (raiz).
4. O site ficará disponível em `https://julia.github.io/portfolio/`.

## Personalização
- **Adicionar/editar projetos**: modifique `js/data.js`. Cada objeto possui `title`, `description`, `badges` (classe de badge), `repo` e `link`.
- **Cores & fontes**: as variáveis CSS estão definidas em `css/style.css`. Ajuste‑as conforme necessário.
- **Ícones**: coloque arquivos SVG/PNG dentro de `assets/icons/` e referencie‑os no HTML.
- **Tipografia**: carregamos as fontes via Google Fonts no `<head>` (Plus Jakarta Sans, Inter, JetBrains Mono). Caso deseje fontes locais, basta substituir o `<link>`.

## Próximos passos recomendados
- Adicionar um **favicon** (`assets/icons/favicon.ico`).
- Incluir um pequeno **arquivo de foto** ou avatar no header.
- Testar o toggle de modo escuro no navegador.

---
Feito com ❤️ e inspirado nas linguagens visuais de **Linear**, **Stripe** e **Raycast**.
