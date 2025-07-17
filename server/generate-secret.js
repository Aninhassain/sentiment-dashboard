const crypto = require('crypto');

// Generate a secure random secret key
const secretKey = crypto.randomBytes(64).toString('hex');

console.log('🔐 Generated JWT Secret Key:');
console.log('='.repeat(50));
console.log(secretKey);
console.log('='.repeat(50));
console.log('\n📝 Add this to your .env file:');
console.log(`JWT_SECRET=${secretKey}`);
console.log('\n⚠️  Keep this secret key secure and never share it!'); 