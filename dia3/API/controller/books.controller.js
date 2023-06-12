const Book = require('../models/books');



let books = [
    new Book(1, 1, "Codenotch", "Terror", "Thomas", 9.99, "photo.jpg"),
    new Book(2, 2, "Codenotch2", "Accion", "Dani", 14.99, "photo2.jpg"),
    new Book(3, 3, "Codenotch3", "Misterio", "Menchu", 12.99, "photo3.jpg"),
  ];


const getBooks = (req, res) => {
  res.json(books);
};




const getBookById = (req, res) => {
    const { id } = req.params;
    const book = books.find(book => book.id_book === parseInt(id));
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: true, message: "Book not found" });
    }
  };



const addBook = (req, res) => {
  const { id_book, id_user, title, type, author, price, photo } = req.body;
  const newBook = new Book(id_book, id_user, title, type, author, price, photo);
  books.push(newBook);
  res.json(newBook);
};
 



const updateBook = (req, res) => {
    const { id } = req.params;
    const { id_book, id_user, title, type, author, price, photo } = req.body;
    const bookIndex = books.findIndex(book => book.id_book === parseInt(id));
    if (bookIndex !== -1) {
      const updatedBook = new Book(id_book, id_user, title, type, author, price, photo);
      books[bookIndex] = updatedBook;
      res.json(updatedBook);
    } else {
      res.status(404).json({ error: true, message: "Book not found" });
    }
  };
  


const deleteBook = (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex(book => book.id_book === parseInt(id));
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1);
      res.send('Book deleted');
    } else {
      res.status(404).json({ error: true, message: "Book not found" });
    }
  };



module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
  };