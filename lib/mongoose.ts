import mongoose from 'mongoose';

let isConnected = false; // Check if mongoose is connected 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    // Assuming the MONGODB_URL check is moved outside or handled differently
    if (!process.env.MONGODB_URL) {
        const errorMsg = 'MONGODB_URL not found';
        console.error(errorMsg);
        throw new Error(errorMsg); // Throw an error to ensure the calling code is aware of the failure
    }
    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true; 
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error); // Log the actual error
        throw error; // Re-throw or handle the error appropriately
    }
};


