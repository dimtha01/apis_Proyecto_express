const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const clienteRoutes = require('./routes/cliente.routes');

// Configuración de CORS para permitir solicitudes desde cualquier origen
const corsOptions = {
  origin: '*', // Permite solicitudes desde cualquier dominio
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

// Aplicar CORS globalmente
app.use(cors(corsOptions));

app.use(express.json());

// Rutas
app.use('/api', clienteRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
