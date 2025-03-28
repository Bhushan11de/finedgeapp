const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['stock', 'mutual_fund', 'gold', 'fd'], required: true },
  instrumentId: { type: mongoose.Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  units: Number,
  buyPrice: Number,
  currentValue: Number,
  buyDate: { type: Date, default: Date.now },
  sellDate: Date,
  status: { type: String, enum: ['active', 'sold'], default: 'active' }
});

module.exports = mongoose.model('Investment', InvestmentSchema);
