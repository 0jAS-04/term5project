import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from the backend directory
const envPath = path.resolve(__dirname, '../../.env');
console.log("Looking for .env at:", envPath);

// Check if file exists
if (fs.existsSync(envPath)) {
  console.log("File exists, reading content:");
  const content = fs.readFileSync(envPath, 'utf8');
  console.log("File content:", content);
} else {
  console.log("File does not exist!");
}

const result = dotenv.config({ path: envPath, debug: true });
console.log("Dotenv result:", result);

console.log("Environment variables loaded:");
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("CLERK_PUBLISHABLE_KEY:", process.env.CLERK_PUBLISHABLE_KEY);
console.log("STREAM_API_KEY:", process.env.STREAM_API_KEY);

export const ENV = {
  PORT: process.env.PORT || 5001,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
  SENTRY_DSN: process.env.SENTRY_DSN,
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  CLIENT_URL: process.env.CLIENT_URL,
};