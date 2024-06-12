const express = require('express');
const bodyParser = require('body-parser');
const materiaRoutes = require('./routes/materiaRoutes'); 
const carreraRoutes = require('./routes/carreraRoutes'); 

const app = express();
app.use(bodyParser.json());

const carreraController = require('./controllers/carreraController');
const materiaController = require('./controllers/materiaController');

// Ruta para obtener todas las carreras
app.get('/api/carreras', carreraController.getAllCarreras);

// Ruta para obtener una carrera por su ID
app.get('/api/carreras/:id', carreraController.getCarreraById);

app.use('/api', carreraRoutes);
app.use('/api', materiaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
