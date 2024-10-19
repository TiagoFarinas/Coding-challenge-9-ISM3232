//Task 1- Create a Book Class
class Book {
    #title;
    #author;
    #ISBN;
    #_isAvailable;
    constructor(title, author, ISBN) {
        this.#title = title;
        this.#author = author;
        this.#ISBN = ISBN;
        this.#_isAvailable = true} 
    // Getter for details
    getDetails() {
        return `${this.#title}, by ${this.#author} (ISBN: ${this.#ISBN})`}
    // Getter for availability status
    get isAvailable() {
        return this.#_isAvailable}
    set isAvailable(status) {
        if (typeof status === 'boolean') {
            this.#_isAvailable = status;
        } else {
            console.error("Availability must be a boolean value.")}}};

//Task 2 - Create a Section Clas
class Library {
    #books;
    constructor() {
        this.#books = []};  // Initialize array to store books
    // Getter to get the current list of books
    get books() {
        return this.#books};
    // Add book to library, only add if it's not there
    addBook(newBook) {
        if (this.#books.some(book => book.ISBN === newBook.ISBN)) {
            console.error(`Book with ISBN ${newBook.ISBN} already exists in the library.`);
        } else {
            this.#books.push(newBook);
            console.log(`Book "${newBook.title}" added to the library.`)}};
    findBook(ISBN) {// Find a book by ISBN
        const foundBook = this.#books.find(book => book.ISBN === ISBN);
        if (foundBook) {
            return foundBook;
        } else {
            console.error(`Book with ISBN ${ISBN} not found.`);
            return null}};
    removeBook(ISBN) { // Remove a book by ISBN 
        const bookIndex = this.#books.findIndex(book => book.ISBN === ISBN);       
        if (bookIndex !== -1) {
            const removedBook = this.#books[bookIndex];
            this.#books = this.#books.filter(book => book.ISBN !== ISBN);
            console.log(`Book "${removedBook.title}" removed from the library.`);
        } else {
            console.error(`Book with ISBN ${ISBN} not found, so it cannot be removed.`)}}};

//Task 3 - Create a Patron Class

class LibrarySection {
    #sectionName;
    #books;
    constructor(sectionName) {
        this.#sectionName = sectionName;
        this.#books = []}; // Initialize an empty array to store books
        // Getter for the section name
    get sectionName() {
        return this.#sectionName};
    // Add a book to the section
    addBookToSection(book) {
        if (this.#books.some(b => b.ISBN === book.ISBN)) {
            console.error(`Book with ISBN ${book.ISBN} already exists in section ${this.#sectionName}.`);
            return false;  // Return false if book already exists
        } else {
            this.#books.push(book);
            console.log(`Book "${book.title}" added to section ${this.#sectionName}.`);
            return true}};//Return true if book was added
    // Remove book from section by ISBN
    removeBookFromSection(ISBN) {
        const initialLength = this.#books.length;
        this.#books = this.#books.filter(book => book.ISBN !== ISBN);// Filter books with given ISBN and update books array
        if (this.#books.length < initialLength) {
            console.log(`Book with ISBN ${ISBN} removed from section ${this.#sectionName}.`);
            return true;  // Return true if book was removed
        } else {
            console.error(`Book with ISBN ${ISBN} not found in section ${this.#sectionName}.`);
            return false}} // Return false if book wasn't found
    listBooksInSection() {// List all books in section
        if (this.#books.length === 0) {
            console.log(`No books found in section ${this.#sectionName}.`);
        } else {
            console.log(`Books in section ${this.#sectionName}:`);
            this.#books.forEach(book => console.log(`- ${book.title} (ISBN: ${book.ISBN})`))}}};