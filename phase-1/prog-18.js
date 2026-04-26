// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 18 - Handling Errors Gracefully 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Albert Mkwanda"); 
console.log("ID: 2331351001"); 
console.log("PROGRAM: Handling Errors Gracefully"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Example 1: Basic try-catch
console.log("Example 1: Basic try-catch");
try {
    console.log("Executing code inside try block...");
    let result = 15 / 3;
    console.log("Result:", result);
    
    let obj = undefined;
    console.log(obj.property);
} catch (error) {
    console.log("An error occurred:", error.message);
    console.log("Error name:", error.name);
} finally {
    console.log("This always executes.\n");
}

// Example 2: try-catch with specific error handling
console.log("Example 2: Specific error handling");
try {
    let numbers = [1, 2, 3];
    console.log("Array length:", numbers.length);
    
    let value = numbers.nonExistentMethod();
    console.log("Value:", value);
} catch (error) {
    console.log("Error caught:", error.message);
    console.log("Error type:", typeof error);
} finally {
    console.log("Cleanup code executed.\n");
}

// Example 3: Nested try-catch
console.log("Example 3: Nested try-catch");
try {
    try {
        throw new Error("Inner error");
    } catch (innerError) {
        console.log("Inner catch:", innerError.message);
        throw new Error("Outer error");
    }
} catch (outerError) {
    console.log("Outer catch:", outerError.message);
} finally {
    console.log("Finally block executed.\n");
}

// Example 4: Error handling with JSON parsing
console.log("Example 4: JSON parsing with error handling");
try {
    let jsonString = '{"name": "Alice", "age": 28}';
    let obj = JSON.parse(jsonString);
    console.log("Parsed object:", obj);
    
    let invalidJSON = '{name: Alice}';
    let invalidObj = JSON.parse(invalidJSON);
} catch (error) {
    console.log("JSON Parse Error:", error.message);
} finally {
    console.log("JSON parsing completed.\n");
}

// Example 5: Throwing custom errors
console.log("Example 5: Throwing custom errors");
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.log("Math Error:", error.message);
        return null;
    }
}

console.log("20 / 5 =", divide(20, 5));
console.log("20 / 0 =", divide(20, 0));
