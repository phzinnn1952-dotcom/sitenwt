// Número de WhatsApp da Netway (somente dígitos, com DDI e DDD). Substitua pelo número real.
const WHATSAPP = '550000000000';

const waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Botão flutuante do WhatsApp
document.getElementById('whatsapp-float').href = waLink('Olá! Gostaria de saber mais sobre a internet da Netway.');

// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Botões "Quero esse" pré-selecionam o plano no formulário de contato
const planoSelect = document.querySelector('#form-contato select[name="plano"]');
document.querySelectorAll('[data-plano]').forEach((btn) =>
  btn.addEventListener('click', () => { planoSelect.value = btn.dataset.plano; })
);

// Máscara de CEP
const cep = document.querySelector('input[name="cep"]');
cep.addEventListener('input', () => {
  const d = cep.value.replace(/\D/g, '').slice(0, 8);
  cep.value = d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
});

// Formulários abrem conversa no WhatsApp
document.getElementById('form-cobertura').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  window.open(waLink(`Olá! Quero consultar a cobertura da Netway. CEP: ${f.cep.value}, nº ${f.numero.value}.`), '_blank');
});

document.getElementById('form-contato').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  window.open(waLink(`Olá! Meu nome é ${f.nome.value} (${f.telefone.value}). Tenho interesse no plano ${f.plano.value}.`), '_blank');
});
