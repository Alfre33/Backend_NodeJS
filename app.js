const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo seree el backend poor ahora!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});