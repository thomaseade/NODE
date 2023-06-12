const Book = require('../models/book');


let book = new Book(1, 1, "Codenotch", "Terror", "Thomas", 9.99, "photo.jpg");


const getBook = (req, res) => {
  res.json(book);
};

const addBook = (req, res) => {

  const { id_book, id_user, title, type, author, price, photo } = req.body;
 
  book = new Book(id_book, id_user, title, type, author, price, photo);


  res.json(book);
};


const updateBook = (req, res) => {

  const { id_book, id_user, title, type, author, price, photo } = req.body;

  book.id_book = id_book;
  book.id_user = id_user;
  book.title = title;
  book.type = type;
  book.author = author;
  book.price = price;
  book.photo = photo;


  res.json(book);
};


const deleteBook = (req, res) => {

  book = null;

 
  res.send('Libro eliminado');
};


module.exports = {
  getBook,
  addBook,
  updateBook,
  deleteBook
};