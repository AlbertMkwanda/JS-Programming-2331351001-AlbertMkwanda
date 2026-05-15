// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 09 - Immediately invoked function expressions (IIFE)
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: Immediately invoked function expressions (IIFE)");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


(function() {
    let privateVar = 'I am private';
    console.log('IIFE executed:', privateVar);
})();

(function(name, age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
})('Samuel', 29);

(() => {
    console.log('Arrow IIFE executed');
})();

const calculator = (function() {
    let result = 0;

    function validate(n) {
        return typeof n === 'number' && !isNaN(n);
    }

    return {
        add: function(n) {
            if (validate(n)) result += n;
            return this;
        },
        subtract: function(n) {
            if (validate(n)) result -= n;
            return this;
        },
        multiply: function(n) {
            if (validate(n)) result *= n;
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

console.log('Calculator Module:');
calculator.add(12).subtract(4).multiply(3);
console.log('Result:', calculator.getResult());
calculator.reset().add(7).multiply(5);
console.log('Result:', calculator.getResult());
