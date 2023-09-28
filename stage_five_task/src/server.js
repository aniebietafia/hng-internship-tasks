import http from "http";
import path from "path";
import app from "./app.js";
import { config } from "dotenv";
config();

// create server
const server = http.createServer(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;

// listen for requests
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
