import mongoose from 'mongoose';
import { MONGODB_URI } from './env.js';

if (!MONGODB_URI) {
  throw new Error(
    'Define your MONGODB_URI variable inside your .env<production/development>.local'
  );
}

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_URI);
    console.log(`Database connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
