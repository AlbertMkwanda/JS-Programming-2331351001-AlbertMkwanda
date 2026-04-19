// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 09 - Type Coercion and Conversion 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Albert Mkwanda"); 
console.log("ID: 2331351001"); 
console.log("PROGRAM: Type Coercion and Conversion"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Program 9: Understanding automatic and manual type conversion 
// Implicit Coercion (Automatic) 
console.log("5" + 3);        
console.log("5" - 3);        
console.log("5" * "2");      
// "53" (string concatenation) 
// 2 (numeric subtraction) 
// 10 (numeric multiplication) 
console.log(true + true);    // 2 (true is 1, false is 0) 
// Explicit Conversion (Manual) 
let strNumber = "123.45"; 
let intNumber = parseInt(strNumber); 
let floatNumber = parseFloat(strNumber); 
let numberConverted = Number(strNumber); 
console.log("parseInt:", intNumber);           
console.log("parseFloat:", floatNumber);       
// 123 
// 123.45 
console.log("Number():", numberConverted);     
// Converting to String 
let num = 456; 
console.log("toString():", num.toString());    // "456" 
console.log("String():", String(num));         
// Converting to Boolean 
console.log("Boolean(1):", Boolean(1));        
console.log("Boolean(0):", Boolean(0));        
console.log("Boolean(''):", Boolean(""));      
// false 
console.log("Boolean('hello'):", Boolean("hello")); // true
