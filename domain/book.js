class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error('Titulo no es string');
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error('No se puso titulo');
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error('Autor no es string');
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error('Paginas no es un numero o no se paso como argumento');
    }
    if (pages < 1) {
      throw new Error('Paginas debe ser un valor positivo');
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if (typeof (words) !== 'number') {
      throw new Error('Words no es un numero');
    }
    if (words < 1) {
      throw new Error('Palabras debe ser mayor a 0');
    }
    words = Math.trunc(words);
    this.#words = words;
  }

  // Returns average words per page
  wordsPerPage() {
    return this.#words / this.#pages;
  }

  toString() {
    let result;
    if (isNaN(this.#words)) {
      result = `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages}`;
    } else {
      result = `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras: ${this.#words}`;
    }
    return result;
  }
}

export default Book;
