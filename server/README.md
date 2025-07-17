# Sentiment Dashboard Backend

A user-specific backend API for the Sentiment Dashboard application with authentication, trading, and wallet management.

## Features

- **User Authentication**: Register, login, and JWT-based authentication
- **User-Specific Data**: All data is tied to authenticated users
- **Trading System**: Create and manage trades with virtual/real wallets
- **Wallet Management**: Multiple wallet types with balance tracking
- **Trade Statistics**: User-specific trading analytics

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the server directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/sentiment-dashboard
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=5000
   ```

3. **Database Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update MONGODB_URI in .env file

4. **Run the Server**
   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Trades (Protected)
- `GET /api/trades` - Get user's trades
- `POST /api/trades` - Create new trade
- `GET /api/trades/stats` - Get trade statistics

### Wallets (Protected)
- `GET /api/wallets` - Get user's wallets
- `POST /api/wallets/add-funds` - Add funds to wallet
- `POST /api/wallets` - Create new wallet

## Authentication

All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## User-Specific Features

1. **Isolated Data**: Each user only sees their own trades, wallets, and settings
2. **Multiple Wallets**: Users can have virtual and real money wallets
3. **Trade History**: Complete trading history per user
4. **Balance Tracking**: Real-time wallet balance updates
5. **Statistics**: User-specific trading analytics

## Data Models

- **User**: Email, password, profile, wallets, settings
- **Trade**: Symbol, type, amount, price, wallet type, user reference
- **Wallet**: Type, balance, currency, transactions
- **Settings**: User preferences and configurations 