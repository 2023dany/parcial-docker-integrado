const express = require('express');
const app = express();
const PORT = 3000;

const datos = {
  nombre: 'Daniel Eli Magaña Ávila',
  expediente: '25394',
  codigo: 'ma21i04001',
  materia: 'Implantación de Sistemas'
};

app.get('/', (req, res) => {
  res.json(datos);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
