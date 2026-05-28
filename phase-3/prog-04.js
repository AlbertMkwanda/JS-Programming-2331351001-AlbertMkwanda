// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 44 - Array Search Methods
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: Array Search Methods");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

const customers = [
    { id: 1, name: 'Alice', age: 28, active: true },
    { id: 2, name: 'Bob', age: 35, active: false },
    { id: 3, name: 'Charlie', age: 42, active: true },
    { id: 4, name: 'Diana', age: 31, active: true },
    { id: 5, name: 'Eve', age: 26, active: false }
];

const values = [15, 32, 45, 58, 70, 82, 95];

console.log(" --- find() - returns first matching element ---");
const customerOver40 = customers.find(cust => cust.age > 40);
console.log("First customer over 40:", customerOver40);

const inactiveCustomer = customers.find(c => !c.active);
console.log("First inactive customer:", inactiveCustomer);

const notFound = customers.find(c => c.age > 100);
console.log("Not found result:", notFound);

console.log(" \n--- findIndex() - returns index of first match ---");
const indexOver40 = customers.findIndex(cust => cust.age > 40);
console.log("Index of first customer over 40:", indexOver40);

const indexNotFound = customers.findIndex(c => c.age > 100);
console.log("Index when not found:", indexNotFound);

console.log(" \n--- some() - checks if ANY element matches ---");
const hasInactiveCustomers = customers.some(cust => !cust.active);
console.log("Has inactive customers:", hasInactiveCustomers);

const hasSenior = customers.some(cust => cust.age >= 65);
console.log("Has senior citizen:", hasSenior);

const hasLargeValue = values.some(val => val > 100);
console.log("Has value > 100:", hasLargeValue);

console.log(" \n--- every() - checks if ALL elements match ---");
const allActive = customers.every(cust => cust.active);
console.log("All customers active:", allActive);

const allAdults = customers.every(cust => cust.age >= 18);
console.log("All customers are adults:", allAdults);

const allPositive = values.every(val => val > 0);
console.log("All values positive:", allPositive);

console.log(" \n--- includes() - simple value check ---");
const colors = ['red', 'green', 'blue', 'purple'];
console.log("Includes 'green':", colors.includes('green'));
console.log("Includes 'yellow':", colors.includes('yellow'));
console.log("Includes 'green' from index 2:", colors.includes('green', 2));

console.log(" \n--- Combining search methods ---");
function findCustomerByProperty(customers, property, value) {
    return customers.find(cust => cust[property] === value);
}

console.log("Customer with id 3:", findCustomerByProperty(customers, 'id', 3));
console.log("Customer named 'Eve':", findCustomerByProperty(customers, 'name', 'Eve'));

console.log(" \n--- Practical example: Form validation ---");
const formFields = [
    { name: 'email', value: 'alice@example.com', required: true },
    { name: 'phone', value: '555-1234', required: true },
    { name: 'notes', value: '', required: false }
];

const allRequiredFilled = formFields
    .filter(field => field.required)
    .every(field => field.value !== '');
console.log("All required fields filled:", allRequiredFilled);

const firstEmptyRequired = formFields.find(field => field.required && !field.value);
console.log("First empty required field:", firstEmptyRequired?.name || 'none');
