var firstNumber = prompt("Type in the first number that you want to add,subtract,divide,multiply,power(square or to the power of) or square root.");
var operationForNumber = prompt("Type in the symbol that matches the operation that you want to use(2 for square, ! for square root, /,for division and a * for multiplication).");
var secondNumber = prompt("Type in the second number that you want to add,subtract,divide,multiply,square or square root.");

switch (operationForNumber) {
    case +:
        firstNumber + secondNumber
        break;
    case -:
        firstNumber - secondNumber
        break;
    case /:
    firstNumber / secondNumber
    case *:
        firstNumber * secondNumber
        break;
    case 2:
        Math.pow(firstNumber, secondNumber);
        break;
    case !:
        sqrt(firstNumber)
    default:
        console.log("The number you have typed is too great to be calculated or the operation that you chose(+,/,-,X) isn't valid!");
}
