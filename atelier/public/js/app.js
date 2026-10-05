const form = document.querySelector('#chat-form');
const input = document.querySelector('#message');
const messages = document.querySelector('#messages');
const status = document.querySelector('#status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = input.value.trim();

  if (!message) {
    status.textContent = 'Écrivez un message avant de l’envoyer.';
    input.focus();
    return;
  }

  const line = document.createElement('li');
  line.textContent = `Vous : ${message}`;
  messages.appendChild(line);
  input.value = '';
  status.textContent = '';
  input.focus();
});

document.querySelectorAll('[data-question]').forEach((button) => {
  button.addEventListener('click', () => {
    input.value = button.dataset.question;
    input.focus();
  });
});
