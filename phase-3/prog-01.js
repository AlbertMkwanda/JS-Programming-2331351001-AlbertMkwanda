// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 41 - Array Creation and Basic Methods
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: Array Creation and Basic Methods");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

// Array creation methods
const arr1 = [5, 10, 15, 20, 25];                    // Array literal
const arr2 = new Array(5, 10, 15, 20, 25);           // Array constructor
const arr3 = Array.from('JavaScript');               // From iterable
const arr4 = Array.of(5, 10, 15, 20, 25);            // Array.of()

console.log(" --- Array Creation ---");
console.log("Array literal:", arr1);
console.log("Array constructor:", arr2);
console.log("Array.from('JavaScript'):", arr3);
console.log("Array.of():", arr4);

// Length property and sparse arrays
console.log(" \n--- Array Length ---");
const arr5 = [5, 10, 15];
console.log("Length:", arr5.length);
arr5.length = 6;
console.log("After extending length:", arr5);
arr5.length = 3;
console.log("After truncating length:", arr5);

// Basic array methods
console.log(" \n--- Basic Methods ---");
const animals = ['tiger', 'elephant', 'lion'];

console.log("Original:", animals);
console.log("indexOf('elephant'):", animals.indexOf('elephant'));
console.log("indexOf('bear'):", animals.indexOf('bear'));
console.log("includes('lion'):", animals.includes('lion'));
console.log("includes('bear'):", animals.includes('bear'));

// Join method
console.log(" \n--- Join ---");
console.log("animals.join():", animals.join());
console.log("animals.join(' - '):", animals.join(' - '));
console.log("animals.join(''):", animals.join(''));

// Concat method
console.log(" \n--- Concat ---");
const moreAnimals = ['zebra', 'giraffe'];
const allAnimals = animals.concat(moreAnimals);
console.log("Concatenated:", allAnimals);
console.log("Multiple concat:", animals.concat(moreAnimals, ['panda', 'bear']));

// Slice method
console.log("\n--- Slice ---");
const nums = [11, 22, 33, 44, 55];
console.log("Original:", nums);
console.log("slice(1, 4):", nums.slice(1, 4));
console.log("slice(2):", nums.slice(2));
console.log("slice(-2):", nums.slice(-2));
console.log("slice():", nums.slice());

// Check if array
console.log(" \n--- Array Checking ---");
console.log("Array.isArray([]):", Array.isArray([]));
console.log("Array.isArray({}):", Array.isArray({}));
console.log("Array.isArray('hello'):", Array.isArray('hello'));
