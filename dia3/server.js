const express = require('express');
const app = express();
const PORT = 3000;



app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


app.use((req, res, next) => {
  console.log("Petición recibida del cliente");
  next();
});


app.use((req, res, next) => {
  console.log(`URL: ${req.url}`);
  console.log(`Método: ${req.method}`);
  console.log(`User-Agent: ${req.get("User-Agent")}`);
  next();
});


app.get('/', (req, res) => {
  res.status(200).json({ ok: true, message: "Recibido!" });
});


app.get('/bye', (req, res) => {
  res.status(200).json({ ok: true, message: "Adios!" });
});
