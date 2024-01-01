const mysql = require('mysql');


const connectionPool = mysql.createPool({
    connectionLimit : 50,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});
module.exports=connectionPool;