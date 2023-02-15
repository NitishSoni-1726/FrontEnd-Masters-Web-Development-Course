const loading = document.querySelector(".loading");
const letters = document.querySelectorAll(".letters");
const puzzleNumberContent = document.querySelector(".puzzle-no");
const puzzleNumber = document.querySelector(".number");
const lost = document.querySelector(".you-loose");
const won = document.querySelector(".you-won");
const puzzleWord = document.querySelector(".correct-word");
const wonButton = document.querySelector("#won-play-again");
const lostButton = document.querySelector("#lost-play-button");
const game = document.querySelector(".game");
const validWordContent = document.querySelector(".valid-word");
const WORD_LENGTH = 5;

wonButton.addEventListener("click", refresh);
lostButton.addEventListener("click", refresh);

function refresh() {
  lost.classList.add("display-none");
  won.classList.add("display-none");
  location.reload();
}

function repetedLetters(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const letters = array[i];
    if (obj[letters]) {
      obj[letters]++;
    } else {
      obj[letters] = 1;
    }
  }
  return obj;
}

async function init() {
  const word = await fetch(
    "https://words.dev-apis.com/word-of-the-day?random=1"
  );
  const processingResponse = await word.json();
  const fetchedWord = processingResponse.word.toUpperCase();
  const fetchedWordParts = fetchedWord.split("");
  puzzleNumber.innerText = processingResponse.puzzleNumber;
  console.log(processingResponse);
  loading.classList.add("display-none");
  puzzleNumberContent.classList.add("display-block");
  puzzleWord.innerText = processingResponse.word.toUpperCase();

  document.addEventListener("keydown", keyPress);
  function keyPress(event) {
    let action = event.key;
    if (action === "Enter") {
      submit();
    } else if (action === "Backspace") {
      clear();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    }
  }
  function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }
  let currentGuess = "";
  let currentRow = 0;
  let rounds = 6;
  function addLetter(letter) {
    if (currentGuess.length < WORD_LENGTH) {
      currentGuess += letter;
    } else {
      currentGuess =
        currentGuess.substring(0, currentGuess.length - 1) + letter;
    }
    letters[WORD_LENGTH * currentRow + currentGuess.length - 1].innerText =
      letter;
  }
  async function submit() {
    validWordContent.classList.remove("display-block");
    if (currentGuess.length !== WORD_LENGTH) {
      return;
    }
    loading.classList.remove("display-none");
    const validateWord = await fetch(
      "https://words.dev-apis.com/validate-word",
      {
        method: "POST",
        body: JSON.stringify({ word: currentGuess }),
      }
    );
    loading.classList.add("display-none");

    const validateWordObject = await validateWord.json();
    const validWord = validateWordObject.validWord;

    if (!validWord) {
      markInvalidWord();
      return;
    }

    if (currentGuess === fetchedWord) {
      game.classList.add("display-none");
      won.classList.add("display-block");
    }
    const guessPart = currentGuess.split("");
    const map = repetedLetters(fetchedWordParts);
    for (let i = 0; i < guessPart.length; i++) {
      if (guessPart[i] === fetchedWordParts[i]) {
        letters[currentRow * WORD_LENGTH + i].classList.add("correct");
        map[guessPart[i]]--;
      }
    }

    for (let i = 0; i < guessPart.length; i++) {
      if (guessPart[i] === fetchedWordParts[i]) {
      } else if (
        fetchedWordParts.includes(guessPart[i]) &&
        map[guessPart[i]] > 0
      ) {
        letters[currentRow * WORD_LENGTH + i].classList.add("letter-present");
      } else {
        letters[currentRow * WORD_LENGTH + i].classList.add(
          "letter-not-present"
        );
      }
    }
    currentRow++;
    currentGuess = "";
    if (currentRow === rounds) {
      game.classList.add("display-none");
      lost.classList.add("display-block");
    }
    function markInvalidWord() {
      validWordContent.classList.add("display-block");
    }
  }
  function clear() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[WORD_LENGTH * currentRow + currentGuess.length].innerText = "";
  }
}

init();
