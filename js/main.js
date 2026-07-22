(function () {
  "use strict";

  const C = window.CONFIG;
  const ICONS = window.ICONS;
  const ROUTES = window.ROUTES;
  const NAV_LINKS = window.NAV_LINKS;

  /* ============================================================
     RENDER: metadata
     ============================================================ */
  document.title = C.company.seo.title;

  /* ============================================================
     RENDER: nav
     ============================================================ */
  function renderNav() {
    const logo = document.getElementById("navLogo");
    logo.innerHTML = `${C.company.logoText}<span>${C.company.logoAccent}</span>`;

    const ul = document.getElementById("navLinks");
    ul.innerHTML = NAV_LINKS.map(
      (link) => `<li><a href="${link.href}">${link.label}</a></li>`
    ).join("");
  }

  /* ============================================================
     RENDER: hero
     ============================================================ */
  function renderHero() {
    document.getElementById("heroEyebrow").textContent = C.company.tagline;
    document.getElementById("heroTitle").textContent = C.company.heroTitle;
    document.getElementById("heroSub").textContent = C.company.heroSubtitle;

    const cta = document.getElementById("heroCta");
    cta.textContent = window.Buttons.PEDIR_AGORA;
    cta.setAttribute("href", ROUTES.ORDER);

    document.querySelector(".hero-bg").style.backgroundImage =
      `url('assets/hero/hero-pizza.jpg')`;
  }

  /* ============================================================
     RENDER: sobre
     ============================================================ */
  function renderSobre() {
    document.getElementById("sobreImg").src = "assets/products/pizza-tradicional.jpg";
    document.getElementById("sobreTitle").innerHTML =
      `O fogo que<br><em>não engana</em>`;
    document.getElementById("sobreP1").textContent =
      "Desde 1996, a PIZZA PRIMA tem um compromisso: fazer pizza com respeito pelo tempo. A massa descansa por 48 horas antes de qualquer coisa. Fermentação lenta, sabor que não se apressa.";
    document.getElementById("sobreP2").textContent =
      "O controle da temperatura é essêncial para o forno chegar a 400°C. É esse calor intenso, quase teimoso, que dá à borda a textura certa: crocante fora, macia dentro.";
    document.getElementById("sobreP3").textContent =
      "Ingredientes selecionados e generosos, sem economizar no recheio — porque pizza boa se sente em cada mordida.";
  }

  /* ============================================================
     RENDER: diferenciais
     ============================================================ */
  const DIFERENCIAIS = [
    { icon: "oven", title: "Controle de temperatura", desc: "Calor real, sabor defumado que nenhum forno elétrico reproduz." },
    { icon: "ingredients", title: "Ingredientes Frescos", desc: "Selecionados diariamente, sem atalhos." },
    { icon: "delivery", title: "Entrega Rápida", desc: "Sai do forno e chega até você ainda quente, sem perder a alma." },
    { icon: "chef", title: "Atendimento Premium", desc: "Uma experiência pensada do primeiro contato ao último pedaço." }
  ];

  function renderDiferenciais() {
    document.getElementById("difTitle").textContent = "Nossos Diferenciais";
    document.getElementById("difSubtitle").textContent = "O que nos move";

    document.getElementById("difGrid").innerHTML = DIFERENCIAIS.map(
      (d) => `
      <div class="dif-card reveal">
        <div class="dif-icon">${ICONS[d.icon]}</div>
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
      </div>`
    ).join("");
  }

  /* ============================================================
     RENDER: cardápio (estilo galeria, dados de CONFIG.menu)
     ============================================================ */
  function renderCardapio() {
    document.getElementById("cardapioTitle").textContent = "Cardápio";
    document.getElementById("cardapioSubtitle").textContent = "Feito Com Carinho";

    const items = C.menu.categories.flatMap((cat) =>
      cat.items.map((item) => ({ ...item, categoria: cat.label }))
    );

    document.getElementById("galeriaGrid").innerHTML = items
      .map(
        (item) => `
      <div class="galeria-item reveal">
        <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
        <div class="galeria-item-overlay">
          <span class="galeria-item-cat">${item.categoria}</span>
          <span class="galeria-item-label">${item.nome}</span>
          <span class="galeria-item-price">${item.preco}</span>
        </div>
      </div>`
      )
      .join("");

    if (C.menu.promo) {
      const promoImg = document.getElementById("promoImg");
      promoImg.src = C.menu.promo.imagem;
      promoImg.alt = C.menu.promo.alt || "Promoção";
    }
  }

  /* ============================================================
     RENDER: depoimento / parallax
     ============================================================ */
  function renderDepoimento() {
    document.getElementById("parallaxImg").style.backgroundImage =
      `url('assets/gallery/forno-especiais-2.jpg')`;
    document.getElementById("depoimentoQuote").textContent =
      `"A melhor pizza que já pedi em casa. Dava pra sentir o cheiro de fumaça na massa. Chegou quente, cheia de sabor, e não sobrou nada."`;
    document.getElementById("depoimentoCite").textContent = "Cliente Pizza Prima";
  }

  /* ============================================================
     RENDER: contato / formulário
     ============================================================ */
  function renderContato() {
    document.getElementById("formTitle").innerHTML =
      `Peça sua <em>Pizza</em>`;
    document.getElementById("formSub1").textContent = C.company.description;
    document.getElementById("formSub2").textContent =
      "Preencha os dados abaixo e finalize seu pedido direto pelo WhatsApp.";

    const hoursHtml = C.company.hours
      .map((h) => `${h.dias}: ${h.horario}`)
      .join(" · ");
    document.getElementById("formHours").innerHTML =
      `${ICONS.clock}<span>${hoursHtml}</span>`;
    document.getElementById("formAddress").innerHTML =
      `${ICONS.location}<span>${C.company.address.street}, ${C.company.address.city}</span>`;

    document.getElementById("labelNome").firstChild.textContent = C.contact.campos.nome;
    document.getElementById("labelTel").firstChild.textContent = C.contact.campos.telefone;
    document.getElementById("labelSabores").firstChild.textContent = C.contact.campos.sabores;
    document.getElementById("labelEndereco").firstChild.textContent = C.contact.campos.endereco;
    document.getElementById("labelObs").firstChild.textContent = C.contact.campos.observacoes;

    document.getElementById("tipoGroup").innerHTML = C.contact.tipoPedido
      .map(
        (t, i) =>
          `<button type="button" class="tipo-btn${i === 0 ? " active" : ""}" data-tipo="${t.valor}">${t.label}</button>`
      )
      .join("");
    document.getElementById("f-tipo").value = C.contact.tipoPedido[0].valor;

    const btn = document.getElementById("btnSubmit");
    btn.innerHTML = `${ICONS.whatsapp}<span>${C.contact.botaoEnviar}</span>`;
  }

  /* ============================================================
     RENDER: footer
     ============================================================ */
  function renderFooter() {
    document.getElementById("footerBrand").innerHTML =
      `${C.company.logoText}<span>${C.company.logoAccent}</span>`;
    document.getElementById("footerSub").textContent = C.company.description;

    document.getElementById("footerSocial").innerHTML = `
      <a href="${C.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
      <a href="${C.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
      <a href="${C.social.whatsappUrl}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>
    `;

    document.getElementById("footerContact").innerHTML = `
    <li>${ICONS.whatsapp}<a href="" target="_blank" rel="noopener">${C.company.telefone}</a></li>
    <li>${ICONS.whatsapp}<a href="${C.social.whatsappUrl}" target="_blank" rel="noopener">${C.company.phone}</a></li>
    <li>${ICONS.location}<a href="${C.company.address.mapsUrl}" target="_blank" rel="noopener">${C.company.address.street}</a></li>
    `;

    document.getElementById("footerHours").innerHTML = C.company.hours
      .map((h) => `<li>${ICONS.clock}<span>${h.dias}: ${h.horario}</span></li>`)
      .join("");

    document.getElementById("footerCopy").textContent =
      `© ${new Date().getFullYear()} ${C.company.name}. Todos os direitos reservados.`;
    document.getElementById("footerCraft").textContent = "Feito para você!";
  }

  /* ============================================================
     INTERAÇÕES
     ============================================================ */
  function setupNavScroll() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > C.animations.navScrollThreshold);
    });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
  }

  function setupParallax() {
    const img = document.getElementById("parallaxImg");
    const section = document.getElementById("depoimentos");
    window.addEventListener("scroll", () => {
      const rect = section.getBoundingClientRect();
      const offset = rect.top * C.animations.parallaxStrength;
      img.style.transform = `translateY(${offset}px)`;
    });
  }

  function setupTipoButtons() {
    const buttons = document.querySelectorAll(".tipo-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("f-tipo").value = btn.dataset.tipo;
      });
    });
  }

  function setupFormSubmit() {
    document.getElementById("form-pedido").addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("f-nome").value.trim();
      const telefone = document.getElementById("f-tel").value.trim();
      const tipo = document.getElementById("f-tipo").value;
      const sabores = document.getElementById("f-sabores").value.trim();
      const endereco = document.getElementById("f-endereco").value.trim();
      const obs = document.getElementById("f-obs").value.trim();

      if (!nome || !telefone) {
        alert("Por favor, preencha nome e telefone.");
        return;
      }

      const msg = C.contact.mensagemTemplate({
        nome,
        telefone,
        tipo,
        sabores,
        endereco,
        obs
      });
      
      const url = `https://wa.me/${C.company.whatsapp}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    renderNav();
    renderHero();
    renderSobre();
    renderDiferenciais();
    renderCardapio();
    renderDepoimento();
    renderContato();
    renderFooter();

    setupNavScroll();
    setupReveal();
    setupParallax();
    setupTipoButtons();
    setupFormSubmit();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
