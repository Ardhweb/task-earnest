import http from "http";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Server is running!" }));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
