const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['real', 'virtual'], required: true },
  balance: { type: Number, default: 0 },
  currency: { type: String, default: 'USD' },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trade' }],
});

module.exports = mongoose.model('Wallet', walletSchema); 