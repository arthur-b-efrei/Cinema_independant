const MESSAGE_LIMIT = 300;

export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être du texte.' };
  }

  const value = raw.trim();
  if (!value) {
    return { ok: false, error: 'Écrivez un message avant de l’envoyer.' };
  }
  if (value.length > MESSAGE_LIMIT) {
    return { ok: false, error: `Le message est limité à ${MESSAGE_LIMIT} caractères.` };
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
  if (normalized === 'film') {
    return 'Je peux vous présenter les films indépendants disponibles.';
  }
  if (normalized === 'horraires') {
    return 'Je peux vous indiquer les horaires des prochaines séances.';
  }

  return 'Je n’ai pas compris. Écrivez « aide » pour connaître mes possibilités.';
}
