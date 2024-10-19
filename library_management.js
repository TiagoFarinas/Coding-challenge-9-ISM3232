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
