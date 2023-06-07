const cors = require('cors');
app.use(cors());



const bookRouter = require('./routers/book.routers');
app.use(bookRouter);



module.exports = app;