// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 46 - Array Sorting and Reversing
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: Array Sorting and Reversing");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================

console.log(" --- Default sort (lexicographic) ---");
let fruits = ['banana', 'Apple', 'cherry', 'date'];
console.log("Original:", fruits);
console.log("Default sort:", fruits.sort());
console.log("Original modified!", fruits);

console.log(" \n--- Numeric sort (with compare function) ---");
let numbers = [15, 8, 50, 32, 120, 3, 7];
console.log("Original:", numbers);

// Ascending
let ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", ascending);

// Descending
let descending = [...numbers].sort((a, b) => b - a);
console.log("Descending:", descending);

console.log(" \n--- Sorting objects ---");
const products = [
    { name: 'Laptop', price: 1200, stock: 15 },
    { name: 'Mouse', price: 45, stock: 120 },
    { name: 'Monitor', price: 350, stock: 8 },
    { name: 'Keyboard', price: 120, stock: 45 },
    { name: 'Headset', price: 150, stock: 30 }
];

// Sort by price (ascending)
const byPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted by price:", byPrice.map(p => `${p.name}:$${p.price}`));

// Sort by name (alphabetical)
const byName = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", byName.map(p => p.name));

// Sort by stock descending, then by price descending
const byStockThenPrice = [...products].sort((a, b) => {
    if (a.stock !== b.stock) return b.stock - a.stock;
    return b.price - a.price;
});
console.log("Sorted by stock desc, then price desc:",
    byStockThenPrice.map(p => `${p.name} (${p.stock}, $${p.price})`));

console.log(" \n--- reverse() ---");
let arr = [10, 20, 30, 40, 50];
console.log("Original:", arr);
arr.reverse();
console.log("After reverse():", arr);

console.log(" \n--- Complex sorting example ---");
const tasks = [
    { name: 'Task A', priority: 'high', done: false },
    { name: 'Task B', priority: 'low', done: true },
    { name: 'Task C', priority: 'medium', done: false },
    { name: 'Task D', priority: 'high', done: true },
    { name: 'Task E', priority: 'low', done: false }
];

const priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 };

const sortedTasks = [...tasks].sort((a, b) => {
    // Incomplete tasks first
    if (a.done !== b.done) return a.done ? 1 : -1;
    // Then by priority
    return priorityOrder[a.priority] - priorityOrder[b.priority];
});

console.log("Sorted tasks (incomplete first, then priority):");
sortedTasks.forEach(t => {
    console.log(`  ${t.done ? '✓' : '○'} ${t.name} (${t.priority})`);
});

console.log(" \n--- Stable sorting ---");
const items = [
    { category: 'X', value: 1 },
    { category: 'Y', value: 2 },
    { category: 'X', value: 3 },
    { category: 'Y', value: 4 }
];

const sorted = items.sort((a, b) => a.category.localeCompare(b.category));
console.log("Stable sort by category:", sorted);
