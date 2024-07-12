const inputText = document.getElementById('input-text');
const splitButton = document.getElementById('split-button');
const flashcardContainer = document.getElementById('flashcard-container');
const flipAllButton = document.getElementById('flip-all');
const showAllButton = document.getElementById('show-All');

const directionSelect = document.getElementById('direction-select');

directionSelect.addEventListener('change', function() {
  const direction = this.value;
  flashcardContainer.style.flexDirection = direction;
});

splitButton.addEventListener('click', function() {
  const text = inputText.value.trim();
  if (!text) return;

  const words = text.split(/\s+/);
  flashcardContainer.innerHTML = '';

  words.forEach(word => {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    flashcard.innerHTML = `
      <div class="front">${word}</div>
      <div class="back"></div>
    `;
    flashcard.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
    flashcardContainer.appendChild(flashcard);
  });
});

flipAllButton.addEventListener('click', function() {
  const flashcards = document.querySelectorAll('.flashcard');
  flashcards.forEach(card => card.classList.toggle('flipped'));
});

showAllButton.addEventListener('click', function() {
  const flashcards = document.querySelectorAll('.flashcard');
  flashcards.forEach(card => card.classList.remove('flipped'));
});
