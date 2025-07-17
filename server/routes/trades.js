const express = require('express');
const router = express.Router();
const { getUserTrades, createTrade, getTradeStats } = require('../controllers/tradeController');
const auth = require('../middleware/auth');

// All routes require authentication
router.use(auth);

// Get user's trades
router.get('/', getUserTrades);

// Create new trade
router.post('/', createTrade);

// Get trade statistics
router.get('/stats', getTradeStats);

module.exports = router; 