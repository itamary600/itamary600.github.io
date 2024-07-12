const textInput = document.getElementById("text-input");
const flashcardContainer = document.getElementById("flashcard-container");
const hideAllButton = document.getElementById("hide-button");
const showAllButton = document.getElementById("show-button");
const directionSelect = document.getElementById("direction");
const numCardsInput = document.getElementById('num-cards');

function createFlashcards() {
  const text = textInput.value.trim().split(" ");
  flashcardContainer.innerHTML = ""; // Clear existing flashcards

  text.forEach((word) => {
    if (word.length<2) return;
    const flashcard = document.createElement("div");
    flashcard.classList.add("flashcard");
    flashcard.textContent = word;
    flashcard.addEventListener("click", () => {
      flashcard.classList.toggle("hidden");
    });
    flashcardContainer.appendChild(flashcard);
  });

  setDirection();
}

function setDirection() {
  const direction = directionSelect.value;
  flashcardContainer.style.flexDirection = direction === "left-to-right" ? "row" : "row-reverse";
}

textInput.addEventListener("input", createFlashcards);
hideAllButton.addEventListener("click", () => {
  const num = parseInt(numCardsInput.value);    
  const flashcards = flashcardContainer.querySelectorAll(".flashcard");
  flashcards.forEach((card, index) => { if (index%num==0) card.classList.add("hidden") });
});

showAllButton.addEventListener("click", () => {
    const num = parseInt(numCardsInput.value);    
    const flashcards = flashcardContainer.querySelectorAll(".flashcard");
    flashcards.forEach((card, index) => { if (index%num==0) card.classList.remove("hidden") });
});

directionSelect.addEventListener("change", setDirection);

createFlashcards(); // Create flashcards on page load
