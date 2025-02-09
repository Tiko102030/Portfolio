// Get the project cards and arrow buttons
const cards = document.querySelectorAll('.project-card');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

// Initially set the first card as active
let currentIndex = 0;
cards[currentIndex].classList.add('active');

// Function to change the active card to the left
function showPrevCard() {
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Wrap around if at the beginning
    cards[currentIndex].classList.add('active');
}

// Function to change the active card to the right
function showNextCard() {
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % cards.length; // Wrap around if at the end
    cards[currentIndex].classList.add('active');
}

// Add event listeners for arrow clicks
leftArrow.addEventListener('click', showPrevCard);
rightArrow.addEventListener('click', showNextCard);
