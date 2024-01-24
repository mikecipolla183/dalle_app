import mongoose from 'mongoose';

// Establishes connection to MongoDB Database and notifies the status in the console.
const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}

export default connectDB;