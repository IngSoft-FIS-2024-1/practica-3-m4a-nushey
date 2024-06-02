class Book {
  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getPages() {
    return this.pages;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error();
    }
    author = author.trim();
    this.author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' && !isNaN(pages)) {
      throw new Error();
    }
    if (pages < 1) {
      throw new Error();
    }
    pages = Math.trunc(pages);
    this.pages = pages;
  }
}

export default Book;
