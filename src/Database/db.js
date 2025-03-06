import mongoose from 'mongoose';
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

export default dbConnection; // Use `export default` in ES Modules
