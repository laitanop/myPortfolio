import fs from "fs";
import dotenv from "dotenv";

// Load .env variables
const env = dotenv.config().parsed;

// Convert .env to a JS file
const envJS = `
window.env = ${JSON.stringify(env, null, 2)};
`;

// Write to env.js in the correct location
fs.writeFileSync("../env.js", envJS); // Adjust relative path if needed
console.log("env.js generated successfully!");
