const express = require('express');
const cors = require('cors');
const Book = require('./models/book');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let book = new Book(1, 1, "Harry Potter", "Fiction", "J.K. Rowling", 19.99, "harry_potter.jpg");

app.get('/book', (req, res) => {
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'No book found' });
  }
});

app.post('/book', (req, res) => {
  const { id_book, id_user, title, type, author, price, photo } = req.body;

  if (!book) {
    book = new Book(id_book, id_user, title, type, author, price, photo);
    res.status(201).json({ message: 'Book created successfully' });
  } else {
    res.status(400).json({ message: 'Book already exists' });
  }
});

app.put('/book', (req, res) => {
  const { id_book, id_user, title, type, author, price, photo } = req.body;

  if (book) {
    const updatedFields = {}; // Objeto para almacenar los campos actualizados

    if (id_book !== undefined) {
      book.id_book = id_book;
      updatedFields.id_book = id_book;
    }
    if (id_user !== undefined) {
      book.id_user = id_user;
      updatedFields.id_user = id_user;
    }
    if (title !== undefined) {
      book.title = title;
      updatedFields.title = title;
    }
    if (type !== undefined) {
      book.type = type;
      updatedFields.type = type;
    }
    if (author !== undefined) {
      book.author = author;
      updatedFields.author = author;
    }
    if (price !== undefined) {
      book.price = price;
      updatedFields.price = price;
    }
    if (photo !== undefined) {
      book.photo = photo;
      updatedFields.photo = photo;
    }

    res.json({ message: 'Book updated successfully', updatedFields });
  } else {
    res.status(404).json({ message: 'No book found' });
  }
});

app.delete('/book', (req, res) => {
  if (book) {
    book = null;
    res.json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ message: 'No book found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});