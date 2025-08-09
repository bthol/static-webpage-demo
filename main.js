// demo script

// this is a comment in JavaScript

console.log("Logged!"); // this is a console log statement logging the "Logged!" string
console.log(); // this is a console log statement logging nothing

// const variable declaration
const a = 1;
console.log(a); // you can log variables

// let variable declaration
let b = 0;
console.log(b);

// variable declared with let keyword are reassignable
// assign without declarative keyword to update data in let variables
b = 1;
console.log(b);

// data types

// numeral
const numeralType = 437;

// string with "
const stringType1 = "this is string data";

// string with '
const stringType2 = 'this is string data';

// string with ` named backticks
const stringType3 = `this is string data`;

// addition operator +
const sum = 1 + 1;
console.log(sum);

// subtraction operator -
const difference = 1 - 1;
console.log(difference);

// multiplication operator -
const product = 10 * 2;
console.log(product);

// division operator -
const quotient = 10 / 2;
console.log(difference);

// control flow is the order in which the program is interpreted or read
// this runs first
// this runs second
// this runs third

// functions change the control flow to run the code in their declaration on function call
function logToConsole() {
    console.log("the function ran");
};

// the function only runs when it is called
logToConsole(); // function call to logToConsole function

// the function runs as many times as it is called
logToConsole(); // runs the same function as the first call

function myFunction() {
    // return statements end the function code and send their data to where the function was called
    return 0;
};

// assign return of myFunction function into functionValue variable
const functionValue = myFunction();

// logging the functionValue variable
console.log(functionValue);

// nothing can run after return statement
function returnExample() {
    return 'thank you, thank you very much';
    console.log("this won't log");
};

// functions declared with parameters can be passed arguments when called
function argExample(a, b) {
    return a + b;
};

// arguments are passed into parameters during the function call
const argExampleData = argExample();
