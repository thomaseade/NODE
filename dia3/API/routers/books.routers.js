const express = require('express');
const router = express.Router();
const Book = require('../models/books');
const booksController = require('../controller/books.controller');



router.get('/books', booksController.getBooks);

router.get('/books/:id', booksController.getBookById);

router.post('/books', booksController.addBook);

router.put('/books/:id', booksController.updateBook);

router.delete('/books/:id', booksController.deleteBook);

module.exports = router;