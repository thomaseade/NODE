const Book = require('../models/book');


const book = new Book(1, 1, 'El Gran Gatsby', 'Novela', 'F. Scott Fitzgerald', 9.99, 'photo.jpg');

const getBook = (req, res) => {
  res.json(book);
};


const addBook = (req, res) => {

  res.send('Nuevo libro creado');
};


const updateBook = (req, res) => {

};


const deleteBook = (req, res) => {

  res.send('Libro eliminado');
};


module.exports = {
  getBook,
  addBook,
  updateBook,
  deleteBook
};