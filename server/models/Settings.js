const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  general: {
    timezone: String,
    currency: String,
    autoRefresh: Boolean,
    soundAlerts: Boolean,
    defaultTimeframe: String,
    dataRetention: String,
  },
  notifications: Object,
  display: Object,
  trading: Object,
});

module.exports = mongoose.model('Settings', settingsSchema); 