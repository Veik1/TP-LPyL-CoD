const express = require('express');
const materiaRoutes = require('./routes/materia.routes');
const carreraRoutes = require('./routes/carrera.routes');

const app = express();

app.use(carreraRoutes);
app.use(materiaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
