const form = document.querySelector('form');
const submitButton = form.querySelector('#submit');

submitButton.addEventListener('click', () => {
  // Recupera as informações do formulário
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const phone = form.querySelector('#phone').value;
  const message = form.querySelector('#message').value;

  // Constrói o link do WhatsApp
  const phoneNumber = '83987929287';
  const messageBody = `Olá, meu nome é ${name}. Meu email é ${email} e meu telefone é ${phone}. Gostaria de deixar a seguinte mensagem: ${message}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageBody)}`;

  // Abre o link do WhatsApp
  window.open(whatsappLink);
});
