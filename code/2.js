/*
Evalute the value of an arithmetic expression in reverse Polish notation.
Valid operator are + , - , * , /.
Ecah operand may be an integer or another.
Some Examples : 
["2","1","+","3","*"] -> ((2+1) * 3) => 9
 */

// ? solution

function evaluteExpression(expression) {
  let i = 0;
  let result;
  let count = 0;
  for (i = 0; i < expression.length; i++) {
    if (
      expression[i] === "+" ||
      expression[i] === "-" ||
      expression[i] === "*" ||
      expression[i] === "/"
    ) {
      if (count > 1) {
        if (expression[i] === "+") {
          result = parseInt(expression[i - 2]) + parseInt(expression[i - 1]);
        } else if (expression[i] === "-") {
          result = parseInt(expression[i - 2]) - parseInt(expression[i - 1]);
        }
        if (expression[i] === "*") {
          result = parseInt(expression[i - 2]) * parseInt(expression[i - 1]);
        }
        if (expression[i] === "/") {
          result = parseInt(expression[i - 2]) / parseInt(expression[i - 1]);
        }
      } else if (count === 0) {
        if (expression[i] === "+") {
          result = parseInt(expression[i - 2]) + result;
        } else if (expression[i] === "-") {
          result = parseInt(expression[i - 2]) - result;
        }
        if (expression[i] === "*") {
          result = parseInt(expression[i - 2]) * result;
        }
        if (expression[i] === "/") {
          result = parseInt(expression[i - 2]) / result;
        }
      } else if (count === 1) {
        if (expression[i] === "+") {
          result = result + parseInt(expression[i - 1]);
        } else if (expression[i] === "-") {
          result = result - parseInt(expression[i - 1]);
        }
        if (expression[i] === "*") {
          result = result * parseInt(expression[i - 1]);
        }
        if (expression[i] === "/") {
          result = result / parseInt(expression[i - 1]);
        }
      }
      count = 0;
    } else {
      count += 1;
    }
  }
  console.log(result);
}

function optimalSotution(expression) {
  let returnValue = 0;
  let stackArray = [];
  let stringOperand = "+-*/";
  for (let i = 0; i < expression.length; i++) {
    if (stringOperand.indexOf(expression[i]) === -1) {
      stackArray.push(expression[i]);
    } else {
      let a = parseInt(stackArray.pop());
      let b = parseInt(stackArray.pop());
      if (expression[i] === "+") {
        stackArray.push(a + b);
      } else if (expression[i] === "-") {
        stackArray.push(b - a);
      } else if (expression[i] === "*") {
        stackArray.push(a * b);
      } else if (expression[i] === "/") {
        stackArray.push(b / a);
      }
    }
  }
  console.log(stackArray[0]);
}

console.log("Own solution:");
evaluteExpression(["2", "1", "+", "3", "*"]);
evaluteExpression(["4", "13", "5", "/", "+", "7 ", "7", "+", "+"]);

console.log("Optimal solution:");
optimalSotution(["2", "1", "+", "3", "*"]);
optimalSotution(["4", "13", "5", "/", "+", "7 ", "7", "+", "+"]);
