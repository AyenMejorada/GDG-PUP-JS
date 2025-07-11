// selecting element ids
const counterText = document.querySelector("#counter-text");
const addButton = document.querySelector("#button-add");
const subtractButton = document.querySelector("#button-subtract");
let counter = 0;

function updateCounterDisplay() {
  counterText.textContent = counter;

  if (counter === 0) {
    subtractButton.disabled = true;
    subtractButton.style.opacity = 0.5; // for visual that it is not allowed, or not a priority to click
    subtractButton.style.cursor = "not-allowed"; // for visual that it is not allowed
  } else {
    subtractButton.disabled = false;
    subtractButton.style.opacity = 1;
    subtractButton.style.cursor = "pointer";
  }
}

// add button listener
addButton.addEventListener("click", function () {
  counter++;
  updateCounterDisplay();
});

// subtract button listener
subtractButton.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    updateCounterDisplay();
  }
});

updateCounterDisplay();
