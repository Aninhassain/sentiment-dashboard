const User = require('../models/User');

// Get user's wallets
const getUserWallets = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.wallets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add funds to wallet
const addFunds = async (req, res) => {
  try {
    const { amount, walletType = 'virtual' } = req.body;
    
    const user = await User.findById(req.user.id);
    const wallet = user.wallets.find(w => w.type === walletType);
    
    if (!wallet) {
      return res.status(400).json({ message: 'Wallet not found' });
    }

    wallet.balance += amount;
    await user.save();

    res.json(wallet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new wallet
const createWallet = async (req, res) => {
  try {
    const { type, currency = 'USD', initialBalance = 0 } = req.body;
    
    const user = await User.findById(req.user.id);
    
    // Check if wallet type already exists
    const existingWallet = user.wallets.find(w => w.type === type);
    if (existingWallet) {
      return res.status(400).json({ message: 'Wallet type already exists' });
    }

    const newWallet = {
      type,
      balance: initialBalance,
      currency,
      transactions: []
    };

    user.wallets.push(newWallet);
    await user.save();

    res.status(201).json(newWallet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUserWallets,
  addFunds,
  createWallet
}; 