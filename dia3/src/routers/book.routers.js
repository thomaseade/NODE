const express = require('express');
const router = express.Router();
const bookController = require('../controller/book.controller');


router.get('/book', bookController.getBook);


router.post('/book', bookController.addBook);


router.put('/book', bookController.updateBook);


router.delete('/book', bookController.deleteBook);

module.exports = router;