const hazyCalculator = (calculationSteps) => {
  let operation

  // Find Operation
  for (const item of calculationSteps) {
    if (item === '*' || item === '+' || item === '-' || item === '/') {
      operation = item
    }
  }

  // Filter or undefineds, empty strings, or NaN's
  let filteredArr = calculationSteps.filter((item) => {
    return !isNaN(Number(item)) && item !== ''
  })

  // Set operands
  let operand1 = Number(filteredArr[0])
  let operand2 = Number(filteredArr[1])

  // Run operation
  switch (operation) {
    case '*':
      return operand1 * operand2
    case '+':
      return operand1 + operand2
    case '-':
      return operand1 - operand2
    case '/':
      return operand1 / operand2
    default:
      return NaN
  }
}

module.exports = hazyCalculator
