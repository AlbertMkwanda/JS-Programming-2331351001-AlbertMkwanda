// ================================================ 
// JAVASCRIPT PROGRAMMING LABORATORY 
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY 
// ================================================ 
// STUDENT FULL NAME: [Your Complete Legal Name] 
// STUDENT ID NUMBER: [Your Institution ID] 
// PROGRAM NUMBER: 19 - Creating and Using Custom Errors 
// EXECUTION DATE: [Will be auto-generated] 
// SESSION TOKEN: [Will be auto-generated] 
// ================================================ 
 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: Albert Mkwanda"); 
console.log("ID: 2331351001"); 
console.log("PROGRAM: Creating and Using Custom Errors"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12)); 
console.log("=".repeat(55));
console.log(""); 
// ================================================ 
// PROGRAM CODE BEGINS BELOW 
// ================================================ 

// Custom Error Class 1: ValidationError
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
        this.timestamp = new Date();
    }
    
    getDetails() {
        return `${this.name}: ${this.message} (Field: ${this.field})`;
    }
}

// Custom Error Class 2: AgeError
class AgeError extends ValidationError {
    constructor(message, age) {
        super(message, "age");
        this.name = "AgeError";
        this.age = age;
    }
    
    getDetails() {
        return `${this.name}: ${this.message} (Age: ${this.age})`;
    }
}

// Custom Error Class 3: EmailError
class EmailError extends ValidationError {
    constructor(message, email) {
        super(message, "email");
        this.name = "EmailError";
        this.email = email;
    }
    
    getDetails() {
        return `${this.name}: ${this.message} (Email: ${this.email})`;
    }
}

// Example 1: Using ValidationError
console.log("Example 1: ValidationError");
try {
    let username = "";
    if (username.length === 0) {
        throw new ValidationError("Username cannot be empty", "username");
    }
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.getDetails());
    } else {
        console.log("Unknown error:", error.message);
    }
}

// Example 2: Using AgeError
console.log("\nExample 2: AgeError");
try {
    let userAge = 15;
    if (userAge < 18) {
        throw new AgeError("User must be at least 18 years old", userAge);
    }
} catch (error) {
    if (error instanceof AgeError) {
        console.log(error.getDetails());
    }
}

// Example 3: Using EmailError
console.log("\nExample 3: EmailError");
try {
    let email = "invalid-email";
    if (!email.includes("@")) {
        throw new EmailError("Invalid email format", email);
    }
} catch (error) {
    if (error instanceof EmailError) {
        console.log(error.getDetails());
    }
}

// Example 4: Validation function with custom errors
console.log("\nExample 4: Validation Function");
function validateUser(username, age, email) {
    try {
        if (username.length < 3) {
            throw new ValidationError("Username must be at least 3 characters", "username");
        }
        if (age < 21) {
            throw new AgeError("User must be at least 21 years old", age);
        }
        if (!email.includes("@") || !email.includes(".")) {
            throw new EmailError("Email format is invalid", email);
        }
        return { success: true, message: "Validation passed!" };
    } catch (error) {
        return { success: false, error: error.getDetails() };
    }
}

// Testing validation
console.log("Test 1:", validateUser("ab", 25, "valid@email.com"));
console.log("Test 2:", validateUser("alice", 17, "alice@email.com"));
console.log("Test 3:", validateUser("bob", 28, "bobemail.com"));
console.log("Test 4:", validateUser("charlie", 30, "charlie@email.com"));

// Example 5: Error inheritance chain
console.log("\nExample 5: Error Inheritance");
let testError = new AgeError("Test age error", 16);
console.log("Is AgeError?", testError instanceof AgeError);
console.log("Is ValidationError?", testError instanceof ValidationError);
console.log("Is Error?", testError instanceof Error);
console.log("Error name:", testError.name);
