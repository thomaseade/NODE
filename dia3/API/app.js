const express = require('express');
const cors = require('cors');
const Book = require('./models/book');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let books = [
    {
        id: 1,
        title: 'Codenotch',
        author: 'Dani',
        genre: 'Terror',
        price: 9.99,
        imageUrl: 'foto.jpg'
      },
      {
        id: 2,
        title: 'Casa',
        author: 'Pepe',
        genre: 'Miedito',
        price: 14.99,
        imageUrl: 'fotito.jgp'
      },
];

app.get('/books', (req, res) => {
  const { id } = req.query;

  if (id) {
    const book = books.find((book) => book.id === parseInt(id));

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } else {
    res.json(books);
  }
});

app.post('/books', (req, res) => {
  const { id, title, author } = req.body;

  const existingBook = books.find((book) => book.id === parseInt(id));

  if (existingBook) {
    res.status(400).json({ message: 'Book already exists' });
  } else {
    const newBook = new Book(id, title, author);
    books.push(newBook);
    res.status(201).json({ message: 'Book created successfully' });
  }
});

app.put('/books', (req, res) => {
  const { id, title, author } = req.body;

  const book = books.find((book) => book.id === parseInt(id));

  if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    res.json({ message: 'Book updated successfully' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.delete('/books', (req, res) => {
    const { id } = req.query;
  
    books = books.filter((book) => book.id !== id);
  
    res.json({ message: 'Book deleted successfully' });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});