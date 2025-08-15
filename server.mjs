import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

// Create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use("/", express.static(path.join(__dirname, "public")));

// Serve static files from the "blog-template/public" directory
app.use(
  "/blog-template",
  express.static(path.join(__dirname, "blog-template/public"))
);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
});
