const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
db.getConnection((err, connection) => {
    if (err) {
        console.error("Error de conexión a MySQL:", err);
        return;
    }
    console.log("Conectado a la base de datos MySQL");
    connection.release();
});
module.exports = db;
