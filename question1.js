// Task 1: Constructor function with properties for title, author, pages, and availability
function Library(title, author, pages, available) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.available = available;
}

// Task 2: Method to display book information
Library.prototype.displayLib = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Availability: ${this.available ? 'Available' : 'Not Available'}`);
}

// Task 3: Create an array to store book objects
let books = [
    new Library("1984", "George Orwell", 80, true),
    new Library("The Lord of the Rings", "J.R.R. Tolkien", 200, false),
    new Library("To the Lighthouse", "Virginia Woolf", 250, true)
];

// Task 3: Function to add a new book to the library
function addBook(title, author, pages, available) {
    let newBook = new Library(title, author, pages, available);
    books.push(newBook);
}

// Task 3: Function to search books by title or author
function searchBook(query) {
    return books.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.author.toLowerCase().includes(query.toLowerCase())
    );
}

// Task 4: Function to filter books with more than 100 pages
function filterBooksByPageCount() {
    return books.filter(book => book.pages > 100);
}

// Task 4: Function to update book objects using the map method
function formatBookDetails() {
    return books.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages,
        available: book.available
    }));
}

// Task 3: Prototype method to update availability
Library.prototype.updateAvailable = function(updateAvailable) {
    this.available = updateAvailable;
};

// Testing
addBook("Brave New World", "Aldous Huxley", 300, true); // Adding a new book
console.log("Library Books:");
books.forEach(book => book.displayLib());

console.log("\nSearch Results for 'Tolkien':", searchBook("Tolkien"));

console.log("\nBooks with more than 100 pages:");
console.log(filterBooksByPageCount());

console.log("\nFormatted Book Details:");
console.log(formatBookDetails());

