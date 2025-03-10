import mongoose from 'mongoose';
import pkg from 'pg';
const {Pool} = pkg;
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const dbConnection = async () => {
    try {
        console.log(`Connecting to: ${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`);

        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`);

        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Error connecting to database:', error);
    }
};



const dbParams = {
    user: 'mahdy',  // Your username from the URL
    host: 'dpg-cv7i4utds78s73963bng-a.oregon-postgres.render.com',  // Host URL from the URL
    database: 'x_g8di',  // The database name from the URL
    password: 'US6Sg8hu00Z4P1VAjihjjQRB9cRCpCkD',  // The password from the URL
    port: 5432,  // Default PostgreSQL port
    ssl: {
      rejectUnauthorized: false,  // Disable SSL certificate verification
    },
    connectionTimeoutMillis: 5000,  // Timeout after 5 seconds
    idleTimeoutMillis: 10000,  // Timeout for idle connections after 10 seconds
  };
  
  const Man_dbConnection = new Pool(dbParams);
  
  // Test PostgreSQL connection
  Man_dbConnection.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('❌ Error executing query:', err.stack);
    } else {
      console.log('✅ Database connected:', res.rows[0]);
    }
  });
  
  export { Man_dbConnection, dbConnection };


