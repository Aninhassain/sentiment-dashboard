const Trade = require('../models/Trade');
const User = require('../models/User');

// Get user's trades
const getUserTrades = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user.id })
      .sort({ createdAt: -1 });
    res.json(trades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new trade
const createTrade = async (req, res) => {
  try {
    const { symbol, type, amount, price, walletType = 'virtual' } = req.body;

    // Find user's wallet
    const user = await User.findById(req.user.id);
    const wallet = user.wallets.find(w => w.type === walletType);
    
    if (!wallet) {
      return res.status(400).json({ message: 'Wallet not found' });
    }

    // Check if user has enough balance
    const totalCost = amount * price;
    if (wallet.balance < totalCost) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // Create trade
    const trade = new Trade({
      user: req.user.id,
      symbol,
      type,
      amount,
      price,
      total: totalCost,
      walletType,
      status: 'completed'
    });

    await trade.save();

    // Update wallet balance
    wallet.balance -= totalCost;
    wallet.transactions.push(trade._id);
    await user.save();

    res.status(201).json(trade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get trade statistics
const getTradeStats = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user.id });
    
    const stats = {
      totalTrades: trades.length,
      totalVolume: trades.reduce((sum, trade) => sum + trade.total, 0),
      buyTrades: trades.filter(trade => trade.type === 'buy').length,
      sellTrades: trades.filter(trade => trade.type === 'sell').length,
      averagePrice: trades.length > 0 ? 
        trades.reduce((sum, trade) => sum + trade.price, 0) / trades.length : 0
    };

    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUserTrades,
  createTrade,
  getTradeStats
}; 