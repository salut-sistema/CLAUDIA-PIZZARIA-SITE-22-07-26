window.CONFIG = window.CONFIG || {};

window.CONFIG.contact = {
  formTitle: "Faça seu Pedido",
  formSubtitle: "Preencha os dados e finalize direto pelo WhatsApp.",
  tipoPedido: [
    { valor: "Entrega", label: "Entrega" },
    { valor: "Retirada", label: "Retirada" }
  ],
  campos: {
    nome: "Nome completo",
    telefone: "Telefone / WhatsApp",
    sabores: "Sabores desejados (ex: Marguerita, Calabresa)",
    endereco: "Endereço de entrega",
    observacoes: "Observações adicionais"
  },
  botaoEnviar: "Fazer Pedido pelo WhatsApp",
  mensagemTemplate: ({ nome, telefone, tipo, sabores, endereco, obs }) =>
    `Olá! Gostaria de fazer um pedido:

👤 Nome: ${nome}
📞 Telefone: ${telefone}
🛵 Tipo: ${tipo}
🍕 Sabores: ${sabores || "Não informado"}
📍 Endereço: ${endereco || "Retirada no local"}
📝 Observações: ${obs || "Nenhuma"}`
};
