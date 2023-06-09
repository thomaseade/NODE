const Book = require('../models/book');


const getAllBooks = (req, res) => {

  const books = Book.getAllBooks();

  res.json(books);
};


const getBookById = (req, res) => {
  const { id } = req.params;


  const book = Book.getBookById(id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'No book found' });
  }
};

const addBook = (req, res) => {
  const { id, title, author } = req.body;


  const book = new Book(id, title, author);


  Book.addBook(book);

  res.status(201).json({ message: 'Book created successfully' });
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;


  const updated = Book.updateBook(id, title, author);

  if (updated) {
    res.json({ message: 'Book updated successfully' });
  } else {
    res.status(404).json({ message: 'No book found' });
  }
};

const deleteBook = (req, res) => {
  const { id } = req.params;


  const deleted = Book.deleteBook(id);

  if (deleted) {
    res.json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ message: 'No book found' });
  }
};

module.exports = { getAllBooks, getBookById,addBook,updateBook,deleteBook,};