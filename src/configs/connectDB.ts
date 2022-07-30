import mongoose from 'mongoose';
import logEvents from '../helpers/logEvents';
const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      autoIndex: false,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('Connected to database successfully');
  } catch (error) {
    await logEvents(error.message, module.filename);
    console.log('Connected to database failed');
    process.exit(1);
  }
};
process.on('SIGINT', async () => {
  console.log('Killed server');
  await mongoose.connection.close();
  process.exit(0);
});
export default connectDB;
