// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 03 - ES6 Arrow functions
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: ES6 Arrow functions");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const traditionalAdd = function(a, b) {
    return a + b;
};

const arrowAdd = (a, b) => {
    return a + b;
};

const implicitAdd = (a, b) => a + b;
const square = x => x * x;
const getRandom = () => Math.floor(Math.random() * 200) + 1;
const createPerson = (name, age) => ({ name, age });

console.log('Traditional:', traditionalAdd(7, 5));
console.log('Arrow with braces:', arrowAdd(7, 5));
console.log('Arrow implicit:', implicitAdd(12, 8));
console.log('Square of 9:', square(9));
console.log('Random number:', getRandom());
console.log('Created person:', createPerson('Nia', 27));
