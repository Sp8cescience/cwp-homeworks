// Array for storing user-entered words
let words = [];

// Get DOM elements
const inputForm = document.getElementById('inputForm');
const wordList = document.getElementById('wordList');
const transformedList = document.getElementById('transformedList');
const submitButton = document.getElementById('submitButton');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

// Display words on page 1
function displayWords() {
  wordList.innerHTML = '';
  words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    wordList.appendChild(li);
  });
}

// Transform words and display on page 2
function transformWords() {
  const transformedWords = words.map(word => {
    return word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0);
  });

  transformedList.innerHTML = '';
  transformedWords.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    transformedList.appendChild(li);
  });
}

// Event listener for form submission
submitButton.addEventListener('click', () => {
  const word1 = document.getElementById('word1').value;
  const word2 = document.getElementById('word2').value;
  const word3 = document.getElementById('word3').value;

  words = [word1, word2, word3];
  displayWords();
  transformWords();

  // Swap pages
  page1.style.display = 'none';
  page2.style.display = 'block';
});