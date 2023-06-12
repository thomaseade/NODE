const express = require('express');
const cors = require('cors');
const errorHandling = require('../src/error/errorHandling');

const bookRouter = require('./routers/book.routers');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', bookRouter);

app.use(function (req, res, next) {
    res.status(404).json({
      error: true,
      codigo: 404,
      message: "Endpoint not found"
    });
  });

  app.use(errorHandling);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;