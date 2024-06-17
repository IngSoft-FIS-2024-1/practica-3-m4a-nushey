import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 1000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(1000);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350, 1000)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350, 1000)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 1, 350, 1000)).toThrow();
  });

  it('check author is Anonimo when empty', () => {
    myBook = new Book('Cuentos de la Selva', '', 350, 1000);
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', '350', 1000)).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0, 1000)).toThrow();
  });

  it('check words param is a number', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, '1000')).toThrow();
  });

  it('check words not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 0)).toThrow();
  });

  it('toString()', () => {
    expect(myBook.toString()).toBe(`Título: ${myBook.getTitle()} Autor: ${myBook.getAuthor()} Páginas: ${myBook.getPages()} Palabras: ${myBook.getWords()}`);
  });
  it('toString() is not empty', () => {
    expect(() => myBook = new Book('', '', 0, 0)).toThrow();
  });

  it('wordsPerPage()', () => {
    expect(myBook.wordsPerPage()).toBe(1000 / 350);
  });


});
