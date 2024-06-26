import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
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
    myBook.setWords(1000);
    expect(myBook.getWords()).toBe(1000);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 1, 350)).toThrow();
  });

  it('check author is Anonimo when empty', () => {
    myBook = new Book('Cuentos de la Selva', '', 350);
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', '350')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0)).toThrow();
  });
  it('check words is a number', () => {
    expect(() => myBook.setWords('a')).toThrow();
  });
  it('check words is not < 1', () => {
    expect(() => myBook.setWords(0)).toThrow();
  });
  it('toString() if words is undefined', () => {
    expect(myBook.toString()).toBe(`Título: ${myBook.getTitle()} Autor: ${myBook.getAuthor()} Páginas: ${myBook.getPages()}`);
  });
  it('toString() if words is defined', () => {
    myBook.setWords(1000);
    expect(myBook.toString()).toBe(`Título: ${myBook.getTitle()} Autor: ${myBook.getAuthor()} Páginas: ${myBook.getPages()} Palabras: ${myBook.getWords()}`);
  });
  it('toString() is not empty', () => {
    expect(() => myBook = new Book('', '', 0, 0)).toThrow();
  });

  it('wordsPerPage()', () => {
    myBook.setWords(35000);
    expect(myBook.wordsPerPage()).toBe(100);
  });


});
