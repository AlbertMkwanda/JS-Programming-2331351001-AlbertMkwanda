// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Albert Mkwanda
// STUDENT ID NUMBER: 2331351001
// PROGRAM NUMBER: 31 - Creating objects with object literals
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Albert Mkwanda");
console.log("ID: 2331351001");
console.log("PROGRAM: Creating objects with object literals");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("2331351001" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


const book = {
    title: 'Pride and JavaScript',
    author: 'A. Reader',
    year: 2024,
    genre: 'Programming',
    getDescription: function() {
        return `${this.title} by ${this.author} (${this.year})`;
    },
    updateYear(newYear) {
        this.year = newYear;
        console.log(`Year updated to ${newYear}`);
    }
};

console.log('Book object:', book);
console.log('Description:', book.getDescription());
console.log('\nDot notation:', book.title);
console.log('Bracket notation:', book['author']);
book.publisher = 'JS Press';
book['ISBN'] = '978-1234567890';
console.log('\nAfter adding properties:', book);
delete book.genre;
console.log('\nAfter deleting genre:', book);
console.log('\nHas author?', 'author' in book);
console.log('Has genre?', 'genre' in book);
console.log('Own property toString?', book.hasOwnProperty('toString'));
