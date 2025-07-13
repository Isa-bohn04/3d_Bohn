

function contatarWhatsApp(produto) {
  const numero = "5541995469616"; // substitua com seu número real
  const mensagem = encodeURIComponent(`Olá! Tenho interesse no ${produto}.`);
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, "_blank");
}

function abrirInstagram() {
  const url = "https://instagram.com/sua_loja"; // substitua com seu @
  window.open(url, "_blank");
}
