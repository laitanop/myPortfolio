// server.mjs
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const server = createServer(async (req, res) => {
  try {
    // Serve the index.html file for all requests
    const filePath = join(process.cwd(), "public", "index.html");
    const fileContent = await readFile(filePath, "utf-8");

    // Set headers and send the content
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fileContent);
  } catch (error) {
    // Handle errors and send a 404 response
    console.error("Error reading file:", error.message);

    if (!res.headersSent) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404: File Not Found");
    }
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
