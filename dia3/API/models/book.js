class Book {
    constructor(id_book = 0, id_user = 0, title, type, author, price, photo) {
      this.id_book = id_book;
      this.id_user = id_user;
      this.title = title;
      this.type = type;
      this.author = author;
      this.price = price;
      this.photo = photo;
    }
  }
  
  module.exports = Book;