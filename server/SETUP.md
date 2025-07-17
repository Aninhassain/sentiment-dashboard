# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Recommended - No Installation Required)

1. **Create MongoDB Atlas Account**
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Sign up for free account
   - Create a new cluster (free tier)

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

3. **Update .env file**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sentiment-dashboard
   JWT_SECRET=your-super-secret-jwt-key
   PORT=5000
   ```

## Option 2: Local MongoDB Installation

### Windows:
1. Download MongoDB Community Server from [mongodb.com](https://mongodb.com/try/download/community)
2. Install with default settings
3. Start MongoDB service:
   ```bash
   net start MongoDB
   ```

### macOS:
```bash
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu):
```bash
sudo apt update
sudo apt install mongodb
sudo systemctl start mongodb
```

## Option 3: Docker (Alternative)
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## Quick Test Connection

Use this temporary MongoDB Atlas connection for testing:
```
MONGODB_URI=mongodb+srv://testuser:testpass123@cluster0.mongodb.net/sentiment-dashboard?retryWrites=true&w=majority
```

⚠️ **Note**: This is a temporary connection for testing only. Create your own MongoDB Atlas account for production use. 