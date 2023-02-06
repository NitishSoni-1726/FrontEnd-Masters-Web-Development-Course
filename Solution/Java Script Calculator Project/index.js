const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("#button");
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function (event) {
    click(event.target.innerText);
    screenrender();
  });
}
let buffer = "0";
let total = 0;
let lastOperator;
function click(value) {
  switch (value) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      if (buffer === "0") {
        buffer = value;
      } else {
        buffer += value;
      }
      break;
    case "C":
      buffer = "0";
      break;
    case "⌫":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;

    case "=":
      if (total === 0) {
        return;
      }
      mathOperator(parseInt(buffer));
      lastOperator = null;
      buffer = "" + total;
      total = 0;
      break;
    case "-":
    case "+":
    case "/":
    case "*":
      handleMath(value);
      break;
  }
}
function handleMath(value) {
  if (buffer === "0") {
    return;
  }
  const inputValue = parseInt(buffer);
  if (total === 0) {
    total = inputValue;
  } else {
    mathOperator(inputValue);
  }
  lastOperator = value;
  buffer = "0";
  console.log(total);
}

function mathOperator(inputValue) {
  if (lastOperator === "+") {
    total += inputValue;
  } else if (lastOperator === "-") {
    total -= inputValue;
  } else if (lastOperator === "*") {
    total *= inputValue;
  } else if (lastOperator === "/") {
    total /= inputValue;
  }
}

function screenrender() {
  screen.value = buffer;
}
