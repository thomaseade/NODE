const fs = require('fs');






let objeto = {
  name: "Dani",
  surname: "Codenotch",
  age: 30
};

const objetoJSON = JSON.stringify(objeto);


fs.writeFile('objeto.json', objetoJSON, 'utf8', function(err) {
  if (err) {
    console.error('Error al guardar el archivo:', err);
    return;
  }
  console.log('El archivo objeto.json ha sido guardado correctamente.');
  






  fs.readFile('objeto.json', 'utf8', function(err, data) {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    const objetoLeido = JSON.parse(data);
    console.log('Contenido del archivo:', objetoLeido);
  });
});