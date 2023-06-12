const express = require('express');
const cors = require('cors');

const bookRouter = require('./routers/book.routers');

const app = express();
const port = 3000;


app.use(cors());


app.use('/', bookRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});