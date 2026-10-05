import { replyTo, validateMessage } from './brain.js';
import { renderMessages } from './view.js';

const form = document.querySelector('#chat-form');
const input = document.querySelector('#message');
const messages = document.querySelector('#messages');
const status = document.querySelector('#status');
const historique = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const validation = validateMessage(input.value);

  if (!validation.ok) {
    status.textContent = validation.error;
    input.focus();
    return;
  }

  historique.push({ role: 'user', text: validation.value });
  historique.push({ role: 'assistant', text: replyTo(validation.value) });
  renderMessages(historique, messages);

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
