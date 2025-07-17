# 🗄️ MongoDB Compass Setup Guide

## Step 1: Create MongoDB Atlas Account
1. **Click "CREATE FREE CLUSTER"** in Compass
2. **Or visit**: [mongodb.com/atlas](https://mongodb.com/atlas)
3. **Sign up** with email (no credit card required)

## Step 2: Create Free Cluster
1. **Choose "FREE" tier** (M0)
2. **Select cloud provider** (AWS/Google Cloud/Azure)
3. **Pick region** (closest to you)
4. **Click "Create"** (takes 2-3 minutes)

## Step 3: Get Connection String
1. **Click "Connect"** on your cluster
2. **Choose "Connect your application"**
3. **Select "Node.js"** driver
4. **Copy the connection string**

## Step 4: Connect in Compass
1. **Click "Add new connection"** in Compass
2. **Paste connection string**
3. **Replace `<password>`** with your password
4. **Click "Connect"**

## Step 5: Create .env File
Create `.env` file in `server/` directory:

```
# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/sentiment-dashboard?retryWrites=true&w=majority

# JWT Secret (generate with: node generate-secret.js)
JWT_SECRET=your-generated-secret-key-here

# Server Port
PORT=5000
```

## Step 6: Test Connection
1. **Start your server**: `npm start`
2. **Check Compass** - you should see your database
3. **Test API**: Visit `http://localhost:5000`

## 🎯 What You'll See in Compass
- **sentiment-dashboard** database
- **users** collection (after first registration)
- **trades** collection (after first trade)
- **wallets** collection (user wallet data)

## ✅ Success Indicators
- ✅ Compass shows your cluster
- ✅ Server starts without MongoDB errors
- ✅ API endpoints respond correctly
- ✅ Database collections appear in Compass 