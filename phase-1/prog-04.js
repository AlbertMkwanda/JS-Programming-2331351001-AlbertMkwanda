// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 04 - Data Types and Typeof Operator 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Albert Mkwanda"); 
console.log("ID: 2331351001"); 
console.log("PROGRAM: Data Types and Typeof Operator"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Program 4: Exploring JavaScript data types 
let numberType = 42; 
let stringType = "Hello World"; 
let booleanType = true; 
let undefinedType; 
let nullType = null; 
let objectType = { name: "John" }; 
let arrayType = [1, 2, 3]; 
let functionType = function() { return "Hello"; }; 
console.log("number:", typeof numberType);      
console.log("string:", typeof stringType);      
// "number" 
// "string" 
console.log("boolean:", typeof booleanType);    // "boolean" 
console.log("undefined:", typeof undefinedType); // "undefined" 
console.log("null:", typeof nullType);          
console.log("object:", typeof objectType);      
console.log("array:", typeof arrayType);        
// "object" (JavaScript quirk!) 
console.log("function:", typeof functionType);   // "function"
