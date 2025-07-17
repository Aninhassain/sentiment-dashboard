const express = require('express');
const router = express.Router();
const { getUserWallets, addFunds, createWallet } = require('../controllers/walletController');
const auth = require('../middleware/auth');

// All routes require authentication
router.use(auth);

// Get user's wallets
router.get('/', getUserWallets);

// Add funds to wallet
router.post('/add-funds', addFunds);

// Create new wallet
router.post('/', createWallet);

module.exports = router; 