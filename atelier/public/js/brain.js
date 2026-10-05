export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être du texte.' };
  }

  const value = raw.trim();
  if (!value) {
    return { ok: false, error: 'Écrivez un message avant de l’envoyer.' };
  }

  return { ok: true, value };
}

export function replyTo(message) {
  const normalized = message.trim().toLowerCase();

  if (normalized === 'salut' || normalized === 'bonjour') {
    return 'Bonjour ! Comment puis-je vous aider ?';
  }
  if (normalized === 'aide') {
    return 'Je peux vous renseigner sur les films, les horaires et les résumés.';
  }
  if (normalized === 'test') {
    return 'Le test fonctionne.';
  }

  return 'Je n’ai pas compris. Écrivez « aide » pour connaître mes possibilités.';
}
