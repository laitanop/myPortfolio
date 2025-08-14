// import { createServer } from "node:http";
// import { readFile } from "node:fs/promises";
// import { join, extname } from "node:path";

// const server = createServer(async (req, res) => {
//   try {
//     const basePath = join(process.cwd(), "public");
//     if (req.url.startsWith("/.well-known")) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("404: File Not Found");
//       return;
//     }
//     const filePath =
//       req.url === "/" ? join(basePath, "index.html") : join(basePath, req.url);

//     const ext = extname(filePath);
//     const contentType =
//       {
//         ".html": "text/html",
//         ".css": "text/css",
//         ".js": "application/javascript",
//         ".json": "application/json",
//         ".png": "image/png",
//         ".jpg": "image/jpeg",
//         ".gif": "image/gif",
//         ".svg": "image/svg+xml",
//       }[ext] || "text/plain";

//     const fileContent = await readFile(filePath);
//     res.writeHead(200, { "Content-Type": contentType });
//     res.end(fileContent);
//   } catch (error) {
//     console.error("Error reading file:", error.message);

//     if (!res.headersSent) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("404: File Not Found");
//     }
//   }
// });

// const PORT = 3000;
// server.listen(PORT, "127.0.0.1", () => {
//   console.log(`Server running at http://127.0.0.1:${PORT}`);
// });

import express from "express";
const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.use("/blog-template", express.static("blog-template/public"));

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
});
