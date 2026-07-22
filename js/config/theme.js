window.CONFIG = window.CONFIG || {};

/* Mapa de referência dos tokens definidos em css/variables.css.
   Mantido aqui apenas para consulta em JS (ex: gerar gráficos,
   ler cor computada). A fonte da verdade é sempre o :root do CSS. */
window.CONFIG.theme = {
  cssVar: (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim(),
  tokens: {
    primary: "--primary-color",
    secondary: "--secondary-color",
    accent: "--accent",
    gold: "--gold",
    ember: "--ember",
    background: "--background",
    textPrimary: "--text-primary"
  }
};
