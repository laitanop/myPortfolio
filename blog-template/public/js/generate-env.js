import fs from "fs";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const envJS = `
window.env = ${JSON.stringify(env, null, 2)};
`;

fs.writeFileSync("../env.js", envJS);
