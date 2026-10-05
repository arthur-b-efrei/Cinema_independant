import { replyTo, validateMessage } from './brain.js';

const form = document.querySelector('#chat-form');
const input = document.querySelector('#message');
const messages = document.querySelector('#messages');
const status = document.querySelector('#status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const validation = validateMessage(input.value);

  if (!validation.ok) {
    status.textContent = validation.error;
    input.focus();
    return;
  }

  const userLine = document.createElement('li');
  userLine.textContent = `Vous : ${validation.value}`;
  messages.appendChild(userLine);

  const assistantLine = document.createElement('li');
  assistantLine.textContent = `Cap Web : ${replyTo(validation.value)}`;
  messages.appendChild(assistantLine);

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
