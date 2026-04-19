// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 07 - Comparison Operators 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Albert Mkwanda"); 
console.log("ID: 2331351001"); 
console.log("PROGRAM: Comparison Operators"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Program 7: Understanding comparison operators 
let x = 5; 
let y = "5"; 
let z = 10; 
console.log("Equal (==):", x == y);          
// true (loose equality) 
console.log("Strict Equal (===):", x === y); // false (strict equality) 
console.log("Not Equal (!=):", x != y);      
// false 
console.log("Strict Not Equal (!==):", x !== y); // true 
console.log("Greater than:", z > x);         
console.log("Less than:", x < z);            
// true 
// true 
console.log("Greater or equal:", x >= 5);    // true 
console.log("Less or equal:", z <= 10);      // true 
