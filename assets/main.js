// Calculator -->>

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const currentOperand = document.querySelector(".current-operand");

let currentInput = "";

const updateDisplay = () => {
  currentOperand.textContent = currentInput;
};

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      currentInput &&
      "+-x/".includes(currentInput[currentInput.length - 1])
    ) {
      currentInput = currentInput.slice(0, -1);
    }
    const operator = button.textContent === "x" ? "*" : button.textContent;
    currentInput += operator;
    updateDisplay();
  });
});

equalsButton.addEventListener("click", evaluateExpression);

function evaluateExpression() {
  try {
    const result = eval(currentInput);
    currentOperand.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    currentOperand.textContent = "Error";
  }
}

deleteButton.addEventListener("click", () => {
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
  currentInput = currentInput.slice(0, -1);
});

allClearButton.addEventListener("click", () => {
  currentOperand.textContent = "";
  currentInput = "";
});

// theme change -->>

const themeChange = document.querySelector(".change_style");
const themeItem = document.querySelector(".change_color");
const calculatorBG = document.querySelector(".calcualtor");
const outPut = document.querySelector(".output");
const operand = document.querySelectorAll(".operand");
const title = document.querySelectorAll(".title_color");
const bodyTheme = document.body;

let clickCount = 0;

const firstchange = themeChange.addEventListener("click", () => {
  if (clickCount === 0) {
    themeItem.style.left = "23px";
    bodyTheme.style.background = "hsl(0, 0%, 90%)";
    calculatorBG.style.background = "hsl(0, 5%, 81%)";
    outPut.style.background = "hsl(0, 0%, 93%)";
    outPut.style.color = "hsl(268, 71%, 12%)";
    title.forEach((h1) => {
      h1.style.color = "hsl(268, 71%, 12%)";
    });
    numberButtons.forEach((button) => {
      button.style.color = "hsl(268, 71%, 12%)";
      button.style.background = "hsl(30, 25%, 89%)";
    });
    operand.forEach((button) => {
      button.style.color = "hsl(268, 71%, 12%)";
      button.style.background = "hsl(30, 25%, 89%)";
    });
  } else if (clickCount === 1) {
    themeItem.style.left = "45px";
    bodyTheme.style.background = "hsl(268, 75%, 9%)";
    calculatorBG.style.background = "hsl(268, 71%, 12%)";
    outPut.style.background = "hsl(268, 71%, 12%)";
    outPut.style.color = "hsl(52, 56%, 51%)";
    title.forEach((h1) => {
      h1.style.color = "hsl(52, 56%, 51%)";
    });
    numberButtons.forEach((button) => {
      button.style.color = "hsl(52, 56%, 51%)";
      button.style.background = "hsl(268, 47%, 21%)";
    });
    operand.forEach((button) => {
      button.style.color = "hsl(52, 56%, 51%)";
      button.style.background = "hsl(268, 47%, 21%)";
    });
  } else if (clickCount === 2) {
    themeItem.style.left = "5px";
    bodyTheme.style.background = "hsl(222, 26%, 31%)";
    calculatorBG.style.background = "hsl(223, 31%, 20%)";
    outPut.style.background = "hsl(224, 35%, 12%)";
    outPut.style.color = "hsl(224, 28%, 35%)";
    title.forEach((h1) => {
      h1.style.color = "hsl(0, 0%, 100%)";
    });
    numberButtons.forEach((button) => {
      button.style.color = "hsl(224, 28%, 35%)";
      button.style.background = "hsl(30, 25%, 89%)";
    });
    operand.forEach((button) => {
      button.style.color = "hsl(224, 28%, 35%)";
      button.style.background = "hsl(30, 25%, 89%)";
    });
    clickCount = -1;
  }
  clickCount++;
});
