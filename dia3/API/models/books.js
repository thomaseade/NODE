class Book {
    constructor(id = 0, id_user = 0, title, type, author, price, photo) {
      this.id = id;
      this.id_user = id_user;
      this.title = title;
      this.type = type;
      this.author = author;
      this.price = price;
      this.photo = photo;
    }
  }
  
  module.exports = Book;