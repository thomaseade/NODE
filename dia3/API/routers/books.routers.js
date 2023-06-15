const express = require('express');
const router = express.Router();
const Book = require('../models/books');
const booksController = require('../controller/books.controller');



router.get('/books', booksController.getBooks);

router.post('/books', booksController.addBook);

router.put('/books', booksController.updateBook);

router.delete('/books', booksController.deleteBook);

module.exports = router;