import mysql2 from 'mysql2/promise';

  let connection = await mysql2.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    }) 
  export default connection;