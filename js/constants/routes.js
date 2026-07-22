window.ROUTES = Object.freeze({
  HOME: "#hero",
  ABOUT: "#sobre",
  MENU: "https://pedir.delivery/app/primapizza/menu",
  GALLERY: "#cardapio",
  CONTACT: "#contato",
  ORDER: "https://pedir.delivery/app/primapizza/menu",
  PRIVACY: "#",
  TERMS: "#"
});

window.NAV_LINKS = [
  { label: "Início", href: window.ROUTES.HOME },
  { label: "Sobre", href: window.ROUTES.ABOUT },
  { label: "Cardápio", href: window.ROUTES.MENU },
  { label: "Galeria", href: window.ROUTES.GALLERY },
  { label: "Contato", href: window.ROUTES.CONTACT }
];
