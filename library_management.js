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