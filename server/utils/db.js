const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sentiment-dashboard';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    console.log('Please make sure MongoDB is running or use MongoDB Atlas');
    // Don't exit process, let the app continue without DB for now
  }
};

module.exports = connectDB; 