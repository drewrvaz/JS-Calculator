const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } =calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === 0 ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return
  }

  if (!calculator.displayValue.includes(dot)) {
     calculator.displayValue += dot;
  }
}

