const Book = require('../models/books');



let books = [
    new Book(1, 1, "Codenotch", "Terror", "Thomas", 9.99, "photo.jpg"),
    new Book(2, 2, "Codenotch2", "Accion", "Dani", 14.99, "photo2.jpg"),
    new Book(3, 3, "Codenotch3", "Misterio", "Menchu", 12.99, "photo3.jpg"),
  ];


const getBooks = (req, res) => {
  
  let respuesta 

  if (books != null )  {
    
    if (req.query.id != undefined ){
    
      for (let index = 0; index < books.length; index++) {
        
        if (req.query.id == books[index].id ) {

          respuesta = books[index];
        }
       }
    } else {
       respuesta = books;
    }
    
  } else {
  respuesta = "no hay libros"
  }
res.send(respuesta);


};





const addBook = (req, res) => {
  const { id, id_user, title, type, author, price, photo } = req.body;
  const newBook = new Book(id, id_user, title, type, author, price, photo);
  books.push(newBook);
  res.send("libro añadido");
};
 

const updateBook = (req, res) => {
  const { id, id_user, title, type, author, price, photo } = req.body;

  for (let index = 0; index < books.length; index++) {
        
    if ( id == books[index].id ) {

      books[index].id_user = id_user;
      books[index].title = title;
      books[index].type = type;
      books[index].author = author;
      books[index].price = price;
      books[index].photo = photo;

    }
  }
  res.send("libro actualizado correctamente");

};
 

  const deleteBook = (req, res) => {
   
    for (let index = 0; index < books.length; index++) {

      if (req.body.id_book == books[index].id) {
     console.log("frase")
        books.splice(index,1);

      }
    }

  res.send({mensaje: "libro borrado"});

  };


module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook
  };