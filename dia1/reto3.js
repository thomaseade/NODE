const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Ingrese el valor de "name": ', function(name) {
  rl.question('Ingrese el valor de "surname": ', function(surname) {
    rl.question('Ingrese el valor de "age": ', function(age) {
      rl.close();

     
      let objeto = {
        name,
        surname,
        age: parseInt(age)
      };

      
      let objetoJSON = JSON.stringify(objeto);

      



      fs.writeFile('objeto.json', objetoJSON, 'utf8', function(err) {
        if (err) {
          console.error('Error al guardar el archivo:', err);
          return;
        }
        console.log('Objeto.json ha sido guardado correctamente.');

       



        fs.readFile('objeto.json', 'utf8', function(err, data) {
          if (err) {
            console.error('Error al leer el archivo:', err);
            return;
          }
          let objetoLeido = JSON.parse(data);
          console.log('Contenido del archivo:', objetoLeido);
        });
      });
    });
  });
});