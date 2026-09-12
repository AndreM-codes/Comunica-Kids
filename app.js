const words = [
    ['Feliz', '😊'], 
    ['Triste', '😢'], 
    ['Bravo', '😠'], 
    ['Medo', '😨'], 
    ['Cansado', '🥱'], 
    ['Animado', '🤩'], 
    ['Brincar', '🧸'], 
    ['Comer', '🍎'], 
    ['Beber', '🥤'], 
    ['Abraço', '🤗'], 
    ['Música', '🎵'], 
    ['Pausa', '⏸️'], 
    ['Mamãe', '👩'], 
    ['Papai', '👨'], 
    ['Professora', '👩‍🏫'], 
    ['Amigo', '🧒'], 
    ['Casa', '🏠'], 
    ['Escola', '🏫'],
    ['Parque', '🛝'], 
    ['Banheiro', '🚻'], 
    ['Ler', '📚'], 
    ['Jogar', '⚽'], 
    ['Descansar', '🛋️'], 
    ['Pintar', '🖍️']
];

const buttons = document.querySelector('.buttons');

buttons.innerHTML = words
  .map(
    ([word, emoji]) => `
      <button
        type="button"
        role="listitem"
        data-word="${word}"
        aria-label="Falar ${word}"
      >
        <span>${emoji}</span>
        ${word}
      </button>
    `
  )
  .join('');

buttons.addEventListener('click', (event) => {
  const button = event.target.closest('[data-word]');

  if (!button || !('speechSynthesis' in window)) {
    return;
  }

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(button.dataset.word);
  speech.lang = 'pt-BR';
  speech.rate = 0.8;

  speechSynthesis.speak(speech);
});