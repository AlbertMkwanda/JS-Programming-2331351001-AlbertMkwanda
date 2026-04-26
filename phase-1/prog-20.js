// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 20 - Basic Function Declarations and Invocation 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Albert Mkwanda"); 
console.log("ID: 2331351001"); 
console.log("PROGRAM: Basic Function Declarations and Invocation"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Function 1: Without parameters
function greet() {
    console.log("Hello, welcome to JavaScript Functions!");
}

// Function 2: With parameters
function greetPerson(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript!`);
}

// Function 3: With return value
function add(a, b) {
    return a + b;
}

// Function 4: With multiple return logic
function getGrade(score) {
    if (score >= 95) return "A+";
    if (score >= 85) return "A";
    if (score >= 75) return "B";
    if (score >= 65) return "C";
    return "F";
}

// Function 5: With multiple parameters and calculations
function calculateAreaOfRectangle(length, width) {
    return length * width;
}

// Function 6: Processing an array
function sumArray(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

// Function 7: String manipulation
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function 8: Boolean check
function isEven(num) {
    return num % 2 === 0;
}

// Calling the functions
console.log("=== Function Calls ===\n");

// Call Function 1
greet();

// Call Function 2
greetPerson("Alice");
greetPerson("Bob");

// Call Function 3
let result = add(20, 30);
console.log("20 + 30 =", result);

// Call Function 4
console.log("\nGrade Calculator:");
console.log("Score 98 gets grade:", getGrade(98));
console.log("Score 82 gets grade:", getGrade(82));
console.log("Score 70 gets grade:", getGrade(70));

// Call Function 5
console.log("\nArea Calculator:");
console.log("Rectangle (5 x 8) area:", calculateAreaOfRectangle(5, 8));
console.log("Rectangle (12 x 3) area:", calculateAreaOfRectangle(12, 3));

// Call Function 6
console.log("\nArray Operations:");
let arr = [10, 20, 30, 40, 50];
console.log("Array:", arr);
console.log("Sum:", sumArray(arr));

// Call Function 7
console.log("\nString Reversal:");
let text = "JavaScript";
console.log("Original:", text);
console.log("Reversed:", reverseString(text));

// Call Function 8
console.log("\nEven Number Check:");
console.log("Is 7 even?", isEven(7));
console.log("Is 8 even?", isEven(8));
console.log("Is 15 even?", isEven(15));

// Demonstrating function scope
console.log("\n=== Function Scope Demo ===");
let globalVar = "I am global";

function showScope() {
    let localVar = "I am local";
    console.log("In function - Global:", globalVar);
    console.log("In function - Local:", localVar);
}

showScope();
console.log("Outside function - Global:", globalVar);

// Function calling another function
function multiply(a, b) {
    return a * b;
}

function multiplyAndAdd(a, b, c) {
    let product = multiply(a, b);
    return product + c;
}

console.log("\n=== Nested Function Calls ===");
console.log("(5 * 6) + 10 =", multiplyAndAdd(5, 6, 10));
console.log("(3 * 7) + 2 =", multiplyAndAdd(3, 7, 2));
