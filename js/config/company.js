/* ============================================================
   CONFIGURAÇÃO DA EMPRESA
   Para reutilizar este site em outro negócio, basta editar
   este arquivo. Nenhum componente deve conter esses dados
   escritos diretamente.
   ============================================================ */

window.CONFIG = window.CONFIG || {};

window.CONFIG.company = {
  name: "Pizza Prima",
  tagline: "Pizzaria Premium",
  logoText: "Pizza ",
  logoAccent: "Prima",
  description:
    "Pizzas artesanais assadas em temperatura controlada, com ingredientes selecionados e o fogo como protagonista de cada receita.",
  heroTitle: "Precisão que vira sabor.",
  heroSubtitle:
    "Massa de fermentação lenta, temperatura controlada com precisão e ingredientes escolhidos a dedo. Uma experiência de pizzaria premium, do primeiro cheiro ao último pedaço é só aqui na pizza Prima!",
  telefone:"(11) 3936-1080",
  phone: "(11) 98337-6262",
  whatsapp: "551198337-6262", // placeholder — substitua pelo número real da pizzaria
  email: "primapizzaeesfiha@gmail.com",

  address: {
    street: "Rua Vicente Soares da Costa, n° 209, Zona Norte",
    city: "São Paulo, SP ",
    mapsUrl: "https://share.google/N4xw7fzhLubjF8Sg4"
  },

  hours: [
    { dias: "Segunda a Sexta", horario: "18h00 — 23h30" },
    { dias: "Sábado e Domingo", horario: "18h00 — 00h00" },
    { dias: "feriados", horario: "fechados" }
  ],

  seo: {
    title: "Pizzaria Prima — Pizzaria Premium",
    description:
      "Pizzaria premium com temperatura controlada, ingredientes selecionados e experiência gastronômica cinematográfica.",
    favicon: "assets/backgrounds/favicon.png"
  },

  theme: "dark-ember" // referência ao tema ativo em theme.js
};
