function contatarWhatsApp(produto) {
  const numero = "5599999999999"; // Substitua pelo seu número com DDD e país (ex: 55 + DDD + número)
  const mensagem = encodeURIComponent(`Olá! Tenho interesse no ${produto}.`);
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, "_blank");
}
