import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words) {
    const newBook = new Book(title, author, pages);
    // Aqui se contempla que el usuario no haya cargado words.
    if (words !== '') {
      newBook.setWords(words);
    }
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    this.#totalWords = 0;
    this.#inventory.forEach(book => {
      if(!isNaN(book.getWords())) this.#totalWords += book.getWords();
    });
    return this.#totalWords;
  }
}

export default Library;
