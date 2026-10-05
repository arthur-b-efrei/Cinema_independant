export function renderMessages(messages, container) {
  const lines = messages.map(({ role, text }) => {
    const line = document.createElement('li');
    const prefix = role === 'user' ? 'Vous' : 'Cap Web';
    line.textContent = `${prefix} : ${text}`;
    return line;
  });

  container.replaceChildren(...lines);
}
