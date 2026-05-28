// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 42 - Array Iteration Methods
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: Array Iteration Methods");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const employees = [
    { name: 'Sarah', salary: 75000, department: 'IT' },
    { name: 'Mike', salary: 85000, department: 'HR' },
    { name: 'Lisa', salary: 80000, department: 'IT' },
    { name: 'John', salary: 90000, department: 'Finance' },
    { name: 'Emma', salary: 82000, department: 'IT' }
];

console.log(" --- forEach (side effects only) ---");
console.log("Tripling each number:");
nums.forEach((num, index) => {
    console.log(`Index ${index}: ${num} × 3 = ${num * 3}`);
});

console.log(" \n--- map (transformation) ---");
const tripled = nums.map(num => num * 3);
console.log("Original:", nums);
console.log("Tripled:", tripled);

const employeeNames = employees.map(emp => emp.name);
console.log("Employee names:", employeeNames);

const employeeSummaries = employees.map(e => ({
    name: e.name,
    highEarner: e.salary >= 80000,
    salary: e.salary
}));
console.log("Employee summaries:", employeeSummaries);

console.log(" \n--- filter (selection) ---");
const oddNumbers = nums.filter(num => num % 2 !== 0);
console.log("Wait, these should be even! Let's filter correctly...");
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

const itEmployees = employees.filter(e => e.department === 'IT');
console.log("IT Employees:", itEmployees);

const highPaid = employees.filter(e => e.salary >= 82000);
console.log("High earners (>= $82k):", highPaid);

console.log(" \n--- Chaining Methods ---");
const avgITSalary = employees
    .filter(e => e.department === 'IT')
    .map(e => e.salary)
    .reduce((sum, salary, _, arr) => sum + salary / arr.length, 0);
console.log("Average IT salary:", avgITSalary.toFixed(2));

console.log(" \n--- Performance Comparison ---");
const largeArr = Array.from({ length: 1000 }, (_, i) => i + 1);

console.time('forEach');
largeArr.forEach(num => { const x = num * 2; });
console.timeEnd('forEach');

console.time('for loop');
for (let i = 0; i < largeArr.length; i++) {
    const x = largeArr[i] * 2;
}
console.timeEnd('for loop');
