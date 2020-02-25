import dotenv from 'dotenv';

console.log('Using .env file to supply config environment variables');
dotenv.config({ path: '.env' });

export const ENVIRONMENT = process.env.NODE_ENV;

export const MONGODB_URI = process.env['MONGODB_URI'] || process.env['MONGODB_URI_LOCAL'];

if (!MONGODB_URI) {
  console.log('No mongo connection string. Set MONGODB_URI or MONGODB_URI_LOCAL environment variable.');
  process.exit(1);
}
