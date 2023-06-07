const express = require('express');
const router = express.Router();


router.get('/book', (req, res) => {
  
  res.send('Obtener libro');
});


router.post('/book', (req, res) => {
 
  res.send('Crear libro');
});


router.put('/book', (req, res) => {
 
  res.send('Modificar libro');
});

router.delete('/book', (req, res) => {

  res.send('Eliminar libro');
});

module.exports = router;