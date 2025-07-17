const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (optional for development)
connectDB().catch(err => {
  console.log('MongoDB connection failed, but server will continue running');
  console.log('You can still test the basic API endpoints');
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/trades', require('./routes/trades'));
app.use('/api/wallets', require('./routes/wallets'));

// Basic routes (no database required)
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Sentiment Dashboard API!',
    status: 'Server is running',
    endpoints: {
      auth: '/api/auth',
      trades: '/api/trades',
      wallets: '/api/wallets'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 