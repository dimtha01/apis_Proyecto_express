const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

// Ruta para obtener todos los clientes (GET)
router.get('/clientes', clienteController.getClientes);

// Ruta para crear un nuevo cliente (POST)
router.post('/clientes', clienteController.createCliente);

module.exports = router;
