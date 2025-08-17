import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/todo-list", express.static(path.join(__dirname, "todo-list/public")));

app.use(
  "/blog-template",
  express.static(path.join(__dirname, "blog-template/public"))
);

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
});
