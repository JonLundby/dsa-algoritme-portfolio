import shuntingYard from "./shuntingYard.js";

function RpnCalculator(expression) {
    const resultStack = [];
    const inputQueue = expression.split(" ").map((part) => (isNaN(part) ? part : Number(part)));

    while (inputQueue.length > 0) {
        const part = inputQueue.shift();
        if (isNaN(part)) {
            const operand2 = resultStack.pop();
            const operand1 = resultStack.pop();
            resultStack.push(operation(part, operand1, operand2));
        } else {
            resultStack.push(part);
        }
    }

    return (resultStack[0].toFixed(8) / 1000) * 1000;

    function operation(part, operand1, operand2) {
        switch (part) {
            case "+":
                return operand1 + operand2;
            case "-":
                return operand1 - operand2;
            case "*":
                return operand1 * operand2;
            case "/":
                return operand1 / operand2;
            case "^":
                return operand1 ** operand2;
            default:
                break;
        }
    }
}

// FOR TESTING RPNCalc with shunting yard algorithm
// const infixExpression = "2 + 3 * 4"  // Expected: 14
// const infixExpression = "85 - 31"  // Expected: 54
// const infixExpression = "3 + 4 * ( 5 - 2 )"  // Expected: 15
// const infixExpression = "( 5 + 9 ) / 4"  // Expected: 3.5 (der må gerne sættes parentes når det er brøker!)
// const infixExpression = "( 12 + 3 ) * ( 7 + 9 )"  // Expected: 240
// const infixExpression = "23 ^ 2 - ( 13 * 9 ) + 5 / 7"; // Expected: 412.74142
const infixExpression = "3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3"  // Expected: 3.00012207
// ---- ekstra ---- \\
// const infixExpression = "( 1 + 2 ) * 3" // Expected: 9
// const infixExpression = "1 + 2 ( - 3 ) ( - 2 ) + 1"  // Expected: -1 (virker kun når negative tal er i parentes)
const postfixExpression = shuntingYard(infixExpression);
const res1 = RpnCalculator(postfixExpression);
console.log(`infix: ${infixExpression}\npostfix: ${postfixExpression}`);
console.log(`Result(Expected): ${res1} (x)`);

// FOR TESTING RPNCalc directly
// const res1 = RpnCalculator("2 3 +"); // expected: 5
// console.log(`Result(Expected): ${res1} (5)`);

// const res2 = RpnCalculator("5 5 2 - +"); // expected: 8
// console.log(`Result(Expected): ${res2} (8)`);

// const res3 = RpnCalculator("2 3 4 * +"); // expected: 14
// console.log(`Result(Expected): ${res3} (14)`);

// const res4 = RpnCalculator("85 31 -"); // expected: 54
// console.log(`Result(Expected): ${res4} (54)`);

// const res5 = RpnCalculator("3 4 5 2 - * +"); // expected: 54
// console.log(`Result(Expected): ${res5} (15)`);

// const res6 = RpnCalculator("5 9 + 4 / "); // expected: 3.5
// console.log(`Result(Expected): ${res6} (3.5)`);

// const res7 = RpnCalculator("12 3 + 7 9 + *"); // expected: 240
// console.log(`Result(Expected): ${res7} (240)`);

// const res8 = RpnCalculator("23 2 ^ 13 9 * - 5 7 / +"); // expected: 412.7142
// console.log(`Result(Expected): ${res8} (412.714285)`);

// const res9 = RpnCalculator("3 4 2 1 5 - 2 3 ^ ^ / * +"); // expected: 3.00012207
// console.log(`Result(Expected): ${res9} (3.00012207)`);

// const res10 = RpnCalculator("45 √ 12 *"); // expected: 80.4984
// console.log(`Result(Expected): ${res10} (80.4984)`);
