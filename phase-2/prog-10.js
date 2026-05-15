// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 30 - Controlling 'this' with call, apply, and bind
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: Controlling 'this' with call, apply, and bind");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const person1 = {
    firstName: 'Amira',
    lastName: 'Kato',
    getFullName: function(greeting, punctuation) {
        return `${greeting} ${this.firstName} ${this.lastName}${punctuation}`;
    }
};

const person2 = {
    firstName: 'Kojo',
    lastName: 'Mensah'
};

console.log('Using call():');
console.log(person1.getFullName.call(person2, 'Hello', '!'));
console.log('\nUsing apply():');
console.log(person1.getFullName.apply(person2, ['Hi', '!!']));
console.log('\nUsing bind():');
const getPerson2Name = person1.getFullName.bind(person2);
console.log(getPerson2Name('Hey', '...'));
const getPerson2NameWithHello = person1.getFullName.bind(person2, 'Hello');
console.log(getPerson2NameWithHello('!'));

const numbers = [4, 5, 6];
const moreNumbers = [7, 8, 9];
Array.prototype.push.apply(numbers, moreNumbers);
console.log('\nBorrowing push method:', numbers);
const arr1 = [11, 12, 13];
const arr2 = [14, 15, 16];
arr1.push(...arr2);
console.log('Using spread operator:', arr1);
