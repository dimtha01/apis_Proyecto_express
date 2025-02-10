const db = require('../config/db');

// Obtener todos los clientes
exports.getClientes = (req, res) => {
  const query = `
       SELECT 
    c.id, 
    c.nombre, 
    c.email, 
    c.telefono, 
    c.direccion, 
    c.unidad_negocio, 
    c.razon_social, 
    c.nombre_comercial, 
    r.nombre AS region
FROM clientes c
LEFT JOIN regiones r ON c.id_region = r.id;

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
