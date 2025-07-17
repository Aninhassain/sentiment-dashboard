# 🔐 JWT Secret Key Generation Guide

## Method 1: Using the Script (Easiest)
```bash
cd server
node generate-secret.js
```

## Method 2: Online Generators
- [jwt.io](https://jwt.io) - JWT debugger and generator
- [randomkeygen.com](https://randomkeygen.com) - Secure key generator

## Method 3: Command Line
```bash
# Windows PowerShell
[System.Web.Security.Membership]::GeneratePassword(128, 0)

# Linux/Mac
openssl rand -hex 64

# Node.js
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## Method 4: Manual Generation
Create a strong key with:
- At least 64 characters
- Mix of letters, numbers, symbols
- Random and unpredictable

## Example Secret Key
```
JWT_SECRET=a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890
```

## Security Best Practices
1. **Never share** your secret key
2. **Use different keys** for development and production
3. **Store securely** in environment variables
4. **Rotate regularly** in production
5. **Minimum 64 characters** for security

## .env File Setup
```
MONGODB_URI=mongodb://localhost:27017/sentiment-dashboard
JWT_SECRET=your-generated-secret-key-here
PORT=5000
``` 