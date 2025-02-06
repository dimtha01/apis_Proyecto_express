const db = require('../config/db');

// Obtener todos los clientes
exports.getClientes = (req, res) => {
  const query = `
        SELECT c.id, c.nombre, c.nombre_comercial, c.rif, c.direccion_fiscal, c.pais, 
               e.nombre AS estado, u.nombre AS unidad_negocio
        FROM cliente c
        JOIN estados_venezuela e ON c.estado_id = e.id
        JOIN unidad_negocio u ON c.unidad_negocio_id = u.id
    `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener clientes:", err);
      return res.status(500).json({ error: "Error al obtener clientes" });
    }
    res.json(results);
  });
};

exports.createCliente = (req, res) => {
  const { nombre, nombre_comercial, rif, direccion_fiscal, pais, estado_id, unidad_negocio_id } = req.body;

  if (!nombre || !rif || !direccion_fiscal || !estado_id || !unidad_negocio_id) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const queryCheckRif = "SELECT * FROM cliente WHERE rif = ?";
  db.query(queryCheckRif, [rif], (err, result) => {
      if (err) {
          console.error("Error al verificar el RIF:", err);
          return res.status(500).json({ error: "Error al verificar el RIF" });
      }
      if (result.length > 0) {
          return res.status(400).json({ error: "El RIF ya existe en la base de datos" });
      }
  
      const query = `
          INSERT INTO cliente (nombre, nombre_comercial, rif, direccion_fiscal, pais, estado_id, unidad_negocio_id)
          VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      
      db.query(query, [nombre, nombre_comercial, rif, direccion_fiscal, pais || 'Venezuela', estado_id, unidad_negocio_id], (err, result) => {
          if (err) {
              console.error("Error al crear cliente:", err);
              return res.status(500).json({ error: "Error al crear cliente" });
          }
          res.status(201).json({ message: "Cliente creado exitosamente", id: result.insertId });
      });
  });
  
};
