// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 07 - Higher-order functions
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: Higher-order functions");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const doubleIt = multiplyBy(2);
const tripleIt = multiplyBy(3);
const quadrupleIt = multiplyBy(5);

console.log('Double 6:', doubleIt(6));
console.log('Triple 4:', tripleIt(4));
console.log('Quadruple 3:', quadrupleIt(3));

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const addOne = x => x + 1;
const timesThree = x => x * 3;
const addOneThenTriple = compose(timesThree, addOne);
console.log('addOneThenTriple(4):', addOneThenTriple(4));

function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log('curryAdd(2)(4)(6) =', curryAdd(2)(4)(6));
