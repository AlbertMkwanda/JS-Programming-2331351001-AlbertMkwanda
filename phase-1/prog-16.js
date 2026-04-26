// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 16 - Do-While Loop (Executes at Least Once) 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Albert Mkwanda"); 
console.log("ID: 2331351001"); 
console.log("PROGRAM: Do-While Loop (Executes at Least Once)"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Example 1: Menu system
let choice;
do {
    console.log("\n=== MENU ===");
    console.log("1. Greet User");
    console.log("2. Show Date");
    console.log("3. Show Time");
    console.log("4. Show Random Number");
    console.log("5. Exit");
    
    choice = parseInt(prompt("Enter your choice (1-5):"));
    
    switch(choice) {
        case 1:
            console.log("Welcome to JavaScript Learning!");
            break;
        case 2:
            console.log("Today's Date:", new Date().toLocaleDateString());
            break;
        case 3:
            console.log("Current Time:", new Date().toLocaleTimeString());
            break;
        case 4:
            console.log("Random Number:", Math.floor(Math.random() * 100));
            break;
        case 5:
            console.log("Thank you for using the program!");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
} while (choice !== 5);

// Example 2: Input validation
console.log("\n--- Password Validation ---");
let password;
do {
    password = prompt("Enter password (minimum 8 characters):");
    if (password === null) break;
    if (password.length < 8) {
        console.log("Password too short! Must be at least 8 characters.");
    } else {
        console.log("Password accepted!");
    }
} while (password.length < 8);

// Example 3: Counter with do-while
console.log("\n--- Count Up Demo ---");
let count = 0;
do {
    console.log("Count:", count);
    count++;
} while (count < 5);

