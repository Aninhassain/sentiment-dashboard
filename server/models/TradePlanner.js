const mongoose = require('mongoose');

const tradePlannerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trades: [
    {
      asset: String,
      type: { type: String, enum: ['buy', 'sell'] },
      amount: Number,
      targetPrice: Number,
      notes: String,
      status: { type: String, enum: ['planned', 'executed', 'cancelled'], default: 'planned' },
      createdAt: { type: Date, default: Date.now },
    }
  ],
});

module.exports = mongoose.model('TradePlanner', tradePlannerSchema); 