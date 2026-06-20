class Book {
  constructor(title, author, year, available = true) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = available;
  }
}

class Library {
  constructor() {
    this.books = {};
  }

  addBooks(...books) {
    books.forEach((book) => {
      this.books[book.title] = book;
    });
  }

  getBook(title) {
    return this.books[title];
  }

  borrowBook(title) {
    const book = this.getBook(title);
    book.available = false;
    return book;
  }

  getAvailableBooks() {
    return Object.values(this.books).filter((book) => book.available);
  }
}
