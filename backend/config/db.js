import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ DB CONNECTED');
  } catch (err) {
    console.error('❌ DB CONNECTION ERROR:', err);
  }
};
