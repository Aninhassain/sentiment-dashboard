const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  type: { type: String, enum: ['real', 'virtual'], required: true },
  balance: { type: Number, default: 0 },
  currency: { type: String, default: 'USD' },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trade' }],
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
  },
  settings: { type: mongoose.Schema.Types.ObjectId, ref: 'Settings' },
  wallets: [walletSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema); 