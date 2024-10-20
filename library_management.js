// Task 1 - Create a Book Class
class Book {
    #title;
    #author;
    #ISBN;
    #_isAvailable;
    constructor(title, author, ISBN) {
        this.#title = title;
        this.#author = author;
        this.#ISBN = ISBN;
        this.#_isAvailable = true}; // Default is true
    getDetails() {// Getter for details
        return `${this.#title}, by ${this.#author} (ISBN: ${this.#ISBN})`}; // Returns string with book's title, author, and ISBN
    get isAvailable() {// Getter for availability status
        return this.#_isAvailable}; // Returns the availability status
    set isAvailable(status) {
        if (typeof status === 'boolean') {
            this.#_isAvailable = status; // Sets the availability status
        } else {
            console.error("Availability must be a boolean value.")}}}; // Error if status is not boolean
// Task 2 - Create a Section Class
class Section {
    #name;
    #books;
    constructor(name) {
        this.#name = name;
        this.#books = []; // Initialize array to store books
    }; // Initialize an array to store books
    addBook(book) {// Add Book object to books array
        if (this.#books.some(b => b.ISBN === book.ISBN)) {
            console.error(`Book with ISBN ${book.ISBN} already exists in section ${this.#name}.`); // Error if book already exists
            return false; // Return false if book already exists
        } else {
            this.#books.push(book);
            console.log(`Book "${book.getDetails()}" added to section ${this.#name}.`); // Confirm book addition
            return true}}; // Return true if book was added
    //Task 5 - Handle Books Borrowing and Returning
    calculateTotalBooksAvailable() {
        const availableBooksCount = this.getAvailableBooks();
        console.log(`Total available books in section ${this.#name}: ${availableBooksCount}`);
        return availableBooksCount};
    getAvailableBooks() {// Returns  total number of available books in  section
        return this.#books.filter(book => book.isAvailable).length}; // Returns the count of available books
    // Lists all books in section, showing title and availability
    listBooks() {
        if (this.#books.length === 0) {
            console.log(`No books found in section ${this.#name}.`); // No books in section
        } else {
            console.log(`Books in section ${this.#name}:`); // Start listing books
            this.#books.forEach(book => {
                console.log(`- ${book.getDetails()} (Available: ${book.isAvailable})`)})}}}; // List books with availability
// Task 3 - Create a Patron Class
class Patron {
    #name;
    #borrowedBooks;
    constructor(name) {
        this.#name = name;
        this.#borrowedBooks = []}; // Initialize an array to store borrowed books
    borrowBook(book) { // Allows patron to borrow book if it's available
        if (book.isAvailable) {
            book.isAvailable = false; // Mark book as borrowed
            this.#borrowedBooks.push(book);
            console.log(`Patron "${this.#name}" borrowed "${book.getDetails()}".`); // Confirm borrowing
        } else {
            console.error(`"${book.getDetails()}" is not available for borrowing.`)}}; // Error if book is not available
    returnBook(book) { // Allows patron to return borrowed book
        const foundBook = this.#borrowedBooks.find(b => b === book); // Find the book in the borrowed list
        if (foundBook) {
            book.isAvailable = true; // Mark book as available
            this.#borrowedBooks = this.#borrowedBooks.filter(b => b !== book); // Filter out the returned book
            console.log(`Patron "${this.#name}" returned "${book.getDetails()}".`); // Confirm return
        } else {
            console.error(`"${book.getDetails()}" was not borrowed by "${this.#name}".`)}}}; // Error if book wasn't borrowed
// Task 4 - Create a VIPPatron Class that Inherits from Patron
class VIPPatron extends Patron { 
    #priority;
    constructor(name, priority) {
        super(name);
        this.#priority = priority}; // VIP have borrowing priority
    borrowBook(book) {// Override borrowBook method to prioritize borrowing
        if (book.isAvailable) {
            book.isAvailable = false; // Mark book as borrowed
            console.log(`VIP Patron "${this.name}" borrowed "${book.getDetails()}".`); // Confirm borrowing
        } else {
            console.error(`"${book.getDetails()}" is not available for borrowing.`)}}}; // Error if book is not available

// Task 6 - Create and Manage Sections and Patrons
// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");
// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");
// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);
// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);
// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);
// VIP patron tries to borrow the same book (has priority)
vipPatron.borrowBook(book1);
// Return the book
regularPatron.returnBook(book1);
// List books and availability
fiction.listBooks();
science.listBooks();
// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`); // Count available in Fiction
console.log(`Total available books in Science: ${science.getAvailableBooks()}`); //