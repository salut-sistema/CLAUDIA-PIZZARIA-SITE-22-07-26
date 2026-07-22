/* ============================================================
   CONFIGURAÇÃO DO CARDÁPIO
   ============================================================ */

window.CONFIG = window.CONFIG || {};

window.CONFIG.menu = {
  categories: [
    {
      id: "tradicionais",
      label: "PIZZA GRANDE",
      description: "Os clássicos que nunca saem de moda, feitos como manda a tradição.",
      items: [
        {
          nome: "Marguerita",
          descricao: "Molho de tomate, mussarela, tomate fatiado, parmesão, manjericão, orégano e azeitonas",
          preco: "R$ 51,50",
          imagem: "assets/gallery/forno-especiais-2.jpg"
        }
      ]
    },

    {
      id: "tradicionais",
      label: "PIZZA BROTO",
      description: "Os clássicos que nunca saem de moda, feitos como manda a tradição.",
      items: [
        {
          nome: "Mussarela ",
          descricao: "queijo mussarela",
          preco: "R$ 31,00",
          imagem: "assets/hero/hero-pizza.jpg"
        }
      ]
    },

    {
      id: "Pastel",
      label: "Pastel",
      description: "Criações autorais do nosso chef, exclusivas do Forno Nero.",
      items: [
        {
          nome: "Pastel Carne",
          descricao: "Pizza fechada no forno a lenha, recheada com carne selecionada e temperos da casa.",
          preco: "R$ 15,00",
          imagem: "assets/products/pastelcarne.png"
        },
        {
          nome: "Pastel Portuguesa",
          descricao: "Massa dourada e crocante, recheio generoso de carne, cebola e ervas frescas.",
          preco: "R$ 15,00",
          imagem: "assets/products/pastelportuguesa.png"
        },
        {
          nome: "Pastel Quijo",
          descricao: "Massa fina, chocolate meio-amargo derretido e avelãs tostadas.",
          preco: "R$ 15,00",
          imagem: "assets/products/pastelqueijo.jpg"
        }
      ]
    },

    {
      id: "pizza Doces",
      label: "Pizza Doces",
      description: "O fecho perfeito para a noite, direto do forno a lenha.",
      items: [
        {
          nome: "Pizza Doce",
          descricao: "Massa dourada e crocante,recheio generoso de queijo, fatias de tomate ",
          preco: "R$ 37,50",
          imagem: "assets/products/pizzadoceprestigio.png"
        }
      ]
    },

    {
      id: "refrigerantes",
      label: "Variedades",
      description: "Seleção de rótulos para acompanhar cada fatia.",
      items: [
        {
          nome: "Refrigerantes",
          descricao: "Massa dourada e crocante,recheio generoso de queijo, fatias de tomate ",
          preco: "R$ 10,90",
          imagem: "assets/products/refrigerantes.png"
        }
      ]
    }
  ],

  // Banner de promoção exibido abaixo da grade do cardápio.
  // Para trocar a foto da promoção, basta alterar o caminho em "imagem".
  promo: {
    imagem: "assets/products/promocao.png",
    alt: "Promoção"
  }
};
