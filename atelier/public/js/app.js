import { replyTo, validateMessage } from './brain.js';
import { renderMessages } from './view.js';

const form = document.querySelector('#chat-form');
const input = document.querySelector('#message');
const messages = document.querySelector('#messages');
const status = document.querySelector('#status');
const clearButton = document.querySelector('#effacer');
const STORAGE_KEY = 'capweb.historique';
const historique = loadHistory();

renderMessages(historique, messages);

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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(historique));
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

clearButton.addEventListener('click', () => {
  if (!confirm('Effacer toute la conversation ?')) {
    return;
  }

  historique.length = 0;
  localStorage.removeItem(STORAGE_KEY);
  renderMessages(historique, messages);
  status.textContent = 'Conversation effacée.';
  input.focus();
});

function loadHistory() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return [];
  }

  try {
    const parsed = JSON.parse(saved);
    const isValid = Array.isArray(parsed) && parsed.every((item) =>
      (item.role === 'user' || item.role === 'assistant') &&
      typeof item.text === 'string' &&
      Object.keys(item).length === 2
    );

    if (!isValid) {
      throw new Error('Format invalide');
    }

    return parsed;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    status.textContent = 'Historique illisible : la conversation repart vide.';
    return [];
  }
}
