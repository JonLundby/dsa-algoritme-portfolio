import Queue from "./queue.js";
import Stack from "./stack.js";

export default function shuntingYard(expression) {
    const inputQueue = new Queue();
    const outputQueue = new Queue();
    const operaterStack = new Stack();
    let outputQueueStr = "";

    // regnehierarki
    const precedence = {
        "^": 5,
        "/": 4,
        "*": 3,
        "+": 1,
        "-": 1,
    };

    const associativity = {
        "^": "right", // den eneste der har right som association
        "/": "left",
        "*": "left",
        "+": "left",
        "-": "left",
    };

    // builder inputQueue fra expression
    const expressionParts = expression.split(" ");
    for (const element of expressionParts) {
        inputQueue.enqueue(element);
    }

    // så længe der er elementer i inputQueue
    while (inputQueue.size() > 0) {
        const part = inputQueue.dequeue();
        // hvis part er tal så skal de over i outputQueue
        if (!isNaN(part)) {
            outputQueue.enqueue(part);
            // hvis part er start parentes "(" skal det over i operatorStack
        } else if (part === "(") {
            operaterStack.push(part);
        } else {
            // hvis part er slut parentes ")" skal operatorStack tømmes indtil start parentesen "(" -> slut parentes ")" pushes aldrig til operatorStack...
            if (part === ")") {
                while (operaterStack.size() > 0 && operaterStack.peek() !== "(") {
                    const opPartPart = operaterStack.pop();
                    outputQueue.enqueue(opPartPart);
                }

                operaterStack.pop();
            } else {
                // så længe den operator der itereres over har en lavere precedence end operatoren i toppen af operatorStack...
                // ...eller hvis de har den samme precedence og en right assiciativity...
                // ...så skal toppen af operator Stack smides over i outputQueue...
                while (
                    precedence[operaterStack.peek()] > precedence[part] ||
                    (precedence[operaterStack.peek()] === precedence[part] && associativity[part] !== "right")
                ) {
                    const operatorPart = operaterStack.pop();
                    outputQueue.enqueue(operatorPart);
                }

                operaterStack.push(part);
            }
        }
    }

    // tømmer resten af operatorStack over i outputQueue
    while (operaterStack.size() > 0) {
        const opPart = operaterStack.pop();
        outputQueue.enqueue(opPart);
    }

    // laver outputQueue om til en string der returneres
    for (const element of outputQueue) {
        outputQueueStr += element + " ";
    }

    return outputQueueStr;
}
