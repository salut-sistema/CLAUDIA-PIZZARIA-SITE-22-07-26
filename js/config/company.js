/* ============================================================
   CONFIGURAÇÃO DA EMPRESA
   Para reutilizar este site em outro negócio, basta editar
   este arquivo. Nenhum componente deve conter esses dados
   escritos diretamente.
   ============================================================ */

window.CONFIG = window.CONFIG || {};

window.CONFIG.company = {
  name: "Pizza Prima ",
  direitorfooter: "pizzariaprimapizzaepastel",
  tagline: "Pizza e Pastel",
  logoText: "Pizza ",
  logoAccent: "Prima",
  description:
    "Pizzas artesanais assadas em temperatura controlada, com ingredientes selecionados e o fogo como protagonista de cada receita.",
  heroTitle: "Precisão que vira sabor.",
  heroSubtitle:"O sabor tradicional que conquista em cada pedaço. Pizzas e pastéis preparados com ingredientes selecionados, massa saborosa e aquele toque especial que faz você voltar. Pizza Prima: sabor de verdade, do jeito que você gosta.",
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
    { dias: "domingo Terça Quarta quinta", horario: "18h00 — 23h30" },
    { dias: "sexta e sábado", horario: "18h00 — 00h30" },
    { dias: "segunda", horario: "fechado" }
  ],

  seo: {
    title: "Pizzaria Prima — Pizzaria Premium",
    description:
      "Pizzaria premium com temperatura controlada, ingredientes selecionados e experiência gastronômica cinematográfica.",
    favicon: "assets/backgrounds/favicon.png"
  },

  theme: "dark-ember" // referência ao tema ativo em theme.js
};
