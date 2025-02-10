const mysql = require('mysql2');
require('dotenv').config();

// Crear un pool de conexiones con MySQL
const db = mysql.createPool({
    host: process.env.DB_HOST,       // Host proporcionado por Railway (ejemplo: junction.proxy.rlwy.net)
    user: process.env.DB_USER,       // Usuario de la base de datos (ejemplo: root)
    password: process.env.DB_PASS,   // Contraseña de la base de datos
    database: process.env.DB_NAME,   // Nombre de la base de datos (ejemplo: railway)
    port: parseInt(process.env.PORT, 10), // Puerto personalizado proporcionado por Railway (ejemplo: 43411)
    ssl: {
        rejectUnauthorized: true     // Habilitar SSL para conexiones seguras
    }
});

// Probar la conexión
db.getConnection((err, connection) => {
    if (err) {
        console.error("Error de conexión a MySQL:", err);
        return;
    }
    console.log("Conectado a la base de datos MySQL");
    connection.release(); // Liberar la conexión al pool
});

module.exports = db;