const express = require('express');
const router = express.Router();
const Book = require('../models/book');

let book = new Book(1, 1, "Harry Potter", "Fiction", "J.K. Rowling", 19.99, "harry_potter.jpg");

router.get('/', (req, res) => {
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'No book found' });
  }
});

router.post('/', (req, res) => {
  res.status(400).json({ message: 'Book creation not allowed' });
});

router.put('/', (req, res) => {
  const { id_book, id_user, title, type, author, price, photo } = req.body;

  if (book) {
    if (id_book !== undefined) book.id_book = id_book;
    if (id_user !== undefined) book.id_user = id_user;
    if (title !== undefined) book.title = title;
    if (type !== undefined) book.type = type;
    if (author !== undefined) book.author = author;
    if (price !== undefined) book.price = price;
    if (photo !== undefined) book.photo = photo;

    res.json({ message: 'Book updated successfully' });
  } else {
    res.status(404).json({ message: 'No book found' });
  }
});

router.delete('/', (req, res) => {
  if (book) {
    book = null;
    res.json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ message: 'No book found' });
  }
});

module.exports = router;