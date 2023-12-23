const dotenv = require('dotenv');

dotenv.config();
dotenv.config({ path: '.env.vault' });

console.log(process.env.A);
console.log(process.env.B);
console.log(process.env.clientSecret);