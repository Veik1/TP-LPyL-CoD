const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('../models');
const materiaRoutes = require('./routes/materia.routes');
const carreraRoutes = require('./routes/carrera.routes');

const app = express();

app.use(bodyParser.json());

sequelize.sync({ force: true }).then(() => {
  console.log('¡DING DING DING, La base de datos ha sido sincronizada!');
}).catch(error => {
  console.error('Error al sincronizar la base de datos:', error);
});


app.use(carreraRoutes);
app.use(materiaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
