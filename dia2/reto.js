const fs = require('fs/promises');
const readline = require('readline');

function pregunta(pregunta) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      rl.close();
    });
  });
}

async function main() {
  try {
   
    const name = await pregunta('Ingrese el valor de "name": ');
    const surname = await pregunta('Ingrese el valor de "surname": ');
    const age = await pregunta('Ingrese el valor de "age": ');

    const objeto = {
      name,
      surname,
      age: parseInt(age)
    };

    const objetoJSON = JSON.stringify(objeto);
    await fs.writeFile('objeto.json', objetoJSON, 'utf8');
    console.log('El archivo objeto.json ha sido guardado correctamente.');

  
    const data = await fs.readFile('objeto.json', 'utf8');
    const objetoLeido = JSON.parse(data);
    console.log('Contenido del archivo:', objetoLeido);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();