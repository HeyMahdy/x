import express from 'express';
import dbConnection from './src/Database/db.js'; // Adjust this path if necessary';
import BooksRoute from './src/routes/books-routes.js'
import AuthRoute from './src/routes/auth-routes.js'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
dbConnection();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/books',BooksRoute)
app.use('/api/auth',AuthRoute)

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
