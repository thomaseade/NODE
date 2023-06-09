const express = require('express');
const cors = require('cors');
const bookRouter = require('../API/routers/book.routers');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/books', bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});