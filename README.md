# Forno Nero — Pizzaria Premium

Site institucional/one-page com cardápio, diferenciais, galeria, depoimento e
formulário de pedido integrado ao WhatsApp.

## Como personalizar para outra empresa

Todo o conteúdo específico do negócio está centralizado em `js/config/`.
**Não é necessário editar `index.html`, `main.js` ou os arquivos CSS** para
trocar textos, cores, contatos ou cardápio — basta editar os arquivos de
configuração abaixo:

| Arquivo | O que controla |
|---|---|
| `js/config/company.js` | Nome, tagline, textos do hero, telefone, WhatsApp, endereço, horários, SEO |
| `js/config/menu.js` | Categorias e itens do cardápio (nome, descrição, preço, imagem) |
| `js/config/social.js` | Links de redes sociais e WhatsApp |
| `js/config/contact.js` | Labels do formulário e template da mensagem enviada ao WhatsApp |
| `js/config/theme.js` | Referência aos tokens de cor (a fonte real é `css/variables.css`) |
| `js/config/animations.js` | Durações e sensibilidade das animações |
| `css/variables.css` | **Todas as cores do site.** Trocar a paleta = editar só este arquivo |
| `js/constants/routes.js` | Âncoras de navegação e links do menu |
| `js/constants/icons.js` | Biblioteca única de ícones (SVG inline) |
| `assets/` | Imagens organizadas por uso (hero, produtos, galeria, backgrounds) |

## Estrutura

```
index.html              → apenas estrutura (sem texto/cor fixos)
css/
  variables.css          → design tokens (:root)
  style.css               → estilos, usando var(--...) em tudo
js/
  config/                 → dados da empresa (fonte única)
  constants/               → rotas e ícones centralizados
  enums/                   → Sections, Buttons, Category, Animation
  main.js                  → injeta o conteúdo do config no DOM + interações
assets/
  hero/ products/ gallery/ backgrounds/
```

## Rodando localmente

Basta abrir `index.html` no navegador. Não há build step — é HTML/CSS/JS puro.

## Placeholder importante

O número de WhatsApp em `js/config/company.js` (`whatsapp`) é um placeholder.
Substitua pelo número real da pizzaria antes de publicar.
